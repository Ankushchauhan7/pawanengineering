"use client";

import products from "@/data.json";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/ProductCard";
import QuickEnquiry from "../components/QuickEnquiry";

export default function ProductsPage() {
  const allCategories = Array.from(new Set(products.map((p) => p.category)));
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // refs
  const productsRef = useRef<HTMLDivElement | null>(null);
  const mobileBarRef = useRef<HTMLDivElement | null>(null);

  // measured height of mobile bar
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

  // smooth scroll to products, account for mobile bar height if present
  const scrollToProducts = () => {
    const el = productsRef.current;
    if (!el) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const top =
          el.getBoundingClientRect().top + window.scrollY - (mobileBarHeight || 0) - 8;
        window.scrollTo({
          top: Math.max(0, Math.floor(top)),
          behavior: "smooth",
        });

        // accessibility focus
        el.setAttribute("tabindex", "-1");
        try {
          el.focus({ preventScroll: true });
        } catch {
          //
        }
      });
    });
  };

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    scrollToProducts();
  };

  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gray-50">
      <div className="min-h-screen mx-2 md:mx-16 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            {/* Desktop Sidebar - sticky on md+ */}
            <aside className="hidden md:block md:w-64 shrink-0">
              <div className="md:sticky md:top-24 md:self-start rounded-xl bg-white border shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleCategorySelect("All")}
                      className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${
                        activeCategory === "All"
                          ? "bg-blue-600 text-white shadow"
                          : "bg-gray-50 text-blue-600 hover:bg-blue-100"
                      }`}
                    >
                      All Products
                    </button>
                  </li>

                  {allCategories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategorySelect(cat)}
                        className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${
                          activeCategory === cat
                            ? "bg-blue-600 text-white shadow"
                            : "bg-gray-50 text-blue-600 hover:bg-blue-100"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main */}
            <main className="flex-1 min-w-0">
              {/* Page title (non-sticky) */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h1>

              {/* MOBILE: Sticky category bar placed in-flow under the title (md:hidden) */}
              {/* Using `sticky top-0` means it won't cover the header because it's located below it in the DOM */}
              <div
                ref={mobileBarRef}
                className="md:hidden sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200"
              >
                <div className="max-w-7xl mx-auto px-4 py-2">
                  <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-2 px-2">
                    <button
                      onClick={() => handleCategorySelect("All")}
                      className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition ${
                        activeCategory === "All"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-slate-700 hover:bg-blue-50"
                      }`}
                    >
                      All
                    </button>

                    {allCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategorySelect(cat)}
                        className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition ${
                          activeCategory === cat
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-slate-700 hover:bg-blue-50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products Section */}
              <div ref={productsRef} className="scroll-mt-10">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-1">
                  {visibleProducts.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                  ))}

                  {visibleProducts.length === 0 && (
                    <div className="col-span-full text-center text-gray-400 p-8">
                      No products found in this category.
                    </div>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <QuickEnquiry />
    </div>
  );
}
