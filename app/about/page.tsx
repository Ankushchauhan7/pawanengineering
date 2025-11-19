export default function AboutPage() {
  return (
    <div className="mx-2 md:mx-16 space-y-16 py-10">
      {/* Hero */}
      <section className="rounded-2xl bg-sky-50/50 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
          Pawan Engineering Works <span className="text-sky-600">AAYU</span>
          <span className="text-[#009999]">MED</span>
        </h1>
        <p className="mt-4  text-slate-600">
          Established in 2006, we are a Small-scale Industry (SSI) specializing
          in the manufacture of Medical Devices in compliance with MDR 2017. Our
          product range includes ICU bed, fowler beds, transfer trolleys, ward
          care products, OB/GYN products, operating tables, operating lights,
          operating room products, CSSD stainless steel furniture, and related
          accessories. Our team possesses the technical expertise and resources
          necessary to manufacture high-quality products and provide prompt
          after-sales service. We believe in providing quality products and
          services to our customers and conduct our business in a most
          professional and ethical manner with a long-term perspective. We
          follow a strict Quality Control (QC) process, from raw materials
          through various processes to semi-finished goods and finished goods,
          and on-site QC. We are an ISO certified company having ISO:9001-2015,
          ISO: 13485-2016, ISO:14001-2015, ISO: 45001-2018 and CE compliance.
          Our customers consist of the Government. Institutions, Private
          Hospitals, and Dealers.
        </p>
      </section>

      {/* Mission / Values */}
      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            t: "Our Mission",
            d: "Our mission is to manufacture superior medical devices through technical expertise, rigorous quality control, and ethical business practices. We are committed to serving our customers and patients with products that meet global standards, ensuring safety, durability, and prompt after-sales service. Our goal is to contribute to better healthcare outcomes by focusing on continuous improvement, compliance, and customer satisfaction",
          },
          {
            t: "Quality",
            d: "To be a trusted leader in the medical device industry, known for delivering innovative, reliable, and high-quality solutions that enhance patient care and support the evolving needs of healthcare institutions.",
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
      {/* <section className="space-y-6">
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
      </section> */}

      {/* CTA */}
      {/* <section className="rounded-xl bg-sky-600 p-6 text-white">
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
      </section> */}
    </div>
  );
}
