import { LazyImage } from '../../components/ui/lazy-component'

export function Products() {
  return (
    <div className="page-content space-y-8">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubra nossa linha completa de móveis sob medida e soluções em marcenaria
        </p>
      </section>
      
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <LazyImage
            src="/images/cozinha.webp"
            alt="Cozinha planejada"
            className="h-48"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Cozinhas</h3>
            <p className="text-gray-600 mb-4">
              Cozinhas planejadas sob medida com acabamentos de alta qualidade e funcionalidade.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Ver Mais
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <LazyImage
            src="/images/quarto.webp"
            alt="Móveis para quarto"
            className="h-48"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Quartos</h3>
            <p className="text-gray-600 mb-4">
              Guarda-roupas, cabeceiras e móveis para quarto com design personalizado.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Ver Mais
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <LazyImage
            src="/images/sala.webp"
            alt="Móveis para sala"
            className="h-48"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Sala de Estar</h3>
            <p className="text-gray-600 mb-4">
              Estantes, painéis de TV e móveis para sala com acabamentos refinados.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Ver Mais
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <LazyImage
            src="/images/escritorio.webp"
            alt="Móveis para escritório"
            className="h-48"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Escritórios</h3>
            <p className="text-gray-600 mb-4">
              Mesas, estantes e móveis para escritório com foco em produtividade.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Ver Mais
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <LazyImage
            src="/images/banheiro.webp"
            alt="Móveis para banheiro"
            className="h-48"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Banheiros</h3>
            <p className="text-gray-600 mb-4">
              Gabinetes e móveis para banheiro com materiais resistentes à umidade.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Ver Mais
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <LazyImage
            src="/images/especial.webp"
            alt="Projetos especiais"
            className="h-48"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Projetos Especiais</h3>
            <p className="text-gray-600 mb-4">
              Móveis especiais e projetos únicos para necessidades específicas.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Ver Mais
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}