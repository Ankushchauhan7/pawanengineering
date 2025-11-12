// components/DoctorsCarousel.tsx
"use client";

import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
import Doc1 from "../assets/doc1.webp"
import Doc2 from "../assets/doc2.webp"
import Doc3 from "../assets/doc3.webp"
import Doc4 from "../assets/doc4.webp"
import Doc5 from "../assets/doc5.webp"
import Doc6 from "../assets/doc6.webp"

type Doctor = {
  name: string;
  role: string;
  image: StaticImageData;
};

const DOCTORS: Doctor[] = [
  { name: "Dr. Mirazul Alom", role: "Neurologist", image: Doc1 ,},
  { name: "Dr. John Smith", role: "Cardiologist", image: Doc2 },
  { name: "Dr. Alex Ray", role: "Surgeon", image: Doc3 },
  { name: "Dr. Shiela Roy", role: "Dermatologist",image: Doc4 },
  { name: "Dr. Nathan Paul", role: "Orthopedic",image: Doc5 },
  { name: "Dr. Nathan Paul", role: "Orthopedic",image: Doc6 },
];

export default function DoctorsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll control
  const scrollBy = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  // Auto scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        // reset to start smoothly
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000); // every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 mx-2 md:mx-16 ">
      <div className="px-4">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-2xl font-semibold text-slate-800">Expert Doctors</h4>
          <div className="hidden sm:flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={() => scrollBy("prev")}
              className="rounded-md border border-slate-200 p-2 hover:bg-slate-50 transition"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollBy("next")}
              className="rounded-md border border-slate-200 p-2 hover:bg-slate-50 transition"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="flex  gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2  px-4 hide-scrollbar"
          role="region"
          aria-label="Doctors carousel"
        >
          {DOCTORS.map((d, i) => (
            <article
              key={i}
              data-card
              className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-[280px] rounded-xl bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 260px, 280px"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-base font-semibold text-slate-800">{d.name}</h4>
                <p className="text-sm text-slate-500">{d.role}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="mt-4 flex sm:hidden justify-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => scrollBy("prev")}
            className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
          >
            Prev
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy("next")}
            className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
