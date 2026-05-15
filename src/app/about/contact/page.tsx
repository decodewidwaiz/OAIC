import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { contactInfo } from '@/data/contact';
import { MapPin, Phone, Mail } from 'lucide-react';
import Section from '@/components/layout/Section';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact the OAIC 2026 organizing committee for general inquiries, papers, sponsorship, and media.',
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
        description="We'd love to hear from you. Reach out for any questions about OAIC 2026."
        breadcrumbs={[{ href: '/about/contact', label: 'Contact Us' }]}
      />

      <Section className="bg-white">
        <div className="container-wide">
         

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24 items-start">
            
            {/* Left Column: Inquiry Channels & Venue */}
            <div className="lg:col-span-7 space-y-16 animate-fade-in-up" style={{ '--animation-delay': '0.1s' } as React.CSSProperties}>
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#002147] tracking-tight leading-tight mb-8 flex items-center gap-4">
                  <span className="w-1.5 h-10 bg-[#002147]"></span>
                  Get in Touch
                </h2>
                
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {contactCategories.map((cat) => (
                    <div key={cat.label} className="group p-6 border border-gray-100 bg-gray-50/30 rounded-sm hover:border-gray-200 transition-all duration-300">
                      <h3 className="text-lg font-bold text-[#002147] mb-3 group-hover:text-primary-600 transition-colors">{cat.label}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        <a
                          href={`mailto:${cat.email}`}
                          className="text-sm text-primary-600 font-medium hover:underline"
                        >
                          {cat.email}
                        </a>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-16 border-t border-gray-100 relative">
                {/* Architectural Accent Line */}
                <div className="absolute -top-px left-0 w-24 h-1 bg-[#002147]"></div>
                
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#002147] font-bold mb-8 italic">Location & Venue</h3>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="flex-1 space-y-6">
                    <h4 className="text-2xl font-serif font-bold text-[#002147]">Host University</h4>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gray-50 rounded-full">
                        <MapPin className="h-5 w-5 text-[#002147]" />
                      </div>
                      <div className="text-gray-600 text-lg leading-relaxed">
                        <span className="font-bold text-gray-900 block mb-1">Siksha &apos;O&apos; Anusandhan</span>
                        {contactInfo.address.line1}<br />
                        {contactInfo.address.line2}<br />
                        {contactInfo.address.city}, {contactInfo.address.country}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-auto pt-4 md:pt-14">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="group flex items-center gap-4 p-4 border border-gray-100 rounded-sm hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className="p-2 bg-gray-50 rounded-full group-hover:bg-white transition-colors">
                        <Phone className="h-5 w-5 text-[#002147]" />
                      </div>
                      <span className="text-lg font-semibold text-gray-700">{contactInfo.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Message Panel */}
            <div className="lg:col-span-5 animate-fade-in-up relative" style={{ '--animation-delay': '0.2s' } as React.CSSProperties}>
              {/* Reference-style Architectural Accent */}
              <div className="absolute -bottom-10 -left-10 w-48 h-32 border-l border-b border-[#002147]/20 pointer-events-none hidden xl:block"></div>
              
              <div className="bg-white border border-gray-100 p-8 md:p-10 shadow-sm relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-bold text-[#002147] mb-3">Send a Message</h3>
                  <p className="text-gray-500 text-sm">
                    Your message will be sent to our general inquiries inbox.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </Section>
    </>
  );}