'use client';

import { useCallback, useRef, useState } from 'react';

export function useCalculatorAction() {
  const resultRef = useRef<HTMLDivElement>(null);
  const [justCalculated, setJustCalculated] = useState(false);

  const runCalculation = useCallback((calculate: () => boolean | void) => {
    const didCalculate = calculate();

    if (didCalculate === false) {
      return;
    }

    setJustCalculated(true);
    window.setTimeout(() => setJustCalculated(false), 1600);

    if (window.matchMedia('(max-width: 767px)').matches) {
      window.setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, []);

  return { resultRef, justCalculated, runCalculation };
}
