"use client";

import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  Tooltip,
} from "recharts";
import { WeeklyData } from "@/types";
import { cn } from "@/lib/utils";

interface ConsultationsChartProps {
  data: WeeklyData[];
}

export function ConsultationsChart({ data }: ConsultationsChartProps) {
  return (
    <div className="bg-white py-4 md:py-6 rounded-3xl border-[0.5px] drop-shadow-sm h-full">
      <div className="flex items-center gap-2 mb-4 md:mb-6 px-4 md:px-6">
        <ConsultationsIcon />
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          CONSULTATIONS
        </p>
      </div>
      <div className="h-[250px] md:h-[300px] px-2 md:px-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#F1F5F9"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              dy={10}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              dx={-10}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              domain={[0, 60]}
              yAxisId="left"
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              dx={10}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              domain={[0, 20]}
            />
            <Tooltip wrapperClassName="rounded-lg" />
            <Bar
              dataKey="experts"
              fill="#FEF9C3"
              yAxisId="right"
              barSize={40}
              radius={[4, 4, 0, 0]}
            />
            <Line
              type="monotone"
              dataKey="incoming"
              stroke="#94A3B8"
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5"
              yAxisId="left"
            />
            <Line
              type="monotone"
              dataKey="answered"
              stroke="#15B79E"
              strokeWidth={2}
              dot={false}
              yAxisId="left"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <ChartLegend />
    </div>
  );
}

function ConsultationsIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M9.875 4.8125C9.87364 6.05528 9.37934 7.24677 8.50056 8.12556C7.62177 9.00434 6.43028 9.49864 5.1875 9.5H1.23453C1.0398 9.49975 0.853111 9.42228 0.715413 9.28459C0.577716 9.14689 0.500248 8.9602 0.5 8.76547V4.8125C0.5 3.5693 0.99386 2.37701 1.87294 1.49794C2.75201 0.61886 3.9443 0.125 5.1875 0.125C6.4307 0.125 7.62299 0.61886 8.50206 1.49794C9.38114 2.37701 9.875 3.5693 9.875 4.8125Z"
        fill="#667085"
      />
    </svg>
  );
}

function ChartLegend({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 mt-4 border-t mx-6 pt-4",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <div className="w-3 h-1 rounded-sm bg-[#94A3B8]"></div>
        <span className="text-xs text-gray-600">Incoming</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-1 rounded-sm bg-[#15B79E]"></div>
        <span className="text-xs text-gray-600">Answered</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-1 rounded-sm bg-[#FEF9C3]"></div>
        <span className="text-xs text-gray-600">Experts online</span>
      </div>
    </div>
  );
}
