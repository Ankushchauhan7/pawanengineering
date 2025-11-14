"use client";
import Link from "next/link";
import Image from "next/image";
import products from "@/data.json";
import { useState } from "react";

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
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
                >
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-4 group-hover:scale-105 transition mix-blend-multiply"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {product.model}
                      </span>
                      <span className="text-xs text-gray-500">
                        {product.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-1 mb-3">
                      {product.description}
                    </p>
                    <p className="text-blue-600 font-semibold">
                      {product.price}
                    </p>
                  </div>
                </Link>
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
