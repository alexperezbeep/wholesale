"use client";
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12">
        {/* Main Content */}
        <section className="flex-1 bg-[var(--card)] dark:bg-zinc-800 rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary)]" style={{ fontFamily: 'Inter, sans-serif' }}>About Luna Haven</h1>
          <h2 className="text-xl font-semibold mt-8 mb-2 text-[var(--primary)]">Who Are We?</h2>
          <p className="mt-2 leading-7 font-normal text-[var(--text)]">
            We buy houses. In as little as one phone call, you can receive a quick cash offer from us. We aren’t real estate agents — we are direct cash home buyers.
            It’s a common misconception that we are the same, but that’s not the case. <strong>The goal of a cash home buyer is to offer homeowners a fair price for their home in a quick and hassle-free manner.</strong>
          </p>
          <p className="mt-4 leading-7 font-normal text-[var(--text)]">
            We are able to accomplish this through an <strong>efficient, streamlined</strong> home-selling process. In just three easy steps, you can enjoy more money, less hassle, and accomplish your goals in less time.
          </p>
          <h2 className="text-xl font-semibold mt-10 mb-2 text-[var(--primary)]">Cash Home Buyers Nationwide!</h2>
          <p className="mt-2 leading-7 font-normal text-[var(--text)]">
            As a cash home buyer, we are dedicated to helping homeowners who need to sell their houses fast and hassle-free.
            Whether you're facing foreclosure, divorce, or simply need to sell quickly for any reason, we’re here to help.
          </p>
          <p className="mt-4 leading-7 font-normal text-[var(--text)]">
            When you work with us, you don’t need to worry about the usual hassles of selling a house. We don’t require any repairs or cleaning.
            We offer a fair cash offer for your home and close on your timeline.
          </p>
        </section>
        {/* Sidebar CTA */}
        <aside className="w-full md:w-96 flex-shrink-0">
          <div className="sticky top-28 bg-[var(--card)] dark:bg-zinc-800 text-[var(--primary)] p-8 rounded-2xl shadow-lg border-2 border-[var(--primary)] flex flex-col gap-4">
            <h3 className="font-bold text-xl mb-2 text-[var(--primary)]">Get An Offer!</h3>
            <input placeholder="Home Address Here..." className="w-full p-3 rounded-lg border border-[var(--accent)] bg-white dark:bg-zinc-900 text-[var(--primary)] text-base font-sans shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
            <button className="bg-[var(--primary)] text-white hover:bg-[var(--accent)] dark:bg-[var(--accent)] dark:hover:bg-[var(--primary)] font-bold py-3 px-6 rounded-lg shadow transition-colors text-lg">Get Offer!</button>
          </div>
        </aside>
      </div>
      {/* FOOTER */}
      <footer className="bg-[var(--card)] dark:bg-zinc-900 text-[var(--text)] dark:text-white border-t border-[var(--primary)] pt-8 pb-4 mt-16">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 px-4">
          <div className="min-w-[220px] mb-6">
            <a href="/" className="flex items-center gap-2 no-underline">
              <img src="/logo.png" alt="Luna Haven Logo" className="h-12 rounded-lg shadow" />
              <span className="font-bold text-xl text-[var(--primary)]">Luna Haven</span>
            </a>
            <div className="mt-4 flex gap-4">
              <a href="https://facebook.com/lunahaven" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] text-lg font-semibold">🐦</a>
              <a href="https://instagram.com/lunahaven" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] text-lg font-semibold">🌼</a>
              <a href="mailto:support@lunahaven.net" aria-label="Email" className="text-[var(--primary)] text-lg font-semibold">✉️</a>
            </div>
          </div>
          <div className="min-w-[180px] mb-6">
            <h4 className="text-[var(--primary)] font-semibold mb-3 border-b-2 border-[var(--accent)] inline-block text-base">QUICK LINKS</h4>
            <div><a href="/" className="text-[var(--primary)] underline font-semibold">Home</a></div>
            <div><a href="/about-us" className="text-[var(--primary)] underline font-semibold">About Us</a></div>
            <div><a href="/privacy-policy" className="text-[var(--primary)] underline font-semibold">Privacy Policy</a></div>
          </div>
          <div className="min-w-[220px] mb-6">
            <h4 className="text-[var(--primary)] font-semibold mb-3 border-b-2 border-[var(--accent)] inline-block text-base">CONTACT US</h4>
            <div className="mb-2">
              <a href="tel:9152747574" className="text-[var(--primary)] underline font-semibold">📞 (915) 274-7574</a>
            </div>
            <div>
              <a href="mailto:support@lunahaven.net" className="text-[var(--primary)] underline font-semibold">📧 support@lunahaven.net</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-400 mt-10 text-sm font-normal">
          Luna Haven LLC is a legally registered homebuyer based in Texas.<br />
          &copy; {new Date().getFullYear()} Luna Haven LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}