const MAHARASHTRA_LOCATIONS = [
        {
          id: 'pune_chakan',
          name: 'Pune — Chakan & Talegaon Industrial Corridor',
          district: 'Pune',
          industrialEstates: 'Chakan Phase I & II, Talegaon MIDC, Bhosari, Ranjangaon',
          regionalZone: 'Western Maharashtra Division',
          nodalOffice: 'MIDC Regional Office, Udyog Bhavan, Chinchwad, Pune',
          specialConditions: [
            'IAF Lohegaon Airport Funnel: Maximum building height capped at 30m without AAI NOC',
            'Indrayani & Bhima River Basin: Strict zero effluent discharge into natural drainage channels',
            'Chakan CETP 20 MLD: Mandatory pipeline hookup for all wet process & dyeing units',
            'High Tension HT Substation: 22kV / 11kV grid feeder clearance from MSEDCL Pune circle'
          ]
        },
        {
          id: 'thane_tarapur',
          name: 'Thane & Palghar — Tarapur & TTC Industrial Belt',
          district: 'Palghar / Thane',
          industrialEstates: 'Tarapur MIDC, Trans-Thane Creek (TTC) MIDC, Dombivli, Ambernath',
          regionalZone: 'Konkan Industrial Division',
          nodalOffice: 'MIDC Regional Office, Wagle Industrial Estate, Thane',
          specialConditions: [
            'Chemical Red Zone: All synthetic organic chemical units must possess ZLD / MEPL membership',
            'Coastal Buffer / CRZ: Strict 500m high-tide line clearance from Maharashtra Coastal Zone Authority',
            'Tarapur Atomic Power Station (TAPS): 10 km exclusion zone restrictions apply',
            'TTC Effluent Sump: Direct marine outfall monitoring by MPCB Regional Office Thane'
          ]
        },
        {
          id: 'raigad_taloja',
          name: 'Raigad — Taloja, Roha & Patalganga Chemical Zone',
          district: 'Raigad',
          industrialEstates: 'Taloja MIDC, Roha MIDC, Patalganga, Mahad Chemical Zone',
          regionalZone: 'Konkan Maritime Zone',
          nodalOffice: 'MIDC Regional Office, CBD Belapur / Panvel, Raigad',
          specialConditions: [
            'Heavy Chemical Hub: Dedicated effluent pipeline to Arabian Sea under MPCB monitoring',
            'Navi Mumbai International Airport (NMIA): 15 km Obstacle Surface Limiting Height NOC required',
            'Kasardi River Cleanliness Mandate: No untreated industrial discharge permitted',
            'MIDC Chemical Fire Station: Specialized foam tender unit stationed at Taloja'
          ]
        },
        {
          id: 'sambhajinagar_auric',
          name: 'Chhatrapati Sambhajinagar — Shendra & Bidkin (AURIC City)',
          district: 'Chhatrapati Sambhajinagar (Aurangabad)',
          industrialEstates: 'Shendra MIDC, Bidkin Industrial City (DMIC Corridor), Waluj MIDC',
          regionalZone: 'Marathwada Division',
          nodalOffice: 'MIDC Regional Office, Chikalthana, Chhatrapati Sambhajinagar',
          specialConditions: [
            'Smart Industrial City: Automated SCADA water metering and underground utility conduits',
            'Godavari River Catchment: Strict organic waste digestion and water balance',
            'Defense Cantonment Setback: 100m clearance from military ammunition firing ranges',
            'DMIC Node 1: Preferential single-window fast-track clearance within 7 days'
          ]
        },
        {
          id: 'nagpur_butibori',
          name: 'Nagpur — Butibori & MIHAN Multi-modal SEZ',
          district: 'Nagpur',
          industrialEstates: 'Butibori Industrial Area (Largest MIDC in Asia), Hingna, MIHAN SEZ',
          regionalZone: 'Vidarbha Division',
          nodalOffice: 'MIDC Regional Office, Civil Lines, Nagpur',
          specialConditions: [
            'Dr. Babasaheb Ambedkar International Airport: Height NOC required for MIHAN vicinity',
            'Thermal Power Corridor: Strict fly ash utilization protocols under CPCB norms',
            'Dry Port Connectivity: Direct multimodal rail logistics integration requirements',
            'Vena River Buffer: 200m buffer zone for chemical manufacturing units'
          ]
        },
        {
          id: 'nashik_ambad',
          name: 'Nashik — Ambad, Satpur & Sinnar Industrial Cluster',
          district: 'Nashik',
          industrialEstates: 'Ambad MIDC, Satpur MIDC, Sinnar DMIC Extension',
          regionalZone: 'North Maharashtra Division',
          nodalOffice: 'MIDC Regional Office, Udyog Bhavan, Nashik',
          specialConditions: [
            'Ojhar HAL Airport (MIG Fighter Base): Restricted defence airspace height limitations',
            'Godavari Origin Buffer: Zero discharge compliance for agro-chemical and winery units',
            'Seismic Zone III: Enhanced structural foundation calculations under IS 1893',
            'Electrical Engineering Hub: Dedicated 132kV testing substation facilities'
          ]
        },
        {
          id: 'solapur_kolhapur',
          name: 'Solapur & Kolhapur — Chincholi & Shiroli Industrial Belt',
          district: 'Solapur / Kolhapur',
          industrialEstates: 'Chincholi MIDC, Shiroli MIDC, Gokul Shirgaon, Kagal-Hatkanangale',
          regionalZone: 'South Maharashtra Division',
          nodalOffice: 'MIDC Regional Office, Tarabai Park, Kolhapur',
          specialConditions: [
            'Textile & Foundry Dominant: Mandatory CETP membership for textile wet processors',
            'Cupola Furnace Emissions: Baghouse filter and stack emission norms under MPCB',
            'Panchganga River Action Plan: Stringent biological effluent treatment parameters',
            'Foundry Sand Recycling: Solid waste management agreement with authorized re-claimers'
          ]
        }
      ];

      // --- STATUTORY GOVERNMENT MANDATES BY INDUSTRY ---
      const GOVT_INDUSTRY_MANDATES = [
        {
          id: 'chemical_red',
          name: 'Chemical & Petrochemical Processing (Red Category)',
          categoryType: 'Red (High Pollution Index > 60)',
          badgeColor: 'rose',
          icon: '🛑',
          applicableAuthorities: ['MIDC', 'MPCB', 'PESO', 'Fire Dept', 'DISH', 'Water Board', 'MSEDCL', 'PWD'],
          majorRequirements: [
            {
              authority: 'MIDC Town Planning & Engineering',
              deptColor: 'indigo',
              docTitle: 'Chemical Zone Plot Sanction & Specialized DCR Blueprint',
              legalReference: 'MIDC DCR 2019, Section 14 (Hazardous Industries)',
              mandatoryFiles: [
                'Land Allotment in Designated Chemical Zone with Registered Lease Deed',
                'Architectural Master Plan with 45% Built-up & Minimum 33% Green Belt Demarcation',
                'Contour & Drainage Gradient Plan with Separate Industrial Effluent Sump Network',
                'Chemical Tank Farm Dike Wall Civil Engineering Blueprint (110% storage capacity)',
                'Form B Plinth Level Boundary Completion Certificate & Form C Completion/OC'
              ],
              officerChecklist: [
                'Verify plot is strictly located inside notified Chemical Zone',
                'Check setback distance of minimum 15 meters from road boundary',
                'Inspect dike wall containment volume for chemical tank farm',
                'Verify underground storm water is completely segregated from process effluent'
              ],
              rtsSla: '15 Days'
            },
            {
              authority: 'MPCB (Pollution Control Board)',
              deptColor: 'emerald',
              docTitle: 'Full CTE, CTO & Zero Liquid Discharge (ZLD) Clearances',
              legalReference: 'Water (P&CP) Act 1974 & Air (P&CP) Act 1981, Sec 25/21',
              mandatoryFiles: [
                'Comprehensive Consent to Establish (CTE) & Consent to Operate (CTO) Applications',
                'Effluent Treatment Plant (ETP) Primary, Secondary & Tertiary RO-MEE Layout',
                'Continuous Online Effluent Monitoring System (OCEMS) Telemetry IP Linkage',
                'Hazardous Waste Authorization (Form 1) under HW Management Rules 2016',
                'CHWTSDF Membership Agreement with MEPL / Taloja / Ranjangaon / Butibori',
                'Air Pollution Control Equipment (APCE) Wet Scrubber & 30m Stack Drawing'
              ],
              officerChecklist: [
                'Verify mass balance calculation and water consumption vs trade effluent',
                'Verify live telemetry data connectivity with MPCB Central Server',
                'Ensure valid agreement for disposal of incinerable and landfillable hazardous waste',
                'Audit zero liquid discharge (ZLD) multi-effect evaporator design'
              ],
              rtsSla: '30 Days'
            },
            {
              authority: 'PESO (Petroleum & Explosives Safety Organisation)',
              deptColor: 'red',
              docTitle: 'Petroleum Class A, B & Gas Cylinder Storage License',
              legalReference: 'Petroleum Act 1934 & Petroleum Rules 2002',
              mandatoryFiles: [
                'Site Safety Layout approved by Chief Controller of Explosives (CCE / Joint CCE)',
                'District Magistrate / District Collector No Objection Certificate (DM NOC)',
                'Pressure Vessel Hydrostatic Test Certificate by Competent Person (Rule 19)',
                'Quantitative Risk Assessment (QRA) & Maximum Credible Accident (MCA) Analysis',
                'Flameproof Electrical Fittings Certificate (IS/IEC 60079 Zone 1 / Zone 2)'
              ],
              officerChecklist: [
                'Verify safety separation distance from boundary wall and high-tension lines',
                'Inspect flame arresters, breather valves, and foam pourer systems',
                'Verify emergency isolation valves (ESVs) interlocking'
              ],
              rtsSla: '45 Days'
            },
            {
              authority: 'Directorate of Fire Services / MIDC Fire',
              deptColor: 'rose',
              docTitle: 'Hazardous Chemical Fire NOC & Deluge Spray System Approval',
              legalReference: 'Maharashtra Fire Prevention & Life Safety Measures Act 2006',
              mandatoryFiles: [
                'Provisional & Final Fire Safety NOC Applications with Chemical Hazard Form',
                'Dedicated Static Fire Water Tank Blueprint (Min 250,000 Liters)',
                'Automatic Foam Deluge System & Rim-Seal Protection for Chemical Storage Tanks',
                'Hydraulic Calculations for 3500 LPM Fire Pumps (Main, Jockey & Diesel Engine)',
                'Emergency Escape Routes, Explosion-proof Emergency Signages & Refuge Bays'
              ],
              officerChecklist: [
                'Conduct physical pressure test of fire hydrant network (minimum 7 bar at farthest point)',
                'Verify foam compound stock availability (minimum 20-minute continuous application)',
                'Check fire marshal team training records and on-site disaster plan'
              ],
              rtsSla: '14 Days'
            },
            {
              authority: 'DISH (Directorate of Industrial Safety & Health)',
              deptColor: 'cyan',
              docTitle: 'Factory Plan Approval (Rule 3) & Major Accident Hazard (MAH) Registration',
              legalReference: 'Maharashtra Factories Rules 1963 (Rule 3) & Factories Act 1948',
              mandatoryFiles: [
                'Form No. 1 Application for Factory Blueprint Approval',
                'Form 1-A Certificate of Structural Stability by DISH Competent Person',
                'Material Safety Data Sheets (MSDS) in English & Marathi displayed on shop floor',
                'On-site Emergency Plan & Off-site Disaster Plan under MAH Control Rules',
                'Worker Occupational Health Surveillance & Pre-employment Medical Protocol'
              ],
              officerChecklist: [
                'Check safety interlocks, rupture discs, and scrubber vents on reaction vessels',
                'Verify eye-wash and safety deluge showers within 15 meters of hazard zones',
                'Inspect worker personal protective equipment (PPE) compliance'
              ],
              rtsSla: '21 Days'
            }
          ]
        },
        {
          id: 'automotive_engineering',
          name: 'Automotive, Heavy Machinery & Engineering (Orange/Red Category)',
          categoryType: 'Orange/Red Category',
          badgeColor: 'amber',
          icon: '🚗',
          applicableAuthorities: ['MIDC', 'MPCB', 'Fire Dept', 'DISH', 'MSEDCL', 'PWD', 'Water Board'],
          majorRequirements: [
            {
              authority: 'MIDC Town Planning',
              deptColor: 'indigo',
              docTitle: 'Heavy Industrial Fabrication Architecture & Setback Sanction',
              legalReference: 'MIDC DCR 2019, Section 12 (Engineering Estates)',
              mandatoryFiles: [
                'Allotment Order & Registered Lease Deed in Engineering Zone',
                'Factory Shed Structural Design & EOT Crane Column Foundation Layout',
                'Internal Heavy Vehicle Turnaround Radius (Min 18m) & Loading Bays Blueprint',
                'Form B Plinth Certificate & Form C Occupancy Certificate'
              ],
              officerChecklist: [
                'Verify heavy vehicle entry/exit clearance without road traffic obstruction',
                'Check floor load bearing capacity calculations for press machines & CNC banks',
                'Inspect storm water drainage connection to MIDC arterial drainage'
              ],
              rtsSla: '15 Days'
            },
            {
              authority: 'MPCB (Pollution Control Board)',
              deptColor: 'emerald',
              docTitle: 'Paint Shop VOC Emission & Oily Wastewater CTE/CTO',
              legalReference: 'Water (P&CP) Act 1974 & Air (P&CP) Act 1981',
              mandatoryFiles: [
                'CTE/CTO for Machining, Heat Treatment & Paint Shop Operations',
                'Oil-Water Separator (OWS) & Phosphating Effluent Treatment Plant Blueprint',
                'Paint Booth Down-Draft Exhaust Filter & VOC Scrubber Specifications',
                'Used Oil & Coolant Hazardous Waste Authorization (Category 5.1 & 5.2)'
              ],
              officerChecklist: [
                'Verify zero discharge of spent phosphating solution & heavy metal precipitate',
                'Inspect dry exhaust filter arresters in paint booths',
                'Check hazardous waste manifest for discarded coolant disposal'
              ],
              rtsSla: '21 Days'
            },
            {
              authority: 'DISH (Industrial Safety & Health)',
              deptColor: 'cyan',
              docTitle: 'EOT Crane, Power Press & Factory Safety License',
              legalReference: 'Factories Act 1948 & Maharashtra Factories Rules',
              mandatoryFiles: [
                'Factory Plan Approval under Rule 3 with Machine Layout',
                'EOT Crane & Hoist Load Test Certificates by Competent Person (Form 13)',
                'Power Press Machine Light Curtains & Interlocked Guarding Audit Report',
                'Factory License (Form No. 2) with Manager Nomination'
              ],
              officerChecklist: [
                'Inspect physical guards on high-speed flywheels, shears & stamping machines',
                'Check overhead traveling crane limit switches and wire rope inspection logs',
                'Verify ventilation air changes in welding and fabrication zones'
              ],
              rtsSla: '15 Days'
            },
            {
              authority: 'MSEDCL & PWD Electrical Inspectorate',
              deptColor: 'yellow',
              docTitle: 'High Tension (HT) Power Substation & CEI Approval',
              legalReference: 'Central Electricity Authority (Safety Measures) Regulations 2023',
              mandatoryFiles: [
                'HT Power Feasibility & Sanction Order from MSEDCL (11kV / 22kV / 33kV)',
                'Substation Single Line Diagram (SLD) approved by Chartered Electrical Engineer',
                'Chief Electrical Inspector (CEI) Inspection & Energization Permission',
                'Earth Pit Resistance Test Report (< 1.0 Ohm) by Licensed Electrical Contractor'
              ],
              officerChecklist: [
                'Inspect transformer yard fencing, gravel bedding, and oil soak pit',
                'Verify dual earthing of transformer neutral and HT vacuum circuit breaker',
                'Inspect automatic changeover interlocking on backup DG sets'
              ],
              rtsSla: '10 Days'
            }
          ]
        },
        {
          id: 'textile_dyeing',
          name: 'Textiles, Yarn Dyeing & Wet Processing (Red/Orange Category)',
          categoryType: 'Effluent Intensive Red Category',
          badgeColor: 'indigo',
          icon: '🧵',
          applicableAuthorities: ['MIDC', 'MPCB', 'Local CETP', 'Fire Dept', 'DISH', 'Directorate of Boilers'],
          majorRequirements: [
            {
              authority: 'MPCB & Local CETP Association',
              deptColor: 'emerald',
              docTitle: 'Mandatory CETP Pipeline Membership & ZLD Treatment Sanction',
              legalReference: 'Environment (Protection) Act 1986 & MPCB Textile Guidelines',
              mandatoryFiles: [
                'CETP Share Certificate & Daily Hydraulic Effluent Allocation Agreement',
                'Primary Chemical Coagulation & Color Removal Pre-treatment Unit Blueprint',
                'Multi-Effect Evaporator (MEE) & Agitated Thin Film Dryer (ATFD) Salt Recovery System',
                'Treated Effluent Flow Meter Installation & Telemetry Linkage',
                'Textile Chemical Sludge Storage & CHWTSDF Disposal Contract'
              ],
              officerChecklist: [
                'Verify COD, BOD, TDS, and color levels meet CETP inlet norms',
                'Inspect magnetic flow meter calibration certificate and anti-tamper seal',
                'Verify salt recovery crystallization process in zero-discharge units'
              ],
              rtsSla: '21 Days'
            },
            {
              authority: 'Directorate of Steam Boilers, Maharashtra',
              deptColor: 'rose',
              docTitle: 'Steam Boiler Registration & High Pressure Pipeline Approval',
              legalReference: 'Indian Boilers Act 1923 & Maharashtra Boiler Rules',
              mandatoryFiles: [
                'Boiler Manufacturer Quality Certificate (Form II, III, IV)',
                'High Pressure Steam Pipeline Drawing approved by Chief Inspector of Boilers',
                'Boiler Attendant / Engineer Competency Certificate (Class I / II)',
                'Boiler Hydraulic Pressure Test Log Sheet under Inspector Supervision'
              ],
              officerChecklist: [
                'Conduct physical hydraulic test at 1.5 times the maximum working pressure',
                'Verify functioning of dual spring-loaded safety valves and water level gauges',
                'Check chimney stack height calculation (minimum 30 meters or H = 14 Q^0.3)'
              ],
              rtsSla: '14 Days'
            }
          ]
        },
        {
          id: 'pharma_formulation',
          name: 'Pharmaceuticals, Drugs & Clean Formulations (Orange Category)',
          categoryType: 'Regulated Formulation Category',
          badgeColor: 'purple',
          icon: '💊',
          applicableAuthorities: ['Maharashtra FDA', 'CDSCO', 'MPCB', 'MIDC', 'DISH', 'Fire Dept'],
          majorRequirements: [
            {
              authority: 'Maharashtra Food & Drug Administration (FDA) & CDSCO',
              deptColor: 'purple',
              docTitle: 'Drug Manufacturing License (Form 25 & Form 28)',
              legalReference: 'Drugs and Cosmetics Act 1940 & Rules 1945 (Schedule M - GMP)',
              mandatoryFiles: [
                'Schedule M (Good Manufacturing Practices) Compliant Clean Room Layout',
                'HVAC Air Handling Unit (AHU) HEPA Filtration & Differential Pressure Blueprint',
                'Approved Technical Staff (B.Pharm / M.Pharm Manufacturing & Analytical Chemists)',
                'Water for Injection (WFI) and Purified Water Generation Loop Schematics',
                'Validation Protocols (DQ, IQ, OQ, PQ) for Sterile & Oral Dosage Lines'
              ],
              officerChecklist: [
                'Inspect clean room air classification (Grade A, B, C, D) and air change rates',
                'Verify water loop conductivity, TOC monitoring, and sanitization records',
                'Check qualification credentials of approved technical personnel'
              ],
              rtsSla: '30 Days'
            },
            {
              authority: 'MPCB (Bio-Medical & Chemical Cell)',
              deptColor: 'emerald',
              docTitle: 'Pharmaceutical CTE/CTO & Hazardous Waste Disposal',
              legalReference: 'Water (P&CP) Act 1974 & Hazardous Waste Rules 2016',
              mandatoryFiles: [
                'ETP Layout with Inactivation Autoclave for Biological Residues',
                'Solvent Recovery Unit (SRU) Efficiency Certificate (> 95% recovery)',
                'Incinerable Off-spec Drug & Chemical Sludge Disposal Agreement with CHWTSDF'
              ],
              officerChecklist: [
                'Verify complete destruction and tracking of discarded formulation batches',
                'Inspect solvent vapor condensation and VOC recovery systems',
                'Check scrubbers attached to granulation and tablet coating exhausts'
              ],
              rtsSla: '21 Days'
            }
          ]
        },
        {
          id: 'food_beverage',
          name: 'Food, Beverages, Dairy & Agri-Processing (Orange/Green Category)',
          categoryType: 'Food Safety & Environmental Sector',
          badgeColor: 'yellow',
          icon: '🥛',
          applicableAuthorities: ['FSSAI', 'Bureau of Indian Standards (BIS)', 'MIDC', 'MPCB', 'Local Municipal Health'],
          majorRequirements: [
            {
              authority: 'FSSAI (Food Safety & Standards Authority of India)',
              deptColor: 'yellow',
              docTitle: 'Central / State Food Business Manufacturing License',
              legalReference: 'Food Safety and Standards Act 2006 & Regulations 2011',
              mandatoryFiles: [
                'Food Processing Detailed Flow Chart & Plant Layout Blueprint',
                'Food Safety Management System (FSMS) Plan & HACCP Certificate',
                'Water Potability Test Report from NABL-Accredited Lab (IS 10500 standard)',
                'Equipment Material Specifications (Food Grade Stainless Steel SS304 / SS316)',
                'Food Handler Medical Fitness Certificates (Typhoid, Hepatitis A, Skin)'
              ],
              officerChecklist: [
                'Inspect fly-proofing, air curtains, and rodent exclusion barriers',
                'Verify stainless steel contact surfaces and CIP (Clean-in-Place) sanitization loops',
                'Check raw material tracing and recall protocol documentation'
              ],
              rtsSla: '15 Days'
            },
            {
              authority: 'Bureau of Indian Standards (BIS) & AGMARK',
              deptColor: 'amber',
              docTitle: 'Mandatory ISI Certification for Water, Dairy & Infant Formula',
              legalReference: 'Bureau of Indian Standards Act 2016',
              mandatoryFiles: [
                'In-house Testing Laboratory Setup with Calibrated Instruments',
                'Quality Control Chemist & Microbiologist Qualifications',
                'Scheme of Testing and Inspection (STI) Agreement with BIS',
                'AGMARK Certificate of Authorization (for edible oils, ghee, honey, spices)'
              ],
              officerChecklist: [
                'Verify autoclave, laminar air flow, and incubation room in testing lab',
                'Inspect ozone contact column and reverse osmosis filtration for water',
                'Audit batch code marking and tamper-evident packaging'
              ],
              rtsSla: '30 Days'
            }
          ]
        },
        {
          id: 'electronics_assembly',
          name: 'Electronics Assembly, Semiconductors & Hardware (Green Category)',
          categoryType: 'Green / Low Pollution Category',
          badgeColor: 'cyan',
          icon: '💻',
          applicableAuthorities: ['CPCB', 'MPCB', 'BIS', 'MIDC', 'MSEDCL', 'Fire Dept'],
          majorRequirements: [
            {
              authority: 'Central Pollution Control Board (CPCB) - E-Waste Cell',
              deptColor: 'cyan',
              docTitle: 'Extended Producer Responsibility (EPR) & WEEE Authorization',
              legalReference: 'E-Waste (Management) Rules 2022',
              mandatoryFiles: [
                'Registration as Producer on Centralized CPCB EPR Portal',
                'E-Waste Collection & Recycling Target Fulfillment Contract with Authorized Recycler',
                'RoHS (Restriction of Hazardous Substances) Compliance Testing Certificates',
                'Lead-Free Soldering SMT Line Air Extraction & Fume Scrubber Blueprint'
              ],
              officerChecklist: [
                'Verify EPR registration certificate issued by CPCB',
                'Check tie-up with R2/e-Stewards certified recycling facility',
                'Inspect electrostatic discharge (ESD) flooring and ground bonding'
              ],
              rtsSla: '15 Days'
            },
            {
              authority: 'Bureau of Indian Standards (BIS) - Compulsory Registration',
              deptColor: 'indigo',
              docTitle: 'BIS-CRS Safety Certification for Electronic Goods',
              legalReference: 'Electronics & Information Technology Goods (Requirement for Compulsory Registration) Order',
              mandatoryFiles: [
                'BIS Safety Test Reports from Recognized Laboratory (IS 13252 / IS 616)',
                'Labeling and Standard Mark Specification Blueprint',
                'Factory Quality Audit & Test Equipment Calibration Certificates'
              ],
              officerChecklist: [
                'Audit high-voltage breakdown testers and earth continuity instruments',
                'Verify BIS Standard Mark and R-Number on product packaging'
              ],
              rtsSla: '20 Days'
            }
          ]
        }
      ];