import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileText, 
  Download, 
  Send, 
  UserCheck, 
  Building,
  ShieldCheck,
  Calendar,
  MessageSquare
} from 'lucide-react';

export default function ApplicationDetailModal({
  application,
  permission,
  onClose,
  onOpenCertificateModal,
  onRespondQuery
}) {
  const [queryResponseText, setQueryResponseText] = useState('');
  const [isSubmittingResponse, setIsSubmittingResponse] = useState(false);

  const handleSendResponse = (e) => {
    e.preventDefault();
    if (!queryResponseText.trim()) return;

    setIsSubmittingResponse(true);
    setTimeout(() => {
      onRespondQuery(application.id, queryResponseText);
      setIsSubmittingResponse(false);
      setQueryResponseText('');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel border border-slate-700/80 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl bg-slate-900/95 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {application.authority}
              </span>
              <span className="text-xs text-slate-400 font-mono">App ID: {application.id}</span>
            </div>
            <h2 className="text-lg font-bold text-white font-heading mt-1">
              {application.permissionTitle} - Application Details
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="glass-card rounded-xl p-3 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">Current Status</span>
              <span className={`text-xs font-extrabold uppercase mt-1 inline-block ${
                application.status === 'APPROVED' ? 'text-emerald-400' :
                application.status === 'IN_REVIEW' ? 'text-indigo-400' :
                application.status === 'ACTION_REQUIRED' ? 'text-rose-400' : 'text-amber-400'
              }`}>
                {application.status.replace('_', ' ')}
              </span>
            </div>

            <div className="glass-card rounded-xl p-3 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">Assigned Officer</span>
              <span className="text-xs font-semibold text-slate-200 mt-1 block truncate">
                {application.assignedOfficer}
              </span>
            </div>

            <div className="glass-card rounded-xl p-3 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">Submitted On</span>
              <span className="text-xs font-semibold text-slate-200 mt-1 block font-mono">
                {application.submissionDate}
              </span>
            </div>

            <div className="glass-card rounded-xl p-3 border border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 block">SLA Target Date</span>
              <span className="text-xs font-semibold text-amber-300 mt-1 block font-mono">
                {application.slaTargetDate}
              </span>
            </div>
          </div>

          {/* Department Query Notice Banner (if action required) */}
          {application.status === 'ACTION_REQUIRED' && (
            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-3 animate-fade-in">
              <div className="flex items-center space-x-2 text-rose-300 font-bold text-xs">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>Department Clarification / Query Raised</span>
              </div>
              <p className="text-xs text-rose-200 leading-relaxed bg-rose-900/30 p-3 rounded-lg border border-rose-500/20">
                "{application.queryMessage}"
              </p>

              {/* Response Box */}
              <form onSubmit={handleSendResponse} className="space-y-3 pt-2">
                <textarea
                  rows={2}
                  placeholder="Type your response/clarification to the officer here..."
                  value={queryResponseText}
                  onChange={(e) => setQueryResponseText(e.target.value)}
                  className="w-full glass-input rounded-xl p-3 text-xs text-slate-100"
                />
                <button
                  type="submit"
                  disabled={!queryResponseText.trim() || isSubmittingResponse}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-md flex items-center space-x-2 transition-all disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmittingResponse ? 'Submitting Clarification...' : 'Submit Clarification to Officer'}</span>
                </button>
              </form>
            </div>
          )}

          {/* Official Remarks */}
          {application.remarks && (
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs">
              <span className="font-bold text-indigo-300 block mb-1">Authority Scrutiny Note:</span>
              <p className="text-slate-300 leading-relaxed font-mono text-[11px]">{application.remarks}</p>
            </div>
          )}

          {/* Milestone Timeline */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" /> Statutory Processing Timeline
            </h3>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
              {application.timeline.map((item, idx) => (
                <div key={idx} className="relative flex items-start space-x-3">
                  <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    item.status === 'completed' ? 'bg-emerald-500 text-slate-950 ring-4 ring-slate-900' :
                    item.status === 'active' || item.status === 'action' ? 'bg-indigo-500 text-white ring-4 ring-slate-900 animate-pulse' :
                    'bg-slate-800 text-slate-500 ring-4 ring-slate-900'
                  }`}>
                    {item.status === 'completed' ? '✓' : idx + 1}
                  </div>

                  <div className="glass-card rounded-xl p-3 border border-slate-800 flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-200">{item.step}</span>
                      <span className="text-[11px] text-slate-400 font-mono">{item.date}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attached Files */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-400" /> Submitted Architectural Plans & Documents
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {application.uploadedFiles.map((file, idx) => (
                <div key={idx} className="glass-card rounded-xl p-3 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div className="truncate max-w-[180px]">
                      <p className="text-xs font-semibold text-slate-200 truncate">{file.name}</p>
                      <p className="text-[10px] text-slate-400">{file.type} • {file.size}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono px-2 py-0.5 bg-emerald-500/10 rounded">Verified</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
          >
            Close
          </button>

          {application.status === 'APPROVED' && (
            <button
              onClick={() => onOpenCertificateModal(application, permission)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>View & Print Official Certificate</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
