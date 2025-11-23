import SendMessageForm from "../components/SendMessageForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Pawan Engineering AAYUMED",
  description:
    "Send enquiries, request quotes, or contact Pawan Engineering Works – AAYUMED for premium medical and hospital furniture solutions.",
  keywords: [
    "contact",
    "Pawan Engineering Works",
    "AAYUMED",
    "medical equipment enquiry",
    "hospital furniture manufacturer",
  ],
  openGraph: {
    title: "Contact Pawan Engineering Works – AAYUMED",
    description:
      "Reach out to us for ICU beds, ward care products, OT devices, CSSD furniture and more.",
    url: "https://www.pawanengineering.in/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-2 md:mx-16 space-y-12 py-10">
      {/* Heading */}
      <section className="text-left">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
          Contact Us
        </h1>
        <p className="mt-3 text-slate-600">
          You may send us a message in the optin message bar below by providing
          your name, email ID, contact number and brief particulars of your
          requirement which we will respond at the earliest opprtunity.
          Alternatively, you may call us directly on the telephone numbers
          mentioned below or send us a email by providing your name, email ID,
          contact number and particulars of your requirement which we will
          respond immediately.
        </p>
      </section>

      {/* Grid: Form + Info */}
      <section className="grid gap-8 md:grid-cols-2">
        <SendMessageForm />

        {/* Info block */}
        <aside className="rounded-xl bg-sky-50/50 p-6">
          <h3 className="text-lg font-semibold text-slate-800">
            Reach Us Directly
          </h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>
              <span className="font-medium">Email:</span>{" "}
              info@pawanengineering.in
            </li>
            <li>
              <span className="font-medium">Phone:</span> +91- 9810368018,
              +91-9412622300
            </li>
            <li className="text-slate-600">
              <span className="font-medium text-slate-700">Address:</span>{" "}
              Khasra No.509, United Paradise, behind Krishnagar Restaurant,
              Ganga Nahar, Meerut Road, Murad Nagar, Ghaziabad-201206, (Uttar
              Pradesh), India
            </li>
          </ul>

          <div className="mt-6 h-56 w-full overflow-hidden rounded-lg ring-1 ring-slate-200">
            {/* Replace src with your real GMap embed */}
            <iframe
              title="Pawan Engineering Location"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3497.0318432954946!2d77.5247966!3d28.7783097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ2JzQxLjkiTiA3N8KwMzEnMjkuMyJF!5e0!3m2!1sen!2sin!4v1763915051874!5m2!1sen!2sin"
            />
          </div>

          {/* Socials */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-white"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-white"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-white"
            >
              Instagram
            </a>
          </div>
        </aside>
      </section>

      {/* FAQ (optional) */}
      <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <h2 className="text-xl font-semibold text-slate-800">FAQs</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Do you provide custom sizes/configurations?",
              a: "Yes. Share your layout and clinical workflow—we’ll propose the closest model or a custom configuration.",
            },
            {
              q: "What about warranty and service?",
              a: "Standard limited warranty with responsive, region-wise service support. Extended plans available.",
            },
          ].map((f) => (
            <div key={f.q} className="rounded-lg border border-slate-100 p-4">
              <div className="font-medium text-slate-800">{f.q}</div>
              <div className="mt-1 text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
