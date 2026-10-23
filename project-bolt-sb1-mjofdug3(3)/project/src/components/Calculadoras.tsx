import { useMemo, useState } from 'react';
import { Calculator, Fish, Layers, Ruler, Wheat } from 'lucide-react';
import { Header } from './Header';
import { species } from '../data/species';
import { getFoodTable, detectPhase } from '../data/foodTables';

type CalcId = 'racao' | 'biomassa' | 'densidade' | 'volume';

const calculators: { id: CalcId; label: string; icon: typeof Fish; tint: string }[] = [
  { id: 'racao', label: 'Ração por Espécie', icon: Wheat, tint: 'from-teal-500 to-aqua-600' },
  { id: 'biomassa', label: 'Biomassa', icon: Fish, tint: 'from-aqua-500 to-deep-600' },
  { id: 'densidade', label: 'Densidade', icon: Layers, tint: 'from-accent-500 to-teal-600' },
  { id: 'volume', label: 'Volume do Viveiro', icon: Ruler, tint: 'from-deep-500 to-aqua-600' },
];

function NumberField({
  label, unit, value, onChange, hint,
}: {
  label: string; unit: string; value: string; onChange: (v: string) => void; hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-aqua-800">{label}</span>
      <div className="mt-1 flex items-center gap-2">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="field"
          placeholder="0"
        />
        <span className="shrink-0 text-sm font-semibold text-aqua-600">{unit}</span>
      </div>
      {hint && <p className="mt-0.5 text-xs text-aqua-400">{hint}</p>}
    </label>
  );
}

function ResultCard({ label, value, unit, hint }: { label: string; value: string; unit: string; hint?: string }) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-teal-500 to-aqua-600 p-4 text-white shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-wide text-white/80">{label}</p>
      <p className="mt-1 text-2xl font-extrabold">{value} <span className="text-base font-semibold">{unit}</span></p>
      {hint && <p className="mt-1 text-xs text-white/80">{hint}</p>}
    </div>
  );
}

