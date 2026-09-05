import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  MessageSquare, 
  HelpCircle, 
  FileText, 
  ShieldCheck, 
  Building, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  CornerDownLeft, 
  RefreshCw,
  Maximize2,
  Minimize2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

// --- STATUTORY KNOWLEDGE BASE & AI RESPONSE GENERATOR ---
export function generateAIAnswer(query, context = {}) {
  const q = query.toLowerCase().trim();
  const project = context.project || { name: 'Apex Auto Components Pvt Ltd', plotNumber: 'Plot No. A-42, Chakan Phase II', category: 'Orange' };

  // 1. Greetings & Identity
  if (q.match(/^(hi|hello|hey|namaste|greetings|who are you|what can you do|help)/)) {
    return {
      text: `Hello! I am **MahaClear AI**, your 24/7 Statutory & Industrial Clearance Assistant for Maharashtra.\n\nI can help you with:\n- 🛡️ **8 Major Statutory Permissions** (Building Plan, Fire NOC, Water Connection, Power NOC, etc.)\n- 📁 **Pre-Establishment Documents** (CTE, DISH Factory Plan, Provisional Fire NOC, etc.)\n- ✅ **Post-Establishment Documents** (CTO, Building Stability, Factory License, etc.)\n- 💼 **Industry Categorization** (Red, Orange, Green, White & Sector Norms)\n- 🤖 **7-Stage AI Document Verification** (OCR extraction, validation rules & auto-approval)\n- ⏱️ **RTS Act SLA Timelines & Government Scrutiny Fees**\n\nHow may I assist your factory project today?`,
      suggestions: [
        "What are the 8 Major Permissions?",
        "What documents are needed before factory establishment?",
        "How does AI Document Verification work?",
        "What are the rules for Orange Category industry?"
      ]
    };
  }

  // 2. 8 Major Permissions
  if (q.includes('8 major') || q.includes('major permission') || q.includes('major clearance') || q.includes('core permission')) {
    return {
      text: `The **8 Major Statutory Permissions** required under the Maharashtra Single Window System are:\n\n1. 📐 **Building Plan Sanction** — *MIDC Planning Authority* (14 Days SLA)\n2. 💧 **Industrial Water Connection** — *MIDC Water Board* (10 Days SLA)\n3. 🌊 **Drainage & Effluent Discharge Plan** — *MIDC Infrastructure Cell* (12 Days SLA)\n4. 🚒 **Provisional / Final Fire NOC** — *MIDC Fire Services* (15 Days SLA)\n5. ⚡ **High Tension Power Supply NOC** — *MSEDCL* (10 Days SLA)\n6. 🧪 **CETP Membership Certificate** — *Chakan CETP Operating Co. / MPCB* (7 Days SLA)\n7. 🏗️ **Plinth Level Completion Certificate** — *MIDC Engineering Wing* (7 Days SLA)\n8. 🏛️ **Building Completion & Occupancy (BCC/OC)** — *MIDC Authority* (15 Days SLA)\n\nAll 8 are accessible directly in the first section of the **Industrialist Portal**.`,
      suggestions: [
        "Documents required for Building Plan",
        "How to apply for Fire NOC?",
        "Water Connection approval process",
        "Plinth completion checklist"
      ]
    };
  }

  // 3. Building Plan
  if (q.includes('building plan') || q.includes('cad drawing') || q.includes('sanction order')) {
    return {
      text: `### 📐 Building Plan Approval (Rule 3 & DCR Norms)\n\n**Authority:** MIDC Planning Authority\n**SLA Timeline:** 14 Working Days\n**Statutory Scrutiny Fee:** ₹1.50 per sq.ft of built-up area\n\n**Mandatory Documents Required:**\n- Detailed Architectural CAD Layout & Floor Plans (DWG/DXF + PDF)\n- Structural Stability Certificate from Chartered Structural Engineer\n- Boundary Demarcation & Contour Survey\n- Copy of Allotment Letter & Possession Receipt\n- Soil Bearing Capacity Test Report\n\n💡 **AI Verification Tip:** Ensure your document explicitly specifies your **Plot Number** (\`${project.plotNumber}\`) and total built-up area. Our AI auto-approves building plans with $\ge 90\%$ consistency.`,
      suggestions: [
        "What is Plinth Completion?",
        "How to apply for Building Plan?",
        "What are DCR bye-laws?"
      ]
    };
  }

  // 4. Pre-Establishment Documents
  if (q.includes('pre establishment') || q.includes('pre-establishment') || q.includes('before establishment') || q.includes('before construction') || q.includes('pre industry')) {
    return {
      text: `### 📁 Pre-Establishment Documents (10 Key Approvals)\n\nThese 10 statutory approvals must be obtained **BEFORE breaking ground**:\n\n1. **IEM Part A** — Ministry of Commerce & Industry / Udyog Aadhar\n2. **MSME / Udyam Registration** — Ministry of MSME\n3. **MPCB Consent to Establish (CTE)** — Maharashtra Pollution Control Board\n4. **DISH Factory Plan Approval** — Directorate of Industrial Safety & Health (Rule 3)\n5. **Provisional Fire NOC** — MIDC Fire Services\n6. **PWD Electrical Inspector Approval** — Transformer, Substation & HT Panel drawings\n7. **GST Registration Certificate** — GST Department\n8. **Shops & Establishments Registration** — Department of Labour\n9. **Trade License / Factory Permit** — Local Municipal Body / Gram Panchayat\n10. **Environmental Clearance (EC)** — MoEFCC / SEIAA (Only for EIA Schedule projects)\n\nYou can view and download checklists for all 10 in the **Pre Industry Establishment** section.`,
      suggestions: [
        "What is MPCB CTE?",
        "What is DISH Rule 3?",
        "What documents are needed post-establishment?"
      ]
    };
  }

  // 5. Post-Establishment Documents
  if (q.includes('post establishment') || q.includes('post-establishment') || q.includes('after construction') || q.includes('before operation') || q.includes('post industry')) {
    return {
      text: `### ✅ Post-Establishment Documents (9 Key Clearances)\n\nThese clearances are required **AFTER construction** and **BEFORE starting commercial manufacturing**:\n\n1. **IEM Part B** — Intimation of Commercial Production to MSME\n2. **MPCB Consent to Operate (CTO)** — Validated under Water & Air Acts\n3. **DISH Building Stability Certificate** — From approved Competent Person\n4. **DISH Factory License** — Valid factory operating permit under Factories Act 1948\n5. **CHWTSDF Membership** — Common Hazardous Waste Storage & Disposal Facility\n6. **CETP Membership** — Common Effluent Treatment Plant linkage (if water polluting)\n7. **Final Fire NOC** — On-site physical inspection & fire hydrant trial\n8. **EPFO & ESIC Registration** — Provident Fund and Employee State Insurance compliance\n9. **DG Set Standing Permission** — Permission for diesel generators $\ge 100\\text{ KVA}$\n\nCheck out the **Post Industry Establishment** section for stage-wise compliance.`,
      suggestions: [
        "What is Consent to Operate (CTO)?",
        "How to get DISH Factory License?",
        "What is Final Fire NOC?"
      ]
    };
  }

  // 6. Pollution / MPCB CTE & CTO
  if (q.includes('mpcb') || q.includes('cte') || q.includes('cto') || q.includes('pollution') || q.includes('consent')) {
    return {
      text: `### 🧪 MPCB Pollution Consents (CTE vs CTO)\n\n- **Consent to Establish (CTE):** Required prior to factory civil works. Requires detailed Environmental Management Plan (EMP), ETP/STP design, water balance diagram, and hazardous waste disposal plan.\n- **Consent to Operate (CTO):** Required after construction but before commencing production. Granted only after inspecting that the constructed ETP/STP matches the sanctioned CTE.\n\n**Validity Periods:**\n- Red Category: 5 Years\n- Orange Category: 5 Years\n- Green Category: 10 Years\n- White Category: Exempted (Self-declaration)\n\n⚠️ **Important:** Running commercial production on a CTE alone without a CTO attracts penalties under Water Act Sec 43/44.`,
      suggestions: [
        "Orange Category documents",
        "What is CETP Membership?",
        "What is CHWTSDF membership?"
      ]
    };
  }

  // 7. Fire NOC
  if (q.includes('fire noc') || q.includes('fire safety') || q.includes('fire department')) {
    return {
      text: `### 🚒 Fire Department Clearances\n\n1. **Provisional Fire NOC:** Issued during building plan approval stage based on architectural drawings, driveway turning radius ($\ge 6\\text{m}$), underground water static tank capacity ($> 100,000\\text{L}$), and hydrant placement.\n2. **Final Fire NOC:** Issued after building completion following an actual pressure test of wet risers, automatic sprinklers, smoke alarms, and emergency exit signage.\n\n**Issuing Authority:** MIDC Fire Services / Directorate of Maharashtra Fire Services.\n**SLA Timeline:** 15 Working Days.`,
      suggestions: [
        "What is Provisional Fire NOC?",
        "What is Final Fire NOC?",
        "What is Building Completion Certificate?"
      ]
    };
  }

  // 8. Industry Categories (Red / Orange / Green / White)
  if (q.includes('red category') || q.includes('orange category') || q.includes('green category') || q.includes('white category') || q.includes('category') || q.includes('cpcb')) {
    return {
      text: `### 💼 CPCB Industrial Categorization in Maharashtra\n\n- 🔴 **Red Category (Score $\ge 60$):** High pollution potential (Petrochemicals, Electroplating, Tannery, Heavy Bulk Drugs, Pulp & Paper). Requires Full CTE + CTO with continuous online effluent/emission monitoring (OCEMS) and mandatory Zero Liquid Discharge (ZLD) where applicable.\n- 🟠 **Orange Category (Score $41-59$):** Medium pollution (Automotive components, Pharmaceuticals, Textiles, Food processing). Requires CTE + CTO with ETP/STP and air pollution scrubbing.\n- 🟢 **Green Category (Score $21-40$):** Low pollution (Garments, Electrical assembly, Solar modules). Expedited consent, acknowledgment receipt may suffice at building plan stage.\n- ⚪ **White Category (Score $\le 20$):** Non-polluting (IT & Software, dry warehousing, assembly without chemicals). Exempt from MPCB consent; simple online self-declaration applies.\n\nYour active project (\`${project.name}\`) is registered as **${project.category} Category**.`,
      suggestions: [
        "What documents for Red Category?",
        "What documents for Orange Category?",
        "Tell me about Food / FSSAI rules",
        "Tell me about Pharma Drug License"
      ]
    };
  }

  // 9. AI Document Verification Pipeline
  if (q.includes('ai verification') || q.includes('ocr') || q.includes('verification pipeline') || q.includes('confidence score') || q.includes('how does ai verify')) {
    return {
      text: `### 🤖 7-Stage Autonomous AI Verification Engine\n\nWhen you upload a statutory drawing or permit, the system executes this 7-stage workflow:\n\n1. **Upload & Ingestion:** Accepts PDF, DWG, PNG, or TIFF drawings.\n2. **AI Classification:** Neural classifier labels text into strictly one of **12 statutory types** (\`building_plan\`, \`drainage_plan\`, \`fire_noc\`, \`water_connection\`, \`cetp_membership\`, \`power_noc\`, \`plinth_completion\`, \`bcc_oc\`, \`factory_license\`, \`pcb_consent\`, \`site_plan\`, \`other\`).\n3. **OCR Metadata Extraction:** Extracts 6 standard fields: \`document_number\`, \`issue_date\`, \`expiry_date\`, \`authority_name\`, \`plot_number\`, \`area_sqft\`.\n4. **Field Validation Rules:** Checks date sanity (no future dates, valid validity periods, active certificates).\n5. **Cross-Document Consistency:** Compares extracted Plot No. and Company Name against your Master Application (\`${project.plotNumber}\`, \`${project.name}\`).\n6. **Confidence Scoring:** Aggregates score (0–100%) based on text match quality, complete fields, and consistency.\n7. **Auto-Approve / Flag:** Score $\ge 80\\%$ with 0 critical anomalies = **AUTO-APPROVED ✅**. Score $< 80\\%$ or plot mismatch = **FLAGGED FOR REVIEW ⚠️**.\n\nYou can test this live in the **AI Verification Ops** portal!`,
      suggestions: [
        "What are the 12 document types?",
        "What are the 6 extracted fields?",
        "How is plot mismatch detected?"
      ]
    };
  }

  // 10. Application Status & Project queries
  if (q.includes('status') || q.includes('my application') || q.includes('track') || q.includes('apex auto') || q.includes('plot no')) {
    return {
      text: `### 🏢 Active Unit Profile: ${project.name}\n\n- **Plot Location:** ${project.plotNumber}\n- **Industrial Zone:** Chakan Industrial Area Phase II, Pune\n- **Industrial Sector:** Automotive & High-Precision Components (${project.category} Category)\n- **Registered Built-Up Area:** ${project.builtUpArea || '45,000 sq.ft'}\n\n**Application Status Summary:**\n- 📐 Building Plan Approval: **Approved ✅** (\`MIDC/BP/2026/A42/089\`)\n- 💧 Industrial Water Connection: **In Scrutiny (Day 4/10)**\n- 🚒 Provisional Fire NOC: **Query Raised** by Officer (Awaiting flow rate clarification)\n- ⚡ High Tension Power NOC: **Approved ✅**\n\nYou can track processing timelines in the **Public Transparency Portal** or respond to queries in the **Industrialist Portal**.`,
      suggestions: [
        "How do I respond to the Fire NOC query?",
        "Download Building Plan Certificate",
        "How long until Water connection is approved?"
      ]
    };
  }

  // 11. Fees & SLA
  if (q.includes('fee') || q.includes('cost') || q.includes('price') || q.includes('charges') || q.includes('sla') || q.includes('how long') || q.includes('days')) {
    return {
      text: `### 💰 Statutory Fees & SLA Timeframes (RTS Act Mandated)\n\nUnder the Maharashtra Right to Public Services Act (RTS), statutory authorities must process clearances within fixed SLAs:\n\n| Clearance | Authority | SLA Timeframe | Statutory Fee |\n| :--- | :--- | :--- | :--- |\n| **Building Plan** | MIDC Planning | 14 Working Days | ₹1.50 / sq.ft |\n| **Water Connection** | MIDC Water | 10 Working Days | ₹15,000 security deposit |\n| **Drainage Plan** | MIDC Drainage | 12 Working Days | ₹8,500 scrutiny fee |\n| **Provisional Fire NOC** | Fire Services | 15 Working Days | ₹10 / sq.m built-up |\n| **Power Supply NOC** | MSEDCL | 10 Working Days | Standard HT tariff deposit |\n| **Plinth Completion** | MIDC Works | 7 Working Days | ₹5,000 inspection fee |\n| **Occupancy (BCC/OC)** | MIDC Planning | 15 Working Days | ₹2.00 / sq.ft |\n\nIf an officer exceeds the SLA timeframe, the file auto-escalates to the District Collector / CEO MIDC.`,
      suggestions: [
        "What happens if SLA is missed?",
        "Calculate total fee for 50,000 sq.ft",
        "What is Zero Pendency Index?"
      ]
    };
  }

  // 12. Default Fallback with contextual intelligence
  return {
    text: `I understand you're inquiring about: **"${query}"**.\n\nTo ensure complete compliance under Maharashtra industrial bye-laws:\n1. **For statutory drawings**, verify that your plot number matches \`${project.plotNumber}\` and the CAD layout complies with MIDC DCR standards.\n2. **For environmental permissions**, confirm whether your process requires CTE/CTO under the ${project.category} category.\n3. **For time-critical clearances**, check your file under the **Public Transparency Portal** to monitor officer SLA countdowns.\n\nWould you like me to walk you through any of these specific procedures?`,
    suggestions: [
      "What are the 8 Major Permissions?",
      "Explain Pre vs Post Establishment",
      "How does AI Document Verification work?",
      "Show active application status"
    ]
  };
}

