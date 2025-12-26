"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

import conf2 from "@/assets/images/2022-conference-2.jpeg";
import conf3 from "@/assets/images/2022-conference-3.jpeg";
import conf1 from "@/assets/images/2022-conference.jpeg";
import whatsapp1 from "@/assets/images/WhatsApp Image 2025-12-04 at 05.02.49.jpeg";
import whatsapp2 from "@/assets/images/WhatsApp Image 2025-12-04 at 05.04.48.jpeg";
import miranda4 from "@/assets/images/miranda-4.jpeg";
import miranda7 from "@/assets/images/miranda-7.jpeg";
import nairobi2 from "@/assets/images/nairobi-home-fellowship-2.jpeg";
import pastors from "@/assets/images/pasters-in-kenya.jpeg";
import sam2 from "@/assets/images/sam-2.jpeg";
import sam3 from "@/assets/images/sam-3.jpeg";
import sam4 from "@/assets/images/sam-4.jpeg";
import sam5 from "@/assets/images/sam-5.jpeg";
import sam7 from "@/assets/images/sam-7.jpeg";
import sam8 from "@/assets/images/sam-8.jpeg";
import sam9 from "@/assets/images/sam-9.jpeg";
import sam10 from "@/assets/images/sam-10.jpeg";
import sam from "@/assets/images/sam.jpeg";
import teresiah2 from "@/assets/images/teresiah-2.jpeg";
import teresiah4 from "@/assets/images/teresiah-4.jpeg";
import teresiah6 from "@/assets/images/teresiah-6.jpeg";
import teresiahSam2 from "@/assets/images/teresiah-sam-2.jpeg";
import teresiahSam3 from "@/assets/images/teresiah-sam-3.jpeg";
import teresiahSam4 from "@/assets/images/teresiah-sam-4.jpeg";
import teresiahSam from "@/assets/images/teresiah-sam.jpeg";
import teresiahSamp6 from "@/assets/images/teresiah-samp-6.jpeg";
import visiting3 from "@/assets/images/visiting-old-people-in-africa-3.jpeg";
import visiting4 from "@/assets/images/visiting-old-people-in-africa-4.jpeg";
import visiting1 from "@/assets/images/visiting-old-people-in-africa.jpeg";
import { cn } from "@/lib/utils";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: StaticImageData | string;
  title: string;
  category: "images" | "videos";
  videoUrl?: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    src: conf1,
    title: "2022 Conference",
    category: "images",
  },
  {
    id: "2",
    type: "video",
    src: "https://img.youtube.com/vi/0yMgOvB-_TQ/hqdefault.jpg",
    title: "Mission Outreach",
    category: "videos",
    videoUrl: "https://www.youtube.com/embed/0yMgOvB-_TQ",
  },
  {
    id: "5",
    type: "video",
    src: "https://img.youtube.com/vi/jCL5Z21UDfY/hqdefault.jpg",
    title: "Community Service",
    category: "videos",
    videoUrl: "https://www.youtube.com/embed/jCL5Z21UDfY",
  },
  {
    id: "6",
    type: "image",
    src: pastors,
    title: "Pastors in Kenya",
    category: "images",
  },
  {
    id: "9",
    type: "image",
    src: teresiahSam,
    title: "Sam & Teresiah",
    category: "images",
  },
  {
    id: "10",
    type: "video",
    src: "https://img.youtube.com/vi/s6ZSTeAKsD4/hqdefault.jpg",
    title: "Testimonial",
    category: "videos",
    videoUrl: "https://www.youtube.com/embed/s6ZSTeAKsD4",
  },
  {
    id: "13",
    type: "image",
    src: visiting4,
    title: "Service in Action",
    category: "images",
  },
  {
    id: "14",
    type: "image",
    src: sam7,
    title: "Mission Trip",
    category: "images",
  },
  {
    id: "15",
    type: "image",
    src: teresiah4,
    title: "Community Growth",
    category: "images",
  },
  {
    id: "16",
    type: "image",
    src: visiting1,
    title: "Old People Outreach",
    category: "images",
  },
  {
    id: "17",
    type: "image",
    src: conf2,
    title: "2022 Conference Session",
    category: "images",
  },
  {
    id: "18",
    type: "image",
    src: nairobi2,
    title: "Worship in Nairobi",
    category: "images",
  },
  {
    id: "19",
    type: "image",
    src: miranda4,
    title: "Youth Connection",
    category: "images",
  },
  {
    id: "20",
    type: "image",
    src: sam9,
    title: "Sam in the Field",
    category: "images",
  },
  {
    id: "22",
    type: "video",
    src: "https://img.youtube.com/vi/VVYUNshOorw/hqdefault.jpg",
    title: "Ministry Impact",
    category: "videos",
    videoUrl: "https://www.youtube.com/embed/VVYUNshOorw",
  },
  // Additional images
  {
    id: "23",
    type: "image",
    src: conf3,
    title: "Conference Gathering",
    category: "images",
  },
  {
    id: "24",
    type: "image",
    src: miranda7,
    title: "Youth Ministry",
    category: "images",
  },
  {
    id: "25",
    type: "image",
    src: sam,
    title: "Pastor Sam",
    category: "images",
  },
  {
    id: "26",
    type: "image",
    src: sam2,
    title: "Sam Preaching",
    category: "images",
  },
  {
    id: "27",
    type: "image",
    src: sam3,
    title: "Sam in Ministry",
    category: "images",
  },
  {
    id: "28",
    type: "image",
    src: sam4,
    title: "Sam Teaching",
    category: "images",
  },
  {
    id: "29",
    type: "image",
    src: sam5,
    title: "Sam with Community",
    category: "images",
  },
  {
    id: "31",
    type: "image",
    src: sam8,
    title: "Sam Leading",
    category: "images",
  },
  {
    id: "32",
    type: "image",
    src: sam10,
    title: "Sam Serving",
    category: "images",
  },
  {
    id: "33",
    type: "image",
    src: teresiah2,
    title: "Pastor Teresiah",
    category: "images",
  },
  {
    id: "34",
    type: "image",
    src: teresiah6,
    title: "Teresiah in Ministry",
    category: "images",
  },
  {
    id: "35",
    type: "image",
    src: teresiahSam2,
    title: "Founders Together",
    category: "images",
  },
  {
    id: "36",
    type: "image",
    src: teresiahSam3,
    title: "Ministry Partners",
    category: "images",
  },
  {
    id: "37",
    type: "image",
    src: teresiahSam4,
    title: "United in Faith",
    category: "images",
  },
  {
    id: "38",
    type: "image",
    src: teresiahSamp6,
    title: "Serving Together",
    category: "images",
  },
  {
    id: "39",
    type: "image",
    src: visiting3,
    title: "Elderly Care",
    category: "images",
  },
  {
    id: "40",
    type: "image",
    src: whatsapp1,
    title: "Recent Outreach",
    category: "images",
  },
  {
    id: "41",
    type: "image",
    src: whatsapp2,
    title: "Community Moment",
    category: "images",
  },
  // Additional videos
  {
    id: "42",
    type: "video",
    src: "https://img.youtube.com/vi/nNb5r68bBW4/hqdefault.jpg",
    title: "Faith in Action",
    category: "videos",
    videoUrl: "https://www.youtube.com/embed/nNb5r68bBW4",
  },
  {
    id: "43",
    type: "video",
    src: "https://img.youtube.com/vi/D_1apO22q5I/hqdefault.jpg",
    title: "Gospel Outreach",
    category: "videos",
    videoUrl: "https://www.youtube.com/embed/D_1apO22q5I",
  },
  {
    id: "44",
    type: "video",
    src: "https://img.youtube.com/vi/0Rq5_yUEOMo/hqdefault.jpg",
    title: "Ministry Moments",
    category: "videos",
    videoUrl: "https://www.youtube.com/embed/0Rq5_yUEOMo",
  },
  {
    id: "45",
    type: "video",
    src: "https://img.youtube.com/vi/QOekcVDrkp8/hqdefault.jpg",
    title: "Serving Communities",
    category: "videos",
    videoUrl: "https://www.youtube.com/embed/QOekcVDrkp8",
  },
  {
    id: "46",
    type: "video",
    src: "https://img.youtube.com/vi/SpTPptfLwro/hqdefault.jpg",
    title: "Walking by Faith",
    category: "videos",
    videoUrl: "https://www.youtube.com/embed/SpTPptfLwro",
  },
];

