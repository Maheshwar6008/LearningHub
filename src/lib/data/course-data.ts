// Course Data Structure for Microsoft Purview Training Platform

export interface TrainerNote {
  talkingPoints: string[];
  realExamples: string[];
  questionsToAsk: string[];
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  duration: string;
  content: {
    explanation: string[];
    keyPoints: string[];
    architecture?: {
      title: string;
      steps: {
        step: number;
        title: string;
        description: string;
        icon?: string;
      }[];
    };
    whyItMatters: string;
    commonMistakes: string[];
    interviewTips: string[];
    examTips: string[];
  };
  trainerNotes: TrainerNote;
  completed?: boolean;
}

export interface Module {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  lessons: Lesson[];
  duration: string;
}

export interface CourseData {
  title: string;
  subtitle: string;
  trainer: {
    name: string;
    title: string;
    email: string;
    linkedin?: string;
  };
  duration: string;
  prerequisites: string[];
  whatYouWillLearn: string[];
  targetAudience: string[];
  modules: Module[];
}

export const courseData: CourseData = {
  title: "Microsoft Purview",
  subtitle: "Enterprise Information Protection & Governance",
  trainer: {
    name: "Maheshwar",
    title: "Infrastructure & Cloud Administrator (HCLTech)",
    email: "maheshwarkumar5629@gmail.com",
    linkedin: "https://www.linkedin.com/in/maheshwar-kumar-0092832b7/",
  },
  duration: "8-12 hours",
  prerequisites: [
    "Basic understanding of Microsoft 365 administration",
    "Familiarity with SharePoint, OneDrive, and Exchange concepts",
    "Understanding of organizational data governance needs",
    "Access to Microsoft 365 E5 or E5 Compliance trial recommended",
  ],
  whatYouWillLearn: [
    "Understand the complete Microsoft Purview compliance suite",
    "Configure and deploy Data Loss Prevention (DLP) policies",
    "Create and manage Sensitive Information Types (SITs)",
    "Implement information protection with sensitivity labels",
    "Monitor compliance with alerts, reports, and Activity Explorer",
    "Apply DLP across Exchange, SharePoint, OneDrive, Teams, and Endpoints",
  ],
  targetAudience: [
    "IT Administrators managing Microsoft 365",
    "Security & Compliance Officers",
    "Data Protection Officers (DPOs)",
    "Microsoft 365 Architects",
    "Professionals preparing for SC-401 certification",
  ],
  modules: [
    {
      id: "module-1",
      title: "Introduction to Microsoft Purview",
      slug: "introduction",
      description: "Understanding the fundamentals of Microsoft Purview and its role in enterprise compliance",
      icon: "Shield",
      duration: "1.5 hours",
      lessons: [
        {
          id: "lesson-1-1",
          title: "What is Microsoft Purview?",
          slug: "what-is-purview",
          duration: "20 mins",
          content: {
            explanation: [
              "Microsoft Purview is a unified data governance and compliance solution that helps organizations manage, protect, and govern their data across the entire data estate.",
              "Originally known as Microsoft 365 Compliance, Purview now extends beyond Microsoft 365 to cover hybrid and multi-cloud environments, including Azure, AWS, and on-premises data sources.",
              "Purview brings together capabilities from Azure Purview (data governance) and Microsoft 365 Compliance (information protection) into a single, comprehensive platform.",
            ],
            keyPoints: [
              "Unified platform for data governance and compliance",
              "Covers Microsoft 365, Azure, AWS, and on-premises",
              "Includes Data Loss Prevention, Information Protection, eDiscovery, and more",
              "Helps organizations meet regulatory requirements (GDPR, HIPAA, etc.)",
              "Provides visibility into where sensitive data resides",
            ],
            architecture: {
              title: "Microsoft Purview Components",
              steps: [
                { step: 1, title: "Data Map", description: "Automated data discovery and classification across your entire data estate", icon: "Map" },
                { step: 2, title: "Data Catalog", description: "Business glossary and data asset management for data consumers", icon: "BookOpen" },
                { step: 3, title: "Data Estate Insights", description: "Analytics and reporting on data governance health", icon: "BarChart3" },
                { step: 4, title: "Information Protection", description: "Sensitivity labels and encryption to protect sensitive data", icon: "Lock" },
                { step: 5, title: "Data Loss Prevention", description: "Policies to prevent accidental data leakage", icon: "ShieldAlert" },
                { step: 6, title: "Compliance Manager", description: "Assess and improve compliance posture against regulations", icon: "ClipboardCheck" },
              ],
            },
            whyItMatters: "In today's data-driven world, organizations face increasing pressure to protect sensitive information while remaining compliant with ever-evolving regulations. A data breach can cost millions in fines and reputation damage. Microsoft Purview provides the tools to proactively identify, classify, and protect sensitive data before it becomes a liability.",
            commonMistakes: [
              "Confusing Purview with just DLP - it's a comprehensive platform",
              "Not understanding the difference between Azure Purview and M365 Compliance features",
              "Ignoring data sources outside of Microsoft 365",
              "Deploying without proper planning and stakeholder involvement",
            ],
            interviewTips: [
              "Explain how Purview differs from standalone DLP solutions",
              "Discuss the evolution from Microsoft 365 Compliance to Purview",
              "Mention cross-cloud and hybrid capabilities",
              "Reference real regulatory requirements Purview helps address",
            ],
            examTips: [
              "Know the difference between Purview governance and compliance features",
              "Understand which licenses include which Purview capabilities",
              "Be familiar with the Purview portal navigation",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Start with a relatable data breach story to set context",
              "Emphasize the unified nature - one portal, multiple capabilities",
              "Mention the rebranding history to help those who knew it as M365 Compliance",
              "Highlight that this is Microsoft's strategic direction for compliance",
            ],
            realExamples: [
              "A financial services company used Purview to discover PCI data in unexpected SharePoint sites",
              "Healthcare org achieved HIPAA compliance tracking through Compliance Manager",
              "Retail company prevented accidental credit card data sharing via Teams",
            ],
            questionsToAsk: [
              "What compliance requirements does your organization currently face?",
              "Where do you think your sensitive data currently resides?",
              "Have you experienced any data leakage incidents?",
            ],
          },
        },
        {
          id: "lesson-1-2",
          title: "Compliance vs Security: Understanding the Difference",
          slug: "compliance-vs-security",
          duration: "15 mins",
          content: {
            explanation: [
              "Security and Compliance are related but distinct disciplines. Security focuses on protecting systems and data from threats, while Compliance ensures adherence to laws, regulations, and internal policies.",
              "Microsoft Defender handles security (threat protection, vulnerability management), while Microsoft Purview handles compliance (data governance, DLP, eDiscovery, records management).",
              "In practice, they work together: Security protects from external threats, Compliance protects from internal risks and ensures regulatory adherence.",
            ],
            keyPoints: [
              "Security = Protection from threats (external focus)",
              "Compliance = Adherence to regulations (internal/regulatory focus)",
              "Microsoft Defender = Security suite",
              "Microsoft Purview = Compliance suite",
              "Both are needed for comprehensive data protection",
            ],
            architecture: {
              title: "Security vs Compliance Stack",
              steps: [
                { step: 1, title: "Microsoft Defender", description: "Threat protection, XDR, vulnerability management, SIEM/SOAR", icon: "Sword" },
                { step: 2, title: "Microsoft Purview", description: "DLP, Information Protection, eDiscovery, Compliance Manager", icon: "Shield" },
                { step: 3, title: "Integration Layer", description: "Signals flow between both for comprehensive protection", icon: "Link" },
                { step: 4, title: "Unified Admin", description: "Microsoft 365 Admin Center for centralized management", icon: "Settings" },
              ],
            },
            whyItMatters: "Organizations often conflate security and compliance, leading to gaps in protection. A secure environment might still be non-compliant, and a compliant environment might still be vulnerable. Understanding the distinction helps allocate resources correctly and ensures nothing falls through the cracks.",
            commonMistakes: [
              "Assuming antivirus/firewall covers compliance requirements",
              "Treating compliance as a checkbox exercise rather than ongoing process",
              "Not involving legal/compliance teams in security decisions",
              "Ignoring insider threat aspects of compliance",
            ],
            interviewTips: [
              "Clearly articulate the difference between security and compliance",
              "Explain how DLP differs from threat protection",
              "Discuss the overlap and integration points",
            ],
            examTips: [
              "Know which features belong to Defender vs Purview",
              "Understand when to use which tool for specific scenarios",
              "Remember: Purview = data governance, Defender = threat protection",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Use the 'locks on doors vs fire safety codes' analogy",
              "Security = keeping bad guys out, Compliance = following rules",
              "Emphasize both are needed - not either/or",
              "Mention the organizational structures - CISO vs CCO",
            ],
            realExamples: [
              "Company had great security but failed GDPR audit due to lack of data classification",
              "Organization was compliant but got breached due to weak password policies",
            ],
            questionsToAsk: [
              "Who handles compliance in your organization? Security team or separate?",
              "What regulations must your organization comply with?",
              "How do your security and compliance teams collaborate?",
            ],
          },
        },
        {
          id: "lesson-1-3",
          title: "Licensing Overview",
          slug: "licensing",
          duration: "25 mins",
          content: {
            explanation: [
              "Microsoft Purview features are available across different Microsoft 365 and standalone licenses. Understanding licensing is crucial for planning deployments and managing costs.",
              "The main license tiers are: Microsoft 365 E3/E5, Office 365 E3/E5, and standalone compliance add-ons like Microsoft 365 E5 Compliance or E5 Information Protection & Governance.",
              "Some features like basic DLP are available in E3, while advanced features like Endpoint DLP, exact data match, and advanced trainable classifiers require E5 or compliance add-ons.",
            ],
            keyPoints: [
              "E3 = Basic DLP for Exchange, SharePoint, OneDrive",
              "E5 = Advanced DLP including Endpoint DLP, exact data match",
              "E5 Compliance add-on = Full Purview suite without full E5",
              "E5 Info Protection add-on = Focus on protection features",
              "Always check current licensing docs - Microsoft updates frequently",
            ],
            architecture: {
              title: "License Tiers & Features",
              steps: [
                { step: 1, title: "Microsoft 365 E3", description: "Basic DLP, basic sensitivity labels, basic retention", icon: "Package" },
                { step: 2, title: "Microsoft 365 E5", description: "Full DLP, auto-labeling, advanced classifiers, endpoint DLP", icon: "PackageCheck" },
                { step: 3, title: "E5 Compliance Add-on", description: "Add E5 compliance features to E3 base", icon: "PackagePlus" },
                { step: 4, title: "E5 Info Protection Add-on", description: "Focused on classification and protection", icon: "Shield" },
              ],
            },
            whyItMatters: "Incorrect licensing leads to either overspending on unused features or compliance gaps from missing capabilities. Many organizations discover mid-deployment that they need additional licenses, causing project delays and budget overruns.",
            commonMistakes: [
              "Assuming all DLP features come with E3",
              "Not accounting for endpoint DLP requiring E5",
              "Forgetting that users receiving protected content may need licenses",
              "Not planning for license consumption by service accounts",
            ],
            interviewTips: [
              "Show awareness of licensing complexity",
              "Mention the importance of license planning in project scoping",
              "Discuss cost optimization strategies",
            ],
            examTips: [
              "Know which features require E5 vs E3",
              "Understand the compliance add-on options",
              "Remember: Endpoint DLP always requires E5 or add-on",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Licensing is a common pain point - acknowledge it",
              "Recommend always checking Microsoft docs as it changes",
              "Discuss trials available for testing",
              "Mention license assignment vs feature availability",
            ],
            realExamples: [
              "Company deployed DLP policies but endpoint DLP failed because E3 licenses",
              "Organization saved money using E5 Compliance add-on instead of full E5",
            ],
            questionsToAsk: [
              "What Microsoft 365 licenses does your organization currently have?",
              "Have you encountered licensing issues with compliance features before?",
              "Is budget a constraint for your compliance initiatives?",
            ],
          },
        },
        {
          id: "lesson-1-4",
          title: "Real-World Use Cases",
          slug: "use-cases",
          duration: "30 mins",
          content: {
            explanation: [
              "Microsoft Purview addresses diverse compliance challenges across industries. From preventing financial data leakage in banking to protecting patient information in healthcare, the platform adapts to various regulatory environments.",
              "Common use cases include: preventing accidental sharing of sensitive data, meeting regulatory requirements like GDPR or HIPAA, enabling secure collaboration with external partners, and maintaining audit trails for legal holds.",
              "Organizations typically start with one use case (often DLP) and expand to other Purview features as they mature their compliance posture.",
            ],
            keyPoints: [
              "Financial Services: PCI-DSS compliance, preventing credit card data leakage",
              "Healthcare: HIPAA compliance, protecting PHI",
              "Legal: eDiscovery, legal holds, privilege review",
              "Government: Data residency, classification requirements",
              "Retail: Customer data protection, PCI compliance",
            ],
            architecture: {
              title: "Common Implementation Journey",
              steps: [
                { step: 1, title: "Discovery", description: "Understand where sensitive data exists using Content Explorer", icon: "Search" },
                { step: 2, title: "Classification", description: "Apply sensitivity labels and SITs to categorize data", icon: "Tags" },
                { step: 3, title: "Protection", description: "Deploy DLP policies to prevent leakage", icon: "Shield" },
                { step: 4, title: "Governance", description: "Implement retention and records management", icon: "Archive" },
                { step: 5, title: "Monitoring", description: "Continuous compliance monitoring and reporting", icon: "Activity" },
              ],
            },
            whyItMatters: "Seeing how other organizations use Purview helps in planning your own deployment. It validates the investment, provides implementation patterns to follow, and helps identify use cases you might not have considered.",
            commonMistakes: [
              "Starting too broadly - pick one use case first",
              "Not involving business stakeholders in use case definition",
              "Ignoring user experience in policy design",
              "Forgetting to measure success metrics",
            ],
            interviewTips: [
              "Describe specific scenarios you've implemented or would implement",
              "Mention industry-specific requirements",
              "Discuss phased implementation approaches",
            ],
            examTips: [
              "Know common regulatory frameworks and which Purview features address them",
              "Understand the recommended implementation sequence",
              "Be familiar with Compliance Manager assessment templates",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Share relevant industry examples based on audience",
              "Emphasize starting small and iterating",
              "Discuss the importance of quick wins for stakeholder buy-in",
              "Mention the Compliance Manager pre-built assessments",
            ],
            realExamples: [
              "Bank detected and blocked SSN sharing via Teams within first week of DLP deployment",
              "Law firm used eDiscovery to reduce document review time by 60%",
              "Healthcare provider avoided HIPAA fine by proving data protection measures",
            ],
            questionsToAsk: [
              "What would be your organization's first priority use case?",
              "What sensitive data types are most critical to protect?",
              "Have you faced any compliance audits recently?",
            ],
          },
        },
      ],
    },
    {
      id: "module-2",
      title: "Data Classification & Sensitive Information Types",
      slug: "classification",
      description: "Learn to identify and classify sensitive data using built-in and custom Sensitive Information Types",
      icon: "Tags",
      duration: "2 hours",
      lessons: [
        {
          id: "lesson-2-1",
          title: "Understanding Sensitive Information Types (SITs)",
          slug: "sits-overview",
          duration: "25 mins",
          content: {
            explanation: [
              "Sensitive Information Types (SITs) are pattern definitions used to identify sensitive data like credit card numbers, social security numbers, or custom organizational data patterns.",
              "Microsoft provides over 300 built-in SITs covering various data types across regions and industries. These include financial data (credit cards, bank accounts), personal identifiers (SSN, passport numbers), and health information.",
              "SITs use a combination of patterns (regex), keywords, checksums, and proximity rules to accurately identify sensitive data while minimizing false positives.",
            ],
            keyPoints: [
              "SITs are the foundation of DLP and auto-labeling",
              "300+ built-in SITs available out of the box",
              "Use regex patterns, keywords, and checksums",
              "Confidence levels (low, medium, high) indicate match accuracy",
              "Custom SITs can be created for organization-specific data",
            ],
            architecture: {
              title: "SIT Detection Components",
              steps: [
                { step: 1, title: "Primary Pattern", description: "Regex pattern matching the core data format (e.g., 16-digit number)", icon: "Code" },
                { step: 2, title: "Supporting Keywords", description: "Corroborating keywords near the pattern (e.g., 'credit card', 'expiry')", icon: "FileText" },
                { step: 3, title: "Checksum Validation", description: "Mathematical validation (e.g., Luhn algorithm for credit cards)", icon: "Calculator" },
                { step: 4, title: "Proximity Rules", description: "Keywords must be within specified character distance", icon: "Ruler" },
                { step: 5, title: "Confidence Score", description: "Combined factors determine low/medium/high confidence", icon: "Gauge" },
              ],
            },
            whyItMatters: "Accurate data classification is the foundation of all compliance activities. If you can't identify sensitive data, you can't protect it. Poor SIT configuration leads to either missed detections (compliance risk) or excessive false positives (user frustration).",
            commonMistakes: [
              "Using only pattern matching without keywords",
              "Not testing SITs before deploying in production",
              "Setting confidence too low, causing false positives",
              "Ignoring regional variations in data formats",
            ],
            interviewTips: [
              "Explain the multi-factor approach to SIT detection",
              "Discuss confidence levels and their implications",
              "Describe how you would tune SITs to reduce false positives",
            ],
            examTips: [
              "Know the components of a SIT definition",
              "Understand confidence level implications for policies",
              "Be familiar with common built-in SITs",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Start with a simple example - credit card detection",
              "Show how just regex would match phone numbers too",
              "Explain why keywords and checksums matter",
              "Demonstrate in the Purview portal if possible",
            ],
            realExamples: [
              "Credit card SIT uses Luhn algorithm to validate - random 16 digits won't match",
              "SSN detection requires keywords like 'social security' nearby to avoid phone numbers",
            ],
            questionsToAsk: [
              "What types of sensitive data does your organization handle?",
              "Have you experienced false positive issues with current detection?",
              "Do you have organization-specific data formats?",
            ],
          },
        },
        {
          id: "lesson-2-2",
          title: "Built-in vs Custom SITs",
          slug: "builtin-custom-sits",
          duration: "30 mins",
          content: {
            explanation: [
              "Built-in SITs are pre-configured by Microsoft and cover common sensitive data types globally. They're maintained and updated by Microsoft, requiring no configuration to use.",
              "Custom SITs allow organizations to define patterns specific to their business - employee IDs, project codes, proprietary data formats, or regional identifiers not covered by built-in types.",
              "You can also clone and modify built-in SITs to adjust confidence levels, add keywords, or fine-tune detection for your environment.",
            ],
            keyPoints: [
              "Built-in: Ready to use, Microsoft maintained, global coverage",
              "Custom: Organization-specific patterns and keywords",
              "Clone option: Modify built-in SITs for fine-tuning",
              "EDM (Exact Data Match): Match against actual data tables",
              "Trainable Classifiers: ML-based classification for complex content",
            ],
            architecture: {
              title: "SIT Types Comparison",
              steps: [
                { step: 1, title: "Built-in SITs", description: "300+ ready-to-use patterns (SSN, Credit Cards, IBANs)", icon: "Package" },
                { step: 2, title: "Custom SITs", description: "Organization-specific patterns (Employee ID, Project codes)", icon: "Wrench" },
                { step: 3, title: "Exact Data Match", description: "Match against actual sensitive data tables", icon: "Database" },
                { step: 4, title: "Trainable Classifiers", description: "ML models for content types (contracts, resumes)", icon: "Brain" },
              ],
            },
            whyItMatters: "Every organization has unique data that built-in SITs won't cover. Custom SITs ensure your proprietary information is protected. Conversely, over-relying on custom SITs when built-in ones exist wastes effort and may be less accurate.",
            commonMistakes: [
              "Creating custom SITs for patterns Microsoft already provides",
              "Not testing custom SIT accuracy before production",
              "Making regex patterns too broad or too narrow",
              "Forgetting to update custom SITs when data formats change",
            ],
            interviewTips: [
              "Explain when you would use each type",
              "Describe the process of creating a custom SIT",
              "Discuss EDM for exact matching scenarios",
            ],
            examTips: [
              "Know the process to create custom SITs",
              "Understand EDM requirements and setup",
              "Know when trainable classifiers are appropriate",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Show the built-in SIT gallery in the portal",
              "Walk through custom SIT creation",
              "Explain EDM with a practical example",
              "Mention trainable classifiers for complex content",
            ],
            realExamples: [
              "Manufacturing company created custom SIT for part numbers with specific prefix",
              "Bank used EDM to detect their actual account numbers vs generic patterns",
            ],
            questionsToAsk: [
              "Do you have internal ID formats that need protection?",
              "Would matching against actual data tables be useful?",
              "What content types are difficult to classify with patterns alone?",
            ],
          },
        },
        {
          id: "lesson-2-3",
          title: "Financial Data Detection",
          slug: "financial-data",
          duration: "25 mins",
          content: {
            explanation: [
              "Financial data is among the most commonly protected information types. Microsoft provides extensive built-in SITs for credit cards, bank account numbers, IBANs, SWIFT codes, and tax identification numbers across multiple regions.",
              "PCI-DSS compliance requires protection of cardholder data, making credit card detection a critical use case. The built-in Credit Card Number SIT uses the Luhn algorithm for validation.",
              "Beyond payment card data, organizations must protect bank account details, investment information, and financial documents like invoices and statements.",
            ],
            keyPoints: [
              "Credit Card Number SIT: 16-digit format with Luhn validation",
              "ABA Routing Number: US bank routing codes",
              "IBAN: International Bank Account Numbers (country-specific)",
              "SWIFT Codes: Bank identification for international transfers",
              "Tax IDs: SSN, ITIN, EIN and regional equivalents",
            ],
            whyItMatters: "Financial data breaches have severe consequences: PCI-DSS fines can reach $100,000 per month, plus forensic costs, card replacement, and reputation damage. Proper detection prevents accidental exposure in emails, chats, and shared files.",
            commonMistakes: [
              "Not detecting partial credit card numbers (first/last 4 digits)",
              "Ignoring regional bank account formats",
              "Forgetting about financial data in images or scanned documents",
              "Not covering all channels where financial data might be shared",
            ],
            interviewTips: [
              "Discuss PCI-DSS requirements and how DLP helps",
              "Mention the Luhn algorithm and why it matters",
              "Explain how to handle false positives with test card numbers",
            ],
            examTips: [
              "Know common financial SITs and their detection methods",
              "Understand PCI-DSS scope",
              "Know how to exclude test/development environments",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Credit card detection demo - show Luhn validation in action",
              "Discuss the 'proximity' setting for keywords",
              "Mention false positives with sequential numbers",
              "Cover OCR for detecting financial data in images",
            ],
            realExamples: [
              "E-commerce company detected customer card data being shared in support tickets",
              "Finance team accidentally shared bank account spreadsheet via Teams",
            ],
            questionsToAsk: [
              "How does your organization handle payment card data today?",
              "Have you achieved PCI-DSS compliance?",
              "Where might financial data appear unexpectedly?",
            ],
          },
        },
        {
          id: "lesson-2-4",
          title: "Employee PII Detection",
          slug: "employee-pii",
          duration: "25 mins",
          content: {
            explanation: [
              "Employee Personally Identifiable Information (PII) includes social security numbers, passport numbers, driver's license numbers, addresses, phone numbers, and health information.",
              "Organizations have legal obligations under GDPR, CCPA, and other privacy regulations to protect employee data. HR departments often handle sensitive data that requires strict access controls.",
              "Beyond legal requirements, protecting employee PII builds trust and prevents identity theft and fraud targeting your workforce.",
            ],
            keyPoints: [
              "SSN/National IDs: Country-specific formats with validation",
              "Passport Numbers: Various formats by issuing country",
              "Health Information: PHI under HIPAA, medical conditions",
              "Contact Information: Home addresses, personal phone numbers",
              "Financial: Salary information, bank details for payroll",
            ],
            whyItMatters: "A breach of employee data can result in identity theft affecting your workforce, GDPR fines up to €20 million or 4% of revenue, and loss of employee trust. HR systems are increasingly targeted by attackers who know the value of PII.",
            commonMistakes: [
              "Focusing only on customer data, ignoring employee data",
              "Not protecting PII in performance reviews and HR documents",
              "Allowing bulk export of employee data without controls",
              "Forgetting contractors and former employees",
            ],
            interviewTips: [
              "Discuss privacy regulations and employee rights",
              "Explain the balance between HR operations and protection",
              "Mention insider threat scenarios",
            ],
            examTips: [
              "Know various national ID formats",
              "Understand GDPR and HIPAA requirements for PII",
              "Know how to scope policies to HR sites and groups",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "HR is often overlooked in DLP planning",
              "Discuss the sensitivity of performance reviews, disciplinary records",
              "Mention the W-2 phishing scams targeting HR",
              "Cover exceptions needed for legitimate HR operations",
            ],
            realExamples: [
              "HR accidentally emailed salary spreadsheet to all employees",
              "Former HR employee downloaded entire employee database before leaving",
            ],
            questionsToAsk: [
              "How is HR data currently protected in your organization?",
              "Do you have different protection levels for HR data?",
              "What happens when an HR employee leaves?",
            ],
          },
        },
        {
          id: "lesson-2-5",
          title: "Detection Logic Deep Dive",
          slug: "detection-logic",
          duration: "35 mins",
          content: {
            explanation: [
              "Understanding detection logic is crucial for tuning policies and troubleshooting false positives/negatives. DLP detection combines multiple signals: SIT matches, content location, sender/recipient, file properties, and more.",
              "Confidence levels (Low: 65%, Medium: 75%, High: 85%) are calculated based on how many supporting elements are present. A credit card number alone might be low confidence, but with expiry date and CVV keywords, it becomes high confidence.",
              "Instance counts matter too: detecting 1-9 instances might trigger a warning, while 10+ instances triggers blocking. This helps distinguish between incidental mentions and actual data exfiltration.",
            ],
            keyPoints: [
              "Primary Element: The core pattern being matched",
              "Supporting Elements: Keywords, additional patterns within proximity",
              "Confidence Levels: Low (65%), Medium (75%), High (85%)",
              "Instance Count: How many matches trigger which action",
              "Proximity: Character distance for supporting elements",
            ],
            architecture: {
              title: "Detection Logic Flow",
              steps: [
                { step: 1, title: "Content Scan", description: "Document/email/message is scanned for patterns", icon: "Scan" },
                { step: 2, title: "Pattern Match", description: "Primary patterns are identified (regex, checksums)", icon: "Search" },
                { step: 3, title: "Context Analysis", description: "Supporting keywords checked within proximity", icon: "FileSearch" },
                { step: 4, title: "Confidence Calculation", description: "Score calculated based on elements present", icon: "Calculator" },
                { step: 5, title: "Threshold Check", description: "Instance count compared to policy thresholds", icon: "CheckCircle" },
                { step: 6, title: "Action Trigger", description: "Appropriate action taken based on match", icon: "Zap" },
              ],
            },
            whyItMatters: "Misconfigured detection logic leads to either missed detections (risk) or excessive false positives (user frustration and policy fatigue). Understanding these mechanics lets you fine-tune policies for optimal balance.",
            commonMistakes: [
              "Using low confidence when high is needed",
              "Setting instance counts too low for normal business use",
              "Not understanding proximity implications",
              "Ignoring the 'unique' vs 'any' instance count option",
            ],
            interviewTips: [
              "Explain confidence levels and how to choose",
              "Describe a troubleshooting scenario for false positives",
              "Discuss tuning strategies",
            ],
            examTips: [
              "Know the default confidence percentages",
              "Understand instance count configurations",
              "Know how proximity affects detection",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Walk through a detection example step by step",
              "Show how adding keywords changes confidence",
              "Demonstrate instance count scenarios",
              "Discuss the 'test' mode for tuning",
            ],
            realExamples: [
              "Policy blocked emails mentioning invoice numbers because instance count was 1",
              "False positives reduced 80% by requiring 'high confidence' matches",
            ],
            questionsToAsk: [
              "Have you experienced issues with false positives?",
              "What confidence level seems right for your environment?",
              "How much sensitive data is typically in one document?",
            ],
          },
        },
      ],
    },
    {
      id: "module-3",
      title: "Data Loss Prevention (DLP)",
      slug: "dlp",
      description: "Master the core DLP capabilities - policy creation, scoping, and enforcement across Microsoft 365",
      icon: "ShieldAlert",
      duration: "3 hours",
      lessons: [
        {
          id: "lesson-3-1",
          title: "DLP Architecture Overview",
          slug: "dlp-architecture",
          duration: "30 mins",
          content: {
            explanation: [
              "Microsoft 365 DLP operates through a unified policy framework that evaluates content across Exchange Online, SharePoint Online, OneDrive for Business, Microsoft Teams, and Windows/Mac endpoints.",
              "DLP policies consist of rules that combine conditions (what to look for), exceptions (what to ignore), and actions (what to do when matched). Multiple rules can exist within a single policy with different severity levels.",
              "The evaluation engine processes content at multiple points: when created, modified, shared, or moved. This ensures protection throughout the content lifecycle.",
            ],
            keyPoints: [
              "Unified Policy Engine: One policy framework across all workloads",
              "Real-time Evaluation: Content checked on creation, modification, sharing",
              "Rule Hierarchy: Multiple rules with priority ordering",
              "Override Options: User justification for legitimate business needs",
              "Incident Reporting: Automatic alerts and reports for matches",
            ],
            architecture: {
              title: "DLP Evaluation Flow",
              steps: [
                { step: 1, title: "Content Created", description: "User creates document, email, or chat message", icon: "FilePlus" },
                { step: 2, title: "Policy Evaluation", description: "Content scanned against active DLP policies", icon: "Scan" },
                { step: 3, title: "Rule Matching", description: "Conditions checked, SITs evaluated, exceptions applied", icon: "Filter" },
                { step: 4, title: "Action Determination", description: "Matched rule's action selected (notify, block, etc.)", icon: "Zap" },
                { step: 5, title: "User Notification", description: "Policy tip shown to user if configured", icon: "Bell" },
                { step: 6, title: "Incident Logging", description: "Match logged for reporting and investigation", icon: "FileText" },
              ],
            },
            whyItMatters: "Understanding the architecture helps in designing effective policies, troubleshooting issues, and explaining behavior to users. Knowing where and when evaluation occurs helps predict how policies will affect user experience.",
            commonMistakes: [
              "Not understanding policy evaluation order",
              "Expecting real-time sync across all workloads",
              "Ignoring the content indexing dependency",
              "Not planning for evaluation at rest vs in transit",
            ],
            interviewTips: [
              "Explain the unified policy concept",
              "Discuss workload-specific behaviors",
              "Mention the evaluation trigger points",
            ],
            examTips: [
              "Know which workloads support which DLP features",
              "Understand policy processing order",
              "Know the difference between policy modes (test, enforce)",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Draw the architecture on whiteboard/screen",
              "Explain how policies sync across services",
              "Discuss latency in policy application",
              "Mention the dependency on search indexing for SharePoint/OneDrive",
            ],
            realExamples: [
              "Policy applied to email within minutes, but SharePoint took hours due to indexing",
              "Teams message blocked before send but document shared before policy synced",
            ],
            questionsToAsk: [
              "Which workloads are most critical for your organization?",
              "Have you seen differences in policy application across services?",
              "What's your tolerance for policy application latency?",
            ],
          },
        },
        {
          id: "lesson-3-2",
          title: "Policy Scoping & Targeting",
          slug: "policy-scoping",
          duration: "30 mins",
          content: {
            explanation: [
              "Policy scoping determines WHERE policies apply: which locations (Exchange, SharePoint, Teams, etc.), which users or groups, and which sites or channels.",
              "Effective scoping starts broad and narrows down, or starts targeted and expands. Common approaches include: geographic scoping (EU data subjects), departmental scoping (HR, Finance), or data-type scoping (PCI data).",
              "Exclusions are as important as inclusions: you need to exclude test environments, shared mailboxes, or specific roles that legitimately handle sensitive data (like fraud investigation teams).",
            ],
            keyPoints: [
              "Location Scoping: Select specific services to protect",
              "User/Group Scoping: Target specific users, groups, or distribution lists",
              "Site Scoping: Target specific SharePoint sites or OneDrive accounts",
              "Exclusions: Accounts, groups, or sites to exempt",
              "Adaptive Scopes: Dynamic scoping using user/site attributes",
            ],
            architecture: {
              title: "Scoping Hierarchy",
              steps: [
                { step: 1, title: "Locations", description: "Exchange, SharePoint, OneDrive, Teams, Endpoints, Power BI", icon: "MapPin" },
                { step: 2, title: "Accounts/Groups", description: "Include/exclude specific users, DLs, security groups", icon: "Users" },
                { step: 3, title: "Sites/URLs", description: "Specific SharePoint sites or OneDrive URLs", icon: "Globe" },
                { step: 4, title: "Adaptive Scopes", description: "Dynamic queries based on user/site properties", icon: "Sparkles" },
              ],
            },
            whyItMatters: "Poor scoping leads to gaps (missing coverage) or overreach (blocking legitimate work). Proper scoping ensures protection without disrupting business operations and makes policy management maintainable.",
            commonMistakes: [
              "Applying policies too broadly initially",
              "Forgetting to exclude test/dev environments",
              "Not using groups for easier management",
              "Hardcoding users instead of using dynamic groups",
            ],
            interviewTips: [
              "Discuss a phased rollout approach",
              "Explain adaptive scopes and their benefits",
              "Mention how to handle exceptions properly",
            ],
            examTips: [
              "Know the available scoping options per location",
              "Understand adaptive scope capabilities",
              "Know licensing requirements for advanced scoping",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Start with a pilot group approach",
              "Explain adaptive scopes - dynamic vs static",
              "Discuss the 'all locations' option and its implications",
              "Show scoping configuration in the portal",
            ],
            realExamples: [
              "Company started with Finance department, then expanded to all",
              "Test environment was included accidentally, blocking test data",
            ],
            questionsToAsk: [
              "Which groups or departments would you pilot first?",
              "Do you have test environments that need exclusion?",
              "Are there roles that legitimately handle sensitive data?",
            ],
          },
        },
        {
          id: "lesson-3-3",
          title: "Internal vs External Controls",
          slug: "internal-external",
          duration: "25 mins",
          content: {
            explanation: [
              "DLP can apply different controls based on whether data is being shared internally (within the organization) or externally (outside the organization). This recognizes that internal sharing often has lower risk than external.",
              "External sharing controls are typically stricter: blocking or requiring justification. Internal sharing might just show a warning or require encryption without blocking.",
              "The definition of 'external' includes: external email domains, guest users in Teams/SharePoint, and sharing links accessible outside the organization.",
            ],
            keyPoints: [
              "Internal: Members of your tenant, internal email domains",
              "External: Outside email domains, guest users, anonymous links",
              "Graduated Response: Warn internally, block externally",
              "Guest User Detection: Specific handling for B2B guests",
              "Domain Whitelisting: Trusted partner domains",
            ],
            whyItMatters: "Most data breaches involve external sharing. By applying stricter controls to external sharing while allowing internal collaboration, you balance protection with productivity.",
            commonMistakes: [
              "Treating internal and external the same",
              "Not considering guest users as external",
              "Forgetting about anonymous sharing links",
              "Blocking external when warning would suffice",
            ],
            interviewTips: [
              "Explain graduated response strategy",
              "Discuss partner domain exceptions",
              "Mention how to handle M&A scenarios",
            ],
            examTips: [
              "Know how external recipients are identified",
              "Understand guest user policies",
              "Know anonymous link handling",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Draw internal vs external boundary",
              "Discuss the trust model",
              "Explain domain whitelisting for partners",
              "Cover the guest user scenario in Teams",
            ],
            realExamples: [
              "Sales team blocked from sending pricing to external - needed exception for customers",
              "Guest user in Teams triggered external policy unexpectedly",
            ],
            questionsToAsk: [
              "Does your organization regularly share with external partners?",
              "Are there trusted domains that should be treated differently?",
              "How do you handle guest user access currently?",
            ],
          },
        },
        {
          id: "lesson-3-4",
          title: "DLP in SharePoint & OneDrive",
          slug: "dlp-sharepoint-onedrive",
          duration: "30 mins",
          content: {
            explanation: [
              "SharePoint and OneDrive DLP protects data at rest (stored files) and at the point of sharing. It can block downloads, sharing, and even access to matched files.",
              "DLP for these services depends on the search index - files must be indexed before policy evaluation. New or modified files may have a delay before policies apply.",
              "Sharing link types matter: organization-wide links, specific people links, and anonymous links each have different policy implications.",
            ],
            keyPoints: [
              "File Scanning: Content indexed and scanned for SIT matches",
              "Sharing Controls: Block or warn on sharing externally",
              "Access Blocking: Can prevent access to matched files entirely",
              "Sync Blocking: Prevent syncing matched files to local devices",
              "Retention: DLP can trigger retention actions",
            ],
            architecture: {
              title: "SharePoint/OneDrive DLP Flow",
              steps: [
                { step: 1, title: "File Upload", description: "User uploads or creates file in SP/OD", icon: "Upload" },
                { step: 2, title: "Indexing", description: "File content indexed by search service", icon: "Search" },
                { step: 3, title: "Policy Scan", description: "Indexed content scanned against DLP policies", icon: "Scan" },
                { step: 4, title: "Match Detection", description: "SITs detected, confidence calculated", icon: "AlertTriangle" },
                { step: 5, title: "Marking", description: "File marked with DLP match, icon shown", icon: "Tag" },
                { step: 6, title: "Action Enforcement", description: "Sharing/access blocked based on policy", icon: "Lock" },
              ],
            },
            whyItMatters: "SharePoint and OneDrive are where most organizational data lives. Without DLP, sensitive files can be shared with anyone with a link. Proper DLP prevents accidental and intentional data exposure.",
            commonMistakes: [
              "Expecting instant policy application (indexing delay)",
              "Not understanding the sync client implications",
              "Ignoring the 'block access' option severity",
              "Forgetting about version history",
            ],
            interviewTips: [
              "Explain the indexing dependency",
              "Discuss the various enforcement options",
              "Mention the user experience for blocked files",
            ],
            examTips: [
              "Know the different actions available for SP/OD",
              "Understand indexing latency implications",
              "Know how sensitivity labels interact with DLP",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Demo the sharing experience with DLP",
              "Show the DLP icon on matched files",
              "Explain the override experience",
              "Discuss sync client behavior",
            ],
            realExamples: [
              "File uploaded at 9am wasn't protected until 10:30am due to indexing",
              "User couldn't understand why some files showed lock icon",
            ],
            questionsToAsk: [
              "How much sensitive data is in your SharePoint/OneDrive?",
              "Do users sync files to local devices?",
              "What external sharing is currently allowed?",
            ],
          },
        },
        {
          id: "lesson-3-5",
          title: "DLP in Exchange Online",
          slug: "dlp-exchange",
          duration: "25 mins",
          content: {
            explanation: [
              "Exchange Online DLP evaluates email content (body and attachments) before delivery. It can block, redirect, or modify emails containing sensitive data.",
              "Policy tips appear in Outlook as users compose emails, providing real-time feedback before they hit send. This educates users and prevents violations proactively.",
              "Mail flow rules can complement DLP: adding disclaimers, requiring TLS encryption, or journaling matches. DLP and mail flow work together for comprehensive email protection.",
            ],
            keyPoints: [
              "Pre-Send Evaluation: Policy tips in Outlook before sending",
              "Attachment Scanning: All attachments scanned including nested",
              "Block Actions: Reject, bounce, or hold for review",
              "Redirect: Send to compliance mailbox for review",
              "Notification: Alert sender, recipient, admin",
            ],
            architecture: {
              title: "Exchange DLP Flow",
              steps: [
                { step: 1, title: "Compose", description: "User composes email with sensitive content", icon: "Edit" },
                { step: 2, title: "Policy Tip", description: "Real-time policy tip shown in Outlook", icon: "AlertTriangle" },
                { step: 3, title: "Send", description: "User sends (may override or provide justification)", icon: "Send" },
                { step: 4, title: "Transport Scan", description: "Message scanned in transport pipeline", icon: "Scan" },
                { step: 5, title: "Action", description: "Block, redirect, modify, or allow based on policy", icon: "Zap" },
                { step: 6, title: "Delivery", description: "Message delivered (or bounced/held)", icon: "Inbox" },
              ],
            },
            whyItMatters: "Email remains the primary vector for data leakage. Policy tips educate users before violations occur, while transport rules catch what policy tips miss. This dual protection significantly reduces email-based data loss.",
            commonMistakes: [
              "Relying only on transport rules, no policy tips",
              "Not scanning attachments thoroughly",
              "Blocking without override options",
              "Forgetting about web and mobile clients",
            ],
            interviewTips: [
              "Explain the dual layer (policy tips + transport)",
              "Discuss the user experience",
              "Mention override and justification workflows",
            ],
            examTips: [
              "Know which actions require transport rules vs DLP",
              "Understand policy tip availability across clients",
              "Know attachment scanning capabilities",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Demo policy tip in Outlook",
              "Show the transport rule integration",
              "Explain the override dialog",
              "Discuss OWA vs desktop vs mobile experience",
            ],
            realExamples: [
              "Policy tip prevented CFO from accidentally sending board compensation to wrong address",
              "Transport rule caught attachment that desktop client missed",
            ],
            questionsToAsk: [
              "Do users primarily use desktop Outlook or web/mobile?",
              "Have you had email-based data leakage incidents?",
              "How do you handle email encryption currently?",
            ],
          },
        },
        {
          id: "lesson-3-6",
          title: "DLP in Microsoft Teams",
          slug: "dlp-teams",
          duration: "25 mins",
          content: {
            explanation: [
              "Teams DLP protects chat messages and channel messages in real-time. When sensitive content is detected, the message can be blocked or the content redacted from view.",
              "Blocked messages show a 'blocked' indicator to the sender, and a configurable notification explains why. The original message is retained for compliance but hidden from recipients.",
              "File sharing in Teams (backed by SharePoint/OneDrive) is covered by SharePoint DLP. Chat message DLP handles the text content within conversations.",
            ],
            keyPoints: [
              "Real-time Scanning: Messages scanned before delivery",
              "Message Blocking: Block entire message or specific content",
              "Policy Tips: Notifications explaining the block",
              "Override Option: Users can justify and resend",
              "Retention: Blocked content retained for compliance",
            ],
            architecture: {
              title: "Teams DLP Flow",
              steps: [
                { step: 1, title: "Message Sent", description: "User sends chat/channel message with sensitive data", icon: "MessageSquare" },
                { step: 2, title: "DLP Scan", description: "Message content scanned against policies", icon: "Scan" },
                { step: 3, title: "Match Found", description: "Sensitive content identified", icon: "AlertTriangle" },
                { step: 4, title: "Block Applied", description: "Message blocked, content hidden from recipients", icon: "Lock" },
                { step: 5, title: "Sender Notified", description: "Policy tip shows why message was blocked", icon: "Bell" },
                { step: 6, title: "Override Option", description: "User can justify and request override", icon: "RefreshCw" },
              ],
            },
            whyItMatters: "Teams has become the primary communication tool for many organizations. Sensitive data shared in casual chats can spread rapidly. Real-time DLP prevents sensitive data from persisting in chat history accessible to all channel members.",
            commonMistakes: [
              "Forgetting that files in Teams use SharePoint DLP",
              "Not testing in Teams before deploying",
              "Overly aggressive policies disrupting collaboration",
              "Ignoring guest user messages",
            ],
            interviewTips: [
              "Explain the real-time blocking experience",
              "Discuss the difference between chat and file DLP",
              "Mention the guest user scenario",
            ],
            examTips: [
              "Know Teams-specific DLP capabilities",
              "Understand the relationship with SharePoint DLP",
              "Know how guest users are handled",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Demo a blocked message in Teams",
              "Show what recipient sees vs sender sees",
              "Explain the override experience",
              "Discuss the balance between protection and collaboration",
            ],
            realExamples: [
              "Employee pasted customer credit card in Teams - blocked before others saw",
              "Support channel blocked sharing of internal passwords",
            ],
            questionsToAsk: [
              "How heavily does your organization use Teams?",
              "Have you seen sensitive data shared in Teams chats?",
              "Do you have many external guests in Teams?",
            ],
          },
        },
        {
          id: "lesson-3-7",
          title: "User Experience: Tips, Blocks & Overrides",
          slug: "user-experience",
          duration: "30 mins",
          content: {
            explanation: [
              "DLP policies should educate users, not just block them. Policy tips explain why content is flagged and help users make better decisions. Blocking without explanation leads to frustration and workarounds.",
              "Three main user experiences: Tips (warning only), Blocks (prevents action), and Overrides (user can justify and proceed). The right mix depends on data sensitivity and organizational culture.",
              "Customizable notifications let you brand messages, provide instructions, and direct users to resources. Clear, helpful notifications increase compliance and reduce support tickets.",
            ],
            keyPoints: [
              "Policy Tips: Educational warnings that allow continuation",
              "Soft Blocks: Blocks with user override option",
              "Hard Blocks: No override, requires admin intervention",
              "Custom Notifications: Organization-branded messages",
              "Justification: Required business reason for override",
            ],
            architecture: {
              title: "User Response Options",
              steps: [
                { step: 1, title: "Notify Only", description: "Show warning, log incident, allow action", icon: "Info" },
                { step: 2, title: "Warn with Override", description: "Require acknowledgment, allow with click", icon: "AlertTriangle" },
                { step: 3, title: "Block with Override", description: "Block by default, allow with justification", icon: "ShieldAlert" },
                { step: 4, title: "Block with Manager", description: "Require manager approval for override", icon: "UserCheck" },
                { step: 5, title: "Hard Block", description: "No override possible, action prevented", icon: "Ban" },
              ],
            },
            whyItMatters: "User experience determines policy success. Overly aggressive policies lead to workarounds (personal email, USB drives). Well-designed policies with clear explanations and reasonable override paths maintain security while enabling legitimate work.",
            commonMistakes: [
              "Using hard blocks for everything",
              "Vague or technical notification messages",
              "No override path for legitimate use",
              "Ignoring user feedback on false positives",
            ],
            interviewTips: [
              "Discuss the balance between security and usability",
              "Explain how you would customize notifications",
              "Mention the importance of override justifications for auditing",
            ],
            examTips: [
              "Know the different notification/action options",
              "Understand override configuration",
              "Know how justifications are logged",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Show examples of good vs bad policy notifications",
              "Demo the override workflow",
              "Discuss psychological aspects - users bypass what they don't understand",
              "Explain the audit value of justifications",
            ],
            realExamples: [
              "Company reduced false positive complaints 70% by improving notification text",
              "Override justifications revealed legitimate process gaps",
            ],
            questionsToAsk: [
              "How do your users typically respond to security controls?",
              "What would make a DLP notification helpful vs annoying?",
              "Would manager approval be feasible in your organization?",
            ],
          },
        },
      ],
    },
    {
      id: "module-4",
      title: "Advanced DLP Scenarios",
      slug: "advanced-dlp",
      description: "Explore advanced protection scenarios including endpoint DLP, conditional access, and exceptions handling",
      icon: "Cog",
      duration: "2 hours",
      lessons: [
        {
          id: "lesson-4-1",
          title: "Endpoint DLP",
          slug: "endpoint-dlp",
          duration: "35 mins",
          content: {
            explanation: [
              "Endpoint DLP extends protection to Windows 10/11 and macOS devices, monitoring activities like copying to USB, printing, uploading to cloud services, and accessing by unallowed apps.",
              "Unlike cloud DLP which protects data in transit, Endpoint DLP protects data at rest on devices. It requires the Microsoft 365 E5 or E5 Compliance license.",
              "Endpoint DLP uses the same unified policy engine, so you can create policies that apply to both cloud services and endpoints. This ensures consistent protection across the data lifecycle.",
            ],
            keyPoints: [
              "Windows 10/11: Full support including USB, print, clipboard",
              "macOS: Supported with some feature differences",
              "Device Onboarding: Required for endpoint monitoring",
              "App Restrictions: Block specific apps from accessing files",
              "USB/Print Control: Block or audit sensitive data output",
            ],
            architecture: {
              title: "Endpoint DLP Components",
              steps: [
                { step: 1, title: "Device Onboarding", description: "Devices enrolled and configured for DLP", icon: "Laptop" },
                { step: 2, title: "File Activity Monitoring", description: "Watches file operations: copy, print, upload", icon: "Activity" },
                { step: 3, title: "Content Inspection", description: "Files scanned for sensitive content", icon: "FileSearch" },
                { step: 4, title: "Policy Evaluation", description: "Activity checked against endpoint DLP policies", icon: "CheckCircle" },
                { step: 5, title: "Action Enforcement", description: "Block, warn, or audit based on policy", icon: "Shield" },
              ],
            },
            whyItMatters: "Data often leaves the cloud boundary through endpoints: USB drives, printers, and local apps. Without Endpoint DLP, sophisticated DLP elsewhere can be bypassed by downloading and emailing from personal accounts.",
            commonMistakes: [
              "Forgetting device onboarding before creating policies",
              "Not testing on different device types",
              "Blocking USB entirely instead of sensitive files only",
              "Ignoring the performance impact of intensive scanning",
            ],
            interviewTips: [
              "Explain the integration with cloud DLP",
              "Discuss device onboarding requirements",
              "Mention browser and app-specific controls",
            ],
            examTips: [
              "Know the activities monitored by Endpoint DLP",
              "Understand onboarding requirements",
              "Know the difference between Windows and macOS support",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Explain why cloud DLP isn't enough",
              "Walk through device onboarding process",
              "Discuss the activities that can be monitored",
              "Mention the browser extension for Chrome/Firefox",
            ],
            realExamples: [
              "Employee tried to copy customer database to USB - Endpoint DLP blocked",
              "Print job with SSNs detected and audited for review",
            ],
            questionsToAsk: [
              "Are your devices managed via Intune?",
              "Do users have access to USB ports?",
              "What printing controls exist today?",
            ],
          },
        },
        {
          id: "lesson-4-2",
          title: "Restricting Downloads & Offline Access",
          slug: "download-restrictions",
          duration: "25 mins",
          content: {
            explanation: [
              "Beyond DLP, you can restrict downloads and offline access to sensitive documents using sensitivity labels and Conditional Access App Control (MCAS/Defender for Cloud Apps integration).",
              "Block download policies prevent users from downloading files to unmanaged devices while allowing view access in the browser. This enables productivity while preventing local data storage.",
              "Session controls can enforce view-only mode, prevent cut/copy/paste, and watermark documents with the viewer's identity to discourage screenshots.",
            ],
            keyPoints: [
              "Block Download: Allow view in browser, prevent download",
              "Session Controls: Real-time session monitoring via proxy",
              "Watermarking: User identity overlay on documents",
              "Cut/Copy/Paste Block: Prevent content extraction",
              "Unmanaged Device Blocking: Different rules for personal devices",
            ],
            whyItMatters: "Downloading creates copies outside your control. By keeping data in the cloud and allowing only browser access, you maintain visibility and control even when users access from unmanaged devices.",
            commonMistakes: [
              "Forgetting that block download requires Defender for Cloud Apps",
              "Not testing the user experience on blocked downloads",
              "Ignoring the mobile app implications",
              "Not communicating the restrictions to users",
            ],
            interviewTips: [
              "Explain the role of Conditional Access and MCAS",
              "Discuss the balance between access and protection",
              "Mention the licensing requirements",
            ],
            examTips: [
              "Know the integration with Defender for Cloud Apps",
              "Understand session control capabilities",
              "Know when block download applies vs doesn't",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Draw the session control architecture",
              "Explain the reverse proxy concept",
              "Demo block download if possible",
              "Discuss the impact on user workflows",
            ],
            realExamples: [
              "Contractor needed to view documents but not download - session control enabled this",
              "Watermarked documents led to identifying leaker from shared screenshot",
            ],
            questionsToAsk: [
              "Do you have users accessing from personal devices?",
              "How important is download prevention vs just DLP?",
              "Are you using Defender for Cloud Apps today?",
            ],
          },
        },
        {
          id: "lesson-4-3",
          title: "Exceptions & Exclusions Best Practices",
          slug: "exceptions-exclusions",
          duration: "25 mins",
          content: {
            explanation: [
              "Exceptions are inevitable: fraud teams need to handle card numbers, HR needs PII access, legal needs unrestricted communication. The key is granting exceptions safely with proper governance.",
              "Types of exceptions include: user/group exclusions, domain whitelisting for partners, specific site exclusions, and per-rule exceptions for certain SITs.",
              "Every exception should be documented, reviewed periodically, and have compensating controls. Use the principle of least privilege - exclude only what's necessary.",
            ],
            keyPoints: [
              "Group-Based: Use security groups for manageable exclusions",
              "Domain Whitelist: Trusted partner domains",
              "Site/Location: Exclude specific sites or mailboxes",
              "Per-Rule: Different exceptions per rule within policy",
              "Compensating Controls: Additional monitoring for excluded users",
            ],
            whyItMatters: "Poorly managed exceptions undermine DLP entirely. Overly broad exceptions create security gaps. Properly governed exceptions enable business while maintaining protection where it matters.",
            commonMistakes: [
              "Excluding entire departments instead of specific roles",
              "No review process for exceptions",
              "Using user accounts instead of groups",
              "Forgetting to remove exceptions when no longer needed",
            ],
            interviewTips: [
              "Discuss the governance process for exceptions",
              "Explain compensating controls concept",
              "Mention periodic review requirements",
            ],
            examTips: [
              "Know how to configure different exception types",
              "Understand the inheritance/priority of exceptions",
              "Know audit logging for exception usage",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Every exception is a potential vulnerability",
              "Discuss the approval process that should exist",
              "Explain how to monitor exception usage",
              "Cover the removal/expiration of exceptions",
            ],
            realExamples: [
              "Former fraud team member kept exception after role change - data exfiltrated",
              "Partner domain whitelist allowed attacker to pose as partner",
            ],
            questionsToAsk: [
              "What exception requests do you anticipate?",
              "Do you have a governance process for exceptions?",
              "How often would you review exceptions?",
            ],
          },
        },
        {
          id: "lesson-4-4",
          title: "DLP Policy Priority & Conflicts",
          slug: "policy-priority",
          duration: "25 mins",
          content: {
            explanation: [
              "When multiple DLP policies match the same content, priority determines which rule actions apply. Lower numbers = higher priority. Rules process in order until a match is found.",
              "Within a policy, rules also have priority. The 'Stop processing more rules' option can prevent lower-priority rules from evaluating after a match.",
              "Conflicts can occur when different policies have contradictory actions. Understanding priority helps design policies that work together rather than against each other.",
            ],
            keyPoints: [
              "Policy Priority: Lower number = higher priority",
              "Rule Priority: Order within each policy",
              "Stop Processing: Skip remaining rules after match",
              "Most Restrictive Wins: For conflicting actions",
              "Testing: Use 'test mode' to understand evaluation",
            ],
            architecture: {
              title: "Policy Evaluation Order",
              steps: [
                { step: 1, title: "Policies Listed by Priority", description: "P1: Priority 0, P2: Priority 1, P3: Priority 2", icon: "List" },
                { step: 2, title: "Rules Within Policy", description: "Each policy's rules evaluated in order", icon: "GitBranch" },
                { step: 3, title: "First Match Applies", description: "Unless 'continue processing' is set", icon: "Target" },
                { step: 4, title: "Actions Aggregated", description: "If multiple rules match, actions combine", icon: "Layers" },
              ],
            },
            whyItMatters: "Misconfigured priorities lead to unexpected behavior: intended blocks not applying, wrong notifications showing, or excessive alerts from multiple policies matching the same content.",
            commonMistakes: [
              "Not understanding the stop processing option",
              "Creating overlapping policies without clear priority",
              "Testing policies individually but not together",
              "Forgetting that actions can aggregate",
            ],
            interviewTips: [
              "Explain how you would design non-conflicting policies",
              "Discuss the 'stop processing' use cases",
              "Mention testing strategies for complex deployments",
            ],
            examTips: [
              "Know the default behavior for multiple matches",
              "Understand action aggregation",
              "Know how to use test mode effectively",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Use a flowchart to show evaluation order",
              "Give an example of conflicting policies",
              "Explain when to use stop processing",
              "Recommend keeping policy count manageable",
            ],
            realExamples: [
              "Two policies both triggered - user got confused by conflicting messages",
              "Block policy was lower priority than allow - sensitive data leaked",
            ],
            questionsToAsk: [
              "How many DLP policies do you expect to need?",
              "Have you considered how policies might interact?",
              "Who will manage policy priority going forward?",
            ],
          },
        },
      ],
    },
    {
      id: "module-5",
      title: "Monitoring & Auditing",
      slug: "monitoring",
      description: "Learn to monitor DLP effectiveness, investigate incidents, and report on compliance posture",
      icon: "BarChart3",
      duration: "1.5 hours",
      lessons: [
        {
          id: "lesson-5-1",
          title: "DLP Alerts & Alert Management",
          slug: "alerts",
          duration: "25 mins",
          content: {
            explanation: [
              "DLP policies can generate alerts for specific rule matches. Alerts appear in the Microsoft Purview compliance portal and can trigger email notifications to administrators.",
              "Alert severity levels (Low, Medium, High) help prioritize response. You can configure thresholds so alerts only fire for significant incidents, not every policy tip.",
              "Alert management includes investigation, status tracking (Active, Investigating, Dismissed, Resolved), and integration with security operations workflows.",
            ],
            keyPoints: [
              "Alert Generation: Configure which matches create alerts",
              "Severity Levels: Low, Medium, High for prioritization",
              "Thresholds: Minimum counts before alerting",
              "Email Notifications: Notify admins immediately",
              "Status Management: Track alert lifecycle",
            ],
            whyItMatters: "Without alerts, DLP operates in a black box. Proper alerting enables proactive response to potential data loss, identifies policy gaps through false positives, and provides evidence for compliance audits.",
            commonMistakes: [
              "Alerting on every match (alert fatigue)",
              "No one assigned to monitor alerts",
              "Not categorizing alert severity properly",
              "Ignoring alerts until audit time",
            ],
            interviewTips: [
              "Discuss alert triage processes",
              "Explain how to avoid alert fatigue",
              "Mention integration with SIEM/SOAR",
            ],
            examTips: [
              "Know alert configuration options",
              "Understand severity level implications",
              "Know the alert management workflow",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Show the alerts dashboard",
              "Discuss alert fatigue and how to prevent it",
              "Explain the investigation workflow",
              "Cover email notification configuration",
            ],
            realExamples: [
              "Security team received 1000 alerts first day - had to tune immediately",
              "Single high-severity alert revealed attempted data theft",
            ],
            questionsToAsk: [
              "Who would monitor DLP alerts in your organization?",
              "Do you have existing alert management processes?",
              "How would you prioritize between alert types?",
            ],
          },
        },
        {
          id: "lesson-5-2",
          title: "DLP Reports & Dashboards",
          slug: "reports",
          duration: "25 mins",
          content: {
            explanation: [
              "DLP reports provide aggregate views of policy matches, user activities, and policy effectiveness. Built-in reports include: DLP policy matches, DLP incidents, and false positive overrides.",
              "Reports can be filtered by date, policy, user, location, and severity. Export to CSV enables further analysis. Scheduled reports can be emailed to stakeholders.",
              "Dashboards provide at-a-glance views of DLP health: match trends, top policies triggered, top users, and geographic distribution of matches.",
            ],
            keyPoints: [
              "Policy Match Reports: What content matched which policies",
              "Incident Reports: High-severity matches requiring attention",
              "Override Reports: Track justifications provided by users",
              "User Activity: Which users are triggering policies",
              "Trend Analysis: Match patterns over time",
            ],
            whyItMatters: "Reports demonstrate DLP effectiveness to leadership and auditors. They reveal policy gaps, identify training needs, and help optimize policies based on actual data patterns.",
            commonMistakes: [
              "Not reviewing reports regularly",
              "Missing the 'false positive' signal in override reports",
              "Not sharing reports with stakeholders",
              "Ignoring trends indicating policy problems",
            ],
            interviewTips: [
              "Discuss metrics you would track",
              "Explain how reports inform policy tuning",
              "Mention stakeholder reporting requirements",
            ],
            examTips: [
              "Know available report types",
              "Understand report filtering options",
              "Know how to schedule/export reports",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Walk through the reports section in portal",
              "Show how to filter and export",
              "Discuss what to look for in reports",
              "Explain reporting to leadership",
            ],
            realExamples: [
              "Monthly report revealed 90% of matches came from one department - focused training there",
              "Override report showed users weren't understanding policy - notification improved",
            ],
            questionsToAsk: [
              "What DLP metrics would your leadership want to see?",
              "How often would you review DLP reports?",
              "What compliance reporting requirements exist?",
            ],
          },
        },
        {
          id: "lesson-5-3",
          title: "Activity Explorer Deep Dive",
          slug: "activity-explorer",
          duration: "25 mins",
          content: {
            explanation: [
              "Activity Explorer provides detailed visibility into labeled and sensitive content across your environment. It shows what users are doing with sensitive data: creating, modifying, sharing, printing, copying.",
              "Unlike reports that show aggregate data, Activity Explorer lets you drill down to individual activities. You can see exactly which user, on which file, took what action, and when.",
              "Activity Explorer requires E5 licensing or the E5 Compliance add-on. It tracks activities across all DLP-protected workloads.",
            ],
            keyPoints: [
              "Detailed Activity Log: Individual user/file/action records",
              "Filters: Date, user, activity type, label, SIT",
              "File-Level Detail: Exactly which files are involved",
              "User Investigation: All activities by a specific user",
              "Export: Detailed data for external analysis",
            ],
            architecture: {
              title: "Activity Explorer Capabilities",
              steps: [
                { step: 1, title: "Activity Capture", description: "All DLP-relevant activities logged", icon: "Activity" },
                { step: 2, title: "Classification", description: "Activities tagged by type and severity", icon: "Tags" },
                { step: 3, title: "Retention", description: "Activities retained for investigation period", icon: "Clock" },
                { step: 4, title: "Search", description: "Advanced filtering and search capabilities", icon: "Search" },
                { step: 5, title: "Export", description: "Data export for SIEM or analysis", icon: "Download" },
              ],
            },
            whyItMatters: "Activity Explorer transforms DLP from 'we block stuff' to 'we understand data flows'. It's essential for incident investigation, user behavior analysis, and demonstrating compliance to auditors.",
            commonMistakes: [
              "Not knowing Activity Explorer exists",
              "Confusing it with general audit logs",
              "Not using it for incident investigation",
              "Ignoring export capabilities for advanced analysis",
            ],
            interviewTips: [
              "Explain the difference from reports",
              "Describe an investigation scenario",
              "Mention the licensing requirements",
            ],
            examTips: [
              "Know the activities tracked",
              "Understand filtering capabilities",
              "Know the licensing requirements",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Demo Activity Explorer in the portal",
              "Show how to investigate a specific incident",
              "Explain the user-centric view",
              "Discuss retention period considerations",
            ],
            realExamples: [
              "Used Activity Explorer to trace exactly when and how data was shared externally",
              "Pattern analysis revealed user regularly downloading then deleting before leaving",
            ],
            questionsToAsk: [
              "What visibility do you currently have into data activities?",
              "Have you needed to investigate user behavior around data?",
              "Would detailed activity logs help with compliance audits?",
            ],
          },
        },
        {
          id: "lesson-5-4",
          title: "Incident Response Flow",
          slug: "incident-response",
          duration: "25 mins",
          content: {
            explanation: [
              "A DLP incident occurs when policy triggers a significant match - typically a high-severity alert. Incident response involves investigation, containment, remediation, and lessons learned.",
              "Investigation uses Activity Explorer to trace the incident: what data, what user, what action, what time. Context from related activities helps understand intent.",
              "Response may include: revoking access, contacting the user, HR involvement, legal notification, or regulatory reporting. Documentation throughout is critical.",
            ],
            keyPoints: [
              "Detection: Alert received from DLP policy",
              "Triage: Assess severity and business impact",
              "Investigation: Use Activity Explorer to understand scope",
              "Containment: Stop ongoing data loss if active",
              "Remediation: Cleanup and policy adjustment",
              "Documentation: Record for audit and improvement",
            ],
            architecture: {
              title: "Incident Response Workflow",
              steps: [
                { step: 1, title: "Alert Received", description: "DLP alert triggers investigation", icon: "Bell" },
                { step: 2, title: "Initial Triage", description: "Assess severity, assign responder", icon: "Triage" },
                { step: 3, title: "Investigation", description: "Activity Explorer, interviews, evidence collection", icon: "Search" },
                { step: 4, title: "Containment", description: "Stop ongoing loss, preserve evidence", icon: "Shield" },
                { step: 5, title: "Remediation", description: "Delete/recall data, revoke access", icon: "Trash2" },
                { step: 6, title: "Lessons Learned", description: "Policy tuning, training, process improvement", icon: "BookOpen" },
              ],
            },
            whyItMatters: "DLP without incident response is just monitoring. Effective response prevents data loss from becoming data breach, maintains regulatory compliance, and improves the DLP program over time.",
            commonMistakes: [
              "No defined incident response process",
              "Lack of coordination between security and legal",
              "Not preserving evidence for potential legal action",
              "No follow-up or policy improvement after incidents",
            ],
            interviewTips: [
              "Describe a complete incident response workflow",
              "Discuss stakeholder coordination",
              "Mention documentation requirements",
            ],
            examTips: [
              "Know the incident response phases",
              "Understand evidence preservation",
              "Know when regulatory notification is required",
            ],
          },
          trainerNotes: {
            talkingPoints: [
              "Walk through a hypothetical incident scenario",
              "Discuss the team involved (security, legal, HR)",
              "Explain evidence preservation requirements",
              "Cover post-incident review and improvement",
            ],
            realExamples: [
              "Incident investigation revealed policy gap - fixed before broader exposure",
              "HR involvement required for employee disciplinary action",
            ],
            questionsToAsk: [
              "What incident response processes exist today?",
              "Who would be involved in a DLP incident investigation?",
              "What documentation requirements exist for compliance?",
            ],
          },
        },
      ],
    },
  ],
};

export default courseData;
