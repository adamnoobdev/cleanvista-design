
import React from 'react';
import { Loader2 } from 'lucide-react';

interface FormSubmitButtonProps {
  isSubmitting: boolean;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium transition-all hover:bg-primary/90 disabled:opacity-70 flex items-center justify-center"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="animate-spin mr-2" size={18} />
          Skickar...
        </>
      ) : (
        'Skicka offertförfrågan'
      )}
    </button>
  );
};

export default FormSubmitButton;
