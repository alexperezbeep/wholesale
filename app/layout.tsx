// app/layout.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Luna Haven Wholesaling',
  description: 'We help homeowners sell fast and investors find great deals.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <nav className="bg-blue-600 text-white px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Luna Haven
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/sell" className="hover:underline">Sell</Link>
              <Link href="/buyers" className="hover:underline">Buyers</Link>
              <Link href="/deals" className="hover:underline">Deals</Link>
              <Link href="/how-it-works" className="hover:underline">How It Works</Link>
            </div>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
