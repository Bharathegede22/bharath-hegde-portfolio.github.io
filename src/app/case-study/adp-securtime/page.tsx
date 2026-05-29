'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Users, Shield, Layers, Calendar, CheckCircle2, FileText, ArrowRight, Check } from 'lucide-react';

export default function SecurTimeCaseStudy() {
  const [activeTab, setActiveTab] = useState<'employee' | 'manager' | 'admin'>('employee');
  const [punchStatus, setPunchStatus] = useState<'out' | 'in'>('out');
  const [punchTime, setPunchTime] = useState<string | null>(null);
  const [approvedList, setApprovedList] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);

  // For Interactive Mockup states
  const handlePunch = () => {
    const timeString = new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    if (punchStatus === 'out') {
      setPunchStatus('in');
      setPunchTime(timeString);
    } else {
      setPunchStatus('out');
      setPunchTime(null);
    }
  };

  const toggleApproval = (name: string) => {
    if (approvedList.includes(name)) {
      setApprovedList(approvedList.filter(n => n !== name));
    } else {
      setApprovedList([...approvedList, name]);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  const timesheets = [
    { name: 'Amit Sharma', role: 'Software Engineer', hours: '40.5 hrs', overtime: '2.5 hrs' },
    { name: 'Sneha Patel', role: 'Senior Analyst', hours: '38.0 hrs', overtime: '0 hrs' },
    { name: 'Vikram Singh', role: 'UX Designer', hours: '45.0 hrs', overtime: '5.0 hrs' }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#0c0f16] dark:bg-[#090a0f] dark:text-[#f0f2f5] pt-36 pb-24 grid-bg relative">
      
      {/* Case Study Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-8 relative z-10">
        <div className="bg-gradient-to-r from-[#0a1d37] to-[#16355c] rounded-[32px] p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider font-mono">
              ADP India Product Case Study
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading leading-tight uppercase">
              Redesigning: Your Time<br />From the Ground Up
            </h1>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl">
              ADP - SecurTime Redesign: How we simplified complex enterprise time & attendance tracking workflows for over 1.2 million active users.
            </p>

            {/* Metadata board */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/15">
              <div>
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest">My Role</h4>
                <p className="text-sm font-semibold mt-1">Lead UX Designer</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Client</h4>
                <p className="text-sm font-semibold mt-1">ADP India</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Duration</h4>
                <p className="text-sm font-semibold mt-1">Apr 2023 - Present</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Deliverables</h4>
                <p className="text-sm font-semibold mt-1">Figma Design System, Tokens, Accessibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Problem Statement */}
      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block">
              Context & Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground dark:text-[#f0f2f5] uppercase">
              A Tale of Complex Workforce Metrics
            </h2>
            <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
              SaaS workforce management tools are often plagued by legacy systems, cluttered interfaces, and high cognitive load. 
              <br /><br />
              ADP SecurTime needed a modernization strategy to address user errors, slow task completion times, and fragmented desktop/mobile experiences.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl border border-border p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-foreground dark:text-[#f0f2f5] uppercase">Legacy Tech Debt</h4>
              <p className="text-xs text-muted font-light leading-relaxed">
                Transitioning C++ and outdated web views to a future-ready react framework.
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-border p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-foreground dark:text-[#f0f2f5] uppercase">Information Overload</h4>
              <p className="text-xs text-muted font-light leading-relaxed">
                Admins and Managers were overwhelmed with too many options on-screen.
              </p>
            </div>
            <div className="bg-background rounded-2xl border border-border p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-foreground dark:text-[#f0f2f5] uppercase">Handoff Friction</h4>
              <p className="text-xs text-muted font-light leading-relaxed">
                Aligning design deliverables with sprint execution rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users / Personas */}
      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            Target Users
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground dark:text-[#f0f2f5] uppercase">
            Understanding User Personas
          </h2>
          <p className="text-sm sm:text-base text-muted font-light mt-2">
            The redesign simplifies interfaces custom-tailored to three specific user directories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background rounded-3xl border border-border p-8 shadow-sm space-y-4 hover:border-primary/20 transition-all duration-300">
            <span className="text-3xl select-none">👤</span>
            <h3 className="text-lg font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Employee</h3>
            <p className="text-xs text-muted leading-relaxed font-light">
              Needs immediate punch-in/out, leave applications, and clear schedules on mobile.
            </p>
          </div>
          <div className="bg-background rounded-3xl border border-border p-8 shadow-sm space-y-4 hover:border-primary/20 transition-all duration-300">
            <span className="text-3xl select-none">👥</span>
            <h3 className="text-lg font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Manager</h3>
            <p className="text-xs text-muted leading-relaxed font-light">
              Requires timesheet approvals, overtime monitoring, shift scheduling, and reporting tools.
            </p>
          </div>
          <div className="bg-background rounded-3xl border border-border p-8 shadow-sm space-y-4 hover:border-primary/20 transition-all duration-300">
            <span className="text-3xl select-none">⚙️</span>
            <h3 className="text-lg font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Admin & HR</h3>
            <p className="text-xs text-muted leading-relaxed font-light">
              Configures pay rules, policies, role Permission configurations, compliance logs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Systematic Approach */}
      <section className="max-w-7xl mx-auto px-6 mb-14 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            Design Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground dark:text-[#f0f2f5] uppercase">
            Our Systematic Approach
          </h2>
          <p className="text-sm sm:text-base text-muted font-light mt-2">
            How we moved from user interviews to launching programmatic token variables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {[
            { step: '01', title: 'Discovery & Empathy', desc: 'Interviews with 45+ users across HR and manager levels, persona mapping.' },
            { step: '02', title: 'Refinement of IA', desc: 'Simplifying the main menu hierarchy and optimizing task flow maps.' },
            { step: '03', title: 'High-Fidelity UI', desc: 'Creating reusable components using standard atomic design patterns.' },
            { step: '04', title: 'Usability Testing', desc: 'Running moderated tasks, checking error rates and task times.' },
            { step: '05', title: 'Design Token System', desc: 'Translating style guide variables into programmatic JSON tokens.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between p-6 rounded-2xl bg-background border border-border/80 shadow-sm hover:border-primary/20 transition-all duration-300 min-h-[180px]">
              <span className="text-xl font-bold font-mono text-primary/80 block mb-3">{item.step}</span>
              <div>
                <h4 className="text-sm font-extrabold text-foreground dark:text-[#f0f2f5] mb-1">{item.title}</h4>
                <p className="text-[11px] text-muted leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Red Persona Cards Breakdown - MATCHING 100% SECTION FROM SCREENSHOT */}
      <section className="max-w-7xl mx-auto px-6 mb-14 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            Digital Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground dark:text-[#f0f2f5] uppercase">
            Designing the Digital Experience
          </h2>
          <p className="text-sm sm:text-base text-muted font-light mt-2">
            A detailed breakdown of how each persona's key goals were achieved through the new design system.
          </p>
        </div>

        <div className="space-y-12">
          {/* Card 1: Employee Persona */}
          <div className="bg-background rounded-3xl border border-border shadow-md overflow-hidden">
            <div className="bg-[#a82424] text-white px-8 py-4 font-heading font-extrabold text-xs tracking-wider uppercase select-none">
              01 / Employee Persona
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Fast Check-in/out</h4>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Single-tap punch design that reduces logging time to &lt;1 second, auto-matching shift rules.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Leave Application</h4>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Clean request form with instant manager routing and real-time accrual balances.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Shift Schedule</h4>
                <p className="text-xs text-muted leading-relaxed font-light">
                  A calendar visualization of upcoming shifts, breaks, and holiday details.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Manager Persona */}
          <div className="bg-background rounded-3xl border border-border shadow-md overflow-hidden">
            <div className="bg-[#a82424] text-white px-8 py-4 font-heading font-extrabold text-xs tracking-wider uppercase select-none">
              02 / Manager Persona
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Timesheet Approvals</h4>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Inline checkbox table to review and approve bulk records rapidly, reducing friction.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Overtime Monitoring</h4>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Automated analytics highlighting OT outliers to prevent budget leaks and compliance violations.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Shift Scheduling</h4>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Drag-and-drop team calendar that syncs directly with employee notifications.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Admin & HR Persona */}
          <div className="bg-background rounded-3xl border border-border shadow-md overflow-hidden">
            <div className="bg-[#a82424] text-white px-8 py-4 font-heading font-extrabold text-xs tracking-wider uppercase select-none">
              03 / Admin & HR Persona
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Pay Rules Configuration</h4>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Dynamic rule builder replacing legacy script configurations and script-writing steps.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Compliance Reporting</h4>
                <p className="text-xs text-muted leading-relaxed font-light">
                  One-click export for labor law audits and payroll compliance records.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-foreground dark:text-[#f0f2f5] uppercase">Role Permission Controls</h4>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Granular permission settings to manage data visibility across enterprise hierarchy tiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive UI Mockups / Sandbox - MATCHING 100% SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-14 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            Case Studies Sandbox
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground dark:text-[#f0f2f5] uppercase">
            Interactive UI Mockups
          </h2>
          <p className="text-sm sm:text-base text-muted font-light mt-2">
            Switch tabs below to interact with the redesigned Employee, Manager, and Admin sandbox dashboards.
          </p>
        </div>

        {/* Tab triggers */}
        <div className="flex border-b border-border mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('employee')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 cursor-pointer ${
              activeTab === 'employee'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted hover:text-foreground'
            }`}
          >
            Employee view
          </button>
          <button
            onClick={() => setActiveTab('manager')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 cursor-pointer ${
              activeTab === 'manager'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted hover:text-foreground'
            }`}
          >
            Manager view
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 cursor-pointer ${
              activeTab === 'admin'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted hover:text-foreground'
            }`}
          >
            Admin View
          </button>
        </div>

        {/* Browser Mockup Frame */}
        <div className="w-full bg-[#12131b] text-white rounded-[32px] overflow-hidden border border-border shadow-2xl">
          {/* Browser header chrome */}
          <div className="px-6 py-4 bg-[#1a1b26] border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fa5252]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#fcc419]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#40c057]" />
              <span className="text-[10px] text-white/30 font-mono ml-4 select-none">securtime.adp.com</span>
            </div>
            <div className="w-16 h-1.5 rounded-full bg-white/10" />
          </div>

          {/* Browser Workspace */}
          <div className="p-6 sm:p-8 min-h-[360px] flex flex-col justify-between">
            {activeTab === 'employee' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest text-[#a82424] uppercase block">SecurTime Web</span>
                    <h3 className="text-xl font-bold">Employee Time Tracker</h3>
                  </div>
                  <span className="text-xs font-mono text-white/50">{new Date().toDateString()}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Quick Shift Summary */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[9px] font-bold text-white/40 uppercase">Assigned Shift</span>
                    <h4 className="text-sm font-bold">General Shift (GS)</h4>
                    <p className="text-[10px] text-white/60 font-mono">09:00 AM - 06:00 PM</p>
                  </div>
                  
                  {/* Hours tracker */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-[9px] font-bold text-white/40 uppercase">Logged Hours</span>
                    <h4 className="text-sm font-bold">38.5 / 40.0 hrs</h4>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="bg-[#a82424] h-full w-[96%]" />
                    </div>
                  </div>

                  {/* Quick Punch Control */}
                  <div className="p-5 rounded-2xl bg-[#a82424]/10 border border-[#a82424]/20 flex flex-col justify-between min-h-[120px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-[#fa5252] uppercase">Punch Desk</span>
                      {punchStatus === 'in' && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <p className="text-xs font-bold">{punchStatus === 'in' ? '🔴 IN SHIFT' : '⚪ OUT OF SHIFT'}</p>
                        {punchTime && <p className="text-[9px] text-white/50 font-mono mt-0.5">Start: {punchTime}</p>}
                      </div>
                      <button
                        onClick={handlePunch}
                        className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm ${
                          punchStatus === 'in'
                            ? 'bg-red-600 hover:bg-red-700 text-white'
                            : 'bg-white hover:bg-white/90 text-black'
                        }`}
                      >
                        {punchStatus === 'in' ? 'Punch Out' : 'Punch In'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'manager' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest text-[#a82424] uppercase block">SecurTime Manager</span>
                    <h3 className="text-xl font-bold">Timesheet Approvals Queue</h3>
                  </div>
                  <span className="text-xs font-mono text-white/50">{timesheets.length - approvedList.length} Pending Records</span>
                </div>

                <div className="space-y-3">
                  {timesheets.map((sheet, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                      <div>
                        <h4 className="font-bold">{sheet.name}</h4>
                        <p className="text-[10px] text-white/50">{sheet.role} • <span className="font-mono">{sheet.hours} Logged</span></p>
                      </div>
                      <div className="flex items-center gap-3">
                        {sheet.overtime !== '0' && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500 text-[9px] font-bold">
                            OT: {sheet.overtime}
                          </span>
                        )}
                        <button
                          onClick={() => toggleApproval(sheet.name)}
                          className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                            approvedList.includes(sheet.name)
                              ? 'bg-emerald-500 text-white'
                              : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                          }`}
                        >
                          {approvedList.includes(sheet.name) ? 'Approved ✓' : 'Approve'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'admin' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <span className="text-[9px] font-bold tracking-widest text-[#a82424] uppercase block">SecurTime Admin</span>
                    <h3 className="text-xl font-bold">Compliance Pay Rules Config</h3>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[9px] font-bold">Audit Standard</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { rule: 'Double Overtime Policy', desc: 'Applies double pay rate for hours worked exceeding 12 hours in a single shift.', active: true },
                    { rule: 'Late Punch Grace Period', desc: 'Allows a 15-minute grace period before marking employees as late.', active: true },
                    { rule: 'Rest Break Deductions', desc: 'Automatically deducts 30 minutes for shifts exceeding 6 hours.', active: false },
                    { rule: 'Night Shift Differential', desc: 'Applies a 15% rate multiplier for hours logged between 10:00 PM and 6:00 AM.', active: true }
                  ].map((ruleItem, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between gap-4">
                      <div>
                        <h4 className="text-xs font-bold">{ruleItem.rule}</h4>
                        <p className="text-[10px] text-white/50 mt-1 font-light leading-relaxed">{ruleItem.desc}</p>
                      </div>
                      <div className={`w-8 h-5 rounded-full flex items-center p-0.5 shrink-0 transition-colors ${ruleItem.active ? 'bg-emerald-500 justify-end' : 'bg-white/10 justify-start'}`}>
                        <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Browser footer branding */}
            <div className="flex items-center justify-between text-[9px] text-white/30 border-t border-white/5 pt-4 mt-6">
              <span>ADP SecurTime Enterprise Design Core</span>
              <span>Proprietary and Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-[#40c057] text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-fade-in z-50">
          <Check className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Timesheet Approved Successfully</span>
        </div>
      )}

    </div>
  );
}
