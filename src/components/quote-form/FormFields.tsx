
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { QuoteFormValues } from './schema';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
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

interface FormFieldsProps {
  form: UseFormReturn<QuoteFormValues>;
}

const FormFields: React.FC<FormFieldsProps> = ({ form }) => {
  return (
    <>
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
    </>
  );
};

export default FormFields;
