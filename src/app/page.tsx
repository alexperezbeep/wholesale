export default function Home() {
  return (
    <main className="text-center py-16 px-6 space-y-20">
      <section>
        <h1 className="text-3xl font-bold mb-4">Sell Your House for Cash</h1>
        <p className="mb-6">We buy houses fast in any condition. No fees. No agents. No hassle.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Request Your Cash Offer</h2>
        <form
          action="https://formspree.io/f/xnnzagjb"
          method="POST"
          className="space-y-4 max-w-xl mx-auto"
        >
          <input type="text" name="name" placeholder="Full Name" required className="w-full border p-2" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full border p-2" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full border p-2" />
          <input type="text" name="address" placeholder="Property Address" required className="w-full border p-2" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow">
            Get My Cash Offer
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">How It Works</h2>
        <ol className="space-y-2">
          <li>1. Submit your info via the form</li>
          <li>2. Get a fair cash offer</li>
          <li>3. Close on your timeline</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Testimonials</h2>
        <p>“Your place isn't too far from our job site so we were hoping to stay in it.” — Anthony, 3-Month Stay</p>
        <p>“We’re excited to stay at your place!” — Tony, Contractor Guest</p>
        <p>“I would like to rent it for 2 months. Thank you.” — Fanny & Julien, Relocation Guests</p>
        <p>“It's not showing up as available but we would love to stay there if you can confirm.” — Karina, Long-Term Inquiry</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Why Sellers Trust Us</h2>
        <p>
          We work with long-term professionals, traveling nurses, contractors, and relocation clients —
          your property is in good hands.
        </p>
      </section>
    </main>
  );
}
