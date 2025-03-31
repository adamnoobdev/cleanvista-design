
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ThumbsUp, Clock, Badge, HeartHandshake } from 'lucide-react';

import HeroSection from '@/components/HeroSection';

const AboutPage = () => {
  // Company values
  const values = [
    {
      title: "Kvalitet",
      description: "Vi kompromissar aldrig med kvaliteten på vårt arbete och strävar alltid efter att överträffa våra kunders förväntningar.",
      icon: <CheckCircle size={36} className="text-primary" />
    },
    {
      title: "Kundnöjdhet",
      description: "Våra kunders tillfredsställelse är vår högsta prioritet, och vi anpassar våra tjänster för att möta deras specifika behov.",
      icon: <ThumbsUp size={36} className="text-primary" />
    },
    {
      title: "Pålitlighet",
      description: "Vi håller våra löften, levererar i tid och säkerställer att varje projekt genomförs enligt de högsta standarderna.",
      icon: <Clock size={36} className="text-primary" />
    },
    {
      title: "Erfarenhet",
      description: "Med över 15 års erfarenhet i branschen har vi den kunskap och expertis som krävs för att hantera alla typer av projekt.",
      icon: <Badge size={36} className="text-primary" />
    },
    {
      title: "Integritet",
      description: "Vi arbetar med ärlighet, öppenhet och respekt i alla våra kundrelationer och affärsmetoder.",
      icon: <HeartHandshake size={36} className="text-primary" />
    }
  ];

  return (
    <div className="page-transition">
      <HeroSection 
        title="Om Bygg & Städ Sandviken"
        subtitle="Lär känna oss och våra värderingar"
        imageUrl="https://images.unsplash.com/photo-1526396160420-b4cfa88cd4a6?auto=format&fit=crop&q=80"
      />
      
      {/* Our Values */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Våra värderingar</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Vad vi står för</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Våra värderingar styr allt vi gör – från hur vi interagerar med våra kunder till hur vi utför vårt arbete.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-6 animate-fade-in glass-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Varför välja oss</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Fördelar med Bygg & Städ Sandviken</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1586980368323-8ce5db4c85a0?auto=format&fit=crop&q=80" 
                alt="Professionellt team" 
                className="rounded-xl w-full h-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-3">Erfarenhet & Expertis</h3>
              <p className="text-muted-foreground">
                Med över 15 års erfarenhet i branschen har vi den kunskap och expertis som krävs 
                för att hantera alla typer av projekt, oavsett storlek eller komplexitet.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1567710845379-31d590262e06?auto=format&fit=crop&q=80" 
                alt="Kvalitet" 
                className="rounded-xl w-full h-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-3">Heltäckande tjänster</h3>
              <p className="text-muted-foreground">
                Som en one-stop-shop för både städ- och byggtjänster kan vi hantera alla aspekter 
                av ditt projekt, vilket sparar dig tid, pengar och besväret med att koordinera flera företag.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&q=80" 
                alt="Kundservice" 
                className="rounded-xl w-full h-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-3">Personlig service</h3>
              <p className="text-muted-foreground">
                Vi tror på att bygga relationer med våra kunder genom personlig service och 
                uppmärksamhet på detaljer. Vi lyssnar på dina behov och anpassar våra tjänster därefter.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '450ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80" 
                alt="RUT-avdrag" 
                className="rounded-xl w-full h-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-3">RUT-avdrag</h3>
              <p className="text-muted-foreground">
                För våra städtjänster kan du dra nytta av RUT-avdraget, vilket minskar dina kostnader 
                med upp till 50%. Vi hjälper dig med all administration kring detta.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Vi letar alltid efter duktiga medarbetare</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Är du intresserad av att bli en del av vårt team? Vi söker alltid efter passionerade 
              och engagerade personer som delar våra värderingar.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium group"
            >
              Kontakta oss
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
