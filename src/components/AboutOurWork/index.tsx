import imageWorking from '../../assets/image-working.webp'
import { aboutOurWorkList } from '../../data/environments'

export function AboutOurWork() {
	return (
		<section className="w-full relative overflow-hidden my-20">
			{/* Container principal */}
			<div className="min-h-[600px] bg-[var(--bg-section)] relative">
				{/* Elemento decorativo de fundo */}
				<div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-section)] via-[var(--bg-section)] to-[var(--bg-header)] opacity-30 animate-pulse-slow"></div>
				
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative h-full">
					
					{/* Lado esquerdo - Texto */}
					<div className="bg-[var(--bg-section)] p-8 lg:p-16 flex flex-col justify-center relative z-10 lg:col-span-2 w-full animate-slide-in-left">
						<div className="w-full lg:max-w-[900px] mx-auto">
							{/* Badge decorativo */}
							<div className="inline-flex items-center px-4 py-2 bg-[var(--primary)] bg-opacity-10 rounded-full mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
								<span className="text-[var(--primary)] text-sm font-semibold tracking-wide">
									NOSSA FILOSOFIA
								</span>
							</div>
							
							<h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left text-[var(--primary)] mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.4s'}}>
								O QUE ESPERAR DO{' '}
								<span className="text-[var(--gray-600)]">NOSSO TRABALHO?</span>
							</h2>
							
							<div className="space-y-6 text-[var(--gray-600)] text-lg leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
								<p className="text-lg lg:text-xl">
									Responsabilidade, comprometimento, e compromisso com vocês, 
									um acabamento de primeira linha, materiais de alta qualidade 
									fornecidos pelos melhores e maiores fabricantes de acessórios 
									e ferragens para marcenaria do mundo.
								</p>
								
								<p className="text-lg lg:text-xl">
									Criatividade, estética, beleza e funcionalidade, essas são 
									as palavras de ordem em nossa empresa.
								</p>
							</div>
							
							{/* Citação destacada */}
							<div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[var(--primary)] transform hover:scale-105 transition-transform duration-300 animate-fade-in-up hover-lift" style={{animationDelay: '0.8s'}}>
								<p className="text-2xl lg:text-3xl font-bold text-[var(--primary)] italic text-center">
									"Não compre um planejado, compre uma realização!"
								</p>
							</div>
						</div>
					</div>
					
					{/* Lado direito - Imagem */}
					<div className="hidden lg:block relative h-[600px] animate-slide-in-right">
						{/* Container da imagem com overlay */}
						<div className="relative z-10 w-full h-full flex items-center justify-center">
							<div className="absolute inset-0 bg-gradient-to-l from-[var(--primary)] to-transparent opacity-20"></div>
							<picture className="block w-full h-full">
								<source srcSet={imageWorking} type="image/webp" />
								<img 
									src={imageWorking} 
									alt="Trabalho manual com plaina Stanley em madeira"
									className="w-full h-full object-cover"
								/>
							</picture>
						</div>
					</div>
				</div>
			</div>

			{/* Seção dos cards */}
			<div className="bg-white py-16 px-4 lg:px-8">
				<div className="max-w-7xl mx-auto">
					{/* Título da seção */}
					<div className="text-center mb-16 animate-fade-in-up">
						<h3 className="text-2xl md:text-4xl text-primary mb-4 leading-tight hero-title">
							Nossos Diferenciais
						</h3>
						<div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
					</div>
					
					{/* Grid dos cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{
							aboutOurWorkList.map((item, index) => (
								<div 
									key={item.id} 
									className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden animate-fade-in-up hover-lift"
									style={{
										animationDelay: `${index * 200}ms`
									}}
								>
									{/* Elemento decorativo de fundo */}
									<div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)] opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500 animate-float"></div>
									
									{/* Ícone */}
									<div className="relative z-10 mb-6">
										<div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
											<item.icon className='text-[var(--accent)]' size={32} />
										</div>
									</div>
									
									{/* Conteúdo */}
									<div className="relative z-10">
										<h3 className="text-xl font-bold text-[var(--primary)] mb-4 group-hover:text-[var(--gray-600)] transition-colors duration-300">
											{item.title}
										</h3>
										<p className="text-[var(--gray-600)] leading-relaxed text-base">
											{item.description}
										</p>
									</div>
									
									{/* Linha decorativa */}
									<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</section>
	)
}