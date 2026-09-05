import React, { useState, useRef, useEffect } from 'react';
import { 
  Bell, 
  Calendar, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  RefreshCw, 
  Maximize2, 
  Minimize2, 
  X, 
  ChevronRight, 
  ChevronDown, 
  Download, 
  Smartphone, 
  Mail, 
  Sparkles, 
  Building, 
  FileText, 
  FileCheck, 
  Zap, 
  Flame, 
  Layers, 
  Award 
} from 'lucide-react';

export const INITIAL_EXPIRING_DOCUMENTS = [
  {
    id: "doc-peso-1",
    documentName: "PESO Petroleum & Chemical Storage License",
    code: "PESO-CHEM-2024-891",
    authority: "Petroleum & Explosives Safety Organisation (PESO)",
    authorityShort: "PESO",
    permitCategory: "Hazardous Materials & Solvent Storage",
    issueDate: "2023-09-19",
    expiryDate: "2026-09-19",
    daysLeft: 14,
    status: "CRITICAL_ACTION",
    urgencyColor: "rose",
    penaltyRisk: "Solvent storage prohibited; mandatory suspension of chemical tanker unloading at Chakan site.",
    renewalGraceDays: 0,
    renewalFees: "₹18,500 + statutory inspection surcharge",
    requiredDocs: [
      "Chartered Engineer Static Earthing & Grounding Certificate",
      "Hydrostatic Pressure Test Certificate of Solvent Tanks",
      "Updated Site Hazard Area Classification Blueprint",
      "Licensed Flameproof Electrical Equipment Inventory"
    ]
  },
  {
    id: "doc-cto-2",
    documentName: "MPCB Consent to Operate (CTO - Air & Water Acts)",
    code: "MPCB-CTO-RED-77291",
    authority: "Maharashtra Pollution Control Board (MPCB)",
    authorityShort: "MPCB",
    permitCategory: "Environmental Pollution Control",
    issueDate: "2021-09-24",
    expiryDate: "2026-09-24",
    daysLeft: 19,
    status: "CRITICAL_ACTION",
    urgencyColor: "rose",
    penaltyRisk: "25% penal fee per month under Maharashtra Water & Air Rules; risk of Bank Guarantee invocation (₹10 Lakhs).",
    renewalGraceDays: 15,
    renewalFees: "₹75,000 based on Capital Investment",
    requiredDocs: [
      "Latest ETP/ZLD Effluent Lab Analysis (MoEFCC recognized lab)",
      "Continuous Stack Emission Monitoring System (OCEMS) calibration report",
      "Annual Hazardous Waste Return (Form 4)",
      "Environmental Statement (Form V) submitted to Regional Officer"
    ]
  },
  {
    id: "doc-cetp-3",
    documentName: "CETP Industrial Effluent Discharge Quota Agreement",
    code: "CETP-CHAKAN-Q-4412",
    authority: "Chakan Industrial CETP Co-operative Society & MIDC",
    authorityShort: "CETP / MIDC",
    permitCategory: "Trade Effluent Treatment",
    issueDate: "2025-09-28",
    expiryDate: "2026-09-28",
    daysLeft: 23,
    status: "URGENT_RENEWAL",
    urgencyColor: "amber",
    penaltyRisk: "Effluent line valve lock-out by CETP management; flow diverted to high-rate emergency containment.",
    renewalGraceDays: 7,
    renewalFees: "₹32,000 quarterly operational fee",
    requiredDocs: [
      "Flow meter electromagnetic calibration certificate",
      "Pre-treatment primary settling tank sludge report",
      "CETP membership share certificate copy"
    ]
  },
  {
    id: "doc-fire-4",
    documentName: "Final Fire Safety NOC & Audit Clearance",
    code: "FIRE-NOC-MIDC-88210",
    authority: "Directorate of Fire & Rescue Services, Maharashtra",
    authorityShort: "Fire Dept",
    permitCategory: "Fire & Life Safety",
    issueDate: "2025-10-02",
    expiryDate: "2026-10-02",
    daysLeft: 27,
    status: "URGENT_RENEWAL",
    urgencyColor: "amber",
    penaltyRisk: "Factory occupier notice under Section 3 of Maharashtra Fire Act; insurance fire policy becomes void.",
    renewalGraceDays: 30,
    renewalFees: "₹15,000 statutory inspection charge",
    requiredDocs: [
      "Government Licensed Agency 'Form-B' Certificate of Fire Fighting Installations",
      "Fire Hydrant Ring Main Pressure Test (minimum 3.5 kg/cm² log)",
      "Static Fire Water Tank (2 Lakh Litres) capacity verification",
      "Employee Bi-annual Fire Evacuation Drill Report"
    ]
  },
  {
    id: "doc-dish-5",
    documentName: "Factory Inspectorate Operating License (DISH)",
    code: "DISH-FAC-LIC-9018",
    authority: "Directorate of Industrial Safety & Health (DISH), Maharashtra",
    authorityShort: "DISH",
    permitCategory: "Occupational Safety & Labour",
    issueDate: "2025-10-18",
    expiryDate: "2026-10-18",
    daysLeft: 43,
    status: "UPCOMING_RENEWAL",
    urgencyColor: "indigo",
    penaltyRisk: "Late renewal surcharge of 25% of annual license fee under Maharashtra Factory Rules.",
    renewalGraceDays: 60,
    renewalFees: "₹24,000 based on 150 installed HP and 75 workers",
    requiredDocs: [
      "Form No. 2 Renewal Application duly signed by Occupier & Manager",
      "Factory Structural Stability Certificate by Competent Person",
      "Annual Accident-Free Safety Statement",
      "Treasury Challan receipt for licensing fee"
    ]
  },
  {
    id: "doc-boiler-6",
    documentName: "Steam Boiler Inspection & Fitness Certificate",
    code: "BOILER-MR-2025-339",
    authority: "Directorate of Steam Boilers, Maharashtra",
    authorityShort: "Boilers Dept",
    permitCategory: "Industrial Steam & Pressure Vessels",
    issueDate: "2025-11-05",
    expiryDate: "2026-11-05",
    daysLeft: 61,
    status: "HEALTHY",
    urgencyColor: "emerald",
    penaltyRisk: "Operating uncertified boiler is a cognizable offense under Section 23 of Indian Boilers Act 1923.",
    renewalGraceDays: 0,
    renewalFees: "₹12,000 inspection fee",
    requiredDocs: [
      "Boiler Attendant / First Class Boiler Operation Engineer Certificate",
      "Hydraulic test booking application Form I",
      "Ultrasonic thickness gauging report for steam pipeline"
    ]
  },
  {
    id: "doc-water-7",
    documentName: "MIDC Bulk Water Supply Agreement & Meter Recalibration",
    code: "MIDC-WATER-PUNE-5501",
    authority: "MIDC Water Supply Department",
    authorityShort: "MIDC Water",
    permitCategory: "Industrial Infrastructure",
    issueDate: "2024-11-20",
    expiryDate: "2026-11-20",
    daysLeft: 76,
    status: "HEALTHY",
    urgencyColor: "emerald",
    penaltyRisk: "Penalty water tariff rate at 300% standard commercial tariff if meter remains uncalibrated.",
    renewalGraceDays: 30,
    renewalFees: "₹5,000 calibration fee",
    requiredDocs: [
      "MIDC Authorized Plumber Calibration Certificate",
      "Zero arrears receipt of last 6 water billing cycles"
    ]
  },
  {
    id: "doc-msedcl-8",
    documentName: "MSEDCL High Tension (HT) 22kV Power Sanction & Safety Audit",
    code: "MSEDCL-HT-PUNE-9921",
    authority: "MSEDCL Electrical Inspectorate",
    authorityShort: "MSEDCL",
    permitCategory: "High Tension Power Supply",
    issueDate: "2025-12-15",
    expiryDate: "2026-12-15",
    daysLeft: 101,
    status: "HEALTHY",
    urgencyColor: "emerald",
    penaltyRisk: "Power factor penalty and disconnection notice under CEA Safety Regulations.",
    renewalGraceDays: 30,
    renewalFees: "₹8,500 inspection fee",
    requiredDocs: [
      "Electrical Inspectorate Annual Substation Fitness Certificate",
      "Transformer Oil Breakdown Voltage (BDV) Test Report",
      "Earth Pit Resistance Log Sheet (IS 3043 compliance)"
    ]
  }
];

