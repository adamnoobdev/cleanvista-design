
import { HomeIcon, Building2, Trash2, Construction, Warehouse } from 'lucide-react';
import { ServiceData } from '@/types/services';

// Service data
export const services: ServiceData[] = [
  {
    id: "flyttstad",
    title: "Flyttstäd",
    description: "Låt oss ta hand om städningen när du flyttar så att du kan fokusera på din nya bostad.",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80",
    icon: HomeIcon,
    delay: 100
  },
  {
    id: "kontorsstad",
    title: "Kontorsstäd",
    description: "Vi erbjuder professionell kontorsstädning för en fräsch och hygienisk arbetsmiljö.",
    imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80",
    icon: Building2,
    delay: 200
  },
  {
    id: "dodsbo",
    title: "Dödsbo",
    description: "Professionell och respektfull hantering av dödsbon när du behöver hjälp som mest.",
    imageUrl: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80",
    icon: Warehouse,
    delay: 300
  },
  {
    id: "demontering",
    title: "Demontering & Bortforsling",
    description: "Vi demonterar och transporterar bort möbler, inredning eller annat du vill bli av med.",
    imageUrl: "https://images.unsplash.com/photo-1532480506693-5fda68df2da2?auto=format&fit=crop&q=80",
    icon: Trash2,
    delay: 400
  },
  {
    id: "takbyten",
    title: "Takbyten",
    description: "Professionell installation och reparation av tak med kvalitetsmaterial och garantier.",
    imageUrl: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80",
    icon: Construction,
    delay: 500
  }
];
