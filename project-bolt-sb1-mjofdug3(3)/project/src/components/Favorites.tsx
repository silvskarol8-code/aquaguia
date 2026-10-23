import { Star, BookOpen, Fish, Trash2 } from 'lucide-react';
import { Header } from './Header';
import { useFavorites } from '../hooks/useFavorites';
import { libraryItems } from '../data/library';
import { species } from '../data/species';

export function Favorites({ onBack }: { onBack: () => void }) {
  const { favorites, toggle } = useFavorites();

  const favSpecies = species.filter((s) => favorites.has(s.id));
  const favLibrary = libraryItems.filter((l) => favorites.has(l.id));

  const isEmpty = favSpecies.length === 0 && favLibrary.length === 0;

  return (
    <div className="flex min-h-full flex-col">
      <Header title="Favoritos" subtitle="Seus materiais salvos" onBack={onBack} />
      <div className="flex-1 px-4 py-4">
        {isEmpty ? (
          <div className="card p-8 text-center">
            <Star className="mx-auto h-10 w-10 text-aqua-300" />
            <p className="mt-3 text-sm font-semibold text-aqua-800">Nenhum favorito ainda</p>
            <p className="mt-1 text-xs text-aqua-600">
              Toque no ícone de estrela nas espécies e materiais para salvá-los aqui.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {favSpecies.length > 0 && (
              <section>
                <div className="mb-3 flex items-center gap-2 text-aqua-700">
                  <Fish className="h-5 w-5" />
                  <h2 className="text-sm font-bold uppercase tracking-wide">Espécies favoritas</h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {favSpecies.map((s) => (
                    <div key={s.id} className="card flex flex-col overflow-hidden">
                      <div className="relative h-24 w-full overflow-hidden">
                        <img src={s.photo} alt={s.name} className="h-full w-full object-cover" loading="lazy" />
                        <button
                          onClick={() => toggle(s.id)}
                          className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white/80 backdrop-blur"
                          aria-label="Remover"
                        >
                          <Trash2 className="h-3.5 w-3.5 text-rose-500" />
                        </button>
                      </div>
                      <div className="p-2">
                        <p className="font-bold text-sm text-aqua-950">{s.name}</p>
                        <p className="truncate text-xs italic text-aqua-600">{s.scientific}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {favLibrary.length > 0 && (
              <section>
                <div className="mb-3 flex items-center gap-2 text-aqua-700">
                  <BookOpen className="h-5 w-5" />
                  <h2 className="text-sm font-bold uppercase tracking-wide">Materiais salvos</h2>
                </div>
                <div className="space-y-2">
                  {favLibrary.map((item) => (
                    <div key={item.id} className="card p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-aqua-950">{item.title}</h3>
                          <p className="text-xs text-aqua-600">{item.institution} · {item.year}</p>
                        </div>
                        <button
                          onClick={() => toggle(item.id)}
                          className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-aqua-50"
                          aria-label="Remover"
                        >
                          <Trash2 className="h-3.5 w-3.5 text-rose-500" />
                        </button>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs font-semibold text-aqua-600 underline"
                      >
                        Acessar material
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
