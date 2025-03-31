
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Om Bygg & Städ Sandviken</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Din lokala partner för städning och byggtjänster</h2>
            <p className="text-muted-foreground mb-6">
              Med lång erfarenhet och ett genuint engagemang för kvalitet erbjuder vi ett brett utbud av tjänster 
              för både privatpersoner och företag i Sandviken med omnejd.
            </p>
            <p className="text-muted-foreground mb-6">
              Vårt mål är att överträffa dina förväntningar genom att leverera tjänster av högsta kvalitet, 
              och vi är stolta över vårt goda rykte som byggts på nöjda kunders rekommendationer.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary font-medium group"
            >
              Läs mer om oss
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Link>
          </div>
          <div className="relative order-1 md:order-2 animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80" 
                alt="Bygg och Städ Sandviken Team" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="glass absolute -bottom-6 -left-6 px-6 py-4 rounded-xl shadow-lg max-w-xs">
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
