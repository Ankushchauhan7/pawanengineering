// app/customization/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customization — Pawan Engineering AAYUMED",
  description:
    "Information about customization options for medical equipment manufactured by Pawan Engineering Works (AAYUMED). Learn when customization is possible and how to request it.",
};

export default function CustomizationPage() {
  return (
    <div className="mx-2 md:mx-16 py-10 px-4">
      <div className=" space-y-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
          Customization
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
          We provide customization for our products in selected cases, depending
          on feasibility, order size, and approval by our production team.
        </p>
        
        <section className="rounded-xl bg-white shadow-sm ring-1 ring-slate-100 p-6 space-y-6">
          <p className="text-slate-700 leading-relaxed">
            We undertake the customization of our products in select cases
            where:
          </p>

          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>The purchase order or project volume is sizable.</li>
            <li>
              The customer is an existing client or commits to fresh orders.
            </li>
            <li>
              The customization is reviewed and approved by our production and
              engineering teams.
            </li>
          </ul>

          <p className="text-slate-700 leading-relaxed">
            Customization may involve special or additional components that may
            not always be readily available locally. In some cases, these
            components may need to be imported—making the process
            time-consuming.
          </p>

          <p className="text-slate-700 leading-relaxed">
            As a result, custom-build items may require longer production cycles
            and could involve additional costs, depending on the complexity and
            component availability.
          </p>

          <p className="text-slate-700 leading-relaxed">
            Customers are strongly advised to discuss customization requests at
            the inquiry stage itself to avoid delays or inconveniences.
          </p>
        </section>
        {/* CTA Box */}
        <section className="rounded-xl bg-sky-50 p-6 border border-sky-100">
          <h2 className="text-lg font-semibold text-slate-800">
            Need a Customized Solution?
          </h2>
          <p className="mt-2 text-slate-700">
            Share your specifications, project details, and layout requirements
            with our team for feasibility evaluation.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center mt-4 rounded-lg bg-sky-600 px-5 py-2.5 text-white text-sm font-medium hover:bg-sky-700 transition"
          >
            Contact Us for Customization
          </Link>
        </section>
      </div>
    </div>
  );
}
