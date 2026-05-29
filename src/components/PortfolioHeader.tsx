'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ResumeModal from './ResumeModal';

export default function PortfolioHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial theme state on mount
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    // Global listener to trigger resume from other components
    const handleOpenResume = () => setIsResumeOpen(true);
    window.addEventListener('open-resume', handleOpenResume);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-resume', handleOpenResume);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // height of header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const isCaseStudy = pathname?.startsWith('/case-study/');

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-background/70 backdrop-blur-md border-b border-border' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link 
            href="/" 
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2.5 font-heading text-lg font-extrabold tracking-wider text-foreground select-none group"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border shrink-0">
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/uploads/profile.png`} 
                alt="Bharath Hegde" 
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span>BHARATH HEGDE</span>
          </Link>

          {!isCaseStudy && (
            <nav className="hidden md:flex items-center gap-8">
              <Link 
                href={pathname === '/' ? '#works' : '/#works'} 
                onClick={(e) => handleScrollTo(e, 'works')}
                className="text-xs font-semibold tracking-wider text-muted hover:text-foreground uppercase transition-colors"
              >
                Works
              </Link>
              <Link 
                href={pathname === '/' ? '#experience' : '/#experience'} 
                onClick={(e) => handleScrollTo(e, 'experience')}
                className="text-xs font-semibold tracking-wider text-muted hover:text-foreground uppercase transition-colors"
              >
                Experience
              </Link>
              <Link 
                href={pathname === '/' ? '#principles' : '/#principles'} 
                onClick={(e) => handleScrollTo(e, 'principles')}
                className="text-xs font-semibold tracking-wider text-muted hover:text-foreground uppercase transition-colors"
              >
                Principles
              </Link>
              <Link 
                href={pathname === '/' ? '#contact' : '/#contact'} 
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="text-xs font-semibold tracking-wider text-muted hover:text-foreground uppercase transition-colors"
              >
                Contact
              </Link>
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="text-xs font-semibold tracking-wider text-muted hover:text-foreground uppercase transition-colors cursor-pointer"
              >
                Resume
              </button>
            </nav>
          )}

          {isCaseStudy && (
            <div className="hidden md:block text-xs font-bold tracking-widest text-primary uppercase select-none">
              Case Study
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-muted-bg/50 transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2"/>
                  <path d="M12 20v2"/>
                  <path d="m4.93 4.93 1.41 1.41"/>
                  <path d="m17.66 17.66 1.41 1.41"/>
                  <path d="M2 12h2"/>
                  <path d="M20 12h2"/>
                  <path d="m6.34 17.66-1.41 1.41"/>
                  <path d="m19.07 4.93-1.41 1.41"/>
                </svg>
              )}
            </button>

            <Link 
              href={pathname === '/' ? '#contact' : '/#contact'}
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-4 py-2 text-xs font-bold tracking-wider text-white bg-primary rounded-full hover:bg-primary-hover transition-colors shadow-sm uppercase"
            >
              Let's Talk
            </Link>

          </div>
        </div>
      </header>

      {/* Sticky Sub-header for Case Studies */}
      {isCaseStudy && (
        <div 
          className={`fixed left-0 right-0 z-40 transition-all duration-300 border-b border-white/10 bg-[#0a1d37] text-white ${
            isScrolled ? 'top-[65px] py-3' : 'top-[80px] py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/60">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-white">ADP - SecurTime Redesign</span>
            </div>
            
            {/* Local Section Navigation Links */}
            <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/70 overflow-x-auto no-scrollbar">
              <a href="#overview" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-red-500 py-1">Overview</a>
              <a href="#process" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-red-500 py-1">5D Process</a>
              <a href="#research" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-red-500 py-1">Research</a>
              <a href="#personas" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-red-500 py-1">Personas</a>
              <a href="#screens" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-red-500 py-1">Screens</a>
              <a href="#decisions" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-red-500 py-1">Decisions</a>
              <a href="#team" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-red-500 py-1">Team</a>
              <a href="#outcomes" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-red-500 py-1">Outcomes</a>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal overlay */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
