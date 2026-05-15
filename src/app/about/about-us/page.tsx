import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'About OAIC',
  description:
    'Learn about the 2026 1st Odisha AI Conference (OAIC), a premier event for AI research and innovation in India.',
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About OAIC"
        description="Learn more about the 2026 1st Odisha AI Conference (OAIC)."
        breadcrumbs={[{ href: '/about/about-us', label: 'About Us' }]}
      />

      <Section className="bg-white">
        <div className="container-wide">


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-start">

            {/* Left Side: Logo Integration Area */}
            <div className="lg:col-span-5 animate-fade-in-up" style={{ '--animation-delay': '0.1s' } as React.CSSProperties}>
              <div className="relative group flex items-center justify-center min-h-[400px] bg-gray-50/30">
                {/* Faint Background Texture: World Map */}
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                  <Image
                    src="/globe.svg"
                    alt=""
                    fill
                    className="object-contain scale-110"
                  />
                </div>

                {/* Architectural Frame */}
                <div className="relative z-10 w-full h-full aspect-square flex items-center justify-center p-16">
                  {/* Minimal Architectural Corner Detail */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gray-200"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gray-200"></div>

                  <div className="relative w-full h-full">
                    <Image
                      src="/images/logo.png"
                      alt="OAIC Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>


              </div>
            </div>

            {/* Right Side: Editorial Content */}
            <div className="lg:col-span-7 animate-fade-in-up relative" style={{ '--animation-delay': '0.2s' } as React.CSSProperties}>
              <div className="max-w-3xl relative">
                {/* Exact IEEE Architectural Accent Bar */}
                <div className="absolute -bottom-12 -left-12 w-[65%] h-32 pointer-events-none hidden md:block">
                  <div className="absolute bottom-0 left-0 w-full h-[5.5px] bg-[#08283c]"></div>
                  <div className="absolute bottom-0 left-0 w-[4.5px] h-full bg-[#08283c]"></div>
                </div>


                <div className="space-y-10 relative">
                  <div className="prose prose-xl prose-slate max-w-none">
                    <p className="text-2xl leading-snug text-gray-900 font-medium tracking-tight">
                      The <span className="text-[#002147]">2026 1st Odisha AI Conference (OAIC)</span> will serve as a premier platform for exchanging ideas, presenting research findings, and fostering collaborations that address real-world challenges through AI-driven solutions.
                    </p>
                  </div>

                  <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed">
                    <p>
                      OAIC focuses on both theoretical developments and practical applications of AI across diverse domains, emphasizing ethical AI, sustainable development, and the integration of AI with emerging technologies to drive societal and economic transformation.
                    </p>
                  </div>

                  {/* Host Section - Integrated & Minimal */}
                  <div className="pt-12 border-t border-gray-100">
                    <h3 className="text-xs uppercase tracking-[0.2em] text-[#002147] font-bold mb-6 italic">Host Institution</h3>
                    <h4 className="text-2xl font-serif font-bold text-[#002147] mb-6">Siksha &apos;O&apos; Anusandhan (SOA)</h4>

                    <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed mb-10">
                      <p>
                        <strong>Siksha &apos;O&apos; Anusandhan (Deemed to be University)</strong>, Bhubaneswar, declared u/s 3 of UGC Act, 1956, is a leading university in India offering professional programs in multiple disciplines. Today, it has emerged as one of the fastest-growing universities in the country, providing a vibrant atmosphere for teaching-learning, research and development, and socially inclusive extension activities.
                      </p>
                    </div>

                    {/* Minimalist Stats List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                      {[
                        { label: "NAAC Accreditation", value: "Grade 'A++' (3rd Cycle)" },
                        { label: "QS World Rankings", value: "Top 35 Institutions in India" },
                        { label: "Times Higher Ed", value: "89th in India Overall" },
                        { label: "MHRD NIRF 2026", value: "14th (Univ), 26th (Engg)" }
                      ].map((item, idx) => (
                        <div key={idx} className="group border-b border-gray-50 pb-4">
                          <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1 transition-colors">{item.label}</span>
                          <span className="text-sm font-semibold text-gray-800">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Conference Branding Detail */}
      <div className="bg-gray-50 border-y border-gray-100 py-6 overflow-hidden">
        <div className="container-wide flex justify-center items-center gap-12 opacity-30 grayscale pointer-events-none">
          <span className="text-sm font-bold tracking-[0.4em] uppercase text-gray-500 whitespace-nowrap">Intelligence</span>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
          <span className="text-sm font-bold tracking-[0.4em] uppercase text-gray-500 whitespace-nowrap">Innovation</span>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
          <span className="text-sm font-bold tracking-[0.4em] uppercase text-gray-500 whitespace-nowrap">Transformation</span>
        </div>
      </div>
    </>
  );}