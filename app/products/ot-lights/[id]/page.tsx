import ProductDetail from "@/app/components/ProductDetail";
import products from "@/app/data/ot-lights.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { OTProduct } from "@/app/components/ot/OTCard";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,  // already a string now, no .toString() needed
  }));
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const product = (products as OTProduct[]).find((p) => p.id === params.id); // ← removed parseInt

  if (!product) {
    return {
      title: "Product Not Found | Pawan Aayumed",
      description: "The product you are looking for could not be found.",
    };
  }

  return {
    title: `${product.name} - ${product.model} | Pawan Aayumed`,
    description: product.description,
    keywords: [
      product.model,
      product.name,
      product.category,
      product.type,
      "medical equipment",
      "hospital furniture",
    ],
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
      images: [{ url: product.image, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage(props: { params: Params }) {
  const params = await props.params;

  const product = (products as OTProduct[]).find((p) => p.id === params.id); // ← removed parseInt

  if (!product) notFound();

  const relatedProducts = (products as OTProduct[])
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-gray-50">
      <div className="mx-2 md:mx-16">
        <ProductDetail product={product} relatedProducts={relatedProducts} />
      </div>
    </div>
  );
}