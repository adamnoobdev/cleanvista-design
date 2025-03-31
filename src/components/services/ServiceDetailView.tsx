
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import QuoteForm from '@/components/QuoteForm';
import { ServiceDetail } from '@/types/services';

interface ServiceDetailViewProps {
  service: ServiceDetail;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service }) => {
  return (
    <div className="page-transition">
      <HeroSection 
        title={service.title}
        subtitle={service.shortDescription}
        imageUrl={service.heroImage}
      />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-2xl p-8 mb-12 animate-fade-in">
            <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: service.fullDescription }} />
            
            <h3 className="text-xl font-semibold mb-4">Vad ingår i vår tjänst:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Intresserad av våra {service.title.toLowerCase()}-tjänster?</h2>
            <p className="text-muted-foreground mb-8">
              Fyll i formuläret nedan för att begära en kostnadsfri offert. 
              Vi återkommer till dig så snart som möjligt.
            </p>
            
            <QuoteForm />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="text-primary font-medium hover:underline">
              &larr; Tillbaka till alla tjänster
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailView;
