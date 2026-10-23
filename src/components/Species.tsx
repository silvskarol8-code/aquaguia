import { useMemo, useState } from 'react';
import { Search as SearchIcon, Star } from 'lucide-react';
import { Header } from './Header';
import { species } from '../data/species';
import { categories, type CategoryId } from '../data/categories';
import { useFavorites } from '../hooks/useFavorites';
import type { Screen } from '../App';

interface SpeciesProps {
  onBack: () => void;
  onOpen: (id: string) => void;
  onNavigate: (screen: Screen) => void;
}

export function Species({ onBack, onOpen, onNavigate }: SpeciesProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'todas'>('todas');
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());
  const { isFavorite, toggle } = useFavorites();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return species.filter((s) => {
      const matchesCategory = activeCategory === 'todas' || s.category === activeCategory;
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.scientific.toLowerCase().includes(q) ||
        s.tags.some((t) => t.includes(q)) ||
        s.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const markError = (id: string) =>
    setImgErrors((prev) => new Set(prev).add(id));

  const categoryName = (id: CategoryId) =>
    categories.find((c) => c.id === id)?.name ?? id;

  return (
    <div className="flex min-h-full flex-col">
      <Header title="Espécies Cultivadas" subtitle="Organismos aquáticos do Brasil" onBack={onBack} />
      <div className="flex-1 px-4 py-4">
        {/* Search bar */}
        <div className="relative mb-3">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-aqua-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar espécie..."
            className="field pl-10"
          />
        </div>

        {/* Category filters */}
        <div className="no-scrollbar -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
          <button
            onClick={() => setActiveCategory('todas')}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === 'todas'
                ? 'bg-aqua-600 text-white shadow-soft'
                : 'bg-white text-aqua-700 ring-1 ring-aqua-200'
            }`}
          >
            Todas
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === cat.id
                  ? 'bg-aqua-600 text-white shadow-soft'
                  : 'bg-white text-aqua-700 ring-1 ring-aqua-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="card p-6 text-center text-aqua-700">
            <p className="font-semibold">Nenhuma espécie encontrada</p>
            <p className="mt-1 text-xs text-aqua-500">Tente outro nome ou categoria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filtered.map((s) => {
              const hasError = imgErrors.has(s.id);
              return (
                <div
                  key={s.id}
                  className="group card flex flex-col overflow-hidden transition hover:ring-aqua-300"
                >
                  <button
                    onClick={() => onOpen(s.id)}
                    className="relative block h-28 w-full overflow-hidden"
                  >
                    {hasError ? (
                      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-aqua-500 to-teal-500">
                        <span className="text-xs font-bold text-white">{s.name}</span>
                      </div>
                    ) : (
                      <img
                        src={s.photo}
                        alt={s.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={() => markError(s.id)}
                      />
                    )}
                  </button>
                  <button
                    onClick={() => toggle(s.id)}
                    className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/80 backdrop-blur transition active:scale-90"
                    aria-label="Favoritar"
                  >
                    <Star
                      className={`h-4 w-4 ${
                        isFavorite(s.id) ? 'fill-accent-400 text-accent-500' : 'text-aqua-400'
                      }`}
                    />
                  </button>
                  <button
                    onClick={() => onOpen(s.id)}
                    className="flex flex-1 flex-col p-3 text-left"
                  >
                    <p className="font-bold text-aqua-950">{s.name}</p>
                    <p className="truncate text-xs italic text-aqua-600">{s.scientific}</p>
                    <span className="mt-2 chip bg-aqua-100 text-aqua-700 text-[10px]">
                      {categoryName(s.category)}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-4 flex items-start gap-2 rounded-xl bg-aqua-100 p-3 text-xs text-aqua-700">
          <SearchIcon className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Não encontrou?{' '}
            <button onClick={() => onNavigate('search')} className="font-semibold underline">
              Buscar em todo o app
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
