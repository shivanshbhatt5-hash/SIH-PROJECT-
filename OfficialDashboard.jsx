import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Search, 
  Filter, 
  Eye, 
  Award, 
  FileCheck, 
  Building2, 
  Users, 
  CheckSquare, 
  ChevronRight,
  Flame,
  Droplets,
  Zap,
  Leaf
} from 'lucide-react';
import { AUTHORITIES, PERMISSIONS_MASTER } from '../data/mockData';

export default function OfficialDashboard({
  applications,
  selectedAuthority,
  setSelectedAuthority,
  onOpenReviewModal,
  onOpenCertificateModal
}) {
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const authorityIcons = {
    MIDC: <Building className="w-4 h-4 text-indigo-400" />,
    "Fire Dept": <Flame className="w-4 h-4 text-rose-400" />,
    "Water Board": <Droplets className="w-4 h-4 text-cyan-400" />,
    "Pollution Board": <Leaf className="w-4 h-4 text-emerald-400" />,
    "Electricity Board": <Zap className="w-4 h-4 text-yellow-400" />
  };

  // Filter applications by authority and status and search
  const filteredApps = applications.filter(app => {
    const matchesAuth = selectedAuthority === 'ALL' || app.authority === selectedAuthority;
    const matchesStatus = statusFilter === 'ALL' || app.status === statusFilter;
    const matchesSearch = app.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.permissionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAuth && matchesStatus && matchesSearch;
  });

  // Calculate statistics for government view
  const totalAppsCount = applications.length;
  const pendingScrutiny = applications.filter(a => a.status === 'IN_REVIEW').length;
  const actionRaised = applications.filter(a => a.status === 'ACTION_REQUIRED').length;
  const approvedTotal = applications.filter(a => a.status === 'APPROVED').length;
  const slaCompliance = Math.round((approvedTotal / (approvedTotal + pendingScrutiny || 1)) * 100);

  const currentAuthDetail = selectedAuthority !== 'ALL' ? AUTHORITIES[selectedAuthority.replace(' ', '_')] : null;

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      
      {/* Official Department Banner */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-emerald-500/20 relative overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-950/30 to-slate-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Department Scrutiny & Approval Portal
              </span>
              <span className="text-xs text-slate-400 font-mono">Role: Statutory Clearance Officer</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight">
              {selectedAuthority === 'ALL' 
                ? 'Single Window Inter-Departmental Workbench' 
                : (AUTHORITIES[selectedAuthority.replace(' ', '_')]?.name || selectedAuthority)}
            </h1>

            <p className="text-xs text-slate-300 max-w-2xl">
              Inspect submitted industrial architectural plans, verify safety & environmental compliance, issue statutory NOCs, or request applicant clarifications under legal SLA deadlines.
            </p>
          </div>

          {/* Department SLA Metric Badge */}
          <div className="glass-card rounded-xl p-4 border border-emerald-500/30 min-w-[240px] bg-slate-900/80 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block uppercase">Department SLA Rate</span>
              <span className="text-2xl font-bold text-emerald-400 font-mono">{slaCompliance}%</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Average Clearance: 12.4 Days</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Total Submitted Applications</span>
            <span className="text-2xl font-extrabold text-white font-mono mt-1 block">{filteredApps.length}</span>
            <span className="text-[11px] text-slate-400 mt-1 block">In Current Authority Queue</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Building2 className="w-5 h-5" />
          </div>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Pending Scrutiny</span>
            <span className="text-2xl font-extrabold text-indigo-400 font-mono mt-1 block">{pendingScrutiny}</span>
            <span className="text-[11px] text-indigo-300 mt-1 block">Action Required by Officer</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Queries Awaiting Response</span>
            <span className="text-2xl font-extrabold text-rose-400 font-mono mt-1 block">{actionRaised}</span>
            <span className="text-[11px] text-rose-300 mt-1 block">Clarifications Requested</span>
          </div>
          <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <AlertCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Statutory NOCs Issued</span>
            <span className="text-2xl font-extrabold text-emerald-400 font-mono mt-1 block">{approvedTotal}</span>
            <span className="text-[11px] text-emerald-300 mt-1 block">Certificates Granted</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filters & Queue Table */}
      <div className="space-y-4">
        
        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by project name, ID, or permission..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-input text-xs rounded-xl pl-10 pr-4 py-2.5"
            />
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {['ALL', 'IN_REVIEW', 'ACTION_REQUIRED', 'APPROVED'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  statusFilter === st
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {st === 'ALL' ? 'All Applications' : st.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Queue Applications Table */}
        <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950/80 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 font-mono">App ID & Date</th>
                  <th className="py-3.5 px-4">Industrialist & Project</th>
                  <th className="py-3.5 px-4">Permission Title</th>
                  <th className="py-3.5 px-4">Authority</th>
                  <th className="py-3.5 px-4">SLA Deadline</th>
                  <th className="py-3.5 px-4 text-center">Status</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredApps.length > 0 ? (
                  filteredApps.map((app) => {
                    const permMaster = PERMISSIONS_MASTER.find(p => p.id === app.permissionId);

                    return (
                      <tr key={app.id} className="hover:bg-slate-800/40 transition-colors">
                        
                        {/* App ID & Submission Date */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="font-bold font-mono text-indigo-300 block">{app.id}</span>
                          <span className="text-[10px] text-slate-400">{app.submissionDate}</span>
                        </td>

                        {/* Project & Industrialist */}
                        <td className="py-4 px-4 max-w-xs">
                          <span className="font-bold text-white block truncate">{app.projectName}</span>
                          <span className="text-[11px] text-slate-400 block truncate">{app.companyName} ({app.applicantName})</span>
                        </td>

                        {/* Permission Title */}
                        <td className="py-4 px-4">
                          <span className="font-semibold text-slate-200 block">{app.permissionTitle}</span>
                          <span className="text-[10px] text-slate-400">{permMaster?.category}</span>
                        </td>

                        {/* Authority Badge */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-[11px] font-medium flex items-center gap-1.5 w-max">
                            {authorityIcons[app.authority]}
                            <span>{app.authority}</span>
                          </span>
                        </td>

                        {/* SLA Clock Target */}
                        <td className="py-4 px-4 whitespace-nowrap font-mono text-slate-300">
                          <div className="flex items-center space-x-1.5">
                            <Clock className="w-3.5 h-3.5 text-amber-400" />
                            <span>{app.slaTargetDate}</span>
                          </div>
                        </td>

                        {/* Status */}
                        <td className="py-4 px-4 text-center whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                            app.status === 'APPROVED' ? 'badge-approved' :
                            app.status === 'IN_REVIEW' ? 'badge-review' :
                            app.status === 'ACTION_REQUIRED' ? 'badge-action' : 'badge-pending'
                          }`}>
                            {app.status.replace('_', ' ')}
                          </span>
                        </td>

                        {/* Action Buttons */}
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          {app.status === 'APPROVED' ? (
                            <button
                              onClick={() => onOpenCertificateModal(app, permMaster)}
                              className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center space-x-1 ml-auto"
                            >
                              <Award className="w-3.5 h-3.5" />
                              <span>View Issued NOC</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => onOpenReviewModal(app, permMaster)}
                              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center space-x-1 ml-auto"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Scrutinize & Action</span>
                            </button>
                          )}
                        </td>

                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400">
                      No applications found matching the selected filter criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
