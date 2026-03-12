import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CoreValues from '@/components/CoreValues';
import TechAdvantage from '@/components/TechAdvantage';
import Product from '@/components/Product';
import DataCapability from '@/components/DataCapability';
import Features from '@/components/Features';
import Security from '@/components/Security';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="grid-bg min-h-screen">
      <Header />
      <Hero />
      <CoreValues />
      <TechAdvantage />
      <Product />
      <DataCapability />
      <Features />
      <Security />
      <CTA />
      <Footer />
    </main>
  );
}
