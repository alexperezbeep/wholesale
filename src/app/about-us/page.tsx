"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "What do you do with my information?",
    a: "We only use your information to prepare and deliver your cash offer. We never sell or share your data."
  },
  {
    q: "Do I need to clean or fix anything?",
    a: "Nope. We buy houses as-is — no cleaning or repairs needed."
  },
  {
    q: "But my house is in REALLY bad shape…",
    a: "That’s fine! We specialize in buying properties in any condition."
  },
  {
    q: "Can I leave anything behind?",
    a: "Yes. Leave behind anything you don’t want. We’ll handle the rest."
  },
  {
    q: "Do I pay any fees or commissions?",
    a: "None at all! We cover all title and escrow costs. You pay nothing."
  },
  {
    q: "What happens when I call you?",
    a: "We’ll ask a few quick questions about the property and walk you through next steps."
  },
  {
    q: "Why should I work with a cash buyer?",
    a: "It’s faster, simpler, and there’s no risk of deals falling through from financing issues."
  }
];

export default function AboutUs() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* ABOUT HERO */}
      <section className="w-full bg-[var(--card)] dark:bg-zinc-800 rounded-2xl shadow-sm mx-auto mt-12 mb-10 max-w-3xl p-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--primary)] text-center">Our Mission at Luna Haven</h1>
        <p className="text-lg md:text-xl font-normal mb-2 text-[var(--text)] text-center">Helping homeowners sell fast, stress-free, and on their terms.</p>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-300 mb-6 text-center">Since June 2023, we've helped over 10 families — and we're just getting started.</p>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Who We Are</h2>
        <p className="text-base md:text-lg text-[var(--text)] text-center">
          Luna Haven is a small but committed team of cash buyers based in Texas. We understand how overwhelming the home selling process can be —
          especially when life throws unexpected challenges your way. That’s why we make it simple, transparent, and fair.
        </p>
      </section>

      {/* OUR VALUES */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Sellers Trust Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: '💡', title: 'Transparent Process', desc: 'You see every step. No surprises or hidden fees.' },
            { icon: '⏱️', title: 'Fast Turnaround', desc: 'Cash in hand in as little as 7 days.' },
            { icon: '❤️', title: 'People First', desc: 'We care about your situation — not just your property.' }
          ].map((value, i) => (
            <div key={i} className="bg-[var(--card)] dark:bg-zinc-800 p-6 rounded-lg shadow transition-transform hover:scale-105 focus-within:scale-105 outline-none" tabIndex={0}>
              <div className="text-4xl mb-3" aria-hidden="true">{value.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-[var(--text)] text-base">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="bg-[var(--card)] dark:bg-zinc-800 border border-[var(--primary)] rounded-xl shadow-sm overflow-hidden">
              <button
                id={`faq-btn-${i}`}
                aria-controls={`faq-panel-${i}`}
                aria-expanded={faqOpen === i}
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setFaqOpen(faqOpen === i ? null : i);
                  }
                  if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const next = document.getElementById(`faq-btn-${(i + 1) % faqs.length}`);
                    next && (next as HTMLButtonElement).focus();
                  }
                  if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prev = document.getElementById(`faq-btn-${(i + faqs.length - 1) % faqs.length}`);
                    prev && (prev as HTMLButtonElement).focus();
                  }
                }}
                className="w-full bg-transparent border-none outline-none font-semibold text-lg text-left cursor-pointer transition-colors px-5 py-4 rounded-t-xl text-[var(--primary)] focus:bg-[var(--accent)] focus:text-white"
                tabIndex={0}
              >
                {q}
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                className={`transition-all duration-300 ease-in-out px-5 ${faqOpen === i ? 'max-h-40 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'} text-[var(--text)] bg-[var(--card)] text-base font-normal rounded-b-xl`}
                aria-hidden={faqOpen !== i}
              >
                {faqOpen === i && (
                  <span className="block pr-1">{a}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
