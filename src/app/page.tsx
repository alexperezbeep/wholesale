'use client';
import React, { useState } from 'react';

const faqs = [
  { q: 'What do you do with my information?', a: 'We only use your information to prepare and deliver your cash offer. We never sell or share your data.' },
  { q: 'Do I need to clean or fix anything?', a: 'Nope. We buy houses as-is — no cleaning or repairs needed.' },
  { q: 'But my house is in REALLY bad shape…', a: 'That’s fine! We specialize in buying properties in any condition.' },
  { q: 'Can I leave anything behind?', a: 'Yes. Leave behind anything you don’t want. We’ll handle the rest.' },
  { q: 'Do I pay any fees or commissions?', a: 'None at all! We cover all title and escrow costs. You pay nothing.' },
  { q: 'What happens when I call you?', a: 'We’ll ask a few quick questions about the property and walk you through next steps.' },
  { q: 'Why should I work with a cash buyer?', a: 'It’s faster, simpler, and there’s no risk of deals falling through from financing issues.' }
];

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <main className="bg-[var(--bg)] text-[var(--text)] font-inter min-h-screen">
      {/* HERO */}
      <section>
        <div className="container text-center py-16 md:py-24 lg:py-32">
          <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3rem] font-extrabold mb-8 text-[var(--primary)] tracking-tight" style={{lineHeight:'1.1'}}>LUNA HAVEN</h1>
          <p className="text-xl md:text-2xl text-[var(--secondary)] max-w-2xl mx-auto mb-8">Need to Sell Your Home Fast & Easy?</p>
          <p className="text-lg text-[var(--text)] max-w-2xl mx-auto mb-8">Get a cash offer in just 7 days — no repairs, no fees, no stress.</p>
          <button className="btn-primary" onClick={() => document.getElementById('offer-form')?.scrollIntoView({behavior:'smooth'})}>Get My Offer</button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: '💬', title: 'Contact Us', desc: 'Tell us about your property. No pressure.' },
              { icon: '📋', title: 'Get Your Offer', desc: 'We review details and send a fair offer.' },
              { icon: '🏠', title: 'Close & Get Paid', desc: 'Pick your date. Get paid. Move on.' }
            ].map((step, i) => (
              <div key={i} className="bg-[var(--card)] rounded-xl p-6 text-center shadow hover:scale-105 transition flex flex-col h-full">
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-[var(--text)] flex-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY PHOTOS */}
      <section>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Recent Properties</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {['s1.jpg', 's2.jpg', 's3.jpg', '516-518.jpg', 'zz.jpg', '109.png'].map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow bg-[var(--card)] group transition-all">
                <img src={`/${img}`} alt="Property" className="w-full h-48 object-cover transition-all group-hover:scale-105 group-hover:ring-2 group-hover:ring-[var(--primary)]" style={{maxWidth:'100%'}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { img: 'brent.jpg', name: 'Brent, El Paso', quote: '“Luna Haven made selling so easy!”' },
              { img: 'grace.png', name: 'Grace, Horizon', quote: '“I got my offer in a day and closed in a week.”' },
              { img: 'mark.png', name: 'Mark, Socorro', quote: '“No repairs, no stress. Highly recommend!”' }
            ].map((t, i) => (
              <div key={i} className="bg-[var(--card)] p-6 rounded-xl shadow text-center flex flex-col items-center group transition-all">
                <div className="rounded-full w-20 h-20 overflow-hidden border-4 border-[var(--primary)] mb-3 shadow group-hover:ring-2 group-hover:ring-[var(--accent)] transition-all">
                  <img src={`/${t.img}`} alt={t.name} className="object-cover w-full h-full" style={{maxWidth:'100%'}} />
                </div>
                <p className="text-[var(--text)] font-medium mb-2">{t.quote}</p>
                <span className="text-[var(--secondary)] text-sm">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section>
        <div className="container">
          <div className="bg-gradient-to-r from-[var(--accent)] to-purple-800 dark:from-purple-800 dark:to-[var(--accent)] rounded-2xl p-8 shadow grid md:grid-cols-3 gap-6 text-white">
            {[
              { icon: '🔒', text: 'Trusted, No-Obligation Offers' },
              { icon: '✅', text: 'No Fees, Repairs, or Showings' },
              { icon: '⚡', text: 'Close in as Little as 7 Days' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">FAQ</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="bg-[var(--card)] border border-[var(--primary)] rounded-xl shadow-sm">
                <button
                  id={`faq-btn-${i}`}
                  aria-controls={`faq-panel-${i}`}
                  aria-expanded={faqOpen === i}
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') e.preventDefault(), setFaqOpen(faqOpen === i ? null : i);
                    if (e.key === 'ArrowDown') document.getElementById(`faq-btn-${(i + 1) % faqs.length}`)?.focus();
                    if (e.key === 'ArrowUp') document.getElementById(`faq-btn-${(i - 1 + faqs.length) % faqs.length}`)?.focus();
                  }}
                  className="w-full text-left font-semibold text-lg p-5 text-[var(--primary)] focus:bg-[var(--accent)] focus:text-white rounded-t-xl transition"
                >
                  {q}
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`transition-all duration-300 px-5 text-[var(--text)] overflow-hidden ${faqOpen === i ? 'max-h-40 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'} text-base`}
                >
                  {faqOpen === i && <p>{a}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--card)] text-[var(--text)] border-t border-[var(--primary)] py-10 mt-12">
        <div className="container flex flex-wrap justify-between gap-8">
          <div className="min-w-[220px]">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Luna Haven Logo" className="h-10 md:h-11 rounded shadow" />
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
        <div className="text-center text-xs text-[var(--secondary)] mt-10">
          Luna Haven LLC is a legally registered homebuyer based in Texas.<br />
          &copy; {new Date().getFullYear()} Luna Haven LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
