"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
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
  const [formData, setFormData] = useState<FormData>({
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
        {
          method: "POST",
          body: fd,
        }
      );

      const data = JSON.parse(await res.text());

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
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="font-masvis text-4xl md:text-5xl lg:text-6xl text-gray-900">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            Let’s talk about your brand, your goals, and how we can scale together.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Name */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                First Name <span className="text-orange-500">*</span>
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name"
                required
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Last Name <span className="text-orange-500">*</span>
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                required
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
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
              placeholder="you@company.com"
              required
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message <span className="text-orange-500">*</span>
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              required
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
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
                  className="flex items-center gap-3 px-5 py-3 border border-gray-300 rounded-full cursor-pointer hover:border-orange-500 transition"
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-orange-500 text-white py-4 text-lg font-semibold hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
