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

export const environmentGalleries = {
  1: [ // QUARTOS
    'src/assets/slide-inspiracao-quarto-01.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-quarto-03.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-quarto-04.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-quarto-06.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-quarto-07.webp', // Substitua por imagem real
  ],
  2: [ // COZINHAS
    'src/assets/slide-cozinha-inspiracao-01.webp', // Substitua por imagem real
    'src/assets/slide-cozinha-inspiracao-02.webp', // Substitua por imagem real
    'src/assets/slide-cozinha-inspiracao-03.webp', // Substitua por imagem real
    'src/assets/slide-cozinha-inspiracao-04.webp', // Substitua por imagem real
    'src/assets/slide-cozinha-inspiracao-05.webp', // Substitua por imagem real
    'src/assets/slide-cozinha-inspiracao-06.webp', // Substitua por imagem real
  ],
  3: [ // BANHEIROS
    'src/assets/slide-banheiro-inspiracao-01.webp', // Substitua por imagem real
    'src/assets/slide-banheiro-inspiracao-02.webp', // Substitua por imagem real
    'src/assets/slide-banheiro-inspiracao-03.webp', // Substitua por imagem real
    'src/assets/slide-banheiro-inspiracao-04.webp', // Substitua por imagem real
    'src/assets/slide-banheiro-inspiracao-05.webp', // Substitua por imagem real
    'src/assets/slide-banheiro-inspiracao-06.webp', // Substitua por imagem real
  ],
  4: [ // ÁREAS DE SERVIÇO
    'src/assets/slide-inspiracao-servicos-01.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-servicos-02.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-servicos-03.webp', // Substitua por imagem real
  ],
  5: [ // SALA DE ESTAR
    'src/assets/slide-inspiracao-sala-01.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-sala-02.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-sala-03.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-sala-04.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-sala-05.webp', // Substitua por imagem real
    'src/assets/slide-inspiracao-sala-06.webp', // Substitua por imagem real
  ],
  6: [ // ÁREA GOURMET
    'src/assets/area_gourmet_01.webp', // Substitua por imagem real
    'src/assets/area_gourmet_02.webp', // Substitua por imagem real
    'src/assets/area_gourmet_03.webp', // Substitua por imagem real
    'src/assets/area_gourmet_04.webp', // Substitua por imagem real
    'src/assets/area_gourmet_05.webp', // Substitua por imagem real
  ],
}

export const environmentsList = [
  {
    id: 1,
    image: 'src/assets/quarto-capa.webp',
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
    image: 'src/assets/cozinha-capa.webp',
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
    image: 'src/assets/Banheiro-capa.webp',
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
    image: 'src/assets/area-servico-capa.webp',
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
    image: 'src/assets/sala-capa.webp',
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
    image: 'src/assets/area-gourmet-capa.webp',
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