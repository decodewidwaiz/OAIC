'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Search } from 'lucide-react';
import { navConfig } from '@/data/nav';
import { cn } from '@/lib/cn';
import type { NavItem } from '@/types';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Removed effect that set state synchronously on pathname change, as per React best practices. (Reset should be handled via explicit handlers on navigation.)


  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (item: NavItem): boolean => {
    if (item.href) return pathname === item.href || pathname.startsWith(item.href + '/');
    if (item.children) return item.children.some((child) => child.href && pathname.startsWith(child.href));
    return false;
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Top Utility Bar */}
      <div className="bg-[#08283C] text-white border-b border-[#0C527D]/30 relative z-[60]">
        <div className="container-wide flex justify-between items-center h-10 sm:h-12 md:h-14">
          {/* Left: Quick Links - Horizontally scrollable on mobile */}
          <div className="flex items-center text-[10px] sm:text-[12px] md:text-[13px] font-medium tracking-tight sm:tracking-wide overflow-x-auto no-scrollbar whitespace-nowrap pr-4">
            <Link
              href="https://www.ieee.org"
              className="text-white/80 hover:text-white transition-colors duration-200 py-2 flex-shrink-0"
            >
              IEEE.org
            </Link>
            <span className="mx-2 sm:mx-3 w-px h-3 bg-[#0C527D] flex-shrink-0" aria-hidden="true" />
            <Link
              href="https://www.comsoc.org"
              className="text-white/80 hover:text-white transition-colors duration-200 py-2 flex-shrink-0"
            >
              IEEE ComSoc
            </Link>
            <span className="mx-2 sm:mx-3 w-px h-3 bg-[#0C527D] flex-shrink-0" aria-hidden="true" />
            <Link
              href="https://dl.ieee.org/Xplore/home.jsp"
              className="text-white/80 hover:text-white transition-colors duration-200 py-2 flex-shrink-0"
            >
              IEEE Xplore
            </Link>
            <span className="mx-2 sm:mx-3 w-px h-3 bg-[#0C527D] hidden sm:block flex-shrink-0" aria-hidden="true" />
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors duration-200 py-2 hidden sm:block flex-shrink-0"
            >
              IEEE Standards
            </Link>
            <span className="mx-2 sm:mx-3 w-px h-3 bg-[#0C527D] hidden md:block flex-shrink-0" aria-hidden="true" />
            <Link
              href="#"
              className="text-white/80 hover:text-white transition-colors duration-200 py-2 hidden md:block flex-shrink-0"
            >
              IEEE Spectrum
            </Link>
          </div>

          {/* Right: Logos/More Sites */}
          <div className="flex items-center gap-x-3 sm:gap-x-5 flex-shrink-0">
            <div className="hidden lg:flex items-center gap-x-2 text-[11px] font-medium text-white/60 uppercase tracking-widest mr-2">
              <span>More Sites</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            <div className="flex items-center gap-x-2 sm:gap-x-4">
              <Link
                href="https://www.comsoc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src="/images/sponsors/aiclogo.png"
                  alt="IEEE ComSoc"
                  className="h-4 sm:h-6 md:h-8 w-auto object-contain brightness-0 invert"
                  width={80}
                  height={16}
                />
              </Link>
              <div className="w-px h-3 sm:h-4 bg-[#0C527D]" aria-hidden="true" />
              <Link
                href="https://www.comsoc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src="/images/sponsors/SOA.png"
                  alt="IEEE ComSoc"
                  className="h-4 sm:h-6 md:h-8 w-auto object-contain "
                  width={80}
                  height={16}
                />
              </Link>
              <div className="w-px h-3 sm:h-4 bg-[#0C527D]" aria-hidden="true" />
              <Link
                href="https://www.comsoc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src="/images/sponsors/future_networks.png"
                  alt="IEEE ComSoc"
                  className="h-4 sm:h-6 md:h-8 w-auto object-contain brightness-0 invert"
                  width={80}
                  height={16}
                />
              </Link>
              <div className="w-px h-3 sm:h-4 bg-[#0C527D]" aria-hidden="true" />
              <Link
                href="https://www.comsoc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src="/images/sponsors/innovation_testbed.png"
                  alt="IEEE ComSoc"
                  className="h-8 w-auto object-contain brightness-0 invert"
                  width={80}
                  height={16}
                />
              </Link>

            </div>
          </div>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-primary-950',
          scrolled ? 'bg-primary-950 shadow-lg' : 'bg-primary-50'
        )}
        role="banner"
      >
        <div className="container-wide flex items-center justify-between h-16">
          <div className="flex items-center h-full">
            {/* Search Input on the Left (to match some parts of the image style, or right?)
                Actually, putting Logo on left is standard. Let's keep Logo on left. */}
            <Link href="/" className="flex items-center gap-3 pr-6" aria-label="OAIC 2026 - Home">
              <Image
                src="/images/logo.png"
                alt="OAIC 2026 Logo"
                className="h-10 w-auto object-contain"
                width={160}
                height={40}
                priority
              />
            </Link>

            <div className="h-8 w-px bg-primary-700 mx-2 hidden lg:block" />

            <nav className="hidden lg:flex items-center h-full ml-2" aria-label="Primary navigation">
              {navConfig.map((item, index) => (
                <div key={item.label} className="flex items-center h-full">
                  <div
                    className="relative h-full flex items-center group"
                    onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href || '#'}
                      className={cn(
                        'flex items-center gap-1.5 px-4 h-full text-sm font-semibold transition-all duration-300 relative', scrolled
                        ? isActive(item)
                          ? 'text-white bg-primary-800/50'
                          : 'text-gray-200 hover:text-white hover:bg-primary-800/50'
                        : isActive(item)
                          ? 'text-[#154066]'
                          : 'text-[#154066] hover:text-[#3271a8]'
                      )}
                    >
                      {item.label}
                      {item.children && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />}

                      {/* Animated bottom border */}
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>

                    {item.children && activeDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 min-w-[240px] bg-white border-t-2 border-primary-600 rounded-b-md shadow-xl animate-slide-down overflow-hidden"
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href!}
                            role="menuitem"
                            className={cn(
                              'block px-5 py-3 text-sm transition-colors border-b border-gray-50 last:border-0',
                              pathname === child.href ? 'text-primary-700 bg-primary-50 font-semibold' : 'text-gray-700 hover:bg-primary-50 hover:text-primary-800'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  {index < navConfig.length - 1 && <div className="h-6 w-px bg-primary-700/50 mx-1" />}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <form className="relative hidden md:block group">
              <input
                type="search"
                placeholder="Search"
                className="pl-3 pr-10 py-1.5 w-48 text-sm bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-300 focus:w-64 placeholder:text-gray-500"
              />
              <button type="submit" className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-primary-600 transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </form>
            <button
              className="lg:hidden p-2 rounded-md text-white hover:bg-primary-800 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <div className="fixed inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
        <div className="relative flex flex-col w-full max-w-xs h-full bg-white shadow-xl">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="OAIC 2026 Logo" className="h-10" width={120} height={400} />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-500" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navConfig.map((item) => (
              <MobileNavItem key={item.label} item={item} pathname={pathname} />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

function MobileNavItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const isActive = item.children?.some((c) => c.href && pathname.startsWith(c.href)) || (item.href && pathname.startsWith(item.href));

  if (!item.children) {
    return (
      <Link
        href={item.href!}
        className={cn(
          'block px-3 py-2 rounded-md text-base font-medium',
          isActive ? 'text-primary-700 bg-primary-100' : 'text-gray-700 hover:bg-gray-100'
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium',
          isActive ? 'text-primary-700 bg-primary-100' : 'text-gray-700 hover:bg-gray-100'
        )}
      >
        <span>{item.label}</span>
        <ChevronDown className={cn('w-5 h-5 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="mt-1 ml-4 pl-3 border-l-2 border-gray-200 space-y-1">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href!}
              className={cn(
                'block px-3 py-2 rounded-md text-sm',
                pathname === child.href ? 'text-primary-600' : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
