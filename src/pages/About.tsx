
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

  // Team members
  const team = [
    {
      name: "Erik Andersson",
      title: "Grundare & VD",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      description: "Erik grundade företaget 2007 och har över 20 års erfarenhet inom bygg- och städbranschen."
    },
    {
      name: "Maria Lindgren",
      title: "Verksamhetschef",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      description: "Maria ansvarar för den dagliga verksamheten och ser till att alla projekt löper smidigt."
    },
    {
      name: "Johan Nilsson",
      title: "Arbetsledare",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      description: "Johan leder våra arbetsgrupper och säkerställer att alla arbeten utförs med högsta kvalitet."
    }
  ];

  return (
    <div className="page-transition">
      <HeroSection 
        title="Om Bygg & Städ Sandviken"
        subtitle="Lär känna oss och vår historia, våra värderingar och det team som gör allt möjligt"
        imageUrl="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&q=80"
      />
      
      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Vår historia</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">Från en enkel idé till ett betrodd företag</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Bygg & Städ Sandviken grundades 2007 av Erik Andersson med en vision om att erbjuda 
                  högkvalitativa tjänster inom både städning och bygg under samma tak. Det som började 
                  som ett enmansföretag har idag vuxit till ett etablerat företag med ett team av 
                  dedikerade medarbetare.
                </p>
                <p>
                  Under åren har vi utvecklat vårt tjänsteutbud för att möta våra kunders behov och 
                  förväntningar. Från början fokuserade vi främst på flyttstädning och mindre byggjobb, 
                  men idag erbjuder vi ett brett spektrum av tjänster, från kontorsstäd och hantering 
                  av dödsbon till takbyten och andra större byggprojekt.
                </p>
                <p>
                  Vår framgång bygger på vår orubbliga hängivenhet till kvalitet och kundnöjdhet. Vi tror 
                  på att bygga långsiktiga relationer med våra kunder genom att alltid leverera över förväntan.
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&q=80" 
                  alt="Bygg och Städ Sandviken Historia" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="glass absolute -bottom-6 -right-6 px-6 py-4 rounded-xl shadow-lg">
                <p className="font-medium text-lg">Grundat 2007</p>
                <p className="text-muted-foreground">i Sandviken</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
      
      {/* Our Team */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Vårt team</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Personerna bakom företaget</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Möt de dedikerade individerna som arbetar hårt för att leverera högkvalitativa tjänster till våra kunder.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="glass rounded-xl overflow-hidden animate-fade-in glass-hover"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mb-3">{member.title}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in">
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
                src="https://images.unsplash.com/photo-1556911220-bda9f7f3fe9b?auto=format&fit=crop&q=80" 
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
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80" 
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
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
                src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80" 
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
    </div>
  );
};

export default AboutPage;
