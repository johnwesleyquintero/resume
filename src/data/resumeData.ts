export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  avatarUrl: string;
  links: {
    linkedin: string;
    portfolio: string;
    blog: string;
    github: string;
    certifications?: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  education: {
    degree: string;
    school: string;
    period: string;
    details?: string;
    url?: string;
  }[];
  certifications: string[];
  languages: string[];
  summary: {
    quote: string;
    content: string;
  };
  experience: {
    title: string;
    company: string;
    period: string;
    responsibilities: (string | { text: string; link: { text: string; url: string } })[];
  }[];
  uniqueEdge: {
    title: string;
    description: string;
    playbookLink: string;
    cards: {
      title: string;
      icon: string;
      points: string[];
    }[];
  };
  skills: {
    category: string;
    items: string[];
  }[];
  operatingPrinciples: {
    title: string;
    description: string;
  }[];
  dailyRhythm: {
    title: string;
    description: string;
    items: (string | { text: string; link: { text: string; url: string } })[];
  };
  downloads: {
    title: string;
    label: string;
    url: string;
    icon: 'file-spreadsheet' | 'database-zap';
  }[];
}

export const RESUME_DATA: ResumeData = {
  name: "John Wesley Quintero",
  title: "Hands-On Amazon & E-commerce Specialist",
  location: "Tagum City, Philippines",
  email: "wesley.ecomva@gmail.com",
  avatarUrl: "https://avatars.githubusercontent.com/u/190981914?v=4",
  links: {
    linkedin: "https://www.linkedin.com/in/johnwesleyquintero/",
    portfolio: "https://wescode.vercel.app/",
    blog: "https://wescode.vercel.app/blog",
    github: "https://github.com/johnwesleyquintero",
    certifications: "https://www.linkedin.com/in/johnwesleyquintero/details/certifications/",
  },
  contact: {
    phone: "+63 (9xx) xxx-xxxx", // Placeholder for security
    email: "wesley.ecomva@gmail.com",
    address: "Tagum City, Davao del Norte, Philippines",
  },
  education: [
    {
      degree: "Bachelor in Elementary Education",
      school: "University of Southeastern Philippines",
      period: "2015 - 2019",
      details: "Major in General Education, Licensed Professional Teacher (LPT)",
      url: "https://www.usep.edu.ph/",
    }
  ],
  certifications: [
    "Professional Teacher's License (LPT)",
    "Amazon SEO & PPC Certification",
    "Advanced Google Data Analytics",
  ],
  languages: ["English (Professional)", "Tagalog (Native)", "Cebuano (Native)"],
  summary: {
    quote: "I don't just identify problems; I develop the robust operational processes and SOPs that empower teams to solve them consistently and efficiently, historically reducing manual task time by 15-25% through intelligent automation and system design.",
    content: "I am a Hands-On Amazon & E-commerce Specialist with 6+ years of experience driving sustainable profitability by transforming chaotic workflows into robust, scalable operational systems. My unique edge is leveraging proprietary intelligence tools like WesBI for inventory autonomy and Buy Box Master for strategic pricing defense, which allows me to bridge high-level strategy with meticulous, in-the-trenches execution and systematic error correction. I focus on building solutions that empower teams and unlock consistent growth.",
  },
  experience: [
    {
      title: "eCommerce Account Manager",
      company: "VAXPH - Seculife | Speedtalk",
      period: "July 2025 - Present",
      responsibilities: [
        "Driving consistent sales growth and enhancing brand presence across Amazon, eBay, and Walmart.",
        "Managing the end-to-end lifecycle of product listings while maintaining high account health standards.",
        "Developing critical operational playbooks that streamlined team onboarding and reduced operational friction.",
        "Monitoring daily account health proactively, minimizing incident rates and ensuring full compliance.",
        {
          text: "Developed Operation Citadel: A definitive GitHub documentation repository serving as the single source of truth for all VAXPH product listings and operational playbooks.",
          link: {
            text: "View Documentation",
            url: "https://github.com/johnwesleyquintero/listing-documentation",
          },
        },
        {
          text: "Architected WesBI Cockpit to solve inventory blindness, creating a proactive forecasting system that significantly reduced emergency stock-outs and optimized working capital.",
          link: {
            text: "View WesBI",
            url: "https://wes-bi.vercel.app/",
          },
        },
        {
          text: "Engineered Buy Box Master for strategic pricing defense, enabling granular analysis of the price 'Gap' metric to systematically secure Buy Box dominance and prevent revenue leakage.",
          link: {
            text: "View Buy Box Master",
            url: "https://buy-box-master.vercel.app/",
          },
        },
      ],
    },
    {
      title: "Amazon Specialist",
      company: "My Amazon Guy",
      period: "October 2024 - March 2025",
      responsibilities: [
        "Implemented data-driven Amazon SEO and PPC strategies, resulting in consistent month-over-month growth in client sales.",
        "Designed advanced reporting frameworks that improved client retention and strategic clarity.",
        "Developed custom analytics solutions for monitoring advertising performance and optimizing ACoS.",
      ],
    },
    {
      title: "Item Specialist",
      company: "Bulk Buy America",
      period: "March 2024 - September 2024",
      responsibilities: [
        "Optimized Amazon catalogs for discoverability and data accuracy.",
        "Built custom Excel tools with VLOOKUP, improving procurement efficiency and data reliability.",
      ],
    },
    {
      title: "Marketplace Support",
      company: "Adorama",
      period: "May 2023 - September 2023",
      responsibilities: [
        "Provided technical support for B2B clients, resolving the majority of Seller Central integration issues within standard SLAs.",
        {
          text: "Developed the Amazon Catalog Management/Listing Management_SOP, leading to the systematic recovery of lost revenue and establishing a repeatable audit process to eliminate future catalog integrity risks.",
          link: {
            text: "View SOP",
            url: "https://docs.google.com/spreadsheets/d/1e9Z5XJ1P0x8PR8T5pSqWJ1zCs6W4nBUO/edit?gid=1206805883#gid=1206805883",
          },
        },
        {
          text: "Created a Google Sheet SOP for Amazon Jira Issues to enhance issue tracking.",
          link: {
            text: "View SOP",
            url: "https://docs.google.com/spreadsheets/d/1vNUC94hgtNINdk3u57DufQUQVAmOsiEr/edit?usp=sharing&ouid=116050988128963817360&rtpof=true&sd=true",
          },
        },
      ],
    },
    {
      title: "Amazon Account Manager",
      company: "Champion E-com LLC",
      period: "October 2022 - September 2023",
      responsibilities: [
        "Managed account health, performance metrics, and compliance for multiple B2B clients, driving sustainable growth.",
        "Implemented strategic SEO and PPC campaigns, leading to a steady increase in sales within the first six months.",
        {
          text: "Developed a comprehensive SOP for FBA Department Operations, establishing a systematic framework to prevent inventory discrepancies and ensure operational continuity.",
          link: {
            text: "View SOP",
            url: "https://docs.google.com/document/d/1bRH9HDYbzK4NaVwLjTbAY-a6RlxMaTw3/edit?usp=sharing&ouid=116050988128963817360&rtpof=true&sd=true",
          },
        },
      ],
    },
    {
      title: "Amazon Wholesale Buyer",
      company: "Sales.support",
      period: "October 2018 - July 2022",
      responsibilities: [
        "Sourced profitable wholesale products for Amazon FBA/FBM, contributing to sustainable revenue growth.",
        {
          text: "Developed an SOP for Amazon Wholesale Buyers to streamline the sourcing and negotiation process.",
          link: {
            text: "View SOP",
            url: "https://docs.google.com/document/d/143PWwLDuCBMsXHWcmdAS83sQZthw0pUG/edit?usp=sharing&ouid=116050988128963817360&rtpof=true&sd=true",
          },
        },
      ],
    },
  ],
  uniqueEdge: {
    title: "My Unique Edge: Deep Process Mastery & Hands-On Execution",
    description: "My value lies in untangling the most complex, labor-intensive Amazon tasks through deep platform knowledge and the development of repeatable, high-quality operational procedures.",
    playbookLink: "https://wescode.vercel.app/blog/flat-file",
    cards: [
      {
        title: "Mastery of Complex Amazon Workflows",
        icon: "file-spreadsheet",
        points: [
          "**Expert** in advanced flat file manipulation for bulk updates and listing errors.",
          "**Systematic** approach to account health and case logs for swift resolutions.",
          "**Methodical** use of advanced Excel (VLOOKUP, INDEX/MATCH) for data validation and reconciliation.",
        ],
      },
      {
        title: "Strategic Data Interpretation",
        icon: "database-zap",
        points: [
          "**Data-driven** insights from raw reports to optimize demand and inventory strategy.",
          "**Developed** proprietary tools (**WesBI**, **Buy Box Master**) to transform raw data into actionable inventory and pricing strategy.",
          "**Skilled** at manual dataset audits to uncover hidden growth opportunities.",
        ],
      },
    ],
  },
  skills: [
    {
      category: "Amazon & E-commerce",
      items: ["Multi-Channel Management (Amazon, eBay, Walmart)", "Marketplace SEO & Listing Optimization", "PPC & Advertising (Amazon Ads)", "FBA Inventory & Logistics"]
    },
    {
      category: "Data & Analytics",
      items: ["Data Visualization (Tableau, Power BI)", "Seller Central Reporting", "Business Intelligence & Insights (Including custom tool development like WesBI)", "Advanced Excel (VLOOKUP, Pivots)"]
    },
    {
      category: "Automation & Development",
      items: ["Custom E-commerce Tooling (Node.js)", "AI/ML Implementation Concepts", "Workflow Automation", "Google Apps Script"]
    }
  ],
  operatingPrinciples: [
    {
      title: "Build the System",
      description: "Never solve a problem once if you can build a system that prevents it forever. I focus on creating scalable playbooks and SOPs."
    },
    {
      title: "Data Sovereignty",
      description: "Own your data. I prioritize building independent tools and dashboards (like WesBI) that bypass platform limitations, giving you a clear, unfiltered view of actionable business performance, ensuring data integrity and privacy."
    },
    {
      title: "Strategic Autonomy",
      description: "Empower teams through clarity. My goal is to create operational independence where the system runs smoothly with minimal friction."
    }
  ],
  dailyRhythm: {
    title: "A Specialist's Daily Rhythm: Proactive & Hands-On",
    description: "To directly answer the common question, \"What does your typical day involve?\", here is my daily operational rhythm focused on proactive account management and problem-solving:",
    items: [
      "Morning Triage & Health Check: Systematically review Account Health, performance notifications, and Voice of the Customer issues to proactively mitigate risks and ensure compliance.",
      "Catalog & Listing Management: Resolve suppressions and image compliance issues through manual audits and SEO refinements to improve visibility and organic ranking.",
      "Case Log & Support Management: Meticulously follow up and escalate Amazon support cases to drive swift resolutions and minimize operational downtime.",
      "PPC & Advertising Monitoring: Daily performance checks on active campaigns to identify fluctuations in ACoS and spend, ensuring optimal advertising ROI.",
      "Manual Data Analysis & Reporting: Reconcile performance trackers and FBA reimbursement audits to ensure financial accuracy and recover lost revenue.",
      {
        text: "Knowledge Base Management: Maintaining Operation Citadel (GitHub documentation) and WesBI/Buy Box Master systems to ensure team knowledge is centralized, accessible, and evergreen.",
        link: {
          text: "View Operation Citadel",
          url: "https://github.com/johnwesleyquintero/listing-documentation",
        },
      },
      {
        text: "Playbook Documentation: Access comprehensive playbooks and articles on Amazon strategies and e-commerce best practices.",
        link: {
          text: "Explore Playbooks",
          url: "https://wescode.vercel.app/blog",
        },
      },
    ],
  },
  downloads: [
    {
      title: "Latest Version Amazon Specialist",
      label: "John Wesley Quintero - Hands-On Amazon Specialist.pdf",
      url: "/documents/John Wesley Quintero - Hands-On Amazon Specialist.pdf",
      icon: "database-zap",
    },
    {
      title: "Old Version Standard Resume",
      label: "John Wesley Quintero - Resume Old Version.pdf",
      url: "/documents/John Wesley Quintero - Resume Old Version.pdf",
      icon: "file-spreadsheet",
    },
  ],
};