// --- MAIN AI CHATBOT COMPONENT ---
export default function AIChatbot({ project, applications, onNavigatePortal, isOpen, onToggleOpen }) {
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: `👋 Hello! I am **MahaClear AI**, your 24/7 Statutory & Clearance Assistant.\n\nAsk me anything about **8 Major Clearances**, **Pre/Post-Establishment Documents**, **CPCB Industry Norms**, or the **7-Stage AI Document Verification Pipeline**!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        "What are the 8 Major Permissions?",
        "What documents are needed before factory establishment?",
        "How does AI Document Verification work?",
        "What are the rules for Orange Category industry?"
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate AI response delay for natural conversational rhythm
    setTimeout(() => {
      const response = generateAIAnswer(query, { project, applications });
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        suggestions: response.suggestions,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'ai',
        text: `Chat cleared! How can I assist your industrial compliance queries today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          "What are the 8 Major Permissions?",
          "What documents are needed before factory establishment?",
          "How does AI Document Verification work?"
        ]
      }
    ]);
  };

  return (
    <>
      {/* 1. FLOATING CHATBOT LAUNCHER BUTTON (Bottom Right) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
          <button
            onClick={onToggleOpen}
            className="group relative flex items-center space-x-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl shadow-indigo-600/40 hover:shadow-indigo-500/60 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Open MahaClear AI Assistant"
          >
            {/* Pulsing ring indicator */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
            </span>

            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <Bot className="w-5 h-5 text-white animate-pulse" />
            </div>

            <div className="text-left pr-1">
              <span className="text-xs font-black block tracking-tight font-heading leading-tight">MahaClear AI</span>
              <span className="text-[10px] text-indigo-200 block leading-none">Statutory Assistant</span>
            </div>
            
            <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      )}

      {/* 2. CHATBOT WINDOW / DRAWER */}
      {isOpen && (
        <div 
          className={`fixed z-50 transition-all duration-300 ${
            isExpanded 
              ? 'inset-4 sm:inset-10' 
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[460px] h-[640px] max-h-[90vh]'
          } flex flex-col rounded-3xl bg-slate-950/95 border border-indigo-500/40 shadow-2xl backdrop-blur-2xl overflow-hidden`}
        >
          {/* Top Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 border-b border-slate-800 flex items-center justify-between relative overflow-hidden">
            <div className="laser-scanner-active opacity-40"></div>
            
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-extrabold text-sm text-white font-heading tracking-tight">MahaClear AI Assistant</h3>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                    ONLINE
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">Statutory & Clearance Intelligence Core</p>
              </div>
            </div>

            <div className="flex items-center space-x-1 relative z-10">
              <button
                onClick={handleClearChat}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? "Collapse" : "Expand"}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors hidden sm:block"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onToggleOpen}
                title="Close AI Assistant"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-rose-500/20 hover:text-rose-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Context Banner */}
          <div className="px-5 py-2 bg-slate-900/80 border-b border-slate-800/60 flex items-center justify-between text-[11px]">
            <div className="flex items-center space-x-1.5 text-slate-400 truncate">
              <Building className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="truncate">Active Project: <strong className="text-slate-200">{project.name}</strong></span>
            </div>
            <span className="font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30 shrink-0 ml-2">
              {project.plotNumber?.split(',')[0] || 'Plot A-42'}
            </span>
          </div>

          {/* Message Thread Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            {messages.map((m) => (
              <div 
                key={m.id} 
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5 animate-fade-in`}
              >
                <div className="flex items-end space-x-2 max-w-[90%]">
                  {m.sender === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shrink-0 mb-1 ring-1 ring-white/20">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}

                  <div 
                    className={`rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                      m.sender === 'user' 
                        ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-br-none shadow-md' 
                        : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-none shadow-lg'
                    }`}
                  >
                    {/* Render content formatted */}
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
                        className="px-2.5 py-1 rounded-full text-[11px] bg-slate-900 hover:bg-indigo-950 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400 transition-all flex items-center space-x-1"
                      >
                        <span>{s}</span>
                        <ChevronRight className="w-3 h-3 text-indigo-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 animate-fade-in">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shrink-0 ring-1 ring-white/20">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-2xl rounded-bl-none flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[11px] text-slate-400 ml-2 font-mono">Analyzing statutory norms...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Sticky Toolbar */}
          <div className="px-4 py-2 bg-slate-900/70 border-t border-slate-800/80 flex items-center space-x-2 overflow-x-auto scrollbar-none text-[11px]">
            <span className="text-[10px] uppercase font-bold text-slate-500 shrink-0 font-mono">Quick:</span>
            <button
              onClick={() => handleSend("What are the 8 Major Permissions?")}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
            >
              8 Major Approvals
            </button>
            <button
              onClick={() => handleSend("What documents are needed before factory establishment?")}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
            >
              Pre-Establishment Docs
            </button>
            <button
              onClick={() => handleSend("How does AI Document Verification work?")}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
            >
              7-Stage AI Verification
            </button>
            <button
              onClick={() => handleSend("What are the Fire NOC rules for factory setup?")}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 whitespace-nowrap"
            >
              Fire NOC
            </button>
          </div>

          {/* Bottom Chat Input Form */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="p-4 bg-slate-950 border-t border-slate-800 flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about approvals, documents, rules, SLAs or fees..."
              className="flex-1 glass-input rounded-xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isTyping}
              className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center space-x-1"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
