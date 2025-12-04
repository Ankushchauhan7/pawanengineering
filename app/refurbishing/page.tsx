// app/refurbishing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refurbishing — Pawan Engineering AAYUMED",
  description:
    "Refurbishing services for medical equipment: scope, process, limitations and how to request an assessment from Pawan Engineering Works (AAYUMED).",
};

export default function RefurbishingPage() {
  return (
    <div className="mx-2 md:mx-16 py-10 px-4">
      <div className="space-y-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
          Refurbishing
        </h1>
        <p className="mt-2 text-slate-600 max-w-3xl leading-relaxed">
          We undertake refurbishing of products in select cases where the
          customer is an existing customer or commits to fresh orders. Each
          request is evaluated by our technical team and accepted subject to
          technical feasibility and mutually agreed terms and conditions.
        </p>

        {/* Main content */}
        <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Refurbishing differs from routine repairs and maintenance. It is a
            comprehensive overhaul aimed at extending the active utility life of
            equipment. While refurbishing may include repair tasks, it often
            involves additional mechanical and finishing works such as:
          </p>

          <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm md:text-lg">
            <li>
              Joining or repairing broken members, sheets and structural parts
              (welding, riveting).
            </li>
            <li>Shearing, bending and re-forming metal components.</li>
            <li>
              Fitting additional or replacement parts and spare components.
            </li>
            <li>Re-assembly, alignment and functional testing.</li>
            <li>
              Surface treatment and repainting to restore protective finish.
            </li>
          </ul>

          <p className="text-slate-700 leading-relaxed">
            Note: Refurbishing is normally performed at the customer site. We do
            not accept used products at our factory for refurbishing because:
          </p>

          <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm md:text-lg">
            <li>
              Logistics (packing, transportation and handling) for used items
              to/from the factory make the process commercially unviable.
            </li>
            <li>
              On-site refurbishing reduces transit damage risk and often allows
              use of customer facilities for large or fixed installations.
            </li>
          </ul>

          <p className="text-slate-700 leading-relaxed">
            Before accepting a refurbishing job we perform a technical
            evaluation to determine suitability, expected costs, lead time and
            whether refurbishing will be effective in extending life and
            performance. Some items, due to the extent of damage or lack of
            spare parts, may not be suitable for refurbishing.
          </p>

          <p className="text-slate-700 leading-relaxed">
            Customers are requested to discuss refurbishment requirements at the
            time of inquiry to avoid inconvenience and to allow us to advise on
            feasibility, cost, and timelines.
          </p>
        </section>
        {/* <section className="rounded-xl bg-sky-50 p-6 border border-sky-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-800">Need Refurbishing?</h2>
            <p className="mt-2 text-slate-700">
              Share your equipment details, photos and service history. Our
              technical team will evaluate and advise on feasibility and next
              steps.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium hover:bg-sky-700 transition"
            >
              Request Evaluation
            </Link>

            <Link
              href="/repairs-and-parts"
              className="inline-block rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
            >
              Repairs & Parts
            </Link>
          </div>
        </section> */}
      </div>
    </div>
  );
}
