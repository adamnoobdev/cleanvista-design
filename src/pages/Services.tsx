
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import QuoteForm from '@/components/QuoteForm';

// Service data with detailed content
const servicesData = [
  {
    id: "flyttstad",
    title: "Flyttstäd",
    shortDescription: "Låt oss ta hand om städningen när du flyttar så att du kan fokusera på din nya bostad.",
    fullDescription: `
      <p>Vårt flyttstäd innebär en grundlig rengöring av hela bostaden så att den nya hyresgästen eller ägaren flyttar in i ett hem som är fräscht och välstädat.</p>
      
      <p>Vi går igenom alla utrymmen noggrant och ser till att allt är skinande rent. Från golv till tak, inuti skåp och lådor, till bakom vitvaror - vi missar inget!</p>
    `,
    features: [
      "Fönsterputs - både in- och utsida",
      "Rengöring av alla vitvaror, inklusive bakom och under",
      "Avfettning av spis, ugn och köksfläkt",
      "Rengöring av kyl och frys",
      "Avtorkning av skåpluckor och lådor in- och utvändigt",
      "Dammsugning och våttorkning av golv",
      "Rengöring av alla badrum inklusive avkalkning",
      "Rengöring av ventilationsdon"
    ],
    imageUrl: "https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heroImage: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "kontorsstad",
    title: "Kontorsstäd",
    shortDescription: "Vi erbjuder professionell kontorsstädning för en fräsch och hygienisk arbetsmiljö.",
    fullDescription: `
      <p>En ren och fräsch arbetsmiljö ökar både trivsel och produktivitet. Vi erbjuder regelbunden kontorsstädning anpassad efter dina behov och önskemål.</p>
      
      <p>Oavsett om du behöver daglig städning eller städning några gånger i veckan, kan vi skräddarsy ett paket som passar just ditt företag.</p>
    `,
    features: [
      "Dammsugning och våttorkning av golv",
      "Damning av fria ytor",
      "Tömning av papperskorgar",
      "Rengöring av kök och matplats",
      "Städning av toaletter och hygienutrymmen",
      "Påfyllning av förbrukningsmaterial",
      "Fönsterputsning (enligt avtal)",
      "Avfläckning av glaspartier och dörrar"
    ],
    imageUrl: "https://images.pexels.com/photos/9462280/pexels-photo-9462280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heroImage: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "dodsbo",
    title: "Dödsbo",
    shortDescription: "Professionell och respektfull hantering av dödsbon när du behöver hjälp som mest.",
    fullDescription: `
      <p>Vid ett dödsfall finns det mycket praktiskt att ta hand om. Vi erbjuder en komplett lösning för hantering av dödsbon, från tömning och städning till värdering och försäljning av bohag.</p>
      
      <p>Vår personal arbetar alltid med största respekt och diskretion, och vi förstår att det är en känslomässigt svår tid för de anhöriga.</p>
    `,
    features: [
      "Sortering av bohag och personliga tillhörigheter",
      "Bortforsling av möbler och inventarier",
      "Hantering av värdesaker och dokument",
      "Slutstädning av bostaden",
      "Kontakt med myndigheter vid behov",
      "Värdering och försäljning av värdefulla föremål",
      "Miljövänlig återvinning",
      "Dokumentation under hela processen"
    ],
    imageUrl: "https://images.pexels.com/photos/6444266/pexels-photo-6444266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heroImage: "https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "demontering",
    title: "Demontering & Bortforsling",
    shortDescription: "Vi demonterar och transporterar bort möbler, inredning eller annat du vill bli av med.",
    fullDescription: `
      <p>När du renoverar, bygger om eller bara vill förnya ditt hem eller kontor, kan vi hjälpa till med demontering och bortforsling av det som inte längre behövs.</p>
      
      <p>Vi har kompetensen och utrustningen för att ta isär större möbler och inredning, och transporterar sedan bort allt på ett miljövänligt sätt.</p>
    `,
    features: [
      "Demontering av möbler och fast inredning",
      "Nedmontering av kök och badrum",
      "Bortforsling av byggavfall",
      "Källsortering och återvinning",
      "Transport till återvinningscentral",
      "Rensning av förråd och källare",
      "Utrymning av lokaler",
      "Snabb och effektiv service"
    ],
    imageUrl: "https://images.pexels.com/photos/6474805/pexels-photo-6474805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heroImage: "https://images.pexels.com/photos/1201671/pexels-photo-1201671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "takbyten",
    title: "Takbyten",
    shortDescription: "Professionell installation och reparation av tak med kvalitetsmaterial och garantier.",
    fullDescription: `
      <p>Taket är en av de viktigaste delarna av ditt hus, och det är viktigt att det är i gott skick för att skydda resten av bostaden. Vi erbjuder kompletta takbyten med hög kvalitet och noggrannhet.</p>
      
      <p>Våra erfarna hantverkare utför arbetet effektivt och säkert, med fokus på hållbarhet och ett snyggt slutresultat.</p>
    `,
    features: [
      "Kostnadsfri besiktning och offert",
      "Borttagning av befintligt tak",
      "Installation av nytt underlagstak",
      "Läggning av takpannor, plåt eller papp",
      "Byte av rötskadade delar",
      "Installation av nya hängrännor och stuprör",
      "Garanti på utfört arbete",
      "Städning och bortforsling efter avslutat arbete"
    ],
    imageUrl: "https://images.pexels.com/photos/7214166/pexels-photo-7214166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heroImage: "https://images.pexels.com/photos/1769349/pexels-photo-1769349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const ServicesPage = () => {
  const { serviceId } = useParams();
  
  // If a specific service is selected
  if (serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    
    if (!service) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Tjänsten kunde inte hittas</h1>
            <Link to="/services" className="text-primary hover:underline">
              Tillbaka till alla tjänster
            </Link>
          </div>
        </div>
      );
    }
    
    return (
      <div className="page-transition">
        <HeroSection 
          title={service.title}
          subtitle={service.shortDescription}
          imageUrl={service.heroImage || service.imageUrl}
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
  }
  
  // Main services listing page
  return (
    <div className="page-transition">
      <HeroSection 
        title="Våra tjänster"
        subtitle="Vi erbjuder ett brett utbud av tjänster inom städ och bygg, anpassade efter dina behov"
        imageUrl="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80"
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
          
          <div className="mt-20 bg-secondary p-8 rounded-2xl animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Behöver du en anpassad lösning?</h3>
                <p className="mb-6">
                  Vi förstår att varje projekt är unikt. Kontakta oss för att diskutera 
                  dina specifika behov och hur vi kan hjälpa dig på bästa sätt.
                </p>
                <Link 
                  to="/quote" 
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium group"
                >
                  Begär offert
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80" 
                  alt="Custom services" 
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
