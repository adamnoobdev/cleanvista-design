
import React from 'react';
import { Form } from "@/components/ui/form";
import FormFields from './FormFields';
import FormSubmitButton from './FormSubmitButton';
import SuccessMessage from './SuccessMessage';
import { useQuoteForm } from './useQuoteForm';

const QuoteForm = () => {
  const { form, isSubmitting, isSubmitted, onSubmit } = useQuoteForm();

  return (
    <div className="glass rounded-2xl p-8 max-w-xl mx-auto animate-fade-in">
      <h3 className="text-2xl font-semibold mb-6">Begär en kostnadsfri offert</h3>
      
      {isSubmitted ? (
        <SuccessMessage />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormFields form={form} />
            <FormSubmitButton isSubmitting={isSubmitting} />
          </form>
        </Form>
      )}
    </div>
  );
};

export default QuoteForm;
