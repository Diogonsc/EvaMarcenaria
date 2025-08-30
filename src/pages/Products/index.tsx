import { LazyImage } from '../../components/ui/lazy-component'
// Importando imagens de capa dos ambientes
import cozinhaCapa from '@/assets/cozinha-capa.webp'
import quartoCapa from '@/assets/quarto-capa.webp'
import salaCapa from '@/assets/sala-capa.webp'
import banheiroCapa from '@/assets/Banheiro-capa.webp'
import areaServicoCapa from '@/assets/area-servico-capa.webp'
import areaGourmetCapa from '@/assets/area-gourmet-capa.webp'

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
            src={cozinhaCapa}
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
            src={quartoCapa}
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
            src={salaCapa}
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
            src={areaServicoCapa}
            alt="Área de serviço"
            className="h-48"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Áreas de Serviço</h3>
            <p className="text-gray-600 mb-4">
              Organização inteligente para suas áreas de serviço com móveis sob medida.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Ver Mais
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <LazyImage
            src={banheiroCapa}
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
            src={areaGourmetCapa}
            alt="Área gourmet"
            className="h-48"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Área Gourmet</h3>
            <p className="text-gray-600 mb-4">
              Espaços gourmet que transformam momentos em experiências únicas.
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