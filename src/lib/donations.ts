export interface Product {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
}

// Donation amounts - source of truth for all donation options
export const DONATION_PRODUCTS: Product[] = [
  {
    id: "donation-50",
    name: "$50 Donation",
    description: "Support our cause with $50",
    priceInCents: 5000,
  },
  {
    id: "donation-100",
    name: "$100 Donation",
    description: "Support our cause with $100",
    priceInCents: 10000,
  },
  {
    id: "donation-200",
    name: "$200 Donation",
    description: "Support our cause with $200",
    priceInCents: 20000,
  },
  {
    id: "donation-500",
    name: "$500 Donation",
    description: "Support our cause with $500",
    priceInCents: 50000,
  },
  {
    id: "donation-1000",
    name: "$1000 Donation",
    description: "Support our cause with $1000",
    priceInCents: 100000,
  },
  {
    id: "donation-custom",
    name: "Custom Donation",
    description: "Support our cause with a custom amount",
    priceInCents: 0,
  },
];
