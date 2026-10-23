import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'aquaguia_checklist_v2';
const HISTORY_KEY = 'aquaguia_checklist_history_v2';
const OBSERVATIONS_KEY = 'aquaguia_checklist_observations_v2';

export interface ChecklistState {
  [checklistId: string]: {
    [taskId: string]: {
      done: boolean;
      updatedAt: string;
    };
  };
}

export interface ChecklistHistoryEntry {
  checklistId: string;
  checklistName: string;
  completedAt: string;
}

export interface ChecklistObservations {
  [checklistId: string]: string;
}

function loadState(): ChecklistState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as ChecklistState : {};
  } catch {
    return {};
  }
}

function loadHistory(): ChecklistHistoryEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) as ChecklistHistoryEntry[] : [];
  } catch {
    return [];
  }
}

function loadObservations(): ChecklistObservations {
  try {
    const raw = localStorage.getItem(OBSERVATIONS_KEY);
    return raw ? JSON.parse(raw) as ChecklistObservations : {};
  } catch {
    return {};
  }
}

export function useChecklistState() {
  const [state, setState] = useState<ChecklistState>(loadState);
  const [history, setHistory] = useState<ChecklistHistoryEntry[]>(loadHistory);
  const [observations, setObservations] = useState<ChecklistObservations>(loadObservations);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem(OBSERVATIONS_KEY, JSON.stringify(observations));
  }, [observations]);

  const isTaskDone = useCallback(
    (checklistId: string, taskId: string): boolean => {
      return state[checklistId]?.[taskId]?.done ?? false;
    },
    [state],
  );

  const toggleTask = useCallback((checklistId: string, taskId: string) => {
    setState((prev) => {
      const checklist = { ...(prev[checklistId] ?? {}) };
      const current = checklist[taskId];
      if (current?.done) {
        delete checklist[taskId];
      } else {
        checklist[taskId] = { done: true, updatedAt: new Date().toISOString() };
      }
      return { ...prev, [checklistId]: checklist };
    });
  }, []);

  const markAll = useCallback((checklistId: string, taskIds: string[]) => {
    setState((prev) => {
      const checklist: NonNullable<ChecklistState[string]> = {};
      for (const tid of taskIds) {
        checklist[tid] = { done: true, updatedAt: new Date().toISOString() };
      }
      return { ...prev, [checklistId]: checklist };
    });
  }, []);

  const unmarkAll = useCallback((checklistId: string) => {
    setState((prev) => {
      if (!prev[checklistId]) return prev;
      const next = { ...prev };
      delete next[checklistId];
      return next;
    });
  }, []);

  const recordCompletion = useCallback((checklistId: string, checklistName: string) => {
    setHistory((prev) => {
      return [
        { checklistId, checklistName, completedAt: new Date().toISOString() },
        ...prev,
      ];
    });
  }, []);

  const resetChecklist = useCallback((checklistId: string) => {
    setState((prev) => {
      if (!prev[checklistId]) return prev;
      const next = { ...prev };
      delete next[checklistId];
      return next;
    });
  }, []);

  const getObservation = useCallback(
    (checklistId: string): string => observations[checklistId] ?? '',
    [observations],
  );

  const setObservation = useCallback((checklistId: string, value: string) => {
    setObservations((prev) => ({ ...prev, [checklistId]: value }));
  }, []);

  return {
    isTaskDone,
    toggleTask,
    markAll,
    unmarkAll,
    recordCompletion,
    resetChecklist,
    history,
    getObservation,
    setObservation,
  };
}
