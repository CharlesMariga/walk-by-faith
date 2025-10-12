"use client";

import { useEffect, useState } from "react";

import { DONATION_PRODUCTS, Product } from "@/lib/donations";

import DonationCheckout from "./donation-checkout";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface DonationModalProps {
  children: React.ReactNode;
}

export default function DonationModal({ children }: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => {
      setSelectedAmount(null);
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-primary max-h-[90vh] max-w-2xl overflow-y-auto rounded-xl border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl">Make a Donation</DialogTitle>
          <DialogDescription>
            Your donation helps us build and maintain community projects.
          </DialogDescription>
        </DialogHeader>

        {/* Donation amount */}
        {!selectedAmount ? (
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {DONATION_PRODUCTS.map((product) => (
                <Button
                  key={product.id}
                  variant="outline"
                  size="lg"
                  className="h-20 cursor-pointer border-white/10 bg-transparent text-lg font-semibold transition-colors hover:bg-amber-300 hover:text-black"
                  onClick={() => setSelectedAmount(product)}
                >
                  {product.priceInCents > 0
                    ? `$${Math.round(product.priceInCents / 100)}`
                    : "Custom"}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {selectedAmount && selectedAmount.id !== "donation-custom" && (
              <div className="mb-4 flex items-center justify-between">
                <p className="text-muted-foreground text-sm">
                  Donating: $
                  {(DONATION_PRODUCTS.find((p) => p.id === selectedAmount.id)
                    ?.priceInCents || 0) / 100}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedAmount(null)}
                >
                  Change Amount
                </Button>
              </div>
            )}
            <DonationCheckout
              selectedAmount={selectedAmount}
              onChangeAmount={setSelectedAmount}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
