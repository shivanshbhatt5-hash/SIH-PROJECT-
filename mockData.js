export const AUTHORITIES = {
  MIDC: {
    id: "MIDC",
    name: "Maharashtra Industrial Development Corporation (MIDC)",
    shortName: "MIDC",
    color: "#6366f1",
    bgLight: "rgba(99, 102, 241, 0.1)",
    headOfficer: "Er. S. R. Deshmukh (Chief Planner)",
    jurisdiction: "Industrial Estate Zone I & II",
    contact: "support@midc-clearance.gov.in"
  },
  FIRE_DEPT: {
    id: "Fire Dept",
    name: "Directorate of Fire & Rescue Services",
    shortName: "Fire Dept",
    color: "#f43f5e",
    bgLight: "rgba(244, 63, 94, 0.1)",
    headOfficer: "Cmdt. A. V. Kulkarni (Chief Fire Officer)",
    jurisdiction: "State Fire Safety Division",
    contact: "firenoc@statefire.gov.in"
  },
  WATER_BOARD: {
    id: "Water Board",
    name: "State Industrial Water Supply & Sanitation Board",
    shortName: "Water Board",
    color: "#06b6d4",
    bgLight: "rgba(6, 182, 212, 0.1)",
    headOfficer: "Er. P. M. Joshi (Superintending Engineer)",
    jurisdiction: "District Water Network Div 4",
    contact: "waternoc@waterboard.gov.in"
  },
  POLLUTION_BOARD: {
    id: "Pollution Board",
    name: "State Pollution Control Board (SPCB / CETP)",
    shortName: "Pollution Board",
    color: "#10b981",
    bgLight: "rgba(16, 185, 129, 0.1)",
    headOfficer: "Dr. K. N. Patil (Regional Officer - Environment)",
    jurisdiction: "Industrial Effluent Control Division",
    contact: "cetp@pollutionboard.gov.in"
  },
  ELECTRICITY_BOARD: {
    id: "Electricity Board",
    name: "State Electricity Distribution Corp (MSEDCL / Electricity Board)",
    shortName: "Electricity Board",
    color: "#eab308",
    bgLight: "rgba(234, 179, 8, 0.1)",
    headOfficer: "Er. R. T. Shinde (Executive Engineer)",
    jurisdiction: "High Tension (HT) Power Division",
    contact: "powernoc@discom.gov.in"
  }
};

