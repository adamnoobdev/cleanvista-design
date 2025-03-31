
// This file previously handled Supabase Storage image URLs
// Now it will use placeholder images instead

// Helper function to get hero image URL
export function getHeroImageUrl(): string {
  return "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80";
}

// Helper function to get service image URL
export function getServiceImageUrl(): string {
  return "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80";
}

// Helper function to get about image URL
export function getAboutImageUrl(): string {
  return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80";
}

// Helper function to get icon URL
export function getIconUrl(): string {
  return "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80";
}
