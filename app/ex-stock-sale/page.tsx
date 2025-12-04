// app/ex-stock-sale/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ex-Stock Sale — Pawan Engineering AAYUMED",
  description:
    "Immediate delivery stock of selected medical furniture and equipment (ICU beds, fowler beds, emergency trolleys, overbed tables and more). Check availability and terms.",
};

const GALLERY = [
  { src: "/products/PEW-1040.png", alt: "ICU bed" },
  { src: "/products/PEW-1215.png", alt: "Fowler bed" },
  { src: "/products/PEW-4110.png", alt: "Bedside locker" },
  { src: "/products/PEW-4260.png", alt: "Overbed table" },
  { src: "/products/PEW-1860.png", alt: "Emergency trolley" },
  { src: "/products/PEW-2200.png", alt: "Examination couch" },
  { src: "/products/PEW-4485.png", alt: "Foot step stand" },
  { src: "/products/PEW-4425.png", alt: "IV stand" },
  { src: "/products/PEW-3700.png", alt: "Bedside screen" },
  { src: "/products/PEW-2210.png", alt: "OB/Gyn table" },
  { src: "/products/PEW-3290.png", alt: "Wheelchair" },
];

export default function ExStockSalePage() {
  return (
    <div className="mx-2 md:mx-16 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
          Ex-Stock Sale
        </h1>

        <p className="text-slate-700 leading-relaxed max-w-3xl">
          We maintain a minimum stock of fast-moving items for emergency supply,
          available for immediate delivery from our factory subject to
          availability and our standard terms & conditions.
        </p>

        {/* Explanation */}
        <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 space-y-4">
          <p className="text-slate-700 leading-relaxed">
            In medical furniture, ex-stock items are uncommon due to the wide
            variety of product types, customizations and logistics. However, to
            meet urgent institutional and retail needs we keep certain items
            ready for dispatch. Availability is subject to stock levels and the
            terms that govern our supplies.
          </p>

          <p className="text-slate-700 leading-relaxed">
            Customers are requested to check stock availability before placing
            an order. Lead times for non-stock items remain as per standard
            delivery schedules.
          </p>

          <p className="text-slate-700">
            Typical ex-stock items may include:{" "}
            <strong>
              ICU Beds, Fowler Beds, Bedside Lockers, Overbed Tables, Emergency
              Trolleys, Examination Couches, Foot Step Stands, IV Stands,
              Bedside Screens, OB/Gyn Tables, Wheelchairs
            </strong>
            .
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium hover:bg-sky-700 transition"
            >
              Check Stock / Request Quote
            </Link>

            <Link
              href="/products"
              className="inline-block rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
            >
              Browse Full Products
            </Link>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Ex-Stock Gallery
          </h2>

          <p className="text-slate-600 text-sm mb-4">
            Images below show typical ex-stock items — actual stock condition
            (KDC / semi-KDC / as-is) will be confirmed at time of enquiry.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className="rounded-lg overflow-hidden bg-white shadow-sm ring-1 p-2 ring-slate-100"
              >
                <div className="relative aspect-4/3 w-full bg-gray-50">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-fit"
                  />
                </div>
                <figcaption className="p-3 text-sm text-slate-700">
                  {g.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Stock note */}
        <section className="rounded-xl bg-sky-50 p-6 border border-sky-100">
          <h3 className="text-md font-semibold text-slate-800">
            Important Notes
          </h3>
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-2">
            <li>
              Ex-stock availability is subject to prior sale — please confirm
              before making logistics plans.
            </li>
            <li>
              Ex-stock items may be supplied in KDC or semi-KDC condition where
              specified; condition will be confirmed at enquiry.
            </li>
            <li>
              Pricing, GST, freight and packing charges will apply as per our
              terms and the final commercial quotation.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
