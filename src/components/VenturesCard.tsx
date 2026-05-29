import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface VenturesCardProps {
  category: string;
  title: string;
  description: string;
  metadata: string;
  cardColor: string;
  logoText: string;
  subLogoText?: string;
  externalLink?: string;
  coverImage?: string;
  browserUrl?: string;
}

const getYearRange = (meta: string) => {
  const parts = meta.split('|');
  const datePart = parts[parts.length - 1]?.trim() || '';
  const years = datePart.match(/\b\d{4}\b/g) || [];
  const hasPresent = datePart.toLowerCase().includes('present');
  
  if (years.length === 2) {
    return `${years[0]} - ${years[1]}`;
  } else if (years.length === 1) {
    return `${years[0]} - ${hasPresent ? 'PRESENT' : ''}`;
  }
  return datePart.toUpperCase();
};

export default function VenturesCard({
  category,
  title,
  description,
  metadata,
  cardColor,
  logoText,
  externalLink,
  coverImage,
  browserUrl
}: VenturesCardProps) {
  const isExternal = externalLink?.startsWith('http') || false;
  const isHtml = externalLink?.endsWith('.html') || false;
  const yearRange = getYearRange(metadata);
  const roleText = metadata.split('|')[0]?.trim() || '';

  const renderMockup = () => {
    return (
      <div 
        className="w-full flex items-center justify-center p-8 sm:p-12 relative overflow-hidden min-h-[300px] lg:min-h-[420px]"
        style={{ backgroundColor: cardColor }}
      >
        {/* Decorative glassmorphism elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-75 pointer-events-none" />
        <div className="absolute -top-1/4 -right-1/4 w-3/4 aspect-square rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-3/4 aspect-square rounded-full bg-black/5 blur-3xl pointer-events-none" />
        
        {coverImage ? (
          <div className="relative w-full max-w-[420px] aspect-[16/10] bg-white/10 dark:bg-black/35 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden transform -rotate-1 group-hover:rotate-0 group-hover:scale-[1.03] transition-all duration-500">
            {/* Browser Header Bar */}
            <div className="flex items-center gap-1.5 bg-black/30 px-3 py-2 border-b border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
              {browserUrl && (
                <span className="text-[8px] text-white/50 ml-2 font-mono truncate max-w-[200px]">{browserUrl}</span>
              )}
            </div>
            {/* Screenshot Image */}
            <div className="w-full h-[calc(100%-24px)] bg-[#12131a] relative overflow-hidden">
              <img 
                src={coverImage} 
                alt={`${title} mockup`} 
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="text-center text-white font-heading text-4xl font-extrabold uppercase tracking-widest drop-shadow-sm select-none">
            {logoText}
          </div>
        )}
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <div className="p-8 sm:p-10 flex flex-col justify-between bg-[#fafafc] dark:bg-[#11121a]">
        <div className="flex flex-col space-y-4">
          <span className="text-[10px] font-bold tracking-widest text-[#8c94a5] dark:text-[#8890a0] uppercase block">
            CASE STUDY
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight uppercase font-heading leading-tight">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed font-light">
            {description}
          </p>
          
          <div className="text-xs font-bold text-primary dark:text-accent tracking-wider uppercase pt-2">
            {roleText}
          </div>
        </div>

        {externalLink && (
          <div className="pt-8 flex">
            {isExternal ? (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-[10px] sm:text-xs font-bold text-foreground hover:text-emerald-500 dark:hover:text-emerald-400 uppercase tracking-wider group transition-all duration-300">
                <span>View Case Study</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            ) : isHtml ? (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-[10px] sm:text-xs font-bold text-foreground hover:text-emerald-500 dark:hover:text-emerald-400 uppercase tracking-wider group transition-all duration-300">
                <span>View Case Study</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-[10px] sm:text-xs font-bold text-foreground hover:text-emerald-500 dark:hover:text-emerald-400 uppercase tracking-wider group transition-all duration-300">
                <span>View Case Study</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="border border-border/80 dark:border-border/30 rounded-[32px] overflow-hidden bg-card dark:bg-card shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group mb-12">
      {/* Upper Area: Mockup & Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (Mockup Area) */}
        <div className="lg:col-span-8 overflow-hidden">
          {externalLink ? (
            isExternal ? (
              <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                {renderMockup()}
              </a>
            ) : isHtml ? (
              <a href={externalLink} className="block cursor-pointer">
                {renderMockup()}
              </a>
            ) : (
              <Link href={externalLink} className="block cursor-pointer">
                {renderMockup()}
              </Link>
            )
          ) : (
            renderMockup()
          )}
        </div>

        {/* Right Column (Details Sidebar) */}
        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border/80 dark:border-border/30 flex flex-col justify-between">
          {externalLink ? (
            isExternal ? (
              <a href={externalLink} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow cursor-pointer">
                {renderDetails()}
              </a>
            ) : isHtml ? (
              <a href={externalLink} className="flex flex-col flex-grow cursor-pointer">
                {renderDetails()}
              </a>
            ) : (
              <Link href={externalLink} className="flex flex-col flex-grow cursor-pointer">
                {renderDetails()}
              </Link>
            )
          ) : (
            renderDetails()
          )}
        </div>
      </div>

      {/* Bottom Footer Spanning Full Width */}
      <div className="flex items-center justify-between px-8 py-4 border-t border-border/80 dark:border-border/30 bg-[#f6f7fa] dark:bg-[#0e0f16] text-[10px] sm:text-xs font-bold text-[#8c94a5] dark:text-[#8890a0] tracking-widest uppercase select-none">
        <span>{category}</span>
        <span>{yearRange}</span>
      </div>
    </div>
  );
}
