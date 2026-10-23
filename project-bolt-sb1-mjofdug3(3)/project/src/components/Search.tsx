import { useMemo, useState } from 'react';
import {
  BookOpen, Droplets, Fish, Search as SearchIcon, Star, Video, X,
} from 'lucide-react';
import { Header } from './Header';
import { species } from '../data/species';
import { waterParams } from '../data/waterQuality';
import { libraryItems } from '../data/library';
import { useFavorites } from '../hooks/useFavorites';
import type { Screen } from '../App';

interface SearchProps {
  onBack: () => void;
  onNavigate: (screen: Screen, payload?: string) => void;
}

interface Result {
  kind: 'species' | 'water' | 'library';
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Fish;
  tint: string;
}

export function Search({ onBack, onNavigate }: SearchProps) {
  const [query, setQuery] = useState('');
  const { isFavorite, toggle } = useFavorites();

  const results = useMemo<Result[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const out: Result[] = [];
    for (const s of species) {
      if (
        s.name.toLowerCase().includes(q) ||
        s.scientific.toLowerCase().includes(q) ||
        s.tags.some((t) => t.includes(q)) ||
        s.description.toLowerCase().includes(q) ||
        s.states.some((st) => st.toLowerCase().includes(q))
      ) {
        out.push({
          kind: 'species', id: s.id, title: s.name,
          subtitle: `Espécie · ${s.scientific}`,
          icon: Fish, tint: 'bg-aqua-100 text-aqua-700',
        });
      }
    }
    for (const w of waterParams) {
      if (w.name.toLowerCase().includes(q) || w.what.toLowerCase().includes(q)) {
        out.push({
          kind: 'water', id: w.id, title: w.name,
          subtitle: `Qualidade da água · Ideal: ${w.ideal}`,
          icon: Droplets, tint: 'bg-accent-100 text-accent-700',
        });
      }
    }
    for (const l of libraryItems) {
      if (
        l.title.toLowerCase().includes(q) ||
        l.abstract.toLowerCase().includes(q) ||
        l.subject.toLowerCase().includes(q) ||
        l.institution.toLowerCase().includes(q)
      ) {
        out.push({
          kind: 'library', id: l.id, title: l.title,
          subtitle: `Biblioteca · ${l.institution}`,
          icon: l.hasVideo ? Video : BookOpen,
          tint: 'bg-teal-100 text-teal-700',
        });
      }
    }
    return out;
  }, [query]);

  const open = (r: Result) => {
    if (r.kind === 'species') onNavigate('speciesDetail', r.id);
    else if (r.kind === 'water') onNavigate('water');
    else onNavigate('library');
  };

  return (
    <div className="flex min-h-full flex-col">
      <Header title="Buscar" subtitle="Espécies, água e biblioteca" onBack={onBack} />
      <div className="flex-1 px-4 py-4">
        <div className="relative mb-4">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-aqua-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ex: tilápia, pH, ração, Embrapa..."
            className="field pl-10 pr-10"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg text-aqua-500 hover:bg-aqua-100"
              aria-label="Limpar"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {!query && (
          <div className="card p-6 text-center">
            <SearchIcon className="mx-auto h-10 w-10 text-aqua-300" />
            <p className="mt-3 text-sm font-semibold text-aqua-800">Busque em todo o app</p>
            <p className="mt-1 text-xs text-aqua-600">
              Digite o nome de uma espécie, um parâmetro da água, uma instituição ou um tema da biblioteca.
            </p>
          </div>
        )}

        {query && results.length === 0 && (
          <div className="card p-6 text-center text-aqua-700">
            <p className="font-semibold">Nenhum resultado para "{query}"</p>
            <p className="mt-1 text-xs text-aqua-500">Tente outro termo.</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-2">
            {results.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={`${r.kind}-${r.id}`}
                  className="card flex w-full items-center gap-3 p-3"
                >
                  <button
                    onClick={() => open(r)}
                    className="flex flex-1 items-center gap-3 text-left"
                  >
                    <span className={`grid h-10 w-10 place-items-center rounded-xl ${r.tint}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-aqua-950">{r.title}</p>
                      <p className="truncate text-xs text-aqua-600">{r.subtitle}</p>
                    </div>
                  </button>
                  {r.kind === 'species' && (
                    <button
                      onClick={() => toggle(r.id)}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-aqua-50"
                      aria-label="Favoritar"
                    >
                      <Star className={`h-4 w-4 ${isFavorite(r.id) ? 'fill-accent-400 text-accent-500' : 'text-aqua-400'}`} />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
