import { Suspense } from "react";
import { OrdersSkeleton } from "@/components/Skeletons/OrdersSkeleton";

export default function SalesLoading() {
  return (
    <Suspense>
      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-8">
        <div className="mb-6">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mt-2" />
        </div>
        <OrdersSkeleton />
      </div>
    </Suspense>
  );
}
