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
      'Comprehensive inventory replenishment and purchase recommendation engine for Amazon FBA.',
    filename: 'BUY_RECOMMENDATIONS.xlsx',
    category: 'inventory',
    icon: Activity,
  },
  {
    id: 'buy-rec-5.0',
    title: 'Buy Rec 5.0 Legacy',
    description:
      'The classic version of the inventory replenishment engine for historical reference.',
    filename: 'Buy Rec 5.0 Legacy.xlsx',
    category: 'inventory',
    icon: Activity,
  },
  {
    id: 'buy-box-dominance',
    title: 'Buy Box Dominance Tracker',
    description: 'Track and analyze Buy Box percentage and competitor pricing dynamics over time.',
    filename: 'Buy_Box_Dominance_Tracker_v1.1.xlsx',
    category: 'pricing',
    icon: Layout,
  },
  {
    id: 'listing-health',
    title: 'Listing Health Sentiment Report',
    description:
      'Analyze customer sentiment and Voice of the Customer (VOC) signals for listing optimization.',
    filename: 'Listing_Health_Sentiment_Report_v1.0.xlsx',
    category: 'reporting',
    icon: PieChart,
  },
  {
    id: 'restock-recommender',
    title: 'Restock Recommender',
    description:
      'Inventory velocity-based restocking tool to prevent stockouts and optimize capital.',
    filename: 'Restock_Recommender_v1.2.xlsx',
    category: 'inventory',
    icon: FileSpreadsheet,
  },
  {
    id: 'surgical-strike',
    title: 'Surgical Strike Calculator',
    description:
      'High-precision pricing and profitability calculator for tactical Amazon maneuvers.',
    filename: 'Surgical_Strike_Calculator_v1.0.xlsx',
    category: 'analysis',
    icon: Calculator,
  },
]
