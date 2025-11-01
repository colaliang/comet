import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Tutorial from '@/components/Tutorial'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import LazyLoader from '@/components/LazyLoader'
import SEOOptimizer from '@/components/SEOOptimizer'
import KeywordLanding from '@/components/KeywordLanding'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEOOptimizer />
      <Navigation />
      <Hero />
      <LazyLoader>
        <Features />
      </LazyLoader>
      <LazyLoader>
        <KeywordLanding />
      </LazyLoader>
      <LazyLoader>
        <Tutorial />
      </LazyLoader>
      <LazyLoader>
        <FAQ />
      </LazyLoader>
      <Footer />
    </main>
  )
}