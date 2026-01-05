export interface ResumeData {
  name: string
  title: string
  location: string
  email: string
  avatarUrl: string
  links: {
    linkedin: string
    portfolio: string
    blog: string
    github: string
    onlinejobs?: string
    certifications?: string
  }
  contact: {
    phone: string
    email: string
    address: string
  }
  education: {
    degree: string
    school: string
    period: string
    details?: string
    url?: string
  }[]
  certifications: string[]
  languages: string[]
  summary: {
    quote: string
    content: string
  }
  experience: {
    title: string
    company: string
    period: string
    responsibilities: (string | { text: string; link: { text: string; url: string } })[]
  }[]
  uniqueEdge: {
    title: string
    description: string
    playbookLink: string
    cards: {
      title: string
      icon: string
      points: string[]
    }[]
  }
  skills: {
    category: string
    items: string[]
  }[]
  operatingPrinciples: {
    title: string
    description: string
  }[]
  dailyRhythm: {
    title: string
    description: string
    items: (string | { text: string; link: { text: string; url: string } })[]
  }
  downloads: {
    title: string
    label: string
    url: string
    icon: 'file-spreadsheet' | 'database-zap'
  }[]
  tools?: {
    title: string
    label: string
    url: string
    icon: 'file-spreadsheet' | 'database-zap'
  }[]
}

