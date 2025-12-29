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
  };
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
  },
  summary: {
    quote: "I don't just identify problems; I build the robust processes and SOPs that empower teams to solve them consistently and efficiently.",
    content: "With over 5 years of experience driving e-commerce profitability, I am a hands-on Amazon specialist who bridges high-level strategy with meticulous, in-the-trenches execution. My expertise is in transforming complex data and chaotic workflows into clean, high-performing listings and repeatable operational procedures. I excel at the core challenges of flat file management, bulk data processing, and systematic error correction, ensuring catalog integrity and unlocking sustainable growth. I am a dedicated problem-solver who provides reliable solutions that strengthen and streamline e-commerce operations.",
  },
  experience: [
    {
      title: "eCommerce Account Manager",
      company: "VAXPH - Seculife | Speedtalk",
      period: "July 2025 - January 2026",
      responsibilities: [
        "Driving sales growth and enhancing brand presence across multiple e-commerce platforms, including Amazon, eBay, and Walmart.",
        "Managing the end-to-end lifecycle of product listings and ensuring operational excellence across all channels.",
        "Developing and maintaining critical operational documentation and playbooks to support business objectives.",
        "Monitoring daily account health proactively to address issues and maintain high performance standards.",
        {
          text: "Developed WesBI Cockpit: Transforms raw CSV dumps into actionable insights, providing visibility into inventory KPIs and velocity trends.",
          link: {
            text: "View WesBI",
            url: "https://wes-bi.vercel.app/",
          },
        },
        {
          text: "Created Buy Box Master: A strategic pricing intelligence tool to analyze win rates, detect suppression, and optimize pricing strategy.",
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
        "Spearheaded data-driven Amazon SEO and PPC strategies, resulting in an average client sales increase of 35%.",
        "Designed advanced reporting frameworks to enhance client transparency and strategic decision-making.",
        "Developed custom analytics solutions for monitoring advertising performance and driving campaign optimization.",
      ],
    },
    {
      title: "Item Specialist",
      company: "Bulk Buy America",
      period: "March 2024 - September 2024",
      responsibilities: [
        "Managed and maintained extensive Amazon product catalogs, ensuring precise data accuracy and optimizing product listings for enhanced discoverability and sales.",
        "Developed custom Excel-based price checking tools and utilized advanced VLOOKUP functions to streamline inventory management and procurement processes, improving efficiency by 25%.",
      ],
    },
    {
      title: "Marketplace Support",
      company: "Adorama",
      period: "May 2023 - September 2023",
      responsibilities: [
        "Provided technical support for B2B clients on Amazon marketplace integrations and Seller Central operations.",
        {
          text: "Developed and implemented an SOP for the Amazon Reimbursement Process.",
          link: {
            text: "View SOP",
            url: "https://docs.google.com/spreadsheets/d/1e9Z5XJ1P0x8PR8T5pSqWJ1zCs6W4nBUO/edit?usp=sharing&ouid=116050988128963817360&rtpof=true&sd=true",
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
        "Implemented strategic SEO and PPC campaigns, leading to a 20% increase in sales within six months.",
        {
          text: "Developed a comprehensive SOP for FBA Department Operations.",
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
        "Sourced profitable wholesale products for Amazon FBA/FBM, contributing to a 25% increase in overall revenue.",
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
          "Expert in advanced flat file manipulation for large-scale product data operations, bulk updates, and resolving persistent listing errors.",
          "Systematic approach to account health monitoring and case log management, ensuring swift, effective resolutions with Amazon support.",
          "Proficient in using advanced spreadsheet functions (VLOOKUP, INDEX/MATCH, Pivot Tables) for data validation, preparation, and analysis.",
        ],
      },
      {
        title: "Strategic Data Interpretation",
        icon: "database-zap",
        points: [
          "Applying data-driven insights from raw reports to guide e-commerce strategy, including demand forecasting and inventory optimization.",
          "Leveraging a deep understanding of Amazon's data structure to maintain data quality, optimize listings, and improve performance.",
          "Skilled at manually auditing large datasets to identify hidden opportunities and critical issues that automated tools often miss.",
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
      items: ["Data Visualization (Tableau, Power BI)", "Seller Central Reporting", "Business Intelligence & Insights", "Advanced Excel (VLOOKUP, Pivots)"]
    },
    {
      category: "Automation & Development",
      items: ["SP-API Development & Integration", "Custom E-commerce Tooling (Node.js)", "AI/ML Implementation Concepts", "Workflow Automation"]
    }
  ],
  operatingPrinciples: [
    {
      title: "Build the System",
      description: "Never solve a problem once if you can build a system that prevents it forever. I focus on creating scalable playbooks and SOPs."
    },
    {
      title: "Data Sovereignty",
      description: "Own your data. I prioritize building independent tools and dashboards that give you a clear, unfiltered view of your business performance."
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
      "Morning Triage & Health Check: Systematically review Account Health for new performance notifications, A-to-Z claims, and Voice of the Customer issues. Check for Stranded Inventory and FBA shipment discrepancies.",
      "Catalog & Listing Management: Proactively scan for and resolve all forms of listing suppressions, image compliance issues, and detail page errors. Perform manual checks for catalog accuracy and contribution conflicts. Implement and refine SEO strategies for product listings, including keyword research, compelling copy, and backend search term optimization to improve visibility and organic ranking.",
      "Case Log & Support Management: Conduct a meticulous follow-up on all open Amazon support cases, providing additional information and escalating as necessary to drive resolutions.",
      "PPC & Advertising Monitoring: Perform daily budget and performance checks on all active ad campaigns. Identify and act on major fluctuations in ACoS, spend, or sales velocity.",
      "Manual Data Analysis & Reporting: Utilize advanced Excel/Google Sheets skills to update performance trackers, reconcile reports, and conduct FBA reimbursement audits by cross-referencing multiple data sources.",
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
      url: "/documents/John Wesley Quintero -  Resume Old Version.pdf",
      icon: "file-spreadsheet",
    },
  ],
};
