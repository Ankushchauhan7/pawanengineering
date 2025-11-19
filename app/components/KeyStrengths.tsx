export default function KeyStrengths() {
  const points = [
    "Established in 2006, providing 18+ years of service to customers and patients.",
    "Technical expertise and required resources to manufacture high-quality products.",
    "Prompt and reliable after-sales support.",
    "Professional and ethical business approach with a long-term perspective.",
    "Strict Quality Control (QC) process.",
    "ISO Certified Company (ISO 9001:2015, ISO 13485:2016, ISO 14001:2015, ISO 45001:2018).",
    "CE Compliant Manufacturing.",
    "Serving Government Institutions, Private Hospitals, and Dealers across India.",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-2 md:mx-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Key Strengths
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We bring engineering excellence, reliability, and trust to every product we manufacture.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {points.map((text, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-white shadow-sm hover:shadow-md rounded-xl border border-gray-100 transition"
            >
              <div className="min-w-10 min-h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold shadow">
                {index + 1}
              </div>
              <p className="text-left text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Highlighted Stats Section */}
        <div className="grid md:grid-cols-3 mt-14 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md border border-gray-100">
            <h3 className="text-3xl font-bold text-blue-600">70+</h3>
            <p className="text-gray-600 text-sm mt-1">Products</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md border border-gray-100">
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 text-sm mt-1">Hospitals Served</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md border border-gray-100">
            <h3 className="text-3xl font-bold text-blue-600">18+ Years</h3>
            <p className="text-gray-600 text-sm mt-1">of Service Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
