interface TableHeaderProps {
  sortField: string;
  sortOrder: "asc" | "desc";
  onSort: (field: string) => void;
}

export function TableHeader({
  sortField,
  sortOrder,
  onSort,
}: TableHeaderProps) {
  const headers = [
    { key: "product", label: "Product" },
    { key: "date", label: "Date" },
    { key: "timeSpent", label: "Time spent" },
    { key: "orderValue", label: "Order Value" },
    { key: "commission", label: "Commission" },
  ];

  return (
    <thead>
      <tr className="bg-gray-50 border-b border-gray-100">
        {headers.map(({ key, label }) => (
          <th
            key={key}
            className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
            onClick={() => onSort(key)}
          >
            <div className="flex items-center gap-1">
              {label}
              {sortField === key && (
                <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
              )}
            </div>
          </th>
        ))}
        <th className="py-4 px-6" />
      </tr>
    </thead>
  );
}
