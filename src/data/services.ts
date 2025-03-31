
import { HomeIcon, Building2, Trash2, Construction, Warehouse } from 'lucide-react';
import { ServiceData } from '@/types/services';

// Service data
export const services: ServiceData[] = [
  {
    id: "flyttstad",
    title: "Flyttstäd",
    description: "Låt oss ta hand om städningen när du flyttar så att du kan fokusera på din nya bostad.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80",
    icon: <HomeIcon size={24} />,
    delay: 100
  },
  {
    id: "kontorsstad",
    title: "Kontorsstäd",
    description: "Vi erbjuder professionell kontorsstädning för en fräsch och hygienisk arbetsmiljö.",
    imageUrl: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
    icon: <Building2 size={24} />,
    delay: 200
  },
  {
    id: "dodsbo",
    title: "Dödsbo",
    description: "Professionell och respektfull hantering av dödsbon när du behöver hjälp som mest.",
    imageUrl: "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&q=80",
    icon: <Warehouse size={24} />,
    delay: 300
  },
  {
    id: "demontering",
    title: "Demontering & Bortforsling",
    description: "Vi demonterar och transporterar bort möbler, inredning eller annat du vill bli av med.",
    imageUrl: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80",
    icon: <Trash2 size={24} />,
    delay: 400
  },
  {
    id: "takbyten",
    title: "Takbyten",
    description: "Professionell installation och reparation av tak med kvalitetsmaterial och garantier.",
    imageUrl: "https://images.unsplash.com/photo-1622993751133-2c9132ca1df0?auto=format&fit=crop&q=80",
    icon: <Construction size={24} />,
    delay: 500
  }
];
