
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import HeroSection from '@/components/HeroSection';

const PricingPage = () => {
  return (
    <div className="page-transition">
      <HeroSection
        title="Prislista"
        subtitle="Våra konkurrenskraftiga priser för städ- och byggtjänster"
        useColorBackground={true}
      />

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Våra priser</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vi erbjuder transparenta och konkurrenskraftiga priser för alla våra tjänster.
              Kontakta oss för en skräddarsydd offert som passar dina specifika behov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pricing Cards */}
            <div className="bg-white border border-border shadow-sm rounded-sm p-6 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Flyttstädning</h3>
              <p className="text-muted-foreground mb-4">
                Grundlig städning av hela bostaden inför flytt.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold">Från 1500 kr</span>
                <span className="text-sm text-muted-foreground"> / per timme</span>
              </div>
              <ul className="mb-6">
                <li className="flex items-center mb-2">
                  <Check className="text-primary mr-2" size={16} />
                  Fönsterputsning
                </li>
                <li className="flex items-center mb-2">
                  <Check className="text-primary mr-2" size={16} />
                  Rengöring av vitvaror
                </li>
                <li className="flex items-center mb-2">
                  <Check className="text-primary mr-2" size={16} />
                  Dammsugning och våttorkning
                </li>
              </ul>
              <Link
                to="/offert"
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium group"
              >
                Begär offert
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Link>
            </div>

            <div className="bg-white border border-border shadow-sm rounded-sm p-6 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Kontorsstädning</h3>
              <p className="text-muted-foreground mb-4">
                Regelbunden städning för en ren och trivsam arbetsmiljö.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold">Från 1200 kr</span>
                <span className="text-sm text-muted-foreground"> / per månad</span>
              </div>
              <ul className="mb-6">
                <li className="flex items-center mb-2">
                  <Check className="text-primary mr-2" size={16} />
                  Dammtorkning av ytor
                </li>
                <li className="flex items-center mb-2">
                  <Check className="text-primary mr-2" size={16} />
                  Tömning av papperskorgar
                </li>
                <li className="flex items-center mb-2">
                  <Check className="text-primary mr-2" size={16} />
                  Rengöring av toaletter
                </li>
              </ul>
              <Link
                to="/offert"
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium group"
              >
                Begär offert
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Link>
            </div>

            <div className="bg-white border border-border shadow-sm rounded-sm p-6 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Takbyte</h3>
              <p className="text-muted-foreground mb-4">
                Professionellt takbyte med kvalitetsmaterial och garanti.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold">Kontakta oss</span>
              </div>
              <ul className="mb-6">
                <li className="flex items-center mb-2">
                  <Check className="text-primary mr-2" size={16} />
                  Kostnadsfri besiktning
                </li>
                <li className="flex items-center mb-2">
                  <Check className="text-primary mr-2" size={16} />
                  Installation av underlagstak
                </li>
                <li className="flex items-center mb-2">
                  <Check className="text-primary mr-2" size={16} />
                  Garanti på utfört arbete
                </li>
              </ul>
              <Link
                to="/offert"
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium group"
              >
                Begär offert
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-20 bg-secondary p-8 rounded-sm animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Är du redo att komma igång?
                </h3>
                <p className="mb-6">
                  Kontakta oss idag för att diskutera dina behov och få en
                  skräddarsydd offert. Vi ser fram emot att hjälpa dig!
                </p>
                <Link
                  to="/offert"
                  className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium group"
                >
                  Begär offert
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-sm">
                <h4 className="text-xl font-semibold mb-4">Våra fördelar</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" size={18} />
                    <span>Professionell personal med gedigen erfarenhet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" size={18} />
                    <span>Kvalitetsgaranti på alla utförda arbeten</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" size={18} />
                    <span>Snabb och tillförlitlig service</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2" size={18} />
                    <span>Konkurrenskraftiga priser</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
