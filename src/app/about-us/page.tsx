'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)] font-inter min-h-screen">
      {/* HERO */}
      <section>
        <div className="container text-center py-16 md:py-24 lg:py-32">
          <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3rem] font-extrabold mb-8 text-[var(--primary)] tracking-tight" style={{lineHeight:'1.1'}}>LUNA HAVEN</h1>
          <p className="text-xl md:text-2xl text-[var(--secondary)] max-w-2xl mx-auto mb-8">Need to Sell Your Home Fast & Easy?</p>
          <p className="text-lg text-[var(--text)] max-w-2xl mx-auto mb-8">Get a cash offer in just 7 days — no repairs, no fees, no stress.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className="bg-[var(--card)] text-[var(--text)] p-6 rounded-xl shadow hover:scale-105 transition flex flex-col h-full"
              >
                <Image
                  src={`/s${step}.jpg`}
                  alt={`Step ${step}`}
                  width={500}
                  height={300}
                  className="rounded mb-4 w-full h-48 object-cover"
                  style={{maxWidth:'100%'}}
                />
                <h3 className="font-semibold text-lg mb-2">Step {step}</h3>
                <p className="flex-1">Brief description for step {step} goes here to explain process.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">People We've Helped</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { src: '/mark.png', name: 'Mark' },
            { src: '/enrique.png', name: 'Enrique' },
            { src: '/laurie.png', name: 'Laurie' },
            { src: '/tony.png', name: 'Tony' },
            { src: '/grace.png', name: 'Grace' },
            { src: '/nicholas.png', name: 'Nicholas' },
          ].map((t, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow bg-[var(--card)] group transition-all">
              <Image
                src={t.src}
                alt={`Testimonial from ${t.name}`}
                width={300}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 group-hover:ring-2 group-hover:ring-[var(--primary)] transition-all"
                style={{maxWidth:'100%'}}
              />
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* PROPERTY PHOTOS */}
      <section>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">We’ve Helped with Real Properties Like These</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { src: '/brent.jpg', label: 'Brent property' },
            { src: '/darryl.png', label: 'Darryl property' },
            { src: '/109.png', label: '109 property' },
            { src: '/516-518.jpg', label: '516-518 property' },
            { src: '/zv.png', label: 'ZV property' },
            { src: '/zw.png', label: 'ZW property' },
            { src: '/zx.png', label: 'ZX property' },
            { src: '/zy.png', label: 'ZY property' },
            { src: '/zz.jpg', label: 'ZZ property' },
          ].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow bg-[var(--card)] group transition-all">
              <Image
                src={img.src}
                alt={img.label}
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 group-hover:ring-2 group-hover:ring-[var(--primary)] transition-all"
                style={{maxWidth:'100%'}}
              />
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Sellers Trust Us</h2>
          <ul className="max-w-2xl mx-auto space-y-4 text-left">
            {[
              '✔️ Transparent process with no hidden fees.',
              '✔️ We’re a registered LLC operating since 2023.',
              '✔️ Flexible closing timelines to match your needs.',
              '✔️ Preview the contract before you sign.',
            ].map((item, i) => (
              <li key={i} className="bg-[var(--card)] p-4 rounded-md shadow">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">We Have The Answers</h2>
          <div className="space-y-4">
            {[
              'What do you do with my information?',
              'Do I need to clean or fix anything?',
              'But my house is in REALLY bad shape…',
              'Can I leave anything behind?',
              'Do I pay any fees or commissions?',
              'What happens when I call you?',
              'Why should I work with a cash buyer?',
            ].map((q, i) => (
              <details key={i} className="mb-4 rounded border border-[var(--accent)] p-4 bg-[var(--card)]">
                <summary className="cursor-pointer font-semibold">{q}</summary>
                <p className="mt-2 text-sm text-[var(--secondary)]">
                  We’ll explain this clearly when we talk — but rest assured, we’ve handled it all before.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
