'use client';

import { X, Printer, Mail, MapPin, Phone } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white print:relative print:z-0">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-background border border-border rounded-[32px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden print:border-none print:shadow-none print:max-h-none print:overflow-visible print:rounded-none">
        
        {/* Modal Controls Header (Hidden in Print) */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-muted-bg/30 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted select-none">
              Interactive Resume
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full border border-border bg-background hover:bg-muted-bg/50 text-foreground text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-border bg-background hover:bg-muted-bg/50 text-foreground flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar print:overflow-visible print:p-0">
          <div className="max-w-3xl mx-auto space-y-8 text-[#0c0f16] dark:text-[#f0f2f5] print:text-black">
            
            {/* Header info */}
            <div className="text-center space-y-3 pb-6 border-b border-border">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading uppercase text-foreground print:text-black">
                BHARATH HEGDE
              </h1>
              <p className="text-sm font-extrabold text-primary dark:text-[#9d8df2] uppercase tracking-wider font-heading print:text-black">
                Lead Product Designer / UX Strategy Leader | Enterprise UX | Design Systems
              </p>
              
              {/* Contact metadata */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted print:text-black/80 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-primary print:text-black" />
                  Bengaluru, India
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-primary print:text-black" />
                  +91-7829262522
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-primary print:text-black" />
                  bharathegde22@gmail.com
                </span>
                <a 
                  href="https://linkedin.com/in/bharathegde/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors print:text-black"
                  aria-label="LinkedIn Profile"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-primary print:text-black">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>linkedin.com/in/bharathegde/</span>
                </a>
              </div>
              
              <div className="pt-2">
                <span className="inline-block px-3 py-1 bg-muted-bg text-muted print:bg-none print:text-black border border-border rounded-full text-xs font-bold uppercase tracking-wider font-mono">
                  13+ yrs Experience | Enterprise UX | Design Systems | Research + Delivery
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-3">
              <h2 className="text-xs font-extrabold tracking-widest text-primary dark:text-[#9d8df2] uppercase border-b border-border/80 pb-2 print:text-black print:border-black">
                Professional Summary
              </h2>
              <p className="text-sm font-light leading-relaxed text-muted print:text-black/90">
                Enterprise UX and product design leader with 13+ years of experience delivering complex, scalable SaaS and workflow products across workforce management, biopharma automation, retail POS, mobility and analytics platforms. Known for owning 0-1 and scale design initiatives as an individual contributor, building design systems, simplifying role-based workflows and connecting research, product analytics and engineering feasibility into high-quality product outcomes.
              </p>
            </div>

            {/* Core Strengths */}
            <div className="space-y-3">
              <h2 className="text-xs font-extrabold tracking-widest text-primary dark:text-[#9d8df2] uppercase border-b border-border/80 pb-2 print:text-black print:border-black">
                Core Strengths
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-muted print:text-black/90 font-light">
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>UX Strategy</li>
                  <li>Enterprise Product Design</li>
                  <li>Design Leadership</li>
                  <li>Role-Based Workflows</li>
                  <li>Information Architecture</li>
                  <li>Interaction Design</li>
                  <li>Research Synthesis</li>
                  <li>Usability Testing</li>
                </ul>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Heuristic Evaluation</li>
                  <li>Design Systems</li>
                  <li>High-Fidelity UI</li>
                  <li>Interactive Prototypes</li>
                  <li>Agile UX</li>
                  <li>Stakeholder Management</li>
                  <li>GenAI Prototyping</li>
                  <li>Pendo / HEART</li>
                </ul>
              </div>
            </div>

            {/* Leadership Impact Highlights */}
            <div className="space-y-3">
              <h2 className="text-xs font-extrabold tracking-widest text-primary dark:text-[#9d8df2] uppercase border-b border-border/80 pb-2 print:text-black print:border-black">
                Leadership Impact Highlights
              </h2>
              <ul className="space-y-2 list-disc list-inside text-xs text-muted print:text-black/90 font-light leading-relaxed">
                <li>Redesigned complex enterprise workflows, improving task completion by 25% and reducing user errors/support tickets by 30%.</li>
                <li>Improved design-development handoff by 20% through standardized components, tokenization and UX documentation practices.</li>
                <li>Established design standards for multi-role enterprise workflows, improving cross-functional alignment by 50%.</li>
                <li>Improved feature adoption by 8% through analytics-informed UX decisions and customer feedback loops.</li>
                <li>Built design systems and reusable patterns across ADP, Merck/BIO4C and ABB platform work, improving consistency and delivery speed.</li>
                <li>Introduced GenAI-driven prototyping through Figma AI and automation tools, improving exploration breadth and making prototyping 60% faster.</li>
              </ul>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <h2 className="text-xs font-extrabold tracking-widest text-primary dark:text-[#9d8df2] uppercase border-b border-border/80 pb-2 print:text-black print:border-black">
                Professional Experience
              </h2>
              
              <div className="space-y-6 divide-y divide-border/60 print:divide-black/20">
                {/* ADP */}
                <div className="space-y-2.5 pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm font-extrabold">
                    <span className="text-foreground print:text-black">Lead UX - Individual Contributor | ADP - SecurTime Redesign, Bengaluru</span>
                    <span className="text-muted print:text-black/80 font-normal font-mono text-xs uppercase">Apr 2023 - Present</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-muted print:text-black/90 font-light leading-relaxed">
                    <li>Lead complete UX lifecycle for a Time & Attendance web product across Employee, Manager, Admin and HR personas.</li>
                    <li>Conduct user interviews, empathy mapping, journey mapping, heuristic evaluations and moderated usability testing to uncover workflow gaps.</li>
                    <li>Design role-based experiences with clear IA, scalable task flows, wireframes, interactive prototypes and high-fidelity UI designs.</li>
                    <li>Modernized a legacy enterprise product into a scalable, future-ready platform supporting global expansion needs.</li>
                    <li>Collaborate with Product, Engineering and business stakeholders in Agile ceremonies, design demos and sprint-level execution.</li>
                    <li>Reduce rework by validating concepts early through low/high fidelity prototypes, usability benchmarks and stakeholder feedback loops.</li>
                    <li>Maintain UX documentation and component usage standards to ensure consistency across complex role-based flows.</li>
                  </ul>
                </div>

                {/* ABB */}
                <div className="space-y-2.5 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm font-extrabold">
                    <span className="text-foreground print:text-black">Principal UX Analyst | ABB, Bengaluru</span>
                    <span className="text-muted print:text-black/80 font-normal font-mono text-xs uppercase">Jun 2022 - Mar 2023</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-muted print:text-black/90 font-light leading-relaxed">
                    <li>Led UX initiatives for Genix platform products including Model Fabric and OLM, improving enterprise workflow clarity.</li>
                    <li>Facilitated stakeholder workshops, persona studies and top-task analysis for biopharma automation products.</li>
                    <li>Standardized UI patterns and documentation to improve platform consistency and design-development alignment.</li>
                  </ul>
                </div>

                {/* Merck */}
                <div className="space-y-2.5 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm font-extrabold">
                    <span className="text-foreground print:text-black">Senior UX Designer | Marlabs, Client: Merck India</span>
                    <span className="text-muted print:text-black/80 font-normal font-mono text-xs uppercase">Nov 2019 - May 2022</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-muted print:text-black/90 font-light leading-relaxed">
                    <li>Owned UX for BIO4C continuum across Orchestrator, CRS, IPB and Smart Mixer as an independent contributor.</li>
                    <li>Built a unified design system across four products and partnered with Product, SMEs and Engineering on execution.</li>
                    <li>Mentored junior designers and contributed to backlog grooming, design reviews and sprint delivery.</li>
                  </ul>
                </div>

                {/* Lowe's */}
                <div className="space-y-2.5 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm font-extrabold">
                    <span className="text-foreground print:text-black">Lead UI/UX Designer & UX Developer | ITC Infotech, Client: Lowe's India</span>
                    <span className="text-muted print:text-black/80 font-normal font-mono text-xs uppercase">Nov 2017 - Oct 2019</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-muted print:text-black/90 font-light leading-relaxed">
                    <li>Designed a modern web-based POS platform migrated from legacy C++ systems, contributing to ~6% revenue growth post-launch.</li>
                    <li>Delivered inventory and sales dashboards plus prototypes using HTML5, CSS3, SASS, Bootstrap, InVision and Zeplin.</li>
                  </ul>
                </div>

                {/* CAST */}
                <div className="space-y-2.5 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm font-extrabold">
                    <span className="text-foreground print:text-black">UI/UX Designer & Developer | CAST Software</span>
                    <span className="text-muted print:text-black/80 font-normal font-mono text-xs uppercase">Aug 2016 - Oct 2017</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-muted print:text-black/90 font-light leading-relaxed">
                    <li>Designed data-intensive dashboards and revamped web experience, improving sign-ups by 50-75% and active users by 60%+.</li>
                  </ul>
                </div>

                {/* Zoomcar */}
                <div className="space-y-2.5 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm font-extrabold">
                    <span className="text-foreground print:text-black">Senior UI/UX Designer & Developer | Zoomcar</span>
                    <span className="text-muted print:text-black/80 font-normal font-mono text-xs uppercase">Oct 2014 - May 2016</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-muted print:text-black/90 font-light leading-relaxed">
                    <li>Redesigned core product flows and developed Home Delivery MVP, tariff UI and website redesign as an individual contributor.</li>
                  </ul>
                </div>

                {/* Launchyard / CodeBele */}
                <div className="space-y-2.5 pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm font-extrabold">
                    <span className="text-foreground print:text-black">UI/UX Designer & Developer / Associate Software Engineer | Launchyard Technologies / Intent Software</span>
                    <span className="text-muted print:text-black/80 font-normal font-mono text-xs uppercase">Feb 2013 - Oct 2014</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-muted print:text-black/90 font-light leading-relaxed">
                    <li>Designed and developed responsive web platforms from scratch in Agile teams.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education, Certifications & Recognition */}
            <div className="space-y-3 pb-8">
              <h2 className="text-xs font-extrabold tracking-widest text-primary dark:text-[#9d8df2] uppercase border-b border-border/80 pb-2 print:text-black print:border-black">
                Education & Certifications
              </h2>
              <ul className="space-y-2 list-disc list-inside text-xs text-muted print:text-black/90 font-light leading-relaxed">
                <li><strong>Product Management Certification</strong> - UpGrad, Nov 2018</li>
                <li><strong>B.Tech, Information Science</strong> - BITM, VTU University, Bellary, 2007 - 2011</li>
                <li><strong>Best Employee Award</strong> - Zoomcar, Lowes, CAST | Sequoia Hackathon participant for 2 consecutive years</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
