import { SkeletonProps } from "@/types";
import { cn } from "@/lib/utils";

export function InsightsSkeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("flex flex-col lg:flex-row gap-6 overflow-auto", className)}
    >
      <div className="flex-1 col-span-1 lg:col-span-7 bg-white py-6 rounded-3xl border-[0.5px] drop-shadow-sm px-2">
        <div className="flex items-center gap-2 mb-6 px-6">
          <div className="w-4 h-4 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-[300px] bg-gray-100 rounded-lg animate-pulse mx-6" />
      </div>

      <div className="lg:w-[260px] col-span-1 lg:col-span-3 bg-white py-8 rounded-3xl border-[0.5px] drop-shadow-sm">
        <div className="flex items-center gap-2 mb-6 px-6">
          <div className="w-4 h-4 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-[300px] bg-gray-100 rounded-lg animate-pulse mx-6" />
      </div>

      <div className="lg:w-[260px] col-span-1 lg:col-span-2 bg-[#15B79E] p-6 rounded-3xl">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-white/20 animate-pulse" />
          <div className="h-4 w-24 bg-white/20 rounded animate-pulse" />
        </div>
        <div className="space-y-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-12 w-32 bg-white/20 rounded animate-pulse" />
              <div className="h-4 w-full bg-white/20 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
