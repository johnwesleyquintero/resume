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
      'Organic sessions increased by 35% within the first 60 days, and the overall conversion rate improved by 12% due to clearer product information and better discoverability.',
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
      'I developed the "WesBI Cockpit" dashboard to track real-time FBA velocity. I immediately diverted a portion of our inbound sea shipment to air freight to bridge the gap. Simultaneously, I slightly increased the price to slow down velocity without losing the Buy Box and paused low-efficiency PPC campaigns to preserve stock for organic sales.',
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
      'I investigated the manual workflow and proposed building a custom internal tool. I developed "Buy Box Master," an application that processes Keepa data exports in bulk. I also integrated a user guide directly into the UI to ensure the team could use it independently. This shifted the process from manual ASIN lookups to automated data processing.',
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
      'I developed "WesBI," a custom analytics dashboard. I designed it to process FBA Snapshot .csv files via drag-and-drop. I implemented features like AI-driven insights using Gemini, visual charts for inventory age, and a robust restock forecasting engine. The forecasting logic allows users to fine-tune recommendations by adjusting Supplier Lead Time, Safety Stock, and Demand Forecast percentages.',
    result:
      'WesBI became our primary "mission control" for inventory. It automated the calculation of 30-day sales velocity across the entire catalog, allowing us to maintain optimal stock levels and significantly reduce both overstocking and stock-out risks.',
    category: 'inventory',
  },
]
