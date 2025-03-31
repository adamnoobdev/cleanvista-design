
import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import { getAboutImageUrl } from '@/utils/supabaseStorage';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

const ContactSection = () => {
  const [teamImageUrl, setTeamImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageUrl = await getAboutImageUrl();
        setTeamImageUrl(imageUrl);
      } catch (error) {
        console.error("Error loading contact image:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadImage();
  }, []);
  
  return (
    <section className="py-12 px-6 bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Only conditionally render the wrapper if not on mobile or explicitly show it on mobile */}
          <div className={`${isMobile ? 'block w-full max-w-[200px] mx-auto mb-4' : 'md:w-2/5 lg:w-1/3'}`}>
            <div className="rounded-sm overflow-hidden shadow-md">
              {loading ? (
                <div className="w-full h-48 bg-muted flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <AspectRatio ratio={1/1} className="bg-muted">
                  <img 
                    src={teamImageUrl} 
                    alt="Benjamin Mujezinovic" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              )}
            </div>
          </div>
          
          <div className={`${isMobile ? 'w-full' : 'md:w-3/5 lg:w-2/3'}`}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Kontakta oss</span>
            <h2 className="text-2xl font-bold mt-2 mb-4">Prata med Benjamin direkt</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Benjamin Mujezinovic är ägare för Bygg & Städ i toppklass Sandviken och kan hjälpa dig med alla frågor 
              gällande våra städ- och byggtjänster. Kontakta honom för en 
              kostnadsfri konsultation eller offert.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <a 
                href="tel:+46725302323" 
                className="flex items-center gap-3 group"
              >
                <div className="bg-primary p-2 rounded-sm text-white group-hover:bg-primary/90 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-medium text-sm">Telefon</div>
                  <div className="text-muted-foreground text-sm">072-530 23 23</div>
                </div>
              </a>
              
              <a 
                href="mailto:Benjamin.saic@gmail.com" 
                className="flex items-center gap-3 group"
              >
                <div className="bg-primary p-2 rounded-sm text-white group-hover:bg-primary/90 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-medium text-sm">E-post</div>
                  <div className="text-muted-foreground text-sm">Benjamin.saic@gmail.com</div>
                </div>
              </a>
            </div>
            
            <div>
              <Button asChild size="default" className="rounded-sm">
                <a href="/quote">Begär offert</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
