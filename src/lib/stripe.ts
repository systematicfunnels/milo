import Stripe from "stripe";

// Use a placeholder key during build if the actual key is not provided
const apiKey = process.env.STRIPE_SECRET_KEY || "sk_test_placeholder_for_build";

export const stripe = new Stripe(apiKey, {
  apiVersion: "2025-10-29.clover",
});

export * from "./subscription-tiers";
