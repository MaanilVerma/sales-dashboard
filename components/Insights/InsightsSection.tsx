import { getInsightsData } from "@/lib/data";
import { ConsultationsChart } from "./ConsultationsChart";
import { ComparisonChart } from "./ComparisonChart";
import { ForecastCard } from "./ForecastCard";

export async function InsightsSection() {
  const { weeklyData, comparisonData } = await getInsightsData();

  return (
    <>
      <h1 className="text-xl md:text-3xl py-4 md:py-6 px-2">Insights</h1>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 overflow-x-auto pb-4">
        <div className="w-full lg:w-[calc(100%-320px)] min-w-0">
          <ConsultationsChart data={weeklyData} />
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 md:gap-6 w-full lg:w-[320px]">
          <div className="w-full sm:w-1/2 lg:w-full">
            <ComparisonChart data={comparisonData} />
          </div>
          <div className="w-full sm:w-1/2 lg:w-full">
            <ForecastCard />
          </div>
        </div>
      </div>
    </>
  );
}
