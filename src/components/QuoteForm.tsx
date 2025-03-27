
import React, { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { 
  Check,
  Loader2
} from 'lucide-react';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const quoteFormSchema = z.object({
  name: z.string().min(2, { message: "Namn måste innehålla minst 2 tecken" }),
  email: z.string().email({ message: "Ange en giltig e-postadress" }),
  phone: z.string().min(6, { message: "Ange ett giltigt telefonnummer" }),
  address: z.string().min(5, { message: "Vänligen ange din adress" }),
  city: z.string().min(2, { message: "Vänligen ange din stad" }),
  propertySize: z.string().min(1, { message: "Vänligen ange bostadens storlek" }),
  desiredDate: z.string().min(1, { message: "Vänligen välj ett önskat startdatum" }),
  service: z.string().min(1, { message: "Välj en tjänst" }),
  message: z.string().min(10, { message: "Meddelande måste innehålla minst 10 tecken" }),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const QuoteForm = () => {
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Namn <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Ditt namn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-post <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Din e-postadress" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Ditt telefonnummer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adress <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Din gatuadress" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stad <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Din stad" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="propertySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bostadens storlek <span className="text-red-500">*</span></FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Välj bostadens storlek" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under_50">Mindre än 50 kvm</SelectItem>
                        <SelectItem value="50_80">50-80 kvm</SelectItem>
                        <SelectItem value="80_120">80-120 kvm</SelectItem>
                        <SelectItem value="120_200">120-200 kvm</SelectItem>
                        <SelectItem value="over_200">Större än 200 kvm</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="desiredDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Önskat startdatum <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tjänst <span className="text-red-500">*</span></FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Välj tjänst" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="flyttstad">Flyttstäd</SelectItem>
                      <SelectItem value="kontorsstad">Kontorsstäd</SelectItem>
                      <SelectItem value="dodsbo">Dödsbo</SelectItem>
                      <SelectItem value="demontering">Demontering/Bortforsling</SelectItem>
                      <SelectItem value="takbyten">Takbyten</SelectItem>
                      <SelectItem value="annat">Annat</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meddelande <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Beskriv ditt projekt eller förfrågan" 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
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
        </Form>
      )}
    </div>
  );
};

export default QuoteForm;
