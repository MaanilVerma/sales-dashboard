import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type ChartData } from "@/types/charts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);
}

export function formatChartData<T extends Record<string, any>>(
  data: T[],
  categories: (keyof T)[]
): ChartData[] {
  return data.map((item) => ({
    name: item.name,
    ...categories.reduce((acc, category) => ({
      ...acc,
      [category]: item[category]
    }), {})
  }));
}