// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About — Pawan Engineering AAYUMED",
//   description:
//     "ICU beds, CSSD equipment, and hospital furniture engineered for better care.",
// };

export default function AboutPage() {
  return (
    <div className=" mx-2 md:mx-16 space-y-16 py-10">
      {/* Hero */}
      <section className="rounded-2xl bg-sky-50/50 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
          About Pawan Engineering <span className="text-sky-600">AAYU</span>
          <span className="text-[#009999]">MED</span>
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          We design and manufacture dependable hospital furniture and medical
          engineering solutions—ICU beds, patient transfer systems, examination
          & OT utilities—built for safety, longevity, and smooth caregiving.
        </p>
      </section>

      {/* Mission / Values */}
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            t: "Our Mission",
            d: "Deliver precise, reliable products that raise clinical efficiency and patient comfort.",
          },
          {
            t: "Quality",
            d: "ISO-grade processes, premium materials (SS304 where required), and robust finishes.",
          },
          {
            t: "Support",
            d: "Responsive pre-sales guidance and after-sales service across India.",
          },
        ].map((i) => (
          <article
            key={i.t}
            className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
          >
            <h3 className="text-lg font-semibold text-slate-800">{i.t}</h3>
            <p className="mt-2 text-slate-600">{i.d}</p>
          </article>
        ))}
      </section>

      {/* Stats */}
      <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <div className="grid gap-6 text-center sm:grid-cols-3">
          {[
            { k: "Products", v: "70+" },
            { k: "Hospitals Served", v: "500+" },
            { k: "Years Experience", v: "10+" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-3xl font-semibold text-slate-800">{s.v}</div>
              <div className="mt-1 text-slate-500">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline / Story */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-800">Our Story</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <p className="text-slate-600">
            From core fabrication to finishing and assembly, our in-house
            capabilities keep lead times predictable and quality consistent. We
            iterate with clinicians to refine ergonomics and ease of use.
          </p>
          <p className="text-slate-600">
            The AAYUMED line focuses on premium ICU beds, transfer solutions,
            and ward care devices—designed to simplify workflows and tolerate
            tough daily duty cycles.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl bg-sky-600 p-6 text-white">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-semibold">
              Need a custom configuration?
            </h3>
            <p className="mt-1 text-white/90">
              Share your layout and get a tailored quote.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg bg-white/10 px-5 py-2.5 font-medium ring-1 ring-white/30 hover:bg-white/20"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
