import { FileSpreadsheet, Layout, PieChart, Activity, Calculator, LucideIcon } from 'lucide-react'

export interface ExcelTemplate {
  id: string
  title: string
  description: string
  filename: string
  category: 'inventory' | 'pricing' | 'reporting' | 'analysis'
  icon: LucideIcon
}

export const TEMPLATES_DATA: ExcelTemplate[] = [
  {
    id: 'buy-recommendations',
    title: 'Buy Recommendations Engine',
    description:
      'Wholesale Buy Recommendation Engine. Helps make data-driven BUY/KILL/Prioritize decisions for wholesale inventory by calculating Profit, ROI, Days of Supply, and Recommended Order Quantity.',
    filename: 'BUY_RECOMMENDATIONS.xlsx',
    category: 'inventory',
    icon: Activity,
  },
  {
    id: 'buy-rec-5.0',
    title: 'Buy Rec 5.0 Legacy',
    description:
      'Previous iteration of the Wholesale Buy Recommendation Engine. Retained for historical reference or specific legacy workflows.',
    filename: 'Buy Rec 5.0 Legacy.xlsx',
    category: 'inventory',
    icon: Activity,
  },
  {
    id: 'buy-box-dominance',
    title: 'Buy Box Dominance Tracker',
    description:
      'Buy Box monitoring and strategy dashboard. Analyzes reports to identify ASINs losing the Buy Box and automatically prioritizes critical ASINs for corrective action.',
    filename: 'Buy_Box_Dominance_Tracker_v1.1.xlsx',
    category: 'pricing',
    icon: Layout,
  },
  {
    id: 'listing-health',
    title: 'Listing Health Sentiment Report',
    description:
      'Deep-dive ASIN analysis framework. Consolidates data from VOC, Business Reports, and Competitor Analysis with a structured tab for rigorous investigation.',
    filename: 'Listing_Health_Sentiment_Report_v1.0.xlsx',
    category: 'reporting',
    icon: PieChart,
  },
  {
    id: 'restock-recommender',
    title: 'Restock Recommender',
    description:
      'Supply chain and inventory command center. Blends FBA Inventory and Business Reports for precise forecasts with a Forecast Control Panel for growth trends.',
    filename: 'Restock_Recommender_v1.2.xlsx',
    category: 'inventory',
    icon: FileSpreadsheet,
  },
  {
    id: 'surgical-strike',
    title: 'Surgical Strike Calculator',
    description:
      'Precision tool for assessing promotion profitability. Calculates financial impact of proposed discounts by factoring in all costs and fees to determine net profit per unit.',
    filename: 'Surgical_Strike_Calculator_v1.0.xlsx',
    category: 'analysis',
    icon: Calculator,
  },
]
