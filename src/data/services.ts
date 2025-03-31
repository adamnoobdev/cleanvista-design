
import { HomeIcon, Building2, Trash2, Construction, Warehouse } from 'lucide-react';
import { ServiceData } from '@/types/services';

// Importera bilder från assets-mappen
import flyttstadImage from '@/assets/images/services/flyttstad.jpg';
import kontorsstadImage from '@/assets/images/services/kontorsstad.jpg';
import dodsboImage from '@/assets/images/services/dodsbo.jpg';
import demonteringImage from '@/assets/images/services/demontering.jpg';
import takbytenImage from '@/assets/images/services/takbyten.jpg';

// Service data
export const services: ServiceData[] = [
  {
    id: "flyttstad",
    title: "Flyttstäd",
    description: "Låt oss ta hand om städningen när du flyttar så att du kan fokusera på din nya bostad.",
    imageUrl: flyttstadImage,
    icon: HomeIcon,
    delay: 100
  },
  {
    id: "kontorsstad",
    title: "Kontorsstäd",
    description: "Vi erbjuder professionell kontorsstädning för en fräsch och hygienisk arbetsmiljö.",
    imageUrl: kontorsstadImage,
    icon: Building2,
    delay: 200
  },
  {
    id: "dodsbo",
    title: "Dödsbo",
    description: "Professionell och respektfull hantering av dödsbon när du behöver hjälp som mest.",
    imageUrl: dodsboImage,
    icon: Warehouse,
    delay: 300
  },
  {
    id: "demontering",
    title: "Demontering & Bortforsling",
    description: "Vi demonterar och transporterar bort möbler, inredning eller annat du vill bli av med.",
    imageUrl: demonteringImage,
    icon: Trash2,
    delay: 400
  },
  {
    id: "takbyten",
    title: "Takbyten",
    description: "Professionell installation och reparation av tak med kvalitetsmaterial och garantier.",
    imageUrl: takbytenImage,
    icon: Construction,
    delay: 500
  }
];
