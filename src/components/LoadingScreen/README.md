# LoadingScreen Component

Componente de tela de carregamento personalizado para a aplicação Eva Marcenaria.

## Características

- **Background**: Utiliza a cor `--primary` (#865e4a) como fundo
- **Logo**: Exibe a logo bege da Eva Marcenaria centralizada
- **Animação**: Logo com efeito pulse e pontos animados
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Configurável**: Tempo mínimo de exibição e callbacks personalizáveis

## Uso Básico

```tsx
import LoadingScreen from '@/components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingScreen 
      isLoading={isLoading} 
      onLoadingComplete={() => console.log('Loading completed')}
      minDisplayTime={2000}
    />
  );
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `isLoading` | `boolean` | - | Controla se a tela de loading deve ser exibida |
| `onLoadingComplete` | `() => void` | - | Callback executado quando o loading é concluído |
| `minDisplayTime` | `number` | `2000` | Tempo mínimo de exibição em milissegundos |

## Hook Personalizado

Para facilitar o uso, foi criado o hook `useLoadingState`:

```tsx
import { useLoadingState } from '@/hooks/useLoadingState';

function App() {
  const { isLoading, handleLoadingComplete } = useLoadingState({
    initialLoadingTime: 3000,
    minDisplayTime: 2000,
    onLoadingComplete: () => {
      console.log('Application ready!');
    }
  });

  return (
    <LoadingScreen 
      isLoading={isLoading} 
      onLoadingComplete={handleLoadingComplete}
    />
  );
}
```

## Estilização

O componente utiliza as seguintes classes CSS:

- `bg-primary`: Cor de fundo personalizada
- `animate-pulse`: Animação da logo
- `animate-bounce`: Animação dos pontos de loading
- `z-[9999]`: Z-index alto para ficar sobre outros elementos

## Arquivos Relacionados

- `src/components/LoadingScreen.tsx` - Componente principal
- `src/hooks/useLoadingState.ts` - Hook personalizado
- `src/assets/logo-bege-eva.webp` - Logo utilizada
