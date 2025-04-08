
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import QuoteSection from '@/components/home/QuoteSection';
import ContactSection from '@/components/home/ContactSection';
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
      <Helmet>
        <title>Bygg & Städ i toppklass Sandviken - Professionell städ- och byggtjänst</title>
        <meta name="description" content="Bygg och städ i Sandviken - Din lokala partner för städning och byggtjänster. Vi erbjuder flyttstäd, kontorsstäd, dödsbo, demontering och takbyten med kvalitetsgaranti." />
        <meta name="keywords" content="bygg och städ i sandviken, städ sandviken, bygg sandviken, flyttstäd sandviken, kontorsstäd, dödsbo sandviken" />
        <link rel="canonical" href="https://bygg-stad-sandviken.lovable.app/" />
      </Helmet>
      
      {/* Hero Section */}
      <HeroSection 
        title="Professionella bygg- och städtjänster i Sandviken"
        subtitle="Vi erbjuder högkvalitativa tjänster inom flyttstäd, kontorsstäd, dödsbo, demontering och takbyten i Sandviken med omnejd."
        imageUrl={heroImageUrl}
      />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection services={services} />
      
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Bygg & Städ i Sandviken - Kvalitet och service</h2>
            <p>
              Bygg & Städ i toppklass Sandviken är ditt självklara val för professionella städ- och byggtjänster i Sandvikenområdet. 
              Med vår erfarenhet och kunskap säkerställer vi att varje uppdrag utförs med noggrannhet och högsta kvalitet.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Flyttstäd i Sandviken</h3>
            <p>
              Vår flyttstädning garanterar en skinande ren bostad när du lämnar över nycklarna. Vi följer en detaljerad checklista 
              och säkerställer att varje utrymme är grundligt rengjort från golv till tak. Med vår kvalitetsgaranti kan du känna 
              dig trygg med att städningen uppfyller alla krav som ställs vid en besiktning.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Kontorsstäd i Sandviken</h3>
            <p>
              En ren och välskött arbetsmiljö bidrar till högre produktivitet och trivsel. Våra kontorsstädningstjänster 
              skräddarsys efter ditt företags specifika behov, oavsett om det handlar om daglig städning eller mer omfattande periodicitet.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Byggarbeten i Sandviken</h3>
            <p>
              Från takbyten till demontering - vårt erfarna team hanterar en mängd olika byggprojekt med precision och yrkesskicklighet. 
              Vi använder endast material av hög kvalitet och följer alla gällande byggnormer för att säkerställa ett hållbart resultat.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Varför välja oss?</h3>
            <ul>
              <li>Lokal förankring och god kännedom om Sandviken</li>
              <li>Över 15 års erfarenhet i branschen</li>
              <li>Fullt försäkrade och certifierade</li>
              <li>Miljövänliga rengöringsmetoder och material</li>
              <li>Konkurrensmässiga priser och transparent offerering</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Quote Section */}
      <QuoteSection />
    </div>
  );
};

export default Index;
