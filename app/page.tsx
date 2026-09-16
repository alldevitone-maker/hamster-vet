import { AboutSection } from '@/components/home/about-section'
import { ContactSection } from '@/components/home/contact-section'
import { HeroBanner } from '@/components/home/hero-banner'
import { ServicesSection } from '@/components/home/services-section'
import { TeamSection } from '@/components/home/team-section'
import { IntroLoader } from '@/components/intro-loader'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <IntroLoader>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <HeroBanner />
          <ServicesSection />
          <AboutSection />
          <TeamSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </IntroLoader>
  )
}
