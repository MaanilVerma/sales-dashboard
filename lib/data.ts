import { StatType, OrderType, InsightsData, StylistType, ApiError } from "@/types";

const STYLISTS: StylistType[] = [
  {
    id: 1,
    name: "Emma Thompson",
    avatar: "https://picsum.photos/200",
    specialization: ["Evening Wear", "Business Casual"],
    rating: 4.8,
    totalConsultations: 156,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://picsum.photos/201",
    specialization: ["Streetwear", "Contemporary"],
    rating: 4.9,
    totalConsultations: 142,
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    avatar: "https://picsum.photos/202",
    specialization: ["Bohemian", "Sustainable Fashion"],
    rating: 4.7,
    totalConsultations: 128,
  },
  {
    id: 4,
    name: "James Wilson",
    avatar: "https://picsum.photos/203",
    specialization: ["Formal Wear", "Luxury Fashion"],
    rating: 4.9,
    totalConsultations: 198,
  },
  {
    id: 5,
    name: "Aisha Patel",
    avatar: "https://picsum.photos/204",
    specialization: ["Ethnic Fusion", "Contemporary"],
    rating: 4.8,
    totalConsultations: 167,
  }
];

async function handleApiError(error: unknown): Promise<never> {
  if (error instanceof Error) {
    throw new ApiError(error.message, "API_ERROR");
  }
  throw new ApiError("An unexpected error occurred", "UNKNOWN_ERROR");
}

export async function getStats(): Promise<StatType[]> {
  try {
    return [
      {
        title: "CONSULTATIONS",
        value: "24",
        change: 15,
        type: "increase",
        icon: "sales" as const,
      },
      {
        title: "ORDERS PLACED",
        value: "12",
        change: 15,
        type: "decrease",
        icon: "orders" as const,
      },
      {
        title: "CONVERSION",
        value: "50%",
        change: 15,
        type: "decrease",
        icon: "conversion" as const,
      },
      {
        title: "TOTAL SALES VALUE",
        value: "$2,400",
        change: 15,
        type: "increase",
        icon: "average" as const,
      },
      {
        title: "AVG ORDER VALUE",
        value: "$240",
        change: 15,
        type: "increase",
        icon: "stylists" as const,
      },
      {
        title: "COMMISSION PAID",
        value: "$240",
        change: 15,
        type: "increase",
        icon: "satisfaction" as const,
      },
    ];
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getOrders(): Promise<OrderType[]> {
  try {
    return [
      {
        id: 1,
        product: {
          name: "Summer Floral Dress",
          image: "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        date: "24 Apr 2024",
        time: "10:24 AM",
        timeSpent: "2h 5m",
        orderValue: "$189.99",
        commission: "$28.50",
      },
      {
        id: 2,
        product: {
          name: "Silk Evening Gown",
          image: "https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        date: "24 Apr 2024",
        time: "11:30 AM",
        timeSpent: "1h 45m",
        orderValue: "$299.99",
        commission: "$45.00",
      },
      {
        id: 3,
        product: {
          name: "Designer Handbag",
          image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "2:15 PM",
        timeSpent: "45m",
        orderValue: "$399.99",
        commission: "$60.00",
      },
      {
        id: 4,
        product: {
          name: "Cashmere Sweater",
          image: "https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "3:45 PM",
        timeSpent: "1h 30m",
        orderValue: "$245.00",
        commission: "$36.75",
      },
      {
        id: 5,
        product: {
          name: "Elegant Blouse",
          image: "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "4:00 PM",
        timeSpent: "1h 15m",
        orderValue: "$150.00",
        commission: "$22.50",
      },
      {
        id: 6,
        product: {
          name: "Stylish Jumpsuit",
          image: "https://images.pexels.com/photos/2747600/pexels-photo-2747600.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "5:30 PM",
        timeSpent: "30m",
        orderValue: "$99.99",
        commission: "$15.00",
      },
      {
        id: 7,
        product: {
          name: "Chic Skirt",
          image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "6:15 PM",
        timeSpent: "1h 20m",
        orderValue: "$220.00",
        commission: "$33.00",
      },
      {
        id: 8,
        product: {
          name: "Casual T-Shirt",
          image: "https://images.pexels.com/photos/2481177/pexels-photo-2481177.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "7:00 PM",
        timeSpent: "2h 0m",
        orderValue: "$300.00",
        commission: "$45.00",
      },
      {
        id: 9,
        product: {
          name: "Trendy Sneakers",
          image: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "8:30 PM",
        timeSpent: "1h 10m",
        orderValue: "$180.00",
        commission: "$27.00",
      },
      {
        id: 10,
        product: {
          name: "Classic Denim Jacket",
          image: "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compres",
        },
        date: "24 Apr 2024",
        time: "9:00 PM",
        timeSpent: "1h 5m",
        orderValue: "$210.00",
        commission: "$31.50",
      },
      {
        id: 11,
        product: {
          name: "Summer Hat",
          image: "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "10:00 PM",
        timeSpent: "1h 15m",
        orderValue: "$250.00",
        commission: "$37.50",
      },
      {
        id: 12,
        product: {
          name: "Stylish Sunglasses",
          image: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "11:00 PM",
        timeSpent: "2h 30m",
        orderValue: "$400.00",
        commission: "$60.00",
      },
      {
        id: 13,
        product: {
          name: "Fashionable Scarf",
          image: "https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "12:00 AM",
        timeSpent: "1h 0m",
        orderValue: "$120.00",
        commission: "$18.00",
      },
      {
        id: 14,
        product: {
          name: "Elegant Evening Clutch",
          image: "https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "1:00 AM",
        timeSpent: "1h 45m",
        orderValue: "$275.00",
        commission: "$41.25",
      },
      {
        id: 15,
        product: {
          name: "Stylish Belt",
          image: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=600",
        },
        date: "24 Apr 2024",
        time: "2:30 AM",
        timeSpent: "2h 15m",
        orderValue: "$320.00",
        commission: "$48.00",
      }
    ];
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getInsightsData(): Promise<InsightsData> {
  try {
    return {
      weeklyData: [
        {
          day: "Mon",
          incoming: 33,
          answered: 28,
          experts: 10,
        },
        {
          day: "Tue",
          incoming: 32,
          answered: 27,
          experts: 10,
        },
        {
          day: "Wed",
          incoming: 38,
          answered: 32,
          experts: 10,
        },
        {
          day: "Thu",
          incoming: 45,
          answered: 40,
          experts: 10,
        },
        {
          day: "Fri",
          incoming: 43,
          answered: 34,
          experts: 10,
        },
        {
          day: "Sat",
          incoming: 48,
          answered: 35,
          experts: 10,
        },
        {
          day: "Sun",
          incoming: 52,
          answered: 37,
          experts: 10,
        },
      ],
      comparisonData: [
        {
          period: "This week",
          consultations: 20,
          orders: 15,
        },
        {
          period: "Last week",
          consultations: 15,
          orders: 10,
        },
      ],
    };
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getStylists(): Promise<StylistType[]> {
  return STYLISTS;
} 