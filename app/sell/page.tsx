"use client";

import { useState } from "react";

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Request a Cash Offer</h1>
      <p className="mb-6 text-gray-700">
        Fill out this quick form and we’ll connect you with a local investor who can make a fair cash offer.
      </p>

      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Property Address</label>
            <input
              type="text"
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Why are you selling?</label>
            <textarea
              rows={3}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      ) : (
        <p className="text-green-600 text-lg font-medium">
          Thanks — we’ll be in touch shortly.
        </p>
      )}

      {/* CTA block */}
      <div className="bg-gray-100 p-6 rounded mt-10 text-center">
        <h2 className="text-xl font-semibold mb-2">Not Sure If You’re Ready to Sell?</h2>
        <p className="mb-4 text-gray-700">
          Stuck with tenants? Exploring your options? Book a free call to see how our team can help you move forward — whether that means selling, partnering, or something in between.
        </p>
        <a
          href="https://calendly.com/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Book a Free Call
        </a>
      </div>
    </main>
  );
}
