import { useCallback, useEffect, useState } from 'react';
import type { Caption } from '@/captions';

const STORAGE_PREFIX = 'caption-bank-data:';

function storageKey(platformId: string): string {
  return `${STORAGE_PREFIX}${platformId}`;
}

function load(platformId: string): Caption[] {
  try {
    const raw = localStorage.getItem(storageKey(platformId));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (c): c is Caption =>
        c &&
        typeof c.id === 'string' &&
        typeof c.title === 'string' &&
        typeof c.text === 'string' &&
        typeof c.est === 'string'
    );
  } catch {
    return [];
  }
}

function persist(platformId: string, captions: Caption[]): void {
  try {
    localStorage.setItem(storageKey(platformId), JSON.stringify(captions));
  } catch {
    /* ignore quota errors */
  }
}

function makeId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function useCustomCaptions(platformId: string) {
  const [captions, setCaptions] = useState<Caption[]>(() => load(platformId));

  useEffect(() => {
    setCaptions(load(platformId));
  }, [platformId]);

  const addCaption = useCallback(
    (data: { title: string; text: string; est: string }) => {
      const caption: Caption = { id: makeId(), ...data };
      setCaptions((prev) => {
        const next = [caption, ...prev];
        persist(platformId, next);
        return next;
      });
    },
    [platformId]
  );

  const deleteCaption = useCallback(
    (id: string) => {
      setCaptions((prev) => {
        const next = prev.filter((c) => c.id !== id);
        persist(platformId, next);
        return next;
      });
    },
    [platformId]
  );

  return { captions, addCaption, deleteCaption };
}
