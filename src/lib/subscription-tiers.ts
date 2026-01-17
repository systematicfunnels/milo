export const SUBSCRIPTION_TIERS = {
  free: {
    name: "Free",
    priceId: null,
    price: 0,
    remindersPerMonth: 5,
    apiCallsPerDay: 10,
    features: ["5 reminders/month", "10 API calls/day", "Basic support"],
  },
  pro: {
    name: "Pro",
    priceId: "price_1SqT3vDVD6OVaT2JvBKh0ewg",
    price: 9.99,
    priceInr: 849,
    remindersPerMonth: -1,
    apiCallsPerDay: 100,
    features: ["Unlimited reminders", "100 API calls/day", "Priority support"],
  },
  enterprise: {
    name: "Enterprise",
    priceId: "price_1SqT3wDVD6OVaT2Jf08FyEzc",
    price: 29.99,
    priceInr: 2499,
    remindersPerMonth: -1,
    apiCallsPerDay: -1,
    features: ["Unlimited reminders", "Unlimited API calls", "Team features", "API access", "24/7 support"],
  },
  repo: {
    name: "Full Source Code",
    priceId: "price_repo_purchase_placeholder", // Placeholder price ID for $100
    price: 100,
    priceInr: 8499,
    features: ["Full source code access", "Commercial license", "Step-by-step deployment guide", "All future updates", "Priority email support"],
  },
} as const;

export type SubscriptionTier = keyof typeof SUBSCRIPTION_TIERS;

export function getTierLimits(tier: SubscriptionTier) {
  return SUBSCRIPTION_TIERS[tier] || SUBSCRIPTION_TIERS.free;
}
