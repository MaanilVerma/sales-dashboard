export interface ChartData {
  name: string;
  [key: string]: number | string;
}

export interface ChartProps {
  data: ChartData[];
  categories: string[];
  colors: string[];
  height?: number;
}