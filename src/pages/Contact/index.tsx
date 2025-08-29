import { ContactMap } from '@/components/ContactMap';

export function Contact() {
  return (
    <div className="page-content">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Estamos aqui para ajudar você a realizar seu projeto dos sonhos
        </p>
      </section>
      
      <ContactMap />
    </div>
  )
}