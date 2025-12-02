"use client";

import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import sam2 from "@/assets/images/sam-2.jpeg";
import sam3 from "@/assets/images/sam-3.jpeg";
import sam4 from "@/assets/images/sam-4.jpeg";
import sam5 from "@/assets/images/sam-5.jpeg";
import sam6 from "@/assets/images/sam-6.jpeg";
import sam7 from "@/assets/images/sam-7.jpeg";
import sam8 from "@/assets/images/sam-8.jpeg";
import sam1 from "@/assets/images/sam.jpeg";
import teresiahSam2 from "@/assets/images/teresiah-sam-2.jpeg";
import teresiahSam from "@/assets/images/teresiah-sam.jpeg";
import teresiah from "@/assets/images/teresiah.jpeg";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: StaticImageData;
  alt: string;
  name: string;
  description?: string;
}

const images: GalleryImage[] = [
  {
    src: sam1,
    alt: "Sam in the field",
    name: "Sam Njenga",
    description: "Serving in the field",
  },
  {
    src: teresiah,
    alt: "Teresiah portrait",
    name: "Teresiah Njenga",
    description: "Heart for the community",
  },
  {
    src: sam2,
    alt: "Sam with the community",
    name: "Community Outreach",
    description: "Building connections",
  },
  {
    src: teresiahSam,
    alt: "Teresiah and Sam together",
    name: "Partners in Faith",
    description: "Walking together",
  },
  {
    src: sam3,
    alt: "Sam ministering",
    name: "Ministry",
    description: "Sharing the word",
  },
  {
    src: sam4,
    alt: "Sam in ministry",
    name: "Leadership",
    description: "Guiding the flock",
  },
  {
    src: teresiahSam2,
    alt: "Teresiah and Sam",
    name: "Teresiah & Sam",
    description: "United in service",
  },
  {
    src: sam5,
    alt: "Sam with families",
    name: "Fellowship",
    description: "Family gatherings",
  },
  {
    src: sam6,
    alt: "Sam preaching",
    name: "Proclamation",
    description: "Preaching the Gospel",
  },
  {
    src: sam7,
    alt: "Sam in rural community",
    name: "Rural Mission",
    description: "Reaching the unreached",
  },
  {
    src: sam8,
    alt: "Sam helping others",
    name: "Service",
    description: "Hands of Christ",
  },
];

function ParallaxItem({
  image,
  className,
  yOffset = 50,
}: {
  image: GalleryImage;
  className?: string;
  yOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, yOffset]),
    springConfig
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn(
        "group relative overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all hover:ring-amber-300/50",
        className
      )}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-top transition-transform duration-700 ease-linear group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover Overlay with Glassmorphism Caption */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 translate-y-4 transform p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md">
            <h3 className="font-semibold text-white">{image.name}</h3>
            {image.description && (
              <p className="mt-1 text-sm text-white/80">{image.description}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Split images into 3 columns
  const col1 = images.filter((_, i) => i % 3 === 0);
  const col2 = images.filter((_, i) => i % 3 === 1);
  const col3 = images.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Journey in Pictures
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Moments of connection, service, and faith with Sam and Teresiah.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 - Standard parallax */}
          <div className="flex flex-col gap-8">
            {col1.map((img, i) => (
              <ParallaxItem key={i} image={img} yOffset={-40} />
            ))}
          </div>

          {/* Column 2 - Reverse/Different parallax */}
          <div className="flex flex-col gap-8 pt-12 sm:pt-0 lg:pt-12">
            {col2.map((img, i) => (
              <ParallaxItem key={i} image={img} yOffset={40} />
            ))}
          </div>

          {/* Column 3 - Standard parallax */}
          <div className="flex flex-col gap-8 pt-12 lg:pt-24">
            {col3.map((img, i) => (
              <ParallaxItem key={i} image={img} yOffset={-60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
