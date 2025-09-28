"use client";

import { useEffect, useState } from "react";

function CountdownItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-center">
      <div className="text-2xl font-semibold tracking-tight text-white">
        {value}
      </div>
      <div className="text-[11px] tracking-wide text-slate-400 uppercase">
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-13");
    targetDate.setDate(targetDate.getDate());
    targetDate.setHours(0, 0, 0, 0);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-7 grid max-w-md grid-cols-4 gap-2 sm:gap-3">
      <CountdownItem label="Days" value={timeLeft.days} />
      <CountdownItem label="Hours" value={timeLeft.hours} />
      <CountdownItem label="Minutes" value={timeLeft.minutes} />
      <CountdownItem label="Seconds" value={timeLeft.seconds} />
    </div>
  );
}
