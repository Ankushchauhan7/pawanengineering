"use client";
import Link from "next/link";
import { FaTools, FaSearch, FaPaperPlane, FaFileInvoice } from "react-icons/fa";

export default function ActionButtons() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 text-center mb-8">
          How can we help you?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Explore Products */}
          <Link
            href="/products"
            className="group flex flex-col items-center justify-center rounded-xl bg-sky-50 p-6 
            hover:bg-sky-100 transition shadow-sm hover:shadow-md"
          >
            <FaSearch className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition" />
            <span className="font-semibold text-slate-800">Explore Products</span>
            <p className="text-xs text-slate-600 mt-1 text-center">
              View our complete product range
            </p>
          </Link>

          {/* Send an Enquiry */}
          <Link
            href="/contact"
            className="group flex flex-col items-center justify-center rounded-xl bg-sky-50 p-6 
            hover:bg-sky-100 transition shadow-sm hover:shadow-md"
          >
            <FaPaperPlane className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition" />
            <span className="font-semibold text-slate-800">Send an Enquiry</span>
            <p className="text-xs text-slate-600 mt-1 text-center">
              Share your requirement with us
            </p>
          </Link>

          {/* Get a Quick Quote */}
          <Link
            href="/quick-quote"
            className="group flex flex-col items-center justify-center rounded-xl bg-sky-50 p-6 
            hover:bg-sky-100 transition shadow-sm hover:shadow-md"
          >
            <FaFileInvoice className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition" />
            <span className="font-semibold text-slate-800">Get a Quick Quote</span>
            <p className="text-xs text-slate-600 mt-1 text-center">
              Fast pricing for selected products
            </p>
          </Link>

          {/* Repairs & Parts */}
          <Link
            href="/repairs"
            className="group flex flex-col items-center justify-center rounded-xl bg-sky-50 p-6 
            hover:bg-sky-100 transition shadow-sm hover:shadow-md"
          >
            <FaTools className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition" />
            <span className="font-semibold text-slate-800">Repairs & Parts</span>
            <p className="text-xs text-slate-600 mt-1 text-center">
              Service and replacement support
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