export default function FullGallery() {
  const [filter, setFilter] = useState<"all" | "images" | "videos">("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) =>
    filter === "all" ? true : item.category === filter
  );

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handlePrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Gallery
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            A collection of moments, stories, and the impact of our ministry
            across the world.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex justify-center gap-4">
          {(["all", "images", "videos"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                filter === tab
                  ? "bg-amber-400 text-slate-900"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-2xl bg-zinc-900"
                onClick={() => setSelectedIndex(index)}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    {...(typeof item.src === "string"
                      ? { width: 1200, height: 800 }
                      : { placeholder: "blur" })}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative aspect-video sm:aspect-auto">
                    <Image
                      src={item.src}
                      alt={item.title}
                      {...(typeof item.src === "string"
                        ? { width: 1200, height: 675 }
                        : {})}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-white/80 transition-transform group-hover:scale-110 group-hover:text-amber-400" />
                    </div>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
      >
        <DialogContent className="max-w-[95vw] overflow-hidden border-white/10 bg-slate-900 p-0 sm:rounded-3xl lg:max-w-7xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedItem?.title}</DialogTitle>
          </DialogHeader>

          <div className="relative flex min-h-[70vh] flex-col items-center justify-center bg-black/40 lg:min-h-[85vh]">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 z-50 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-amber-400 hover:text-slate-900"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 z-50 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-amber-400 hover:text-slate-900"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Content Area */}
            <div className="flex w-full flex-col">
              <div className="relative flex aspect-video w-full items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedItem?.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-full w-full items-center justify-center p-4 sm:p-8"
                  >
                    {selectedItem?.type === "video" ? (
                      <iframe
                        src={`${selectedItem.videoUrl}?autoplay=1`}
                        title={selectedItem.title}
                        className="h-full w-full rounded-xl shadow-2xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="relative h-full w-full">
                        <Image
                          src={selectedItem?.src || ""}
                          alt={selectedItem?.title || ""}
                          className="h-full w-full object-contain"
                          fill
                          sizes="(max-width: 1280px) 100vw, 1280px"
                          priority
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Modal Footer Info */}
              <div className="bg-slate-900/80 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedItem?.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {selectedItem?.type === "video"
                        ? "Video Presentation"
                        : "Photo Gallery"}
                    </p>
                  </div>
                  <div className="text-sm font-medium text-amber-400">
                    {selectedIndex !== null ? selectedIndex + 1 : 0} /{" "}
                    {filteredItems.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
