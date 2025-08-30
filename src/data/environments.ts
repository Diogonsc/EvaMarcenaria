// Dados de exemplo para as galerias de imagens de cada ambiente
// Você pode substituir estas URLs por imagens reais do seu projeto

import { 
	MdBed, 
	MdKitchen, 
	MdShower, 
	MdLocalLaundryService, 
	MdLiving, 
	MdWineBar 
} from 'react-icons/md'
import { FaCircleCheck, FaScrewdriverWrench } from 'react-icons/fa6'
import { FaLightbulb } from 'react-icons/fa'

// Importando imagens dos quartos
import slideQuarto01 from '@/assets/slide-inspiracao-quarto-01.webp'
import slideQuarto03 from '@/assets/slide-inspiracao-quarto-03.webp'
import slideQuarto04 from '@/assets/slide-inspiracao-quarto-04.webp'
import slideQuarto06 from '@/assets/slide-inspiracao-quarto-06.webp'
import slideQuarto07 from '@/assets/slide-inspiracao-quarto-07.webp'

// Importando imagens das cozinhas
import slideCozinha01 from '@/assets/slide-cozinha-inspiracao-01.webp'
import slideCozinha02 from '@/assets/slide-cozinha-inspiracao-02.webp'
import slideCozinha03 from '@/assets/slide-cozinha-inspiracao-03.webp'
import slideCozinha04 from '@/assets/slide-cozinha-inspiracao-04.webp'
import slideCozinha05 from '@/assets/slide-cozinha-inspiracao-05.webp'
import slideCozinha06 from '@/assets/slide-cozinha-inspiracao-06.webp'

// Importando imagens dos banheiros
import slideBanheiro01 from '@/assets/slide-banheiro-inspiracao-01.webp'
import slideBanheiro02 from '@/assets/slide-banheiro-inspiracao-02.webp'
import slideBanheiro03 from '@/assets/slide-banheiro-inspiracao-03.webp'
import slideBanheiro04 from '@/assets/slide-banheiro-inspiracao-04.webp'
import slideBanheiro05 from '@/assets/slide-banheiro-inspiracao-05.webp'
import slideBanheiro06 from '@/assets/slide-banheiro-inspiracao-06.webp'

// Importando imagens das áreas de serviço
import slideServicos01 from '@/assets/slide-inspiracao-servicos-01.webp'
import slideServicos02 from '@/assets/slide-inspiracao-servicos-02.webp'
import slideServicos03 from '@/assets/slide-inspiracao-servicos-03.webp'

// Importando imagens das salas
import slideSala01 from '@/assets/slide-inspiracao-sala-01.webp'
import slideSala02 from '@/assets/slide-inspiracao-sala-02.webp'
import slideSala03 from '@/assets/slide-inspiracao-sala-03.webp'
import slideSala04 from '@/assets/slide-inspiracao-sala-04.webp'
import slideSala05 from '@/assets/slide-inspiracao-sala-05.webp'
import slideSala06 from '@/assets/slide-inspiracao-sala-06.webp'

// Importando imagens das áreas gourmet
import areaGourmet01 from '@/assets/area_gourmet_01.webp'
import areaGourmet02 from '@/assets/area_gourmet_02.webp'
import areaGourmet03 from '@/assets/area_gourmet_03.webp'
import areaGourmet04 from '@/assets/area_gourmet_04.webp'
import areaGourmet05 from '@/assets/area_gourmet_05.webp'

// Importando imagens de capa
import quartoCapa from '@/assets/quarto-capa.webp'
import cozinhaCapa from '@/assets/cozinha-capa.webp'
import banheiroCapa from '@/assets/Banheiro-capa.webp'
import areaServicoCapa from '@/assets/area-servico-capa.webp'
import salaCapa from '@/assets/sala-capa.webp'
import areaGourmetCapa from '@/assets/area-gourmet-capa.webp'

