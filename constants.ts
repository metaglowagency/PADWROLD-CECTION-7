import { KpiItem } from './types';

export const ACCESS_KEY = "padworld";

export const INITIAL_LOGS = [
  "[✓] Revenue Streams Loaded",
  "[✓] Franchise Economics Verified",
  "[✓] Unit Economics Calculated",
  "[✓] ROI Scenarios Ready",
  "[✓] Global Scaling Model Synced",
];

export const CORE_KPIS: KpiItem[] = [
  { label: "Avg Revenue / Center", value: "$1.2M", sub: "Annual Projection", color: "lime" },
  { label: "Avg EBITDA Margin", value: "42%", sub: "Operational Efficiency", color: "blue" },
  { label: "Payback Period", value: "18-24", sub: "Months", color: "white" },
  { label: "ROI Range", value: "35-55%", sub: "Annualized", color: "lime" },
  { label: "PadWorld Share", value: "25%", sub: "Revenue Share", color: "white" },
];

export const REVENUE_STACK = [
  "PadWorld Inside (OEM)",
  "Franchise Royalties",
  "PadResort & Hospitality",
  "PadWellness & Recovery",
  "Sponsorship & Media",
  "PadWear & Merch",
  "PadWater (Functional)",
  "Pad&Juice",
  "Tournaments & Leagues",
  "Smart Court Tech & OS",
  "PadChat (AI Premium)",
  "Court Play (Hourly)",
];
