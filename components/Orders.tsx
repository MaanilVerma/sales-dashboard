"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import ChatModal from "@/components/ChatModal";
import { orders as DummyOrders } from "@/lib/dummy-data";

interface Order {
  id: number;
  product: {
    name: string;
    image: string;
  };
  date: string;
  time: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
}

type SortField = "product" | "date" | "timeSpent" | "orderValue" | "commission";
type SortOrder = "asc" | "desc";

export default function Orders() {
  const [orders] = useState<Order[]>(DummyOrders);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const ordersPerPage = 5;

  const sortedOrders = useMemo(() => {
    return [...orders].sort((a, b) => {
      const aValue =
        sortField === "product"
          ? a.product.name
          : String(a[sortField as keyof Order]);
      const bValue =
        sortField === "product"
          ? b.product.name
          : String(b[sortField as keyof Order]);

      if (sortField === "orderValue" || sortField === "commission") {
        return (
          (parseFloat(aValue.replace("$", "").replace(",", "")) -
            parseFloat(bValue.replace("$", "").replace(",", ""))) *
          (sortOrder === "asc" ? 1 : -1)
        );
      }

      return aValue.localeCompare(bValue) * (sortOrder === "asc" ? 1 : -1);
    });
  }, [orders, sortField, sortOrder]);

  const currentOrders = useMemo(() => {
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    return sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  }, [sortedOrders, currentPage, ordersPerPage]);

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  return (
    <>
      <h1 className="text-xl md:text-3xl">Orders</h1>
      <div className="bg-white rounded-2xl border-[0.5px] drop-shadow-sm overflow-hidden">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-50 border-b border-gray-100">
              <TableCell
                className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("product")}
              >
                Product
                {sortField === "product" && (
                  <span className="ml-1">
                    {sortOrder === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </TableCell>
              <TableCell
                className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("date")}
              >
                Date
                {sortField === "date" && (
                  <span className="ml-1">
                    {sortOrder === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </TableCell>
              <TableCell
                className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("timeSpent")}
              >
                Time spent
                {sortField === "timeSpent" && (
                  <span className="ml-1">
                    {sortOrder === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </TableCell>
              <TableCell
                className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("orderValue")}
              >
                Order Value
                {sortField === "orderValue" && (
                  <span className="ml-1">
                    {sortOrder === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </TableCell>
              <TableCell
                className="text-left py-4 px-6 text-sm font-normal text-gray-500 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("commission")}
              >
                Commission
                {sortField === "commission" && (
                  <span className="ml-1">
                    {sortOrder === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </TableCell>
              <TableCell className="py-4 px-6"></TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentOrders.map((order) => (
              <TableRow
                key={order.id}
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <TableCell className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden relative">
                      <Image
                        src={order.product.image}
                        alt={order.product.name}
                        fill
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-900">
                      {order.product.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-900">{order.date}</span>
                    <span className="text-sm text-gray-500">{order.time}</span>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <span className="text-sm text-gray-900">
                    {order.timeSpent}
                  </span>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <span className="text-sm text-gray-900">
                    {order.orderValue}
                  </span>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <span className="text-sm font-medium text-gray-900">
                    {order.commission}
                  </span>
                </TableCell>
                <TableCell className="py-4 px-6">
                  <Button
                    onClick={() => {
                      setSelectedOrder(order);
                      setChatOpen(true);
                    }}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
                  >
                    View Chat
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-end px-6 py-4 border-t border-gray-100">
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-fit">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={`page-${page}`}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded-lg ${
                  currentPage === page
                    ? "bg-[#15B79E] text-white"
                    : "hover:bg-gray-50"
                }`}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      {selectedOrder && (
        <ChatModal
          isOpen={chatOpen}
          onClose={() => {
            setChatOpen(false);
            setSelectedOrder(null);
          }}
          orderId={selectedOrder.id}
          productName={selectedOrder.product.name}
        />
      )}
    </>
  );
}
