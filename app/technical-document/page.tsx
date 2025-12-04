// app/technical-document/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Documents — Pawan Engineering AAYUMED",
  description:
    "Information about user manuals, installation guides, specifications, drawings, brochures and warranty certificates for equipment supplied by Pawan Engineering Works (AAYUMED).",
};

export default function TechnicalDocumentPage() {
  return (
    <div className="mx-2 md:mx-16 py-10 px-4">
      <div className="max-w-7xl mx-auto prose prose-slate lg:prose-lg">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
            Technical Documents
          </h1>
          <p className="mt-2 text-slate-600">
            Technical documents such as user manuals, installation guides and
            related paperwork are prepared for every product. These documents
            describe features, specifications, accessories, installation and
            usage instructions, service guidelines, drawings (where applicable),
            brochures and warranty certificates.
          </p>
        </header>

        {/* What is included */}
        <section>
          <h2 className="text-lg font-semibold text-slate-800">What we provide</h2>
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-2">
            <li>
              <strong>User Manual:</strong> Operation instructions, safety
              precautions and daily checks.
            </li>
            <li>
              <strong>Installation Guide:</strong> Mounting, electrical/
              mechanical fitment, site requirements and commissioning steps.
            </li>
            <li>
              <strong>Features & Specifications:</strong> Model-specific technical
              data and performance parameters.
            </li>
            <li>
              <strong>Accessories List:</strong> Standard and optional accessories
              with ordering codes.
            </li>
            <li>
              <strong>Service Guidelines:</strong> Periodic maintenance,
              troubleshooting and recommended spares.
            </li>
            <li>
              <strong>Drawings & Diagrams:</strong> Mechanical drawings, wiring
              diagrams and layout sketches (when applicable).
            </li>
            <li>
              <strong>Brochure:</strong> Product brochure for marketing and
              technical overview.
            </li>
            <li>
              <strong>Warranty Certificate:</strong> Terms and validity of the
              product warranty.
            </li>
          </ul>
        </section>

        {/* Availability & how to get */}
        <section className="mt-6">
          <h3 className="text-lg font-semibold text-slate-800">Availability</h3>
          <p className="mt-2 text-slate-700">
            These documents are prepared for customers and will be provided to
            you after the equipment is handed over. In many cases (for common
            models) we can share digital copies earlier upon request.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium hover:bg-sky-700 transition"
            >
              Request Documents
            </Link>

            {/* <a
              href="/brochures/sample-brochure.pdf"
              className="inline-block rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition"
              download
            >
              Download sample brochure (PDF)
            </a> */}
          </div>
        </section>

       
      </div>
    </div>
  );
}
