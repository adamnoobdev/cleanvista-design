
import { HomeIcon, Building2, Trash2, Construction, Warehouse } from 'lucide-react';
import { ServiceData } from '@/types/services';
import { getServiceImageUrl } from '@/utils/supabaseStorage';

// Service data with Supabase Storage URLs
export const services: ServiceData[] = [
  {
    id: "flyttstad",
    title: "Flyttstäd",
    description: "Låt oss ta hand om städningen när du flyttar så att du kan fokusera på din nya bostad.",
    imageUrl: getServiceImageUrl('flyttstad.jpg'),
    icon: HomeIcon,
    delay: 100
  },
  {
    id: "kontorsstad",
    title: "Kontorsstäd",
    description: "Vi erbjuder professionell kontorsstädning för en fräsch och hygienisk arbetsmiljö.",
    imageUrl: getServiceImageUrl('kontorsstad.jpg'),
    icon: Building2,
    delay: 200
  },
  {
    id: "dodsbo",
    title: "Dödsbo",
    description: "Professionell och respektfull hantering av dödsbon när du behöver hjälp som mest.",
    imageUrl: getServiceImageUrl('dodsbo.jpg'),
    icon: Warehouse,
    delay: 300
  },
  {
    id: "demontering",
    title: "Demontering & Bortforsling",
    description: "Vi demonterar och transporterar bort möbler, inredning eller annat du vill bli av med.",
    imageUrl: getServiceImageUrl('demontering.jpg'),
    icon: Trash2,
    delay: 400
  },
  {
    id: "takbyten",
    title: "Takbyten",
    description: "Professionell installation och reparation av tak med kvalitetsmaterial och garantier.",
    imageUrl: getServiceImageUrl('takbyten.jpg'),
    icon: Construction,
    delay: 500
  }
];
