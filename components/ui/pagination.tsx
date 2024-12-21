import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}: PaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("flex items-center justify-end", className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "h-8 w-8 p-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          )}
          aria-label="Go to previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                "h-8 min-w-[2rem] flex items-center justify-center text-sm transition-colors",
                page === currentPage
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-50",
                "rounded-md",
                page === currentPage ? "font-medium" : "font-normal"
              )}
              aria-label={`Go to page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "h-8 w-8 p-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          )}
          aria-label="Go to next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
}
