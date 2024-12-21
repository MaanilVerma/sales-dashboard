import { Suspense } from "react";

export default function ChatLoading() {
  return (
    <Suspense>
      <div className="flex-1 bg-gray-50 min-h-[calc(100vh-48px)]">
        <div className="p-6">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mt-2" />
        </div>
        <div className="mx-6 h-full flex flex-col bg-white rounded-2xl shadow-sm">
          <div className="flex-1 overflow-y-auto mb-2 md:mb-4 space-y-4 p-4 md:p-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] md:max-w-[70%] rounded-2xl p-4 ${
                    i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  } animate-pulse`}
                >
                  <div className="h-4 w-48 bg-gray-300 rounded" />
                  <div className="h-3 w-16 bg-gray-300 rounded mt-2" />
                </div>
              </div>
            ))}
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <div className="flex-1 h-12 bg-gray-200 rounded-xl animate-pulse" />
              <div className="w-24 h-12 bg-gray-200 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
