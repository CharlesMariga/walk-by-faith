"use client";

import { Home } from "lucide-react";

import { Button } from "./ui/button";

export default function HomeButton() {
  return (
    <Button size="lg" onClick={() => (window.location.href = "/")}>
      <Home className="h-5 w-5" />
      Back to Home
    </Button>
  );
}
