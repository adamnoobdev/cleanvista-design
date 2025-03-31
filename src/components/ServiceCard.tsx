
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

const ServiceCard = ({ id, title, description, imageUrl }: ServiceCardProps) => {
  return (
    <div 
      className="bg-white border border-border shadow-sm rounded-md overflow-hidden transition-all duration-200 hover:shadow-md group flex flex-col h-full"
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-5 flex-grow">{description}</p>
        <Link 
          to={`/services/${id}`} 
          className="inline-flex items-center text-primary font-medium group/link mt-auto"
        >
          Läs mer
          <ArrowRight 
            size={16} 
            className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1" 
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
