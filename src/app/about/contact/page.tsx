import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { contactInfo } from '@/data/contact';
import { MapPin, Phone } from 'lucide-react';
import Section from '@/components/layout/Section';
import ContactForm from '@/components/forms/ContactForm';
import SectionHeader from '@/components/layout/SectionHeader';
import {
  Card,
  CardDescription,
  CardContent,
  
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact the OAIC 2024 organizing committee for general inquiries, papers, sponsorship, and media.',
};

const contactCategories = [
  {
    label: 'General Inquiries',
    email: contactInfo.generalEmail,
    desc: 'For any general questions about the conference.',
  },
  {
    label: 'Paper Submissions',
    email: contactInfo.papersEmail,
    desc: 'Questions about submission, review process, or acceptance.',
  },
  {
    label: 'Sponsorship',
    email: contactInfo.sponsorshipEmail,
    desc: 'Partnership and exhibition opportunities.',
  },
  {
    label: 'Media & Press',
    email: contactInfo.mediaEmail,
    desc: 'Press passes, media kits, and coverage arrangements.',
  },
];


export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Reach out for any questions about OAIC 2024."
        breadcrumbs={[{ href: '/about/contact', label: 'Contact Us' }]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-3">
            <SectionHeader
              title="Get in Touch"
              subtitle="Have questions? We're here to help."
              className="mb-8"
            />
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactCategories.map((cat) => (
                  <Card key={cat.label}>
                    <CardHeader>
                      <CardTitle className="text-lg">{cat.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={`mailto:${cat.email}`}
                        className="text-primary hover:underline"
                      >
                        {cat.email}
                      </a>
                      <CardDescription className="mt-2">
                        {cat.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Venue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div className="text-muted-foreground">
                      {contactInfo.address.line1}
                      <br />
                      {contactInfo.address.line2}
                      <br />
                      {contactInfo.address.city}
                      <br />
                      {contactInfo.address.country}
                    </div>
                  </div>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="mt-4 flex items-center gap-4 text-muted-foreground transition hover:text-foreground"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    {contactInfo.phone}
                  </a>
                </CardContent>
              </Card>


            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-2">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Your message will be sent to our general inquiries inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
