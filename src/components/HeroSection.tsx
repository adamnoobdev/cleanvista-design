
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  useColorBackground?: boolean;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  imageUrl, 
  ctaText = "Begär offert", 
  ctaLink = "/quote",
  useColorBackground = false
}: HeroSectionProps) => {
  return (
    <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background */}
      {useColorBackground ? (
        <div 
          className="absolute inset-0 z-0 bg-secondary"
          aria-hidden="true"
        />
      ) : (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.8)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Gradient Overlay */}
      {!useColorBackground && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10 z-10" aria-hidden="true" />
      )}

      {/* Content */}
      <div className={`relative ${useColorBackground ? 'z-10' : 'z-20'} h-full flex flex-col justify-center items-center text-center px-6`}>
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-3xl md:text-5xl font-bold ${useColorBackground ? 'text-foreground' : 'text-white'} mb-4 leading-tight`}>
            {title}
          </h1>
          <p className={`text-lg md:text-xl ${useColorBackground ? 'text-muted-foreground' : 'text-white/90'} mb-8 max-w-2xl mx-auto`}>
            {subtitle}
          </p>
          <Link 
            to={ctaLink} 
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium text-lg group"
            aria-label={ctaText}
          >
            {ctaText}
            <ArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
