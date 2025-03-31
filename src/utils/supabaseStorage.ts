
import { supabase } from '@/integrations/supabase/client';

// Get public URL for an image in Supabase Storage
export function getImageUrl(path: string): string {
  const { data } = supabase.storage.from('images').getPublicUrl(path);
  return data.publicUrl;
}

// Helper function to get hero image URL
export function getHeroImageUrl(filename: string): string {
  return getImageUrl(`hero/${filename}`);
}

// Helper function to get service image URL
export function getServiceImageUrl(filename: string): string {
  return getImageUrl(`services/${filename}`);
}

// Helper function to get about image URL
export function getAboutImageUrl(filename: string): string {
  return getImageUrl(`about/${filename}`);
}

// Helper function to get icon URL
export function getIconUrl(filename: string): string {
  return getImageUrl(`icons/${filename}`);
}
