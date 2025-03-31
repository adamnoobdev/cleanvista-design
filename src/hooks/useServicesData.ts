
import { useState, useEffect } from 'react';
import { getServiceImageUrl, getHeroImageUrl } from '@/utils/supabaseStorage';

// Create service data interface
export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  imageUrl: string;
  heroImage: string;
}

export const useServicesData = () => {
  const [servicesData, setServicesData] = useState<ServiceDetail[]>([]);
  const [heroImageUrl, setHeroImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  
  // Load service data and images
  useEffect(() => {
    const loadServiceData = async () => {
      try {
        // Base service data
        const baseServices = [
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
          }
        ];
        
        // Get hero image URL
        const heroImg = await getHeroImageUrl();
        setHeroImageUrl(heroImg);
        
        // Load images for all services
        const servicesWithImages = await Promise.all(
          baseServices.map(async (service) => {
            const serviceImageUrl = await getServiceImageUrl(service.id);
            return { 
              ...service, 
              imageUrl: serviceImageUrl,
              heroImage: heroImg
            };
          })
        );
        
        setServicesData(servicesWithImages);
      } catch (error) {
        console.error("Error loading service data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadServiceData();
  }, []);
  
  return { servicesData, heroImageUrl, loading };
};
