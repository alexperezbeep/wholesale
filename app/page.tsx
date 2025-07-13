// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Sell Your Virginia House Fast</h1>
        <p className="text-gray-700 text-lg mb-6">
          We buy houses in any condition. No agents. No fees. Close in as little as 7 days.
        </p>
        <Link href="/sell">
          <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700">
            Get My Offer
          </button>
        </Link>
      </section>

      {/* Trust Indicators */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded shadow">✅ Over 50 properties bought in Virginia</div>
        <div className="bg-gray-100 p-6 rounded shadow">⭐ Rated 4.9/5 by local sellers</div>
        <div className="bg-gray-100 p-6 rounded shadow">🔒 Secure & confidential offer process</div>
      </section>

      {/* 3-Step Process */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border rounded">1. Submit Your Info</div>
          <div className="bg-white p-6 border rounded">2. Receive a Cash Offer</div>
          <div className="bg-white p-6 border rounded">3. Close & Get Paid</div>
        </div>
      </section>

      {/* Pain Point CTA */}
      <section className="mb-16 bg-blue-50 p-8 rounded">
        <p className="text-lg mb-4">
          Inherited a property? Facing foreclosure? Dealing with bad tenants?
        </p>
        <Link href="/sell">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            See If You Qualify
          </button>
        </Link>
      </section>
    </main>
  );
}
