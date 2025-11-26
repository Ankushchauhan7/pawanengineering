import QuickEnquiry from "../components/QuickEnquiry";

export default function AboutPage() {
  return (
    <div>
      <div className="mx-2 md:mx-16 space-y-16 py-10">
        {/* Hero */}
        <section className="rounded-2xl bg-sky-50/50 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">
            Pawan Engineering Works
          </h1>
          <div className="space-y-4 pt-4 text-slate-600 leading-relaxed max-w-4xl">
            <p>
              Established in 2006, we are a Small-scale Industry (SSI)
              specializing in the manufacture of Medical Devices in compliance
              with MDR 2017. Our product range includes ICU bed, fowler beds,
              transfer trolleys, ward care products, OB/GYN products, operating
              tables, operating lights, operating room products, CSSD stainless
              steel furniture, and related accessories.
            </p>

            <p>
              Our team possesses the technical expertise and resources necessary
              to manufacture high-quality products and provide prompt
              after-sales service.
            </p>

            <p>
              We believe in providing quality products and services to our
              customers and conduct our business in a most professional and
              ethical manner with a long-term perspective.
            </p>

            <p>
              We follow a strict Quality Control (QC) process, from raw
              materials through various processes to semi-finished goods and
              finished goods, and on-site QC. We are an ISO certified company
              having ISO:9001-2015, ISO: 13485-2016, ISO:14001-2015, ISO:
              45001-2018 and CE compliance.
            </p>
            <p>
              Our customers consist of the Government. Institutions, Private
              Hospitals, and Dealers.
            </p>
          </div>
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
                <div className="text-3xl font-semibold text-slate-800">
                  {s.v}
                </div>
                <div className="mt-1 text-slate-500">{s.k}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <QuickEnquiry />
    </div>
  );
}
