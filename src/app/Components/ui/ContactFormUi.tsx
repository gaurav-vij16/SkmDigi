"use client";

export default function ContactFormUi() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="font-masvis text-4xl md:text-5xl lg:text-6xl text-gray-900">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            Let’s talk about your brand, your goals, and how we can scale
            together.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-12">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name<span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your first name"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4
                  focus:outline-none focus:ring-2 focus:ring-orange-500
                  transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name<span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your last name"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4
                  focus:outline-none focus:ring-2 focus:ring-orange-500
                  transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email<span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-2xl border border-gray-300 px-5 py-4
                focus:outline-none focus:ring-2 focus:ring-orange-500
                transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message<span className="text-orange-500">*</span>
            </label>
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full rounded-2xl border border-gray-300 px-5 py-4
                focus:outline-none focus:ring-2 focus:ring-orange-500
                resize-none transition"
            />
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-5">
              Services you’re interested in
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                "Performance Marketing",
                "Social Media Marketing",
                "Email Marketing",
                "SEO",
                "Affiliate Marketing",
                "Content Production",
              ].map((service, i) => (
                <label
                  key={i}
                  className="
                    flex items-center gap-3 px-5 py-3
                    border border-gray-300 rounded-full
                    cursor-pointer
                    hover:border-orange-500
                    transition
                  "
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-orange-500"
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-10">
            <button
              type="submit"
              className="
                w-full rounded-2xl
                bg-orange-500 text-white
                py-4 text-lg font-semibold
                hover:bg-orange-600
                hover:-translate-y-2px
                transition-all duration-300
              "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
