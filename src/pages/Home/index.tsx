import { HeroCarousel } from '@/components/HeroCarousel'
import { EnvironmentsEva } from '@/components/EnvironmentsEva'
import { AboutOurWork } from '@/components/AboutOurWork'
import { ContactMap } from '../../components/ContactMap'

export function Home() {
  return (
    <div className="w-full">
      <HeroCarousel />
      <EnvironmentsEva />
      <AboutOurWork />
      <ContactMap />
    </div>
  )
}