export const RESUME_DATA: ResumeData = {
  name: 'John Wesley Quintero',
  title: 'Hands-On Amazon & E-commerce Specialist',
  location: 'Tagum City, Philippines',
  email: 'wesley.ecomva@gmail.com',
  avatarUrl: 'https://avatars.githubusercontent.com/u/190981914?v=4',
  links: {
    linkedin: 'https://www.linkedin.com/in/johnwesleyquintero/',
    portfolio: 'https://wescode.vercel.app/',
    blog: 'https://wescode.vercel.app/blog',
    github: 'https://github.com/johnwesleyquintero',
    onlinejobs: 'https://www.onlinejobs.ph/jobseekers/info/979775',
    certifications: 'https://www.linkedin.com/in/johnwesleyquintero/details/certifications/',
  },
  contact: {
    phone: '+63 (9xx) xxx-xxxx', // Placeholder for security
    email: 'wesley.ecomva@gmail.com',
    address: 'Tagum City, Davao del Norte, Philippines',
  },
  education: [
    {
      degree: 'Bachelor in Elementary Education',
      school: 'University of Southeastern Philippines',
      period: '2015 - 2019',
      details: 'Major in General Education, Licensed Professional Teacher (LPT)',
      url: 'https://www.usep.edu.ph/',
    },
  ],
  certifications: [
    "Professional Teacher's License (LPT)",
    'Amazon SEO & PPC Certification',
    'Data Modeling for Power BI',
  ],
  languages: ['English (Professional)', 'Tagalog (Native)', 'Cebuano (Native)'],
  summary: {
    quote:
      'I am committed to identifying operational challenges and developing sustainable processes that help brands scale efficiently on Amazon and other marketplaces.',
    content:
      'I am a Hands-On Amazon & E-commerce Specialist with 6+ years of experience accelerating growth for brands across Amazon and global marketplaces. By leveraging advanced data analysis, SEO/PPC optimization, and custom operational systems, I streamline workflows, boost profitability, and amplify brand visibility. I thrive at the intersection of strategy and execution, turning complex challenges into repeatable, scalable wins and building processes that keep brands ahead of the curve.',
  },
  experience: [
    {
      title: 'eCommerce Account Manager',
      company: 'VAXPH - Seculife | Speedtalk',
      period: 'July 2025 - Present',
      responsibilities: [
        'Supporting consistent sales growth and brand visibility across Amazon, eBay, and Walmart.',
        'Managing product listing lifecycles while maintaining account health standards.',
        'Developing operational playbooks to help streamline team onboarding and daily tasks.',
        'Monitoring account health daily to ensure compliance and minimize issues.',
        {
          text: 'Created pre-interview strategic case studies for SpeedTalk and SecuLife, which were instrumental in securing my current role at VAXPH.',
          link: {
            text: 'View SpeedTalk Case Study',
            url: 'https://case-study-speedtalk-mobile.netlify.app/',
          },
        },
        {
          text: 'Strategic Analysis: SecuLife Growth Plan',
          link: {
            text: 'View SecuLife Case Study',
            url: 'https://case-study-seculife.netlify.app/',
          },
        },
        {
          text: 'Developed Operation Docs: A GitHub documentation repository created to serve as a reliable reference for product listings and operational playbooks.',
          link: {
            text: 'View Documentation',
            url: 'https://github.com/johnwesleyquintero/listing-documentation',
          },
        },
        {
          text: 'Built WesBI Cockpit as my daily "mission control" for inventory forecasting, helping to ensure consistent stock levels and improve capital management.',
          link: {
            text: 'View WesBI',
            url: 'https://wes-bi.vercel.app/',
          },
        },
        {
          text: 'Created Buy Box Master, an essential daily tool used to monitor pricing gaps and help maintain competitive positioning on Amazon.',
          link: {
            text: 'View Buy Box Master',
            url: 'https://buy-box-master.vercel.app/',
          },
        },
      ],
    },
    {
      title: 'Amazon Specialist',
      company: 'My Amazon Guy',
      period: 'October 2024 - March 2025',
      responsibilities: [
        'Implemented data-driven Amazon SEO and PPC strategies to help drive growth in client sales.',
        'Developed reporting frameworks to improve client retention and strategic clarity.',
        'Created custom analytics solutions for monitoring advertising performance and optimizing ACoS.',
      ],
    },
    {
      title: 'Item Specialist',
      company: 'Bulk Buy America',
      period: 'March 2024 - September 2024',
      responsibilities: [
        'Optimized Amazon catalogs for discoverability and data accuracy.',
        'Built custom Excel tools with VLOOKUP to improve procurement efficiency and data reliability.',
      ],
    },
    {
      title: 'Marketplace Support',
      company: 'Adorama',
      period: 'May 2023 - September 2023',
      responsibilities: [
        'Provided technical support for B2B clients, resolving Seller Central integration issues within standard SLAs.',
        {
          text: 'Developed the Amazon Catalog Management/Listing Management SOP, helping to recover lost revenue and establishing a repeatable audit process for catalog integrity.',
          link: {
            text: 'View SOP',
            url: 'https://docs.google.com/spreadsheets/d/1e9Z5XJ1P0x8PR8T5pSqWJ1zCs6W4nBUO/edit?gid=1206805883#gid=1206805883',
          },
        },
        {
          text: 'Created a Google Sheet SOP for Amazon Jira Issues to improve issue tracking.',
          link: {
            text: 'View SOP',
            url: 'https://docs.google.com/spreadsheets/d/1vNUC94hgtNINdk3u57DufQUQVAmOsiEr/edit?usp=sharing&ouid=116050988128963817360&rtpof=true&sd=true',
          },
        },
      ],
    },
    {
      title: 'Amazon Account Manager',
      company: 'Champion E-com LLC',
      period: 'October 2022 - September 2023',
      responsibilities: [
        'Managed account health, performance metrics, and compliance for multiple B2B clients.',
        'Implemented SEO and PPC campaigns, contributing to a steady increase in sales.',
        {
          text: 'Developed a comprehensive SOP for FBA Department Operations to help prevent inventory discrepancies and ensure operational continuity.',
          link: {
            text: 'View SOP',
            url: 'https://docs.google.com/document/d/1bRH9HDYbzK4NaVwLjTbAY-a6RlxMaTw3/edit?usp=sharing&ouid=116050988128963817360&rtpof=true&sd=true',
          },
        },
      ],
    },
    {
      title: 'Amazon Wholesale Buyer',
      company: 'Sales.support',
      period: 'October 2018 - July 2022',
      responsibilities: [
        'Sourced profitable wholesale products for Amazon FBA/FBM, contributing to revenue growth.',
        {
          text: 'Developed an SOP for Amazon Wholesale Buyers to help streamline the sourcing and negotiation process.',
          link: {
            text: 'View SOP',
            url: 'https://docs.google.com/document/d/143PWwLDuCBMsXHWcmdAS83sQZthw0pUG/edit?usp=sharing&ouid=116050988128963817360&rtpof=true&sd=true',
          },
        },
      ],
    },
  ],
  uniqueEdge: {
    title: 'Core Expertise: Hands-On Amazon Operations & Process Design',
    description:
      'I excel at solving complex marketplace challenges by combining deep platform knowledge with advanced data management and automated workflows.',
    playbookLink: 'https://wescode.vercel.app/blog/flat-file',
    cards: [
      {
        title: 'Hands-On Amazon Management',
        icon: 'file-spreadsheet',
        points: [
          '**Expert** in flat file manipulation for bulk catalog updates, variations, and listing troubleshooting.',
          '**Proactive** account health monitoring and case log management for rapid issue resolution.',
          '**Specialized** in Amazon FBA logistics, inventory forecasting, and shipment reconciliation.',
        ],
      },
      {
        title: 'E-commerce Data Specialist',
        icon: 'database-zap',
        points: [
          '**Developed** custom BI tools like **WesBI** and **Buy Box Master** to automate pricing and inventory tasks.',
          '**Advanced** Excel & Google Sheets integration for complex data validation and procurement workflows.',
          '**Strategic** PPC optimization and SEO auditing to maximize organic and paid reach.',
        ],
      },
    ],
  },
  skills: [
    {
      category: 'Amazon & E-commerce',
      items: [
        'Advanced Flat File Management',
        'Amazon SEO & PPC Optimization',
        'FBA Operations & Inventory Logistics',
        'Multi-Channel Scaling (eBay, Walmart)',
      ],
    },
    {
      category: 'Data & Tech Stack',
      items: [
        'E-commerce BI & Custom Tooling',
        'Data Analysis (Excel, Power BI, Tableau)',
        'Workflow Automation (Google Apps Script)',
        'Full-Stack Concepts (React, Node.js)',
      ],
    },
    {
      category: 'Operational Excellence',
      items: [
        'SOP Development & Documentation',
        'Account Health Compliance',
        'Brand Registry & Protection',
        'Supply Chain Management',
      ],
    },
  ],
  operatingPrinciples: [
    {
      title: 'Focus on Systems',
      description:
        'I build systems and run the ones already in place, improving efficiency and making work simpler for the whole team.',
    },
    {
      title: 'Data Integrity',
      description:
        'I build tools and dashboards—and improve existing ones—to deliver clear, reliable insights that drive smarter business decisions.',
    },
    {
      title: 'Team Empowerment',
      description:
        'I empower teams by clarifying workflows and reducing friction with clear, actionable processes.',
    },
  ],
  dailyRhythm: {
    title: 'Daily Focus: Support & Maintenance',
    description:
      'I manage the day-to-day operations of Amazon accounts with a focus on proactive problem-solving and continuous optimization. My routine balances immediate action and long-term improvement:',
    items: [
      'Morning Review & Health Check – Analyze account health, performance alerts, and customer feedback to tackle urgent issues before they escalate.',
      'Catalog & Listing Optimization – Address suppressions and compliance issues while identifying opportunities to increase visibility and sales.',
      'Case Management – Resolve Amazon support cases efficiently to minimize downtime and maintain operational continuity.',
      'PPC & Advertising Monitoring – Track campaigns daily, ensuring efficiency and maximizing ROI.',
      'Data Analysis & Reporting – Audit FBA performance and reconcile trackers to provide accurate, actionable insights.',
      {
        text: 'Knowledge Base & Tool Maintenance – Keep documentation, dashboards, and operational tools updated so teams can work seamlessly.',
        link: {
          text: 'View Operation Docs',
          url: 'https://github.com/johnwesleyquintero/listing-documentation',
        },
      },
      {
        text: 'Continuous Learning & Playbook Updates – Review strategies, update playbooks, and incorporate best practices to drive long-term growth.',
        link: {
          text: 'Explore Playbooks',
          url: 'https://wescode.vercel.app/blog',
        },
      },
    ],
  },
  tools: [
    {
      title: 'WesBI Intelligence Cockpit',
      label: 'WesBI - FBA Intelligence Cockpit',
      url: 'https://wes-bi.vercel.app/',
      icon: 'database-zap',
    },
    {
      title: 'Buy Box Master Pricing Tool',
      label: 'Buy Box Master - Strategic Pricing',
      url: 'https://buy-box-master.vercel.app/',
      icon: 'file-spreadsheet',
    },
  ],
  downloads: [
    {
      title: 'Latest Version Amazon Specialist',
      label: 'John Wesley Quintero - Hands-On Amazon Specialist.pdf',
      url: '/documents/John Wesley Quintero - Hands-On Amazon Specialist.pdf',
      icon: 'database-zap',
    },
    {
      title: 'Old Version Standard Resume',
      label: 'John Wesley Quintero - Resume Old Version.pdf',
      url: '/documents/John Wesley Quintero - Resume Old Version.pdf',
      icon: 'file-spreadsheet',
    },
  ],
}
