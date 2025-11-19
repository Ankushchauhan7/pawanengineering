import products from "@/data.json";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

export default function FeaturedProducts() {
  // Show only first 6 products (you can change number)
  const featured = products.slice(0, 6);

  return (
    <section className="py-12  bg-gray-50">
      <div className="mx-2 md:mx-16">
        <h2 className="mb-6 text-center">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-6">
          {featured.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
