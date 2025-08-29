
import type { IconType } from 'react-icons'
import { Button } from '@/components/ui/button'
import { EnvironmentDetailModal } from '@/components/EnvironmentDetailModal'
import { useState } from 'react'
import { environmentsList } from '@/data/environments'

interface Environment {
	id: number
	image: string
	title: string
	description: string
	icon: IconType
	features: string[]
	gallery?: string[]
}

export function EnvironmentsEva() {
	const [selectedEnvironment, setSelectedEnvironment] = useState<Environment | null>(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleOpenModal = (environment: Environment) => {
		setSelectedEnvironment(environment)
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
		setSelectedEnvironment(null)
	}

	return (
		<section className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary rounded-full blur-3xl"></div>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-4xl text-primary mb-4 leading-tight hero-title">
						AMBIENTES EVA
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
					<p className="text-lg text-primary max-w-2xl mx-auto leading-relaxed">
						Transformamos sonhos em realidade através de móveis planejados que unem 
						funcionalidade, qualidade e design exclusivo para cada ambiente.
					</p>
				</div>

				{/* Environments Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{environmentsList.map((environment) => (
						<div 
							key={environment.id}
							className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
						>
							{/* Image Container */}
							<div className="relative h-80 overflow-hidden">
								<img 
									src={environment.image} 
									alt={environment.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								
								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								
								{/* Icon Badge */}
								<div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500">
									<environment.icon className="text-xl text-primary" />
								</div>
								
								{/* Content Overlay */}
								<div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
									<p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
										{environment.description}
									</p>
								</div>
							</div>
							
							{/* Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat text-primary transition-colors duration-300">
									{environment.title}
								</h3>
								
								{/* Features List */}
								<div className="space-y-2 mb-4">
									{environment.features.map((feature, index) => (
										<div key={index} className="flex items-center text-sm text-gray-600">
											<div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
											{feature}
										</div>
									))}
								</div>
								
								{/* CTA Button - Always visible on mobile, hidden by default on desktop, shown on hover */}
								<Button 
									onClick={() => handleOpenModal(environment)}
									className="w-full md:group-hover:opacity-100 md:translate-y-4"
									size="lg"
								>
									Ver Mais
								</Button>
							</div>
							
							{/* Decorative Corner */}
							<div className="absolute top-0 left-0 w-0 h-0 border-l-[3rem] border-t-[3rem] border-l-transparent border-t-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</div>
					))}
				</div>
			</div>

			{/* Environment Detail Modal */}
			<EnvironmentDetailModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				environment={selectedEnvironment}
			/>
		</section>
	)
}