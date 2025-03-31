
// This file handles image URLs with fallbacks to placeholder images
import { supabase } from "@/integrations/supabase/client";

// Import local assets if they exist
import mainHeroImg from '@/assets/images/hero/main-hero.jpg?url';
import teamImg from '@/assets/images/about/team.jpg?url';
import flyttstadImg from '@/assets/images/services/flyttstad.jpg?url';
import kontorsstadImg from '@/assets/images/services/kontorsstad.jpg?url';
import dodsboImg from '@/assets/images/services/dodsbo.jpg?url';
import demonteringImg from '@/assets/images/services/demontering.jpg?url';
import takbytenImg from '@/assets/images/services/takbyten.jpg?url';

// Placeholder images from Unsplash
const PLACEHOLDER = {
  hero: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
  service: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
  about: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
  icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
};

// Helper function to get public URL for database images
async function getPublicUrl(bucket: string, path: string): Promise<string | null> {
  try {
    const { data } = await supabase.storage.from(bucket).getPublicUrl(path);
    
    if (!data || !data.publicUrl) {
      console.error(`Error getting public URL for ${bucket}/${path}: No public URL returned`);
      return null;
    }
    
    return data.publicUrl;
  } catch (e) {
    console.error(`Failed to get public URL for ${bucket}/${path}:`, e);
    return null;
  }
}

// Helper function to get hero image URL
export async function getHeroImageUrl(): Promise<string> {
  try {
    // Try to get from Supabase storage
    const dbImage = await getPublicUrl('images', 'hero/main-hero.jpg');
    if (dbImage) return dbImage;
    
    // Fall back to local asset
    if (mainHeroImg) return mainHeroImg;
  } catch (e) {
    console.log("Hero image not found, using placeholder");
  }
  return PLACEHOLDER.hero;
}

// Helper function to get service image URL by type
export async function getServiceImageUrl(type?: string): Promise<string> {
  try {
    // Try to get from Supabase storage if type is provided
    if (type) {
      const dbImage = await getPublicUrl('images', `services/${type}.jpg`);
      if (dbImage) return dbImage;
      
      // Fall back to local assets
      switch (type.toLowerCase()) {
        case 'flyttstad':
          if (flyttstadImg) return flyttstadImg;
          break;
        case 'kontorsstad':
          if (kontorsstadImg) return kontorsstadImg;
          break;
        case 'dodsbo':
          if (dodsboImg) return dodsboImg;
          break;
        case 'demontering':
          if (demonteringImg) return demonteringImg;
          break;
        case 'takbyten':
          if (takbytenImg) return takbytenImg;
          break;
      }
    }
  } catch (e) {
    console.log(`Service image ${type || ''} not found, using placeholder`);
  }
  return PLACEHOLDER.service;
}

// Helper function to get about image URL
export async function getAboutImageUrl(): Promise<string> {
  try {
    // Try to get from Supabase storage
    const dbImage = await getPublicUrl('images', 'about/team.jpg');
    if (dbImage) return dbImage;
    
    // Fall back to local asset
    if (teamImg) return teamImg;
  } catch (e) {
    console.log("About image not found, using placeholder");
  }
  return PLACEHOLDER.about;
}

// Helper function to get icon URL
export function getIconUrl(): string {
  return PLACEHOLDER.icon;
}
