import React from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const measurementSchema = z.object({
  bust: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Введите корректное значение обхвата груди",
  }),
  waist: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Введите корректное значение обхвата талии",
  }),
  hips: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Введите корректное значение обхвата бедер",
  }),
  neck: z.string().optional(),
});

type MeasurementFormData = z.infer<typeof measurementSchema>;

interface SizeConverterFormProps {
  onSubmit: (data: MeasurementFormData) => void;
  includeNeck?: boolean;
}

const SizeConverterForm = ({ onSubmit, includeNeck = false }: SizeConverterFormProps) => {
  const form = useForm<MeasurementFormData>({
    resolver: zodResolver(measurementSchema),
    defaultValues: {
      bust: "",
      waist: "",
      hips: "",
      neck: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="bust"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Обхват груди (см)</FormLabel>
                <FormControl>
                  <Input type="number" min="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="waist"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Обхват талии (см)</FormLabel>
                <FormControl>
                  <Input type="number" min="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hips"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Обхват бедер (см)</FormLabel>
                <FormControl>
                  <Input type="number" min="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {includeNeck && (
            <FormField
              control={form.control}
              name="neck"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Обхват шеи (см)</FormLabel>
                  <FormControl>
                    <Input type="number" min="0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <Button type="submit" className="w-full">Подобрать размер</Button>
      </form>
    </Form>
  );
};

export default SizeConverterForm;
