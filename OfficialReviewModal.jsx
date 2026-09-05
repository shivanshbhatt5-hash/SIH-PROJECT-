import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  UserCheck, 
  Send, 
  Award,
  Maximize2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OfficialReviewModal({
  application,
  permission,
  onClose,
  onUpdateAppStatus
}) {
  const [activeTab, setActiveTab] = useState('SCRUTINY'); // SCRUTINY, ACTION
  const [actionType, setActionType] = useState('APPROVE'); // APPROVE, QUERY, INSPECTION, REJECT
  const [officerRemarks, setOfficerRemarks] = useState('');
  const [inspectionDate, setInspectionDate] = useState('2026-09-12');
  const [selectedFilePreview, setSelectedFilePreview] = useState(application.uploadedFiles[0] || null);

  const handleExecuteAction = (e) => {
    e.preventDefault();

    if (actionType === 'APPROVE') {
      // Trigger Confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      const updated = {
        ...application,
        status: 'APPROVED',
        remarks: officerRemarks || `Sanctioned by ${application.assignedOfficer}. Technical scrutiny completed with 100% compliance.`,
        issuedCertificateId: `${application.authority.replace(' ', '')}/NOC/2026/${Math.floor(10000 + Math.random() * 90000)}`,
        issuedDate: new Date().toISOString().split('T')[0],
        timeline: [
          ...application.timeline,
          {
            step: "Statutory Approval & Certificate Grant",
            date: new Date().toLocaleString(),
            status: "completed",
            note: `Clearance NOC Granted under Serial #${application.authority}/NOC/2026.`
          }
        ]
      };
      onUpdateAppStatus(updated);
    } else if (actionType === 'QUERY') {
      const updated = {
        ...application,
        status: 'ACTION_REQUIRED',
        queryMessage: officerRemarks || "Technical clarification requested by officer regarding plant design parameters.",
        timeline: [
          ...application.timeline,
          {
            step: "Clarification Query Raised",
            date: new Date().toLocaleString(),
            status: "action",
            note: officerRemarks
          }
        ]
      };
      onUpdateAppStatus(updated);
    } else if (actionType === 'INSPECTION') {
      const updated = {
        ...application,
        status: 'IN_REVIEW',
        remarks: `Site inspection scheduled for ${inspectionDate}. Inspector assigned.`,
        timeline: [
          ...application.timeline,
          {
            step: `Site Inspection Scheduled (${inspectionDate})`,
            date: new Date().toLocaleString(),
            status: "active",
            note: `Physical audit date confirmed for ${inspectionDate}.`
          }
        ]
      };
      onUpdateAppStatus(updated);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel border border-slate-700/80 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl bg-slate-900/95 flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-emerald-400">{application.authority} Scrutiny Workbench</span>
                <span className="text-xs font-mono text-slate-400">ID: {application.id}</span>
              </div>
              <h2 className="text-lg font-bold text-white font-heading">
                {application.permissionTitle} - {application.projectName}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Workbench Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
          
          {/* Left Panel: Uploaded Documents Viewer (7 cols) */}
          <div className="lg:col-span-7 border-r border-slate-800 p-5 overflow-y-auto space-y-4 bg-slate-950/40">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-400" /> Submitted Architectural Plans & Attachments
              </h3>
              <span className="text-[11px] text-slate-400 font-mono">
                {application.uploadedFiles.length} Documents
              </span>
            </div>

            {/* Document Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {application.uploadedFiles.map((file, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedFilePreview(file)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                    selectedFilePreview?.name === file.name
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[150px]">{file.name}</span>
                </button>
              ))}
            </div>

            {/* Document Preview Box Simulation */}
            {selectedFilePreview && (
              <div className="glass-card rounded-xl p-5 border border-slate-800 space-y-3 bg-slate-900/90 relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{selectedFilePreview.name}</h4>
                    <p className="text-[10px] text-slate-400">{selectedFilePreview.type} • {selectedFilePreview.size} • Uploaded on {selectedFilePreview.date}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                    Checksum Verified
                  </span>
                </div>

                {/* Simulated Viewer Container */}
                <div className="h-64 rounded-lg bg-slate-950 border border-slate-800 p-4 flex flex-col items-center justify-center text-center space-y-3 relative overflow-hidden">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-200">CAD & PDF Vector Drawing Inspector</p>
                    <p className="text-[11px] text-slate-400 max-w-sm mt-1">
                      Architectural blueprint layer rendering ready. High-resolution scale 1:200 vector geometry verified against DCR zoning rules.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-mono">
                    <span>Setbacks: Front 12m | Rear 6m</span>
                    <span>•</span>
                    <span>FSI Clearance: 1.50</span>
                  </div>
                </div>
              </div>
            )}

            {/* Project Quick Overview */}
            <div className="glass-card rounded-xl p-4 border border-slate-800 space-y-2 text-xs">
              <h4 className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">Applicant & Site Details</h4>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div><strong className="text-slate-400">Company:</strong> {application.companyName}</div>
                <div><strong className="text-slate-400">Applicant:</strong> {application.applicantName}</div>
                <div><strong className="text-slate-400">Project:</strong> {application.projectName}</div>
                <div><strong className="text-slate-400">SLA Deadline:</strong> {application.slaTargetDate}</div>
              </div>
            </div>
          </div>

          {/* Right Panel: Official Decision & Action Panel (5 cols) */}
          <div className="lg:col-span-5 p-5 overflow-y-auto space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <UserCheck className="w-4 h-4" /> Statutory Officer Decision Control
              </h3>

              {/* Action Type Selector */}
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActionType('APPROVE')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    actionType === 'APPROVE'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 shadow-md'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  ✓ Approve NOC
                </button>

                <button
                  type="button"
                  onClick={() => setActionType('QUERY')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    actionType === 'QUERY'
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500 shadow-md'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  ? Raise Query
                </button>

                <button
                  type="button"
                  onClick={() => setActionType('INSPECTION')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    actionType === 'INSPECTION'
                      ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500 shadow-md'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  📅 Site Visit
                </button>
              </div>

              {/* Dynamic Action Forms */}
              {actionType === 'APPROVE' && (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-3 text-xs">
                  <div className="flex items-center space-x-2 text-emerald-300 font-bold">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>Grant Statutory Clearance & Generate Digital Certificate</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Approving this application will generate an official digital clearance certificate bearing the department emblem, QR code seal, and digital signature stamp.
                  </p>
                  <div>
                    <label className="block text-slate-400 mb-1">Official Approval Remarks</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Scrutinized and approved in accordance with MIDC Development Control Rules..."
                      value={officerRemarks}
                      onChange={(e) => setOfficerRemarks(e.target.value)}
                      className="w-full glass-input rounded-xl p-3 text-xs text-slate-200"
                    />
                  </div>
                </div>
              )}

              {actionType === 'QUERY' && (
                <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 space-y-3 text-xs">
                  <div className="flex items-center space-x-2 text-rose-300 font-bold">
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    <span>Request Technical Clarifications / Resubmission</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    This will pause the SLA clock and send an instant notification to the industrialist.
                  </p>
                  <div>
                    <label className="block text-slate-400 mb-1">Query / Discrepancy Note</label>
                    <textarea
                      rows={3}
                      placeholder="Specify exact missing documents, structural changes, or flow diagram clarifications required..."
                      value={officerRemarks}
                      onChange={(e) => setOfficerRemarks(e.target.value)}
                      className="w-full glass-input rounded-xl p-3 text-xs text-slate-200"
                    />
                  </div>
                </div>
              )}

              {actionType === 'INSPECTION' && (
                <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 space-y-3 text-xs">
                  <div className="flex items-center space-x-2 text-indigo-300 font-bold">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span>Schedule Physical Site Audit</span>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Select Inspection Date</label>
                    <input
                      type="date"
                      value={inspectionDate}
                      onChange={(e) => setInspectionDate(e.target.value)}
                      className="w-full glass-input rounded-xl p-2.5 text-xs text-slate-200"
                    />
                  </div>
                </div>
              )}

            </div>

            {/* Submit Action Button */}
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={handleExecuteAction}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs shadow-lg flex items-center justify-center space-x-2 transition-all ${
                  actionType === 'APPROVE' 
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-600/30'
                    : actionType === 'QUERY'
                    ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/30'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>
                  {actionType === 'APPROVE' ? 'Sanction & Issue Statutory NOC' :
                   actionType === 'QUERY' ? 'Transmit Query to Industrialist' :
                   'Schedule Site Visit & Log'}
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
