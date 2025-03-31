
import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import QuoteSection from '@/components/home/QuoteSection';
import { getServicesData } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { getHeroImageUrl } from '@/utils/supabaseStorage';

const Index = () => {
  // State for storing images and services
  const [heroImageUrl, setHeroImageUrl] = useState<string>("");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Load images and data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load hero image
        const heroImg = await getHeroImageUrl();
        setHeroImageUrl(heroImg);
        
        // Load services with images
        const servicesData = await getServicesData();
        setServices(servicesData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  // Show a simple loading state while images are loading
  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>;
  }
  
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <HeroSection 
        title="Professionella städ- och byggtjänster i Sandviken"
        subtitle="Vi erbjuder högkvalitativa tjänster inom flyttstäd, kontorsstäd, dödsbo, demontering och takbyten."
        imageUrl={heroImageUrl}
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
