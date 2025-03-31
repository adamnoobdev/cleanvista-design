
import React from 'react';
import { Check } from 'lucide-react';

const SuccessMessage: React.FC = () => {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
        <Check className="text-green-600" size={32} />
      </div>
      <h4 className="text-xl font-medium mb-2">Tack för din förfrågan!</h4>
      <p className="text-muted-foreground">
        Vi har mottagit din offertförfrågan och återkommer till dig så snart som möjligt.
      </p>
    </div>
  );
};

export default SuccessMessage;
