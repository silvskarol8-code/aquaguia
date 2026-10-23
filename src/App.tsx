import { useCallback, useEffect, useRef, useState } from 'react';
import { Home } from './Home';
import { Species } from './components/Species';
import { SpeciesDetail } from './components/SpeciesDetail';
import { WaterQuality } from './components/WaterQuality';
import { Checklist } from './components/Checklist';
import { Calculadoras } from './components/Calculadoras';
import { Library } from './components/Library';
import { Favorites } from './components/Favorites';
import { About } from './About';
import { Search } from './components/Search';

export type Screen =
  | 'home'
  | 'species'
  | 'speciesDetail'
  | 'water'
  | 'calc'
  | 'checklist'
  | 'library'
  | 'favorites'
  | 'about'
  | 'search';

interface HistoryEntry {
  screen: Screen;
  detailId?: string;
}

export default function App() {
  const [history, setHistory] = useState<HistoryEntry[]>([{ screen: 'home' }]);
  const historyRef = useRef(history);
  historyRef.current = history;

  // Skip counter for popstate events triggered by programmatic history.back()
  const popstateSkipRef = useRef(0);

  const current = history[history.length - 1];
  const screen = current.screen;
  const detailId = current.detailId ?? '';

  const navigate = useCallback((next: Screen, payload?: string) => {
    setHistory((prev) => {
      if (next === 'speciesDetail' && payload) {
        return [...prev, { screen: next, detailId: payload }];
      }
      if (next === 'home') {
        return [{ screen: 'home' }];
      }
      return [...prev, { screen: next }];
    });
    if (next === 'home') {
      // Pop all extra browser states to stay in sync
      const depth = historyRef.current.length - 1;
      if (depth > 0) {
        window.history.go(-depth);
      }
    } else {
      // Push a browser state so Android back triggers popstate
      window.history.pushState(null, '');
    }
    window.scrollTo({ top: 0 });
  }, []);

  const back = useCallback(() => {
    if (historyRef.current.length <= 1) return;
    // Skip the popstate that window.history.back() will fire,
    // so we don't double-pop the internal history
    popstateSkipRef.current++;
    setHistory((prev) => (prev.length <= 1 ? prev : prev.slice(0, -1)));
    window.history.back();
    window.scrollTo({ top: 0 });
  }, []);

  // Android back button / browser back: pop internal history.
  // When at home (length 1), do nothing so the browser exits the app.
  useEffect(() => {
    const handler = () => {
      if (popstateSkipRef.current > 0) {
        popstateSkipRef.current--;
        return;
      }
      if (historyRef.current.length > 1) {
        setHistory((prev) => (prev.length <= 1 ? prev : prev.slice(0, -1)));
        window.scrollTo({ top: 0 });
      }
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  return (
    <div className="app-shell">
      {screen === 'home' && <Home onNavigate={navigate} />}
      {screen === 'species' && (
        <Species onBack={back} onOpen={(id) => navigate('speciesDetail', id)} onNavigate={navigate} />
      )}
      {screen === 'speciesDetail' && <SpeciesDetail id={detailId} onBack={back} />}
      {screen === 'water' && <WaterQuality onBack={back} />}
      {screen === 'calc' && <Calculadoras onBack={back} />}
      {screen === 'checklist' && <Checklist onBack={back} />}
      {screen === 'library' && <Library onBack={back} />}
      {screen === 'favorites' && <Favorites onBack={back} />}
      {screen === 'about' && <About onBack={back} />}
      {screen === 'search' && <Search onBack={back} onNavigate={navigate} />}
    </div>
  );
}
