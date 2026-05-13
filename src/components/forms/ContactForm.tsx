'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { contactInfo } from '@/data/contact';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
  const mailSubject = encodeURIComponent(values.subject || `Contact from ${values.name}`);
  const mailBody = encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`,
  );
  setMailtoLink(`mailto:${contactInfo.generalEmail}?subject=${mailSubject}&body=${mailBody}`);
}

useEffect(() => {
  if (mailtoLink) {
    window.location.href = mailtoLink;
    // Clear mailtoLink after navigation in a defer, to avoid cascading renders
    setTimeout(() => setMailtoLink(null), 0);
  }
}, [mailtoLink]);


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject of your inquiry" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Form>
  );
}
