"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCheckCircle, FaPhone, FaEnvelope } from "react-icons/fa";
import type { ProductDetailProps } from "@/app/lib/types";

export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState<"features" | "specs" | "accessories">(
    "features"
  );

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <Link href="/" className="text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="text-blue-600">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
          <span className="mx-2">/</span>
          <span className="font-bold">{product.model}</span>
        </nav>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative aspect-square w-full bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4 mix-blend-multiply"
                  priority
                />
              </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-6">
              {/* Badge & Title */}
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600">
                  Model: <span className="font-semibold">{product.model}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">Type: {product.type}</p>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="py-4 border-t border-b border-gray-200">
                <p className="text-2xl font-bold text-blue-600">
                  {product.price}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#enquiry"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <FaEnvelope />
                  Send Enquiry
                </a>
                <a
                  href="tel:+917736077740"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  <FaPhone />
                  Call Now
                </a>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Quick Contact
                </p>
                <p className="text-sm text-gray-600">📞 +91 9810368018, +91 9412622300</p>
                <p className="text-sm text-gray-600">
                  📧 info@pawanengineering.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Tab Headers */}
          <div className="border-b border-gray-200 flex">
            <button
              onClick={() => setActiveTab("features")}
              className={`flex-1 px-6 py-4 font-semibold transition ${
                activeTab === "features"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Features ({product.features.length})
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`flex-1 px-6 py-4 font-semibold transition ${
                activeTab === "specs"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Specifications
            </button>
            {product.optional_accessories.length > 0 && (
              <button
                onClick={() => setActiveTab("accessories")}
                className={`flex-1 px-6 py-4 font-semibold transition ${
                  activeTab === "accessories"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                Accessories
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "features" && (
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "specs" && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Technical Specifications
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {Object.entries(product.specifications)
                        .filter(([_, value]) => value !== undefined && value !== null)
                        .map(([key, value], idx) => (
                          <tr
                            key={idx}
                            className={idx % 2 === 0 ? "bg-gray-50" : ""}
                          >
                            <td className="px-4 py-3 font-semibold text-gray-900 border capitalize">
                              {key.replace(/_/g, " ")}
                            </td>
                            <td className="px-4 py-3 text-gray-700 border">
                              {value}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "accessories" &&
              product.optional_accessories.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Optional Accessories
                  </h3>
                  <ul className="space-y-2">
                    {product.optional_accessories.map((accessory, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {accessory}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((prod) => (
                <Link
                  key={prod.id}
                  href={`/products/${prod.id}`}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition group"
                >
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{prod.model}</p>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                      {prod.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold">
                      {prod.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}