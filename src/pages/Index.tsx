
import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import QuoteSection from '@/components/home/QuoteSection';
import { getServicesData } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { getHeroImageUrl } from '@/utils/supabaseStorage';
import LoadingSpinner from '@/components/LoadingSpinner';

const Index = () => {
  // State for storing images and services
  const [heroImageUrl, setHeroImageUrl] = useState<string>("");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Load images and data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        console.log("Starting to load data for home page...");
        setLoading(true);
        
        // Load hero image
        console.log("Fetching hero image");
        const heroImg = await getHeroImageUrl();
        console.log("Hero image loaded:", heroImg);
        setHeroImageUrl(heroImg);
        
        // Load services with images
        console.log("Fetching services data");
        const servicesData = await getServicesData();
        console.log("Services data loaded:", servicesData);
        setServices(servicesData);
        
        setError(null);
      } catch (error) {
        console.error("Error loading data:", error);
        setError("Det gick inte att ladda sidan. Vänligen försök igen senare.");
      } finally {
        setLoading(false);
        console.log("Data loading complete");
      }
    };
    
    loadData();
  }, []);
  
  // Show a simple loading state while images are loading
  if (loading) {
    return <LoadingSpinner />;
  }
  
  // Show error message if data loading failed
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen flex-col px-4">
        <div className="text-red-500 text-xl mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="bg-primary text-white px-4 py-2 rounded-md"
        >
          Försök igen
        </button>
      </div>
    );
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
