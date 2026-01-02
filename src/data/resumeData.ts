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
    'Advanced Google Data Analytics',
  ],
  languages: ['English (Professional)', 'Tagalog (Native)', 'Cebuano (Native)'],
  summary: {
    quote:
      'I am committed to identifying operational challenges and developing sustainable processes that help brands scale efficiently on Amazon and other marketplaces.',
    content:
      'I am a Hands-On Amazon & E-commerce Specialist with over 6 years of experience driving growth through operational excellence and data-backed strategies. I specialize in Amazon FBA management, advanced flat file manipulation, and PPC optimization. By bridging the gap between high-level strategy and daily execution, I build reliable systems and custom tools like WesBI to ensure consistent profitability and brand visibility across global marketplaces.',
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
          text: 'Developed Operation Citadel: A GitHub documentation repository created to serve as a reliable reference for product listings and operational playbooks.',
          link: {
            text: 'View Documentation',
            url: 'https://github.com/johnwesleyquintero/listing-documentation',
          },
        },
        {
          text: 'Built WesBI Cockpit to assist with inventory forecasting, helping to reduce stock-outs and improve capital management.',
          link: {
            text: 'View WesBI',
            url: 'https://wes-bi.vercel.app/',
          },
        },
        {
          text: 'Created Buy Box Master to monitor pricing gaps and help maintain competitive positioning on Amazon.',
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
        'I believe in building systems that solve problems for the long term, making work easier and more efficient for the whole team.',
    },
    {
      title: 'Data Integrity',
      description:
        'I prioritize building tools and dashboards (like WesBI) that provide clear, reliable insights to help inform better business decisions.',
    },
    {
      title: 'Team Empowerment',
      description:
        'My goal is to support teams by providing clarity and reducing operational friction through well-documented processes.',
    },
  ],
  dailyRhythm: {
    title: 'Daily Focus: Support & Maintenance',
    description:
      'A look into my daily routine, focused on proactive account management and helping solve operational challenges:',
    items: [
      'Morning Review & Health Check: Reviewing Account Health, performance notifications, and customer feedback to address any immediate needs.',
      'Catalog & Listing Support: Addressing suppressions and compliance issues while looking for ways to improve listing visibility.',
      'Case Log & Support Management: Following up on Amazon support cases to help ensure timely resolutions.',
      'PPC & Advertising Monitoring: Regular checks on active campaigns to monitor performance and efficiency.',
      'Data Analysis & Reporting: Reconciling performance trackers and FBA audits to help ensure accuracy.',
      {
        text: 'Knowledge Base Support: Keeping documentation and tools like WesBI updated to ensure the team has access to current information.',
        link: {
          text: 'View Operation Citadel',
          url: 'https://github.com/johnwesleyquintero/listing-documentation',
        },
      },
      {
        text: 'Continuous Learning: Reviewing and updating playbooks on Amazon strategies and e-commerce best practices.',
        link: {
          text: 'Explore Playbooks',
          url: 'https://wescode.vercel.app/blog',
        },
      },
    ],
  },
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
