"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ComparisonData } from "@/types";
import { cn } from "@/lib/utils";

interface ComparisonChartProps {
  data: ComparisonData[];
}

export function ComparisonChart({ data }: ComparisonChartProps) {
  return (
    <div className="bg-white py-4 md:py-6 rounded-3xl border-[0.5px] drop-shadow-sm h-full">
      <div className="flex items-center gap-2 mb-4 md:mb-6 px-4 md:px-6">
        <ComparisonIcon />
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          VS PAST PERIOD
        </p>
      </div>
      <div className="h-[250px] md:h-[300px] px-2 md:px-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 25 }}
            barGap={0}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F1F5F9"
            />
            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94A3B8" }}
              domain={[0, 25]}
            />
            <Tooltip wrapperClassName="rounded-lg" />
            <Bar
              dataKey="consultations"
              fill="#CCFBEF"
              barSize={30}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="orders"
              fill="#115E59"
              barSize={30}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <ChartLegend />
    </div>
  );
}

function ComparisonIcon() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
      <path
        d="M9.73031 0.9925C8.75859 0.506875 7.46859 0.25 6 0.25C4.53141 0.25 3.24141 0.506875 2.26969 0.9925C1.29797 1.47812 0.75 2.16156 0.75 2.875V5.125C0.75 5.83844 1.30406 6.52422 2.26969 7.0075C3.23531 7.49078 4.53141 7.75 6 7.75C7.46859 7.75 8.75859 7.49313 9.73031 7.0075C10.702 6.52188 11.25 5.83844 11.25 5.125V2.875C11.25 2.16156 10.6959 1.47578 9.73031 0.9925Z"
        fill="#667085"
      />
    </svg>
  );
}

function ChartLegend() {
  return (
    <div className="flex items-center gap-4 mt-4 border-t mx-6 pt-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-1 rounded-sm bg-[#CCFBEF]"></div>
        <span className="text-xs text-gray-600">Consultations</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-1 rounded-sm bg-[#115E59]"></div>
        <span className="text-xs text-gray-600">Orders closed</span>
      </div>
    </div>
  );
}