export function generateRenewalAIAnswer(query, documents = INITIAL_EXPIRING_DOCUMENTS) {
  const q = query.toLowerCase().trim();

  // 1. Expiring soon / overview query
  if (q.includes('expir') || q.includes('soon') || q.includes('upcoming') || q.includes('due') || q.includes('deadline') || q.includes('which')) {
    const critical = documents.filter(d => d.daysLeft <= 15);
    const urgent = documents.filter(d => d.daysLeft > 15 && d.daysLeft <= 30);
    
    return {
      text: `⚠️ **Upcoming Statutory Expiry Alert Summary:**\n\nYou currently have **${critical.length} Critical Documents** (< 15 days) and **${urgent.length} Urgent Documents** (15-30 days) requiring immediate renewal action:\n\n` +
        critical.map(d => `• 🔴 **${d.documentName}** (${d.authorityShort})\n  - **Expires:** ${d.expiryDate} (**${d.daysLeft} Days Left**)\n  - **Penalty Risk:** ${d.penaltyRisk}`).join('\n\n') +
        `\n\n` +
        urgent.map(d => `• 🟡 **${d.documentName}** (${d.authorityShort})\n  - **Expires:** ${d.expiryDate} (**${d.daysLeft} Days Left**)\n  - **Penalty Risk:** ${d.penaltyRisk}`).join('\n\n') +
        `\n\n💡 *Recommendation:* Trigger **Fast-Track Renewal** immediately for PESO and MPCB CTO to prevent statutory show-cause notices.`,
      suggestions: [
        "How do I renew MPCB Consent to Operate?",
        "What documents are needed for Fire NOC renewal?",
        "Remind me on WhatsApp & Email before 15 days",
        "Export statutory renewal calendar (ICS)"
      ]
    };
  }

  // 2. MPCB CTO renewal query
  if (q.includes('cto') || q.includes('mpcb') || q.includes('pollution') || q.includes('consent')) {
    return {
      text: `🌱 **MPCB Consent to Operate (CTO) Renewal Roadmap:**\n\n` +
        `• **Current Status:** Expires on **24 Sep 2026 (19 Days Left)**.\n` +
        `• **Statutory Act:** Water (Prevention & Control of Pollution) Act 1974 and Air Act 1981.\n` +
        `• **Statutory Renewal Window:** Must apply online minimum 60 days before expiry.\n\n` +
        `📋 **Mandatory Documents Checklist:**\n` +
        `1. Latest ETP/ZLD treated effluent test report from MoEFCC/NABL accredited laboratory.\n` +
        `2. Stack emission monitoring & OCEMS continuous telemetry calibration certificate.\n` +
        `3. Form 4 (Annual Return of Hazardous Waste Handling).\n` +
        `4. Form V (Environmental Statement for FY 2025-26).\n` +
        `5. CA Certificate of Capital Investment & turnover.\n\n` +
        `⚠️ **Penalty Warning:** Operating post-expiry attracts 25% penal fee per month and potential invocation of the ₹10 Lakh bank guarantee.`,
      suggestions: [
        "Fast-Track Renewal for MPCB CTO",
        "What are the penalty fees for delayed Fire NOC?",
        "Remind me on WhatsApp & Email before 15 days"
      ]
    };
  }

  // 3. Fire NOC renewal query
  if (q.includes('fire') || q.includes('noc') || q.includes('hydrant')) {
    return {
      text: `🔥 **Fire Safety NOC Renewal Directive (Maharashtra Fire Act):**\n\n` +
        `• **Current Status:** Expires on **02 Oct 2026 (27 Days Left)**.\n` +
        `• **Governing Law:** Maharashtra Fire Prevention and Life Safety Measures Act 2006.\n\n` +
        `📋 **Step-by-Step Renewal Checklist:**\n` +
        `1. Appoint a Maharashtra Government Licensed Agency (Agency A or B category).\n` +
        `2. Obtain the biannual **'Form-B' Certificate** certifying that fire hydrants, smoke alarms, and sprinkler loops are fully operational.\n` +
        `3. Maintain water pressure test log sheet proving 3.5 kg/cm² pressure at highest riser.\n` +
        `4. Confirm 2,00,000 Litre static fire reserve tank is 100% filled.\n` +
        `5. Submit Form-B online via Maharashtra Fire Portal.\n\n` +
        `⚠️ **Legal Consequence:** Without an active Fire NOC, commercial fire insurance claims are automatically rejected, and the Chief Fire Officer may direct power/water isolation.`,
      suggestions: [
        "Fast-Track Renewal for Fire NOC",
        "How do I renew PESO Chemical License?",
        "Download Renewal Calendar (.ics)"
      ]
    };
  }

  // 4. PESO Chemical License query
  if (q.includes('peso') || q.includes('chemical') || q.includes('solvent') || q.includes('petroleum')) {
    return {
      text: `⚡ **PESO Petroleum & Chemical Storage License Renewal:**\n\n` +
        `• **Current Status:** 🔴 **CRITICAL — Expires on 19 Sep 2026 (14 Days Left)**.\n` +
        `• **Authority:** Petroleum and Explosives Safety Organisation (Nagpur / Mumbai Circle).\n\n` +
        `📋 **Mandatory Submission Requirements:**\n` +
        `1. Chartered Engineer Earth Resistance & Grounding Certificate (< 4 Ohms).\n` +
        `2. Hydrostatic tank integrity inspection report by a PESO-recognized Competent Person.\n` +
        `3. Safety distance zoning blueprint confirming 15-meter boundary buffer.\n` +
        `4. Valid calibration certificate of toxic/flammable gas sensors.\n\n` +
        `⚠️ **Immediate Risk:** Unloading of Class A solvents (toluene, acetone, solvents) must be halted immediately upon expiry.`,
      suggestions: [
        "Fast-Track Renewal for PESO License",
        "Remind me on WhatsApp & Email before 15 days",
        "What documents are expiring soon?"
      ]
    };
  }

  // 5. Reminders / notifications query
  if (q.includes('remind') || q.includes('alert') || q.includes('whatsapp') || q.includes('email') || q.includes('sms')) {
    return {
      text: `🔔 **Automated Multi-Channel Reminders Configured:**\n\n` +
        `• 📲 **WhatsApp Alerts:** Enabled for **+91 98230 45612**\n` +
        `• ✉️ **Email Compliance Digest:** Enabled for **v.joshi@apexauto.in**\n` +
        `• ⏰ **Dispatched Notification Frequency:** 60 Days, 30 Days, 15 Days, 7 Days, 3 Days, and 1 Day before statutory expiry.\n` +
        `• 🚨 **Executive Escalation:** Plant Head & Environmental Officer receive automated SMS 7 days before any critical statutory expiry.\n\n` +
        `✅ You can test your live alert dispatch anytime in the **Alert Reminders Tab**!`,
      suggestions: [
        "Send a test WhatsApp reminder now",
        "Export statutory renewal calendar (ICS)",
        "Which documents are expiring soon?"
      ]
    };
  }

  // 6. Calendar / iCal export query
  if (q.includes('calendar') || q.includes('ical') || q.includes('ics') || q.includes('download') || q.includes('schedule')) {
    return {
      text: `📅 **Statutory Renewal Calendar Export:**\n\n` +
        `You can synchronize all 8 statutory expiry milestones directly to **Google Calendar, Microsoft Outlook, or Apple Calendar**!\n\n` +
        `Each event includes:\n` +
        `• Statutory authority name & license number\n` +
        `• Automatic 15-day and 30-day pre-alarm reminders\n` +
        `• Direct link to Maharashtra single window fast-track renewal\n\n` +
        `Click the **"Export Calendar (.ics)"** button in the Alert Reminders tab to download your schedule.`,
      suggestions: [
        "Download Renewal Calendar (.ics)",
        "Which documents are expiring soon?",
        "How do I renew MPCB Consent to Operate?"
      ]
    };
  }

  // Default answer
  return {
    text: `⏱️ **MahaRenew AI Document Expiry Sentinel:**\n\nI monitor statutory certificates for **Apex Auto Components Pvt Ltd (Plot A-42, Chakan Phase-2)**.\n\n` +
      `• Currently tracking **8 statutory licenses & NOCs**.\n` +
      `• **2 Critical Actions (< 15 days):** PESO Chemical Storage (14d) & MPCB CTO (19d).\n` +
      `• **2 Urgent Actions (15-30 days):** CETP Discharge Quota (23d) & Fire Safety NOC (27d).\n\n` +
      `Ask me for detailed renewal steps, required audit documents, penalty fee calculations, or automated reminder setups!`,
    suggestions: [
      "Which documents are expiring soon?",
      "How do I renew MPCB Consent to Operate?",
      "What documents are needed for Fire NOC renewal?",
      "Remind me on WhatsApp & Email before 15 days"
    ]
  };
}