export function Calculadoras({ onBack }: { onBack: () => void }) {
  const [active, setActive] = useState<CalcId>('racao');

  // Species-specific feed calculator
  const [selectedSpecies, setSelectedSpecies] = useState(species[0]?.id ?? '');
  const [numAnimals, setNumAnimals] = useState('');
  const [avgWeight, setAvgWeight] = useState('');

  // biomass
  const [numPeixes, setNumPeixes] = useState('');
  const [pesoMedio, setPesoMedio] = useState('');

  // densidade
  const [areaViveiro, setAreaViveiro] = useState('');
  const [qtdPeixes, setQtdPeixes] = useState('');

  // volume
  const [comp, setComp] = useState('');
  const [larg, setLarg] = useState('');
  const [prof, setProf] = useState('');

  const foodTable = useMemo(() => getFoodTable(selectedSpecies), [selectedSpecies]);

  const racaoResult = useMemo(() => {
    const n = parseFloat(numAnimals);
    const w = parseFloat(avgWeight);
    if (!n || !w || n <= 0 || w <= 0 || !foodTable) return null;
    const phase = detectPhase(w, foodTable.rows);
    if (!phase || phase.feedRateValue === 0) return null;
    const biomass = (n * w) / 1000;
    const daily = (biomass * phase.feedRateValue) / 100;
    const meals = parseInt(phase.frequency) || 2;
    return {
      phase,
      biomass,
      daily,
      perMeal: daily / meals,
      days7: daily * 7,
      days30: daily * 30,
    };
  }, [numAnimals, avgWeight, foodTable]);

  const biomassaResult = useMemo(() => {
    const n = parseFloat(numPeixes);
    const pm = parseFloat(pesoMedio);
    if (!n || !pm || n <= 0 || pm <= 0) return null;
    return ((n * pm) / 1000).toFixed(2);
  }, [numPeixes, pesoMedio]);

  const densidadeResult = useMemo(() => {
    const a = parseFloat(areaViveiro);
    const q = parseFloat(qtdPeixes);
    if (!a || !q || a <= 0 || q <= 0) return null;
    return (q / a).toFixed(2);
  }, [areaViveiro, qtdPeixes]);

  const volumeResult = useMemo(() => {
    const c = parseFloat(comp);
    const l = parseFloat(larg);
    const p = parseFloat(prof);
    if (!c || !l || !p || c <= 0 || l <= 0 || p <= 0) return null;
    return (c * l * p).toFixed(2);
  }, [comp, larg, prof]);

  return (
    <div className="flex min-h-full flex-col">
      <Header title="Calculadoras" subtitle="Ferramentas de manejo" onBack={onBack} />
      <div className="flex-1 px-4 py-4">
        {/* Tabs */}
        <div className="no-scrollbar -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {calculators.map((c) => {
            const Icon = c.icon;
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${
                  isActive ? `bg-gradient-to-br ${c.tint} text-white shadow-soft` : 'bg-white text-aqua-700 ring-1 ring-aqua-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                {c.label}
              </button>
            );
          })}
        </div>

        <div className="card animate-fadeIn space-y-4 p-5">
          {active === 'racao' && (
            <>
              <div className="flex items-center gap-2 text-teal-700">
                <Wheat className="h-5 w-5" />
                <h2 className="font-bold">Calculadora de Ração por Espécie</h2>
              </div>
              <label className="block">
                <span className="text-sm font-medium text-aqua-800">Espécie</span>
                <select
                  value={selectedSpecies}
                  onChange={(e) => setSelectedSpecies(e.target.value)}
                  className="field mt-1"
                >
                  {species.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </label>
              <NumberField
                label="Número de animais"
                unit="un."
                value={numAnimals}
                onChange={setNumAnimals}
                hint="Digite a quantidade total de animais no viveiro (ex: 500)"
              />
              <NumberField
                label="Peso médio por animal"
                unit="g"
                value={avgWeight}
                onChange={setAvgWeight}
                hint="Digite o peso médio em gramas (ex: 500 = 500 g = 0,5 kg)"
              />

              {racaoResult ? (
                <div className="space-y-3">
                  <div className="rounded-xl bg-aqua-100 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-aqua-600">Fase detectada</p>
                    <p className="mt-1 text-base font-bold text-aqua-900">{racaoResult.phase.phase}</p>
                    <p className="text-xs text-aqua-700">
                      Peso: {racaoResult.phase.weightRange} · Proteína: {racaoResult.phase.protein} · Taxa: {racaoResult.phase.feedRate}
                    </p>
                  </div>
                  <ResultCard label="Biomassa total" value={racaoResult.biomass.toFixed(2)} unit="kg" hint="Calculado a partir do número de animais x peso médio." />
                  <div className="grid grid-cols-1 gap-2">
                    <SimpleRow label="Ração por dia" value={`${racaoResult.daily.toFixed(2)} kg/dia`} />
                    <SimpleRow label="Ração por alimentação" value={`${racaoResult.perMeal.toFixed(2)} kg/alimentação`} hint={`${racaoResult.phase.frequency} alimentações/dia`} />
                    <SimpleRow label="Ração para 7 dias" value={`${racaoResult.days7.toFixed(2)} kg`} />
                    <SimpleRow label="Ração para 30 dias" value={`${racaoResult.days30.toFixed(2)} kg`} />
                  </div>
                  <p className="text-xs text-aqua-500">Fonte: {foodTable?.source}</p>
                </div>
              ) : (
                <p className="text-sm text-aqua-500">Informe número de animais e peso médio em gramas. A fase será identificada automaticamente.</p>
              )}
            </>
          )}

          {active === 'biomassa' && (
            <>
              <div className="flex items-center gap-2 text-aqua-700">
                <Fish className="h-5 w-5" />
                <h2 className="font-bold">Biomassa</h2>
              </div>
              <NumberField
                label="Número de peixes"
                unit="un."
                value={numPeixes}
                onChange={setNumPeixes}
                hint="Digite a quantidade total de peixes (ex: 1000)"
              />
              <NumberField
                label="Peso médio por peixe"
                unit="g"
                value={pesoMedio}
                onChange={setPesoMedio}
                hint="Digite o peso médio em gramas (ex: 500 = 500 g = 0,5 kg)"
              />
              {biomassaResult ? (
                <ResultCard label="Biomassa total" value={biomassaResult} unit="kg" hint="Calculado: (nº de peixes × peso médio em g) ÷ 1000" />
              ) : (
                <p className="text-sm text-aqua-500">Preencha os campos para ver o resultado em kg.</p>
              )}
            </>
          )}

          {active === 'densidade' && (
            <>
              <div className="flex items-center gap-2 text-accent-700">
                <Layers className="h-5 w-5" />
                <h2 className="font-bold">Densidade de Estocagem</h2>
              </div>
              <NumberField
                label="Área do viveiro"
                unit="m²"
                value={areaViveiro}
                onChange={setAreaViveiro}
                hint="Digite a área em metros quadrados (ex: 500 = 500 m²)"
              />
              <NumberField
                label="Quantidade de peixes"
                unit="un."
                value={qtdPeixes}
                onChange={setQtdPeixes}
                hint="Digite o número total de peixes (ex: 2500)"
              />
              {densidadeResult ? (
                <ResultCard label="Densidade" value={densidadeResult} unit="peixes/m²" hint="Compare com a faixa ideal da espécie." />
              ) : (
                <p className="text-sm text-aqua-500">Preencha os campos para ver o resultado em peixes/m².</p>
              )}
            </>
          )}

          {active === 'volume' && (
            <>
              <div className="flex items-center gap-2 text-deep-700">
                <Ruler className="h-5 w-5" />
                <h2 className="font-bold">Volume do Viveiro</h2>
              </div>
              <NumberField
                label="Comprimento"
                unit="m"
                value={comp}
                onChange={setComp}
                hint="Digite o comprimento em metros (ex: 50 = 50 m)"
              />
              <NumberField
                label="Largura"
                unit="m"
                value={larg}
                onChange={setLarg}
                hint="Digite a largura em metros (ex: 20 = 20 m)"
              />
              <NumberField
                label="Profundidade média"
                unit="m"
                value={prof}
                onChange={setProf}
                hint="Digite a profundidade em metros (ex: 1,5 = 1,5 m)"
              />
              {volumeResult ? (
                <ResultCard label="Volume" value={volumeResult} unit="m³" hint="1 m³ equivale a 1.000 litros." />
              ) : (
                <p className="text-sm text-aqua-500">Preencha os campos para ver o resultado em m³.</p>
              )}
            </>
          )}
        </div>

        <div className="mt-4 flex items-start gap-2 rounded-xl bg-aqua-100 p-3 text-xs text-aqua-700">
          <Calculator className="mt-0.5 h-4 w-4 shrink-0" />
          <p>Os resultados são estimativas baseadas em tabelas técnicas. Ajuste conforme temperatura e comportamento dos animais.</p>
        </div>
      </div>
    </div>
  );
}

function SimpleRow({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-aqua-50 p-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-aqua-600">{label}</p>
        {hint && <p className="text-xs text-aqua-500">{hint}</p>}
      </div>
      <p className="text-base font-bold text-aqua-950">{value}</p>
    </div>
  );
}
