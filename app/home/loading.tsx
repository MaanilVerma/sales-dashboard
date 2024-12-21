import { Suspense } from "react";
import { StatsSkeleton } from "@/components/Skeletons/StatsSkeleton";
import { OrdersSkeleton } from "@/components/Skeletons/OrdersSkeleton";
import { InsightsSkeleton } from "@/components/Skeletons/InsightsSkeleton";

export default function HomeLoading() {
  return (
    <Suspense>
      <div className="space-y-8 mx-2 md:mx-8 my-2 md:my-4 py-8 px-6 border rounded-3xl bg-white">
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-xl md:text-3xl">At a glance</h1>
          <div className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
        </div>
        <StatsSkeleton />
        <InsightsSkeleton />
        <OrdersSkeleton />
      </div>
    </Suspense>
  );
}
