import { useMemo, useState } from 'react';
import {
  AlertTriangle, ChevronDown, ClipboardCheck, Droplets,
  Fish, Thermometer, Wind, Shield, Layers, Eye, Waves, Activity,
  CheckCircle,
} from 'lucide-react';
import { Header } from './Header';
import { WaterIcon } from './icons/WaterIcon';
import { waterParams } from '../data/waterQuality';
import { species } from '../data/species';
import {
  getSpeciesWaterParams, analyzeParam, getParamDirection, getParamGuidance,
  type ParamStatus, type ParamRange,
} from '../data/speciesWaterParams';

type View = 'info' | 'analisar';

export function WaterQuality({ onBack }: { onBack: () => void }) {
  const [view, setView] = useState<View>('info');
  const [open, setOpen] = useState<string | null>(waterParams[0].id);

  return (
    <div className="flex min-h-full flex-col">
      <Header title="Qualidade da Água" subtitle="Parâmetros e análise" onBack={onBack} />
      <div className="flex-1 px-4 py-4">
        {/* View toggle */}
        <div className="no-scrollbar mb-4 flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setView('info')}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              view === 'info' ? 'bg-aqua-600 text-white shadow-soft' : 'bg-white text-aqua-700 ring-1 ring-aqua-200'
            }`}
          >
            Informações
          </button>
          <button
            onClick={() => setView('analisar')}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              view === 'analisar' ? 'bg-aqua-600 text-white shadow-soft' : 'bg-white text-aqua-700 ring-1 ring-aqua-200'
            }`}
          >
            Analisar Meu Viveiro
          </button>
        </div>

        {view === 'info' && (
          <>
            <div className="mb-4 rounded-2xl bg-gradient-to-r from-aqua-600 to-teal-600 p-4 text-white shadow-soft">
              <p className="text-sm font-semibold">Por que medir?</p>
              <p className="mt-1 text-sm text-white/90">
                A água é onde os peixes vivem e respiram. Sem medir, é impossível saber se o ambiente está saudável.
              </p>
            </div>

            <div className="space-y-3">
              {waterParams.map((p) => {
                const isOpen = open === p.id;
                return (
                  <div key={p.id} className="card overflow-hidden">
                    <button
                      onClick={() => setOpen(isOpen ? null : p.id)}
                      className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-aqua-50/50"
                    >
                      <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${p.color} text-white shadow-soft`}>
                        <WaterIcon name={p.icon} className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-aqua-950">{p.name}</p>
                        <p className="text-xs text-aqua-700/70">Ideal: {p.ideal}</p>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-aqua-500 transition ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="animate-fadeIn space-y-3 border-t border-aqua-100 px-4 py-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-aqua-600">O que é</p>
                          <p className="mt-1 text-sm text-aqua-900">{p.what}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-aqua-600">Por que importa</p>
                          <p className="mt-1 text-sm text-aqua-900">{p.why}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-aqua-600">Como medir e ajustar</p>
                          <p className="mt-1 text-sm text-aqua-900">{p.how}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {view === 'analisar' && <WaterAnalyzer />}
      </div>
    </div>
  );
}

const paramFields = [
  { key: 'temperature', label: 'Temperatura', icon: Thermometer, unit: '°C' },
  { key: 'ph', label: 'pH', icon: Droplets, unit: '' },
  { key: 'oxygen', label: 'Oxigênio Dissolvido', icon: Wind, unit: 'mg/L' },
  { key: 'ammonia', label: 'Amônia', icon: AlertTriangle, unit: 'mg/L' },
  { key: 'nitrite', label: 'Nitrito', icon: Activity, unit: 'mg/L' },
  { key: 'alkalinity', label: 'Alcalinidade', icon: Shield, unit: 'mg/L' },
  { key: 'hardness', label: 'Dureza', icon: Layers, unit: 'mg/L' },
  { key: 'transparency', label: 'Transparência', icon: Eye, unit: 'cm' },
  { key: 'salinity', label: 'Salinidade', icon: Waves, unit: 'ppt' },
] as const;

const statusMeta: Record<ParamStatus, { label: string; bg: string; text: string; border: string; icon: typeof Fish }> = {
  ideal: { label: 'Ideal', bg: 'bg-teal-100', text: 'text-teal-700', border: 'border-teal-300', icon: CheckCircle },
  atencao: { label: 'Atenção', bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-300', icon: AlertTriangle },
  ruim: { label: 'Ruim', bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-300', icon: AlertTriangle },
  vazio: { label: '—', bg: 'bg-aqua-50', text: 'text-aqua-400', border: 'border-aqua-100', icon: Droplets },
};

function WaterAnalyzer() {
  const [selectedSpecies, setSelectedSpecies] = useState(species[0]?.id ?? '');
  const [values, setValues] = useState<Record<string, string>>({});

  const params = useMemo(() => getSpeciesWaterParams(selectedSpecies), [selectedSpecies]);
  const speciesData = species.find((s) => s.id === selectedSpecies);

  const results = useMemo(() => {
    if (!params) return [];
    return paramFields
      .filter((f) => {
        const range = params[f.key as keyof typeof params] as ParamRange | undefined;
        return range !== undefined;
      })
      .map((f) => {
        const range = params[f.key as keyof typeof params] as ParamRange;
        const raw = values[f.key];
        const val = raw ? parseFloat(raw) : NaN;
        const status = analyzeParam(val, range);
        const direction = getParamDirection(val, range);
        const guidance = (status === 'ruim' || status === 'atencao') && direction !== 'ok'
          ? getParamGuidance(f.key, direction)
          : null;
        return { field: f, range, status, val, direction, guidance };
      });
  }, [params, values]);

  const hasResults = results.some((r) => r.status !== 'vazio');
  const badCount = results.filter((r) => r.status === 'ruim').length;
  const warnCount = results.filter((r) => r.status === 'atencao').length;
  const idealCount = results.filter((r) => r.status === 'ideal').length;

  const handleReset = () => setValues({});

  return (
    <div className="space-y-4">
      <div className="card p-4">
        <div className="flex items-center gap-2 text-aqua-700">
          <ClipboardCheck className="h-5 w-5" />
          <h2 className="text-sm font-bold uppercase tracking-wide">Análise do Viveiro</h2>
        </div>
        <p className="mt-1 text-xs text-aqua-600">
          Selecione a espécie criada e informe os valores medidos. A análise considera os parâmetros ideais para cada espécie.
        </p>
      </div>

      {/* Species selector */}
      <label className="block">
        <span className="flex items-center gap-1.5 text-sm font-medium text-aqua-800">
          <Fish className="h-4 w-4 text-aqua-500" /> Espécie criada
        </span>
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

      {/* Species-specific ideal ranges summary */}
      {params && (
        <div className="card p-3">
          <p className="text-xs font-bold uppercase tracking-wide text-aqua-600">
            Faixas ideais para {speciesData?.name}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            {paramFields.map((f) => {
              const range = params[f.key as keyof typeof params] as ParamRange | undefined;
              if (!range) return null;
              return (
                <div key={f.key} className="flex items-center justify-between rounded-lg bg-aqua-50 px-2 py-1">
                  <span className="text-aqua-700">{f.label}</span>
                  <span className="font-semibold text-aqua-900">
                    {range.min}–{range.max} {range.unit}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Input fields */}
      <div className="card space-y-3 p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-wide text-aqua-600">Valores medidos</p>
          {hasResults && (
            <button onClick={handleReset} className="text-xs font-medium text-aqua-500 underline">
              Limpar
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {paramFields.map((f) => {
            const range = params?.[f.key as keyof typeof params] as ParamRange | undefined;
            if (!range) return null;
            const Icon = f.icon;
            return (
              <label key={f.key} className="block">
                <span className="flex items-center gap-1 text-sm font-semibold text-aqua-900">
                  <Icon className="h-3.5 w-3.5 text-aqua-600" />
                  {f.label}
                </span>
                <div className="mt-1 flex items-center gap-1">
                  <input
                    type="number"
                    inputMode="decimal"
                    value={values[f.key] ?? ''}
                    onChange={(e) => setValues((prev) => ({ ...prev, [f.key]: e.target.value }))}
                    className="field py-2.5 text-base font-bold text-deep-950 placeholder:font-normal placeholder:text-gray-500"
                    placeholder={`${range.min}–${range.max}`}
                  />
                  <span className="shrink-0 text-sm font-medium text-aqua-700">{range.unit}</span>
                </div>
                <p className="mt-0.5 text-[11px] text-aqua-500">
                  Ideal: {range.min}–{range.max} {range.unit}
                </p>
              </label>
            );
          })}
        </div>
      </div>

      {/* Results */}
      {hasResults && (
        <div className="space-y-3">
          {/* Summary */}
          <div className={`rounded-2xl p-4 text-white shadow-soft ${
            badCount > 0
              ? 'bg-gradient-to-r from-rose-500 to-rose-600'
              : warnCount > 0
                ? 'bg-gradient-to-r from-amber-500 to-amber-600'
                : 'bg-gradient-to-r from-teal-500 to-aqua-600'
          }`}>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Resumo da análise</p>
            <p className="mt-1 text-lg font-bold">
              {badCount > 0
                ? `${badCount} parâmetro(s) em risco`
                : warnCount > 0
                  ? `${warnCount} parâmetro(s) em atenção`
                  : 'Todos os parâmetros estão ideais!'}
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/90">
              <span className="rounded-full bg-white/20 px-2 py-0.5">{idealCount} ideais</span>
              {warnCount > 0 && <span className="rounded-full bg-white/20 px-2 py-0.5">{warnCount} em atenção</span>}
              {badCount > 0 && <span className="rounded-full bg-white/20 px-2 py-0.5">{badCount} em risco</span>}
            </div>
            <p className="mt-2 text-xs text-white/80">
              Espécie: {speciesData?.name} ({speciesData?.scientific})
            </p>
          </div>

          {/* Per-param results */}
          {results.map((r) => {
            if (r.status === 'vazio') return null;
            const meta = statusMeta[r.status];
            const Icon = r.field.icon;
            const StatusIcon = meta.icon;
            return (
              <div key={r.field.key} className={`card border-l-4 ${meta.border} p-4`}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`grid h-9 w-9 place-items-center rounded-xl ${meta.bg} ${meta.text}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-bold text-aqua-950">{r.field.label}</p>
                      <p className="text-xs text-aqua-600">
                        Medido: <span className="font-semibold">{r.val} {r.range.unit}</span>
                        {' · '}Ideal: {r.range.min}–{r.range.max} {r.range.unit}
                      </p>
                    </div>
                  </div>
                  <span className={`chip ${meta.bg} ${meta.text} font-bold`}>
                    <StatusIcon className="h-3.5 w-3.5" />
                    {meta.label}
                  </span>
                </div>

                {r.status === 'ideal' && (
                  <p className="mt-2 text-xs text-teal-700">
                    Valor dentro da faixa recomendada para {speciesData?.name}. Continue com o manejo atual.
                  </p>
                )}

                {r.guidance && (r.status === 'ruim' || r.status === 'atencao') && (
                  <div className="mt-3 space-y-2">
                    <div className={`rounded-xl p-3 ${
                      r.status === 'ruim' ? 'bg-rose-50' : 'bg-amber-50'
                    }`}>
                      <p className={`text-xs font-bold uppercase tracking-wide ${
                        r.status === 'ruim' ? 'text-rose-600' : 'text-amber-600'
                      }`}>
                        {r.direction === 'high' ? 'Valor acima do ideal' : 'Valor abaixo do ideal'}
                      </p>
                      <p className="mt-1 text-xs text-aqua-800">{r.guidance.problem}</p>
                    </div>
                    <div className="rounded-xl bg-aqua-50 p-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-aqua-600">Orientação de manejo</p>
                      <p className="mt-1 text-xs text-aqua-800">{r.guidance.action}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Source */}
          <p className="text-xs text-aqua-500">
            Fonte: {params?.source}
          </p>
        </div>
      )}

      {!hasResults && (
        <p className="text-sm text-aqua-500">
          Informe os valores medidos do seu viveiro para ver a análise completa.
        </p>
      )}
    </div>
  );
}
