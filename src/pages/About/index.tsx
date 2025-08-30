import aboutImage from "@/assets/banner-header-about.webp";
import carpinteiroCortando from "@/assets/carpinteiro-cortando-placa.webp";
import slideConforto from "@/assets/slide-conforto.webp";
import slidePersonalidade from "@/assets/slide-personalidade.webp";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { 
  FaTrophy, 
  FaHandshake, 
  FaHeart, 
  FaStar,
  FaAward,
  FaCheckCircle,
  FaLightbulb,
  FaCog,
  FaHammer,
  FaRuler
} from "react-icons/fa";

export function About() {
  return (
    <div className="w-full bg-gradient-to-br from-background via-bg-section to-background">
      {/* Hero Section com Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source srcSet={aboutImage} type="image/webp" />
            <img
              src={aboutImage}
              alt="Eva Marcenaria - Nossa História"
              className="w-full h-full object-cover transform scale-110"
            />
          </picture>
          {/* Overlay gradiente mais sofisticado */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
        </div>
        
        {/* Conteúdo do Hero */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-2xl md:text-7xl leading-tight hero-title text-accent drop-shadow-lg transition-all duration-200 text-center drop-shadow-2xl mb-6">
              Nossa História
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Uma jornada de 25 anos de amizade, paixão pela marcenaria e dedicação à excelência
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Valores */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-bg-section to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl hero-title text-primary mb-6">
              Nossos Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A base do nosso sucesso está na qualidade, transparência e compromisso com cada projeto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualidade",
                description: "Cada peça é criada com os melhores materiais e técnicas artesanais",
                icon: FaTrophy,
                color: "text-primary"
              },
              {
                title: "Transparência",
                description: "Comunicação clara e honesta em todas as etapas do projeto",
                icon: FaHandshake,
                color: "text-primary"
              },
              {
                title: "Compromisso",
                description: "Dedicação total para superar as expectativas dos nossos clientes",
                icon: FaHeart,
                color: "text-primary"
              }
            ].map((value, index) => (
              <Card key={index} className="group hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-soft">
                <CardContent className="p-8 text-center">
                  <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${value.color}`}>
                    <value.icon />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção O Início */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl hero-title text-primary mb-6">
                  O Início
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  A <strong className="text-primary">Eva Marcenaria</strong> nasce através de uma grande e valiosa amizade de 25 anos, 
                  amor pelo que se faz e dedicação com o melhor resultado possível.
                </p>
                <p>
                  Formada pelos sócios <strong className="text-primary">Wagner</strong> e <strong className="text-primary">Hélio</strong>, 
                  a empresa tem uma bela história que não podemos deixar você de fora desse caminho trilhado de muito aprendizado, 
                  garra e determinação.
                </p>
                <p>
                  <strong className="text-primary">Wagner de Morais</strong>, filho de marceneiro, consequentemente nascido e criado 
                  dentro de uma marcenaria, já chegou a ter empresa com vários funcionários (inclusive o Hélio, que hoje é sócio na EVA), 
                  participando de tudo diariamente.
                </p>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative overflow-hidden rounded-2xl shadow-strong">
                <picture>
                  <source srcSet={slideConforto} type="image/webp" />
                  <img
                    src={slideConforto}
                    alt="Início da Eva Marcenaria"
                    className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Destaque - Wagner */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left">
              <div className="relative overflow-hidden rounded-2xl shadow-strong">
                <picture>
                  <source srcSet={carpinteiroCortando} type="image/webp" />
                  <img
                    src={carpinteiroCortando}
                    alt="Wagner trabalhando na marcenaria"
                    className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 animate-float"></div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl hero-title text-primary mb-6">
                  Wagner de Morais
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-6"></div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Se dedicou a desbravar e aprender toda parte técnica, fazer projetos, formar preços realistas 
                  e aprimorar cada vez mais o atendimento ao público.
                </p>
                <p>
                  Foi aí que ganhou destaque e elevou o cargo de ajudante a projetista, onde permaneceu por 
                  <strong className="text-primary"> 18 anos</strong> e foi muito bem reconhecido pela satisfação 
                  de seus clientes que não paravam de indicá-lo para outros trabalhos.
                </p>
                <p>
                  Juntamente com o pai, Wagner direcionou-se para o ramo de fornecimento de madeiras e ferragens 
                  para marcenaria, construção civil e naval, tornando-se madeireira, ainda que o coração 
                  pulsasse mais forte pela marcenaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção A Parceria */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl hero-title text-primary mb-6">
                  A Parceria
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  A parceria entre <strong className="text-primary">Wagner</strong> e <strong className="text-primary">Hélio</strong> 
                  representa mais do que uma sociedade empresarial - é a união de duas paixões pela marcenaria 
                  e pelo trabalho bem feito.
                </p>
                <p>
                  Com <strong className="text-primary">25 anos de amizade</strong>, eles compartilham não apenas 
                  o conhecimento técnico, mas também os valores fundamentais que fazem da Eva Marcenaria 
                  uma empresa de referência no mercado.
                </p>
                <p>
                  Juntos, eles transformam sonhos em realidade, criando móveis únicos que refletem a 
                  personalidade e o estilo de cada cliente, sempre com a qualidade e atenção aos detalhes 
                  que são a marca registrada da empresa.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  Conheça Nossos Projetos
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative overflow-hidden rounded-2xl shadow-strong">
                <picture>
                  <source srcSet={slidePersonalidade} type="image/webp" />
                  <img
                    src={slidePersonalidade}
                    alt="Ferramentas da marcenaria"
                    className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Especialidades */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl hero-title text-primary mb-6">
              Nossas Especialidades
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Técnicas e habilidades que garantem a excelência em cada projeto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Projetos Personalizados",
                description: "Criação de móveis únicos sob medida",
                icon: FaLightbulb,
                color: "text-primary"
              },
              {
                title: "Técnicas Artesanais",
                description: "Trabalho manual com precisão e qualidade",
                icon: FaHammer,
                color: "text-primary"
              },
              {
                title: "Acabamento Perfeito",
                description: "Detalhes que fazem a diferença",
                icon: FaCog,
                color: "text-primary"
              },
              {
                title: "Medidas Precisas",
                description: "Planejamento e execução perfeitos",
                icon: FaRuler,
                color: "text-primary"
              }
            ].map((specialty, index) => (
              <Card key={index} className="group hover-lift bg-white/80 backdrop-blur-sm border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className={`text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 ${specialty.color}`}>
                    <specialty.icon />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{specialty.title}</h3>
                  <p className="text-sm text-muted-foreground">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl hero-title text-primary mb-6">
              Números que Contam Nossa História
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Resultados que demonstram nossa dedicação e compromisso com a excelência
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25", label: "Anos de Amizade", suffix: "+", icon: FaHeart, color: "text-primary" },
              { number: "18", label: "Anos como Projetista", suffix: "", icon: FaAward, color: "text-primary" },
              { number: "500", label: "Projetos Realizados", suffix: "+", icon: FaCheckCircle, color: "text-primary" },
              { number: "100", label: "Clientes Satisfeitos", suffix: "%", icon: FaStar, color: "text-primary" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                  <stat.icon />
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Final - Call to Action */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl hero-title text-white mb-6">
              Faça Parte da Nossa História
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transforme sua casa com móveis únicos e personalizados, criados com a mesma paixão 
              e dedicação que nos move há 25 anos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-soft hover:shadow-medium transition-all duration-300"
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
