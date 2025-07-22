'use client';
import React from 'react';
import { useTheme } from '../ThemeProvider';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-primary font-sans transition-colors duration-400">
      {/* MAIN CONTENT */}
      <section className="max-w-2xl mx-auto pt-16 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm px-8 pb-12 text-primary dark:text-gray-100">
        <h1 className="text-3xl font-extrabold mb-2 text-primary dark:text-purple-300">About Luna Haven</h1>

        <h2 className="text-lg mt-8 font-bold text-primary dark:text-purple-300">Who Are We?</h2>
        <p className="mt-3 leading-7 font-normal text-gray-700 dark:text-gray-200">
          We buy houses. In as little as one phone call, you can receive a quick cash offer from us. We aren’t real estate agents — we are direct cash home buyers.
          It’s a common misconception that we are the same, but that’s not the case. <strong>The goal of a cash home buyer is to offer homeowners a fair price for their home in a quick and hassle-free manner.</strong>
        </p>

        <p className="mt-4 leading-7 font-normal text-gray-700 dark:text-gray-200">
          We are able to accomplish this through an <strong>efficient, streamlined</strong> home-selling process. In just three easy steps, you can enjoy more money, less hassle, and accomplish your goals in less time.
        </p>

        <h2 className="text-lg mt-10 font-bold text-primary dark:text-purple-300">Cash Home Buyers Nationwide!</h2>
        <p className="mt-3 leading-7 font-normal text-gray-700 dark:text-gray-200">
          As a cash home buyer, we are dedicated to helping homeowners who need to sell their houses fast and hassle-free.
          Whether you're facing foreclosure, divorce, or simply need to sell quickly for any reason, we’re here to help.
        </p>

        <p className="mt-4 leading-7 font-normal text-gray-700 dark:text-gray-200">
          When you work with us, you don’t need to worry about the usual hassles of selling a house. We don’t require any repairs or cleaning.
          We offer a fair cash offer for your home and close on your timeline.
        </p>
      </section>

      {/* RIGHT SIDE GET OFFER BOX */}
      <div className="fixed top-32 right-8 bg-white dark:bg-zinc-900 text-primary dark:text-gray-100 p-7 rounded-2xl shadow-lg w-80 z-50 border-2 border-primary dark:border-purple-400 flex flex-col gap-3">
        <h3 className="font-extrabold text-lg mb-3 text-primary dark:text-purple-300">Get An Offer!</h3>
        <input placeholder="Home Address Here..." className="w-full p-3 mb-3 rounded-lg border border-purple-300 dark:border-purple-400 bg-white dark:bg-zinc-800 text-primary dark:text-gray-100 text-base font-sans shadow-sm focus:outline-none focus:ring-2 focus:ring-primary" />
        <button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-300 dark:text-black font-bold py-3 px-6 rounded-lg shadow transition-colors">Get Offer!</button>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-gray-800 dark:bg-zinc-900 dark:text-gray-200 mt-24 py-10 px-4 rounded-t-2xl shadow-inner">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-between gap-8">
          <div className="min-w-[220px] mb-6">
            <a href="/" className="flex items-center gap-2 no-underline">
              <img src="/logo.png" alt="Luna Haven Logo" className="h-12 rounded-lg shadow" />
              <span className="font-bold text-xl text-primary">Luna Haven</span>
            </a>
            <div className="mt-4 flex gap-4">
              <a href="https://facebook.com/lunahaven" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-primary text-lg font-semibold">🐦</a>
              <a href="https://instagram.com/lunahaven" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-primary text-lg font-semibold">🌼</a>
              <a href="mailto:support@lunahaven.net" aria-label="Email" className="text-primary text-lg font-semibold">✉️</a>
            </div>
          </div>
          <div className="min-w-[180px] mb-6">
            <h4 className="text-primary font-semibold mb-3 border-b-2 border-accent inline-block text-base">QUICK LINKS</h4>
            <div><a href="/" className="text-primary underline font-semibold">Home</a></div>
            <div><a href="/about-us" className="text-primary underline font-semibold">About Us</a></div>
            <div><a href="/privacy-policy" className="text-primary underline font-semibold">Privacy Policy</a></div>
          </div>
          <div className="min-w-[220px] mb-6">
            <h4 className="text-primary font-semibold mb-3 border-b-2 border-accent inline-block text-base">CONTACT US</h4>
            <div className="mb-2">
              <a href="tel:9152747574" className="text-primary underline font-semibold">📞 (915) 274-7574</a>
            </div>
            <div>
              <a href="mailto:support@lunahaven.net" className="text-primary underline font-semibold">📧 support@lunahaven.net</a>
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