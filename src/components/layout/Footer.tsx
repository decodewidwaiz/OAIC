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
    { label: 'About GLOBECOM', href: '/about/about-us' },
    { label: 'IEEE ComSoc', href: 'https://www.comsoc.org/' },
  ],
  contact: [
    { label: 'Contact Us', href: '/about/contact' },
    { label: 'Venue', href: '/travel/attractions' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      {/* Main Footer */}
      <div className="bg-primary-800 text-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="mb-4 inline-block">
                <Image src="/logo-white.svg" alt="IEEE GLOBECOM Logo" className="h-14" width={168} height={56} priority />
              </Link>
              <Link href="/authors/submission-guidelines" className="text-accent-cyan hover:underline font-semibold flex items-center gap-2">
                Submit a Paper →
              </Link>
            </div>
            
            {Object.entries(footerNav).map(([key, links]) => (
              <div key={key}>
                <h3 className="font-bold text-lg mb-4 capitalize">{key}</h3>
                <ul className="space-y-2">
                  {links.map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-900 text-gray-300 py-4">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} IEEE GLOBECOM</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} aria-label={social.label} className="text-gray-400 hover:text-white">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="h-6 w-px bg-primary-700" />
            <div className="flex gap-x-4 text-xs">
              <Link href="#" className="hover:underline">Accessibility</Link>
              <Link href="#" className="hover:underline">Sitemap</Link>
              <Link href="#" className="hover:underline">Contact & Support</Link>
              <Link href="#" className="hover:underline">Home</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* IEEE Copyright Bar */}
      <div className="bg-gray-100 text-gray-600 text-xs py-3">
        <div className="container-wide text-center md:text-left">
          <p>&copy; Copyright {currentYear} IEEE – All rights reserved. A public charity, IEEE is the world&rsquo;s largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
        </div>
      </div>
    </footer>
  );
}
