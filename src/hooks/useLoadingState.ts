import { useState, useEffect } from 'react';

interface UseLoadingStateOptions {
  initialLoadingTime?: number; // Tempo inicial de loading em ms
  minDisplayTime?: number; // Tempo mínimo de exibição em ms
  onLoadingComplete?: () => void;
}

export function useLoadingState(options: UseLoadingStateOptions = {}) {
  const {
    initialLoadingTime = 3000,
    minDisplayTime = 2000,
    onLoadingComplete
  } = options;

  const [isLoading, setIsLoading] = useState(true);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    // Simular tempo de carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialLoadingTime);

    return () => clearTimeout(timer);
  }, [initialLoadingTime]);

  const handleLoadingComplete = () => {
    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

    setTimeout(() => {
      onLoadingComplete?.();
    }, remainingTime);
  };

  return {
    isLoading,
    setIsLoading,
    handleLoadingComplete
  };
}
