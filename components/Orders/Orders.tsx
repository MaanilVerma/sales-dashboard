import { getOrders } from "@/lib/data";
import { OrdersTable } from "./OrdersTable";
import { ErrorBoundary } from "../ErrorBoundary";

export async function Orders() {
  try {
    const orders = await getOrders();

    return (
      <div className="space-y-4">
        <div className="flex justify-between flex-col items-center md:flex-row">
          <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
          <p className="text-sm text-gray-500">
            Monitor and manage your recent orders
          </p>
        </div>
        <OrdersTable orders={orders} />
      </div>
    );
  } catch (error) {
    return (
      <ErrorBoundary
        error={error as Error}
        reset={() => window.location.reload()}
      />
    );
  }
}
