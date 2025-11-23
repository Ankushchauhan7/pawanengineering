"use client";

import Link from "next/link";

export default function ComingSoon() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-2xl p-10 max-w-xl text-center border border-gray-100">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
          🚧 Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-slate-600 leading-relaxed">
          We’re working hard to bring you this page soon. Stay tuned for updates
          from{" "}
          <span className="text-sky-600 font-medium">
            Pawan Engineering Works – AAYUMED
          </span>
          .
        </p>

        {/* Progress Bar (fun UI element) */}
        <div className="mt-8 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div className="h-full bg-sky-600 animate-pulse w-1/2"></div>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 font-medium shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/30"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
