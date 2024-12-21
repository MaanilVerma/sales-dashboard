"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { StatsIcons } from "./Icons/StatsIcons";

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  type: "increase" | "decrease";
  icon: keyof typeof StatsIcons;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  type,
  icon,
  className,
}: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "bg-white p-6 rounded-3xl border-[0.5px] drop-shadow-sm transition-colors duration-200",
        isHovered && "bg-gray-50",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 mb-2">
        {StatsIcons[icon]}
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          {title}
        </p>
      </div>
      <p className="text-2xl font-semibold mt-2">{value}</p>
      <div className="flex items-center gap-1 mt-2">
        {type === "increase" ? <IncreaseIcon /> : <DecreaseIcon />}
        <p
          className={`text-sm ${
            type === "increase" ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}% <span className="text-gray-500">{type}</span>
        </p>
      </div>
    </div>
  );
}

const IncreaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.5 5.25V11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12C21.5511 12 21.3603 11.921 21.2197 11.7803C21.079 11.6397 21 11.4489 21 11.25V7.06031L13.2806 14.7806C13.211 14.8504 13.1283 14.9057 13.0372 14.9434C12.9462 14.9812 12.8486 15.0006 12.75 15.0006C12.6514 15.0006 12.5538 14.9812 12.4628 14.9434C12.3717 14.9057 12.289 14.8504 12.2194 14.7806L9 11.5603L2.78062 17.7806C2.63989 17.9214 2.44902 18.0004 2.25 18.0004C2.05097 18.0004 1.8601 17.9214 1.71937 17.7806C1.57864 17.6399 1.49958 17.449 1.49958 17.25C1.49958 17.051 1.57864 16.8601 1.71937 16.7194L8.46937 9.96937C8.53903 9.89964 8.62174 9.84432 8.71279 9.80658C8.80384 9.76884 8.90144 9.74941 9 9.74941C9.09856 9.74941 9.19615 9.76884 9.2872 9.80658C9.37825 9.84432 9.46097 9.89964 9.53062 9.96937L12.75 13.1897L19.9397 6H15.75C15.5511 6 15.3603 5.92098 15.2197 5.78033C15.079 5.63968 15 5.44891 15 5.25C15 5.05109 15.079 4.86032 15.2197 4.71967C15.3603 4.57902 15.5511 4.5 15.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25Z"
      fill="#22C55E"
    />
  </svg>
);

const DecreaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.5 18.75V12.75C22.5 12.5511 22.421 12.3603 22.2803 12.2197C22.1397 12.079 21.9489 12 21.75 12C21.5511 12 21.3603 12.079 21.2197 12.2197C21.079 12.3603 21 12.5511 21 12.75V16.9397L13.2806 9.21937C13.211 9.14964 13.1283 9.09432 13.0372 9.05658C12.9462 9.01884 12.8486 8.99941 12.75 8.99941C12.6514 8.99941 12.5538 9.01884 12.4628 9.05658C12.3717 9.09432 12.289 9.14964 12.2194 9.21937L9 12.4397L2.78062 6.21937C2.63989 6.07864 2.44902 5.99958 2.25 5.99958C2.05097 5.99958 1.8601 6.07864 1.71937 6.21937C1.57864 6.36011 1.49958 6.55098 1.49958 6.75C1.49958 6.94902 1.57864 7.13989 1.71937 7.28062L8.46937 14.0306C8.53903 14.1004 8.62174 14.1557 8.71279 14.1934C8.80384 14.2312 8.90144 14.2506 9 14.2506C9.09856 14.2506 9.19615 14.2312 9.2872 14.1934C9.37825 14.1557 9.46097 14.1004 9.53062 14.0306L12.75 10.8103L19.9397 18H15.75C15.5511 18 15.3603 18.079 15.2197 18.2197C15.079 18.3603 15 18.5511 15 18.75C15 18.9489 15.079 19.1397 15.2197 19.2803C15.3603 19.421 15.5511 19.5 15.75 19.5H21.75C21.9489 19.5 22.1397 19.421 22.2803 19.2803C22.421 19.1397 22.5 18.9489 22.5 18.75Z"
      fill="#EF4444"
    />
  </svg>
);
