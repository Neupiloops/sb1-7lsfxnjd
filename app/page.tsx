import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CryptoShowcase from '@/components/CryptoShowcase';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <CryptoShowcase />
      <HowItWorks />
      <Footer />
    </main>
  );
}