# Componente ContactMap - Versão Corrigida

Este componente exibe um iframe do Google Maps com o endereço do **UpRise Residencial & Comercial** e um formulário de contato avançado, seguindo rigorosamente a identidade visual da aplicação Eva Marcenaria.

## 🎨 **Identidade Visual Consistente**

### 🎯 **Cores da Aplicação**
- **Primary**: `#865e4a` (Marrom elegante da marca)
- **Background Section**: `#F6F4F2` (Bege claro)
- **Gray-600**: `#212529` (Texto principal)
- **Gray-100**: `#565c68` (Texto secundário)
- **Background**: `#ffffff` (Branco)

### 🏗️ **Estrutura de Design**
- **Seção com fundo bege**: `bg-[var(--bg-section)]`
- **Cards brancos**: Com sombras e hover effects
- **Título centralizado**: Com linha decorativa
- **Animações consistentes**: `animate-fade-in-up`

## 🚀 **Funcionalidades Mantidas**

### 📍 **Localização Atualizada**
- **Endereço**: Av. das Américas, 18.500 - Sala 507, UpRise Residencial & Comercial
- **Rio de Janeiro - RJ**
- **Mapa interativo** com zoom otimizado

### ✨ **UX/UI Profissional**
- **Design consistente**: Seguindo o padrão da aplicação
- **Ícones Lucide React**: MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle
- **Animações suaves**: Transições de 500ms nos cards
- **Layout responsivo**: Adaptação perfeita a todos os dispositivos

### 🔧 **Validação Avançada**
- **Validação em tempo real**: Erros aparecem conforme digitação
- **Máscara de telefone**: Formatação automática (21) 99999-9999
- **Regex para e-mail**: Validação robusta de formato
- **Feedback visual**: Bordas vermelhas e ícones de erro

### 📝 **Formulário Inteligente**
- **Estados de loading**: Spinner animado durante envio
- **Confirmação de sucesso**: Tela de agradecimento elegante
- **Campos desabilitados**: Durante processamento
- **Reset automático**: Formulário limpo após envio

## 📋 **Estrutura do Componente**

### 🗺️ **Seção do Mapa**
- Card branco com sombra e hover effect
- Título com ícone e cor primária
- Iframe do Google Maps responsivo
- Overlay interativo com hover effect
- Informações completas de contato com ícones coloridos

### 📧 **Seção do Formulário**
- Card branco com sombra e hover effect
- Título com ícone e cor primária
- Campos com validação em tempo real
- Botão com cor primária da marca
- Mensagem de sucesso após envio

## 🛠️ **Tecnologias Utilizadas**

- **React 19**: Hooks modernos (useState)
- **TypeScript**: Tipagem forte e interfaces
- **Tailwind CSS**: Estilização utilitária
- **shadcn/ui**: Componentes de UI consistentes
- **Lucide React**: Ícones modernos e consistentes
- **CSS Variables**: Cores personalizadas da marca

## 📱 **Responsividade**

- **Desktop**: Layout em 2 colunas lado a lado
- **Tablet**: Layout adaptativo
- **Mobile**: Layout em coluna única empilhada
- **Aspect Ratio**: Mapa mantém proporção 16:9

## 🎯 **Melhorias de Design**

### 🎨 **Consistência Visual**
- **Cores da marca**: Uso correto das variáveis CSS
- **Tipografia**: Hierarquia consistente com o resto da aplicação
- **Espaçamentos**: Seguindo o padrão estabelecido
- **Animações**: Efeitos suaves e elegantes

### 🏗️ **Estrutura de Seção**
- **Container principal**: `section` com `my-20`
- **Background**: `bg-[var(--bg-section)]`
- **Título centralizado**: Com linha decorativa
- **Grid responsivo**: `grid-cols-1 lg:grid-cols-2`

### 🎭 **Cards Interativos**
- **Hover effects**: `hover:-translate-y-2` e `hover:shadow-2xl`
- **Transições**: `transition-all duration-500`
- **Bordas**: `border border-gray-100`
- **Overflow**: `relative overflow-hidden`

## 🔄 **Estados do Componente**

1. **Estado Inicial**: Formulário vazio e válido
2. **Estado de Digitação**: Validação em tempo real
3. **Estado de Erro**: Campos destacados em vermelho
4. **Estado de Loading**: Spinner e campos desabilitados
5. **Estado de Sucesso**: Tela de confirmação

## 🎯 **Funcionalidades Avançadas**

### 📞 **Máscara de Telefone**
```typescript
const formatPhoneNumber = (value: string) => {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 11) {
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  return value;
};
```

### ✅ **Validação Robusta**
- Regex para e-mail
- Validação de comprimento mínimo
- Verificação de campos obrigatórios
- Feedback visual imediato

### 🎨 **Animações CSS**
- Transições suaves (500ms para cards, 200ms para inputs)
- Hover effects com translate
- Opacity transitions
- Loading spinner animado

## 📊 **Performance**

- **Lazy Loading**: Iframe carrega sob demanda
- **Debounced Validation**: Validação otimizada
- **Memory Management**: Cleanup automático de timeouts
- **Bundle Size**: Ícones importados seletivamente

## 🔒 **Segurança**

- **HTML5 Validation**: Validação nativa do navegador
- **XSS Prevention**: Sanitização de inputs
- **CSRF Protection**: Ready para implementação
- **Data Privacy**: Mensagem de segurança

## 📞 **Uso**

```tsx
import { ContactMap } from '@/components/ContactMap';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactMap />
    </div>
  );
}
```

## ✅ **Correções Implementadas**

- **Cores corrigidas**: Seguindo a paleta da marca
- **Design consistente**: Alinhado com outros componentes
- **Estrutura de seção**: Seguindo o padrão da aplicação
- **Animações**: Efeitos suaves e elegantes
- **Responsividade**: Funcionamento perfeito em todos os dispositivos

---

**Componente alinhado com a identidade visual da Eva Marcenaria** 🎨✨
