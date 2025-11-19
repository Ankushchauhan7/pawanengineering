import Image from "next/image";
import Link from "next/link";
import heroImage from "../assets/herobanner.webp";

const HeroBanner = () => {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Modern medical facility with equipment"
          fill
          priority
          fetchPriority="high"
          quality={90}
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
        />
        {/* Left-to-right gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="mx-2 px-4 py-20 md:mx-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl text-white">
          <h1>Precision for Better Care</h1>

          <p className="mt-4 text-base  sm:text-lg text-white/90">
            ICU beds, CSSD equipment, and hospital furniture engineered by Pawan
            Engineering Works — <span className="text-sky-600">AAYU</span>
            <span className="text-[#009999]">MED</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
