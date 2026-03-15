"use client";

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/mbdowaaa"
      method="POST"
      className="w-full space-y-6"
    >
      {/* First Name + Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            First Name
          </label>
          <input
            name="first_name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e6acf]"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Last Name
          </label>
          <input
            name="last_name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e6acf]"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e6acf]"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Phone
          </label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e6acf]"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">
          Your Message
        </label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0e6acf]"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button className="bg-[#0e6acf] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300">
          Submit
        </button>
      </div>
    </form>
  );
}