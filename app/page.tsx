// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-center">
      {/* Hero Section */}
      <h1 className="text-5xl font-bold mb-4">
        Sell Your House Without the Hassle
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Luna Haven helps property owners sell directly to real estate investors — fast, simple, and on your terms.
      </p>
      <Link href="/sell">
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Get My Offer
        </button>
      </Link>

      {/* Value Props */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700">
        <div>No agent commissions</div>
        <div>No repair requirements</div>
        <div>You choose the timeline</div>
      </div>

      {/* How It Works Preview */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-gray-700">
          <div>
            <h3 className="font-bold text-xl mb-2">1. Share Your Property</h3>
            <p>Fill out a quick form so we can understand your situation.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">2. We'll Connect You</h3>
            <p>You’ll hear from an investor or acquisition rep with a potential offer.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">3. Close on Your Terms</h3>
            <p>If it’s a fit, you pick a closing date that works for you.</p>
          </div>
        </div>
        <Link href="/cash-offer-process">
          <p className="mt-4 text-blue-600 hover:underline text-sm">Learn more</p>
        </Link>
      </section>

      {/* Situational Callouts */}
      <section className="mt-20 text-left">
        <h2 className="text-2xl font-semibold mb-4">This Might Be a Fit If You're...</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Looking to sell quickly</li>
          <li>Not interested in listing with an agent</li>
          <li>Working with a tight timeline</li>
          <li>Selling an inherited or rental property</li>
          <li>Just exploring options</li>
        </ul>
        <Link href="/sell">
          <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Start My Offer
          </button>
        </Link>
      </section>
    </main>
  );
}
