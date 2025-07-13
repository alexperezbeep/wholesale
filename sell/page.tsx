"use client";

import { useState } from "react";

export default function SellPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Request a Cash Offer</h1>
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
            <input type="text" required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Address</label>
            <input type="text" required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Why are you selling?</label>
            <textarea className="mt-1 w-full border rounded px-3 py-2" rows={3}></textarea>
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
    </main>
  );
}
