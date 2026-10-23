import { useMemo, useState } from 'react';
import {
  AlertTriangle, BookOpen, Calculator, ChevronRight, ExternalLink,
  Fish, Heart, Info, Leaf, Lightbulb, MapPin, Star,
  Table, Utensils,
} from 'lucide-react';
import { Header } from './Header';
import { ParamIcon } from './icons/ParamIcon';
import { species } from '../data/species';
import { categories } from '../data/categories';
import { getFoodTable, detectPhase } from '../data/foodTables';
import { getLibraryBySpecies } from '../data/library';
import { useFavorites } from '../hooks/useFavorites';

interface SpeciesDetailProps {
  id: string;
  onBack: () => void;
}

type Tab = 'info' | 'alimentacao' | 'calculadora' | 'materiais';

export function SpeciesDetail({ id, onBack }: SpeciesDetailProps) {
  const data = species.find((s) => s.id === id);
  const [tab, setTab] = useState<Tab>('info');
  const [imgError, setImgError] = useState(false);
  const { isFavorite, toggle } = useFavorites();

  const foodTable = useMemo(() => (data ? getFoodTable(data.id) : undefined), [data]);
  const materials = useMemo(() => (data ? getLibraryBySpecies(data.id) : []), [data]);
  const categoryName = data ? categories.find((c) => c.id === data.category)?.name ?? '' : '';

  if (!data) {
    return (
      <div className="flex min-h-full flex-col">
        <Header title="Espécie" onBack={onBack} />
        <div className="p-6 text-center text-aqua-700">Espécie não encontrada.</div>
      </div>
    );
  }

  const tabs: { id: Tab; label: string; icon: typeof Info }[] = [
    { id: 'info', label: 'Informações', icon: Info },
    { id: 'alimentacao', label: 'Tabela Alimentar', icon: Table },
    { id: 'calculadora', label: 'Calculadora', icon: Calculator },
    { id: 'materiais', label: 'Materiais', icon: BookOpen },
  ];

  return (
    <div className="flex min-h-full flex-col pb-8">
      <Header title={data.name} subtitle={data.scientific} onBack={onBack} />

      {/* Hero photo */}
      <div className="relative h-52 w-full overflow-hidden">
        {imgError ? (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-aqua-500 to-teal-500">
            <span className="text-lg font-bold text-white">{data.name}</span>
          </div>
        ) : (
          <img
            src={data.photo}
            alt={data.name}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-950/70 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div>
            <span className="chip bg-white/90 text-aqua-800 backdrop-blur">
              <Fish className="h-4 w-4" /> {data.name}
            </span>
            <p className="mt-1 text-xs text-white/80">{categoryName}</p>
          </div>
          <button
            onClick={() => toggle(data.id)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/80 backdrop-blur transition active:scale-90"
            aria-label="Favoritar"
          >
            <Star
              className={`h-5 w-5 ${
                isFavorite(data.id) ? 'fill-accent-400 text-accent-500' : 'text-aqua-400'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="no-scrollbar sticky top-[68px] z-10 -mx-4 mb-4 flex gap-2 overflow-x-auto border-b border-aqua-100 bg-aqua-50/95 px-4 py-2 backdrop-blur">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                isActive ? 'bg-aqua-600 text-white shadow-soft' : 'bg-white text-aqua-700 ring-1 ring-aqua-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="flex-1 space-y-5 px-4">
        {/* TAB: Info */}
        {tab === 'info' && (
          <div className="animate-fadeIn space-y-5">
            <p className="text-sm leading-relaxed text-aqua-900">{data.description}</p>

            {/* Location */}
            <section className="card p-4">
              <div className="flex items-center gap-2 text-aqua-700">
                <MapPin className="h-5 w-5" />
                <h2 className="text-sm font-bold uppercase tracking-wide">Onde é cultivado</h2>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {data.states.map((st) => (
                  <span key={st} className="chip bg-aqua-100 text-aqua-700">{st}</span>
                ))}
              </div>
            </section>

            {/* Parameters */}
            <section>
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-aqua-700">Parâmetros ideais</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Temperatura', value: data.temperature, icon: 'thermometer' },
                  { label: 'pH', value: data.ph, icon: 'droplet' },
                  { label: 'Oxigênio', value: data.oxygen, icon: 'wind' },
                  { label: 'Salinidade', value: data.salinity, icon: 'waves' },
                ].map((p) => (
                  <div key={p.label} className="card p-3">
                    <div className="flex items-center gap-2 text-aqua-600">
                      <ParamIcon name={p.icon} className="h-4 w-4" />
                      <span className="text-[11px] font-medium uppercase tracking-wide">{p.label}</span>
                    </div>
                    <p className="mt-1 text-sm font-bold text-aqua-950">{p.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Culture system */}
            <section className="card p-4">
              <h2 className="text-sm font-bold uppercase tracking-wide text-aqua-700">Ambiente e sistema de cultivo</h2>
              <div className="mt-2 space-y-2 text-sm text-aqua-900">
                <p><span className="font-semibold">Ambiente:</span> {data.environment}</p>
                <p><span className="font-semibold">Sistema:</span> {data.cultureSystem}</p>
                <p><span className="font-semibold">Densidade:</span> {data.stockingDensity}</p>
              </div>
            </section>

            {/* Management */}
            <section className="card p-4">
              <h2 className="text-sm font-bold uppercase tracking-wide text-aqua-700">Manejo diário e qualidade da água</h2>
              <div className="mt-2 space-y-2 text-sm text-aqua-900">
                <p>{data.dailyManagement}</p>
                <p className="text-aqua-700">{data.waterQuality}</p>
              </div>
            </section>

            {/* Commercialization */}
            <section className="card p-4">
              <h2 className="text-sm font-bold uppercase tracking-wide text-aqua-700">Comercialização</h2>
              <div className="mt-2 space-y-2 text-sm text-aqua-900">
                <p><span className="font-semibold">Tempo de cultivo:</span> {data.growOutTime}</p>
                <p><span className="font-semibold">Tamanho/peso de mercado:</span> {data.marketSize}</p>
              </div>
            </section>

            {/* Diseases */}
            <section className="card p-4">
              <div className="flex items-center gap-2 text-amber-600">
                <AlertTriangle className="h-5 w-5" />
                <h2 className="text-sm font-bold uppercase tracking-wide">Principais doenças</h2>
              </div>
              <ul className="mt-2 space-y-1.5">
                {data.diseases.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-aqua-900">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </section>

            {/* Prevention */}
            <section className="card p-4">
              <div className="flex items-center gap-2 text-teal-700">
                <Heart className="h-5 w-5" />
                <h2 className="text-sm font-bold uppercase tracking-wide">Prevenção</h2>
              </div>
              <ul className="mt-2 space-y-1.5">
                {data.prevention.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-aqua-900">
                    <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </section>

            {/* Advantages / Disadvantages */}
            <div className="grid grid-cols-1 gap-3">
              <section className="card p-4">
                <div className="flex items-center gap-2 text-teal-700">
                  <Lightbulb className="h-5 w-5" />
                  <h2 className="text-sm font-bold uppercase tracking-wide">Vantagens</h2>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {data.advantages.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-aqua-900">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      {a}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card p-4">
                <div className="flex items-center gap-2 text-rose-500">
                  <AlertTriangle className="h-5 w-5" />
                  <h2 className="text-sm font-bold uppercase tracking-wide">Desvantagens</h2>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {data.disadvantages.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-aqua-900">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                      {d}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Curiosities */}
            <section className="card p-4">
              <div className="flex items-center gap-2 text-accent-700">
                <Info className="h-5 w-5" />
                <h2 className="text-sm font-bold uppercase tracking-wide">Curiosidades</h2>
              </div>
              <ul className="mt-2 space-y-1.5">
                {data.curiosities.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-aqua-900">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* References */}
            <section className="card p-4">
              <div className="flex items-center gap-2 text-aqua-700">
                <BookOpen className="h-5 w-5" />
                <h2 className="text-sm font-bold uppercase tracking-wide">Referências bibliográficas</h2>
              </div>
              <ul className="mt-2 space-y-2">
                {data.references.map((r) => (
                  <li key={r} className="text-xs leading-relaxed text-aqua-700">
                    {r}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}

        {/* TAB: Food Table */}
        {tab === 'alimentacao' && (
          <div className="animate-fadeIn space-y-4">
            <div className="flex items-center gap-2 text-teal-700">
              <Utensils className="h-5 w-5" />
              <h2 className="font-bold">Tabela Alimentar — {data.name}</h2>
            </div>
            {foodTable ? (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs">
                    <thead>
                      <tr className="bg-aqua-700 text-white">
                        <th className="border border-aqua-600 p-2 text-left">Fase</th>
                        <th className="border border-aqua-600 p-2 text-left">Peso</th>
                        <th className="border border-aqua-600 p-2 text-left">Ração</th>
                        <th className="border border-aqua-600 p-2 text-left">Granulom.</th>
                        <th className="border border-aqua-600 p-2 text-left">Proteína</th>
                        <th className="border border-aqua-600 p-2 text-left">Taxa</th>
                        <th className="border border-aqua-600 p-2 text-left">Frequência</th>
                        <th className="border border-aqua-600 p-2 text-left">Horários</th>
                      </tr>
                    </thead>
                    <tbody>
                      {foodTable.rows.map((row) => (
                        <tr key={row.phase} className="even:bg-aqua-50">
                          <td className="border border-aqua-200 p-2 font-semibold text-aqua-900">{row.phase}</td>
                          <td className="border border-aqua-200 p-2 text-aqua-800">{row.weightRange}</td>
                          <td className="border border-aqua-200 p-2 text-aqua-800">{row.feedType}</td>
                          <td className="border border-aqua-200 p-2 text-aqua-800">{row.granulometry}</td>
                          <td className="border border-aqua-200 p-2 font-semibold text-teal-700">{row.protein}</td>
                          <td className="border border-aqua-200 p-2 font-semibold text-accent-700">{row.feedRate}</td>
                          <td className="border border-aqua-200 p-2 text-aqua-800">{row.frequency}</td>
                          <td className="border border-aqua-200 p-2 text-aqua-800">{row.schedule}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="card p-3">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-aqua-700">Observações técnicas</h3>
                  <ul className="mt-2 space-y-1.5">
                    {foodTable.rows.map((row) => (
                      <li key={row.phase} className="text-xs text-aqua-800">
                        <span className="font-semibold">{row.phase}:</span> {row.notes}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-aqua-500">Fonte: {foodTable.source}</p>
              </>
            ) : (
              <div className="card p-6 text-center text-aqua-700">
                <p className="font-semibold">Tabela alimentar não disponível para esta espécie.</p>
              </div>
            )}
          </div>
        )}

        {/* TAB: Calculator */}
        {tab === 'calculadora' && (
          <SpeciesCalculator speciesId={data.id} />
        )}

        {/* TAB: Materials */}
        {tab === 'materiais' && (
          <div className="animate-fadeIn space-y-4">
            <div className="flex items-center gap-2 text-aqua-700">
              <BookOpen className="h-5 w-5" />
              <h2 className="font-bold">Materiais recomendados para {data.name}</h2>
            </div>
            {materials.length > 0 ? (
              materials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group block p-4 transition active:scale-[0.99] hover:ring-aqua-300"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold leading-snug text-aqua-950">{item.title}</h3>
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-aqua-500" />
                  </div>
                  <p className="mt-1 text-sm text-aqua-700/80">{item.abstract}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className="chip bg-aqua-100 text-aqua-700">{item.institution}</span>
                    <span className="chip bg-teal-100 text-teal-700">{item.year}</span>
                    {item.author && <span className="chip bg-accent-100 text-accent-700">{item.author}</span>}
                  </div>
                </a>
              ))
            ) : (
              <div className="card p-6 text-center text-aqua-700">
                <p className="font-semibold">Material oficial não disponível no momento</p>
                <p className="mt-1 text-xs text-aqua-500">
                  Não há materiais específicos cadastrados para esta espécie.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// --- Species-specific calculator with auto phase detection ---

function SpeciesCalculator({ speciesId }: { speciesId: string }) {
  const foodTable = getFoodTable(speciesId);
  const speciesData = species.find((s) => s.id === speciesId);
  const [numAnimals, setNumAnimals] = useState('');
  const [avgWeight, setAvgWeight] = useState('');

  const result = useMemo(() => {
    const n = parseFloat(numAnimals);
    const w = parseFloat(avgWeight);
    if (!n || !w || n <= 0 || w <= 0 || !foodTable) return null;

    const phase = detectPhase(w, foodTable.rows);
    if (!phase || phase.feedRateValue === 0) return null;

    const biomass = (n * w) / 1000; // kg
    const dailyFeed = (biomass * phase.feedRateValue) / 100; // kg/day
    const mealsPerDay = parseInt(phase.frequency) || 2;
    const feedPerMeal = dailyFeed / mealsPerDay;
    const feed7Days = dailyFeed * 7;
    const feed30Days = dailyFeed * 30;

    return { phase, biomass, dailyFeed, feedPerMeal, feed7Days, feed30Days };
  }, [numAnimals, avgWeight, foodTable]);

  if (!foodTable || !speciesData) {
    return (
      <div className="card p-6 text-center text-aqua-700">
        <p className="font-semibold">Calculadora não disponível para esta espécie.</p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn space-y-4">
      <div className="flex items-center gap-2 text-teal-700">
        <Calculator className="h-5 w-5" />
        <h2 className="font-bold">Calculadora — {speciesData.name}</h2>
      </div>

      <div className="card space-y-4 p-5">
        <label className="block">
          <span className="text-sm font-medium text-aqua-800">Número de animais</span>
          <div className="mt-1 flex items-center gap-2">
            <input
              type="number"
              inputMode="decimal"
              value={numAnimals}
              onChange={(e) => setNumAnimals(e.target.value)}
              className="field"
              placeholder="Ex: 1000"
            />
            <span className="shrink-0 text-sm font-semibold text-aqua-600">un.</span>
          </div>
          <p className="mt-0.5 text-xs text-aqua-400">Digite a quantidade total de animais no viveiro</p>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-aqua-800">Peso médio por animal</span>
          <div className="mt-1 flex items-center gap-2">
            <input
              type="number"
              inputMode="decimal"
              value={avgWeight}
              onChange={(e) => setAvgWeight(e.target.value)}
              className="field"
              placeholder="Ex: 300"
            />
            <span className="shrink-0 text-sm font-semibold text-aqua-600">g</span>
          </div>
          <p className="mt-0.5 text-xs text-aqua-400">Digite o peso em gramas (ex: 500 = 500 g = 0,5 kg)</p>
        </label>
      </div>

      {result ? (
        <div className="space-y-3">
          <div className="rounded-2xl bg-aqua-100 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-aqua-600">Fase detectada</p>
            <p className="mt-1 text-lg font-bold text-aqua-900">{result.phase.phase}</p>
            <p className="text-xs text-aqua-700">
              Faixa de peso: {result.phase.weightRange} · Proteína: {result.phase.protein} · Taxa: {result.phase.feedRate}
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-teal-500 to-aqua-600 p-4 text-white shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Biomassa total</p>
            <p className="mt-1 text-2xl font-extrabold">{result.biomass.toFixed(2)} <span className="text-base font-semibold">kg</span></p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <ResultRow label="Ração por dia" value={`${result.dailyFeed.toFixed(2)} kg`} />
            <ResultRow label="Ração por alimentação" value={`${result.feedPerMeal.toFixed(2)} kg`} hint={`${result.phase.frequency}`} />
            <ResultRow label="Ração para 7 dias" value={`${result.feed7Days.toFixed(2)} kg`} />
            <ResultRow label="Ração para 30 dias" value={`${result.feed30Days.toFixed(2)} kg`} />
          </div>

          <p className="text-xs text-aqua-500">Fonte: {foodTable.source}</p>
        </div>
      ) : (
        <p className="text-sm text-aqua-500">
          Informe o número de animais e o peso médio para calcular automaticamente.
        </p>
      )}
    </div>
  );
}

function ResultRow({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="card flex items-center justify-between p-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-aqua-600">{label}</p>
        {hint && <p className="text-xs text-aqua-500">{hint}</p>}
      </div>
      <p className="text-lg font-bold text-aqua-950">{value}</p>
    </div>
  );
}
