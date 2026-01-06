"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  services: string[];
}

const SERVICES = [
  "Performance Marketing",
  "Social Media Marketing",
  "Email Marketing",
  "SEO",
  "Affiliate Marketing",
  "Content Production",
];

export default function ContactFormUi() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    services: [],
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setErrorMsg("");

    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) =>
      fd.append(k, Array.isArray(v) ? v.join(", ") : v)
    );

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwcUz8UK9kL__X-GPeLCdUe1UPsRkNiNNUEODqW1xlKGKFmTE-mZ0isNC_vyHQYVFE0/exec",
        { method: "POST", body: fd }
      );

      const data = await res.json();

      if (data.status === "success") {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          services: [],
        });
      } else throw new Error("Submission failed");
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 sm:py-28 bg-linear-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Glows */}
      <div className="absolute -top-40 -left-40 w-[360px] h-[360px] bg-orange-500/25 blur-[140px] rounded-full" />
      <div className="absolute top-1/2 -right-40 w-[320px] h-80 bg-orange-400/20 blur-[140px] rounded-full" />

      {/* Card */}
      <div className="relative max-w-4xl mx-auto px-6 py-10 sm:px-10 sm:py-16 rounded-3xl bg-black/80 backdrop-blur-xl border border-orange-500/20 shadow-[0_30px_70px_rgba(249,115,22,0.35)]">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-masvis text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Let’s Grow Your <span className="text-orange-500">Brand</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl mx-auto">
            Performance driven marketing strategies built for scale.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
          {/* Name */}
          <div className="grid gap-6 md:grid-cols-2">
            {["firstName", "lastName"].map((field, idx) => (
              <div key={field}>
                <label className="block mb-2 text-sm text-neutral-300">
                  {idx === 0 ? "First Name" : "Last Name"}{" "}
                  <span className="text-orange-500">*</span>
                </label>
                <input
                  name={field}
                  value={formData[field as keyof ContactFormData]}
                  onChange={handleChange}
                  required
                  placeholder={`Your ${idx === 0 ? "first" : "last"} name`}
                  className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3.5 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 outline-none transition"
                />
              </div>
            ))}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-neutral-300">
              Email Address <span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@company.com"
              className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3.5 text-white placeholder-neutral-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm text-neutral-300">
              Message <span className="text-orange-500">*</span>
            </label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your goals..."
              className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3.5 text-white placeholder-neutral-500 resize-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 outline-none transition"
            />
          </div>

          {/* Services */}
          <div>
            <p className="mb-3 text-sm text-neutral-300">
              Services you’re interested in
            </p>
            <div className="flex flex-wrap gap-3">
              {SERVICES.map((service) => (
                <label
                  key={service}
                  className="flex items-center text-white gap-2 px-4 py-2 rounded-full cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-orange-500 transition text-sm"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    className="accent-orange-500"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={submitting || submitted}
            className={`w-full py-4 rounded-xl text-base sm:text-lg font-semibold text-black 
              bg-linear-to-r from-orange-500 to-yellow-500
              transition transform duration-200
              ${submitting ? "opacity-70 cursor-wait" : ""}
              ${submitted ? "bg-green-500 hover:scale-100" : "hover:scale-[1.03]"}
            `}
          >
            {submitting ? "Submitting..." : submitted ? "Submitted ✔" : "Get Started →"}
          </button>

          {/* Inline error */}
          {errorMsg && (
            <p className="mt-2 text-sm text-red-500 text-center">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
