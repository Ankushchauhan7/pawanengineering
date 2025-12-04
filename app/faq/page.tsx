// app/faq/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Pawan Engineering Works (AAYUMED)",
  description:
    "Frequently asked questions related to ICU beds, hospital furniture, orders, delivery, warranty, GST, and services.",
};

const FAQ_LIST = [
  {
    q: "What are the different models of ICU beds available with you?",
    a: "We offer multiple models including manual, semi-electric, and fully electric ICU beds. Each model varies based on motor options, tilting functions, and features.",
  },
  {
    q: "What are the different models of Fowler’s Position beds available with you?",
    a: "Fowler beds are available in manual, semi-fowler, and full-fowler configurations depending on user requirements.",
  },
  {
    q: "What is an emergency recovery trolley and what are the models available with you?",
    a: "It is a mobile patient-handling system used for emergency shifting. We offer stainless-steel and powder-coated variants with multiple configurations.",
  },
  {
    q: "What is a crash cart and what are the models available with you?",
    a: "Crash carts are used in emergency response units. We offer models with ABS drawers, stainless steel body, and various storage configurations.",
  },
  {
    q: "What is a labour delivery room (LDR) bed and different models available with you?",
    a: "LDR beds are designed for childbirth processes. We offer manual and advanced models with multiple adjustability options.",
  },
  {
    q: "What is an OB/GYN table and different models available with you?",
    a: "OB/GYN tables support gynecological examinations and procedures. Multiple height-adjustable and motorized models are available.",
  },
  {
    q: "What is the basic material with which the beds and other hospital equipment are manufactured?",
    a: "We primarily use CRCA steel, stainless steel, and medical-grade components to ensure strength, durability, and hygiene.",
  },
  {
    q: "What are the machineries used in the manufacture of the beds and other hospital equipment?",
    a: "We use CNC bending machines, laser-cutting machines, MIG welding units, powder-coating plants, and precision assembly tools.",
  },
  {
    q: "What is CRCA steel, and what is its importance?",
    a: "CRCA steel (Cold Rolled Close Annealed) is used for its high strength, excellent finish, and durability.",
  },
  {
    q: "What are the processes of manufacturing ICU beds and other hospital equipment?",
    a: "Processes include cutting, bending, welding, polishing, pre-treatment, powder coating, assembly, and QC inspection.",
  },
  {
    q: "What is powder coating?",
    a: "Powder coating is an electrostatic painting method providing strong, durable, corrosion-resistant finishing.",
  },
  {
    q: "What is 7-8 tank chemical pre-treatment?",
    a: "It is a chemical cleaning and surface-preparation process ensuring long-lasting paint adhesion and corrosion resistance.",
  },
  {
    q: "How much time does it take for delivery of small orders?",
    a: "Typically 30–45 days depending on product type and workload.",
  },
  {
    q: "How much time does it take to deliver large orders?",
    a: "Large orders may take 30–60 days based on volume and complexity.",
  },
  {
    q: "What is the process of placing an order?",
    a: "You must share a written inquiry → receive a formal quotation → issue a PO → pay advance → order is processed.",
  },
  {
    q: "Can I cancel an order after I place an order?",
    a: "Orders cannot be cancelled once the advance is paid and production has begun.",
  },
  {
    q: "How much is the GST for medical furniture?",
    a: "GST varies per category and is charged as per the prevailing government rates at the time of dispatch.",
  },
  {
    q: "How much will the packing charges be?",
    a: "Standard packing is free; crate or box packing is chargeable based on size and weight.",
  },
  {
    q: "How much will the insurance cost?",
    a: "Insurance is optional but recommended. Cost varies by invoice value and transport conditions.",
  },
  {
    q: "How much will the freight charges be?",
    a: "Freight depends on distance, quantity, and transporter rates. Actual cost is communicated before dispatch.",
  },
  {
    q: "What will be the handling charges at the factory when loading and dispatching?",
    a: "Normal loading is included. Special handling such as crane use is chargeable extra.",
  },
  {
    q: "Who is responsible for safe delivery and storage?",
    a: "Once dispatched ex-factory, safe handling and storage at site are the customer’s responsibility.",
  },
  {
    q: "Who will do the installation and handing over?",
    a: "Installation and handing over are under our scope.",
  },
  {
    q: "What is the warranty for the products?",
    a: "Standard warranty is 12 months from dispatch or 15 months from invoice — whichever is earlier.",
  },
  {
    q: "Are AMC, CMC, and paid services available after the warranty period?",
    a: "Yes, we offer AMC, CMC, and paid repair options.",
  },
  {
    q: "Will you undertake repairs, supply parts, and undertaking refurbishing?",
    a: "Yes, based on feasibility and condition of equipment.",
  },
  {
    q: "What will be the cost of repairs, parts, and refurbishing?",
    a: "Costs vary depending on device condition and components required.",
  },
  {
    q: "Will you provide required technical documents along with the products?",
    a: "Yes, user manuals, guides, and certificates are provided after installation.",
  },
  {
    q: "What are the quality certifications that you have?",
    a: "We are ISO 9001:2015, ISO 13485:2016, ISO 14001:2015, ISO 45001:2018 & CE compliant.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-2 md:mx-16 py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6">
        Frequently Asked Questions (FAQ)
      </h1>

      <p className="text-slate-600 max-w-3xl mb-10">
        Below are some commonly asked questions about our products, services,
        orders, delivery, warranty, and manufacturing processes.
      </p>

      <div className="space-y-6">
        {FAQ_LIST.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h5 className="text-lg font-bold text-slate-800 mb-2">
              {index + 1}. {item.q}
            </h5>
            <p className="text-slate-600 text-xs">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