export const environmentGalleries = {
  1: [ // QUARTOS
    slideQuarto01,
    slideQuarto03,
    slideQuarto04,
    slideQuarto06,
    slideQuarto07,
  ],
  2: [ // COZINHAS
    slideCozinha01,
    slideCozinha02,
    slideCozinha03,
    slideCozinha04,
    slideCozinha05,
    slideCozinha06,
  ],
  3: [ // BANHEIROS
    slideBanheiro01,
    slideBanheiro02,
    slideBanheiro03,
    slideBanheiro04,
    slideBanheiro05,
    slideBanheiro06,
  ],
  4: [ // ÁREAS DE SERVIÇO
    slideServicos01,
    slideServicos02,
    slideServicos03,
  ],
  5: [ // SALA DE ESTAR
    slideSala01,
    slideSala02,
    slideSala03,
    slideSala04,
    slideSala05,
    slideSala06,
  ],
  6: [ // ÁREA GOURMET
    areaGourmet01,
    areaGourmet02,
    areaGourmet03,
    areaGourmet04,
    areaGourmet05,
  ],
}

export const environmentsList = [
  {
    id: 1,
    image: quartoCapa,
    title: 'QUARTOS',
    description: 'Móveis planejados que transformam seu quarto em um refúgio de conforto e elegância',
    icon: MdBed,
    features: [
      'Guarda-roupas sob medida',
      'Penteadeiras funcionais',
      'Organização inteligente'
    ],
    gallery: environmentGalleries[1]
  },
  {
    id: 2,
    image: cozinhaCapa,
    title: 'COZINHAS',
    description: 'Cozinhas funcionais e sofisticadas que unem praticidade e design exclusivo',
    icon: MdKitchen,
    features: [
      'Armários planejados',
      'Ilhas gourmet',
      'Acabamentos duráveis'
    ],
    gallery: environmentGalleries[2]
  },
  {
    id: 3,
    image: banheiroCapa,
    title: 'BANHEIROS',
    description: 'Móveis para banheiro que combinam funcionalidade com acabamentos premium',
    icon: MdShower,
    features: [
      'Gabinetes resistentes',
      'Espelhos integrados',
      'Organização prática'
    ],
    gallery: environmentGalleries[3]
  },
  {
    id: 4,
    image: areaServicoCapa,
    title: 'ÁREAS DE SERVIÇO',
    description: 'Organização inteligente para suas áreas de serviço com móveis sob medida',
    icon: MdLocalLaundryService,
    features: [
      'Lavanderias completas',
      'Armários organizadores',
      'Espaços otimizados'
    ],
    gallery: environmentGalleries[4]
  },
  {
    id: 5,
    image: salaCapa,
    title: 'SALA DE ESTAR',
    description: 'Móveis planejados que criam ambientes acolhedores e sofisticados',
    icon: MdLiving,
    features: [
      'Estantes personalizadas',
      'Painéis decorativos',
      'TV centers funcionais'
    ],
    gallery: environmentGalleries[5]
  },
  {
    id: 6,
    image: areaGourmetCapa,
    title: 'ÁREA GOURMET',
    description: 'Espaços gourmet que transformam momentos em experiências únicas',
    icon: MdWineBar,
    features: [
      'Ilhas gourmet',
      'Adegas integradas',
      'Espaços de convivência'
    ],
    gallery: environmentGalleries[6]
  }
]

export const aboutOurWorkList = [
  {
    id: 1,
    icon: FaScrewdriverWrench,
    title: "Trabalho",
    description: "Projetamos e desenvolvemos móveis de alto padrão, com matéria prima certificada e sustentável, com acabamentos e utensílios de altíssimo nível, levando aos nossos clientes conforto, segurança e sofisticação."
  },
  {
    id: 2,
    icon: FaCircleCheck,
    title: "Realizações",
    description: "Fazemos com que cada vez mais, ambientes sejam transformados em lares verdadeiramente aconchegantes e que você tenha 100% de aproveitamento de espaço para apreciar e descansar em família e amigos."
  },
  {
    id: 3,
    icon: FaLightbulb,
    title: "Comprometimento",
    description: "Comprometimento, inovação, modernidade, foco nas necessidades do público, bom gosto, sofisticação, qualidade, sustentabilidade, personalidade, atento aos detalhes e honestidade."
  }
]