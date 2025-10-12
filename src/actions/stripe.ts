"use server";

import Stripe from "stripe";

import { stripe } from "@/lib/stripe";
import { formatAmountForStripe } from "@/lib/stripe-helpers";

export async function createPaymentIntent(
  data: FormData
): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.create({
      amount: formatAmountForStripe(
        Number(data.get("amount") as string),
        "usd"
      ),
      automatic_payment_methods: { enabled: true },
      currency: "usd",
    });

  return { client_secret: paymentIntent.client_secret as string };
}
