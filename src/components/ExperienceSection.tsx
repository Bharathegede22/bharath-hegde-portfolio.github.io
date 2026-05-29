'use client';

import { useState } from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface Position {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  bullets: string[];
  skills: string[];
}

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<string>('adp');

  const experienceData: Position[] = [
    {
      id: 'adp',
      company: 'ADP - SecurTime Redesign',
      role: 'Lead UX Designer',
      duration: 'Apr 2023 - Present',
      location: 'Bengaluru, Karnataka, India • On-site',
      description: 'Own complete UX lifecycle for an enterprise Time & Attendance web product supporting Employee, Manager, Admin, and HR personas.',
      bullets: [
        'Lead complete UX lifecycle for a Time & Attendance web product across Employee, Manager, Admin and HR personas.',
        'Conduct user interviews, empathy mapping, journey mapping, heuristic evaluations and moderated usability testing to uncover workflow gaps.',
        'Design role-based experiences with clear IA, scalable task flows, wireframes, interactive prototypes and high-fidelity UI designs.',
        'Modernized a legacy enterprise product into a scalable, future-ready platform supporting global expansion needs.',
        'Collaborate with Product, Engineering and business stakeholders in Agile ceremonies, design demos and sprint-level execution.',
        'Reduce rework by validating concepts early through low/high fidelity prototypes, usability benchmarks and stakeholder feedback loops.',
        'Maintain UX documentation and component usage standards to ensure consistency across complex role-based flows.'
      ],
      skills: ['User Experience (UX)', 'Figma Design System', 'Time & Attendance', 'Heuristic Evaluation', 'Stakeholder Management', 'Role-Based Workflows']
    },
    {
      id: 'abb',
      company: 'ABB',
      role: 'Principle UX Analyst',
      duration: 'Jun 2022 - Mar 2023',
      location: 'Bengaluru, Karnataka, India • On-site',
      description: 'Led user experience strategy and alignment for ABB industrial automation platforms and Genix IoT grid systems.',
      bullets: [
        'Led UX initiatives for Genix platform products including Model Fabric and OLM, improving enterprise workflow clarity.',
        'Facilitated stakeholder workshops, persona studies and top-task analysis for biopharma automation products.',
        'Standardized UI patterns and documentation to improve platform consistency and design-development alignment.'
      ],
      skills: ['UX Analysis', 'Genix Platform', 'OLM & Model Fabric', 'Biopharma Automation', 'UI Standardization']
    },
    {
      id: 'merck',
      company: 'Merck India',
      role: 'Lead UI/UX Designer',
      duration: 'Nov 2019 - May 2022',
      location: 'Bengaluru, Karnataka, India',
      description: 'Owned user experience for the BIO4C scientific compound analytics software continuum.',
      bullets: [
        'Owned UX for BIO4C continuum across Orchestrator, CRS, IPB and Smart Mixer as an independent contributor.',
        'Built a unified design system across four products and partnered with Product, SMEs and Engineering on execution.',
        'Mentored junior designers and contributed to backlog grooming, design reviews and sprint delivery.'
      ],
      skills: ['BIO4C Continuum', 'Design Systems', 'Usability Mentoring', 'Agile Delivery', 'B2B Healthcare']
    },
    {
      id: 'lowes',
      company: "Lowe's Companies, Inc.",
      role: 'Lead UI/UX Designer & Developer',
      duration: 'Nov 2017 - Oct 2019',
      location: 'Bengaluru, Karnataka, India',
      description: 'Designed Lowe\'s modern digital POS software suite, transitioning from legacy platforms.',
      bullets: [
        'Designed a modern web-based POS platform migrated from legacy C++ systems, contributing to ~6% revenue growth post-launch.',
        'Delivered inventory and sales dashboards plus prototypes using HTML5, CSS3, SASS, Bootstrap, InVision and Zeplin.'
      ],
      skills: ['Web POS Systems', 'HTML5 & CSS3', 'SASS & Bootstrap', 'InVision & Zeplin', 'Retail Commerce']
    },
    {
      id: 'cast',
      company: 'CAST',
      role: 'Senior Web Designer & Developer',
      duration: 'Aug 2016 - Oct 2017',
      location: 'Bengaluru, Karnataka, India',
      description: 'Created web analytics reporting interfaces and dashboards for software performance metrics.',
      bullets: [
        'Designed data-intensive dashboards and revamped web experience, improving sign-ups by 50-75% and active users by 60%+.'
      ],
      skills: ['Data Dashboards', 'Web Revamp', 'Conversion Optimization', 'Responsive Design']
    },
    {
      id: 'zoomcar',
      company: 'Zoomcar',
      role: 'Senior UI/UX Developer & Designer',
      duration: 'Nov 2014 - May 2016',
      location: 'Bengaluru, Karnataka, India',
      description: 'Held two successive roles under Zoomcar: Senior UI/UX Developer & Designer (May 2015 - May 2016) and UI Developer (Nov 2014 - May 2015).',
      bullets: [
        'Redesigned core product flows and developed Home Delivery MVP, tariff UI and website redesign as an individual contributor.',
        'Transitioned product flows from basic UI designs into working frontend web interfaces.'
      ],
      skills: ['Booking Systems', 'MVP Development', 'Tariff UI Design', 'Visual Branding', 'Frontend Development']
    },
    {
      id: 'launchyard',
      company: 'LaunchYard Technologies Pvt. Ltd.',
      role: 'UI Developer & UX Designer',
      duration: 'Oct 2013 - Oct 2014',
      location: 'Bengaluru, Karnataka, India',
      description: 'Designed and developed responsive product prototypes for early-stage startup clients.',
      bullets: [
        'Designed and developed responsive web platforms from scratch in Agile teams.',
        'Gained experience with frontend styling systems and client-side design implementation.'
      ],
      skills: ['Startup Prototyping', 'Agile Teams', 'Frontend Engineering', 'UX Design']
    },
    {
      id: 'codebele',
      company: 'CodeBele',
      role: 'Associate Software Engineer',
      duration: 'Feb 2013 - Aug 2013',
      location: 'Bellary, Karnataka, India',
      description: 'Developed client-side structures, participated in interface code engineering and software deployment tasks.',
      bullets: [
        'Developed client web interfaces using modern standards-compliant styles and HTML/JS frameworks.',
        'Assisted engineering teams with testing, bug fixes, and versioning.'
      ],
      skills: ['Software Engineering', 'JavaScript', 'Frontend Styling', 'Git']
    }
  ];

  const currentJob = experienceData.find((job) => job.id === activeTab) || experienceData[0];

  return (
    <section id="experience" className="py-24 bg-card/50 border-y border-border grid-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-wider text-primary uppercase block mb-3">
            Professional Timeline
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            LinkedIn Experience
          </h2>
          <p className="text-base lg:text-lg text-muted font-light mt-4">
            Over a decade of experience designing and engineering data-intensive dashboards, design systems, and workflow SaaS products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Job Selector List */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-4 lg:pb-0 border-l border-border pl-0 lg:pl-4 max-h-[500px] lg:overflow-y-auto custom-scrollbar pr-2">
            {experienceData.map((job) => (
              <button
                key={job.id}
                onClick={() => setActiveTab(job.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border shrink-0 lg:shrink ${
                  activeTab === job.id
                    ? 'bg-background border-border shadow-md'
                    : 'border-transparent text-muted hover:text-foreground hover:bg-muted-bg/30'
                }`}
                style={{ minWidth: '240px' }}
              >
                <div>
                  <h4 className={`text-sm lg:text-base font-extrabold ${activeTab === job.id ? 'text-primary' : 'text-foreground'}`}>
                    {job.company}
                  </h4>
                  <p className="text-xs text-muted font-medium mt-1">
                    {job.role}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-muted/80 tracking-wider uppercase font-mono hidden lg:inline-block">
                  {job.duration.split(' ')[0]} - {job.duration.split(' ').slice(-1)[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Active Job Details Panel */}
          <div className="lg:col-span-8 bg-background rounded-3xl border border-border p-6 lg:p-10 shadow-sm animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6 mb-6">
              <div>
                <h3 className="text-2xl font-extrabold text-foreground flex items-center gap-2">
                  <span>{currentJob.role}</span>
                  <span className="text-primary font-normal text-lg">@ {currentJob.company}</span>
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {currentJob.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {currentJob.location}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm lg:text-base text-muted font-normal leading-relaxed mb-6 italic">
              "{currentJob.description}"
            </p>

            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">
              Key Contributions & Accomplishments
            </h4>

            <ul className="space-y-3 mb-8">
              {currentJob.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted font-light leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3">
              Skills & Expertise
            </h4>
            
            <div className="flex flex-wrap gap-2">
              {currentJob.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-muted-bg text-muted text-xs font-bold rounded-full border border-border/40 select-none hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
