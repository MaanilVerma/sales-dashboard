"use client";

import StatsGrid from "@/components/StatsGrid";
import InsightsSection from "@/components/InsightsSection";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDown } from "lucide-react";
import { Orders } from "@/components/Orders/Orders";

export default function Dashboard() {
  return <SummaryView />;
}

function SummaryView() {
  return (
    <div className="space-y-8 mx-2 md:mx-8 my-5 md:my-4 py-8 px-2 border rounded-3xl bg-white">
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-xl md:text-3xl ">At a glance</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="sm"
              className="w-min md:px-4 md:py-2 space-x-2 bg-white rounded-lg text-sm text-gray-600 border border-gray-200"
            >
              <p>7 Days</p>
              <ArrowDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem onSelect={() => console.log("7 Days selected")}>
              7 Days
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <StatsGrid />
      <InsightsSection />
      <Orders />
    </div>
  );
}
