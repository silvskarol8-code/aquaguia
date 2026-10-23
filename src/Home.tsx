import {
  BookOpen, Calculator, ClipboardCheck, Droplets,
  Fish, Info, Search, Star, Waves,
} from 'lucide-react';
import { Logo } from './components/Logo';
import type { Screen } from './App';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
}

const menu: { id: Screen; label: string; desc: string; icon: typeof Fish; tint: string }[] = [
  { id: 'species', label: 'Espécies', desc: 'Organismos cultivados no Brasil', icon: Fish, tint: 'from-aqua-500 to-teal-600' },
  { id: 'water', label: 'Qualidade da Água', desc: 'Parâmetros essenciais', icon: Droplets, tint: 'from-deep-500 to-aqua-600' },
  { id: 'calc', label: 'Calculadoras', desc: 'Ração, biomassa e mais', icon: Calculator, tint: 'from-teal-500 to-aqua-600' },
  { id: 'checklist', label: 'Check-list', desc: 'Organize a sua produção', icon: ClipboardCheck, tint: 'from-accent-500 to-teal-600' },
  { id: 'library', label: 'Biblioteca', desc: 'Fontes oficiais brasileiras', icon: BookOpen, tint: 'from-aqua-600 to-deep-600' },
  { id: 'favorites', label: 'Favoritos', desc: 'Seus materiais salvos', icon: Star, tint: 'from-accent-400 to-aqua-500' },
  { id: 'about', label: 'Sobre', desc: 'O aplicativo', icon: Info, tint: 'from-teal-600 to-aqua-700' },
];

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="flex min-h-full flex-col">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-aqua-700 via-teal-700 to-deep-900 px-5 pb-10 pt-12 text-white">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-400/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-accent-400/20 blur-2xl" />
        <div className="relative flex flex-col items-center text-center">
          <div className="animate-floaty">
            <Logo className="h-20 w-20" />
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight">AquaGuia</h1>
          <p className="mt-1 max-w-xs text-sm text-aqua-100">
            Guia completo da aquicultura brasileira. Espécies, tabelas alimentares, calculadoras e biblioteca técnica.
          </p>
          <button
            onClick={() => onNavigate('search')}
            className="mt-5 flex w-full max-w-xs items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 text-left backdrop-blur transition hover:bg-white/25 active:scale-[0.99]"
          >
            <Search className="h-5 w-5 text-aqua-100" />
            <span className="text-sm text-aqua-100">Buscar espécie ou tema...</span>
          </button>
        </div>
        <Waves className="absolute -bottom-1 left-0 right-0 h-10 w-full text-aqua-50 opacity-30" />
      </div>

      {/* Menu grid */}
      <div className="-mt-6 flex-1 rounded-t-3xl bg-aqua-50 px-4 pb-8 pt-6">
        <div className="grid grid-cols-2 gap-3">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="group card flex flex-col gap-3 p-4 text-left transition active:scale-[0.98] hover:ring-aqua-300"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${item.tint} text-white shadow-soft`}>
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold text-aqua-950">{item.label}</p>
                  <p className="text-xs text-aqua-700/70">{item.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-r from-teal-500 to-aqua-600 p-4 text-white shadow-soft">
          <p className="text-sm font-semibold">Dica do dia</p>
          <p className="mt-1 text-sm text-white/90">
            Meça o oxigênio da água ao amanhecer — é o momento mais crítico do dia para os peixes.
          </p>
        </div>
      </div>
    </div>
  );
}
