
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import QuoteSection from '@/components/home/QuoteSection';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';

const Index = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <HeroSection 
        title="Professionella städ- och byggtjänster i Sandviken"
        subtitle="Vi erbjuder högkvalitativa tjänster inom flyttstäd, kontorsstäd, dödsbo, demontering och takbyten."
        imageUrl="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
      />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection services={services} />
      
      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />
      
      {/* Quote Section */}
      <QuoteSection />
    </div>
  );
};

export default Index;
