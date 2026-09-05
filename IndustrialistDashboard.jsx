import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Download, 
  PlusCircle, 
  Eye, 
  ShieldCheck, 
  Flame, 
  Droplets, 
  Zap, 
  Leaf, 
  Layers, 
  ArrowUpRight,
  Filter,
  Search,
  Sparkles,
  HelpCircle,
  FileCheck2
} from 'lucide-react';
import { PERMISSIONS_MASTER, AUTHORITIES } from '../data/mockData';

export default function IndustrialistDashboard({
  project,
  applications,
  onOpenApplyModal,
  onOpenDetailModal,
  onOpenCertificateModal
}) {
  const [filterAuthority, setFilterAuthority] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Map authority keys to icons
  const authorityIcons = {
    MIDC: <Building className="w-4 h-4 text-indigo-400" />,
    FIRE_DEPT: <Flame className="w-4 h-4 text-rose-400" />,
    WATER_BOARD: <Droplets className="w-4 h-4 text-cyan-400" />,
    POLLUTION_BOARD: <Leaf className="w-4 h-4 text-emerald-400" />,
    ELECTRICITY_BOARD: <Zap className="w-4 h-4 text-yellow-400" />
  };

  // Helper to find application state for a permission for this project
  const getAppForPermission = (permissionId) => {
    return applications.find(
      app => app.permissionId === permissionId && app.projectId === project.id
    );
  };

  // Filter permissions
  const filteredPermissions = PERMISSIONS_MASTER.filter(perm => {
    const matchesAuth = filterAuthority === 'ALL' || perm.authorityKey === filterAuthority;
    const matchesSearch = perm.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          perm.authority.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          perm.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAuth && matchesSearch;
  });

  // Calculate statistics
  const totalPermissions = PERMISSIONS_MASTER.length;
  const projectApps = applications.filter(a => a.projectId === project.id);
  const approvedCount = projectApps.filter(a => a.status === 'APPROVED').length;
  const inReviewCount = projectApps.filter(a => a.status === 'IN_REVIEW').length;
  const actionReqCount = projectApps.filter(a => a.status === 'ACTION_REQUIRED').length;
  const progressPercent = Math.round((approvedCount / totalPermissions) * 100);

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      
      {/* Industrial Unit Overview Banner */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-indigo-500/20 relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Single Window Portal
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {project.id}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight">
              {project.name}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center space-x-1.5">
                <Building className="w-4 h-4 text-indigo-400" />
                <span className="font-medium">{project.companyName}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>{project.landArea}</span>
              </div>
              <div className="flex items-center space-x-1.5 text-amber-300 font-semibold">
                <span>Investment: {project.estimatedCost}</span>
              </div>
            </div>
          </div>

          {/* Overall Clearance Readiness Gauge */}
          <div className="glass-card rounded-xl p-5 border border-slate-700/60 min-w-[280px] bg-slate-900/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-300">Clearance Readiness</span>
              <span className="text-sm font-bold text-indigo-400 font-mono">{progressPercent}% Completed</span>
            </div>
            
            <div className="w-full bg-slate-800 rounded-full h-3 mb-3 overflow-hidden p-0.5 border border-slate-700">
              <div 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-medium pt-1 border-t border-slate-800">
              <div className="bg-emerald-500/10 rounded-lg p-1.5 border border-emerald-500/20 text-emerald-300">
                <div className="font-bold text-sm font-mono">{approvedCount}</div>
                <div className="text-[10px]">Approved</div>
              </div>
              <div className="bg-indigo-500/10 rounded-lg p-1.5 border border-indigo-500/20 text-indigo-300">
                <div className="font-bold text-sm font-mono">{inReviewCount}</div>
                <div className="text-[10px]">In Scrutiny</div>
              </div>
              <div className="bg-amber-500/10 rounded-lg p-1.5 border border-amber-500/20 text-amber-300">
                <div className="font-bold text-sm font-mono">{totalPermissions - projectApps.length}</div>
                <div className="text-[10px]">Not Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Authority Selector */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search permissions by name, authority, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-input text-xs rounded-xl pl-10 pr-4 py-2.5"
          />
        </div>

        {/* Filter Buttons by Authority */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setFilterAuthority('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              filterAuthority === 'ALL'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Authorities (8)
          </button>
          
          {Object.entries(AUTHORITIES).map(([key, auth]) => (
            <button
              key={key}
              onClick={() => setFilterAuthority(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                filterAuthority === key
                  ? 'bg-slate-800 text-white border border-indigo-500/50 shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {authorityIcons[key]}
              <span>{auth.shortName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Required Permissions & Certificates Grid (Exact 8 items) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
            <span>Statutory Clearances & Required Certificates ({filteredPermissions.length})</span>
          </h2>
          <span className="text-xs text-slate-400">
            Click on any permission card to view guidelines or submit applications
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {filteredPermissions.map((perm) => {
            const app = getAppForPermission(perm.id);

            return (
              <div 
                key={perm.id} 
                className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group border border-slate-800 hover:border-indigo-500/40"
              >
                {/* Status Accent Stripe */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    app?.status === 'APPROVED' ? 'bg-emerald-500' :
                    app?.status === 'IN_REVIEW' ? 'bg-indigo-500' :
                    app?.status === 'ACTION_REQUIRED' ? 'bg-rose-500' : 'bg-slate-700'
                  }`} 
                />

                <div>
                  {/* Card Header: Number, Title & Authority */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start space-x-3">
                      <span className="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 font-mono font-bold text-sm flex items-center justify-center border border-slate-700/80 shrink-0">
                        #{perm.id}
                      </span>
                      <div>
                        <h3 className="font-extrabold text-base text-white group-hover:text-indigo-300 transition-colors">
                          {perm.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                            {authorityIcons[perm.authorityKey]}
                            <span>{perm.authority}</span>
                          </span>
                          <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                            <Clock className="w-3 h-3 text-slate-400" /> SLA: {perm.slaDays} Days
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    {app ? (
                      <span className={`px-3 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase flex items-center gap-1 shrink-0 ${
                        app.status === 'APPROVED' ? 'badge-approved' :
                        app.status === 'IN_REVIEW' ? 'badge-review' :
                        app.status === 'ACTION_REQUIRED' ? 'badge-action' : 'badge-pending'
                      }`}>
                        {app.status === 'APPROVED' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                        {app.status === 'IN_REVIEW' && <Clock className="w-3.5 h-3.5 text-indigo-400" />}
                        {app.status === 'ACTION_REQUIRED' && <AlertCircle className="w-3.5 h-3.5 text-rose-400" />}
                        {app.status.replace('_', ' ')}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-medium badge-draft shrink-0">
                        Not Applied
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {perm.description}
                  </p>

                  {/* Prerequisite & Required Documents pill */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800/80">
                      <span className="font-medium text-slate-400">Prerequisite:</span>
                      <span className="text-slate-200 font-semibold">{perm.prerequisite}</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                      <span>Government Fee: <strong className="text-indigo-300 font-mono">{perm.fee}</strong></span>
                      <span>Docs Required: <strong className="text-slate-300">{perm.documents.length} Files</strong></span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  {app ? (
                    <div className="flex items-center space-x-2 w-full">
                      <button
                        onClick={() => onOpenDetailModal(app, perm)}
                        className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center justify-center space-x-1.5 transition-all"
                      >
                        <Eye className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Track Status & Remarks</span>
                      </button>

                      {app.status === 'APPROVED' && (
                        <button
                          onClick={() => onOpenCertificateModal(app, perm)}
                          className="py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 flex items-center space-x-1.5 transition-all"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>View Certificate</span>
                        </button>
                      )}

                      {app.status === 'ACTION_REQUIRED' && (
                        <button
                          onClick={() => onOpenDetailModal(app, perm)}
                          className="py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-md shadow-rose-600/20 flex items-center space-x-1.5 transition-all"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Respond to Query</span>
                        </button>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => onOpenApplyModal(perm)}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all group-hover:shadow-lg group-hover:shadow-indigo-600/40"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>Apply for Clearance Now</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
