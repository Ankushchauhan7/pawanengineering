"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "../lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
    >
      {/* Image */}
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition mix-blend-multiply"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {product.model}
          </span>
          <span className="text-xs text-gray-500">{product.type}</span>
        </div>

        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-1 mb-3">
          {product.description}
        </p>

        <p className="text-blue-600 font-semibold">{product.price}</p>
      </div>
    </Link>
  );
}
