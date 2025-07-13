// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Sell Your House Fast for Cash</h1>
      <p className="text-gray-700 mb-6 text-lg">
        Luna Haven connects motivated sellers with trusted real estate investors. No repairs. No fees. Close in as little as 7 days.
      </p>
      <Link href="/sell">
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Get My Offer
        </button>
      </Link>
    </main>
  );
}
