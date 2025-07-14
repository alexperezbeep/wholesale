export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Sell Your House for Cash</h1>
        <p className="text-lg mb-6">We buy houses fast in any condition. No fees. No agents. No hassle.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow">
          Get My Cash Offer
        </button>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Submit Info</h3>
            <p>Tell us about your property using our quick form.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Get Offer</h3>
            <p>Receive a fair cash offer in 24 hours or less.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Close Fast</h3>
            <p>Pick your closing date. No fees. No stress.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Real Inquiries We've Received</h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          <blockquote className="bg-gray-50 p-4 rounded shadow">
            “Your place isn't too far from our job site so we were hoping to stay in it.”<br />
            <span className="font-semibold">— Anthony, 3-Month Stay</span>
          </blockquote>
          <blockquote className="bg-gray-50 p-4 rounded shadow">
            “We’re excited to stay at your place!”<br />
            <span className="font-semibold">— Tony, Contractor Guest</span>
          </blockquote>
          <blockquote className="bg-gray-50 p-4 rounded shadow">
            “I would like to rent it for 2 months. Thank you.”<br />
            <span className="font-semibold">— Fanny & Julien, Relocation Guests</span>
          </blockquote>
          <blockquote className="bg-gray-50 p-4 rounded shadow">
            “It's not showing up as available but we would love to stay there if you can confirm.”<br />
            <span className="font-semibold">— Karina, Long-Term Inquiry</span>
          </blockquote>
        </div>
      </section>

      {/* Strategic Message */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h3 className="text-xl font-semibold mb-2">💡 Why This Matters to You</h3>
        <p className="max-w-2xl mx-auto">
          These are real inquiries we’ve received — proving demand for homes just like yours.
          If you're ready to sell, we’re ready to buy, with buyers waiting.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Luna Haven. All rights reserved.</p>
      </footer>
    </main>
  );
}
