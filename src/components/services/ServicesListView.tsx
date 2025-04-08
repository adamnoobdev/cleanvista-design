
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { ServiceDetail } from '@/types/services';

interface ServicesListViewProps {
  servicesData: ServiceDetail[];
  heroImageUrl?: string;
}

const ServicesListView: React.FC<ServicesListViewProps> = ({ servicesData }) => {
  return (
    <div className="page-transition">
      <HeroSection 
        title="Bygg & Städtjänster i Sandviken"
        subtitle="Professionella städ- och byggtjänster i Sandviken med kvalitetsgaranti och nöjda kunder"
        useColorBackground={true}
      />
      
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl font-bold mb-4">Bygg & Städ i Sandviken - Utforska våra tjänster</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vi är din lokala partner för städ- och byggtjänster i Sandviken. Från flyttstäd och kontorsstädning till hantering av dödsbon och takbyten - vi har 
              tjänsterna som möter dina behov med kvalitet och noggrannhet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          
          <div className="mt-12 bg-secondary p-6 rounded-sm animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Behöver du en anpassad lösning?</h3>
                <p className="mb-4">
                  Vi förstår att varje projekt är unikt. Kontakta oss för att diskutera 
                  dina specifika behov och hur vi kan hjälpa dig på bästa sätt.
                </p>
                <Link 
                  to="/offert" 
                  className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-sm font-medium group"
                >
                  Begär offert
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
                </Link>
              </div>
              <div className="bg-white p-5 rounded-sm">
                <h4 className="text-lg font-semibold mb-3">Våra mest populära tjänster i Sandviken</h4>
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
          
          <div className="mt-16 prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Bygg & Städ i Sandviken - Din lokala partner</h2>
            <p>
              Bygg & Städ i toppklass Sandviken erbjuder professionella tjänster inom både städning och byggarbete för kunder i hela Sandviken med omnejd. 
              Med lång erfarenhet och ett engagerat team levererar vi alltid tjänster av högsta kvalitet.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Städtjänster i Sandviken</h3>
            <p>
              Våra städtjänster omfattar allt från grundlig flyttstädning till regelbunden kontorsstädning och hantering av dödsbon. 
              Vi använder miljövänliga rengöringsmedel och moderna metoder för ett perfekt resultat varje gång.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Byggtjänster i Sandviken</h3>
            <p>
              Vi utför även ett brett utbud av byggtjänster, inklusive takbyten, demontering och bortforsling. 
              Vårt erfarna team säkerställer att varje projekt genomförs säkert, effektivt och enligt överenskommelse.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Varför välja Bygg & Städ i toppklass Sandviken?</h3>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Över 15 års erfarenhet i branschen</li>
              <li>Högkvalitativa tjänster till konkurrenskraftiga priser</li>
              <li>Professionellt och pålitligt team</li>
              <li>Snabb respons och flexibla lösningar</li>
              <li>Kundnöjdhet som vår högsta prioritet</li>
              <li>Lokalt företag med god kännedom om Sandviken</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesListView;
