
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { ServiceData } from '@/types/services';

interface ServicesSectionProps {
  services: ServiceData[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Våra tjänster</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Vad vi kan hjälpa dig med</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av tjänster för att möta dina behov, 
            oavsett om det gäller städning eller byggnadsarbete.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="animate-fade-in" style={{ animationDelay: `${service.delay}ms` }}>
              <ServiceCard 
                id={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in">
          <Link 
            to="/services" 
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium group"
          >
            Se alla våra tjänster
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
