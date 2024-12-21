import { Orders } from "@/components/Orders/Orders";

export default async function SalesView() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
        <p className="text-sm text-gray-500 mt-1">
          Monitor and manage your recent orders
        </p>
      </div>
      <Orders />
    </div>
  );
}
