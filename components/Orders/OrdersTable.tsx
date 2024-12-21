"use client";

import { useState } from "react";
import { OrderType } from "@/types";
import { TableHeader } from "./TableHeader";
import { OrderRow } from "./OrderRow";
import { Pagination } from "../ui/pagination";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useChat } from "@/context/ChatContext";

interface OrdersTableProps {
  orders: OrderType[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const { openChat } = useChat();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<keyof OrderType>("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const ordersPerPage = 5;

  const sortedOrders = [...orders].sort((a, b) => {
    const aValue =
      sortField === "product" ? a.product.name : String(a[sortField]);
    const bValue =
      sortField === "product" ? b.product.name : String(b[sortField]);

    if (sortField === "orderValue" || sortField === "commission") {
      return (
        (parseFloat(aValue.replace("$", "").replace(",", "")) -
          parseFloat(bValue.replace("$", "").replace(",", ""))) *
        (sortOrder === "asc" ? 1 : -1)
      );
    }

    return aValue.localeCompare(bValue) * (sortOrder === "asc" ? 1 : -1);
  });

  const currentOrders = sortedOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  return (
    <div className="bg-white rounded-2xl border-[0.5px] drop-shadow-sm">
      {/* Mobile View (< 1024px) */}
      <div className="block lg:hidden">
        {currentOrders.map((order) => (
          <div
            key={order.id}
            className="border-b border-gray-100 p-4 last:border-b-0 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden relative shrink-0">
                <Image
                  src={order.product.image}
                  alt={order.product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-gray-900 truncate">
                  {order.product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {order.date} • {order.time}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Time Spent</p>
                <p className="font-medium text-gray-900">{order.timeSpent}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Order Value</p>
                <p className="font-medium text-gray-900">{order.orderValue}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Commission</p>
                <p className="font-medium text-gray-900">{order.commission}</p>
              </div>
              <div className="flex items-end justify-end">
                <Button
                  onClick={() => openChat(order.id, order.product.name)}
                  variant="ghost"
                  className="flex items-center gap-2 text-sm hover:bg-gray-100"
                >
                  View Chat
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View (≥ 1024px) */}
      <div className="hidden lg:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <TableHeader
              sortField={sortField}
              sortOrder={sortOrder}
              onSort={(field) => {
                if (field === sortField) {
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                } else {
                  setSortField(field as keyof OrderType);
                  setSortOrder("asc");
                }
              }}
            />
            <tbody>
              {currentOrders.map((order) => (
                <OrderRow key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="px-4 py-3 border-t border-gray-100">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          className="flex-wrap"
        />
      </div>
    </div>
  );
}
