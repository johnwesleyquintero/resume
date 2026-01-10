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
  operatingPrinciples: {
    title: string
    description: string
  }[]
  dailyRhythm: {
    title: string
    description: string
    items: (string | { text: string; link: { text: string; url: string } })[]
  }
  amazonTools: {
    category: string
    items: {
      name: string
      description: string
      url?: string
    }[]
  }[]
  downloads: {
    title: string
    label: string
    url: string
    icon: string
  }[]
  tools?: {
    title: string
    label: string
    url: string
    icon: string
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
    {
      degree: 'Information Technology',
      school: 'Magugpo Institute of Technology',
      period: '2011 - 2014',
      details: 'Major in Computer Tech and Programming',
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
      'I am committed to identifying operational challenges and developing sustainable processes that help brands scale efficiently on **Amazon** and other marketplaces.',
    content:
      'I am a **Hands-On Amazon & E-commerce Specialist** with 6+ years driving growth across **Amazon** and global marketplaces. I bridge the gap between complex marketplace data and operational excellence by balancing **automated workflows** with **precise manual execution**—ensuring every listing is vetted and every process is scalable.',
  },
  experience: [
    {
      title: 'eCommerce Account Manager',
      company: 'VAXPH - Seculife | Speedtalk',
      period: 'July 2025 - Present',
      responsibilities: [
        'Driving cross-channel growth across **Amazon**, **eBay**, and **Walmart** through hands-on listing optimization and brand visibility strategies.',
        'Managing end-to-end product lifecycles, utilizing **Advanced Flat Files** for bulk catalog management and manual troubleshooting.',
        'Developing automated operational dashboards and **SOPs** to streamline team onboarding and manual workflows.',
        'Ensuring 100% account health compliance through proactive, hands-on monitoring of performance metrics and **VOC sentiment**.',
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
          text: 'Developed Operation Docs: A **GitHub** documentation repository created to serve as a reliable reference for product listings and operational workflows.',
          link: {
            text: 'View Documentation',
            url: 'https://github.com/johnwesleyquintero/listing-documentation',
          },
        },
        {
          text: 'Built **WesBI Cockpit** as my daily "mission control" for **inventory forecasting**, transforming raw **FBA** data into actionable stock-level insights.',
          link: {
            text: 'View WesBI',
            url: 'https://wes-bi.vercel.app/',
          },
        },
        {
          text: 'Created **Buy Box Master**, a real-time pricing intelligence tool used to monitor competitive gaps and maintain **Buy Box** dominance.',
          link: {
            text: 'View Buy Box Master',
            url: 'https://buy-box-master.vercel.app/',
          },
        },
        {
          text: 'Developed **Wholesale ROI Scouter**, a high-speed sourcing tool that automates supplier CSV merging, ROI calculations, and AI-driven brand protection.',
          link: {
            text: 'View ROI Scouter',
            url: 'https://ws-roi-sc.vercel.app/',
          },
        },
      ],
    },
    {
      title: 'Amazon Specialist',
      company: 'My Amazon Guy',
      period: 'October 2024 - March 2025',
      responsibilities: [
        'Implemented advanced **Amazon SEO** and **PPC** strategies using **Helium 10 (Cerebro/X-ray)** to drive client sales and market share.',
        'Developed custom reporting frameworks to improve client retention and provide strategic clarity on advertising performance.',
        'Leveraged **Data Dive** for deep competitive analysis and product launch planning, optimizing **ACoS** and organic ranking.',
      ],
    },
    {
      title: 'Item Specialist',
      company: 'Bulk Buy America',
      period: 'March 2024 - September 2024',
      responsibilities: [
        'Managed and optimized the Master Inventory File using **Price Checker 2** and **Keepa** to provide Amazon sellers with real-time profitability and pricing competitiveness data.',
        'Developed custom **Excel** tools to synchronize stock updates across the company website, ensuring 100% sell-through of updated inventory.',
        'Optimized large-scale **Amazon** catalogs for discoverability and data accuracy using advanced **Excel** functions (**VLOOKUP**, **Index-Match**) and automated procurement workflows.',
      ],
    },
    {
      title: 'Marketplace Support',
      company: 'Adorama',
      period: 'May 2023 - September 2023',
      responsibilities: [
        'Provided technical B2B support, resolving complex **Seller Central** integration issues and **API** discrepancies within standard SLAs.',
        {
          text: 'Developed the **Amazon Catalog Management SOP**, helping to recover lost revenue through systematic auditing and listing restoration.',
          link: {
            text: 'View SOP',
            url: 'https://docs.google.com/spreadsheets/d/1e9Z5XJ1P0x8PR8T5pSqWJ1zCs6W4nBUO/edit?gid=1206805883#gid=1206805883',
          },
        },
        {
          text: 'Created a **Google Sheet SOP** for **Amazon Jira Issues** to streamline issue tracking and resolution across departments.',
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
        'Managed end-to-end account health and performance metrics, utilizing **Keepa** for price history analysis and competitive monitoring.',
        'Implemented **SEO** and **PPC** campaigns that contributed to steady sales growth and improved organic visibility.',
        {
          text: 'Developed a comprehensive **SOP** for **FBA Department Operations** to prevent inventory discrepancies and ensure **FBA shipment reconciliation**.',
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
        'Sourced profitable wholesale products using **SellerAmp SAS** and **ScanUnlimited** for rapid catalog validation and **ROI analysis**.',
        {
          text: 'Developed an **SOP** for **Amazon Wholesale Buyers** to streamline the sourcing, negotiation, and procurement process.',
          link: {
            text: 'View SOP',
            url: 'https://docs.google.com/document/d/143PWwLDuCBMsXHWcmdAS83sQZthw0pUG/edit?usp=sharing&ouid=116050988128963817360&rtpof=true&sd=true',
          },
        },
      ],
    },
  ],
  amazonTools: [
    {
      category: 'Product Research & Opportunity Discovery',
      items: [
        {
          name: 'Helium 10',
          description:
            'Used for deep keyword research (Cerebro/Magnet) and identifying high-converting traffic sources via Reverse ASIN lookups.',
          url: 'https://www.helium10.com/',
        },
        {
          name: 'Jungle Scout',
          description:
            'Leveraged for competitive benchmarking, demand estimation, and identifying emerging product trends in the database.',
          url: 'https://www.junglescout.com/',
        },
        {
          name: 'Keepa',
          description:
            'Critical analysis of historical price stability, sales rank consistency, and competitor inventory levels to mitigate risk.',
          url: 'https://keepa.com/',
        },
      ],
    },
    {
      category: 'Wholesale, Catalog Scanning & ASIN Validation',
      items: [
        {
          name: 'ScanUnlimited',
          description:
            'Executing mass-scans of supplier price lists to rapidly identify profitable FBA/FBM opportunities at scale.',
          url: 'https://www.scanunlimited.com/',
        },
        {
          name: 'SellerAmp SAS',
          description:
            'Real-time profitability analysis, restriction checks, and Buy Box eligibility validation during high-speed product sourcing.',
          url: 'https://selleramp.com/',
        },
        {
          name: 'Price Checker 2',
          description:
            'Rapid validation of multi-supplier catalogs against live Amazon data to ensure target ROIs and margin integrity.',
          url: 'https://www.pricechecker2.com/',
        },
      ],
    },
    {
      category: 'Amazon Operations & Listing Execution',
      items: [
        {
          name: 'Amazon Seller Central',
          description:
            'End-to-end account management, including flat-file catalog updates, FBA logistics, and complex case resolution.',
          url: 'https://sellercentral.amazon.com/',
        },
        {
          name: 'Account Health Dashboard',
          description:
            'Proactive monitoring of performance metrics and policy compliance to protect brand equity and prevent account suppression.',
          url: 'https://sellercentral.amazon.com/performance/dashboard',
        },
        {
          name: 'Reimbursements',
          description:
            'Reconciling FBA inventory discrepancies to recover lost revenue from damaged, misplaced, or unreturned stock.',
        },
      ],
    },
    {
      category: 'Voice of Customer (VOC) & Listing Intelligence',
      items: [
        {
          name: 'Amazon VOC',
          description:
            'Extracting actionable product improvement insights from customer feedback, sentiment analysis, and return root-cause data.',
          url: 'https://sellercentral.amazon.com/voice-of-the-customer/',
        },
        {
          name: 'Reviews & Returns Analysis',
          description:
            'Systematic auditing of customer sentiment to reduce return rates and improve listing conversion through feedback-driven optimization.',
          url: 'https://sellercentral.amazon.com/brand-customer-reviews/ref=xx_crvws_dnav_xx?includeDone=true&pageSize=50&stars=1',
        },
        {
          name: 'Amazon Brand Analytics',
          description:
            'Analyzing first-party Search Query Performance (SQP) and Market Basket data to validate customer search intent and repeat purchase behavior.',
          url: 'https://sellercentral.amazon.com/analytics/dashboard/search-query-performance',
        },
      ],
    },
    {
      category: 'Advertising, Demand Signals & Performance Monitoring',
      items: [
        {
          name: 'Amazon Ads Console',
          description:
            'Managing Sponsored Products/Brands/Display campaigns with a focus on ACoS optimization and market share growth.',
          url: 'https://advertising.amazon.com/',
        },
        {
          name: 'PPC Diagnostics',
          description:
            'Identifying search term trends and harvest opportunities to scale high-performing keywords and defend brand presence.',
        },
        {
          name: 'Looker Studio',
          description:
            'Creating custom, high-level data visualizations and cross-channel performance dashboards for stakeholder reporting.',
          url: 'https://lookerstudio.google.com/',
        },
      ],
    },
    {
      category: 'Data Analysis & Decision Support',
      items: [
        {
          name: 'Data Dive',
          description:
            'Advanced competitive analysis and launch strategy development by aggregating massive data signals into actionable product roadmaps.',
          url: 'https://datadive.tools/',
        },
        {
          name: 'Excel',
          description:
            'Building custom financial models for fee reconciliation, inventory velocity tracking, and risk-adjusted ROI scoring.',
          url: 'https://excel.cloud.microsoft/',
        },
        {
          name: 'Google Sheets',
          description:
            'Designing automated workflow solutions and collaborative dashboards for real-time inventory and performance tracking.',
          url: 'https://docs.google.com/spreadsheets/u/0/',
        },
      ],
    },
  ],
  operatingPrinciples: [
    {
      title: 'Manual Precision',
      description:
        'Executing high-stakes tasks manually when precision is paramount, ensuring zero-error catalog updates.',
    },
    {
      title: 'Systems & Logic',
      description:
        'Building automated systems to simplify workflows while maintaining hands-on oversight for quality control.',
    },
    {
      title: 'Data Integrity',
      description:
        'Engineering reliable BI tools that deliver actionable insights, vetted through manual data validation.',
    },
    {
      title: 'Team Empowerment',
      description:
        'Reducing friction through clear documentation and SOPs that guide both manual and automated tasks.',
    },
    {
      title: 'Marketplace Ops',
      description:
        'Expert flat-file manipulation for bulk updates and proactive, hands-on management of account health.',
    },
  ],
  dailyRhythm: {
    title: 'Daily Focus: Support & Maintenance',
    description:
      'Proactively managing Amazon account ecosystems by balancing high-priority problem solving with continuous growth optimization:',
    items: [
      '**Account Health Guard**: Real-time monitoring and hands-on resolution of performance metrics and **VOC signals**.',
      '**Catalog Integrity**: Executing bulk updates via **flat files** with manual vetting to ensure listing accuracy.',
      '**Logistics & FBA**: Hands-on reconciliation of inventory shipments and stock forecasting via **WesBI**.',
      '**PPC & Demand**: Scaling ad campaigns while manually harvesting new keyword opportunities to lower **ACoS**.',
      '**Case Management**: Directly navigating and negotiating complex **Seller Support** cases for operational continuity.',
      {
        text: '**Systems & SOPs**: Updating documentation and automating repetitive workflows to empower team efficiency.',
        link: {
          text: 'View Docs',
          url: 'https://github.com/johnwesleyquintero/listing-documentation',
        },
      },
      {
        text: '**Growth Strategy**: Analyzing market trends and competitor behavior to refine brand playbooks.',
        link: {
          text: 'View Insights',
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
      icon: 'layout-dashboard',
    },
    {
      title: 'Buy Box Master Pricing Tool',
      label: 'Buy Box Master - Strategic Pricing',
      url: 'https://buy-box-master.vercel.app/',
      icon: 'trending-up',
    },
    {
      title: 'Wholesale ROI Scouter',
      label: 'Wholesale ROI Scouter - Sourcing Brain',
      url: 'https://ws-roi-sc.vercel.app/',
      icon: 'zap',
    },
  ],
  downloads: [
    {
      title: 'Latest Version Amazon Specialist',
      label: 'John Wesley Quintero - Hands-On Amazon Specialist.pdf',
      url: '/documents/John Wesley Quintero - Hands-On Amazon Specialist.pdf',
      icon: 'file-text',
    },
    {
      title: 'Old Version Standard Resume',
      label: 'John Wesley Quintero - Resume Old Version.pdf',
      url: '/documents/John Wesley Quintero - Resume Old Version.pdf',
      icon: 'file-archive',
    },
  ],
}
