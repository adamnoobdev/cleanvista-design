
import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import { getAboutImageUrl } from '@/utils/supabaseStorage';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [teamImageUrl, setTeamImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  
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
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              {loading ? (
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <img 
                  src={teamImageUrl} 
                  alt="Benjamin Mujezinovic" 
                  className="w-full h-auto rounded-2xl"
                />
              )}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Kontakta oss</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Prata med Benjamin direkt</h2>
            <p className="text-muted-foreground mb-8">
              Benjamin Mujezinovic är vår kontaktperson som kan hjälpa dig med alla frågor 
              gällande våra städ- och byggtjänster. Tveka inte att kontakta honom för en 
              gratis konsultation eller offert.
            </p>
            
            <div className="space-y-4">
              <a 
                href="tel:+46762241799" 
                className="flex items-center gap-3 group"
              >
                <div className="bg-primary p-3 rounded-full text-white group-hover:bg-primary/90 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-medium">Telefon</div>
                  <div className="text-muted-foreground">+46 76-224 17 99</div>
                </div>
              </a>
              
              <a 
                href="mailto:Benjamin.saic@gmail.com" 
                className="flex items-center gap-3 group"
              >
                <div className="bg-primary p-3 rounded-full text-white group-hover:bg-primary/90 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-medium">E-post</div>
                  <div className="text-muted-foreground">Benjamin.saic@gmail.com</div>
                </div>
              </a>
            </div>
            
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full">
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
