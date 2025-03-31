
import { z } from 'zod';

export const quoteFormSchema = z.object({
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

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
