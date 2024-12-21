import { cn } from "@/lib/utils";
import { SkeletonProps } from "@/types";

export function StatsSkeleton({ className, count = 6 }: SkeletonProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
        className
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <StatCardSkeleton key={i} />
      ))}
    </div>
  );
}

function StatCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-3xl border-[0.5px] drop-shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 rounded-full bg-gray-200 animate-pulse" />
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="h-8 w-20 bg-gray-200 rounded mt-2 animate-pulse" />
      <div className="flex items-center gap-2 mt-2">
        <div className="w-6 h-6 rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
}
