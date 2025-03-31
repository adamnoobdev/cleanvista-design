
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

// Bypass bucket existence check and go straight to getPublicUrl
// This is more reliable than trying to check if the bucket exists
async function getPublicUrl(bucket: string, path: string): Promise<string | null> {
  try {
    // Normalize path to prevent double slashes
    let normalizedPath = path;
    if (normalizedPath.startsWith('/')) {
      normalizedPath = normalizedPath.substring(1);
    }
    
    console.log(`Getting public URL for ${bucket}/${normalizedPath}`);

    // Directly try to get the public URL without checking bucket existence
    const { data } = await supabase.storage.from(bucket).getPublicUrl(normalizedPath);
    
    if (!data || !data.publicUrl) {
      console.error(`No public URL returned for ${bucket}/${normalizedPath}`);
      return null;
    }
    
    console.log(`Generated public URL: ${data.publicUrl}`);
    
    // Test if the image can be accessed
    try {
      const response = await fetch(data.publicUrl, { method: 'HEAD' });
      if (!response.ok) {
        console.warn(`Image at ${data.publicUrl} returned status ${response.status}`);
        return fallbackToLocalAsset(bucket, normalizedPath);
      }
      console.log(`Successfully verified image at ${data.publicUrl}`);
      return data.publicUrl;
    } catch (e) {
      console.warn(`Could not access image at ${data.publicUrl}:`, e);
      return fallbackToLocalAsset(bucket, normalizedPath);
    }
  } catch (e) {
    console.error(`Failed to get public URL for ${bucket}/${path}:`, e);
    return fallbackToLocalAsset(bucket, path);
  }
}

// Helper function to fallback to local assets
function fallbackToLocalAsset(bucket: string, path: string): string | null {
  console.log(`Falling back to local assets for ${bucket}/${path}`);
  
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
    const dbImage = await getPublicUrl('images', 'hero/main-hero.jpg');
    if (dbImage) {
      console.log("Successfully loaded hero image from Supabase:", dbImage);
      return dbImage;
    }
  } catch (e) {
    console.error("Hero image fetch error:", e);
  }
  
  // Already handled in fallback, but just in case
  if (mainHeroImg) {
    console.log("Using local hero image:", mainHeroImg);
    return mainHeroImg;
  }
  
  console.log("Using placeholder hero image");
  return PLACEHOLDER.hero;
}

// Helper function to get service image URL by type
export async function getServiceImageUrl(type?: string): Promise<string> {
  console.log(`Fetching service image for: ${type || 'unknown'}`);
  try {
    // Try to get from Supabase storage if type is provided
    if (type) {
      const dbImage = await getPublicUrl('images', `services/${type}.jpg`);
      if (dbImage) {
        console.log(`Successfully loaded service image for ${type} from Supabase:`, dbImage);
        return dbImage;
      }
    }
  } catch (e) {
    console.error(`Service image fetch error for ${type || 'unknown'}:`, e);
  }
  
  // Fallback already handled in getPublicUrl, but just in case
  return fallbackToLocalAsset('images', `services/${type}.jpg`) || PLACEHOLDER.service;
}

// Helper function to get about image URL
export async function getAboutImageUrl(): Promise<string> {
  console.log("Fetching about image...");
  try {
    // Try to get from Supabase storage
    const dbImage = await getPublicUrl('images', 'about/team.jpg');
    if (dbImage) {
      console.log("Successfully loaded about image from Supabase:", dbImage);
      return dbImage;
    }
  } catch (e) {
    console.error("About image fetch error:", e);
  }
  
  // Fallback already handled in getPublicUrl, but just in case
  if (teamImg) {
    console.log("Using local about image:", teamImg);
    return teamImg;
  }
  
  console.log("Using placeholder about image");
  return PLACEHOLDER.about;
}

// Helper function to get icon URL
export function getIconUrl(): string {
  return PLACEHOLDER.icon;
}
