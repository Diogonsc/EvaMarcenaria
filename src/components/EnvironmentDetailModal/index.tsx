import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { IconType } from 'react-icons'
import { useState, useEffect } from 'react'

interface EnvironmentDetailModalProps {
  isOpen: boolean
  onClose: () => void
  environment: {
    id: number
    image: string
    title: string
    description: string
    icon: IconType
    features: string[]
    // Adicionando mais imagens para o carousel
    gallery?: string[]
  } | null
}

export function EnvironmentDetailModal({ 
  isOpen, 
  onClose, 
  environment 
}: EnvironmentDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>('')

  useEffect(() => {
    if (environment) {
      setSelectedImage(environment.image)
    }
  }, [environment])

  if (!environment) return null

  // Imagens para o carousel (você pode adicionar mais imagens aqui)
  const galleryImages = environment.gallery || [
    environment.image,
    environment.image, // Placeholder - substitua por imagens reais
    environment.image, // Placeholder - substitua por imagens reais
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 border-0 shadow-none md:border md:shadow-2xl md:max-w-4xl md:max-h-[95vh] md:overflow-y-auto">


        {/* Header - Mobile Full Screen */}
        <DialogHeader className="sticky top-0 z-[100] bg-accent border-b border-primary/20 p-3 pb-2 md:p-4 md:pb-3 md:rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4 flex-1">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <environment.icon className="text-base md:text-lg text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <DialogTitle className="text-lg md:text-xl font-bold text-primary font-playfair leading-tight">
                  {environment.title}
                </DialogTitle>
                <p className="text-primary/70 text-xs md:text-sm font-medium mt-1">
                  Móveis planejados sob medida
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-primary/10 rounded-full transition-colors duration-200"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5 text-primary" />
            </button>
          </div>
        </DialogHeader>

        {/* Content Container - Scrollable on mobile */}
        <div className="flex-1 overflow-y-auto h-full md:h-auto">
          <div className="p-4 md:p-6 space-y-6 md:space-y-8">
            {/* Seção Principal - Imagem Grande com Descrição */}
            <div className="relative">
              <div className="relative h-[400px] md:h-[600px] lg:h-[500px] rounded-xl overflow-hidden mb-6 shadow-xl">
                <img
                  src={selectedImage}
                  alt={environment.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-white text-base md:text-lg leading-relaxed font-medium">
                    {environment.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel de Imagens */}
            <div className="space-y-4 mt-8 md:mt-10">
              <h3 className="text-xl md:text-2xl font-bold text-primary font-montserrat">
                Galeria de Projetos
              </h3>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full carousel-container"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div 
                        className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 carousel-image-hover"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${environment.title} - Imagem ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {selectedImage === image && (
                          <div className="absolute inset-0 bg-primary/30 border-2 border-primary rounded-lg"></div>
                        )}
                        {/* Overlay com número da imagem */}
                        <div className="absolute top-2 right-2 bg-primary/80 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm font-medium">
                          {index + 1}/{galleryImages.length}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 md:left-2 bg-white/90 hover:bg-white shadow-lg carousel-button border-primary/20" />
                <CarouselNext className="right-2 md:right-2 bg-white/90 hover:bg-white shadow-lg carousel-button border-primary/20" />
              </Carousel>
            </div>

            {/* Mobile Bottom Spacing */}
            <div className="h-6 md:hidden"></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
