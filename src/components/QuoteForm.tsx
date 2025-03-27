
import React, { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { 
  Check,
  Loader2
} from 'lucide-react';

const quoteFormSchema = z.object({
  name: z.string().min(2, { message: "Namn måste innehålla minst 2 tecken" }),
  email: z.string().email({ message: "Ange en giltig e-postadress" }),
  phone: z.string().min(6, { message: "Ange ett giltigt telefonnummer" }),
  service: z.string().min(1, { message: "Välj en tjänst" }),
  message: z.string().min(10, { message: "Meddelande måste innehålla minst 10 tecken" }),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const QuoteForm = () => {
  const [formData, setFormData] = useState<QuoteFormValues>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof QuoteFormValues]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      quoteFormSchema.parse(formData);
      
      // Simulate API call
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success
      setIsSubmitted(true);
      toast.success("Tack! Din offertförfrågan har skickats.", {
        description: "Vi återkommer till dig så snart som möjligt."
      });
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to form errors
        const formErrors: Partial<Record<keyof QuoteFormValues, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            formErrors[err.path[0] as keyof QuoteFormValues] = err.message;
          }
        });
        setErrors(formErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass rounded-2xl p-8 max-w-xl mx-auto animate-fade-in">
      <h3 className="text-2xl font-semibold mb-6">Begär en kostnadsfri offert</h3>
      
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Check className="text-green-600" size={32} />
          </div>
          <h4 className="text-xl font-medium mb-2">Tack för din förfrågan!</h4>
          <p className="text-muted-foreground">
            Vi har mottagit din offertförfrågan och återkommer till dig så snart som möjligt.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium">
              Namn <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? 'border-red-300 bg-red-50' : 'border-input bg-white'
              }`}
              placeholder="Ditt namn"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium">
                E-post <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-300 bg-red-50' : 'border-input bg-white'
                }`}
                placeholder="Din e-postadress"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block font-medium">
                Telefon <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? 'border-red-300 bg-red-50' : 'border-input bg-white'
                }`}
                placeholder="Ditt telefonnummer"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="service" className="block font-medium">
              Tjänst <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.service ? 'border-red-300 bg-red-50' : 'border-input bg-white'
              }`}
            >
              <option value="" disabled>Välj tjänst</option>
              <option value="flyttstad">Flyttstäd</option>
              <option value="kontorsstad">Kontorsstäd</option>
              <option value="dodsbo">Dödsbo</option>
              <option value="demontering">Demontering/Bortforsling</option>
              <option value="takbyten">Takbyten</option>
              <option value="annat">Annat</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block font-medium">
              Meddelande <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message ? 'border-red-300 bg-red-50' : 'border-input bg-white'
              }`}
              placeholder="Beskriv ditt projekt eller förfrågan"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          
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
        </form>
      )}
    </div>
  );
};

export default QuoteForm;
