export interface StarScenario {
  id: string
  title: string
  question: string
  situation: string
  task: string
  action: string
  result: string
  category: 'listing' | 'inventory' | 'advertising' | 'compliance' | 'operational'
}

export const FAQS_DATA: StarScenario[] = [
  {
    id: 'listing-optimization-001',
    title: 'Catalog Optimization & Bulk Updates',
    question: 'How do you handle large-scale catalog updates on Amazon?',
    situation:
      'The brand had over 500 listings with inconsistent titles, missing backend keywords, and poor image optimization, leading to low organic visibility.',
    task: 'My task was to overhaul the entire catalog to improve SEO rankings and ensure brand consistency across all SKUs.',
    action:
      'I exported the category listing reports and used advanced Excel flat files for bulk updates. I implemented a standardized naming convention, performed keyword research using Helium 10, and updated backend search terms. I also audited image compliance and corrected category browse node issues.',
    result:
      'Across the top 20 priority ASINs, organic sessions increased by 35% within the first 60 days, and the overall conversion rate improved by 12% due to clearer product information and better discoverability.',
    category: 'listing',
  },
  {
    id: 'inventory-forecasting-002',
    title: 'Inventory Stockout Prevention',
    question: 'Tell me about a time you prevented a major stockout.',
    situation:
      'During a peak season, our top-selling SKU was moving 3x faster than projected, risking a complete stockout that would have killed our organic ranking.',
    task: 'I needed to quickly adjust the supply chain flow and manage customer expectations while maintaining the Buy Box.',
    action:
      'I developed the "WesBI Cockpit" dashboard to track real-time FBA velocity. I immediately diverted a portion of our inbound sea shipment to air freight to bridge the gap. Simultaneously, I slightly increased the price to slow down velocity without losing Buy Box ownership and paused low-efficiency PPC campaigns to preserve stock for organic sales.',
    result:
      'We maintained 100% in-stock rate through the peak period. While we saw a slight dip in daily units due to the price increase, the overall profit margin increased, and we preserved our #1 Best Seller Rank.',
    category: 'inventory',
  },
  {
    id: 'troubleshooting-003',
    title: 'Resolving Account Health Issues',
    question: 'How do you handle Amazon policy violations or listing suppressions?',
    situation:
      'A high-volume listing was suddenly suppressed due to a "restricted product" false positive flag from Amazon\'s automated system.',
    task: 'My goal was to get the listing reinstated as quickly as possible to minimize revenue loss, which was averaging $2,000 per day.',
    action:
      "I immediately audited the listing for any trigger words and cross-referenced with Amazon's restricted product policies. I opened a Case with Seller Support, providing a clear, evidence-based appeal including manufacturer invoices, safety data sheets (SDS), and a detailed explanation of why the flag was a false positive.",
    result:
      'The listing was reinstated within 48 hours. I then created an internal SOP for "Proactive Listing Audits" to identify potential trigger words before they could cause future suppressions.',
    category: 'compliance',
  },
  {
    id: 'operational-efficiency-004',
    title: 'Buy Box Master: Automating Multi-Store Reporting',
    question: 'Tell me about a time you improved a team workflow through automation.',
    situation:
      'Our boss required the team to check Buy Box status every 2 hours across 7 different brand stores. The team was struggling to deliver reports on time because they were manually checking hundreds of ASINs one by one, which was highly inefficient.',
    task: 'I needed to identify the bottleneck in our reporting process and find a scalable solution that would allow the team to monitor all brands simultaneously without missing deadlines.',
    action:
      'I investigated the manual workflow and proposed building a custom internal tool because no off-the-shelf tool met our multi-brand reporting needs. I developed "Buy Box Master," an application that processes Keepa data exports in bulk. I also integrated a user guide directly into the UI to ensure the team could use it independently. This shifted the process from manual ASIN lookups to automated data processing.',
    result:
      'The team transitioned from late, partial reports to 100% timely delivery. We now proactively identify Buy Box suppressions and stock-outs across all 7 brands, directly leading to faster recovery of lost sales and maximized visibility.',
    category: 'operational',
  },
  {
    id: 'inventory-automation-005',
    title: 'WesBI: Advanced FBA Inventory Forecasting',
    question: 'How do you handle inventory restock recommendations for a large number of SKUs?',
    situation:
      'Manual inventory tracking was becoming a bottleneck as the catalog grew. We needed a more sophisticated way to handle FBA snapshots and generate accurate restock recommendations that accounted for lead times and safety stock.',
    task: 'I set out to build a comprehensive tool that could transform raw FBA data into actionable insights and forecasting models.',
    action:
      'I developed "WesBI," a custom analytics dashboard. I designed it to process FBA Snapshot .csv files via drag-and-drop. I implemented features like rule-based insights with optional AI-assisted analysis using Gemini, visual charts for inventory age, and a robust restock forecasting engine. The forecasting logic allows users to fine-tune recommendations by adjusting Supplier Lead Time, Safety Stock, and Demand Forecast percentages.',
    result:
      'WesBI became our primary "mission control" for inventory. It automated the calculation of 30-day sales velocity across the entire catalog, allowing us to maintain optimal stock levels and significantly reduce both overstocking and stock-out risks.',
    category: 'inventory',
  },
  {
    id: 'case-study-strategy-006',
    title: 'Pre-Interview Case Study Strategy',
    question: 'How do you prove your value before even being hired?',
    situation:
      'Applying for the role at VAXPH, where the competition was high and I needed to demonstrate my specific problem-solving approach for their unique brands.',
    task: 'I wanted to show, not just tell, how I would handle their specific brands (SecuLife and SpeedTalk) before the interview to establish immediate trust.',
    action:
      'I researched their brands and created two comprehensive, live case studies hosted on Netlify. These analyzed their market position, identified operational bottlenecks, and proposed growth strategies using my "Playbook Doctrine" approach.',
    result:
      'This was a key factor in getting hired. It demonstrated my proactive nature and technical capability, allowing the interview to focus on high-level strategy rather than basic skill verification.',
    category: 'operational',
  },
  {
    id: 'ppc-optimization-007',
    title: 'Data-Driven PPC & Organic Growth',
    question: "Walk me through a time you significantly improved a client's PPC performance.",
    situation:
      'A client at My Amazon Guy was struggling with high ACoS and stagnant organic rankings despite heavy ad spend, leading to poor overall profitability.',
    task: 'I needed to reduce wasted ad spend while simultaneously boosting organic visibility for their core high-volume keywords.',
    action:
      'I used Helium 10 for deep reverse ASIN lookups to identify high-converting, low-competition keywords. I restructured campaigns into Auto, Research, and Performance tiers and used Data Dive to align the PPC strategy with organic ranking goals.',
    result:
      'ACoS dropped by 20% within the first month, and organic rankings for top-tier keywords moved from page 3 to page 1, leading to a 25% increase in total sales volume.',
    category: 'advertising',
  },
  {
    id: 'wholesale-sourcing-008',
    title: 'Wholesale Sourcing & Rapid ROI Validation',
    question: 'How do you handle high-speed product sourcing for wholesale?',
    situation:
      'At Sales.support, we were processing supplier lists with thousands of items, and manual checking was too slow to catch profitable deals before competitors.',
    task: 'I needed to create a workflow that could rapidly validate ROI and stock levels for hundreds of SKUs daily.',
    action:
      'I implemented ScanUnlimited for mass-scanning supplier files and used SellerAmp SAS for real-time restriction and Buy Box eligibility checks. I also developed an internal SOP for "Wholesale Buyers" to standardize the negotiation and procurement process.',
    result:
      'We increased our weekly sourcing throughput by 400% from a small baseline and maintained a consistent ROI of 30%+ across the wholesale catalog by identifying deals faster than the competition.',
    category: 'inventory',
  },
  {
    id: 'multi-channel-expansion-009',
    title: 'Multi-Channel Scaling: Amazon to Walmart & eBay',
    question: 'How do you approach expanding a brand from Amazon to other marketplaces?',
    situation:
      'After stabilizing the Amazon account for SecuLife, we saw an opportunity to capture additional market share on eBay and Walmart while maintaining brand consistency.',
    task: 'My task was to lead the cross-channel expansion without significantly increasing the operational workload for the team.',
    action:
      "I utilized advanced flat files to adapt Amazon catalog data for eBay and Walmart specifications. I set up synchronized inventory tracking to prevent overselling and tailored the SEO for each platform's specific search algorithm.",
    result:
      'Cross-channel sales increased by 20% in the first quarter, and we successfully established a "Brand Store" presence on all three platforms with 100% catalog parity.',
    category: 'listing',
  },
  {
    id: 'catalog-api-troubleshooting-010',
    title: 'Resolving Complex Catalog & API Discrepancies',
    question: 'Tell me about a time you solved a complex technical issue with an Amazon catalog.',
    situation:
      'At Adorama, high-value ASINs were suffering from API discrepancies that caused incorrect pricing and stock levels to sync between the internal system and Seller Central.',
    task: 'I needed to identify the root cause of the sync error and restore catalog integrity to prevent further lost revenue and customer dissatisfaction.',
    action:
      'I audited the Seller Central API logs and identified a browse node conflict. I developed a "Catalog Management SOP" that involved manual flat-file overrides to bypass the sync issue and worked with the tech team to implement a long-term fix.',
    result:
      'We recovered approximately $15,000 in potentially lost monthly revenue and reduced catalog sync errors by 90%, ensuring price and stock accuracy across the entire account.',
    category: 'listing',
  },
  {
    id: 'a-plus-framework-011',
    title: 'A+ Premium Framework: Conversion-Focused Product Storytelling',
    question: 'How do you approach building high-converting A+ or Premium A+ content?',
    situation:
      'Both SecuLife and SpeedTalk had A+ content that was visually inconsistent, feature-heavy, and not aligned with how customers actually evaluated compatibility, coverage, and value. This led to confusion, increased pre-sale questions, and missed conversion opportunities.',
    task: 'My goal was to design a repeatable A+ / Premium A+ framework that could improve conversion rates, reduce customer friction, and scale across multiple ASINs and product lines.',
    action:
      'I created the A+ Premium Framework v1.0, grounded in SQP data, Voice of the Customer analysis, and competitor benchmarking. I mapped customer decision-making into modular sections such as Hero, Compatibility, Plan Options, Activation Steps, Coverage, and FAQs. I designed reusable Canva wireframes, implemented disciplined keyword layering, and enforced a brand-safe visual doctrine to ensure consistency across all future builds.',
    result:
      'The framework standardized how we tell product stories across the catalog, reduced customer confusion around compatibility and activation, and improved conversion efficiency on priority ASINs. It also enabled faster A+ production, easier iteration, and consistent brand presentation across SpeedTalk and SecuLife.',
    category: 'listing',
  },
  {
    id: 'wholesale-scouter-012',
    title: 'Wholesale ROI Scouter: From Manual Sourcing to Automated Intelligence',
    question: 'How do you scale wholesale sourcing when dealing with thousands of SKUs?',
    situation:
      'During my time at Sales.support, we were sourcing profitable wholesale products from massive supplier catalogs. Even with ScanUnlimited and SellerAmp, we faced constant bottlenecks in data cleanup, column mapping, and identifying "hidden gems" in lists with thousands of lines.',
    task: 'I set out to build a "Sourcing Brain" that could automate the validation process and provide an instant, visual verdict on catalog profitability.',
    action:
      'I developed the "Wholesale ROI Scouter," a custom application that processes supplier CSVs and merges them with Keepa data in seconds. I implemented automated ROI/Net Profit calculations, AI-driven brand restriction checks to avoid IP complaints, and integrated Recharts to visualize the profit distribution of the entire catalog. This moved us away from manual Excel manipulation and into high-speed, data-backed procurement.',
    result:
      'The tool reduced catalog processing time by over 70% and allowed us to identify high-ROI opportunities that were previously missed due to manual fatigue. It standardized our "Wholesale Buyer" workflow, ensuring that every purchase was vetted against real-time profitability and brand safety metrics.',
    category: 'inventory',
  },
  {
    id: 'inventory-sync-013',
    title: 'Multi-Channel Stock Synchronization via Excel Automation',
    question: 'How do you ensure stock accuracy between Amazon and other sales channels?',
    situation:
      'At Bulk Buy America, we struggled to keep our company website synchronized with our live Amazon FBA inventory, leading to occasional overselling and manual data entry errors.',
    task: 'My goal was to create a reliable, automated bridge between Amazon and our website to ensure 100% stock accuracy.',
    action:
      'I optimized the Master Inventory File by integrating Price Checker 2 and Keepa data. I developed a custom Excel tool using advanced VLOOKUP and Index-Match functions that automated the synchronization process, allowing us to update website stock levels based on real-time Amazon velocity and FBA availability.',
    result:
      'We achieved a 100% sell-through rate on updated inventory and completely eliminated overselling incidents. This automation saved the team hours of manual data entry and ensured a seamless customer experience across channels.',
    category: 'inventory',
  },
  {
    id: 'fba-logistics-014',
    title: 'Standardizing FBA Logistics & Shipment Reconciliation',
    question: 'How do you handle inventory discrepancies and FBA reimbursements?',
    situation:
      'Champion E-com LLC was experiencing frequent inventory losses during the FBA inbound process, resulting in unrecovered revenue and skewed stock levels.',
    task: 'I needed to implement a standardized logistics workflow that would ensure every unit sent to FBA was accounted for or reimbursed.',
    action:
      'I developed a comprehensive "FBA Department Operations SOP." I established a disciplined shipment reconciliation cycle, using Seller Central reports to identify missing units and opening evidence-based cases for reimbursements. I also improved the physical prep-and-pack checklist to ensure 100% labeling accuracy before shipments left the warehouse.',
    result:
      'Inventory discrepancies dropped by 90% within the first quarter. We successfully recovered thousands of dollars in lost revenue through systematic reimbursements, and the account maintained a perfect FBA inbound performance rating.',
    category: 'operational',
  },
]
