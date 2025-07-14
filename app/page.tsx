import CredibilitySection from '../components/CredibilitySection';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-20">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Sell Your House for Cash</h1>
        <p className="mb-6 text-lg">
          Luna Haven helps homeowners sell directly — no fees, no agents, no repairs.
        </p>
        <form className="flex flex-col gap-4 items-center mb-6">
          <input
            type="text"
            placeholder="Property Address"
            className="px-4 py-2 rounded border w-full max-w-md"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded border w-full max-w-md"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="px-4 py-2 rounded border w-full max-w-md"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Get My Cash Offer
          </button>
        </form>
      </section>

      {/* Value Props */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-gray-700 dark:text-gray-300 py-10">
        <div>No agent commissions</div>
        <div>No repairs needed</div>
        <div>Choose your closing date</div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="font-bold text-xl mb-2">1. Submit Your Info</h3>
            <p>Tell us about the property you’re looking to sell.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">2. Get an Offer</h3>
            <p>We’ll review your property and send a cash offer ASAP.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">3. Close on Your Terms</h3>
            <p>You decide when we close. We handle everything else.</p>
          </div>
        </div>
      </section>

      {/* Credibility Testimonials */}
      <CredibilitySection />

      {/* Final CTA */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">Ready to Sell?</h2>
        <p className="mb-6">Let us send you a no-obligation offer today.</p>
        <Link href="#top">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Start My Offer
          </button>
        </Link>
      </section>
    </main>
  );
}
