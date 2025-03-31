
import { HomeIcon, Building2, Trash2, Construction, Warehouse } from 'lucide-react';
import { ServiceData } from '@/types/services';
import { getServiceImageUrl } from '@/utils/supabaseStorage';

// Function to get all service data with images
export async function getServicesData(): Promise<ServiceData[]> {
  const services = [
    {
      id: "flyttstad",
      title: "Flyttstäd",
      description: "Låt oss ta hand om städningen när du flyttar så att du kan fokusera på din nya bostad.",
      icon: HomeIcon,
      delay: 100
    },
    {
      id: "kontorsstad",
      title: "Kontorsstäd",
      description: "Vi erbjuder professionell kontorsstädning för en fräsch och hygienisk arbetsmiljö.",
      icon: Building2,
      delay: 200
    },
    {
      id: "dodsbo",
      title: "Dödsbo",
      description: "Professionell och respektfull hantering av dödsbon när du behöver hjälp som mest.",
      icon: Warehouse,
      delay: 300
    },
    {
      id: "demontering",
      title: "Demontering & Bortforsling",
      description: "Vi demonterar och transporterar bort möbler, inredning eller annat du vill bli av med.",
      icon: Trash2,
      delay: 400
    },
    {
      id: "takbyten",
      title: "Takbyten",
      description: "Professionell installation och reparation av tak med kvalitetsmaterial och garantier.",
      icon: Construction,
      delay: 500
    }
  ];

  // Load images for all services in parallel
  const servicesWithImages = await Promise.all(
    services.map(async (service) => {
      const imageUrl = await getServiceImageUrl(service.id);
      return { ...service, imageUrl };
    })
  );

  return servicesWithImages;
}

// Static service data for cases where async loading isn't needed
export const services = [
  {
    id: "flyttstad",
    title: "Flyttstäd",
    description: "Låt oss ta hand om städningen när du flyttar så att du kan fokusera på din nya bostad.",
    imageUrl: "", // Will be set dynamically
    icon: HomeIcon,
    delay: 100
  },
  {
    id: "kontorsstad",
    title: "Kontorsstäd",
    description: "Vi erbjuder professionell kontorsstädning för en fräsch och hygienisk arbetsmiljö.",
    imageUrl: "", // Will be set dynamically
    icon: Building2,
    delay: 200
  },
  {
    id: "dodsbo",
    title: "Dödsbo",
    description: "Professionell och respektfull hantering av dödsbon när du behöver hjälp som mest.",
    imageUrl: "", // Will be set dynamically
    icon: Warehouse,
    delay: 300
  },
  {
    id: "demontering",
    title: "Demontering & Bortforsling",
    description: "Vi demonterar och transporterar bort möbler, inredning eller annat du vill bli av med.",
    imageUrl: "", // Will be set dynamically
    icon: Trash2,
    delay: 400
  },
  {
    id: "takbyten",
    title: "Takbyten",
    description: "Professionell installation och reparation av tak med kvalitetsmaterial och garantier.",
    imageUrl: "", // Will be set dynamically
    icon: Construction,
    delay: 500
  }
];
