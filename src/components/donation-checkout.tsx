"use client";

import { useEffect, useState } from "react";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripeError } from "@stripe/stripe-js";
import {
  CheckCircleIcon,
  HandCoins,
  Loader2Icon,
  TriangleAlertIcon,
} from "lucide-react";

import { createPaymentIntent } from "@/actions/stripe";
import { Product } from "@/lib/donations";
import { formatAmountForStripe } from "@/lib/stripe-helpers";

import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "./ui/input-group";

interface ElementsForm {
  selectedAmount: Product;
  onChangeAmount: (amount: Product | null) => void;
}

const PaymentStatus = ({
  status,
  errorMessage,
}: {
  status: string;
  errorMessage: string;
}) => {
  switch (status) {
    case "processing":
    case "requires_payment_method":
    case "requires_confirmation":
      return (
        <Alert variant="default">
          <Loader2Icon className="animate-spin" />
          <AlertTitle>Processing...</AlertTitle>
        </Alert>
      );

    case "requires_action":
      return (
        <Alert variant="default">
          <Loader2Icon />
          <AlertTitle>Authenticating...</AlertTitle>
        </Alert>
      );

    case "succeeded":
      return (
        <Alert variant="default">
          <CheckCircleIcon />
          <AlertTitle>Payment Succeeded 🥳</AlertTitle>
        </Alert>
      );

    case "error":
      return (
        <Alert variant="destructive">
          <TriangleAlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      );

    default:
      return null;
  }
};

export default function DonationCheckout({
  selectedAmount,
  onChangeAmount,
}: ElementsForm) {
  const [customAmount, setCustomAmount] = useState<number>(50);
  const [payment, setPayment] = useState<{
    status: "initial" | "processing" | "error" | "succeeded";
  }>({
    status: "initial",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const stripe = useStripe();
  const elements = useElements();

  const isPending =
    !["initial", "succeeded", "error"].includes(payment.status) || !stripe;

  if (selectedAmount.priceInCents) {
    console.log("updating amount", selectedAmount.priceInCents / 100);
    elements?.update({
      amount: formatAmountForStripe(selectedAmount.priceInCents / 100, "usd"),
    });
  }

  useEffect(() => {
    if (customAmount >= 50) {
      elements?.update({
        amount: formatAmountForStripe(customAmount, "usd"),
      });
    }
  }, [customAmount, elements]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      if (!e.currentTarget.reportValidity()) return;

      if (!stripe || !elements) return;

      setPayment({ status: "processing" });

      const { error: submitError } = await elements.submit();

      console.log(submitError);

      if (submitError) {
        setPayment({ status: "error" });
        setErrorMessage(submitError.message || "Something went wrong");
        return;
      }

      // Create a PaymentIntent with the specified amount.
      const formData = new FormData();
      formData.append(
        "amount",
        selectedAmount.id === "donation-custom"
          ? customAmount.toString()
          : (selectedAmount.priceInCents / 100).toString()
      );

      const { client_secret } = await createPaymentIntent(formData);

      // Use your card Element with other Stripe.js APIs
      const { error: confirmError } = await stripe!.confirmPayment({
        elements,
        clientSecret: client_secret,
        confirmParams: {
          return_url: `${window.location.origin}?payment=success&amount=${customAmount}`,
        },
      });

      console.log(confirmError);

      if (confirmError) {
        setPayment({ status: "error" });
        setErrorMessage(confirmError.message ?? "An unknown error occurred");
      }
    } catch (error) {
      const { message } = error as StripeError;
      setPayment({ status: "error" });
      setErrorMessage(message || "Something went wrong");
    }
  }

  return (
    <>
      <PaymentStatus status={payment.status} errorMessage={errorMessage} />
      <form className="space-y-4" onSubmit={handleSubmit}>
        <FieldGroup>
          {selectedAmount && selectedAmount.id === "donation-custom" && (
            <>
              <Field>
                <div className="flex items-center justify-between gap-2">
                  <FieldLabel onClick={(e) => e.stopPropagation()}>
                    Amount{" "}
                  </FieldLabel>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onChangeAmount(null)}
                  >
                    Change Amount
                  </Button>
                </div>
              </Field>
              <Field>
                <InputGroup>
                  <InputGroupAddon>
                    <InputGroupText>$</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput
                    placeholder="0.00"
                    type="number"
                    min={50}
                    step={10}
                    value={customAmount}
                    required
                    disabled={isPending}
                    onChange={(e) => setCustomAmount(e.target.valueAsNumber)}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupText>USD</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </>
          )}
        </FieldGroup>
        {selectedAmount.priceInCents > 0 || customAmount >= 10 ? (
          <PaymentElement />
        ) : (
          <div className="text-destructive bg-destructive/10 rounded-md p-2">
            <p>
              The minimum amount for a successful transaction is $50. Please
              adjust your amount and try again.
            </p>
          </div>
        )}
        <Button
          type="submit"
          disabled={isPending}
          className="w-full cursor-pointer font-semibold"
        >
          <HandCoins /> Donate
        </Button>
      </form>
    </>
  );
}
