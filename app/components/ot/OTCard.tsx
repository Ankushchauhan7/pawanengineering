"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EnquiryProduct } from "./EnquiryModal";

export interface OTProduct {
  id: string;
  model: string;
  name: string;
  category: string;
  type: string;
  description: string;
  price: string;
  image: string;
  features: string[];
 specifications: Record<string, string | number | undefined>;
  optional_accessories: string[];
}

interface Props {
  product: OTProduct;
  onEnquire: (p: EnquiryProduct) => void;
  detailBasePath: string;        // e.g. "/products/ot-tables" or "/products"
  accentColor?: "blue" | "amber"; // blue = tables/medical, amber = lights
  // Which spec keys to show as quick badges (optional)
  specBadgeKeys?: string[];
}

const ACCENT = {
  blue: {
    badge: "text-blue-500",
    check: "text-blue-500",
    link: "text-blue-600 hover:text-blue-800",
    btn: "bg-blue-600 hover:bg-blue-700",
  },
  amber: {
    badge: "text-amber-500",
    check: "text-amber-500",
    link: "text-amber-600 hover:text-amber-800",
    btn: "bg-amber-500 hover:bg-amber-600",
  },
};

// Per-type pill color
const TYPE_PILL: Record<string, string> = {
  Motorized:        "bg-blue-100 text-blue-700",
  "Semi-Motorized": "bg-violet-100 text-violet-700",
  Manual:           "bg-emerald-100 text-emerald-700",
  "Dual Dome":      "bg-amber-100 text-amber-700",
  "Single Dome":    "bg-sky-100 text-sky-700",
  Fixed:            "bg-slate-100 text-slate-600",
  Storage:          "bg-orange-100 text-orange-700",
  Trolley:          "bg-rose-100 text-rose-700",
  Mobility:         "bg-pink-100 text-pink-700",
};

export default function OTCard({
  product,
  onEnquire,
  detailBasePath,
  accentColor = "blue",
  specBadgeKeys = [],
}: Props) {
  const [imgError, setImgError] = useState(false);
  const a = ACCENT[accentColor];
  const pillStyle = TYPE_PILL[product.type] ?? "bg-slate-100 text-slate-600";

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">

      {/* Type badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${pillStyle}`}>
          {product.type}
        </span>
      </div>

      {/* Image */}
      <Link href={`${detailBasePath}/${product.id}`} className="block">
        <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 h-52 flex items-center justify-center overflow-hidden">
          {!imgError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-300">
              <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">No image</span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">

        {/* Model */}
        <span className={`text-xs font-mono font-semibold tracking-wider ${a.badge}`}>
          {product.model}
        </span>

        {/* Name */}
        <Link href={`${detailBasePath}/${product.id}`}>
          <h3 className="text-sm font-bold text-slate-800 leading-snug line-clamp-2 hover:text-blue-700 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Spec badges — only shown if specBadgeKeys provided */}
        {specBadgeKeys.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {specBadgeKeys.map((key) =>
              product.specifications[key] ? (
                <span key={key} className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                  {key.replace(/_/g, " ")}: {product.specifications[key]}
                </span>
              ) : null
            )}
          </div>
        )}

        {/* Top 3 features */}
        {product.features?.length > 0 && (
          <ul className="space-y-1 mt-1">
            {product.features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                <svg className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${a.check}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="line-clamp-1">{f}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex-1" />

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 gap-2 mt-1">
          <Link
            href={`${detailBasePath}/${product.id}`}
            className={`text-xs font-semibold transition-colors ${a.link}`}
          >
            View Details →
          </Link>
          <button
            onClick={() => onEnquire({ model: product.model, name: product.name })}
            className={`shrink-0 text-xs font-semibold text-white px-3 py-1.5 rounded-lg transition-colors ${a.btn}`}
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}