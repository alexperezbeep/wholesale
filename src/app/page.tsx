// src/app/page.tsx
export default function Home() {
  return (
    <main className="max-w-xl mx-auto p-6 space-y-12 text-center">
      <h1 className="text-3xl font-bold mb-4">Sell Your House for Cash</h1>
      <p className="mb-6">We buy houses fast in any condition. No fees. No agents. No hassle.</p>

      {/* 📝 Form Section */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Request Your Cash Offer</h2>
        <form
          action="https://example.com/form-handler"
          method="POST"
          className="grid gap-4"
        >
          <input name="name" type="text" placeholder="Full Name" required className="border p-2 rounded" />
          <input name="email" type="email" placeholder="Email Address" required className="border p-2 rounded" />
          <input name="phone" type="tel" placeholder="Phone Number" required className="border p-2 rounded" />
          <input name="address" type="text" placeholder="Property Address" required className="border p-2 rounded" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
            Get My Cash Offer
          </button>
        </form>
      </section>

      {/* How it Works */}
      <section>
        <h2 className="text-xl font-bold mb-4">How It Works</h2>
        <ol className="space-y-2 list-decimal list-inside text-left">
          <li>Submit your info via the form</li>
          <li>Get a fair cash offer</li>
          <li>Close on your timeline</li>
        </ol>
      </section>

      {/* 📣 Your Testimonials */}
      <section>
        <h2 className="text-xl font-bold mb-4">Testimonials</h2>
        <blockquote>
          “Your place isn't too far from our job site so we were hoping to stay in it.” — Anthony, 3‑Month Stay
        </blockquote>
        <blockquote>
          “We’re excited to stay at your place!” — Tony, Contractor Guest
        </blockquote>
        <blockquote>
          “I would like to rent it for 2 months. Thank you.” — Fanny & Julien, Relocation Guests
        </blockquote>
        <blockquote>
          “It's not showing up as available but we would love to stay there if you can confirm.” — Karina, Long‑Term Inquiry
        </blockquote>
      </section>

      {/* Seller Trust Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Why Sellers Trust Us</h2>
        <p className="text-gray-700">
          We work with long‑term professionals, traveling nurses, contractors, and relocation clients — your property is in good hands.
        </p>
      </section>
    </main>
);
}
