"use client";
import React, { useState } from "react";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What do you do with my information?",
      a: "We only use your information to prepare and deliver your cash offer. We never sell or share your data.",
    },
    {
      q: "Do I need to clean or fix anything?",
      a: "Nope. We buy houses as-is — no cleaning or repairs needed.",
    },
    {
      q: "But my house is in REALLY bad shape…",
      a: "That’s fine! We specialize in buying properties in any condition.",
    },
    {
      q: "Can I leave anything behind?",
      a: "Yes. Leave behind anything you don’t want. We’ll handle the rest.",
    },
    {
      q: "Do I pay any fees or commissions?",
      a: "None at all! We cover all title and escrow costs. You pay nothing.",
    },
    {
      q: "What happens when I call you?",
      a: "We’ll ask a few quick questions about the property and walk you through next steps.",
    },
    {
      q: "Why should I work with a cash buyer?",
      a: "It’s faster, simpler, and there’s no risk of deals falling through from financing issues.",
    },
  ];
  return (
    <main className="min-h-screen bg-surface text-primary font-sans transition-colors duration-400">
      {/* HERO SECTION */}
      <section className="bg-white text-black dark:bg-zinc-900 dark:text-white rounded-2xl shadow-sm mx-auto mt-12 mb-10 max-w-3xl p-10 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-4 text-primary dark:text-purple-300">Need to sell your home fast?</h1>
        <p className="text-lg mb-2 text-gray-700 dark:text-gray-200">Get a cash offer in just 7 days</p>
        <p className="text-base text-gray-500 dark:text-gray-400 mb-6">Operating since June 2023 — 10+ homeowners helped.</p>
        <button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-300 dark:text-black font-bold py-3 px-8 rounded-lg shadow transition-colors">Get Offer</button>
      </section>

      {/* TESTIMONIALS */}
      <section className="mt-20 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example testimonial card */}
          <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm">
            <img src="/brent.jpg" alt="Brent's home" className="rounded-md w-full h-40 object-cover mb-3" />
            <p className="text-gray-800 dark:text-gray-100 font-semibold">“Luna Haven made selling so easy!”</p>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Brent, El Paso</span>
          </div>
          {/* ...repeat for other testimonials... */}
        </div>
      </section>

      {/* PROPERTY PHOTOS */}
      <section className="mt-16 text-center">
        <h2 className="font-extrabold text-2xl mb-8 text-primary dark:text-purple-300">We’ve Helped with Real Properties Like These</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {[
            "/brent.jpg",
            "/darryl.png",
            "/109.png",
            "/516-518.jpg",
            "/zv.png",
            "/zw.png",
            "/zx.png",
            "/zy.png",
            "/zz.jpg",
          ].map((src) => (
            <div key={src} className="bg-white dark:bg-zinc-800 p-2 rounded-lg shadow-sm">
              <img src={src} alt="Property" className="rounded-md w-40 h-32 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="mt-20 flex justify-center text-center">
        <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-sm border-2 border-purple-600 dark:border-purple-400 max-w-xl w-full flex flex-col items-center text-primary dark:text-gray-100" tabIndex={0}>
          <h2 className="font-extrabold text-xl mb-6 text-primary dark:text-purple-300">Why Sellers Trust Us</h2>
          <ul className="max-w-lg mx-auto text-left leading-7 text-base font-semibold flex flex-col gap-3 p-0 list-none w-full">
            {[
              'Cancel anytime before signing',
              'You pay $0 in hidden fees',
              'Closing is contingent on clean title',
              'You choose your timeline',
              'Everything is explained clearly — no pressure',
            ].map((item, i) => (
              <li key={i} className="text-gray-800 dark:text-gray-100">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mt-20 max-w-2xl mx-auto">
        <h2 className="font-extrabold text-2xl text-center mb-4 text-primary dark:text-purple-300">Frequently Asked Questions</h2>
        <p className="text-center text-gray-700 dark:text-gray-200 opacity-80 mb-8 text-base">We Have The Answers</p>
        {faqs.map(({ q, a }, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-800 border border-purple-600 dark:border-purple-400 rounded-xl mb-7 shadow-sm overflow-hidden outline-none transition-all"
            tabIndex={0}
          >
            <button
              id={`faq-btn-${i}`}
              aria-controls={`faq-panel-${i}`}
              aria-expanded={faqOpen === i}
              onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              className={`w-full bg-transparent border-none outline-none font-extrabold text-lg text-left cursor-pointer transition-colors px-5 py-4 rounded-t-xl text-gray-800 dark:text-gray-100 ${faqOpen === i ? 'border-b-2 border-purple-600 dark:border-purple-400' : ''}`}
              tabIndex={0}
            >
              {q}
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className={`transition-all duration-300 ease-in-out px-5 ${faqOpen === i ? 'max-h-40 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'} text-gray-700 dark:text-gray-200 bg-purple-50 dark:bg-purple-950 text-base font-medium rounded-b-xl`}
              aria-hidden={faqOpen !== i}
              style={{overflow: 'hidden'}}
            >
              {faqOpen === i && (
                <span className="block pr-1">{a}</span>
              )}
            </div>
          </div>
        ))}
      </section>

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
