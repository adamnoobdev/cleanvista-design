
import React from 'react';
import QuoteForm from '@/components/QuoteForm';

const QuoteSection = () => {
  return (
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
  );
};

export default QuoteSection;
