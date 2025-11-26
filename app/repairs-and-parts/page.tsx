import type { Metadata } from "next";
import Link from "next/link";
import QuickEnquiry from "../components/QuickEnquiry";

export const metadata: Metadata = {
  title: "Repairs & Spare Parts — Pawan Engineering AAYUMED",
  description:
    "Request servicing, repairs, and original spare parts for ICU beds, trolleys, CSSD equipment, and hospital furniture.",
};

export default function RepairsAndPartsPage() {
  return (
    <div>
      <div className="mx-2 md:mx-16 space-y-16 py-10">
        {/* Hero */}
        <section className="rounded-2xl bg-sky-50/50 p-8 md:p-12">
        
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
            Repairs & Spare Parts
          </h1>
          <ul className="mt-4 text-slate-600 leading-relaxed space-y-3 list-disc pl-5">
            <li>
              Repairs and spare parts are offered primarily as a value-added
              service for our existing customers.
            </li>
            <li>
              In select situations, we also provide repair support and spare
              parts to new customers.
            </li>
            <li>
              This service is not independently sustainable, as the operational
              cost involved is significantly higher than the revenue it
              generates.
            </li>
            <li>
              We accept repair and parts requests from customers within our
              product segments who register with us and place fresh product
              orders to ensure long-term support and business sustainability.
            </li>
            <li>
              Refurbishing of faulty devices may be undertaken after evaluation
              of:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>technical feasibility and suitability</li>
                <li>availability of spare parts</li>
                <li>adequate space at customer's location</li>
                <li>to reduce packing, transport, and handling costs</li>
              </ul>
            </li>
            <li>
              All requests are subject to case-by-case assessment based on
              feasibility and suitability.
            </li>
          </ul>
        </section>

        {/* Service Highlights */}
        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Original Spare Parts",
              d: "Factory-approved components for long product life and compatibility.",
            },
            {
              t: "On-Site Repairs",
              d: "Technicians available for hospital-site service and breakdown support.",
            },
            {
              t: "Preventive Maintenance",
              d: "AMC,CMC and scheduled servicing to reduce failures and improve safety.",
            },
          ].map((i) => (
            <div
              key={i.t}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <h3 className="text-lg font-semibold text-slate-800">{i.t}</h3>
              <p className="mt-2 text-slate-600">{i.d}</p>
            </div>
          ))}
        </section>

        {/* Supported Products */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Supported Product Categories
          </h2>
          <ul className="grid gap-3 md:grid-cols-2 text-slate-700">
            {[
              "ICU & Fowler Beds",
              "Operation Tables & Lights",
              "Transfer & Emergency Trolleys",
              "Ward Care & Examination Furniture",
              "OB/GYN & Delivery Products",
              "CSSD Stainless Steel Furniture",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-200 p-3 hover:bg-sky-50 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
      </div>
      <div>
        <QuickEnquiry />
      </div>
    </div>
  );
}
