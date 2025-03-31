
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { ServiceDetail } from '@/types/services';

interface ServicesListViewProps {
  servicesData: ServiceDetail[];
}

const ServicesListView: React.FC<ServicesListViewProps> = ({ servicesData }) => {
  return (
    <div className="page-transition">
      <HeroSection 
        title="Våra tjänster"
        subtitle="Vi erbjuder ett brett utbud av tjänster inom städ och bygg, anpassade efter dina behov"
        useColorBackground={true}
      />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Utforska våra tjänster</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Från flyttstäd och kontorsstädning till hantering av dödsbon och takbyten - vi har 
              tjänsterna som möter dina behov med kvalitet och noggrannhet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div key={service.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard 
                  id={service.id}
                  title={service.title}
                  description={service.shortDescription}
                  imageUrl={service.imageUrl}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-secondary p-8 rounded-sm animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Behöver du en anpassad lösning?</h3>
                <p className="mb-6">
                  Vi förstår att varje projekt är unikt. Kontakta oss för att diskutera 
                  dina specifika behov och hur vi kan hjälpa dig på bästa sätt.
                </p>
                <Link 
                  to="/quote" 
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium group"
                >
                  Begär offert
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-sm">
                <h4 className="text-xl font-semibold mb-3">Våra mest populära tjänster</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Flyttstädning med kvalitetsgaranti</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Regelbunden kontorsstädning</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Takbyten och reparationer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesListView;
