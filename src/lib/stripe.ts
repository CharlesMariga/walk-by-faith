import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-09-30.clover",
  appInfo: {
    name: "walk-by-faith-ministry",
    url: "https://walkbyfaithministry.org",
  },
});