export const PERMISSIONS_MASTER = [
  {
    id: 1,
    title: "Building Plan Approval",
    authority: "MIDC",
    authorityKey: "MIDC",
    category: "Infrastructure & Civil",
    slaDays: 30,
    fee: "₹ 25,000",
    prerequisite: "Land Allotment Letter & Lease Deed",
    description: "Architectural scrutiny, plot setback clearance, floor space index (FSI) approval, structural safety compliance for factory setup.",
    documents: [
      "Architectural Blueprint (CAD format & PDF)",
      "Land Allotment Order & Registered Lease Deed",
      "Structural Stability Certificate by Chartered Engineer",
      "Soil Testing & Contour Survey Report"
    ],
    mandatoryFor: "New Construction & Expansion"
  },
  {
    id: 2,
    title: "Drainage Plan Approval",
    authority: "MIDC",
    authorityKey: "MIDC",
    category: "Infrastructure & Utilities",
    slaDays: 15,
    fee: "₹ 10,000",
    prerequisite: "Building Plan Approval",
    description: "Clearance for internal industrial storm-water drainage lines, sewage network connection, and rainwater harvesting layout.",
    documents: [
      "Drainage & Underground Sewer Network Layout",
      "Rainwater Harvesting Design Calculations",
      "Effluent Discharge Flow Rate Calculations",
      "Site Slope Analysis & Plumbing Schematic"
    ],
    mandatoryFor: "All Industrial Units"
  },
  {
    id: 3,
    title: "Fire NOC",
    authority: "Fire Dept",
    authorityKey: "FIRE_DEPT",
    category: "Safety & Hazard Control",
    slaDays: 21,
    fee: "₹ 18,500",
    prerequisite: "Building Plan Approval",
    description: "Fire prevention, hydrant system layout clearance, emergency exit plan verification, and hazardous material storage NOC.",
    documents: [
      "Fire Hydrant & Sprinkler Design Schematic",
      "Building Key Plan highlighting Emergency Exits",
      "Flame Retardant Materials Certificate",
      "Hazardous Chemical Storage Manifest (if applicable)"
    ],
    mandatoryFor: "All Manufacturing & Commercial Plants"
  },
  {
    id: 4,
    title: "Water Connection",
    authority: "Water Board",
    authorityKey: "WATER_BOARD",
    category: "Utilities & Supply",
    slaDays: 14,
    fee: "₹ 15,000",
    prerequisite: "Drainage Plan Approval",
    description: "Sanction for industrial bulk water line tapping, daily volume quota allocation (KL/day), and meter installation.",
    documents: [
      "Water Requirement Breakdown (Domestic vs Industrial Process)",
      "Internal Water Distribution Pipe Schematic",
      "Copy of Approved Drainage Plan",
      "Plumber License Registration Copy"
    ],
    mandatoryFor: "Operational Readiness"
  },
  {
    id: 5,
    title: "CETP Membership",
    authority: "Pollution Board",
    authorityKey: "POLLUTION_BOARD",
    category: "Environmental Compliance",
    slaDays: 20,
    fee: "₹ 35,000",
    prerequisite: "Consent to Establish (CTE)",
    description: "Common Effluent Treatment Plant (CETP) membership certificate for industrial trade effluent disposal and treatment allocation.",
    documents: [
      "Process Flow Diagram with Effluent Characterization",
      "Primary Pre-Treatment Plant (ETP) Blueprint",
      "Water Balance Diagram & Zero Liquid Discharge Plan",
      "Agreement Copy with Local CETP Society"
    ],
    mandatoryFor: "Red & Orange Category Industries"
  },
  {
    id: 6,
    title: "Power NOC",
    authority: "Electricity Board",
    authorityKey: "ELECTRICITY_BOARD",
    category: "Energy & Utilities",
    slaDays: 15,
    fee: "₹ 20,000",
    prerequisite: "Building Plan Approval",
    description: "Feasibility approval for High Tension (HT) / Low Tension (LT) electrical connection, dedicated transformer setup & load release NOC.",
    documents: [
      "Connected Load & Peak Demand Calculations (KVA/KW)",
      "Single Line Diagram (SLD) of Electrical Substation",
      "Transformer Yard Layout Plan",
      "Electrical Inspectorate Preliminary Approval"
    ],
    mandatoryFor: "All Powered Industrial Units"
  },
  {
    id: 7,
    title: "Plinth Completion",
    authority: "MIDC",
    authorityKey: "MIDC",
    category: "Civil Construction Stage",
    slaDays: 10,
    fee: "₹ 8,000",
    prerequisite: "Building Plan Approval",
    description: "Field verification certificate issued after foundation & plinth level completion confirming adherence to approved building boundaries.",
    documents: [
      "Architect's Plinth Completion Certificate (Form B)",
      "Site Inspection Request Letter",
      "Geo-tagged Photographs of Completed Plinth Level",
      "As-built Boundary Measurement Sheet"
    ],
    mandatoryFor: "Superstructure Construction Phase"
  },
  {
    id: 8,
    title: "Building Completion Certificate (BCC) / Occupation Certificate (OC)",
    authority: "MIDC",
    authorityKey: "MIDC",
    category: "Final Occupation & Operations",
    slaDays: 30,
    fee: "₹ 40,000",
    prerequisite: "Plinth Completion, Fire NOC & Drainage Approval",
    description: "Final statutory certificate authorizing full occupancy, machine installation, and commercial plant commissioning.",
    documents: [
      "Architect Final Building Completion Certificate (Form C)",
      "Final Fire NOC Approval Copy",
      "Structural Safety & As-Built Plans",
      "Lift & Elevator Inspectorate License (if applicable)"
    ],
    mandatoryFor: "Commercial Production Start"
  }
];

