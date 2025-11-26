// components/HeroBanner.tsx
"use client";
import Link from "next/link";
export default function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 animate-gradient-slow" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative animated SVG */}
      <svg
        className="absolute inset-0 -z-10 w-full h-full"
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="gradA" x1="0" x2="1">
            <stop offset="0%" stopColor="#0369a1" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
          </linearGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* floating particles */}
        <g fill="white" opacity="0.06" filter="url(#softGlow)">
          <circle cx="110" cy="80" r="3" className="float-slow-1" />
          <circle cx="320" cy="140" r="4" className="float-slow-2" />
          <circle cx="560" cy="60" r="2.5" className="float-slow-3" />
          <circle cx="980" cy="120" r="3" className="float-slow-2" />
          <circle cx="1220" cy="70" r="2.8" className="float-slow-1" />
          <circle cx="420" cy="300" r="2.2" className="float-slow-3" />
        </g>

        {/* heartbeat path (large, centered) */}
        <g transform="translate(0,260)">
          <path
            id="heartbeat"
            d="M0,160 L160,160 L190,120 L230,200 L260,160 L320,160 L360,160 L390,120 L430,200 L470,160 L540,160 L640,160 L700,160 L740,120 L780,200 L820,160 L900,160 L1020,160 L1100,160 L1140,120 L1180,200 L1220,160 L1440,160"
            fill="none"
            stroke="url(#gradA)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.95"
            style={{ filter: "url(#softGlow)" }}
            className="heartbeat-path"
          />
        </g>

        {/* hospital cross pulse */}
        <g transform="translate(1100,260)">
          <rect
            x="-0"
            y="-0"
            width="120"
            height="120"
            rx="16"
            fill="#ffffff"
            opacity="0.06"
          />
          <g transform="translate(10,10)">
            <rect
              x="20"
              y="10"
              width="60"
              height="100"
              rx="8"
              fill="#fff"
              opacity="0.06"
            />
            {/* cross */}
            <g className="cross-pulse" transform="translate(30,26)">
              <rect
                x="-6"
                y="-12"
                width="36"
                height="24"
                rx="4"
                fill="#ffffff"
              />
              <rect
                x="6"
                y="-12"
                width="24"
                height="36"
                rx="4"
                fill="#ffffff"
                transform="rotate(90)"
              />
            </g>
          </g>
        </g>

        {/* medical icon silhouettes (decorative) */}
        <g fill="white" opacity="0.06">
          {/* stethoscope-like circle */}
          <path
            className="float-slow-2"
            d="M200 420 a20 20 0 1 0 40 0 v30 a40 40 0 0 1 -40 0 z"
          />
          {/* pill */}
          <rect
            x="820"
            y="420"
            rx="12"
            ry="12"
            width="56"
            height="28"
            transform="rotate(-22 850 434)"
            className="float-slow-1"
          />
          {/* syringe-ish line */}
          <path
            d="M980 420 L1008 440"
            stroke="white"
            strokeWidth="2"
            opacity="0.06"
            className="float-slow-3"
          />
        </g>
      </svg>

      {/* Hero content */}
      <div className="px-4 md:px-16 py-20 md:py-28 lg:py-32">
        <div className=" text-white">
          <h1 className=" font-semibold leading-tight">
            Manufacturer of ICU Beds, Ward Beds, Room and Ward-Care Devices,
            Emeregency & Transfer Trolleys, Examination Room Devices, Treatment
            Devices, OB/GYN Devices, Bio-Medical Waste Management Devices,
            Utility Devices, CSSD Devices, Operation Theatre/ Room Devices, and
            Repair And Parts
          </h1>
        </div>
      </div>

      {/* component-scoped styles */}
      <style jsx>{`
        /* animated gradient */
        .animate-gradient-slow {
          inset: 0;
          position: absolute;
          background: linear-gradient(
            120deg,
            rgba(3, 105, 161, 0.85),
            rgba(6, 182, 212, 0.55),
            rgba(16, 185, 129, 0.45)
          );
          background-size: 300% 300%;
          animation: gradientShift 12s ease-in-out infinite;
          transform: translateZ(0);
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* heartbeat stroke draws along the path */
        .heartbeat-path {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: heartbeat-draw 3.6s linear infinite;
        }
        @keyframes heartbeat-draw {
          0% {
            stroke-dashoffset: 1400;
            opacity: 0.15;
            transform: translateY(0);
          }
          10% {
            opacity: 1;
            transform: translateY(-2px);
          }
          18% {
            transform: translateY(0);
          }
          45% {
            opacity: 0.6;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.15;
          }
        }

        /* cross pulse */
        .cross-pulse {
          transform-origin: center;
          animation: crossPulse 2.2s ease-in-out infinite;
        }
        @keyframes crossPulse {
          0% {
            transform: scale(1);
            opacity: 0.95;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.95;
          }
        }

        /* floating particles variations */
        .float-slow-1 {
          animation: floatUpDown 9s ease-in-out infinite;
        }
        .float-slow-2 {
          animation: floatUpDown 12s ease-in-out infinite;
        }
        .float-slow-3 {
          animation: floatUpDown 15s ease-in-out infinite;
        }
        @keyframes floatUpDown {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.06;
          }
          50% {
            transform: translateY(-16px) translateX(4px);
            opacity: 0.12;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.06;
          }
        }

        /* small responsive tweak so svg is scaled nicely */
        @media (min-width: 1024px) {
          svg {
            transform: scale(1.02);
          }
        }
      `}</style>
    </section>
  );
}
