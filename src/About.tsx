import { BookOpen, Droplets, Fish, Info, Mail, MapPin, Star, Waves } from 'lucide-react';
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { species } from './data/species';
import { categories } from './data/categories';
import { libraryItems } from './data/library';
import { waterParams } from './data/waterQuality';
import { foodTables } from './data/foodTables';

const APP_VERSION = '2.0';
const LAST_UPDATE = '20/10/2026';

export function About({ onBack }: { onBack: () => void }) {
  const stats = [
    { icon: Fish, label: 'Espécies cadastradas', value: species.length, tint: 'text-aqua-600' },
    { icon: Info, label: 'Categorias', value: categories.length, tint: 'text-teal-600' },
    { icon: Waves, label: 'Calculadoras', value: 4, tint: 'text-accent-600' },
    { icon: BookOpen, label: 'Materiais na biblioteca', value: libraryItems.length, tint: 'text-deep-600' },
    { icon: Droplets, label: 'Parâmetros de água', value: waterParams.length, tint: 'text-teal-600' },
    { icon: Star, label: 'Tabelas alimentares', value: foodTables.length, tint: 'text-aqua-500' },
  ];

  return (
    <div className="flex min-h-full flex-col">
      <Header title="Sobre" subtitle="O AquaGuia" onBack={onBack} />
      <div className="flex-1 space-y-5 px-4 py-5">
        <div className="flex flex-col items-center text-center">
          <Logo className="h-20 w-20" />
          <h2 className="mt-3 text-2xl font-extrabold text-aqua-950">AquaGuia</h2>
          <p className="mt-1 text-sm text-aqua-700">Versão {APP_VERSION} — Guia de Aquicultura Brasileira</p>
          <p className="mt-0.5 text-xs text-aqua-500">Última atualização: {LAST_UPDATE}</p>
        </div>

        <div className="card p-5">
          <p className="text-sm leading-relaxed text-aqua-900">
            O AquaGuia é um aplicativo sobre organismos aquáticos cultivados no Brasil. Aqui você encontra
            informações sobre espécies, tabelas alimentares, calculadoras de manejo, qualidade da água e uma
            biblioteca técnica com fontes oficiais brasileiras — tudo em português e funcionando offline.
          </p>
        </div>

        {/* Auto-calculated stats */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="card flex flex-col items-center gap-2 p-4 text-center">
                <Icon className={`h-7 w-7 ${s.tint}`} />
                <p className="text-2xl font-extrabold text-aqua-950">{s.value}</p>
                <p className="text-xs text-aqua-600">{s.label}</p>
              </div>
            );
          })}
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-bold text-aqua-900">Fontes e referências</h3>
          <p className="mt-2 text-sm leading-relaxed text-aqua-800">
            Todas as informações são baseadas em publicações de instituições brasileiras reconhecidas, como
            Embrapa, Epagri, SciELO Brasil e Ministério da Pesca e Aquicultura. Cada espécie e material cita
            sua fonte correspondente.
          </p>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-bold text-aqua-900">Contato</h3>
          <div className="mt-3 space-y-3 text-sm text-aqua-800">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-aqua-500" /> contato@aquaguia.app
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-aqua-500" /> Brasil
            </p>
          </div>
        </div>

        <p className="px-2 text-center text-xs text-aqua-500">
          As informações são de caráter educativo. Sempre consulte um técnico especializado.
        </p>
      </div>
    </div>
  );
}
