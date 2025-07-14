export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-cover bg-center py-32 px-6 text-center text-white" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <h1 className="text-4xl font-bold mb-4">Sell Your House</h1>
        <p className="mb-6 text-lg font-medium">
          We've helped <em>thousands</em> of homeowners nationwide.<br />
          To get started on your FREE cash offer, fill out the form below.
        </p>

        <form action="https://formspree.io/f/xnnzagjb" method="POST" className="bg-white rounded-lg shadow-md p-4 max-w-xl mx-auto text-black">
          <input type="text" name="address" placeholder="Property Address" required className="w-full p-3 mb-4 border rounded" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded w-full text-lg">
            Start My Cash Offer!
          </button>
        </form>
      </section>

      {/* How It Works */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">How it Works: Simple as 1, 2, 3...</h2>
        <ol className="space-y-2 text-lg">
          <li>1. Submit your info</li>
          <li>2. Get a fair cash offer</li>
          <li>3. Close on your timeline</li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
        <div className="space-y-6 text-lg italic max-w-2xl mx-auto">
          <p>“Your place isn't too far from our job site so we were hoping to stay in it.” — <strong>Anthony, 3-Month Stay</strong></p>
          <p>“We're excited to stay at your place!” — <strong>Tony, Contractor Guest</strong></p>
          <p>“I would like to rent it for 2 months. Thank you.” — <strong>Fanny & Julien, Relocation Guests</strong></p>
          <p>“It's not showing up as available but we would love to stay there if you can confirm.” — <strong>Karina, Long-Term Inquiry</strong></p>
        </div>
      </section>

      {/* Why Sellers Trust Us */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Why Sellers Trust Us</h2>
        <p className="text-lg max-w-xl mx-auto">
          We work with long-term professionals, traveling nurses, and relocation clients — your property is in good hands.
        </p>
      </section>
    </main>
  );
}
