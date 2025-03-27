
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  imageUrl, 
  ctaText = "Begär offert", 
  ctaLink = "/quote" 
}: HeroSectionProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[85vh] md:h-[90vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)',
          height: '110%',
          top: '-5%',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Link 
            to={ctaLink} 
            className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg group animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            {ctaText}
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
