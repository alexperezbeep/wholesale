"use client";

import { useState } from "react";

export default function BuyersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Join the Buyers List</h1>
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
            <label className="block text-sm font-medium text-gray-700">Investor Focus</label>
            <select required className="mt-1 w-full border rounded px-3 py-2">
              <option value="">Select...</option>
              <option>Fix & Flip</option>
              <option>Rental Properties</option>
              <option>Vacant Land</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Join List
          </button>
        </form>
      ) : (
        <p className="text-green-600 text-lg font-medium">
          You're on the list — thanks!
        </p>
      )}
    </main>
  );
}
