"use client";

import { useEffect } from "react";
import { Button } from "./ui/button";
import { ErrorComponentProps } from "@/types";

export function ErrorBoundary({ error, reset }: ErrorComponentProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Something went wrong!
        </h2>
        <p className="text-gray-500 max-w-md">
          {error.message ||
            "An unexpected error occurred. Please try again later."}
        </p>
        <Button onClick={reset} variant="outline">
          Try again
        </Button>
      </div>
    </div>
  );
}
