export interface StatsItem {
  title: string;
  value: string;
  change: number;
  subtitle: string;
  icon?: string; 
}

export interface Category {
  name: string;
  amount: number;
  color: string;
}