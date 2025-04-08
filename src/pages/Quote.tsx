import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import QuoteForm from '@/components/QuoteForm';

const QuotePage = () => {
  return (
    <div className="page-transition">
      <Helmet>
        <title>Begär offert på städ- och byggtjänster i Sandviken | Bygg & Städ i toppklass</title>
        <meta name="description" content="Få en kostnadsfri offert på städ- och byggtjänster i Sandviken. Vi erbjuder flyttstäd, kontorsstäd, takbyten med mera till konkurrenskraftiga priser." />
        <meta name="keywords" content="offert städning sandviken, offert byggarbete sandviken, bygg och städ sandviken pris, flyttstäd offert sandviken" />
        <link rel="canonical" href="https://bygg-stad-sandviken.lovable.app/offert" />
      </Helmet>
      
      <HeroSection 
        title="Begär en kostnadsfri offert - Bygg & Städ Sandviken"
        subtitle="Få en skräddarsydd lösning för ditt projekt med våra expertutlåtanden och prisuppskattningar"
        useColorBackground={true}
      />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold mb-6">Offert på bygg- och städtjänster i Sandviken</h1>
              <p className="mb-8 text-muted-foreground">
                Fyll i formuläret för att få en kostnadsfri och skräddarsydd offert på våra tjänster. Vi erbjuder 
                högkvalitativa bygg- och städtjänster i hela Sandviken med omnejd.
              </p>
              
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
                <h3 className="text-xl font-semibold mb-4">Vanliga frågor om våra tjänster</h3>
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
                  <div>
                    <h4 className="font-medium">Arbetar ni i hela Sandviken?</h4>
                    <p className="text-muted-foreground text-sm">
                      Ja, vi erbjuder våra tjänster i hela Sandviken med omnejd, inklusive närliggande områden som Gävle, Hofors och Ockelbo.
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
                  Ring oss på <a href="tel:+46725302323" className="text-primary font-medium">072-530 23 23</a> eller 
                  skicka e-post till <a href="mailto:info@byggstadsandviken.se" className="text-primary font-medium">info@byggstadsandviken.se</a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Öppettider: Måndag-fredag 08:00-17:00
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 prose max-w-none">
            <h2 className="text-2xl font-bold">Bygg & Städ i Sandviken - Kvalitetstjänster till rätt pris</h2>
            <p>
              Som en ledande leverantör av bygg- och städtjänster i Sandviken erbjuder vi professionella och pålitliga lösningar för både privatpersoner och företag. 
              Med över 15 års erfarenhet i branschen har vi den kunskap och kompetens som krävs för att garantera resultat av högsta kvalitet.
            </p>
            
            <h3 className="text-xl font-semibold mt-6">Våra populäraste tjänster i Sandviken:</h3>
            <ul>
              <li><strong>Flyttstädning</strong> - Grundlig och noggrann städning med kvalitetsgaranti</li>
              <li><strong>Kontorsstädning</strong> - Regelbunden eller engångsstädning för företag</li>
              <li><strong>Dödsbo</strong> - Professionell och respektfull hantering av dödsbon</li>
              <li><strong>Takbyten</strong> - Expertis inom takrenovering och underhåll</li>
              <li><strong>Demontering</strong> - Säker nedmontering och bortforsling av material</li>
            </ul>
            
            <p>
              Alla våra tjänster är skräddarsydda efter våras kunders specifika behov och önskemål. När du väljer Bygg & Städ i toppklass Sandviken 
              får du inte bara en högkvalitativ tjänst utan även en pålitlig partner som förstår vikten av kundnöjdhet och noggrannhet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;
