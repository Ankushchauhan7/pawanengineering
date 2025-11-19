"use client";
import products from "@/data.json";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

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
    <div className="bg-gray-50 ">
      <div className="min-h-screen mx-2 md:mx-16 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4">
          {/* Category Sidebar */}
          <aside className="md:w-60 w-full bg-white border rounded-xl shadow-sm p-6 mb-6 md:mb-0 flex-shrink-0">
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
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
              Our Products
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
              {visibleProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}

              {visibleProducts.length === 0 && (
                <div className="col-span-full text-center text-gray-400">
                  No products found in this category.
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
