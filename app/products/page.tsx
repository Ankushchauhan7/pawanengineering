"use client";

import products from "@/data.json";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import QuickEnquiry from "../components/QuickEnquiry";

export default function ProductsPage() {
  // Collect unique categories
  const allCategories = Array.from(new Set(products.map((p) => p.category)));
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Filter products by category
  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    // set a CSS variable with header height so we can subtract it for scroller
    <div
      className="bg-gray-50"
      style={{ ["--header-height" as any]: "6rem" }} // adjust header height if needed
    >
      <div className="min-h-screen mx-2 md:mx-16 py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* ---------- two-column wrapper ---------- */}
          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className="hidden md:block md:w-64 shrink-0">
              {/* Use sticky so sidebar stays visible inside viewport */}
              <div
                className="sticky top-[calc(var(--header-height)+1rem)] rounded-xl bg-white border shadow-sm p-6"
                // top uses CSS var to keep below header. Adjust top if header value changes.
              >
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <ul className="space-y-2">
                  <li>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${
                        activeCategory === "All"
                          ? "bg-blue-600 text-white shadow"
                          : "bg-gray-50 text-blue-600 hover:bg-blue-100"
                      }`}
                      onClick={() => setActiveCategory("All")}
                    >
                      All Products
                    </button>
                  </li>

                  {allCategories.map((cat) => (
                    <li key={cat}>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${
                          activeCategory === cat
                            ? "bg-blue-600 text-white shadow"
                            : "bg-gray-50 text-blue-600 hover:bg-blue-100"
                        }`}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main area */}
            <main className="flex-1 min-w-0">
              <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
                Our Products
              </h1>

              {/* Controls for small screens (categories) */}
              <div className="md:hidden mb-6">
                <label className="sr-only">Category</label>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full rounded-lg border px-3 py-2 bg-white"
                >
                  <option value="All">All Products</option>
                  {allCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product grid wrapper that scrolls independently */}
              <div
                className="rounded-xl bg-transparent"
                /* important: scroller height = viewport height minus header */
              >
                <div
                  className="overflow-auto"
                  style={{
                    // subtract header + some page padding: adjust var or value as needed
                    height: "calc(100vh - var(--header-height) - 4rem)",
                  }}
                >
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
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* quick enquiry sits below everything (not inside scroller) */}
      <QuickEnquiry />
    </div>
  );
}
