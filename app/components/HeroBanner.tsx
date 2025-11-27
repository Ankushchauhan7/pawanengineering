"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBoxOpen, FaPhone } from "react-icons/fa";

type Props = {
  imageSrc?: string;
  headline?: string;
  sub?: string;
};

export default function HeroBannerWithOverlay({
  imageSrc = "/hero-products.webp",
  headline = "Manufacturer of ICU Beds, Ward Beds, Room and Ward-Care Devices, Emeregency & Transfer Trolleys, Examination Room Devices, Treatment Devices, OB/GYN Devices, Bio-Medical Waste Management Devices, Utility Devices, CSSD Devices, Operation Theatre/ Room Devices,  and Repair And Part.",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image (must set parent relative) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt="Collection of medical products"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
          className="object-cover"
        />
        {/* Color overlay gradient for mood + readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 via-sky-700/45 to-transparent" />
        {/* Soft vignette for focus */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,0,0,0.45),_transparent_40%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28 lg:py-32">
        <div className="">
          <h1 className="text-3xl mx-2 md:mx-16 sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-sm">
            {headline}
          </h1>
        </div>
      </div>

      {/* Decorative subtle animated shapes (non-intrusive) */}
      <svg
        className="absolute -right-20 top-32 w-80 opacity-20 animate-float-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          fill="url(#g)"
          d="M44.4,-37.7C57.2,-24.6,67.6,-11.3,66.6,0.1C65.6,11.6,53.3,23.3,40.6,35.2C27.9,47.1,13.9,59.2,0.4,58.7C-13.1,58.1,-26.2,44.9,-38.6,33.3C-50.9,21.6,-62.6,11.5,-62.8,-0.8C-63,-13.1,-51.8,-26.2,-39.1,-39.6C-26.3,-53,-13.2,-66.8,-1.3,-64.9C10.6,-62.9,21.2,-45.3,44.4,-37.7Z"
          transform="translate(100 100)"
        />
      </svg>

      <style jsx>{`
        /* gentle float animation for decorative svg */
        @keyframes float-slow {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
