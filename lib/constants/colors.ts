export const CHART_COLORS = {
  primary: "#3B82F6",
  success: "#10B981",
  warning: "#F59E0B",
  teal: "#00B69B"
} as const;

export const CHART_SERIES = {
  consultations: {
    incoming: CHART_COLORS.primary,
    answered: CHART_COLORS.success,
    experts: CHART_COLORS.warning
  },
  comparison: {
    consultations: CHART_COLORS.success,
    orders: CHART_COLORS.primary
  }
} as const;