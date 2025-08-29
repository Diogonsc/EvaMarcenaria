import { useState, useEffect } from 'react';
import logoBegeEva from '@/assets/logo-bege-eva.webp';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
  minDisplayTime?: number; // Tempo mínimo de exibição em ms
}

export function LoadingScreen({ 
  isLoading, 
  onLoadingComplete, 
  minDisplayTime = 2000 
}: LoadingScreenProps) {
  const [shouldShow, setShouldShow] = useState(true);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (!isLoading) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      const timer = setTimeout(() => {
        setShouldShow(false);
        onLoadingComplete?.();
      }, remainingTime);

      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete, minDisplayTime, startTime]);

  if (!shouldShow) return null;

  return (
    <div className="fixed inset-0 bg-primary z-[9999] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="animate-pulse">
          <img 
            src={logoBegeEva} 
            alt="Eva Marcenaria" 
            className="h-32 w-auto"
          />
        </div>
        
        {/* Texto Carregando */}
        <div className="text-center">
          <p className="text-white text-xl font-medium tracking-wide">
            Carregando
          </p>
          <div className="flex justify-center mt-3 space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
