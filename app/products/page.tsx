"use client";
import products from "@/data.json";
import { useState, useMemo, useRef, useEffect } from "react";

import EnquiryModal, { EnquiryProduct } from "@/app/components/ot/EnquiryModal";
import OTCard from "@/app/components/ot/OTCard";
import OTBottomCTA from "@/app/components/ot/OTBottomCTA";
import type {Product} from "@/app/lib/types" 
export default function ProductsPage() {
  const allCategories = useMemo(
    () => Array.from(new Set((products as Product[]).map((p) => p.category))),
    []
  );

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery]       = useState<string>("");
  const [enquiry, setEnquiry]               = useState<EnquiryProduct | null>(null);

  const productsRef  = useRef<HTMLDivElement>(null);
  const mobileBarRef = useRef<HTMLDivElement>(null);
  const [mobileBarHeight, setMobileBarHeight] = useState<number>(0);

  useEffect(() => {
    const measure = () => {
      const el = mobileBarRef.current;
      setMobileBarHeight(el ? Math.ceil(el.getBoundingClientRect().height) : 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const scrollToProducts = () => {
    const el = productsRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const top =
          el.getBoundingClientRect().top + window.scrollY - mobileBarHeight - 8;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      });
    });
  };

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    scrollToProducts();
  };

  const visibleProducts = useMemo<Product[]>(() => {
    let list = products as Product[];
    if (activeCategory !== "All")
      list = list.filter((p) => p.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.model.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo<Record<string, number>>(() => {
    const map: Record<string, number> = { All: (products as Product[]).length };
    (products as Product[]).forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, []);

  return (
    <>
      <EnquiryModal product={enquiry} onClose={() => setEnquiry(null)} />

      <div className="min-h-screen bg-slate-50">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto md:px-16">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">
              Medical Equipment
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">
              Our Products
            </h1>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-xl">
              ISO-certified hospital furniture and medical equipment. Trusted by
              500+ hospitals across India.
            </p>
            <div className="flex gap-6 mt-6">
              <div>
                <div className="text-2xl font-extrabold">
                  {(products as Product[]).length}+
                </div>
                <div className="text-blue-200 text-xs">Products</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold">
                  {allCategories.length}
                </div>
                <div className="text-blue-200 text-xs">Categories</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold">25+</div>
                <div className="text-blue-200 text-xs">Years</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Page body ──────────────────────────────────────────────────────
            ✅ CSS GRID:
            - "240px 1fr" on desktop  → sidebar is ALWAYS exactly 240px
            - "1fr"       on mobile   → single column, sidebar hidden
            No flex, no w-* fighting, no overflow surprises.
        ──────────────────────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-8">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "240px 1fr",
            }}
          >
            {/* Responsive override via a small style tag — avoids the need
                for a custom Tailwind breakpoint plugin */}
            <style>{`
              @media (max-width: 767px) {
                .products-grid-layout {
                  grid-template-columns: 1fr !important;
                }
                .products-sidebar {
                  display: none !important;
                }
              }
            `}</style>

            {/* ── Sidebar ── */}
            <aside className="products-sidebar space-y-4">
              <div className="sticky top-24 space-y-4">

                {/* Search */}
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z"
                    />
                  </svg>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products…"
                    className="w-full border border-slate-200 bg-white rounded-xl pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                  />
                </div>

                {/* Categories */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Categories
                  </h2>
                  <ul className="space-y-1">
                    {["All", ...allCategories].map((cat) => (
                      <li key={cat}>
                        <button
                          onClick={() => handleCategorySelect(cat)}
                          className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeCategory === cat
                              ? "bg-blue-600 text-white shadow-sm"
                              : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                          }`}
                        >
                          <span className="truncate mr-2">
                            {cat === "All" ? "All Products" : cat}
                          </span>
                          <span
                            className={`text-xs rounded-full px-1.5 py-0.5 font-semibold flex-shrink-0 ${
                              activeCategory === cat
                                ? "bg-white/20 text-white"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {categoryCounts[cat] ?? 0}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-4 text-white">
                  <h3 className="font-bold text-sm mb-1">Need Help Choosing?</h3>
                  <p className="text-blue-100 text-xs mb-3 leading-relaxed">
                    Our experts help you find the right equipment.
                  </p>
                  <a
                    href="tel:+919810368018"
                    className="flex items-center gap-2 bg-white text-blue-700 rounded-lg px-3 py-2 text-xs font-bold hover:bg-blue-50 transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="currentColor" viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call +91-9810368018
                  </a>
                </div>

              </div>
            </aside>

            {/* ── Main content ── */}
            <main className="min-w-0">

              {/* Mobile search */}
              <div className="md:hidden mb-3 relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z"
                  />
                </svg>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products…"
                  className="w-full border border-slate-200 bg-white rounded-xl pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
                />
              </div>

              {/* Mobile sticky category bar */}
              <div
                ref={mobileBarRef}
                className="md:hidden sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 -mx-4 px-4 py-2 mb-4"
              >
                <div className="flex gap-2 overflow-x-auto no-scrollbar">
                  {["All", ...allCategories].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        activeCategory === cat
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {cat === "All" ? "All" : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result count */}
              <p className="text-sm text-slate-500 mb-4">
                Showing{" "}
                <span className="font-bold text-slate-800">
                  {visibleProducts.length}
                </span>{" "}
                products
                {activeCategory !== "All" && (
                  <span className="text-blue-600 font-semibold">
                    {" "}· {activeCategory}
                  </span>
                )}
              </p>

              {/* Product grid */}
              <div
                ref={productsRef}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
              >
                {visibleProducts.map((p) => (
                  <OTCard
                    key={p.id}
                    product={p}
                    onEnquire={setEnquiry}
                    detailBasePath="/products"
                    accentColor="blue"
                  />
                ))}

                {visibleProducts.length === 0 && (
                  <div className="col-span-full py-20 text-center text-slate-400">
                    <p className="font-semibold mb-2">No products found</p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("All");
                      }}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>

              <OTBottomCTA
                title="Can't find what you need?"
                description="We manufacture custom hospital furniture. Contact us with your requirements."
                gradientClass="from-blue-600 to-cyan-500"
              />

            </main>
          </div>
        </div>
      </div>
    </>
  );
}