export const INITIAL_PROJECTS = [
  {
    id: "PROJ-2026-089",
    name: "Apex Bio-Tech Tech Park",
    sector: "Pharmaceuticals & Biotechnology",
    location: "Plot No. C-42, Chakan Industrial Area Zone-3, Pune",
    landArea: "15,400 sq. meters",
    estimatedCost: "₹ 48.5 Crores",
    ownerName: "Rajesh V. Singhania",
    companyName: "Apex Bio-Pharma Solutions Ltd",
    cinNumber: "U24230PN2021PLC098234",
    email: "rajesh.singhania@apexbio.com",
    phone: "+91 98220 11492"
  },
  {
    id: "PROJ-2026-104",
    name: "Zenith Semiconductors & EV Components",
    sector: "Electronics & Automotive Tech",
    location: "Plot No. A-12/1, MIDC Ranjangaon Industrial Zone, Pune",
    landArea: "28,000 sq. meters",
    estimatedCost: "₹ 110.0 Crores",
    ownerName: "Sunita Reddy",
    companyName: "Zenith Tech Systems Pvt Ltd",
    cinNumber: "U31900MH2023PTC345678",
    email: "s.reddy@zenithtech.in",
    phone: "+91 94450 88201"
  }
];

export const INITIAL_APPLICATIONS = [
  {
    id: "APP-MIDC-8901",
    permissionId: 1,
    permissionTitle: "Building Plan Approval",
    authority: "MIDC",
    projectId: "PROJ-2026-089",
    projectName: "Apex Bio-Tech Tech Park",
    applicantName: "Rajesh V. Singhania",
    companyName: "Apex Bio-Pharma Solutions Ltd",
    submissionDate: "2026-08-10",
    status: "APPROVED", // APPROVED, PENDING, IN_REVIEW, ACTION_REQUIRED
    currentStep: 4,
    totalSteps: 4,
    slaTargetDate: "2026-09-09",
    assignedOfficer: "Er. S. R. Deshmukh",
    remarks: "Building blueprint verified against MIDC DCR rules 2025. FSI approved at 1.5. Building Plan NOC Granted.",
    issuedCertificateId: "MIDC/BPA/2026/00941",
    issuedDate: "2026-08-25",
    uploadedFiles: [
      { name: "Architectural_Master_Plan_CAD.pdf", size: "14.2 MB", type: "PDF Blueprint", date: "2026-08-10" },
      { name: "Registered_MIDC_Lease_Deed.pdf", size: "3.8 MB", type: "Legal Document", date: "2026-08-10" },
      { name: "Structural_Stability_Certificate.pdf", size: "2.1 MB", type: "Technical Cert", date: "2026-08-10" }
    ],
    timeline: [
      { step: "Application Filed", date: "2026-08-10 10:30 AM", status: "completed", note: "Fees of ₹ 25,000 paid via Online Payment Gateway." },
      { step: "Document Scrutiny", date: "2026-08-14 02:15 PM", status: "completed", note: "Architectural drawings scrutinized by MIDC Senior Town Planner." },
      { step: "Site Inspection", date: "2026-08-20 11:00 AM", status: "completed", note: "Physical boundary and setback verified on plot." },
      { step: "Final Approval & Sanction", date: "2026-08-25 04:45 PM", status: "completed", note: "Sanction letter and stamped blueprints issued digitally." }
    ]
  },
  {
    id: "APP-FIRE-4421",
    permissionId: 3,
    permissionTitle: "Fire NOC",
    authority: "Fire Dept",
    projectId: "PROJ-2026-089",
    projectName: "Apex Bio-Tech Tech Park",
    applicantName: "Rajesh V. Singhania",
    companyName: "Apex Bio-Pharma Solutions Ltd",
    submissionDate: "2026-08-28",
    status: "IN_REVIEW",
    currentStep: 2,
    totalSteps: 4,
    slaTargetDate: "2026-09-18",
    assignedOfficer: "Cmdt. A. V. Kulkarni",
    remarks: "Fire Fighting System layout under review. Field Officer assigned for site safety audit.",
    uploadedFiles: [
      { name: "Fire_Hydrant_System_Layout.pdf", size: "8.5 MB", type: "Schematic Plan", date: "2026-08-28" },
      { name: "Emergency_Evacuation_Map.pdf", size: "1.9 MB", type: "Safety Blueprint", date: "2026-08-28" }
    ],
    timeline: [
      { step: "Application Filed", date: "2026-08-28 09:15 AM", status: "completed", note: "Application registered under Hazard Class B2." },
      { step: "Scrutiny by Fire Officer", date: "2026-09-01 03:20 PM", status: "active", note: "Hydrant pressure calculations being evaluated." },
      { step: "Site Safety Audit", date: "Pending Schedule", status: "pending", note: "Physical verification of static water tank capacity." },
      { step: "Final Fire NOC Release", date: "Pending", status: "pending", note: "Issuance of Fire Safety Certificate." }
    ]
  },
  {
    id: "APP-POLL-1092",
    permissionId: 5,
    permissionTitle: "CETP Membership",
    authority: "Pollution Board",
    projectId: "PROJ-2026-089",
    projectName: "Apex Bio-Tech Tech Park",
    applicantName: "Rajesh V. Singhania",
    companyName: "Apex Bio-Pharma Solutions Ltd",
    submissionDate: "2026-09-01",
    status: "ACTION_REQUIRED",
    currentStep: 2,
    totalSteps: 4,
    slaTargetDate: "2026-09-21",
    assignedOfficer: "Dr. K. N. Patil",
    queryMessage: "Please submit revised Water Balance Diagram clarifying daily industrial process wastewater flow (CMD) vs domestic sewage volume.",
    uploadedFiles: [
      { name: "ETP_Process_Flow_Sheet.pdf", size: "4.2 MB", type: "Process Flow", date: "2026-09-01" },
      { name: "CETP_Membership_Draft_Agreement.pdf", size: "1.4 MB", type: "Agreement", date: "2026-09-01" }
    ],
    timeline: [
      { step: "Application Filed", date: "2026-09-01 11:00 AM", status: "completed", note: "Category: Orange - Pharmaceutical Processing." },
      { step: "Technical Committee Scrutiny", date: "2026-09-03 04:10 PM", status: "action", note: "Clarification sought regarding trade effluent volume." },
      { step: "CETP Allocation Approval", date: "Pending Query Response", status: "pending", note: "Capacity allocation in Chakan CETP 5 MLD plant." },
      { step: "Certificate Issuance", date: "Pending", status: "pending", note: "Final membership certificate." }
    ]
  },
  {
    id: "APP-ELEC-9023",
    permissionId: 6,
    permissionTitle: "Power NOC",
    authority: "Electricity Board",
    projectId: "PROJ-2026-089",
    projectName: "Apex Bio-Tech Tech Park",
    applicantName: "Rajesh V. Singhania",
    companyName: "Apex Bio-Pharma Solutions Ltd",
    submissionDate: "2026-08-20",
    status: "APPROVED",
    currentStep: 4,
    totalSteps: 4,
    slaTargetDate: "2026-09-04",
    assignedOfficer: "Er. R. T. Shinde",
    remarks: "11KV HT Power Feasibility approved for 750 KVA load from Chakan 33/11KV Substation.",
    issuedCertificateId: "MSEDCL/HT/NOC/2026/8812",
    issuedDate: "2026-09-02",
    uploadedFiles: [
      { name: "Single_Line_Diagram_Electrical.pdf", size: "5.1 MB", type: "Electrical CAD", date: "2026-08-20" },
      { name: "Substation_Transformer_Yard_Plan.pdf", size: "3.0 MB", type: "Civil Layout", date: "2026-08-20" }
    ],
    timeline: [
      { step: "Application Filed", date: "2026-08-20 02:00 PM", status: "completed", note: "750 KVA HT Load demand filed." },
      { step: "Load Feasibility Study", date: "2026-08-24 10:15 AM", status: "completed", note: "Feasibility study completed by Executive Engineer." },
      { step: "Metering & Substation Clearance", date: "2026-08-29 03:30 PM", status: "completed", note: "CT/PT metering cubicle location approved." },
      { step: "Power NOC Sanctioned", date: "2026-09-02 05:00 PM", status: "completed", note: "Load sanction letter issued." }
    ]
  }
];
