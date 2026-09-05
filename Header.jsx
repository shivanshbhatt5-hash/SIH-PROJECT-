import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  UserCheck, 
  Building, 
  Bell, 
  Search, 
  Sparkles,
  ChevronDown,
  Layers,
  ArrowRightLeft,
  Compass,
  Globe,
  Cpu,
  Landmark
} from 'lucide-react';
import { AUTHORITIES } from '../data/mockData';

export default function Header({
  persona,
  setPersona,
  activePortal,
  setActivePortal,
  selectedProject,
  setSelectedProject,
  projects,
  selectedAuthority,
  setSelectedAuthority,
  notifications,
  setShowNotifications,
  onOpenAdvisor,
  onOpenRenewSentinel
}) {
  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Platform Branding */}
          <div className="flex items-center space-x-3.5">
            <img
              src="/niyamsetu-logo.jpg"
              alt="NiyamSetu Logo"
              className="w-12 h-12 rounded-xl object-cover ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/20"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = './niyamsetu-logo.jpg';
              }}
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-black text-2xl tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-heading">
                  NiyamSetu
                </span>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                  COMPLIANCE BRIDGE
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium tracking-wide">
                The Bridge Between Your Factory and Full Compliance.
              </p>
            </div>
          </div>

          {/* Unified 5-Layer Portal Sequence Switcher */}
          <div className="hidden md:flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
            {[
              { id: 'gateway', label: 'Portal Hub', icon: Compass, color: 'purple' },
              { id: 'industrialist', label: 'Industrialist', icon: Building, color: 'indigo' },
              { id: 'official', label: 'Government Schemes', icon: Landmark, color: 'emerald' },
              { id: 'transparency', label: 'Transparency', icon: Globe, color: 'cyan' },
              { id: 'ai_operations', label: 'AI Verification', icon: Cpu, color: 'rose' },
            ].map(p => {
              const IconComp = p.icon;
              const currentId = activePortal || persona;
              const isActive = currentId === p.id;
              let activeStyle = 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60';
              if (isActive) {
                if (p.color === 'indigo') activeStyle = 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/40';
                else if (p.color === 'emerald') activeStyle = 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30 border border-emerald-400/40';
                else if (p.color === 'cyan') activeStyle = 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30 border border-cyan-400/40';
                else if (p.color === 'rose') activeStyle = 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-600/30 border border-rose-400/40';
                else if (p.color === 'purple') activeStyle = 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 border border-purple-400/40';
              }

              return (
                <button
                  key={p.id}
                  onClick={() => {
                    if (setActivePortal) setActivePortal(p.id);
                    if (setPersona) setPersona(p.id);
                  }}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${activeStyle}`}
                >
                  <IconComp className="w-3.5 h-3.5 shrink-0" />
                  <span>{p.label}</span>
                  {p.id === 'ai_operations' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Context Switcher depending on Persona */}
          <div className="flex items-center space-x-3">
            {persona === 'industrialist' ? (
              <div className="relative group">
                <select
                  value={selectedProject.id}
                  onChange={(e) => {
                    const p = projects.find(item => item.id === e.target.value);
                    if (p) setSelectedProject(p);
                  }}
                  className="glass-input text-xs rounded-xl px-3.5 py-2 pr-8 appearance-none cursor-pointer focus:ring-2 focus:ring-indigo-500 font-medium text-slate-200 max-w-[220px] truncate"
                >
                  {projects.map((proj) => (
                    <option key={proj.id} value={proj.id} className="bg-slate-900 text-slate-200">
                      🏭 {proj.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            ) : (
              <div className="relative group">
                <select
                  value={selectedAuthority}
                  onChange={(e) => setSelectedAuthority(e.target.value)}
                  className="glass-input text-xs rounded-xl px-3.5 py-2 pr-8 appearance-none cursor-pointer focus:ring-2 focus:ring-emerald-500 font-medium text-emerald-300 border-emerald-500/30 max-w-[220px] truncate"
                >
                  <option value="ALL" className="bg-slate-900 text-slate-200">🏛️ All Authorities (Master Queue)</option>
                  <option value="MIDC" className="bg-slate-900 text-slate-200">🏢 MIDC (Building & Plinth)</option>
                  <option value="Fire Dept" className="bg-slate-900 text-slate-200">🔥 Fire Dept (NOC & Safety)</option>
                  <option value="Water Board" className="bg-slate-900 text-slate-200">💧 Water Board (Bulk Line)</option>
                  <option value="Pollution Board" className="bg-slate-900 text-slate-200">🌱 Pollution Board (CETP CTE)</option>
                  <option value="Electricity Board" className="bg-slate-900 text-slate-200">⚡ Electricity Board (HT Power)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            )}

            {/* Document Expiry & Renewal Sentinel Quick Shortcut */}
            {onOpenRenewSentinel && (
              <button
                onClick={onOpenRenewSentinel}
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/15 to-rose-500/15 hover:from-amber-500/25 hover:to-rose-500/25 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all shadow-sm group"
                title="Document Expiry & Renewal Sentinel"
              >
                <Bell className="w-3.5 h-3.5 text-rose-400 group-hover:rotate-12 transition-transform" />
                <span>Renewals (3)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
              </button>
            )}

            {/* Persona Switch Mobile Toggle */}
            <button
              onClick={() => setPersona(persona === 'industrialist' ? 'official' : 'industrialist')}
              className="md:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
              title="Switch Persona"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>

            {/* Profile Pill */}
            <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-inner ${
                persona === 'industrialist' 
                  ? 'bg-gradient-to-tr from-indigo-500 to-purple-600 ring-2 ring-indigo-500/30' 
                  : 'bg-gradient-to-tr from-emerald-500 to-teal-600 ring-2 ring-emerald-500/30'
              }`}>
                {persona === 'industrialist' ? 'RS' : 'SD'}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-xs font-semibold text-slate-200 leading-tight">
                  {persona === 'industrialist' ? selectedProject.ownerName : 'Er. S. R. Deshmukh'}
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  {persona === 'industrialist' ? selectedProject.companyName : 'Chief Approval Authority'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
