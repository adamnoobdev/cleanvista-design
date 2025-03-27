
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, HomeIcon, Building2, Trash2, Construction, Warehouse } from 'lucide-react';

import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import QuoteForm from '@/components/QuoteForm';

const Index = () => {
  // Service data
  const services = [
    {
      id: "flyttstad",
      title: "Flyttstäd",
      description: "Låt oss ta hand om städningen när du flyttar så att du kan fokusera på din nya bostad.",
      imageUrl: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80",
      icon: <HomeIcon size={24} />,
      delay: 100
    },
    {
      id: "kontorsstad",
      title: "Kontorsstäd",
      description: "Vi erbjuder professionell kontorsstädning för en fräsch och hygienisk arbetsmiljö.",
      imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
      icon: <Building2 size={24} />,
      delay: 200
    },
    {
      id: "dodsbo",
      title: "Dödsbo",
      description: "Professionell och respektfull hantering av dödsbon när du behöver hjälp som mest.",
      imageUrl: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80",
      icon: <Warehouse size={24} />,
      delay: 300
    },
    {
      id: "demontering",
      title: "Demontering & Bortforsling",
      description: "Vi demonterar och transporterar bort möbler, inredning eller annat du vill bli av med.",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
      icon: <Trash2 size={24} />,
      delay: 400
    },
    {
      id: "takbyten",
      title: "Takbyten",
      description: "Professionell installation och reparation av tak med kvalitetsmaterial och garantier.",
      imageUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80",
      icon: <Construction size={24} />,
      delay: 500
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Anna Larsson",
      text: "Jag är mycket nöjd med flyttstädet. Allt blev perfekt rent och fint, och de var flexibla med tiden. Rekommenderas varmt!",
      rating: 5,
    },
    {
      id: 2,
      name: "Johan Eriksson",
      text: "Fantastiskt jobb med vårt dödsbo. Professionell hantering med respekt och omtanke i en svår situation.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Johansson",
      text: "Anlitat dem för kontorsstäd i över ett år nu. Alltid punktliga och noggranna. Rekommenderas!",
      rating: 5,
    }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <HeroSection 
        title="Professionella städ- och byggtjänster i Sandviken"
        subtitle="Vi erbjuder högkvalitativa tjänster inom flyttstäd, kontorsstäd, dödsbo, demontering och takbyten."
        imageUrl="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80"
      />
      
      {/* About Section */}
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
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80" 
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
      
      {/* Services Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Våra tjänster</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Vad vi kan hjälpa dig med</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vi erbjuder ett brett utbud av tjänster för att möta dina behov, 
              oavsett om det gäller städning eller byggnadsarbete.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="animate-fade-in" style={{ animationDelay: `${service.delay}ms` }}>
                <ServiceCard 
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-fade-in">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium group"
            >
              Se alla våra tjänster
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Vad våra kunder säger</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Recensioner från nöjda kunder</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="glass p-6 rounded-2xl animate-fade-in glass-hover"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="italic mb-6">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Begär offert</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Intresserad av våra tjänster?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fyll i formuläret nedan för att begära en kostnadsfri offert. 
              Vi återkommer till dig så snart som möjligt.
            </p>
          </div>
          
          <QuoteForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
