
import { LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: LucideIcon;
  delay: number;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  imageUrl: string;
  heroImage: string;
}
