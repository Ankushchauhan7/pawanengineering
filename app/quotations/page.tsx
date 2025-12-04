// app/quotations/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quotations & Terms — Pawan Engineering AAYUMED",
  description:
    "Quotations and general terms & conditions of supply for Pawan Engineering Works (AAYUMED). Read payment, delivery, warranty and other conditions.",
};

export default function QuotationsPage() {
  return (
    <div className="py-10 mx-2 md:mx-16 px-4">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
          Quotations and General Terms & Conditions of Supply
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Prospective customers are requested to note the model number and name
          (nomenclature) of the product in the inquiry column of the website, or
          email us, send us WhatsApp, or verbally communicate with us, and we
          will provide the quotation at the first opportunity during working
          days.
        </p>

        <div className="my-4">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-sky-600 px-4 py-2 text-white text-sm font-medium hover:bg-sky-700 transition"
          >
            Request a Quotation
          </Link>
        </div>

        {/* Intro */}
        <section>
          <p className="text-slate-700">
            The general terms and conditions of the supplies are as follows:
          </p>
        </section>

        {/* Terms list */}
        <section>
          <ol className="mt-4 list-decimal list-inside space-y-4 text-slate-700">
            <li>
              <strong>GST:</strong> All items ordered are subject to GST as
              applicable and subject to other provisions of the GST Act
              prevailing at the time of dispatch. Customers are requested to
              provide product inquiries in writing; a techno-commercial
              quotation will be provided showing GST percentage and amount as
              extra as per the prevailing rate.
            </li>

            <li>
              <strong>Purchase Order (PO):</strong> A purchase order in line
              with the finalized techno-commercial quotation must be issued to
              us to clearly state model numbers, nomenclature, features,
              specifications, accessories, quantity, unit price, total including
              GST, grand total (in figures and words), PO number, date, delivery
              period and agreed terms.
            </li>

            <li>
              <strong>Order Cancellation:</strong> Once a commercially viable
              order is placed along with the required advance, it cannot be
              cancelled under any circumstances.
            </li>

            <li>
              <strong>BOQ Changes:</strong> The BOQ as per the placed order may
              not be changed under normal circumstances. If a change is required
              for genuine reasons, it will be subject to price and terms
              revision as per the newly agreed offer.
            </li>

            <li>
              <strong>Payment:</strong> All orders are subject to an advance
              payment of 50% (or as agreed). The balance (including packing,
              transportation, insurance, etc., if applicable) shall be paid to
              our account against a pro forma invoice as per the order terms
              before dispatch.
            </li>

            <li>
              <strong>Packing:</strong> Normal packing using corrugated sheets
              and plastic wrappers is provided free of cost. For long-haul or
              part-load shipments, crate-packing or strong-ply corrugated box
              packing is recommended and its cost will be borne by the customer.
            </li>

            <li>
              <strong>Freight:</strong> Freight charges are usually to be borne
              by the customer. Freight varies by distance, volume, and place.
              The freight charge finalized with the transporter at dispatch time
              (in consultation with the customer) must be paid to the freight
              agency before dispatch.
            </li>

            <li>
              <strong>Insurance:</strong> We strongly recommend adequate
              insurance coverage during transit. Material is delivered on an
              ex-factory basis; transport is at customer risk and cost.
              Customers should insure goods to cover unexpected loss or damage
              during handling and transportation.
            </li>

            <li>
              <strong>Delivery Lead Time:</strong> Major orders normally need a
              lead period of 30–60 days depending on volume and type. Smaller
              orders normally take 30–45 days from receipt of a commercially
              viable confirmed order and advance payment. Early delivery can be
              considered in special situations upon inquiry.
            </li>

            <li>
              <strong>Loading & Unloading:</strong> Normal loading at our
              factory is performed by our workers. Site handling (crane charges
              etc.) is the responsibility of the customer.
            </li>

            <li>
              <strong>Safe Storage:</strong> Storage is the customer’s
              responsibility after dispatch; we only facilitate transportation
              and delivery on the customer's behalf, at the customer's cost and
              consequences.
            </li>

            <li>
              <strong>Commissioning & Handover:</strong> Commissioning and
              handing over of equipment is considered under our scope where
              specified.
            </li>

            <li>
              <strong>Warranty:</strong> All products carry a warranty of 12
              months from dispatch date or 15 months from invoicing date,
              whichever is earlier.
            </li>

            <li>
              <strong>Accommodation:</strong> Accommodation (if required) for
              overnight stays during service or commissioning will be borne by
              the customer.
            </li>

            <li>
              <strong>Force Majeure:</strong> This offer is subject to Force
              Majeure. We shall not be liable for delay, damage, or loss due to
              events beyond our control (acts of God, natural calamities,
              strikes, riots, etc.), although we will make reasonable efforts to
              complete work within offered terms.
            </li>

            <li>
              <strong>Civil / Plumbing Works:</strong> Civil or plumbing work,
              where applicable, is the customer's responsibility.
            </li>

            <li>
              <strong>Jurisdiction:</strong> Any dispute shall be subject to the
              jurisdiction of Ghaziabad (U.P.) / Delhi courts only.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
