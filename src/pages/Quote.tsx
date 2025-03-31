
import React from 'react';
import { Link } from 'react-router-dom';

import HeroSection from '@/components/HeroSection';
import QuoteForm from '@/components/QuoteForm';

const QuotePage = () => {
  return (
    <div className="page-transition">
      <HeroSection 
        title="Begär en kostnadsfri offert"
        subtitle="Få en skräddarsydd lösning för ditt projekt med våra expertutlåtanden och prisuppskattningar"
        useColorBackground={true}
      />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Hur processen fungerar</h2>
              
              <div className="space-y-8">
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fyll i formuläret</h3>
                    <p className="text-muted-foreground">
                      Berätta för oss om ditt projekt, vilken tjänst du är intresserad av och eventuella 
                      specifika krav eller önskemål du har.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vi kontaktar dig</h3>
                    <p className="text-muted-foreground">
                      En av våra representanter kontaktar dig inom 24 timmar för att diskutera dina 
                      behov och ställa eventuella följdfrågor.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Platsbesök (vid behov)</h3>
                    <p className="text-muted-foreground">
                      För vissa tjänster, som takbyten eller större projekt, kan vi behöva göra ett 
                      platsbesök för att ge en mer exakt offert.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Du får din offert</h3>
                    <p className="text-muted-foreground">
                      Du får en detaljerad skriftlig offert med pris, omfattning och tidsplan för 
                      genomförandet av projektet.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center flex-shrink-0 font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vi utför arbetet</h3>
                    <p className="text-muted-foreground">
                      När du godkänner offerten bestämmer vi ett datum som passar dig, och vårt team 
                      utför arbetet enligt överenskommelse.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-secondary rounded-sm">
                <h3 className="text-xl font-semibold mb-4">Vanliga frågor</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Är offerten bindande?</h4>
                    <p className="text-muted-foreground text-sm">
                      Nej, offerten är kostnadsfri och helt utan förpliktelser. Du bestämmer själv om 
                      du vill gå vidare med tjänsten.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Hur lång tid tar det att få offerten?</h4>
                    <p className="text-muted-foreground text-sm">
                      Normalt tar det 1-3 arbetsdagar att få din offert, beroende på projektets omfattning.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Kan jag få RUT-avdrag?</h4>
                    <p className="text-muted-foreground text-sm">
                      Ja, för våra städtjänster kan du få RUT-avdrag. Vi hjälper dig med administrationen kring detta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <QuoteForm />
              
              <div className="mt-8 p-6 bg-white border border-border shadow-sm rounded-sm">
                <h3 className="text-lg font-semibold mb-3">Föredrar du att prata med oss direkt?</h3>
                <p className="text-muted-foreground mb-4">
                  Ring oss på <a href="tel:+46701234567" className="text-primary font-medium">070-123 45 67</a> eller 
                  skicka e-post till <a href="mailto:info@byggochstadsandviken.se" className="text-primary font-medium">info@byggochstadsandviken.se</a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Öppettider: Måndag-fredag 08:00-17:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;
