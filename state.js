/**
 * CASEVAULT State Management & Realistic SIH Demo Dataset
 * Pre-populated with realistic legal & cyber investigation cases,
 * evidence items, chains of custody, RBAC permissions, and audit logs.
 */

export const State = {
  // Current active session
  currentUser: {
    id: 'USR-7701',
    name: 'Inspector Vikram Malhotra',
    email: 'v.malhotra@casevault.gov.in',
    role: 'Investigator',
    department: 'Cyber Crime Investigation Unit',
    clearance: 'Level 4 (Secret)',
    badgeId: 'IN-CYBER-8842',
    avatar: 'VM',
    isAuthenticated: true,
    lastLogin: '2026-09-17 09:14:22 IST'
  },

  // Role definitions & Permission Matrix
  roles: [
    'Administrator',
    'Investigator',
    'Legal Officer',
    'Forensic Analyst',
    'Reviewer',
    'Viewer'
  ],

  permissionMatrix: {
    'Administrator': { view: true, upload: true, modify: true, delete: true, download: true, share: true, verify: true, manageUsers: true },
    'Investigator': { view: true, upload: true, modify: true, delete: false, download: true, share: true, verify: true, manageUsers: false },
    'Forensic Analyst': { view: true, upload: true, modify: false, delete: false, download: true, share: false, verify: true, manageUsers: false },
    'Legal Officer': { view: true, upload: false, modify: false, delete: false, download: true, share: true, verify: true, manageUsers: false },
    'Reviewer': { view: true, upload: false, modify: false, delete: false, download: false, share: false, verify: true, manageUsers: false },
    'Viewer': { view: true, upload: false, modify: false, delete: false, download: false, share: false, verify: false, manageUsers: false }
  },

  // Directory of personnel
  users: [
    {
      id: 'USR-7701',
      name: 'Inspector Vikram Malhotra',
      email: 'v.malhotra@casevault.gov.in',
      role: 'Investigator',
      department: 'Cyber Crime Investigation Unit',
      clearance: 'Level 4 (Secret)',
      status: 'Active',
      lastLogin: '10 minutes ago'
    },
    {
      id: 'USR-8820',
      name: 'Dr. Rajesh Sharma',
      email: 'r.sharma@forensics.gov.in',
      role: 'Forensic Analyst',
      department: 'Central Digital Forensics Lab',
      clearance: 'Level 5 (Top Secret)',
      status: 'Active',
      lastLogin: '14 minutes ago'
    },
    {
      id: 'USR-9904',
      name: 'Amitav Roy',
      email: 'a.roy@casevault.gov.in',
      role: 'Administrator',
      department: 'Directorate of Information Security',
      clearance: 'Level 5 (Top Secret)',
      status: 'Active',
      lastLogin: '2 hours ago'
    },
    {
      id: 'USR-4412',
      name: 'Adv. Ananya Deshmukh',
      email: 'a.deshmukh@prosecution.gov.in',
      role: 'Legal Officer',
      department: 'Office of the Special Public Prosecutor',
      clearance: 'Level 3 (Confidential)',
      status: 'Active',
      lastLogin: '1 hour ago'
    },
    {
      id: 'USR-3309',
      name: 'Priya Sen',
      email: 'p.sen@judiciary.gov.in',
      role: 'Reviewer',
      department: 'Judicial Review & Oversight Directorate',
      clearance: 'Level 2 (Internal)',
      status: 'Active',
      lastLogin: 'Yesterday'
    },
    {
      id: 'USR-1105',
      name: 'Rahul Varma',
      email: 'r.varma@casevault.gov.in',
      role: 'Viewer',
      department: 'Legal Compliance Cell',
      clearance: 'Level 1 (Public)',
      status: 'Active',
      lastLogin: '3 days ago'
    }
  ],

  // Active Cases
  cases: [
    {
      id: 'CASE-2026-0142',
      name: 'Financial Fraud & Offshore Shell Laundering',
      type: 'Financial Fraud Investigation',
      department: 'Economic Offenses Wing',
      leadInvestigator: 'Inspector Vikram Malhotra',
      priority: 'Critical',
      status: 'Active',
      createdDate: '2026-08-12',
      documentCount: 128,
      evidenceCount: 14,
      lastActivity: '2 hours ago',
      description: 'Comprehensive investigation into illegal multi-jurisdictional shell entity transactions totaling ₹342 Crores through forged bank authorizations.'
    },
    {
      id: 'CASE-2026-0187',
      name: 'State Grid Ransomware & SCADA Intrusion',
      type: 'Cyber Crime Investigation',
      department: 'Cyber Defense Cell',
      leadInvestigator: 'Dr. Rajesh Sharma',
      priority: 'Critical',
      status: 'Active',
      createdDate: '2026-08-28',
      documentCount: 84,
      evidenceCount: 9,
      lastActivity: '35 mins ago',
      description: 'Forensic extraction of malicious payloads and lateral movement telemetry targeting regional power distribution network servers.'
    },
    {
      id: 'CASE-2026-0214',
      name: 'Revenue Land Title Counterfeiting Syndicate',
      type: 'Document Forgery Investigation',
      department: 'Anti-Corruption Bureau',
      leadInvestigator: 'Inspector Vikram Malhotra',
      priority: 'High',
      status: 'Under Review',
      createdDate: '2026-09-02',
      documentCount: 42,
      evidenceCount: 18,
      lastActivity: '1 day ago',
      description: 'Digital analysis of counterfeit revenue stamps, altered cadastral survey maps, and falsified tehsildar digital signatures.'
    },
    {
      id: 'CASE-2026-0251',
      name: 'Inter-Agency Digital Evidence Review',
      type: 'Digital Evidence Review',
      department: 'Special Investigation Team (SIT)',
      leadInvestigator: 'Adv. Ananya Deshmukh',
      priority: 'Medium',
      status: 'Closed',
      createdDate: '2026-07-19',
      documentCount: 65,
      evidenceCount: 11,
      lastActivity: '5 days ago',
      description: 'Court-ordered multi-agency synthesis and digital verification of cellular tower dumps and encrypted messaging archives.'
    }
  ],

  // Sensitive Legal & Investigation Documents Repository
  documents: [
    {
      id: 'DOC-88910',
      name: 'FIR_2026_0142_First_Information_Report_Signed.pdf',
      caseId: 'CASE-2026-0142',
      caseName: 'Financial Fraud & Offshore Shell Laundering',
      department: 'Economic Offenses Wing',
      docType: 'FIR / Formal Complaint',
      fileSize: '4.2 MB',
      uploadDate: '2026-09-17 09:42:10',
      uploadedBy: 'Inspector Vikram Malhotra',
      classification: 'Restricted Evidence',
      hashStatus: 'MATCHED',
      sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
      digitalSignatureStatus: 'VERIFIED',
      signatureId: 'SIG-ECDSA-P256-8F4A992C',
      signer: 'Superintendent of Police (Cyber Crime)',
      integrityScore: '100%',
      lastVerified: '2026-09-17 19:30:12',
      authorizedRoles: ['Administrator', 'Investigator', 'Legal Officer', 'Forensic Analyst'],
      contentSnippet: 'FIRST INFORMATION REPORT (Under Section 154 Cr.P.C.)\nDistrict: New Delhi Central | Police Station: Cyber Crime & EOW\nComplainant: Director of Financial Intelligence Unit\nAllegations: Non-existent vendor invoices routed through offshore intermediary accounts in Seychelles and Dubai. Forged banking credentials and unauthorized cryptographic token transfers.'
    },
    {
      id: 'DOC-88911',
      name: 'Forensic_Disk_Image_EnCase_E01_Verification_Report.pdf',
      caseId: 'CASE-2026-0187',
      caseName: 'State Grid Ransomware & SCADA Intrusion',
      department: 'Cyber Defense Cell',
      docType: 'Forensic Lab Report',
      fileSize: '18.6 MB',
      uploadDate: '2026-09-17 08:21:05',
      uploadedBy: 'Dr. Rajesh Sharma',
      classification: 'Restricted Evidence',
      hashStatus: 'MATCHED',
      sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      digitalSignatureStatus: 'VERIFIED',
      signatureId: 'SIG-ECDSA-P256-42B100EE',
      signer: 'Dr. Rajesh Sharma (Chief Forensic Examiner)',
      integrityScore: '100%',
      lastVerified: '2026-09-17 21:05:40',
      authorizedRoles: ['Administrator', 'Investigator', 'Forensic Analyst'],
      contentSnippet: 'CENTRAL DIGITAL FORENSICS EXAMINATION REPORT\nEvidence Seizure Tag #CR-2026-0187-E01\nTarget: Industrial Control Server (SCADA Gateway #4)\nPhysical Acquisition: Hardware Write-Blocker Tableau T8u.\nCalculated SHA-256 Digest: e3b0c442... | Bitstream integrity confirmed bit-for-bit.'
    },
    {
      id: 'DOC-88912',
      name: 'High_Court_Writ_Order_Freezing_Assets_Annexure_B.pdf',
      caseId: 'CASE-2026-0142',
      caseName: 'Financial Fraud & Offshore Shell Laundering',
      department: 'Office of the Special Public Prosecutor',
      docType: 'Court Order',
      fileSize: '2.1 MB',
      uploadDate: '2026-09-16 14:15:30',
      uploadedBy: 'Adv. Ananya Deshmukh',
      classification: 'Highly Confidential',
      hashStatus: 'MATCHED',
      sha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
      digitalSignatureStatus: 'VERIFIED',
      signatureId: 'SIG-RSA-4096-7C12AA89',
      signer: 'Registrar General, High Court of Judicature',
      integrityScore: '100%',
      lastVerified: '2026-09-17 11:20:00',
      authorizedRoles: ['Administrator', 'Investigator', 'Legal Officer', 'Reviewer'],
      contentSnippet: 'IN THE HIGH COURT OF JUDICATURE\nCRIMINAL MISCELLANEOUS JURISDICTION\nORDER ON PETITION NO. 4410/2026\nOrdered that respondent bank accounts, cold storage cryptocurrency vaults, and immovable corporate assets remain frozen under Sec 102 CrPC pending forensic investigation.'
    },
    {
      id: 'DOC-88913',
      name: 'Witness_Deposition_Confidential_Informant_Alpha.pdf',
      caseId: 'CASE-2026-0214',
      caseName: 'Revenue Land Title Counterfeiting Syndicate',
      department: 'Anti-Corruption Bureau',
      docType: 'Witness Deposition',
      fileSize: '1.4 MB',
      uploadDate: '2026-09-15 17:34:12',
      uploadedBy: 'Inspector Vikram Malhotra',
      classification: 'Highly Confidential',
      hashStatus: 'MATCHED',
      sha256: 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e',
      digitalSignatureStatus: 'VERIFIED',
      signatureId: 'SIG-ECDSA-P256-9933D10A',
      signer: 'Metropolitan Magistrate (Court Room 4)',
      integrityScore: '100%',
      lastVerified: '2026-09-16 16:45:10',
      authorizedRoles: ['Administrator', 'Investigator', 'Legal Officer'],
      contentSnippet: 'DEPOSITION RECORDED IN CAMERA PURSUANT TO WITNESS PROTECTION DIRECTIVE\nStatement under Section 164 of the Criminal Procedure Code.\nSubject provides physical receipt evidence of illicit seal stamps manufactured in clandestine print shops located in Old Cantonment.'
    },
    {
      id: 'DOC-88914',
      name: 'PCAP_Network_Exfiltration_Packet_Analysis_Log.pcap',
      caseId: 'CASE-2026-0187',
      caseName: 'State Grid Ransomware & SCADA Intrusion',
      department: 'Cyber Defense Cell',
      docType: 'Forensic PCAP / Telemetry',
      fileSize: '48.2 MB',
      uploadDate: '2026-09-17 06:12:44',
      uploadedBy: 'Dr. Rajesh Sharma',
      classification: 'Restricted Evidence',
      hashStatus: 'MATCHED',
      sha256: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae',
      digitalSignatureStatus: 'VERIFIED',
      signatureId: 'SIG-ECDSA-P256-CC221088',
      signer: 'Dr. Rajesh Sharma (Chief Forensic Examiner)',
      integrityScore: '100%',
      lastVerified: '2026-09-17 18:00:10',
      authorizedRoles: ['Administrator', 'Investigator', 'Forensic Analyst'],
      contentSnippet: 'PACKET CAPTURE & PROTOCOL ANALYSIS (TLS Handshake Interception)\nC2 Server: 194.165.16.88:8443\nThreat Actor Signature: APT-29 / DarkSpectre SCADA Exploit Kit\nExtracted payload: staged beaconing via port 443 over DNS tunneling.'
    },
    {
      id: 'DOC-88915',
      name: 'Subpoena_Notice_Telecom_CDR_TowerDump_Production.pdf',
      caseId: 'CASE-2026-0251',
      caseName: 'Inter-Agency Digital Evidence Review',
      department: 'Special Investigation Team (SIT)',
      docType: 'Subpoena / Section 91 Notice',
      fileSize: '890 KB',
      uploadDate: '2026-09-14 11:05:22',
      uploadedBy: 'Adv. Ananya Deshmukh',
      classification: 'Confidential',
      hashStatus: 'MATCHED',
      sha256: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
      digitalSignatureStatus: 'VERIFIED',
      signatureId: 'SIG-RSA-2048-5511A990',
      signer: 'Special Public Prosecutor Deshmukh',
      integrityScore: '100%',
      lastVerified: '2026-09-15 09:12:00',
      authorizedRoles: ['Administrator', 'Investigator', 'Legal Officer', 'Reviewer'],
      contentSnippet: 'NOTICE UNDER SECTION 91 CODE OF CRIMINAL PROCEDURE\nTo: Nodal Officers of Licensed Telecom Service Providers\nRequirement: Provide bit-verified raw Call Detail Records (CDR) and cell site sector azimuths for specified IMSI/IMEI identifiers covering the period between 01-Jan-2026 and 15-Mar-2026.'
    }
  ],

  // Evidence Vault Items with full Chain of Custody
  evidenceItems: [
    {
      evidenceId: 'EVD-2026-081',
      name: 'SanDisk 2TB NVMe M.2 Drive (Seized from suspect residence)',
      type: 'Physical Digital Media',
      caseId: 'CASE-2026-0142',
      caseName: 'Financial Fraud & Offshore Shell Laundering',
      collectedBy: 'Inspector Vikram Malhotra',
      collectionDate: '2026-08-14 10:30 IST',
      seizureLocation: 'Penthouse B-4, DLF Cyber City, Gurugram',
      currentHolder: 'Dr. Rajesh Sharma (Central Forensic Lab)',
      integrityStatus: 'SEALED_VERIFIED',
      originalSha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
      physicalTag: 'EOW-DELHI-SEAL-9941-B',
      chainOfCustody: [
        {
          step: 'Collected',
          title: 'Physical Evidence Seizure',
          officer: 'Inspector Vikram Malhotra (Badge: IN-CYBER-8842)',
          timestamp: '2026-08-14 10:30 IST',
          location: 'DLF Cyber City, Gurugram',
          terminalIp: 'Field Mobile Unit #2 (10.14.0.12)',
          action: 'Item placed in anti-static Faraday bag and tamper-evident seal EOW-DELHI-SEAL-9941-B applied.',
          hashRef: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
        },
        {
          step: 'Uploaded & Sealed',
          title: 'Intake at Secure Digital Vault',
          officer: 'Sub-Inspector R. Verma (Intake Custodian)',
          timestamp: '2026-08-14 14:15 IST',
          location: 'Cyber Crime Police Station Evidence Locker',
          terminalIp: 'Station Terminal #1 (10.14.0.4)',
          action: 'Physical seal inspected intact. Chain of custody ledger updated and cryptographic intake barcode registered.',
          hashRef: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
        },
        {
          step: 'Hash Generated',
          title: 'Bitstream Image SHA-256 Hashed',
          officer: 'Dr. Rajesh Sharma (Chief Forensic Examiner)',
          timestamp: '2026-08-15 09:40 IST',
          location: 'Central Digital Forensics Lab - Chamber 3',
          terminalIp: 'Forensic Workstation #4 (10.14.8.10)',
          action: 'Raw bitstream image (E01) generated using write-blocking controller. Master SHA-256 digest calculated and signed.',
          hashRef: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
        },
        {
          step: 'Verified',
          title: 'Cryptographic Integrity Cross-Check',
          officer: 'Forensic Scientist Neha Gupta',
          timestamp: '2026-08-16 11:20 IST',
          location: 'Central Digital Forensics Lab',
          terminalIp: 'Verification Rig #2 (10.14.8.12)',
          action: 'Independent hash recalculated against master repository. 100% bitwise parity confirmed without anomaly.',
          hashRef: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
        },
        {
          step: 'Transferred',
          title: 'Transfer to Special Public Prosecutor',
          officer: 'Adv. Ananya Deshmukh (Special Public Prosecutor)',
          timestamp: '2026-09-10 15:00 IST',
          location: 'Patiala House Courts Complex',
          terminalIp: 'Prosecution Legal Terminal (10.14.12.5)',
          action: 'Cryptographically signed mirror copy handed over for framing of criminal charges under Prevention of Money Laundering Act.',
          hashRef: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
        }
      ]
    },
    {
      evidenceId: 'EVD-2026-094',
      name: 'SCADA Router Firmware Dump & Core Memory Image',
      type: 'Electronic Memory Dump',
      caseId: 'CASE-2026-0187',
      caseName: 'State Grid Ransomware & SCADA Intrusion',
      collectedBy: 'Dr. Rajesh Sharma',
      collectionDate: '2026-08-28 04:12 IST',
      seizureLocation: 'Substation Control Center 14, Northern Grid',
      currentHolder: 'Cyber Defense Cell',
      integrityStatus: 'SEALED_VERIFIED',
      originalSha256: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae',
      physicalTag: 'CERT-IN-SCADA-0187-A',
      chainOfCustody: [
        {
          step: 'Collected',
          title: 'Live RAM Acquisition',
          officer: 'Dr. Rajesh Sharma',
          timestamp: '2026-08-28 04:12 IST',
          location: 'Northern Grid Control Room',
          terminalIp: 'Forensic Field Lap Rig (10.99.1.4)',
          action: 'Volatile RAM acquired via LiME kernel module before system power shutdown.',
          hashRef: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'
        },
        {
          step: 'Uploaded & Sealed',
          title: 'Secure Enclave Storage',
          officer: 'Dr. Rajesh Sharma',
          timestamp: '2026-08-28 08:30 IST',
          location: 'Cyber Defense Enclave',
          terminalIp: 'Secure Gateway #1 (10.99.2.1)',
          action: 'Sealed with AES-256 hardware security module key and logged in CaseVault.',
          hashRef: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'
        },
        {
          step: 'Verified',
          title: 'Payload Attribution Analysis',
          officer: 'Forensic Officer Meera Nair',
          timestamp: '2026-08-29 16:20 IST',
          location: 'Cyber Defense Lab',
          terminalIp: 'Forensic Rig (10.99.2.8)',
          action: 'Extracted ransomware string signatures validated. Zero tampering of timestamp artifacts.',
          hashRef: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'
        }
      ]
    }
  ],

  // Complete Forensic Audit Trail
  auditLogs: [
    {
      id: 'AUD-99182',
      timestamp: '2026-09-17 21:48:15',
      user: 'Inspector Vikram Malhotra',
      role: 'Investigator',
      action: 'VIEW',
      document: 'FIR_2026_0142_First_Information_Report_Signed.pdf',
      docId: 'DOC-88910',
      caseId: 'CASE-2026-0142',
      ipAddress: '10.14.0.12',
      status: 'SUCCESS',
      details: 'Document preview opened. Ephemeral access token authorized.'
    },
    {
      id: 'AUD-99181',
      timestamp: '2026-09-17 21:05:40',
      user: 'Dr. Rajesh Sharma',
      role: 'Forensic Analyst',
      action: 'VERIFY',
      document: 'Forensic_Disk_Image_EnCase_E01_Verification_Report.pdf',
      docId: 'DOC-88911',
      caseId: 'CASE-2026-0187',
      ipAddress: '10.14.8.10',
      status: 'SUCCESS',
      details: 'Cryptographic SHA-256 integrity match verified (100% match). Digital signature valid.'
    },
    {
      id: 'AUD-99180',
      timestamp: '2026-09-17 20:12:08',
      user: 'Adv. Ananya Deshmukh',
      role: 'Legal Officer',
      action: 'DOWNLOAD',
      document: 'High_Court_Writ_Order_Freezing_Assets_Annexure_B.pdf',
      docId: 'DOC-88912',
      caseId: 'CASE-2026-0142',
      ipAddress: '10.14.12.5',
      status: 'SUCCESS',
      details: 'Downloaded watermarked court copy with digital traceability banner.'
    },
    {
      id: 'AUD-99179',
      timestamp: '2026-09-17 19:30:22',
      user: 'Amitav Roy',
      role: 'Administrator',
      action: 'PERMISSION_CHANGE',
      document: 'Witness_Deposition_Confidential_Informant_Alpha.pdf',
      docId: 'DOC-88913',
      caseId: 'CASE-2026-0214',
      ipAddress: '10.14.2.1',
      status: 'SUCCESS',
      details: 'Elevated access grant added for Special Public Prosecutor Deshmukh.'
    },
    {
      id: 'AUD-99178',
      timestamp: '2026-09-17 18:44:11',
      user: 'Inspector Vikram Malhotra',
      role: 'Investigator',
      action: 'SHARE',
      document: 'FIR_2026_0142_First_Information_Report_Signed.pdf',
      docId: 'DOC-88910',
      caseId: 'CASE-2026-0142',
      ipAddress: '10.14.0.12',
      status: 'SUCCESS',
      details: 'Shared secure 48-hour access token with Special Public Prosecutor.'
    },
    {
      id: 'AUD-99177',
      timestamp: '2026-09-17 17:15:33',
      user: 'Dr. Rajesh Sharma',
      role: 'Forensic Analyst',
      action: 'SIGN',
      document: 'Forensic_Disk_Image_EnCase_E01_Verification_Report.pdf',
      docId: 'DOC-88911',
      caseId: 'CASE-2026-0187',
      ipAddress: '10.14.8.10',
      status: 'SUCCESS',
      details: 'Applied ECDSA P-256 digital certificate #SIG-ECDSA-P256-42B100EE.'
    },
    {
      id: 'AUD-99176',
      timestamp: '2026-09-17 14:02:40',
      user: 'Amitav Roy',
      role: 'Administrator',
      action: 'LOGIN',
      document: 'N/A',
      docId: '-',
      caseId: '-',
      ipAddress: '10.14.2.1',
      status: 'SUCCESS',
      details: 'FIDO2 / Hardware Security Token 2FA authentication approved.'
    },
    {
      id: 'AUD-99175',
      timestamp: '2026-09-17 09:42:10',
      user: 'Inspector Vikram Malhotra',
      role: 'Investigator',
      action: 'UPLOAD',
      document: 'FIR_2026_0142_First_Information_Report_Signed.pdf',
      docId: 'DOC-88910',
      caseId: 'CASE-2026-0142',
      ipAddress: '10.14.0.12',
      status: 'SUCCESS',
      details: 'Encrypted with AES-256-GCM. SHA-256 hash anchored to audit registry.'
    }
  ],

  // Security Center Status & Health
  securityStatus: {
    systemHealth: 'SYSTEM_SECURE',
    encryptionStatus: 'Active (AES-256-GCM / FIPS 140-2 Validated)',
    authentication: 'Protected (Strict MFA / Hardware Tokens Enforced)',
    accessControl: 'Enabled (RBAC Strict Clearance Policy)',
    documentIntegrity: '99.98%',
    lastSecurityScan: '14 minutes ago',
    lastBackup: '12 minutes ago',
    activeSessions: 6,
    threatAlertsCount: 0,
    tamperIncidentsLogged: 0
  },

  // Notifications
  notifications: [
    {
      id: 'NOTIF-1',
      type: 'VERIFICATION',
      title: 'Digital Signature Authenticated',
      message: 'Forensic Lab Report DOC-88911 signed and verified with National PKI CA.',
      time: '18 minutes ago',
      unread: true,
      link: 'documents'
    },
    {
      id: 'NOTIF-2',
      type: 'SHARE',
      title: 'Document Shared with You',
      message: 'High Court Writ Order DOC-88912 shared by Adv. Ananya Deshmukh.',
      time: '1 hour ago',
      unread: true,
      link: 'documents'
    },
    {
      id: 'NOTIF-3',
      type: 'SECURITY',
      title: 'Routine Integrity Scan Complete',
      message: '12,458 legal artifacts scanned across distributed storage. 0 anomalies detected.',
      time: '2 hours ago',
      unread: false,
      link: 'security'
    },
    {
      id: 'NOTIF-4',
      type: 'CASE',
      title: 'Case Milestone Updated',
      message: 'CASE-2026-0187 status updated to "Evidence Corroborated".',
      time: '3 hours ago',
      unread: false,
      link: 'cases'
    }
  ],

  // Helper State Modifiers
  addAuditLog(entry) {
    const logItem = {
      id: `AUD-${Math.floor(10000 + Math.random() * 90000)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      user: this.currentUser.name,
      role: this.currentUser.role,
      ipAddress: '10.14.0.12',
      status: 'SUCCESS',
      ...entry
    };
    this.auditLogs.unshift(logItem);
    return logItem;
  },

  addDocument(doc) {
    this.documents.unshift(doc);
    this.addAuditLog({
      action: 'UPLOAD',
      document: doc.name,
      docId: doc.id,
      caseId: doc.caseId,
      details: `Document uploaded. Classification: ${doc.classification}. SHA-256: ${doc.sha256.substring(0, 16)}...`
    });
    this.notifications.unshift({
      id: `NOTIF-${Date.now()}`,
      type: 'UPLOAD',
      title: 'Secure Document Uploaded',
      message: `${doc.name} assigned to ${doc.caseId}`,
      time: 'Just now',
      unread: true,
      link: 'documents'
    });
  },

  switchUserRole(roleName) {
    const matchedUser = this.users.find(u => u.role === roleName) || this.users[0];
    this.currentUser = {
      ...matchedUser,
      avatar: matchedUser.name.split(' ').map(n => n[0]).join('').substring(0, 2),
      isAuthenticated: true
    };
    this.addAuditLog({
      action: 'LOGIN',
      document: 'N/A',
      docId: '-',
      caseId: '-',
      details: `Role switched to ${roleName} (${matchedUser.name}).`
    });
  }
};
