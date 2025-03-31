
// This file handles image URLs with fallbacks to placeholder images

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

// Helper function to get hero image URL
export function getHeroImageUrl(): string {
  try {
    // Check if local asset exists
    if (mainHeroImg) return mainHeroImg;
  } catch (e) {
    // If import fails, return placeholder
    console.log("Hero image not found, using placeholder");
  }
  return PLACEHOLDER.hero;
}

// Helper function to get service image URL by type
export function getServiceImageUrl(type?: string): string {
  try {
    // Return specific service image if type is provided
    if (type) {
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
    // If import fails, return placeholder
    console.log(`Service image ${type || ''} not found, using placeholder`);
  }
  return PLACEHOLDER.service;
}

// Helper function to get about image URL
export function getAboutImageUrl(): string {
  try {
    // Check if local asset exists
    if (teamImg) return teamImg;
  } catch (e) {
    // If import fails, return placeholder
    console.log("About image not found, using placeholder");
  }
  return PLACEHOLDER.about;
}

// Helper function to get icon URL
export function getIconUrl(): string {
  return PLACEHOLDER.icon;
}
