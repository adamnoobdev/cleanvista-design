
import React, { useState, useEffect } from 'react';
import { getPartnerImageUrl } from '@/utils/supabaseStorage';

const AboutSection = () => {
  const [partnerImageUrl, setPartnerImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageUrl = await getPartnerImageUrl();
        setPartnerImageUrl(imageUrl);
      } catch (error) {
        console.error("Error loading partner image:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadImage();
  }, []);
  
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Om Bygg & Städ i toppklass Sandviken</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Din lokala partner för städning och byggtjänster</h2>
            <p className="text-muted-foreground mb-6">
              Med lång erfarenhet och ett genuint engagemang för kvalitet erbjuder vi ett brett utbud av tjänster 
              för både privatpersoner och företag i Sandviken med omnejd.
            </p>
            <p className="text-muted-foreground mb-6">
              Vårt mål är att överträffa dina förväntningar genom att leverera tjänster av högsta kvalitet, 
              och vi är stolta över vårt goda rykte som byggts på nöjda kunders rekommendationer.
            </p>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="rounded-sm overflow-hidden shadow-md max-w-sm mx-auto">
              {loading ? (
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <img 
                  src={partnerImageUrl} 
                  alt="Benjamin Mujezinovic" 
                  className="w-full h-auto"
                />
              )}
            </div>
            <div className="glass absolute -bottom-6 -left-6 px-6 py-4 rounded-sm shadow-lg max-w-xs">
              <p className="font-medium text-lg">15+ års erfarenhet</p>
              <p className="text-muted-foreground">i branschen med hundratals nöjda kunder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
