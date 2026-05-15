import Link from 'next/link';
import Image from 'next/image';
import { X as Twitter, Briefcase as Linkedin, MessageSquare as Facebook, PlaySquare as Youtube, Camera as Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const footerNav = {
  program: [
    { label: 'Workshops', href: '/program/workshops' },
    { label: 'Tutorials', href: '#' },
    { label: 'Keynotes', href: '#' },
    { label: 'Panels', href: '#' },
  ],
  committees: [
    { label: 'Organizing', href: '/committees/organizing' },
    { label: 'Technical Program', href: '/committees/technical-program' },
  ],
  about: [
    { label: 'About OAIC', href: '/about/about-us' },
    { label: 'Siksha \'O\' Anusandhan', href: 'https://www.soa.ac.in/' },
  ],
  contact: [
    { label: 'Contact Us', href: '/about/contact' },
    { label: 'Venue', href: '/travel/attractions' },
  ],
};

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer role="contentinfo" className="flex flex-col">
      {/* Tier 1: Main Navigation (Dark Blue) */}
      <div className="bg-primary-900 text-white py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and CTA */}
            <div className="col-span-1 lg:col-span-2">
              <Link href="/" className="mb-6 inline-block">
                <Image 
                  src="/images/logo.png" 
                  alt="OAIC 2026 Logo" 
                  className="h-14 w-auto brightness-0 invert object-contain" 
                  width={168} 
                  height={56} 
                  priority 
                />
              </Link>
              <br />
              <Link href="/authors/submission-guidelines" className="text-primary-400 hover:text-white hover:underline text-lg font-semibold flex items-center gap-2">
                Submit a Paper →
              </Link>
            </div>

            {/* Nav Columns */}
            <div className="flex flex-col space-y-4">
              <Link href="/program/workshops" className="font-bold text-white text-lg hover:text-primary-300 transition-colors">Program</Link>
              <Link href="/committees/organizing" className="font-bold text-white text-lg hover:text-primary-300 transition-colors">Committees</Link>
              <Link href="/travel/attractions" className="font-bold text-white text-lg hover:text-primary-300 transition-colors">Hotel & Travel</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/about/about-us" className="font-bold text-white text-lg hover:text-primary-300 transition-colors">About</Link>
              <Link href="/about/contact" className="font-bold text-white text-lg hover:text-primary-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Social Media Bar (Cyan/Primary-400) */}
      <div className="bg-primary-400 py-4">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center text-primary-950 font-medium">
          <p className="text-sm md:text-base">&copy; OAIC 2026</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {socialLinks.map(social => (
              <a key={social.label} href={social.href} aria-label={social.label} className="hover:text-white transition-colors">
                <social.icon className="h-5 w-5 md:h-6 md:w-6 stroke-[2.5]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Tier 3: Utility Links and Copyright (Dark Gray) */}
      <div className="bg-[#2a2a2a] text-gray-300 py-8">
        <div className="container-wide">
          {/* Bottom Row: Copyright Text */}
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-5xl">
            &copy; Copyright {currentYear} Siksha &apos;O&apos; Anusandhan &amp; OAIC – All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
