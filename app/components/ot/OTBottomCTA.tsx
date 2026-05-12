import Link from "next/link";

interface Props {
  title: string;
  description: string;
  gradientClass?: string;
  callLabel?: string;
}

export default function OTBottomCTA({
  title,
  description,
  gradientClass = "from-blue-600 to-cyan-500",
  callLabel = "Call +91-9810368018",
}: Props) {
  return (
    <div className={`mt-12 bg-gradient-to-r ${gradientClass} rounded-2xl p-6 md:p-8 text-white text-center`}>
      <h3 className="text-xl md:text-2xl font-extrabold mb-2">{title}</h3>
      <p className="text-white/80 text-sm mb-5 max-w-md mx-auto leading-relaxed">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="tel:+919810368018"
          className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-slate-50 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          {callLabel}
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-white/25 transition-colors"
        >
          Send Enquiry
        </Link>
      </div>
    </div>
  );
}