
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { quoteFormSchema, QuoteFormValues } from './schema';

export const useQuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      propertySize: '',
      desiredDate: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    try {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success
      setIsSubmitted(true);
      toast.success("Tack! Din offertförfrågan har skickats.", {
        description: "Vi återkommer till dig så snart som möjligt."
      });
      
      // Reset form after delay
      setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      toast.error("Ett fel inträffade", {
        description: "Försök igen eller kontakta oss direkt via telefon."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    isSubmitted,
    onSubmit
  };
};