export function downloadRenewalCalendar(documents) {
  let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//MahaClear//Statutory Renewal Sentinel//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\n";
  documents.forEach(doc => {
    const dClean = doc.expiryDate.replace(/-/g, '');
    icsContent += `BEGIN:VEVENT\nSUMMARY:RENEWAL DEADLINE: ${doc.documentName}\nDESCRIPTION:Statutory validity milestone for ${doc.documentName} issued by ${doc.authority}. Penalty risk: ${doc.penaltyRisk}\nDTSTART:${dClean}T090000Z\nDTEND:${dClean}T100000Z\nBEGIN:VALARM\nTRIGGER:-P15D\nACTION:DISPLAY\nDESCRIPTION:15-Day Statutory Renewal Reminder: ${doc.documentName}\nEND:VALARM\nEND:VEVENT\n`;
  });
  icsContent += "END:VCALENDAR";

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'MahaClear_Statutory_Renewal_Calendar_2026.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function DocuRenewAssistant({ project = {}, applications = [], isOpen, onToggleOpen }) {
  const [documents, setDocuments] = useState(INITIAL_EXPIRING_DOCUMENTS);
  const [activeSubTab, setActiveSubTab] = useState('CHAT'); // 'CHAT', 'RADAR', 'REMINDERS'
  const [radarFilter, setRadarFilter] = useState('ALL');
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [renewModalDoc, setRenewModalDoc] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const [remindersConfig, setRemindersConfig] = useState({
    whatsapp: true,
    email: true,
    sms: true,
    officerEscalation: true,
    phone: '+91 98230 45612',
    emailId: 'v.joshi@apexauto.in'
  });

  const [messages, setMessages] = useState([
    {
      id: 'welcome-renew-1',
      sender: 'ai',
      text: `🚨 **MahaRenew AI — Document Expiry & Renewal Sentinel Active**\n\nI am continuously monitoring all statutory licenses, clearances, and NOCs for **${project.name || 'Apex Auto Components Pvt Ltd'}**.\n\n⚠️ **Action Required:** You have **2 Critical Documents (< 15 days)** and **2 Urgent Documents (< 30 days)** approaching statutory expiry!\n\nAsk me about renewal checklists, statutory deadlines, penalty prevention, or automated WhatsApp reminders.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        "Which documents are expiring soon?",
        "How do I renew MPCB Consent to Operate?",
        "What documents are needed for Fire NOC renewal?",
        "Remind me on WhatsApp & Email before 15 days"
      ]
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && activeSubTab === 'CHAT') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping, activeSubTab]);

  const showToast = (text) => {
    setToastMessage(text);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleSend = (textToSend) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    // Special trigger: Download Calendar
    if (query.toLowerCase().includes('download renewal calendar') || query.toLowerCase().includes('export')) {
      downloadRenewalCalendar(documents);
      showToast("📅 Renewal Calendar (.ics) downloaded successfully!");
    }

    // Special trigger: Fast Track Renewal
    if (query.toLowerCase().includes('fast-track') || query.toLowerCase().includes('fast track')) {
      const match = documents.find(d => query.toLowerCase().includes(d.authorityShort.toLowerCase()) || query.toLowerCase().includes('cto') || query.toLowerCase().includes('peso')) || documents[0];
      setRenewModalDoc(match);
    }

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateRenewalAIAnswer(query, documents);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        suggestions: response.suggestions,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleRenewalSubmit = (e) => {
    e.preventDefault();
    const docId = renewModalDoc.id;
    const trackCode = 'MAHA-RENEW-2026-' + Math.floor(1000 + Math.random() * 9000);

    setDocuments(prev => prev.map(d => {
      if (d.id === docId) {
        return {
          ...d,
          status: 'RENEWAL_SUBMITTED',
          daysLeft: d.daysLeft + 365,
          urgencyColor: 'emerald',
          penaltyRisk: `Renewal Application ${trackCode} under officer scrutiny at ${d.authorityShort}. Interim stay on expiry granted.`
        };
      }
      return d;
    }));

    showToast(`✅ Renewal Submitted for ${renewModalDoc.documentName}! Tracking ID: ${trackCode}`);
    setRenewModalDoc(null);
  };

  const filteredRadarDocs = documents.filter(d => {
    if (radarFilter === 'CRITICAL') return d.daysLeft <= 15;
    if (radarFilter === 'URGENT') return d.daysLeft > 15 && d.daysLeft <= 30;
    if (radarFilter === 'HEALTHY') return d.daysLeft > 30;
    return true;
  });

  const criticalCount = documents.filter(d => d.daysLeft <= 15).length;
  const urgentCount = documents.filter(d => d.daysLeft > 15 && d.daysLeft <= 30).length;

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-56 sm:right-60 z-50 animate-bounce-slow">
          <button
            onClick={onToggleOpen}
            className="group relative flex items-center space-x-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 text-white shadow-2xl shadow-rose-600/40 hover:shadow-rose-500/60 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Open Document Expiry & Renewal Sentinel"
          >
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 border-2 border-slate-950"></span>
            </span>

            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <Bell className="w-5 h-5 text-white animate-pulse" />
            </div>

            <div className="text-left pr-1 hidden sm:block">
              <span className="text-xs font-black block tracking-tight font-heading leading-tight">DocuRenew AI</span>
              <span className="text-[10px] text-amber-200 block leading-none">{criticalCount + urgentCount} Expiring Soon</span>
            </div>

            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 text-rose-300 border border-rose-500/40">
              {criticalCount} Critical
            </span>
          </button>
        </div>
      )}

      {/* Floating Assistant Window */}
      {isOpen && (
        <div 
          className={`fixed z-50 transition-all duration-300 ${
            isExpanded 
              ? 'inset-4 sm:inset-10' 
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[480px] h-[660px] max-h-[92vh]'
          } flex flex-col rounded-3xl bg-slate-950/95 border border-rose-500/40 shadow-2xl backdrop-blur-2xl overflow-hidden`}
        >
          {/* Top Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-slate-900 via-rose-950/60 to-slate-900 border-b border-slate-800 flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 via-rose-600 to-orange-600 flex items-center justify-center shadow-lg shadow-rose-500/30 ring-1 ring-white/20">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-extrabold text-sm text-white font-heading tracking-tight">DocuRenew AI</h3>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-1 animate-pulse"></span>
                    EXPIRY SENTINEL
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Statutory Validity & Renewal Tracker</p>
              </div>
            </div>

            <div className="flex items-center space-x-1 relative z-10">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? "Collapse" : "Expand"}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors hidden sm:block"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onToggleOpen}
                title="Close Assistant"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-rose-500/20 hover:text-rose-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sub-Navigation Tabs Bar */}
          <div className="px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-1 text-xs">
            <button
              onClick={() => setActiveSubTab('CHAT')}
              className={`flex-1 py-1.5 px-2 rounded-xl font-bold flex items-center justify-center space-x-1.5 transition-all ${
                activeSubTab === 'CHAT'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>💬 AI Renewal Chat</span>
            </button>

            <button
              onClick={() => setActiveSubTab('RADAR')}
              className={`flex-1 py-1.5 px-2 rounded-xl font-bold flex items-center justify-center space-x-1.5 transition-all ${
                activeSubTab === 'RADAR'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>📋 Expiry Radar</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-slate-950 text-amber-200">
                {documents.length}
              </span>
            </button>

            <button
              onClick={() => setActiveSubTab('REMINDERS')}
              className={`flex-1 py-1.5 px-2 rounded-xl font-bold flex items-center justify-center space-x-1.5 transition-all ${
                activeSubTab === 'REMINDERS'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>🔔 Alert Settings</span>
            </button>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="p-2.5 bg-emerald-950 text-emerald-200 border-b border-emerald-500/40 text-xs text-center font-semibold animate-fade-in flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 1: AI RENEWAL CHAT & SENTINEL INTEL                                    */}
          {/* ========================================================================= */}
          {activeSubTab === 'CHAT' && (
            <div className="flex-1 flex flex-col min-h-0">
              {/* Urgency Status Banner */}
              <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-[11px]">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
                  <span className="text-slate-300 font-bold">Urgent Attention:</span>
                </div>
                <div className="flex items-center space-x-1.5 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30 font-bold">
                    {criticalCount} Critical (&lt;15d)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30 font-bold">
                    {urgentCount} Urgent (&lt;30d)
                  </span>
                </div>
              </div>

              {/* Message Thread Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
                {messages.map((m) => (
                  <div 
                    key={m.id} 
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5 animate-fade-in`}
                  >
                    <div className="flex items-end space-x-2 max-w-[90%]">
                      {m.sender === 'ai' && (
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center shrink-0 mb-1 ring-1 ring-white/20">
                          <Bell className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}

                      <div 
                        className={`rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                          m.sender === 'user' 
                            ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white rounded-br-none shadow-md' 
                            : 'bg-slate-900/95 border border-slate-800 text-slate-200 rounded-bl-none shadow-lg'
                        }`}
                      >
                        <div className="space-y-2 whitespace-pre-line font-body">
                          {m.text}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-500 font-mono px-1">
                      {m.timestamp}
                    </span>

                    {/* AI Prompt Suggestions */}
                    {m.sender === 'ai' && m.suggestions && m.suggestions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1.5 max-w-[95%]">
                        {m.suggestions.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSend(s)}
                            className="px-2.5 py-1 rounded-full text-[11px] bg-slate-900 hover:bg-rose-950 text-rose-300 border border-rose-500/30 hover:border-rose-400 transition-all flex items-center space-x-1"
                          >
                            <span>{s}</span>
                            <ChevronRight className="w-3 h-3 text-rose-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center space-x-2 animate-fade-in">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center shrink-0 ring-1 ring-white/20">
                      <Bell className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-2xl rounded-bl-none flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400 animate-bounce"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-bounce [animation-delay:0.4s]"></span>
                      <span className="text-[11px] text-slate-400 ml-2 font-mono">Checking statutory renewal registers...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions Sticky Toolbar */}
              <div className="px-4 py-2 bg-slate-900/70 border-t border-slate-800/80 flex items-center space-x-2 overflow-x-auto scrollbar-none text-[11px]">
                <span className="text-[10px] uppercase font-bold text-slate-500 shrink-0 font-mono">Quick:</span>
                <button
                  onClick={() => handleSend("Which documents are expiring soon?")}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
                >
                  Expiring Soon
                </button>
                <button
                  onClick={() => handleSend("How do I renew MPCB Consent to Operate?")}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
                >
                  MPCB CTO
                </button>
                <button
                  onClick={() => handleSend("What documents are needed for Fire NOC renewal?")}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
                >
                  Fire NOC Form-B
                </button>
                <button
                  onClick={() => handleSend("Remind me on WhatsApp & Email before 15 days")}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
                >
                  Set WhatsApp Alert
                </button>
              </div>

              {/* Chat Input Form */}
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="p-4 bg-slate-950 border-t border-slate-800 flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask about renewal deadlines, MPCB CTO, Fire NOC, penalties..."
                  className="flex-1 glass-input rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:ring-2 focus:ring-rose-500"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isTyping}
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs shadow-lg shadow-rose-600/30 transition-all flex items-center space-x-1"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: EXPIRY RADAR & TIMELINE LIST                                      */}
          {/* ========================================================================= */}
          {activeSubTab === 'RADAR' && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              
              {/* Radar Filters Strip */}
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none text-xs">
                  {['ALL', 'CRITICAL', 'URGENT', 'HEALTHY'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setRadarFilter(f)}
                      className={`px-3 py-1 rounded-lg font-bold text-[11px] whitespace-nowrap transition-all ${
                        radarFilter === f
                          ? 'bg-rose-600 text-white shadow-md'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {f === 'ALL' ? 'All (8)' : f === 'CRITICAL' ? `Critical (${criticalCount})` : f === 'URGENT' ? `Urgent (${urgentCount})` : 'Healthy (4)'}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => downloadRenewalCalendar(documents)}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold flex items-center space-x-1 shrink-0 border border-slate-700"
                  title="Export renewal dates to iCal/Outlook"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Calendar .ics</span>
                </button>
              </div>

              {/* Documents Cards List */}
              <div className="space-y-3">
                {filteredRadarDocs.map((doc) => {
                  const isCrit = doc.daysLeft <= 15;
                  const isUrg = doc.daysLeft > 15 && doc.daysLeft <= 30;
                  const borderCol = isCrit ? 'border-rose-500/50 bg-rose-950/10' : isUrg ? 'border-amber-500/40 bg-amber-950/10' : 'border-slate-800 bg-slate-900/60';

                  return (
                    <div
                      key={doc.id}
                      className={`p-4 rounded-2xl border ${borderCol} transition-all space-y-3 shadow-md`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-slate-800 text-slate-300 border border-slate-700">
                              {doc.authorityShort}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {doc.code}
                            </span>
                          </div>
                          <h4 className="text-sm font-extrabold text-white mt-1 leading-snug">
                            {doc.documentName}
                          </h4>
                        </div>

                        {/* Countdown Pill */}
                        <div className="text-right shrink-0">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-black border flex items-center space-x-1 ${
                            isCrit 
                              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' 
                              : isUrg 
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          }`}>
                            <Clock className="w-3.5 h-3.5" />
                            <span>{doc.daysLeft}d left</span>
                          </span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">Exp: {doc.expiryDate}</span>
                        </div>
                      </div>

                      {/* Penalty Risk Notice */}
                      <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/90 text-xs text-slate-300">
                        <span className="text-rose-400 font-bold block mb-0.5 text-[10px] uppercase tracking-wider">
                          Statutory Penalty & Non-Compliance Risk:
                        </span>
                        <p className="leading-snug">{doc.penaltyRisk}</p>
                      </div>

                      {/* Required Documents Summary */}
                      <div className="text-xs text-slate-400">
                        <span className="font-bold text-slate-300 block mb-1">Required for Renewal ({doc.requiredDocs.length} Docs):</span>
                        <ul className="space-y-0.5">
                          {doc.requiredDocs.slice(0, 2).map((rd, i) => (
                            <li key={i} className="flex items-start space-x-1.5">
                              <span className="text-emerald-400 font-black">•</span>
                              <span className="truncate">{rd}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                        <span className="text-[11px] text-slate-400 font-mono">Fee: {doc.renewalFees.split(' ')[0]}</span>

                        <button
                          onClick={() => setRenewModalDoc(doc)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold text-white transition-all shadow-md flex items-center space-x-1 ${
                            isCrit 
                              ? 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 shadow-rose-600/30' 
                              : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500'
                          }`}
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Fast-Track Renewal</span>
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: ALERT REMINDERS & NOTIFICATION SETTINGS                            */}
          {/* ========================================================================= */}
          {activeSubTab === 'REMINDERS' && (
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  Automated Multi-Channel Renewal Reminders
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Configure real-time automated alerts dispatched before statutory deadlines to prevent sudden operational stop-work notices.
                </p>
              </div>

              {/* Channels Toggles */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">WhatsApp Instant Alerts</span>
                      <span className="text-[10px] text-slate-400">Sends alerts 60, 30, 15, 7, and 1 day before expiry</span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={remindersConfig.whatsapp}
                    onChange={(e) => setRemindersConfig({ ...remindersConfig, whatsapp: e.target.checked })}
                    className="w-4 h-4 accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Email Weekly Compliance Digest</span>
                      <span className="text-[10px] text-slate-400">PDF audit summary sent to compliance officers</span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={remindersConfig.email}
                    onChange={(e) => setRemindersConfig({ ...remindersConfig, email: e.target.checked })}
                    className="w-4 h-4 accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Plant Head Escalation Alert</span>
                      <span className="text-[10px] text-slate-400">Auto-escalate to Factory Manager if &lt; 7 days remaining</span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={remindersConfig.officerEscalation}
                    onChange={(e) => setRemindersConfig({ ...remindersConfig, officerEscalation: e.target.checked })}
                    className="w-4 h-4 accent-rose-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Notification Targets */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Notification Recipients:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 uppercase font-bold block">Mobile / WhatsApp:</label>
                    <input
                      type="text"
                      value={remindersConfig.phone}
                      onChange={(e) => setRemindersConfig({ ...remindersConfig, phone: e.target.value })}
                      className="glass-input w-full p-2 rounded-xl text-xs text-white border border-slate-700 bg-slate-950 font-mono"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 uppercase font-bold block">Compliance Email:</label>
                    <input
                      type="email"
                      value={remindersConfig.emailId}
                      onChange={(e) => setRemindersConfig({ ...remindersConfig, emailId: e.target.value })}
                      className="glass-input w-full p-2 rounded-xl text-xs text-white border border-slate-700 bg-slate-950"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => showToast(`📲 Simulated WhatsApp reminder alert dispatched to ${remindersConfig.phone}!`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Send Test WhatsApp Alert Notification</span>
                </button>

                <button
                  onClick={() => {
                    downloadRenewalCalendar(documents);
                    showToast("📅 Renewal calendar exported successfully!");
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>Download iCal / Outlook Renewal Calendar (.ics)</span>
                </button>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* FAST-TRACK RENEWAL APPLICATION MODAL                                      */}
          {/* ========================================================================= */}
          {renewModalDoc && (
            <div className="absolute inset-0 z-50 p-4 bg-slate-950/90 backdrop-blur-md flex items-center justify-center animate-fade-in">
              <div className="glass-panel w-full rounded-2xl border border-rose-500/40 bg-slate-900 p-5 space-y-4 shadow-2xl max-h-[90%] overflow-y-auto">
                <div className="flex items-start justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      Fast-Track Statutory Renewal
                    </span>
                    <h4 className="text-sm font-black text-white mt-1">
                      Renew {renewModalDoc.documentName}
                    </h4>
                    <p className="text-xs text-slate-400">Authority: <strong className="text-slate-200">{renewModalDoc.authority}</strong></p>
                  </div>
                  <button onClick={() => setRenewModalDoc(null)} className="text-slate-400 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleRenewalSubmit} className="space-y-3 text-xs">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-bold block">Current Certificate Reference Number:</label>
                    <input
                      type="text"
                      readOnly
                      value={renewModalDoc.code}
                      className="glass-input w-full p-2 rounded-xl text-xs text-slate-300 border border-slate-800 bg-slate-950 font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300 font-bold block">Applicant Factory / Unit:</label>
                    <input
                      type="text"
                      readOnly
                      value={project.name || 'Apex Auto Components Pvt Ltd'}
                      className="glass-input w-full p-2 rounded-xl text-xs text-slate-300 border border-slate-800 bg-slate-950"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-300 font-bold block">Statutory Renewal Audit Checklist Confirmation:</label>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                      {renewModalDoc.requiredDocs.map((doc, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-300">
                          <input type="checkbox" defaultChecked className="rounded text-emerald-500" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-[11px] text-emerald-200">
                    ⚡ Fast-track renewal instantly issues an Interim Protection Acknowledgment under Maharashtra RTS Act.
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setRenewModalDoc(null)}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 shadow-md"
                    >
                      Submit Renewal Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </div>
      )}
    </>
  );
}
