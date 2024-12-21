import { StatsIcons } from "@/components/Icons/StatsIcons";

export interface StatType {
  title: string;
  value: string | number;
  change: number;
  type: "increase" | "decrease";
  icon: keyof typeof StatsIcons;
}

export interface ProductType {
  id: number;
  name: string;
  image: string;
  category: 'Dresses' | 'Tops' | 'Bottoms' | 'Outerwear' | 'Accessories';
  price: number;
  color: string;
  size: string;
}

export interface OrderType {
  id: number;
  product: {
    name: string;
    image: string;
  };
  date: string;
  time: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
}

export interface StylistType {
  id: number;
  name: string;
  avatar: string;
  specialization: string[];
  rating: number;
  totalConsultations: number;
}

export interface WeeklyData {
  day: string;
  incoming: number;
  answered: number;
  experts: number;
}

export interface ComparisonData {
  period: string;
  consultations: number;
  orders: number;
}

export interface InsightsData {
  weeklyData: WeeklyData[];
  comparisonData: ComparisonData[];
} 

export interface SkeletonProps {
  className?: string;
  count?: number;
} 

export class ApiError extends Error {
  constructor(
    message: string,
    public code: "API_ERROR" | "UNKNOWN_ERROR" | "VALIDATION_ERROR"
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export interface ErrorState {
  error: Error;
  reset: () => void;
} 

export interface ErrorComponentProps {
  error: Error & { digest?: string };
  reset: () => void;
} 