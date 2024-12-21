"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function HomeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="space-y-8 mx-2 md:mx-8 my-2 md:my-4 py-8 px-6 border rounded-3xl bg-white">
      <ErrorBoundary error={error} reset={reset} />
    </div>
  );
}
