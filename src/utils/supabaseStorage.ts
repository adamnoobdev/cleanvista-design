
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
    // Check if bucket exists first
    const { data: buckets, error: bucketError } = await supabase.storage.listBuckets();
    
    if (bucketError) {
      console.error('Error checking buckets:', bucketError);
      return null;
    }
    
    // If the bucket doesn't exist, return null
    if (!buckets || !buckets.some(b => b.name === bucket)) {
      console.warn(`Bucket "${bucket}" does not exist`);
      return null;
    }
    
    // Bucket exists, try to get the public URL
    const { data, error } = await supabase.storage.from(bucket).getPublicUrl(path);
    
    if (error) {
      console.error(`Error getting public URL for ${bucket}/${path}:`, error);
      return null;
    }
    
    if (!data || !data.publicUrl) {
      console.error(`No public URL returned for ${bucket}/${path}`);
      return null;
    }
    
    // Test if the image can be accessed
    try {
      const response = await fetch(data.publicUrl, { method: 'HEAD' });
      if (!response.ok) {
        console.warn(`Image at ${data.publicUrl} returned status ${response.status}`);
        return null;
      }
    } catch (e) {
      console.warn(`Could not access image at ${data.publicUrl}:`, e);
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
  console.log("Fetching hero image...");
  try {
    // Try to get from Supabase storage
    const dbImage = await getPublicUrl('images', 'hero/main-hero.jpg');
    if (dbImage) {
      console.log("Successfully loaded hero image from Supabase:", dbImage);
      return dbImage;
    }
    
    // Fall back to local asset
    if (mainHeroImg) {
      console.log("Using local hero image:", mainHeroImg);
      return mainHeroImg;
    }
  } catch (e) {
    console.error("Hero image fetch error:", e);
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
      
      // Fall back to local assets
      let localImage = null;
      switch (type.toLowerCase()) {
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
        console.log(`Using local image for ${type}:`, localImage);
        return localImage;
      }
    }
  } catch (e) {
    console.error(`Service image fetch error for ${type || 'unknown'}:`, e);
  }
  console.log(`Using placeholder for service image ${type || 'unknown'}`);
  return PLACEHOLDER.service;
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
    
    // Fall back to local asset
    if (teamImg) {
      console.log("Using local about image:", teamImg);
      return teamImg;
    }
  } catch (e) {
    console.error("About image fetch error:", e);
  }
  console.log("Using placeholder about image");
  return PLACEHOLDER.about;
}

// Helper function to get icon URL
export function getIconUrl(): string {
  return PLACEHOLDER.icon;
}
