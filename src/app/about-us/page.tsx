'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* HERO */}
      <section className="w-full bg-[var(--card)] dark:bg-zinc-800 rounded-2xl shadow-sm mx-auto mt-12 mb-10 max-w-3xl p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--primary)]">About Luna Haven</h1>
        <p className="text-lg font-medium text-[var(--text)] mb-6">We make selling your home simple, fast, and stress-free — even if your situation feels complex.</p>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-[var(--text)] leading-relaxed">
          Luna Haven is a locally operated home buying service focused on helping homeowners sell quickly, without agent fees, repairs, or delays.
          Whether you're facing foreclosure, inherited an unwanted property, or just want to sell fast — we're here to offer solutions that fit your needs.
        </p>
      </section>

      {/* CTA BOX */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-[var(--card)] dark:bg-zinc-800 rounded-2xl p-8 shadow text-center">
          <h3 className="text-2xl font-bold mb-3 text-[var(--primary)]">Need to Sell a Property?</h3>
          <p className="text-[var(--text)] mb-6">Fill out our quick form and we’ll reach out with your cash offer.</p>
          <button className="bg-[var(--primary)] hover:bg-[var(--accent)] dark:bg-[var(--accent)] dark:hover:bg-[var(--primary)] text-white font-bold py-3 px-8 rounded-lg text-lg transition">Get an Offer</button>
        </div>
      </section>

      {/* CONTACT & LINKS */}
      <footer className="bg-[var(--card)] text-[var(--text)] border-t border-[var(--primary)] py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between gap-8">
          <div className="min-w-[220px]">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Luna Haven Logo" className="h-12 rounded shadow" />
              <span className="font-bold text-xl text-[var(--primary)]">Luna Haven</span>
            </a>
            <div className="mt-4 flex gap-4">
              <a href="https://facebook.com/lunahaven" target="_blank" rel="noopener noreferrer">🐦</a>
              <a href="https://instagram.com/lunahaven" target="_blank" rel="noopener noreferrer">🌼</a>
              <a href="mailto:support@lunahaven.net">✉️</a>
            </div>
          </div>
          <div>
            <h4 className="text-[var(--primary)] font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about-us" className="hover:underline">About Us</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--primary)] font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="tel:9152747574" className="hover:underline">📞 (915) 274-7574</a></li>
              <li><a href="mailto:support@lunahaven.net" className="hover:underline">📧 support@lunahaven.net</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-10">
          Luna Haven LLC is a legally registered homebuyer based in Texas.<br />
          &copy; {new Date().getFullYear()} Luna Haven LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
