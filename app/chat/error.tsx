"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function ChatError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex-1 bg-gray-50 min-h-[calc(100vh-48px)]">
      <ErrorBoundary error={error} reset={reset} />
    </div>
  );
}
