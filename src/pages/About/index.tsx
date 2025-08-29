export function About() {
  return (
    <div className="page-content space-y-8">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A Eva Marcenaria é uma empresa especializada em móveis sob medida e projetos de marcenaria de alta qualidade.
        </p>
      </section>
      
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Nossa História</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Fundada com a missão de transformar sonhos em realidade através do artesanato em madeira, 
          nossa empresa tem se dedicado a criar móveis únicos e funcionais que se adaptam perfeitamente 
          ao estilo e necessidades de cada cliente.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Com anos de experiência no mercado, nossa equipe de marceneiros especializados utiliza 
          técnicas tradicionais aliadas à tecnologia moderna para garantir a melhor qualidade em cada projeto.
        </p>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Nossa Missão</h3>
          <p className="text-gray-600">
            Criar móveis sob medida que combinem funcionalidade, beleza e durabilidade, 
            superando as expectativas de nossos clientes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Nossa Visão</h3>
          <p className="text-gray-600">
            Ser referência em marcenaria de qualidade, reconhecida pela excelência 
            em nossos produtos e atendimento.
          </p>
        </div>
      </section>
    </div>
  )
}