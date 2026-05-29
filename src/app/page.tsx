'use client';

import { Sparkles, ArrowRight, Mail, ExternalLink, ArrowDown, FileText, CheckCircle2 } from 'lucide-react';
import VenturesCard from '@/components/VenturesCard';
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const ventures = [
    {
      category: 'Redesign and Research',
      title: 'ADP - SecurTime Redesign',
      description: 'Leading the complete UX lifecycle for an enterprise Time & Attendance web product across Employee, Manager, Admin, and HR personas. Modernizing a legacy platform for global expansion, standardizing component usage, and establishing robust design tokens.',
      metadata: 'Lead UX - Individual Contributor | Apr 2023 - Present',
      cardColor: '#0a1d37', // ADP Corporate Blue
      logoText: 'ADP',
      subLogoText: 'Enterprise Workflows & Tokens',
      externalLink: `${basePath}/ADP-SecurTime-Case-Study.html`,
      tag: 'Design System',
      coverImage: `${basePath}/uploads/Screenshot 2026-05-26 at 4.02.18 PM.png`,
      browserUrl: 'securtime.adp.com'
    },
    {
      category: 'Enterprise UX & Industrial IoT · AI Analytics',
      title: 'ABB Genix Platforms',
      description: 'Led UX strategy across ABB Ability™ Genix industrial platform — redesigning OLM 2.0 loss-tracking workflows and designing Model Fabric 2.0 statistical model training interfaces for citizen data scientists and plant engineers.',
      metadata: 'Principal UX Analyst | Jun 2022 - Mar 2023',
      cardColor: '#1a0d1a', // Deep industrial plum
      logoText: 'ABB',
      subLogoText: 'Genix Platforms',
      externalLink: `${basePath}/ABB-Genix-Platforms.html`,
      tag: 'Enterprise UX',
      coverImage: `${basePath}/uploads/olm-cover.jpeg`,
      browserUrl: 'abb-genix.abb.com'
    },
    {
      category: 'Healthcare B2B E-Commerce & Portals',
      title: 'Merck BIO4C Continuum',
      description: 'Owned user experience for the BIO4C scientific software suite across Orchestrator, CRS, IPB, and Smart Mixer. Built a unified design system across four complex products and partnered with SMEs on sprint execution.',
      metadata: 'Senior UX Designer | Nov 2019 - May 2022',
      cardColor: '#004944', // Merck teal green
      logoText: 'Merck',
      subLogoText: 'BIO4C Software Suite',
      externalLink: '#',
      tag: 'E-Commerce UX',
      coverImage: `${basePath}/uploads/049 IPB 50-1000L Fed Batch Full Portal@2x.png`,
      browserUrl: 'bio4c.merckgroup.com'
    },
    {
      category: 'Retail Digital Commerce & UI Engineering',
      title: "Lowe's Web POS Platform",
      description: 'Designed a modern web-based Point of Sale (POS) platform migrated from legacy C++ systems, contributing to a ~6% revenue growth post-launch. Delivered sales dashboards and responsive prototypes.',
      metadata: 'Lead UI/UX Designer & UX Developer | Nov 2017 - Oct 2019',
      cardColor: '#083c6b', // Lowe's corporate blue
      logoText: "Lowe's",
      subLogoText: 'Web POS & Dashboards',
      externalLink: '#',
      tag: 'UI Engineering',
      coverImage: `${basePath}/uploads/lowes_pos_mockup.png`,
      browserUrl: 'pos.lowes.com'
    }
  ];


  const strengths = [
    'UX Strategy & Leadership',
    'Enterprise Product Design',
    'Design Systems & Standards',
    'Role-Based Complex Workflows',
    'Information Architecture',
    'Heuristic Evaluation',
    'Interactive Prototypes',
    'Agile UX Handoff',
    'GenAI Prototyping',
    'Pendo / HEART Analytics'
  ];

  const impactHighlights = [
    {
      stat: '25%',
      label: 'Workflow Completion',
      desc: 'Redesigned complex enterprise workflows, improving task completion by 25% and reducing user errors by 30%.'
    },
    {
      stat: '20%',
      label: 'Handoff Efficiency',
      desc: 'Improved design-development handoff by 20% through standardized components, tokenization, and UX documentation.'
    },
    {
      stat: '50%',
      label: 'Team Alignment',
      desc: 'Established design standards for multi-role workflows, improving cross-functional alignment by 50%.'
    },
    {
      stat: '8%',
      label: 'Feature Adoption',
      desc: 'Improved feature adoption by 8% through analytics-informed UX decisions and customer feedback loops.'
    }
  ];

  const handleOpenResume = () => {
    window.dispatchEvent(new CustomEvent('open-resume'));
  };

  return (
    <div className="relative w-full">
      {/* 1. Hero Section with Dawn-to-Dusk Gradient */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-32 pb-16 bg-gradient-to-b from-[#131726] via-[#f7edd8] to-[#ffffff] dark:from-[#08090d] dark:via-[#1c1822] dark:to-[#090a0f] overflow-hidden">
        {/* Abstract glowing backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] aspect-square rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] aspect-square rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Pill status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-[#1e1333] dark:text-[#faab88] select-none">
                13+ Yrs Experience • Enterprise UX • Design Systems
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[#131726] dark:text-[#f0f2f5] leading-[0.85] font-heading">
              BHARATH<br />HEGDE
            </h1>

            {/* Taglines */}
            <h2 className="text-xl md:text-3xl font-extrabold text-primary dark:text-[#9d8df2] uppercase tracking-wider font-heading pt-2">
              Lead Product Designer • UX Strategy Leader
            </h2>

            <p className="text-base md:text-xl text-muted dark:text-muted max-w-2xl font-light leading-relaxed">
              Enterprise UX leader delivering complex, scalable SaaS and workflow products across workforce management, biopharma automation, retail POS, and mobility platforms.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={handleOpenResume}
                className="px-6 py-3 rounded-full bg-white/25 dark:bg-white/5 border border-border text-foreground text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-muted-bg/50 transition-all backdrop-blur-sm cursor-pointer"
              >
                <span>View Resume</span>
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between text-muted select-none">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
            <span>Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
          <span className="text-xs font-mono">BENGALURU, INDIA</span>
        </div>
      </section>

      {/* 2. Selected Works Section */}
      <section id="works" className="py-12 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-b border-border pb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-2">
                Selected Works
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
                Collaborative Campaigns & Case Studies
              </h2>
            </div>
          </div>

          {/* Ventures Display List */}
          <div className="space-y-4">
            {ventures.map((venture, idx) => (
              <VenturesCard
                key={idx}
                category={venture.category}
                title={venture.title}
                description={venture.description}
                metadata={venture.metadata}
                cardColor={venture.cardColor}
                logoText={venture.logoText}
                subLogoText={venture.subLogoText}
                externalLink={venture.externalLink}
                coverImage={venture.coverImage}
                browserUrl={venture.browserUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership Impact Highlights Section */}
      <section id="impact" className="py-24 bg-muted-bg/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
              Impact & Value
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Leadership Impact Highlights
            </h2>
            <p className="text-base lg:text-lg text-muted font-light mt-4">
              Proven track record of improving workflow efficiency, standardized handoffs, and customer adoption across major enterprise products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-background rounded-3xl border border-border p-6 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div>
                  <span className="text-4xl lg:text-5xl font-extrabold text-primary dark:text-[#9d8df2] block mb-2">
                    {item.stat}
                  </span>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    {item.label}
                  </h4>
                  <p className="text-xs text-muted font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Strengths Section */}
      <section id="principles" className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
              Capabilities
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Core Expertise & Strengths
            </h2>
            <p className="text-base lg:text-lg text-muted font-light mt-4">
              Bridging complex technical capabilities with intuitive visual layouts and modular system thinking.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {strengths.map((strength, idx) => (
              <span
                key={idx}
                className="px-5 py-3 rounded-2xl bg-muted-bg text-muted border border-border text-sm font-bold flex items-center gap-2 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all cursor-default"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {strength}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Experience Timeline Section */}
      <ExperienceSection />

      {/* 6. Footer Transitioning from Gold to Deep Charcoal */}
      <section id="contact" className="relative pt-32 pb-16 bg-gradient-to-b from-[#f7c590] to-[#0c0f16] dark:from-[#2a1d13] dark:to-[#08090c] text-white overflow-hidden">
        {/* Floating golden sculptural vector graphic */}
        <div className="absolute bottom-12 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-24 w-80 h-80 opacity-20 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#fa9e7b] animate-spin" style={{ animationDuration: '40s' }}>
            <path
              d="M100,20 Q120,60 160,60 Q120,80 120,120 Q100,160 80,120 Q80,80 40,60 Q80,60 100,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M100,40 Q115,70 145,70 Q115,85 115,115 Q100,145 85,115 Q85,85 55,70 Q85,70 100,40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="100" cy="100" r="8" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-widest uppercase font-heading text-transparent bg-clip-text bg-gradient-to-r from-white to-[#f7c590]">
                BHARATH HEGDE
              </h2>
              <p className="text-sm font-light text-white/60 leading-relaxed max-w-md">
                A Lead Product Designer and UX Strategy Leader focused on enterprise design systems, role-based workflows, research, and delivery.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/bharathegde/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="mailto:bharathegde22@gmail.com"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#f7c590] mb-4">
                  Experience
                </h4>
                <ul className="space-y-2.5 text-xs text-white/50 font-medium">
                  <li><span className="hover:text-white transition-colors cursor-default">ADP (Lead UX Designer)</span></li>
                  <li><span className="hover:text-white transition-colors cursor-default">ABB (Principle UX Analyst)</span></li>
                  <li><span className="hover:text-white transition-colors cursor-default">Merck India (Lead UI/UX)</span></li>
                  <li><span className="hover:text-white transition-colors cursor-default">Lowe's (Lead UI/UX & Dev)</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#f7c590] mb-4">
                  History
                </h4>
                <ul className="space-y-2.5 text-xs text-white/50 font-medium">
                  <li><span className="hover:text-white transition-colors cursor-default">CAST (Senior Web Designer)</span></li>
                  <li><span className="hover:text-white transition-colors cursor-default">Zoomcar (Senior UI/UX Dev)</span></li>
                  <li><span className="hover:text-white transition-colors cursor-default">LaunchYard (UI Dev & UX)</span></li>
                  <li><span className="hover:text-white transition-colors cursor-default">CodeBele (Software Engineer)</span></li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#f7c590] mb-4">
                  Contact Details
                </h4>
                <ul className="space-y-2.5 text-xs text-white/50 font-medium">
                  <li>
                    <a href="mailto:bharathegde22@gmail.com" className="hover:text-white transition-colors flex items-center gap-1">
                      <span>Email Me</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/bharathegde/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="text-[10px] text-white/40 font-mono tracking-tighter uppercase mt-4">
                    Based in Bengaluru, India
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 font-medium font-mono">
            <span>© {new Date().getFullYear()} BHARATH HEGDE. ALL RIGHTS RESERVED.</span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              BACK TO TOP ↑
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
