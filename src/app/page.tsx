import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/Button';
import { importantDates as dates } from '@/data/dates';

export const metadata: Metadata = {
  title: 'IEEE GLOBECOM 2026 — Macau S.A.R., China',
  description: 'IEEE GLOBECOM 2026 is a flagship conference of the IEEE Communications Society, gathering top experts to drive innovation in communications technology. Join us in Macau, 7-11 December 2026.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* News and Announcements */}
      <section className="pt-12 pb-6 bg-white">
        <div className="container-wide">
          <div className="border border-accent-cyan p-8 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">News and Announcements</h2>
            <Link href="/authors/call-for-papers" className="text-lg text-accent-cyan hover:underline font-semibold">
              IEEE GLOBECOM 2026 Call for Papers Announced
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-white relative">
        <div className="container-wide">
          <div className="relative flex flex-col md:flex-row">
            {/* Image and Title Block */}
            <div className="relative w-full md:w-3/5 h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: "url('/dates-image.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="absolute top-0 left-0 bg-primary-900 text-white p-8 h-full flex items-center shadow-lg max-w-[280px]">
                <h2 className="text-3xl font-bold">Important Dates</h2>
              </div>
            </div>

            {/* Dates List */}
            <div className="w-full md:w-2/5 flex flex-col justify-center space-y-4 -ml-0 md:-ml-8 z-10 py-8">
              {dates.slice(0, 4).map((item, index) => (
                <div key={index} className="flex shadow-md">
                  <div className="bg-primary-900 text-white font-bold p-4 w-32 flex items-center justify-center shrink-0">
                    {item.date}
                  </div>
                  <div className="bg-white border border-gray-200 p-4 flex-1 flex flex-col justify-center text-sm">
                    <span className="font-bold text-gray-800">{item.event}</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-end pt-2">
                <Button as={Link} href="/authors/important-dates" className="bg-accent-cyan hover:bg-blue-400 text-white rounded-none border-none shadow-sm">
                  See All Dates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white relative">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="relative p-8 md:p-12">
            {/* Top Left Bracket */}
            <div className="absolute top-0 left-0 w-1/2 h-1/3 border-t-2 border-l-2 border-accent-orange pointer-events-none" />
            {/* Bottom Right Bracket */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/3 border-b-2 border-r-2 border-accent-orange pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Welcome to IEEE GLOBECOM 2026!</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify md:text-left">
              IEEE Global Communications Conference (GLOBECOM), a flagship IEEE Communications Society event, gathers top experts to drive innovation and advance nearly every aspect of communications technology. Each year, thousands of the most groundbreaking contributions are selected for this conference program. This premier event features technical papers, tutorials, workshops, and industry sessions designed to push the boundaries of telecommunications technologies, systems, and infrastructure. GLOBECOM continues to shape the future of high-speed, seamless, and cost-effective global telecommunications services globally for all.
            </p>
          </div>
        </div>
      </section>
      
      {/* Destination & Travel Info */}
      <section className="section-padding bg-white pt-0">
        <div className="container-wide max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start relative p-8">
            {/* Bottom Left Bracket */}
            <div className="absolute bottom-0 left-1/4 w-1/4 h-1/3 border-b-2 border-l-2 border-accent-orange pointer-events-none" />
            {/* Top Right Bracket */}
            <div className="absolute top-0 right-0 w-1/2 h-1/3 border-t-2 border-r-2 border-accent-orange pointer-events-none" />

            <div className="w-full md:w-1/2">
<Image 
                    src="/destination-macau.jpg" 
                    alt="Night skyline of Macau"
                    className="w-full shadow-md"
                    width={800}
                    height={450}
                    priority
                  />
            </div>
            <div className="w-full md:w-1/2 pt-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">The Destination</h2>
              <p className="text-xl text-primary-800 mb-8">Macau S.A.R., China</p>
              
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Travel Information</h3>
              <div className="flex gap-4">
                <Button as={Link} href="/travel/attractions" className="bg-accent-cyan hover:bg-blue-400 text-white rounded-none border-none">
                  Hotel & Travel
                </Button>
                <Button as={Link} href="/travel/visa" className="bg-accent-cyan hover:bg-blue-400 text-white rounded-none border-none">
                  Visa Information
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
