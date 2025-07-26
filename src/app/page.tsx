"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import HomeMobile from "./page.mobile";
import "../styles/homepage.desktop.css";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

export default function Home() {

  const isMobile = useIsMobile();
  const [step, setStep] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const { theme } = useTheme ? useTheme() : { theme: "light" };
  if (!theme) return null;

  return (
    <>
      {isMobile ? (
        <HomeMobile />
      ) : (
        <main
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            background: theme === 'dark'
              ? 'linear-gradient(120deg, #232336 0%, #3a2e5f 40%, #2a2342 100%)'
              : 'linear-gradient(120deg, #ede9fe 0%, #c7bfff 100%)',
            color: theme === 'dark' ? '#f3f4f6' : '#232336',
            minHeight: '100vh',
            padding: '0',
            width: '100%',
            boxSizing: 'border-box',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          {/* HERO SECTION */}
          <section style={{
            padding: '1.3rem 0 0.6rem 0',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'auto',
            position: 'relative',
            boxSizing: 'border-box',
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
          }}>
            <h1 style={{
              fontWeight: 900,
              fontSize: 'clamp(1.1rem, 3.2vw, 1.7rem)',
              marginBottom: 8,
              fontFamily: 'Inter, system-ui, sans-serif',
              color: theme === 'dark' ? '#fff' : '#5b21b6',
              textAlign: 'center',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              lineHeight: 1.13,
            }}>Sell Your Home Fast for Cash</h1>
            <p style={{ color: theme === 'dark' ? '#e5e7eb' : 'var(--text)', opacity: 0.85, marginBottom: 14, fontSize: '1.08rem', fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'center', lineHeight: 1.18 }}>No repairs, no fees, no hassle. Get your offer in minutes.</p>
            <button
              className="btn-primary"
              onClick={() => setStep(1)}
              style={{
                fontWeight: 800,
                fontSize: '1.02rem',
                padding: '0.8rem 1.5rem',
                borderRadius: '1.1rem',
                background: theme === 'dark'
                  ? 'linear-gradient(90deg, #7c3aed, #a78bfa)'
                  : 'linear-gradient(90deg, var(--primary), var(--accent))',
                color: theme === 'dark' ? '#fff' : '#232336',
                border: 'none',
                boxShadow: '0 2px 8px rgba(124,58,237,0.13)',
                marginBottom: 0,
                textShadow: theme === 'dark' ? 'none' : '0 1px 0 #fff',
                marginTop: 0,
                display: 'block',
                alignSelf: 'center',
                transition: 'margin 0.28s',
                maxWidth: 220,
              }}
            >
              Get My Offer
            </button>
          </section>
          {/* FORM STEPS - only show if step > 0 */}
          {step > 0 && (
            <section id="form" style={{
              margin: "0 auto",
              maxWidth: 420,
              padding: '1rem 1rem 0.5rem 1rem',
              marginTop: 0,
              boxSizing: 'border-box',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
            }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 12, color: theme === 'dark' ? '#fff' : '#7c3aed' }}>Get Your Cash Offer</h2>
              <div style={{
                boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)',
                background: 'inherit',
                borderRadius: '1.2rem',
                padding: '2rem 1.5rem',
              }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <label htmlFor="address" style={{ fontWeight: 700, marginBottom: 8, color: theme === 'dark' ? '#fff' : '#232336', fontSize: '1.09rem' }}>Property Address</label>
                  <input id="address" type="text" placeholder="123 Main St, City, State" style={{ padding: '1.1rem 1.5rem', borderRadius: '1.2rem', border: '1.5px solid var(--input-border)', fontSize: '1.09rem', background: theme === 'dark' ? '#232336' : '#fff', color: theme === 'dark' ? '#fff' : '#232336', marginBottom: 16 }} />
                  <label htmlFor="email" style={{ fontWeight: 700, marginBottom: 8, color: theme === 'dark' ? '#fff' : '#232336', fontSize: '1.09rem' }}>Email</label>
                  <input id="email" type="email" placeholder="you@example.com" style={{ padding: '1.1rem 1.5rem', borderRadius: '1.2rem', border: '1.5px solid var(--input-border)', fontSize: '1.09rem', background: theme === 'dark' ? '#232336' : '#fff', color: theme === 'dark' ? '#fff' : '#232336', marginBottom: 16 }} />
                  <label htmlFor="phone" style={{ fontWeight: 700, marginBottom: 8, color: theme === 'dark' ? '#fff' : '#232336', fontSize: '1.09rem' }}>Phone</label>
                  <input id="phone" type="tel" placeholder="(555) 555-5555" style={{ padding: '1.1rem 1.5rem', borderRadius: '1.2rem', border: '1.5px solid var(--input-border)', fontSize: '1.09rem', background: theme === 'dark' ? '#232336' : '#fff', color: theme === 'dark' ? '#fff' : '#232336', marginBottom: 16 }} />
                  <button type="submit" style={{
                    fontWeight: 700,
                    fontSize: '1.13rem',
                    padding: '1.1rem 2.5rem',
                    borderRadius: '1.2rem',
                    background: theme === 'dark'
                      ? 'linear-gradient(90deg, #7c3aed, #a78bfa)'
                      : 'linear-gradient(90deg, var(--primary), var(--accent))',
                    color: theme === 'dark' ? '#fff' : '#232336',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(124,58,237,0.13)',
                    marginTop: 8,
                    textShadow: theme === 'dark' ? 'none' : '0 1px 0 #fff',
                  }}>
                    Submit
                  </button>
                </form>
              </div>
            </section>
          )}
          {/* HOW IT WORKS SECTION */}
          <section style={{ marginTop: 18, textAlign: "center", borderRadius: 0, boxShadow: 'none', padding: '1.2rem 0', background: 'transparent', transition: 'margin-top 0.28s, padding 0.28s' }}>
            <h2 style={{ fontWeight: 900, fontSize: '2.2rem', marginBottom: 18, fontFamily: "Inter, system-ui, sans-serif", color: theme === 'dark' ? '#fff' : '#7c3aed' }}>How It Works</h2>
            <p style={{ color: theme === 'dark' ? '#e5e7eb' : 'var(--text)', opacity: 0.8, marginBottom: 32, fontSize: '1.15rem', fontFamily: 'Inter, system-ui, sans-serif' }}>Our Simple 3 Step Process</p>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2.2rem',
              background: theme === 'dark'
                ? 'linear-gradient(120deg, #232336 0%, #3a2e5f 100%)'
                : 'linear-gradient(120deg, #ede9fe 0%, #c7bfff 100%)',
              borderRadius: 24,
              border: theme === 'dark' ? '2px solid #7c3aed' : '2px solid #a78bfa',
              boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)',
              padding: '2.2rem 2.2rem',
              justifyContent: 'center',
              alignItems: 'stretch',
              margin: '0 auto',
              maxWidth: 1000,
              position: 'relative',
              transition: 'box-shadow 0.18s, border 0.18s, background 0.18s',
              overflowX: 'visible',
            }}>
              {[{ title: "Step 1: Contact Us", desc: "Reach out and tell us about your property." }, { title: "Step 2: Get Your Offer", desc: "We’ll review and send you a cash offer." }, { title: "Step 3: Close & Get Paid", desc: "Pick your closing date and get paid fast." }].map((step, i) => (
                <div key={i} className="card how-card step-card" tabIndex={0} style={{ flex: 1, minWidth: 220, maxWidth: 320, borderRadius: 18, background: theme === 'dark' ? 'linear-gradient(120deg, #2a2342 0%, #3a2e5f 100%)' : 'linear-gradient(120deg, #ede9fe 0%, #c7bfff 100%)', boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)', padding: '1.2rem 1rem', margin: '0 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem' }}>
                  <div style={{ fontWeight: 900, fontSize: '1.3rem', color: theme === 'dark' ? '#fff' : '#7c3aed', marginBottom: 8 }}>{step.title}</div>
                  <p style={{ color: theme === 'dark' ? '#e5e7eb' : '#232336', fontSize: '1.09rem', textAlign: 'center', lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
          {/* TENANT REVIEWS SECTION */}
          <section className="testimonial-section" style={{ marginTop: 48, textAlign: 'center', padding: '2.7rem 0 1.5rem 0', marginBottom: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, transition: 'background 0.38s, border-radius 0.38s, margin 0.38s, padding 0.38s' }}>
            <h2 style={{ fontWeight: 900, fontSize: '2rem', marginBottom: 18, color: theme === 'dark' ? '#fff' : '#5b21b6', fontFamily: 'Inter, system-ui, sans-serif' }}>
              Happy Tenants, Trusted Sellers
            </h2>
            <p style={{ color: theme === 'dark' ? '#e5e7eb' : '#232336', fontSize: '1.13rem', marginBottom: 32, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              The trust our homeowners place in us is reflected in the happiness of our tenants. Here’s what real renters say about our service, reliability, and care—proof that when you sell your home to us, you’re working with a team that values people and property.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '1.1rem', justifyItems: 'center', maxWidth: 1400, margin: '0 auto' }}>
              {[{ name: "Laurie S.", img: "/laurie.png" }, { name: "Tony Z.", img: "/tony.png" }, { name: "Mark L.", img: "/mark.png" }, { name: "Grace T.", img: "/grace.png" }, { name: "Enrique G.", img: "/enrique.png" }, { name: "Nicholas P.", img: "/nicholas.png" }].map((t, i) => (
                <div key={i} className="testimonial-card" style={{ maxWidth: 420, margin: "0 auto" }}>
                  <div style={{ width: "100%", height: 220, borderRadius: "12px 12px 0 0", overflow: "hidden", background: theme === "dark" ? "#232336" : "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src={t.img} alt={t.name} width={400} height={220} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "12px" }} />
                  </div>
                  <span className="testimonial-name" style={{ fontWeight: 700, color: theme === "dark" ? "#fff" : "var(--primary)", fontSize: "1.15rem", display: "block", padding: "0.7rem 0", textAlign: "center" }}>{t.name}</span>
                </div>
              ))}
            </div>
          </section>
          {/* PROPERTY PHOTOS SECTION */}
          <section style={{ marginTop: 36, textAlign: "center", padding: '2.2rem 0', background: 'transparent', transition: 'margin-top 0.38s, padding 0.38s' }}>
            <h2 style={{ fontWeight: 900, fontSize: "2rem", marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#fff' : '#5b21b6' }}>We’ve Helped with Real Properties Like These</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center', alignItems: 'center', maxWidth: 1400, margin: '0 auto' }}>
              {[
                "/brent.jpg",
                "/darryl.png",
                "/109.png",
                "/516-518.jpg",
                "/zv.png",
                "/zw.png",
                "/zx.png",
                "/zy.png",
                "/zz.jpg"
              ].map((src, i) => (
                <Image key={i} src={src} alt={`property ${i}`} width={400} height={220} className="property-card" loading="lazy" style={{ width: 400, height: 220, objectFit: "contain", borderRadius: "12px", margin: "0 auto" }} />
              ))}
            </div>
          </section>
          {/* FAQ SECTION */}
          <section className="faq-section">
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.3rem, 4vw, 2.1rem)', textAlign: "center", marginBottom: 18, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#fff' : '#7c3aed', overflowWrap: 'break-word', wordBreak: 'break-word' }}>Frequently Asked Questions</h2>
            <p style={{ textAlign: "center", color: theme === 'dark' ? '#e5e7eb' : 'var(--text)', opacity: 0.8, marginBottom: 32, fontSize: "1.13rem", fontFamily: 'Inter, system-ui, sans-serif' }}>We Have The Answers</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', boxSizing: 'border-box', alignItems: 'center', width: '100%' }}>
              {[
                { q: "What do you do with my information?", a: "We only use your information to prepare and deliver your cash offer. We never sell or share your data." },
                { q: "Do I need to clean or fix anything?", a: "Nope. We buy houses as-is — no cleaning or repairs needed." },
                { q: "But my house is in REALLY bad shape…", a: "That’s fine! We specialize in buying properties in any condition." },
                { q: "Can I leave anything behind?", a: "Yes. Leave behind anything you don’t want. We’ll handle the rest." },
                { q: "Do I pay any fees or commissions?", a: "None at all! We cover all title and escrow costs. You pay nothing." },
                { q: "What happens when I call you?", a: "We’ll ask a few quick questions about the property and walk you through next steps." },
                { q: "Why should I work with a cash buyer?", a: "It’s faster, simpler, and there’s no risk of deals falling through from financing issues." }
              ].map(({ q, a }, i) => (
                <div key={i} className="faq card" tabIndex={0} style={{ maxWidth: 900, margin: "0 auto", borderRadius: "1.5rem", background: theme === 'dark' ? 'linear-gradient(120deg, #2a2342 0%, #3a2e5f 100%)' : 'linear-gradient(120deg, #ede9fe 0%, #c7bfff 100%)', boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)', padding: "1.2rem 1rem", width: "100%", display: "flex", flexDirection: "column", gap: "0.7rem", alignItems: "center" }}>
                  <button
                    style={{ width: "100%", background: "none", border: "none", outline: "none", fontWeight: 900, fontSize: "1.05rem", color: theme === "dark" ? "#fff" : "var(--primary)", borderBottom: "1px solid var(--faq-border)", borderRadius: "0.5rem", padding: "0.2rem 0.5rem", textAlign: "left", cursor: "pointer" }}
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    {q}
                  </button>
                  {faqOpen === i && (
                    <div
                      id={`faq-answer-${i}`}
                      style={{ lineHeight: 1.5, color: theme === "dark" ? "#e5e7eb" : "var(--text)", fontWeight: 500, fontSize: "1.09rem", padding: "0.5rem 0.7rem 0.7rem 0.7rem", background: theme === "dark" ? "rgba(124,58,237,0.08)" : "rgba(124,58,237,0.04)", borderRadius: "0 0 1.2rem 1.2rem" }}
                    >
                      {a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          {/* Footer */}
          <footer style={{ textAlign: 'center', marginTop: 0, padding: '1.2rem 1.5rem 1.2rem 1.5rem', color: theme === 'dark' ? '#c7bfff' : '#232336', fontSize: '1.09rem', background: 'transparent', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem', transition: 'padding 0.38s' }}>
            <div style={{ fontSize: '0.98rem', opacity: 0.7, marginTop: 6 }}>
              &copy; {new Date().getFullYear()} Luna Haven. All rights reserved.
            </div>
          </footer>
        </main>
      )}
    </>
  );
}
