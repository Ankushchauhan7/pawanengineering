"use client";
import { useState } from "react";

export default function QuickEnquiry() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send enquiry");

      setSubmitted(true);
      form.reset();

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-sky-500 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Title */}
          <div>
            <h2 className="text-3xl font-bold mb-3">Quick Enquiry</h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Have questions about our products, pricing, or need urgent assistance?
              Fill out this quick form and our team will contact you shortly.
            </p>

            <div className="mt-6 bg-white/20 backdrop-blur p-4 rounded-xl inline-block">
              <p className="text-lg font-semibold">📞 +91 9810368018, +91 9412622300</p>
              <p className="text-sm text-white/90">Available 9:00 AM – 7:00 PM</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-6 text-gray-900"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="input"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="input"
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="input mt-4"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="input mt-4 h-28 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>

              {submitted && (
                <p className="text-green-600 text-center mt-3 font-semibold">
                  ✔ Enquiry sent successfully!
                </p>
              )}

              {error && (
                <p className="text-red-600 text-center mt-3 font-semibold">
                  ❌ {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Reusable Input Styles */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #d0d7e2;
          font-size: 14px;
          outline: none;
          transition: 0.2s;
        }
        .input:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.2);
        }
      `}</style>
    </section>
  );
}
