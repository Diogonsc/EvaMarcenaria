import { Link } from 'react-router-dom'
import { SocialMedia } from '../SocialMedia'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import LogoEvaBege from '@/assets/logo-bege-eva.webp'

export function Footer() {
	const navItems = [
		{ to: '/', label: 'Home' },
		{ to: '/about', label: 'Sobre' },
		{ to: '/products', label: 'Produtos' },
		{ to: '/contact', label: 'Contato' },
		{ to: '/work-with-us', label: 'Trabalhe Conosco' },
	]

	const socialItems = [
		{
			icon: <FaFacebookF />,
			link: 'https://www.facebook.com/eva.marcenaria',
			label: 'Facebook'
		},
		{
			icon: <FaInstagram />,
			link: 'https://www.instagram.com/eva.marcenaria',
			label: 'Instagram'
		},
		{
			icon: <FaYoutube />,
			link: 'https://www.youtube.com/@evamarcenaria',
			label: 'YouTube'
		},
		{
			icon: <FaTiktok />,
			link: 'https://www.tiktok.com/@evamarcenaria',
			label: 'TikTok'
		}
	]

	return (
		<footer className="bg-[var(--bg-footer)] text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Logo e Sobre */}
					<div className="lg:col-span-1">
						<div className="mb-6">
							<img
								src={LogoEvaBege}
								alt="Eva Marcenaria"
								className="w-32 h-32 object-contain"
							/>
						</div>
					</div>

					{/* Menu de Navegação */}
					<div>
						<h3 className="text-lg font-semibold mb-6 text-accent">Navegação</h3>
						<nav className="space-y-3">
							{navItems.map((item) => (
								<Link
									key={item.to}
									to={item.to}
									className="block text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
								>
									{item.label}
								</Link>
							))}
						</nav>
					</div>

					{/* Contato */}
					<div>
						<h3 className="text-lg font-semibold mb-6 text-accent">Contato</h3>
						<div className="space-y-3">
							<div>
								<p className="text-gray-300 text-sm">
									<strong className="text-white">E-mail:</strong>
								</p>
								<a 
									href="mailto:eva@evamarcenaria.com.br"
									className="text-accent hover:text-accent/80 transition-colors duration-200 text-sm"
								>
									eva@evamarcenaria.com.br
								</a>
							</div>
							<div>
								<p className="text-gray-300 text-sm">
									<strong className="text-white">Telefone:</strong>
								</p>
								<a 
									href="tel:+552141013747"
									className="text-accent hover:text-accent/80 transition-colors duration-200 text-sm"
								>
									(21) 4101-3747
								</a>
							</div>
						</div>
					</div>

					{/* Localização e Redes Sociais */}
					<div>
						<h3 className="text-lg font-semibold mb-6 text-accent">Localização</h3>
						<div className="mb-6">
							<p className="text-gray-300 text-sm">
								<strong className="text-white">Cidade:</strong>
							</p>
							<p className="text-accent text-sm">Rio de Janeiro / RJ</p>
						</div>

						<h3 className="text-lg font-semibold mb-4 text-accent">Redes Sociais</h3>
						<SocialMedia
							items={socialItems}
							direction="row"
							gap={3}
							size="md"
							className="text-primary"
							isScrolled={true}
						/>
					</div>
				</div>

				{/* Linha divisória */}
				<div className="border-t border-gray-700 mt-8 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm text-center md:text-left">
							© {new Date().getFullYear()} Eva Marcenaria. Todos os direitos reservados.
						</p>
						<p className="text-gray-400 text-sm text-center md:text-right mt-2 md:mt-0">
							Desenvolvido com para Eva Marcenaria.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}