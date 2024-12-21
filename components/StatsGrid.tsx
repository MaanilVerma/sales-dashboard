import { StatCard } from "./StatCard";
import { getStats } from "@/lib/data";

export default async function StatsGrid() {
  const stats = await getStats();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
          className="min-w-[250px] sm:min-w-0"
        />
      ))}
    </div>
  );
}
