import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Visa Information',
  description:
    'Visa requirements and application guide for attending OAIC 2026 in Bhubaneswar, India.',
};

const visaCategories = [
  {
    country: 'USA, UK, EU, Canada, Australia',
    type: 'e-Visa',
    notes:
      'Apply online at indianvisaonline.gov.in. Typically granted in 3–5 business days.',
  },
  {
    country: 'SAARC Countries',
    type: 'Varies',
    notes:
      'Check country-specific requirements. Nepal/Bhutan citizens generally exempt.',
  },
  {
    country: 'China, Japan, South Korea',
    type: 'e-Visa',
    notes: 'e-Visa available. Apply at least 4 days in advance.',
  },
  {
    country: 'All other countries',
    type: 'Regular Visa',
    notes:
      'Apply at your nearest Indian embassy/consulate. Allow 2–4 weeks processing time.',
  },
];

const applicationSteps = [
  'Visit the official Indian e-Visa portal.',
  'Select "e-Visa" and choose your nationality.',
  'Fill in personal details, travel dates, and purpose (Conference/Business).',
  'Upload required documents: passport copy, photo, and invitation letter.',
  'Pay the visa fee online.',
  'Receive e-Visa approval via email (usually within 3–5 business days).',
  'Print your e-Visa and carry it with your passport.',
];

export default function VisaPage() {
  return (
    <>
      <PageHeader
        title="Visa Information"
        description="Planning your travel to OAIC 2026 in Bhubaneswar, India."
        breadcrumbs={[{ href: '/travel/visa', label: 'Visa Information' }]}
      />
      <Section className="bg-white pb-24">
        <div className="container-wide max-w-5xl">

          {/* Disclaimer Callout */}
          <div className="relative group mb-20 p-8 border border-gray-100 bg-gray-50/30 rounded-sm animate-fade-in-up">
            <div className="absolute top-0 left-0 w-12 h-[1.5px] bg-[#08283C]"></div>
            <div className="absolute top-0 left-0 w-[1.5px] h-12 bg-[#08283C]"></div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-white rounded-full shadow-sm">
                <AlertTriangle className="h-5 w-5 text-[#08283C]" />
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[#08283C] font-bold mb-2">Disclaimer</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Visa regulations are subject to change. Please verify all information with your local Indian embassy or the official government portal.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-24">

            {/* Visa Requirements Section */}
            <div className="animate-fade-in-up" style={{ '--animation-delay': '0.1s' } as React.CSSProperties}>
              <div className="relative mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#08283C] tracking-tight mb-4">Visa Requirements</h2>
                <div className="w-16 h-1 bg-[#0C527D]/20"></div>
                <p className="mt-6 text-gray-500 max-w-2xl leading-relaxed">
                  Most international visitors require a visa. The Indian government offers e-Visas for 165+ countries. We recommend applying at least 4 weeks before your scheduled travel.
                </p>
              </div>

              <div className="overflow-x-auto border border-gray-100 rounded-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100">
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-[#08283C] font-bold">Country / Region</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-[#08283C] font-bold">Visa Type</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest text-[#08283C] font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {visaCategories.map((row) => (
                      <tr key={row.country} className="hover:bg-[#0C527D]/5 transition-colors group">
                        <td className="px-6 py-6 font-bold text-[#08283C] text-sm">{row.country}</td>
                        <td className="px-6 py-6">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-none text-[10px] font-bold uppercase tracking-wider bg-[#3A8EC2] text-white">
                            {row.type}
                          </span>
                        </td>
                        <td className="px-6 py-6 text-sm text-gray-500 leading-relaxed group-hover:text-gray-700">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Application Guide Section */}
            <div className="animate-fade-in-up" style={{ '--animation-delay': '0.2s' } as React.CSSProperties}>
              <div className="relative mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#08283C] tracking-tight mb-4">Application Guide</h2>
                  <p className="text-gray-500 leading-relaxed">
                    A step-by-step procedure to ensure your visa application is processed smoothly.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#0C527D] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#3A8EC2]" />
                  Standard Process
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative">
                {/* Vertical Decorative Line for Desktop */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden md:block"></div>

                {applicationSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <span className="flex-shrink-0 text-4xl font-serif font-bold text-gray-100 group-hover:text-[#3A8EC2]/20 transition-colors duration-300">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="pt-2">
                      <p className="text-gray-600 leading-relaxed font-medium group-hover:text-[#08283C] transition-colors">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-16 border-t border-gray-100 animate-fade-in-up" style={{ '--animation-delay': '0.3s' } as React.CSSProperties}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="https://indianvisaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 bg-[#08283C] hover:bg-[#0C527D] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <ExternalLink className="h-4 w-4" />
                  Indian e-Visa Portal
                </a>
                <a
                  href="mailto:"
                  className="w-full sm:w-auto px-10 py-5 border border-gray-200 hover:border-[#0C527D] hover:bg-gray-50 text-[#08283C] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 text-center"
                >
                  Request Invitation Letter
                </a>
              </div>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}