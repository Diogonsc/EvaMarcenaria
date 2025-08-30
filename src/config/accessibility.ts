export const accessibilityConfig = {
  // Configurações de navegação por teclado
  keyboard: {
    // Teclas de atalho para navegação
    shortcuts: {
      skipToContent: 'Tab',
      closeModal: 'Escape',
      submit: 'Enter',
      activate: 'Space',
    },
    // Configurações de foco
    focus: {
      visible: true,
      ringColor: 'var(--primary)',
      ringOffset: '2px',
    },
  },

  // Configurações de leitores de tela
  screenReader: {
    // Textos alternativos padrão
    altTexts: {
      logo: 'Eva Marcenaria - Logo da empresa',
      menu: 'Menu de navegação',
      close: 'Fechar',
      loading: 'Carregando',
      error: 'Erro',
      success: 'Sucesso',
    },
    // Configurações de live regions
    liveRegions: {
      polite: 'polite',
      assertive: 'assertive',
      off: 'off',
    },
  },

  // Configurações de contraste e cores
  contrast: {
    // Ratios mínimos de contraste
    ratios: {
      normal: 4.5,
      large: 3.0,
    },
    // Cores de foco
    focusColors: {
      primary: 'var(--primary)',
      secondary: 'var(--accent)',
    },
  },

  // Configurações de animações
  animations: {
    // Reduzir animações para usuários que preferem
    reduceMotion: {
      enabled: true,
      query: '(prefers-reduced-motion: reduce)',
    },
    // Durações de animação
    durations: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
  },

  // Configurações de formulários
  forms: {
    // Validação de campos obrigatórios
    required: {
      indicator: '*',
      ariaLabel: 'campo obrigatório',
    },
    // Mensagens de erro
    errors: {
      required: 'Este campo é obrigatório',
      invalid: 'Valor inválido',
      minLength: 'Mínimo de caracteres não atingido',
      maxLength: 'Máximo de caracteres excedido',
    },
  },

  // Configurações de modais
  modals: {
    // Configurações de focus trap
    focusTrap: {
      enabled: true,
      returnFocus: true,
    },
    // Configurações de overlay
    overlay: {
      role: 'dialog',
      ariaModal: true,
    },
  },

  // Configurações de carrosséis
  carousels: {
    // Configurações de navegação
    navigation: {
      autoPlay: true,
      autoPlayInterval: 5000,
      pauseOnHover: true,
    },
    // Configurações de indicadores
    indicators: {
      role: 'tablist',
      itemRole: 'tab',
    },
  },
}

// Função para verificar se o usuário prefere movimento reduzido
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Função para verificar se o usuário prefere contraste alto
export function prefersHighContrast(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-contrast: high)').matches
}

// Função para verificar se o usuário prefere esquema escuro
export function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}
