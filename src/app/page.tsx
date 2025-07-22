"use client";
import React, { useState } from "react";

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

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white font-sans">
      {/* HERO */}
      <section className="w-full bg-[var(--card)] dark:bg-zinc-800 rounded-2xl shadow-sm mx-auto mt-12 mb-10 max-w-3xl p-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--primary)]" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
          Need to sell your home fast?
        </h1>
        <p className="text-lg md:text-xl mb-2 text-[var(--text)]">Get a cash offer in just 7 days</p>
        <p className="text-base md:text-lg text-[var(--text-secondary)] mb-6">Operating since June 2023 — 10+ homeowners helped.</p>
        <button className="bg-[var(--primary)] text-white hover:bg-[var(--accent)] dark:bg-[var(--accent)] dark:hover:bg-[var(--primary)] font-semibold py-3 px-8 rounded-xl shadow transition-colors text-lg md:text-xl">
          Get Offer
        </button>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "💬", title: "Contact Us", desc: "Reach out and tell us about your property. No obligation, no pressure." },
            { icon: "📋", title: "Get Your Offer", desc: "We’ll review your info and send a fair, no-hassle cash offer." },
            { icon: "🏠", title: "Close & Get Paid", desc: "Pick your closing date. Get paid fast, move on your terms." },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-[var(--card)] dark:bg-zinc-800 rounded-xl shadow p-6 flex flex-col items-center text-center transition-transform hover:scale-105 focus-within:scale-105 outline-none"
              tabIndex={0}
            >
              <span className="text-4xl mb-3" aria-hidden="true">
                {step.icon}
              </span>
              <h3 className="font-semibold text-lg md:text-xl mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-[var(--text)] text-base font-normal">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROPERTY PHOTOS */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
          Recent Properties
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {["s1.jpg", "s2.jpg", "s3.jpg", "516-518.jpg", "zz.jpg", "109.png"].map((img, i) => (
            <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-[var(--card)] shadow">
              <img src={`/${img}`} alt="Property" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { img: "brent.jpg", name: "Brent, El Paso", quote: "“Luna Haven made selling so easy!”" },
            { img: "grace.png", name: "Grace, Horizon", quote: "“I got my offer in a day and closed in a week.”" },
            { img: "mark.png", name: "Mark, Socorro", quote: "“No repairs, no stress. Highly recommend!”" },
          ].map((t, i) => (
            <div key={i} className="bg-[var(--card)] dark:bg-zinc-800 p-6 rounded-lg shadow flex flex-col items-center">
              <img src={`/${t.img}`} alt={t.name} className="rounded-full w-20 h-20 object-cover mb-3 border-4 border-[var(--primary)]" />
              <p className="text-[var(--text)] font-medium mb-2 text-center">{t.quote}</p>
              <span className="text-[var(--text-secondary)] text-sm">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-[var(--accent)] dark:bg-purple-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-3xl" aria-hidden="true">
              🔒
            </span>
            <span className="font-semibold text-lg md:text-xl">Trusted, Local, No-Obligation Offers</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl" aria-hidden="true">
              ✅
            </span>
            <span className="text-base font-normal">No fees, no repairs, no showings</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl" aria-hidden="true">
              ⚡
            </span>
            <span className="text-base font-normal">Close in as little as 7 days</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>
          FAQ
        </h2>
        <div className="space-y-4" aria-live="polite">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="bg-[var(--card)] dark:bg-zinc-800 border border-[var(--primary)] rounded-xl shadow-sm overflow-hidden">
              <button
                id={`faq-btn-${i}`}
                aria-controls={`faq-panel-${i}`}
                aria-expanded={faqOpen === i}
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFaqOpen(faqOpen === i ? null : i);
                  }
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    const next = document.getElementById(`faq-btn-${(i + 1) % faqs.length}`);
                    next && (next as HTMLButtonElement).focus();
                  }
                  if (e.key === "ArrowUp") {
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
                className={`transition-[max-height,opacity,margin] duration-300 ease-in-out px-5 ${
                  faqOpen === i ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0 py-0"
                } text-[var(--text)] bg-[var(--card)] text-base font-normal rounded-b-xl`}
                aria-hidden={faqOpen !== i}
              >
                {faqOpen === i && <span className="block pr-1">{a}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
