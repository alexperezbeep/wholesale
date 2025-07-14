export default function Home() {
  return (
    <main className="text-center py-16 px-6 space-y-20">
      <section>
        <h1 className="text-3xl font-bold mb-4">Sell Your House for Cash</h1>
        <p className="mb-6">
          We buy houses fast in any condition. No fees. No agents. No hassle.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow">
          Get My Cash Offer
        </button>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">How It Works</h2>
        <ol className="space-y-2">
          <li>1. Submit your info</li>
          <li>2. Get a fair cash offer</li>
          <li>3. Close on your timeline</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Testimonials</h2>
        <blockquote>“Your place isn&apos;t too far from our job site so we were hoping to stay in it.” — Anthony</blockquote>
        <blockquote>“We&apos;re excited to stay at your place!” — Tony</blockquote>
        <blockquote>“I would like to rent it for 2 months. Thank you.” — Fanny & Julien</blockquote>
        <blockquote>“It&apos;s not showing up as available but we would love to stay there if you can confirm.” — Karina</blockquote>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Why Sellers Trust Us</h2>
        <p>
          We work with long-term professionals, traveling nurses, and relocation clients — your property is in good hands.
        </p>
      </section>
    </main>
  );
}
