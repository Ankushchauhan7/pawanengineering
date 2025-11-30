"use client";

import Image from "next/image";

type Props = {
  imageSrc?: string;
  mobileImageSrc?: string;
  headline?: string;
};

export default function HeroBannerWithOverlay({
  imageSrc = "/herobanner.webp", // Desktop banner
  mobileImageSrc = "/mobile_hero_bannner.tif", // Mobile banner
  headline = "Manufacturer of ICU Beds, Ward Beds, Room and Ward-Care Devices, Emeregency & Transfer Trolleys, Examination Room Devices, Treatment Devices, OB/GYN Devices, Bio-Medical Waste Management Devices, Utility Devices, CSSD Devices, Operation Theatre/ Room Devices, and Repairs And Parts.",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden h-[60vh] sm:h-[80vh]">
      {/* DESKTOP IMAGE */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src={imageSrc}
          alt="Medical products"
          fill
          priority
          sizes="100vw"
          className="object-fit"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* MOBILE IMAGE */}
      <div className="absolute inset-0 -z-10 md:hidden block">
        <Image
          src={mobileImageSrc}
          alt="Medical products mobile"
          fill
          priority
          sizes="100vw"
          className="object-fit"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28 lg:py-32">
        <h1 className="text-2xl mx-2 md:mx-16 sm:text-4xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-lg">
          {headline}
        </h1>
      </div>

      {/* Decorative Shape */}
      <svg
        className="absolute -right-20 top-32 w-80 opacity-20 animate-float-slow hidden md:block"
        viewBox="0 0 200 200"
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
