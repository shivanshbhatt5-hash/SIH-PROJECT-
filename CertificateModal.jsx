import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ShieldCheck, 
  Award, 
  Building2, 
  CheckCircle2,
  QrCode
} from 'lucide-react';
import { AUTHORITIES } from '../data/mockData';

export default function CertificateModal({
  application,
  permission,
  onClose
}) {
  const handlePrint = () => {
    window.print();
  };

  const authDetails = AUTHORITIES[permission.authorityKey] || {
    name: permission.authority,
    headOfficer: "Chief Statutory Officer"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in no-print-bg">
      <div className="glass-panel border border-slate-700/80 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl bg-slate-900/95 flex flex-col max-h-[95vh]">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70 no-print">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-white text-sm">Official Statutory Certificate Preview</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md flex items-center space-x-2 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Formal Statutory Certificate Document Container */}
        <div className="p-6 md:p-10 overflow-y-auto bg-slate-950 flex-1 flex justify-center">
          
          <div 
            id="printable-certificate" 
            className="w-full max-w-2xl bg-slate-900 text-slate-100 p-8 md:p-12 rounded-xl border-4 border-double border-indigo-500/40 relative shadow-2xl space-y-8 select-none"
          >
            {/* Watermark Emblem background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <Building2 className="w-96 h-96 text-white" />
            </div>

            {/* Certificate Header & Government Header */}
            <div className="text-center space-y-2 border-b-2 border-slate-800 pb-6 relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-indigo-600 p-0.5 shadow-lg mb-2">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-amber-400" />
                </div>
              </div>

              <h3 className="text-xs uppercase tracking-widest font-extrabold text-indigo-400 font-mono">
                Government of Maharashtra • Single Window Clearance System
              </h3>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight">
                {authDetails.name}
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                Statutory Approval & No-Objection Certificate (NOC)
              </p>
            </div>

            {/* Certificate Serial & Validity Bar */}
            <div className="flex flex-wrap items-center justify-between text-xs bg-slate-950/70 p-3 rounded-lg border border-slate-800 font-mono relative z-10">
              <div>
                <span className="text-slate-500 block text-[10px]">CERTIFICATE SERIAL NO:</span>
                <span className="font-bold text-amber-400">{application.issuedCertificateId || 'MIDC/NOC/2026/00891'}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">DATE OF ISSUANCE:</span>
                <span className="font-semibold text-slate-200">{application.issuedDate || '2026-08-25'}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">VALIDITY PERIOD:</span>
                <span className="font-semibold text-emerald-400">PERPETUAL / 5 YEARS</span>
              </div>
            </div>

            {/* Main Certificate Legal Text */}
            <div className="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed relative z-10 font-body">
              <p>
                This is to formally certify that the application submitted by <strong className="text-white font-semibold">{application.companyName}</strong> (Represented by <strong className="text-white">{application.applicantName}</strong>) for the industrial unit project titled:
              </p>

              <div className="p-4 rounded-xl bg-slate-950 border border-indigo-500/20 text-center font-heading font-extrabold text-indigo-200 text-base">
                "{application.projectName}"
              </div>

              <p>
                has been thoroughly scrutinized under the provisions of the Maharashtra Industrial Development Act and relevant statutory safety & environmental guidelines for:
              </p>

              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 font-bold text-center font-mono">
                STATUTORY CLEARANCE GRANTED: {permission.title.toUpperCase()}
              </div>

              <p className="text-xs text-slate-400 text-justify">
                Subject to adherence to the approved architectural drawings, environmental discharge norms, and fire safety protocols filed under Single Window Application reference <span className="font-mono text-slate-200">{application.id}</span>.
              </p>
            </div>

            {/* Bottom Stamps & Signatures */}
            <div className="pt-8 border-t border-slate-800 flex items-end justify-between relative z-10">
              
              {/* QR Verification Seal */}
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-white text-slate-950 shadow-md">
                  <QrCode className="w-12 h-12" />
                </div>
                <div className="text-[10px] text-slate-400">
                  <span className="font-bold text-slate-300 block">Scan to Verify</span>
                  <span>MahaClear Portal Registry</span>
                  <span className="block text-emerald-400 font-mono mt-0.5">✓ Digital Seal Active</span>
                </div>
              </div>

              {/* Digital Signature Block */}
              <div className="text-right space-y-1">
                <div className="inline-block px-3 py-1 rounded bg-indigo-500/10 border border-indigo-500/30 text-[10px] text-indigo-300 font-mono mb-1">
                  DIGITALLY SIGNED & SEALED
                </div>
                <p className="font-extrabold text-sm text-white font-heading">{authDetails.headOfficer}</p>
                <p className="text-[11px] text-slate-400">Chief Clearance Authority</p>
                <p className="text-[10px] text-slate-500 font-mono">{authDetails.name}</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
