"use client";

import { useState } from "react";

export default function SendMessageForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Name*
          </label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Email*
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30"
            placeholder="you@example.com"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            name="phone"
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30"
            placeholder="+91 9876543210"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-slate-700">
            Message*
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500/30"
            placeholder="Tell us your requirement…"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-5 inline-flex items-center rounded-lg bg-sky-600 px-5 py-2.5 font-medium text-white hover:bg-sky-700 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="mt-3 text-green-600 text-sm">
          ✓ Enquiry sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-red-600 text-sm">
          ✗ Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
