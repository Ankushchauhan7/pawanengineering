"use client";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact — Pawan Engineering AAYUMED",
//   description: "Get in touch for product queries, quotes, and support.",
// };

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
        {/* Form */}
        <form
          className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="you@company.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                type="tel"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="+91 12345567"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="Tell us about your requirement…"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex items-center rounded-lg bg-sky-600 px-5 py-2.5 font-medium text-white hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/30"
          >
            Send Message
          </button>

          <p className="mt-3 text-xs text-slate-500">
            This is a demo form. Hook it to an API route or service (Formspree,
            Resend, Nodemailer) for production.
          </p>
        </form>

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
              <span className="font-medium">Phone:</span> +91- 9810368018, +91-9412622300 
            </li>
            <li className="text-slate-600">
              <span className="font-medium text-slate-700">Address:</span>{" "}
              Khasra No.509, United Paradise, behind Krishnagar Restaurant,
              Ganga Nahar, Meerut Road, Murad Nagar, Ghaziabad-201206, (Uttar Pradesh),
              India
            </li>
          </ul>

          <div className="mt-6 h-56 w-full overflow-hidden rounded-lg ring-1 ring-slate-200">
            {/* Replace src with your real GMap embed */}
            <iframe
              title="Pawan Engineering Location"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb="
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
