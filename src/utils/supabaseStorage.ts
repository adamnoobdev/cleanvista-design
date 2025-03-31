
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

// Function to get public URL from Supabase Storage
async function getImageUrl(path: string): Promise<string | null> {
  try {
    // Normalize path to prevent double slashes
    const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
    
    console.log(`Getting Supabase image URL for ${normalizedPath}`);
    
    // The bucket name is 'public' based on your screenshot, not 'images'
    const { data } = supabase.storage.from('public').getPublicUrl(normalizedPath);
    
    if (!data?.publicUrl) {
      console.error(`Failed to get public URL for ${normalizedPath}`);
      return null;
    }
    
    console.log(`Successfully generated public URL: ${data.publicUrl}`);
    return data.publicUrl;
  } catch (error) {
    console.error(`Error getting public URL for ${path}:`, error);
    return null;
  }
}

// Helper function to fallback to local assets
function fallbackToLocalAsset(path: string): string {
  console.log(`Falling back to local assets for ${path}`);
  
  // For hero images
  if (path.includes('hero/main-hero.jpg')) {
    if (mainHeroImg) {
      console.log("Using local hero image:", mainHeroImg);
      return mainHeroImg;
    }
    return PLACEHOLDER.hero;
  }
  
  // For about images
  if (path.includes('about/team.jpg')) {
    if (teamImg) {
      console.log("Using local about image:", teamImg);
      return teamImg;
    }
    return PLACEHOLDER.about;
  }
  
  // For service images
  if (path.includes('services/')) {
    const serviceName = path.split('/').pop()?.replace('.jpg', '');
    if (serviceName) {
      let localImage = null;
      switch (serviceName) {
        case 'flyttstad':
          localImage = flyttstadImg;
          break;
        case 'kontorsstad':
          localImage = kontorsstadImg;
          break;
        case 'dodsbo':
          localImage = dodsboImg;
          break;
        case 'demontering':
          localImage = demonteringImg;
          break;
        case 'takbyten':
          localImage = takbytenImg;
          break;
      }
      
      if (localImage) {
        console.log(`Using local image for ${serviceName}:`, localImage);
        return localImage;
      }
    }
    return PLACEHOLDER.service;
  }
  
  // Default placeholder
  return PLACEHOLDER.icon;
}

// Helper function to get hero image URL
export async function getHeroImageUrl(): Promise<string> {
  console.log("Fetching hero image...");
  try {
    // Try to get from Supabase storage
    const dbImage = await getImageUrl('hero/main-hero.jpg');
    if (dbImage) {
      return dbImage;
    }
  } catch (e) {
    console.error("Hero image fetch error:", e);
  }
  
  return fallbackToLocalAsset('hero/main-hero.jpg');
}

// Helper function to get service image URL by type
export async function getServiceImageUrl(type?: string): Promise<string> {
  console.log(`Fetching service image for: ${type || 'unknown'}`);
  if (!type) {
    return PLACEHOLDER.service;
  }
  
  try {
    // Try to get from Supabase storage if type is provided
    const path = `services/${type}.jpg`;
    const dbImage = await getImageUrl(path);
    if (dbImage) {
      return dbImage;
    }
  } catch (e) {
    console.error(`Service image fetch error for ${type}:`, e);
  }
  
  return fallbackToLocalAsset(`services/${type}.jpg`);
}

// Helper function to get about image URL
export async function getAboutImageUrl(): Promise<string> {
  console.log("Fetching about image...");
  try {
    // Try to get from Supabase storage
    const dbImage = await getImageUrl('about/team.jpg');
    if (dbImage) {
      return dbImage;
    }
  } catch (e) {
    console.error("About image fetch error:", e);
  }
  
  return fallbackToLocalAsset('about/team.jpg');
}

// Helper function to get icon URL
export function getIconUrl(): string {
  return PLACEHOLDER.icon;
}
