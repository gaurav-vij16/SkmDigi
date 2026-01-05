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

    const fd = new FormData();
    fd.append("firstName", formData.firstName);
    fd.append("lastName", formData.lastName);
    fd.append("email", formData.email);
    fd.append("message", formData.message);
    fd.append("services", formData.services.join(", "));

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwcUz8UK9kL__X-GPeLCdUe1UPsRkNiNNUEODqW1xlKGKFmTE-mZ0isNC_vyHQYVFE0/exec",
        { method: "POST", body: fd }
      );

      const data = await res.json();

      if (data.status === "success") {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          services: [],
        });
      } else {
        alert("Submission failed");
      }
    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <section className="relative py-32 bg-linear-to-b from-orange-50 via-white to-white overflow-hidden">
      {/* Soft accent blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-orange-200/40 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 -right-32 w-[360px] h-[360px] bg-pink-200/40 blur-[120px] rounded-full" />

      {/* Card */}
      <div className="relative max-w-4xl mx-auto px-10 py-16 rounded-4xl bg-white/70 backdrop-blur-xl border border-orange-200 shadow-[0_40px_80px_rgba(255,120,0,0.15)]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="font-masvis text-4xl md:text-5xl lg:text-6xl text-gray-900">
            Let’s Grow Your <span className="text-orange-500">Brand</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl mx-auto">
            Performance-driven marketing strategies built for scale.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Name */}
          <div className="grid md:grid-cols-2 gap-8">
            {["firstName", "lastName"].map((field, idx) => (
              <div key={field}>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  {idx === 0 ? "First Name" : "Last Name"}{" "}
                  <span className="text-orange-500">*</span>
                </label>
                <input
                  name={field}
                  value={formData[field as keyof ContactFormData]}
                  onChange={handleChange}
                  required
                  placeholder={`Your ${idx === 0 ? "first" : "last"} name`}
                  className="w-full rounded-xl bg-white border border-gray-300 px-5 py-4 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
                />
              </div>
            ))}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address <span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@company.com"
              className="w-full rounded-xl bg-white border border-gray-300 px-5 py-4 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message <span className="text-orange-500">*</span>
            </label>
            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your goals..."
              className="w-full rounded-xl bg-white border border-gray-300 px-5 py-4 text-gray-900 resize-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
            />
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-sm font-medium text-gray-700">
              Services you’re interested in
            </p>
            <div className="flex flex-wrap gap-4">
              {SERVICES.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 px-5 py-3 rounded-full cursor-pointer bg-white border border-gray-300 hover:border-orange-500 transition"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    className="accent-orange-500"
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl text-lg font-semibold text-white bg-linear-to-r from-orange-500 to-black shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            Get Started →
          </button>
        </form>
      </div>
    </section>
  );
}
