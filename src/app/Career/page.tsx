"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: File | null;
}

export default function Career() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files ? files[0] : null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Application submitted! (Demo)");
    // TODO: Send formData to backend / Google Sheets
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-orange-50 to-white p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-lg border border-orange-200">
        {/* HEADING */}
        <h1 className="font-masvis text-3xl md:text-4xl font-extrabold mb-3 text-center text-orange-600 tracking-wide">
          Join Our Team
        </h1>
        <p className="text-center text-gray-800 mb-6 font-medium">
          Apply now and be a part of our growing family. We’re excited to meet you!
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl font-medium text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-300 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl font-medium text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-300 transition"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl font-medium text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-300 transition"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position Applied"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl font-medium text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:ring-1 focus:ring-orange-300 transition"
            required
          />
          <label className="flex flex-col items-start">
            <span className="text-gray-700 font-medium mb-2">Upload Resume</span>

            {/* Hidden native file input */}
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="hidden"
              id="resume-upload"
            />

            {/* Custom button */}
            <button
              type="button"
              onClick={() => document.getElementById("resume-upload")?.click()}
              className="w-full text-gray-900 font-medium border border-gray-300 rounded-xl p-2 hover:border-orange-400 hover:bg-orange-50 transition"
            >
              {formData.resume ? formData.resume.name : "Select Resume"}
            </button>
          </label>


          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-4 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 shadow-md"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
