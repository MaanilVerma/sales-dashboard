"use client";

export function ForecastCard() {
  return (
    <div
      className="bg-[#15B79E] p-6 rounded-3xl text-white h-full"
      style={{
        backgroundImage: "url(/card-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center gap-2 mb-6">
        <ForecastIcon />
        <p className="text-sm uppercase tracking-wider">FORECASTS</p>
      </div>
      <div className="space-y-8">
        <ForecastItem
          value="+15%"
          description="forecasted increase in your sales closed by the end of the current month"
        />
        <ForecastItem
          value="+20%"
          description="forecasted increase in consultations by the end of the current month"
        />
      </div>
    </div>
  );
}

function ForecastIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M8.3125 0.875C6.24119 0.877275 4.25538 1.70111 2.79074 3.16574C1.32611 4.63038 0.502275 6.61619 0.5 8.6875V15.2758C0.500413 15.6003 0.629526 15.9115 0.859022 16.141C1.08852 16.3705 1.39966 16.4996 1.72422 16.5H8.3125C10.3845 16.5 12.3716 15.6769 13.8368 14.2118C15.3019 12.7466 16.125 10.7595 16.125 8.6875C16.125 6.6155 15.3019 4.62836 13.8368 3.16323C12.3716 1.6981 10.3845 0.875 8.3125 0.875Z" />
    </svg>
  );
}

interface ForecastItemProps {
  value: string;
  description: string;
}

function ForecastItem({ value, description }: ForecastItemProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-5xl font-normal">{value}</span>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path
            d="M22.5 5.25V11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12C21.5511 12 21.3603 11.921 21.2197 11.7803C21.079 11.6397 21 11.4489 21 11.25V7.06031L13.2806 14.7806C13.211 14.8504 13.1283 14.9057 13.0372 14.9434C12.9462 14.9812 12.8486 15.0006 12.75 15.0006C12.6514 15.0006 12.5538 14.9812 12.4628 14.9434C12.3717 14.9057 12.289 14.8504 12.2194 14.7806L9 11.5603L2.78062 17.7806C2.63989 17.9214 2.44902 18.0004 2.25 18.0004C2.05097 18.0004 1.8601 17.9214 1.71937 17.7806C1.57864 17.6399 1.49958 17.449 1.49958 17.25C1.49958 17.051 1.57864 16.8601 1.71937 16.7194L8.46937 9.96937C8.53903 9.89964 8.62174 9.84432 8.71279 9.80658C8.80384 9.76884 8.90144 9.74941 9 9.74941C9.09856 9.74941 9.19615 9.76884 9.2872 9.80658C9.37825 9.84432 9.46097 9.89964 9.53062 9.96937L12.75 13.1897L19.9397 6H15.75C15.5511 6 15.3603 5.92098 15.2197 5.78033C15.079 5.63968 15 5.44891 15 5.25C15 5.05109 15.079 4.86032 15.2197 4.71967C15.3603 4.57902 15.5511 4.5 15.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25Z"
            fill="white"
          />
        </svg>
      </div>
      <p className="text-sm opacity-80 mt-2">{description}</p>
    </div>
  );
}
