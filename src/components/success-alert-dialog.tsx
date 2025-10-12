"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useStripe } from "@stripe/react-stripe-js";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface SuccessAlertDialogProps {
  payment: string;
  paymentIntent: string;
  paymentIntentClientSecret?: string;
}

export default function SuccessAlertDialog({
  payment,
  paymentIntent,
}: SuccessAlertDialogProps) {
  const [open, setOpen] = useState(payment === "success");
  const router = useRouter();
  const stripe = useStripe();

  if (!stripe || !paymentIntent) return null;

  const handleClose = () => {
    setOpen(false);
    router.push("/", { scroll: true });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-primary max-h-[90vh] max-w-2xl overflow-y-auto rounded-xl border border-white/10">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-green-400">
            Success
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Your donation has been successful.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-green-600 text-green-100 ring-green-600 hover:bg-green-700 hover:text-green-100 focus:ring-green-600"
            onClick={handleClose}
          >
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
