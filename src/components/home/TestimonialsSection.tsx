
import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialData } from '@/types/testimonials';

interface TestimonialsSectionProps {
  testimonials: TestimonialData[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
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
  );
};

export default TestimonialsSection;
