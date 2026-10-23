import { useMemo, useState } from 'react';
import {
  Check, CheckCheck, ClipboardCheck, Fish, History,
  RotateCcw, Sun, CalendarDays, Trash2, RefreshCw,
} from 'lucide-react';
import { Header } from './Header';
import {
  checklistDefinitions, getAllTasks, getChecklistById,
  type ChecklistDefinition,
} from '../data/checklists';
import { useChecklistState } from '../hooks/useChecklistState';

const iconMap: Record<string, typeof ClipboardCheck> = {
  clipboard: ClipboardCheck,
  pond: Fish,
  sun: Sun,
  calendar: CalendarDays,
  fish: Fish,
};

const RECURRING = new Set(['rotina-diaria', 'rotina-semanal']);

export function Checklist({ onBack }: { onBack: () => void }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const {
    isTaskDone, toggleTask, markAll, unmarkAll, recordCompletion, resetChecklist,
    history, getObservation, setObservation,
  } = useChecklistState();

  const activeChecklist = activeId ? getChecklistById(activeId) : null;

  if (activeChecklist) {
    return (
      <ChecklistDetail
        checklist={activeChecklist}
        onBack={() => setActiveId(null)}
        isTaskDone={isTaskDone}
        toggleTask={toggleTask}
        markAll={markAll}
        unmarkAll={unmarkAll}
        recordCompletion={recordCompletion}
        resetChecklist={resetChecklist}
        getObservation={getObservation}
        setObservation={setObservation}
      />
    );
  }

  return (
    <div className="flex min-h-full flex-col">
      <Header title="Check-list" subtitle="Organize as etapas da sua produção" onBack={onBack} />
      <div className="flex-1 px-4 py-4">
        <div className="space-y-3">
          {checklistDefinitions.map((cl) => {
            const allTasks = getAllTasks(cl);
            const doneCount = allTasks.filter((t) => isTaskDone(cl.id, t.id)).length;
            const pct = allTasks.length > 0 ? Math.round((doneCount / allTasks.length) * 100) : 0;
            const Icon = iconMap[cl.icon] ?? ClipboardCheck;
            return (
              <button
                key={cl.id}
                onClick={() => setActiveId(cl.id)}
                className="card flex w-full items-center gap-4 p-4 text-left transition active:scale-[0.99] hover:ring-aqua-300"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent-500 to-teal-600 text-white shadow-soft">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-aqua-950">{cl.name}</p>
                  <p className="text-xs text-aqua-700/70">{cl.description}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-aqua-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-500 to-aqua-600 transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-aqua-700">{pct}%</span>
                  </div>
                  <p className="mt-1 text-xs text-aqua-500">
                    {doneCount} de {allTasks.length} tarefas concluídas
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {history.length > 0 && (
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2 text-aqua-700">
              <History className="h-5 w-5" />
              <h2 className="text-sm font-bold uppercase tracking-wide">Histórico</h2>
            </div>
            <div className="space-y-2">
              {history.map((h, i) => (
                <div key={i} className="card flex items-center justify-between p-3">
                  <div>
                    <p className="text-sm font-semibold text-aqua-950">{h.checklistName}</p>
                    <p className="text-xs text-aqua-500">
                      Concluído em {new Date(h.completedAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <Check className="h-5 w-5 text-teal-500" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface ChecklistDetailProps {
  checklist: ChecklistDefinition;
  onBack: () => void;
  isTaskDone: (checklistId: string, taskId: string) => boolean;
  toggleTask: (checklistId: string, taskId: string) => void;
  markAll: (checklistId: string, taskIds: string[]) => void;
  unmarkAll: (checklistId: string) => void;
  recordCompletion: (checklistId: string, checklistName: string) => void;
  resetChecklist: (checklistId: string) => void;
  getObservation: (checklistId: string) => string;
  setObservation: (checklistId: string, value: string) => void;
}

function ChecklistDetail({
  checklist, onBack, isTaskDone, toggleTask, markAll, unmarkAll,
  recordCompletion, resetChecklist, getObservation, setObservation,
}: ChecklistDetailProps) {
  const allTasks = useMemo(() => getAllTasks(checklist), [checklist]);
  const [showUnmarkConfirm, setShowUnmarkConfirm] = useState(false);
  const [showRedoConfirm, setShowRedoConfirm] = useState(false);
  const [completionRecorded, setCompletionRecorded] = useState(false);

  const doneCount = allTasks.filter((t) => isTaskDone(checklist.id, t.id)).length;
  const pct = allTasks.length > 0 ? Math.round((doneCount / allTasks.length) * 100) : 0;
  const allDone = doneCount === allTasks.length && allTasks.length > 0;
  const isRecurring = RECURRING.has(checklist.id);

  if (allDone && !completionRecorded) {
    recordCompletion(checklist.id, checklist.name);
    setCompletionRecorded(true);
  }

  if (!allDone && completionRecorded) {
    setCompletionRecorded(false);
  }

  const handleMarkAll = () => {
    markAll(checklist.id, allTasks.map((t) => t.id));
  };

  const handleUnmarkAll = () => {
    unmarkAll(checklist.id);
    setShowUnmarkConfirm(false);
  };

  const handleRedo = () => {
    resetChecklist(checklist.id);
    setCompletionRecorded(false);
    setShowRedoConfirm(false);
  };

  const redoLabel = isRecurring ? 'Iniciar nova rodada' : 'Refazer check-list';

  return (
    <div className="flex min-h-full flex-col">
      <Header title={checklist.name} subtitle={checklist.description} onBack={onBack} />
      <div className="flex-1 px-4 py-4">
        {allDone ? (
          <div className="card animate-fadeIn p-6 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal-100">
              <Check className="h-8 w-8 text-teal-600" strokeWidth={3} />
            </div>
            <h2 className="mt-4 text-lg font-extrabold text-aqua-950">Check-list concluído!</h2>
            <p className="mt-1 text-sm text-aqua-700">Todas as tarefas foram concluídas.</p>
            <div className="mt-5 flex flex-col gap-2">
              <button
                onClick={() => setShowRedoConfirm(true)}
                className="flex items-center justify-center gap-2 rounded-xl bg-aqua-600 px-5 py-2.5 text-sm font-semibold text-white transition active:scale-95 hover:bg-aqua-700"
              >
                <RefreshCw className="h-4 w-4" /> {redoLabel}
              </button>
              <button
                onClick={onBack}
                className="rounded-xl bg-aqua-100 px-5 py-2.5 text-sm font-semibold text-aqua-700 transition active:scale-95"
              >
                Voltar para Check-lists
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div className="card mb-4 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-aqua-900">
                  {doneCount} de {allTasks.length} tarefas concluídas
                </p>
                <span className="text-sm font-extrabold text-aqua-700">{pct}%</span>
              </div>
              <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-aqua-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-teal-500 to-aqua-600 transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={handleMarkAll}
                  className="flex items-center gap-1.5 rounded-xl bg-teal-100 px-3 py-2 text-xs font-semibold text-teal-700 transition active:scale-95 hover:bg-teal-200"
                >
                  <CheckCheck className="h-3.5 w-3.5" /> Marcar todas
                </button>
                <button
                  onClick={() => setShowUnmarkConfirm(true)}
                  className="flex items-center gap-1.5 rounded-xl bg-rose-100 px-3 py-2 text-xs font-semibold text-rose-600 transition active:scale-95 hover:bg-rose-200"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Desmarcar todas
                </button>
              </div>
            </div>

            {/* Tasks by category */}
            <div className="space-y-5">
              {checklist.categories.map((cat) => (
                <div key={cat.name}>
                  <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-aqua-600">
                    {cat.name}
                  </h3>
                  <div className="space-y-2">
                    {cat.tasks.map((task) => {
                      const done = isTaskDone(checklist.id, task.id);
                      return (
                        <button
                          key={task.id}
                          onClick={() => toggleTask(checklist.id, task.id)}
                          className={`card flex w-full items-center gap-3 p-3.5 text-left transition active:scale-[0.99] ${
                            done ? 'ring-teal-300' : 'hover:ring-aqua-300'
                          }`}
                        >
                          <span
                            className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg border-2 transition ${
                              done ? 'border-teal-500 bg-teal-500 text-white' : 'border-aqua-300 bg-white'
                            }`}
                          >
                            {done && <Check className="h-4 w-4" strokeWidth={3} />}
                          </span>
                          <p
                            className={`text-sm font-medium ${
                              done ? 'text-aqua-400 line-through' : 'text-aqua-950'
                            }`}
                          >
                            {task.label}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Observations */}
            {checklist.hasObservations && (
              <div className="mt-5">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-aqua-600">
                  {checklist.observationLabel}
                </h3>
                <textarea
                  value={getObservation(checklist.id)}
                  onChange={(e) => setObservation(checklist.id, e.target.value)}
                  placeholder="Escreva observações sobre a produção..."
                  className="field min-h-[100px] resize-y"
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Unmark confirmation modal */}
      {showUnmarkConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="card w-full max-w-sm p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-rose-100">
                <Trash2 className="h-5 w-5 text-rose-500" />
              </span>
              <div>
                <h3 className="font-bold text-aqua-950">Desmarcar todas as tarefas?</h3>
                <p className="mt-1 text-sm text-aqua-700">
                  Tem certeza de que deseja desmarcar todas as tarefas?
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setShowUnmarkConfirm(false)}
                className="flex-1 rounded-xl bg-aqua-100 px-4 py-2.5 text-sm font-semibold text-aqua-700 transition active:scale-95"
              >
                Cancelar
              </button>
              <button
                onClick={handleUnmarkAll}
                className="flex-1 rounded-xl bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white transition active:scale-95 hover:bg-rose-600"
              >
                Desmarcar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Redo confirmation modal */}
      {showRedoConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="card w-full max-w-sm p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-aqua-100">
                <RefreshCw className="h-5 w-5 text-aqua-600" />
              </span>
              <div>
                <h3 className="font-bold text-aqua-950">Começar este check-list novamente?</h3>
                <p className="mt-1 text-sm text-aqua-700">
                  Seu progresso atual será reiniciado. O histórico anterior será mantido.
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setShowRedoConfirm(false)}
                className="flex-1 rounded-xl bg-aqua-100 px-4 py-2.5 text-sm font-semibold text-aqua-700 transition active:scale-95"
              >
                Cancelar
              </button>
              <button
                onClick={handleRedo}
                className="flex-1 rounded-xl bg-aqua-600 px-4 py-2.5 text-sm font-semibold text-white transition active:scale-95 hover:bg-aqua-700"
              >
                Começar novamente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
