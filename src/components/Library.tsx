import { useMemo, useState } from 'react';
import {
  BookOpen, Download, ExternalLink, FileText, Heart, Play,
  Search as SearchIcon, Star, Video,
} from 'lucide-react';
import { Header } from './Header';
import {
  libraryItems, libraryCategories,
  type LibraryCategory, type LibraryItem, type MaterialType,
} from '../data/library';
import { species } from '../data/species';
import { useFavorites } from '../hooks/useFavorites';

const typeMeta: Record<MaterialType, { icon: typeof FileText; label: string; tint: string }> = {
  artigo: { icon: FileText, label: 'Artigo', tint: 'bg-aqua-100 text-aqua-700' },
  cartilha: { icon: BookOpen, label: 'Cartilha', tint: 'bg-teal-100 text-teal-700' },
  manual: { icon: BookOpen, label: 'Manual', tint: 'bg-deep-100 text-deep-700' },
  video: { icon: Video, label: 'Vídeo', tint: 'bg-accent-100 text-accent-700' },
  legislacao: { icon: FileText, label: 'Legislação', tint: 'bg-accent-100 text-accent-700' },
};

const institutions = [
  'Todas',
  'Embrapa',
  'Embrapa Amazônia Ocidental',
  'Embrapa Acre',
  'Embrapa Pesca e Aquicultura',
  'Epagri',
  'SciELO Brasil',
  'Ministério da Pesca e Aquicultura',
  'Ministério da Agricultura e Pecuária (MAPA)',
];

export function Library({ onBack }: { onBack: () => void }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<LibraryCategory | 'todas'>('todas');
  const [institution, setInstitution] = useState('Todas');
  const [typeFilter, setTypeFilter] = useState<MaterialType | 'todos'>('todos');
  const [showFilters, setShowFilters] = useState(false);
  const { isFavorite, toggle } = useFavorites();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return libraryItems.filter((item) => {
      const matchesCat = category === 'todas' || item.category === category;
      const matchesInst = institution === 'Todas' || item.institution.includes(institution);
      const matchesType = typeFilter === 'todos' || item.type === typeFilter;
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.abstract.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q) ||
        item.institution.toLowerCase().includes(q) ||
        (item.author?.toLowerCase().includes(q) ?? false);
      return matchesCat && matchesInst && matchesType && matchesQuery;
    });
  }, [query, category, institution, typeFilter]);

  return (
    <div className="flex min-h-full flex-col">
      <Header title="Biblioteca Técnica" subtitle="Fontes oficiais brasileiras" onBack={onBack} />
      <div className="flex-1 px-4 py-4">
        {/* Search */}
        <div className="relative mb-3">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-aqua-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por palavra-chave..."
            className="field pl-10"
          />
        </div>

        {/* Category chips */}
        <div className="no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4 pb-1">
          <button
            onClick={() => setCategory('todas')}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              category === 'todas' ? 'bg-aqua-600 text-white' : 'bg-white text-aqua-700 ring-1 ring-aqua-200'
            }`}
          >
            Todas
          </button>
          {libraryCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                category === c.id ? 'bg-aqua-600 text-white' : 'bg-white text-aqua-700 ring-1 ring-aqua-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Toggle filters */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="mb-3 text-xs font-semibold text-aqua-600 underline"
        >
          {showFilters ? 'Ocultar filtros' : 'Mostrar filtros avançados'}
        </button>

        {showFilters && (
          <div className="card mb-4 space-y-3 p-4">
            <label className="block">
              <span className="text-xs font-medium text-aqua-700">Instituição</span>
              <select
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                className="field mt-1 text-sm"
              >
                {institutions.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-medium text-aqua-700">Tipo de material</span>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as MaterialType | 'todos')}
                className="field mt-1 text-sm"
              >
                <option value="todos">Todos</option>
                <option value="artigo">Artigo</option>
                <option value="cartilha">Cartilha</option>
                <option value="manual">Manual</option>
                <option value="video">Vídeo</option>
                <option value="legislacao">Legislação</option>
              </select>
            </label>
          </div>
        )}

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="card p-6 text-center text-aqua-700">
            <p className="font-semibold">Nenhum material encontrado</p>
            <p className="mt-1 text-xs text-aqua-500">Ajuste os filtros ou tente outro termo.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((item) => (
              <LibraryCard
                key={item.id}
                item={item}
                isFav={isFavorite(item.id)}
                onToggleFav={() => toggle(item.id)}
              />
            ))}
          </div>
        )}

        <div className="mt-4 flex items-start gap-2 rounded-xl bg-aqua-100 p-3 text-xs text-aqua-700">
          <Heart className="mt-0.5 h-4 w-4 shrink-0" />
          <p>Toque no ícone de estrela para salvar materiais nos favoritos. Todos os links são de instituições oficiais brasileiras.</p>
        </div>
      </div>
    </div>
  );
}

function LibraryCard({
  item, isFav, onToggleFav,
}: {
  item: LibraryItem; isFav: boolean; onToggleFav: () => void;
}) {
  const meta = typeMeta[item.type];
  const Icon = meta.icon;
  const relatedSpecies = item.speciesRelated
    .map((id) => species.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <div className="card overflow-hidden">
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <span className={`chip ${meta.tint} mb-2`}>
              <Icon className="h-3.5 w-3.5" /> {meta.label}
            </span>
            <h3 className="font-bold leading-snug text-aqua-950">{item.title}</h3>
          </div>
          <button
            onClick={onToggleFav}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-aqua-50 transition active:scale-90"
            aria-label="Favoritar"
          >
            <Star className={`h-4 w-4 ${isFav ? 'fill-accent-400 text-accent-500' : 'text-aqua-400'}`} />
          </button>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-aqua-700/80">{item.abstract}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="chip bg-aqua-100 text-aqua-700">{item.institution}</span>
          {item.author && <span className="chip bg-teal-100 text-teal-700">{item.author}</span>}
          <span className="chip bg-accent-100 text-accent-700">{item.year}</span>
          {item.state && <span className="chip bg-deep-100 text-deep-700">{item.state}</span>}
        </div>

        {relatedSpecies.length > 0 && (
          <div className="mt-2">
            <p className="text-xs font-medium text-aqua-600">Espécies relacionadas:</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {relatedSpecies.map((s) => (
                <span key={s!.id} className="chip bg-aqua-50 text-aqua-600 text-[10px]">{s!.name}</span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-aqua-600 px-3 py-2 text-xs font-semibold text-white transition active:scale-95 hover:bg-aqua-700"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {item.hasPdf ? 'Ler artigo' : 'Acessar'}
          </a>
          {item.hasPdf && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl bg-teal-100 px-3 py-2 text-xs font-semibold text-teal-700 transition active:scale-95 hover:bg-teal-200"
            >
              <Download className="h-3.5 w-3.5" />
              Baixar PDF
            </a>
          )}
          {item.hasVideo && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-xl bg-accent-100 px-3 py-2 text-xs font-semibold text-accent-700 transition active:scale-95 hover:bg-accent-200"
            >
              <Play className="h-3.5 w-3.5" />
              Assistir
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
