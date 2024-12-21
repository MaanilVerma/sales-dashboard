"use client";

import Image from "next/image";
import { OrderType } from "@/types";
import { useChat } from "@/context/ChatContext";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface OrderRowProps {
  order: OrderType;
}

export function OrderRow({ order }: OrderRowProps) {
  const { openChat } = useChat();

  return (
    <tr className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden relative">
            <Image
              src={order.product.image}
              alt={order.product.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium text-gray-900">
            {order.product.name}
          </span>
        </div>
      </td>
      <td className="py-4 px-6">
        <div>
          <span className="text-sm text-gray-900">{order.date}</span>
          <br />
          <span className="text-sm text-gray-500">{order.time}</span>
        </div>
      </td>
      <td className="py-4 px-6">
        <span className="text-sm text-gray-900">{order.timeSpent}</span>
      </td>
      <td className="py-4 px-6">
        <span className="text-sm font-medium text-gray-900">
          {order.orderValue}
        </span>
      </td>
      <td className="py-4 px-6">
        <span className="text-sm font-medium text-gray-900">
          {order.commission}
        </span>
      </td>
      <td className="py-4 px-6">
        <Button
          onClick={() => openChat(order.id, order.product.name)}
          variant="ghost"
          className="flex items-center gap-2"
        >
          View Chat
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </td>
    </tr>
  );
}
