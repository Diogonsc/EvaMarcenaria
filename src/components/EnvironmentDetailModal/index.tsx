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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="sticky top-0 z-[100] bg-white border-b p-4 pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <environment.icon className="text-lg text-primary" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-gray-900 font-playfair">
                  {environment.title}
                </DialogTitle>
                <p className="text-gray-600 text-sm">
                  Móveis planejados sob medida
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-8">
          {/* Seção Principal - Imagem Grande com Descrição */}
          <div className="relative">
            <div className="relative h-96 rounded-xl overflow-hidden mb-4">
              <img
                src={selectedImage}
                alt={environment.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg leading-relaxed font-medium">
                  {environment.description}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel de Imagens */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 font-montserrat">
              Galeria de Projetos
            </h3>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                    <div 
                      className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${environment.title} - Imagem ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {selectedImage === image && (
                        <div className="absolute inset-0 bg-primary/20 border-2 border-primary rounded-lg"></div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
