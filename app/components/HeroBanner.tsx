"use client";

import Image from "next/image";

type Props = {
  imageSrc?: string;
  headline?: string;
  sub?: string;
};

export default function HeroBannerWithOverlay({
  imageSrc = "/herobanner.webp",
  headline = "Manufacturer of ICU Beds, Ward Beds, Room and Ward-Care Devices, Emeregency & Transfer Trolleys, Examination Room Devices, Treatment Devices, OB/GYN Devices, Bio-Medical Waste Management Devices, Utility Devices, CSSD Devices, Operation Theatre/ Room Devices, and Repairs And Parts.",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt="Collection of medical products"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />

        {/* 🔥 Black gradient overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Soft vignette */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,0,0,0.50),_transparent_45%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28 lg:py-32">
        <div className="">
          <h1 className="text-2xl mx-2 md:mx-16 sm:text-4xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-lg">
            {headline}
          </h1>
        </div>
      </div>

      {/* Decorative SVG Animation */}
      <svg
        className="absolute -right-20 top-32 w-80 opacity-20 animate-float-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#000" stopOpacity="0.4" />
            <stop offset="1" stopColor="#000" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          fill="url(#g)"
          d="M44.4,-37.7C57.2,-24.6,67.6,-11.3,66.6,0.1C65.6,11.6,53.3,23.3,40.6,35.2C27.9,47.1,13.9,59.2,0.4,58.7C-13.1,58.1,-26.2,44.9,-38.6,33.3C-50.9,21.6,-62.6,11.5,-62.8,-0.8C-63,-13.1,-51.8,-26.2,-39.1,-39.6C-26.3,-53,-13.2,-66.8,-1.3,-64.9C10.6,-62.9,21.2,-45.3,44.4,-37.7Z"
          transform="translate(100 100)"
        />
      </svg>

      <style jsx>{`
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
