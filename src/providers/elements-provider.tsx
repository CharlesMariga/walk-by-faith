"use client";

import React from "react";

import { Elements } from "@stripe/react-stripe-js";

import { getStripe } from "@/lib/get-stripejs";

export default function ElementsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Elements
      stripe={getStripe()}
      options={{
        amount: 50,
        mode: "payment",
        currency: "usd",
        appearance: {
          theme: "night",
          variables: {
            colorBackground: "#111827",
          },
        },
      }}
    >
      {children}
    </Elements>
  );
}
