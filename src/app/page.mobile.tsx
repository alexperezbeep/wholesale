"use client";
// Hook to detect mobile screen
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
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import "../styles/homepage.mobile.css";

// Simple horizontal carousel for mobile
function Carousel({ children, itemsPerView = 2 }: { children: React.ReactNode, itemsPerView?: number }) {
  const [index, setIndex] = useState(0);
  const items = React.Children.toArray(children);
  const count = items.length;
  const maxIndex = Math.max(0, Math.ceil(count / itemsPerView) - 1);
  // Theme-aware arrow color
  const { theme } = useTheme();
  const arrowColor = theme === 'dark' ? '#a78bfa' : '#7c3aed';
  const arrowBg = theme === 'dark' ? 'rgba(124,58,237,0.13)' : 'rgba(124,58,237,0.09)';
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div style={{ display: "flex", overflow: "hidden", width: "100%" }}>
        <div style={{ display: "flex", transform: `translateX(-${index * 100}%)`, transition: "transform 0.3s", width: `${(count / itemsPerView) * 100}%` }}>
          {items.map((child, i) => (
            <div style={{ minWidth: `${100 / itemsPerView}%`, boxSizing: "border-box" }} key={i}>{child}</div>
          ))}
        </div>
      </div>
      {count > itemsPerView && (
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 8 }}>
          <button
            onClick={() => setIndex(index > 0 ? index - 1 : maxIndex)}
            aria-label="Previous"
            style={{
              background: arrowBg,
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: theme === 'dark' ? '0 2px 8px rgba(124,58,237,0.13)' : '0 1px 4px rgba(124,58,237,0.08)',
              transition: 'background 0.2s',
              padding: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="11" fill="none" />
              <path d="M13.5 6L8.5 11L13.5 16" stroke={arrowColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span style={{ fontSize: 15, fontWeight: 700, color: arrowColor, display: 'flex', alignItems: 'center', height: 36 }}>{index + 1} / {maxIndex + 1}</span>
          <button
            onClick={() => setIndex(index < maxIndex ? index + 1 : 0)}
            aria-label="Next"
            style={{
              background: arrowBg,
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: theme === 'dark' ? '0 2px 8px rgba(124,58,237,0.13)' : '0 1px 4px rgba(124,58,237,0.08)',
              transition: 'background 0.2s',
              padding: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="11" fill="none" />
              <path d="M8.5 6L13.5 11L8.5 16" stroke={arrowColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

const HomeMobile = () => {
  const isMobile = useIsMobile();
  const [step, setStep] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const { theme } = useTheme();
  if (!theme) return null;
  if (!isMobile) return <div style={{ textAlign: 'center', marginTop: 40, fontSize: 18 }}>Please use a mobile device or resize your browser to view the mobile version.</div>;
  return (
    <main style={{ fontFamily: "Inter, system-ui, sans-serif", background: theme === "dark" ? "linear-gradient(120deg, #232336 0%, #3a2e5f 40%, #2a2342 100%)" : "linear-gradient(120deg, #ede9fe 0%, #c7bfff 100%)", color: theme === "dark" ? "#f3f4f6" : "#232336", minHeight: "100vh", padding: "0 0.2rem", width: "100%", boxSizing: "border-box" }}>
      {/* HERO SECTION */}
      <section style={{
        padding: '1.1rem 1.1rem 0.5rem 1.1rem', // horizontal padding
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
          fontSize: '8rem',
          marginBottom: 8,
          fontFamily: 'Inter, system-ui, sans-serif',
          color: theme === 'dark' ? '#fff' : '#5b21b6',
          textAlign: 'center',
          lineHeight: 1.13,
        }}>Sell Your Home Fast for Cash</h1>
        <p style={{ color: theme === 'dark' ? '#e5e7eb' : 'var(--text)', opacity: 0.85, marginBottom: 14, fontSize: '1.02rem', fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'center', lineHeight: 1.18 }}>No repairs, no fees, no hassle. Get your offer in minutes.</p>
        <button
          className="btn-primary"
          onClick={() => setStep(1)}
          style={{
            fontWeight: 900,
            fontSize: '1.18rem', // larger font size
            padding: '1.1rem 2.2rem', // larger padding
            borderRadius: '1.2rem',
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
            maxWidth: 320,
          }}
        >
          Get My Offer
        </button>
      </section>

      {/* FORM STEPS - only show if step > 0 */}
      {step > 0 && (
        <section id="form" style={{
          margin: "0 auto",
          maxWidth: 340,
          padding: '1rem 0.7rem 0.5rem 0.7rem',
          marginTop: 0,
          boxSizing: 'border-box',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
        }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.08rem', marginBottom: 10, color: theme === 'dark' ? '#fff' : '#7c3aed' }}>Get Your Cash Offer</h2>
          <div style={{
            boxShadow: theme === 'dark' ? '0 4px 16px rgba(124,58,237,0.13)' : '0 2px 12px rgba(124,58,237,0.08)',
            background: 'inherit',
            borderRadius: '1.2rem',
            padding: '1.2rem 0.7rem',
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <label htmlFor="address" style={{ fontWeight: 700, marginBottom: 6, color: theme === 'dark' ? '#fff' : '#232336', fontSize: '1.01rem' }}>Property Address</label>
              <input id="address" type="text" placeholder="123 Main St, City, State" style={{ padding: '0.8rem 1rem', borderRadius: '1.1rem', border: '1.2px solid var(--input-border)', fontSize: '1.01rem', background: theme === 'dark' ? '#232336' : '#fff', color: theme === 'dark' ? '#fff' : '#232336', marginBottom: 10 }} />
              <label htmlFor="email" style={{ fontWeight: 700, marginBottom: 6, color: theme === 'dark' ? '#fff' : '#232336', fontSize: '1.01rem' }}>Email</label>
              <input id="email" type="email" placeholder="you@example.com" style={{ padding: '0.8rem 1rem', borderRadius: '1.1rem', border: '1.2px solid var(--input-border)', fontSize: '1.01rem', background: theme === 'dark' ? '#232336' : '#fff', color: theme === 'dark' ? '#fff' : '#232336', marginBottom: 10 }} />
              <label htmlFor="phone" style={{ fontWeight: 700, marginBottom: 6, color: theme === 'dark' ? '#fff' : '#232336', fontSize: '1.01rem' }}>Phone</label>
              <input id="phone" type="tel" placeholder="(555) 555-5555" style={{ padding: '0.8rem 1rem', borderRadius: '1.1rem', border: '1.2px solid var(--input-border)', fontSize: '1.01rem', background: theme === 'dark' ? '#232336' : '#fff', color: theme === 'dark' ? '#fff' : '#232336', marginBottom: 10 }} />
              <button type="submit" style={{
                fontWeight: 700,
                fontSize: '1.09rem',
                padding: '0.9rem 1.5rem',
                borderRadius: '1.1rem',
                background: theme === 'dark'
                  ? 'linear-gradient(90deg, #7c3aed, #a78bfa)'
                  : 'linear-gradient(90deg, var(--primary), var(--accent))',
                color: theme === 'dark' ? '#fff' : '#232336',
                border: 'none',
                boxShadow: '0 2px 8px rgba(124,58,237,0.13)',
                marginTop: 6,
                textShadow: theme === 'dark' ? 'none' : '0 1px 0 #fff',
              }}>
                Submit
              </button>
            </form>
          </div>
        </section>
      )}
      <section style={{ marginTop: 12, textAlign: "center", borderRadius: 0, boxShadow: 'none', padding: '0.8rem 0', background: 'transparent', transition: 'margin-top 0.28s, padding 0.28s' }}>
        <h2 style={{ fontWeight: 900, fontSize: '1.08rem', marginBottom: 10, fontFamily: "Inter, system-ui, sans-serif", color: theme === 'dark' ? '#fff' : '#7c3aed' }}>How It Works</h2>
        <p style={{ color: theme === 'dark' ? '#e5e7eb' : 'var(--text)', opacity: 0.8, marginBottom: 18, fontSize: '0.98rem', fontFamily: 'Inter, system-ui, sans-serif' }}>Our Simple 3 Step Process</p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          background: theme === 'dark'
            ? 'linear-gradient(120deg, #232336 0%, #3a2e5f 100%)'
            : 'linear-gradient(120deg, #ede9fe 0%, #c7bfff 100%)',
          borderRadius: 18,
          border: theme === 'dark' ? '2px solid #7c3aed' : '2px solid #a78bfa',
          boxShadow: theme === 'dark' ? '0 4px 16px rgba(124,58,237,0.13)' : '0 2px 12px rgba(124,58,237,0.08)',
          padding: '1.2rem 0.7rem',
          justifyContent: 'center',
          alignItems: 'center', // center steps horizontally
          margin: '0 auto',
          maxWidth: 400,
          position: 'relative',
          transition: 'box-shadow 0.18s, border 0.18s, background 0.18s',
          overflowX: 'visible',
        }}>
          {[
            { title: "Step 1: Contact Us", desc: "Reach out and tell us about your property." },
            { title: "Step 2: Get Your Offer", desc: "We’ll review and send you a cash offer." },
            { title: "Step 3: Close & Get Paid", desc: "Pick your closing date and get paid fast." }
          ].map((step, i) => (
            <div key={i} className="card how-card step-card" tabIndex={0} style={{ flex: 1, minWidth: 0, maxWidth: 400, borderRadius: 14, background: theme === 'dark' ? 'linear-gradient(120deg, #2a2342 0%, #3a2e5f 100%)' : 'linear-gradient(120deg, #ede9fe 0%, #c7bfff 100%)', boxShadow: theme === 'dark' ? '0 4px 16px rgba(124,58,237,0.13)' : '0 2px 12px rgba(124,58,237,0.08)', padding: '0.8rem 0.6rem', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '1rem', color: theme === 'dark' ? '#fff' : '#7c3aed', marginBottom: 4 }}>{step.title}</div>
              <p style={{ color: theme === 'dark' ? '#e5e7eb' : '#232336', fontSize: '0.97rem', textAlign: 'center', lineHeight: 1.5 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* TENANT REVIEWS CAROUSEL */}
      <section className="testimonial-section" style={{ marginTop: 32, textAlign: "center", padding: "2rem 0 1.2rem 0" }}>
        <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: 12, color: theme === "dark" ? "#fff" : "#5b21b6" }}>Happy Tenants, Trusted Sellers</h2>
      <Carousel itemsPerView={1}>
          {[{ name: "Laurie S.", img: "/laurie.png" }, { name: "Tony Z.", img: "/tony.png" }, { name: "Mark L.", img: "/mark.png" }, { name: "Grace T.", img: "/grace.png" }, { name: "Enrique G.", img: "/enrique.png" }, { name: "Nicholas P.", img: "/nicholas.png" }].map((t, i) => (
            <div key={i} className="testimonial-card" style={{ maxWidth: 220, margin: "0 auto" }}>
              <div style={{ width: "100%", height: 110, borderRadius: "12px 12px 0 0", overflow: "hidden", background: theme === "dark" ? "#232336" : "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={t.img} alt={t.name} width={180} height={110} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "12px" }} />
              </div>
              <span className="testimonial-name" style={{ fontWeight: 700, color: theme === "dark" ? "#fff" : "var(--primary)", fontSize: "0.95rem", display: "block", padding: "0.7rem 0", textAlign: "center" }}>{t.name}</span>
            </div>
          ))}
        </Carousel>
      </section>
      {/* PROPERTY PHOTOS CAROUSEL */}
      <section style={{ marginTop: 24, textAlign: "center", padding: "1.5rem 1.7rem 1.5rem 1.3rem" }}>
        <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: 18, color: theme === "dark" ? "#fff" : "#5b21b6" }}>We’ve Helped with Real Properties Like These</h2>
        <Carousel itemsPerView={1}>
          {["/brent.jpg", "/darryl.png", "/109.png", "/516-518.jpg", "/zv.png", "/zw.png", "/zx.png", "/zy.png", "/zz.jpg"].map((src, i) => (
            <Image key={i} src={src} alt={`property ${i}`} width={180} height={110} className="property-card" loading="lazy" style={{ width: 180, height: 110, objectFit: "contain", borderRadius: "12px", margin: "0 auto" }} />
          ))}
        </Carousel>
      </section>
      {/* FAQ DROPDOWN/ACCORDION */}
      <section className="faq-section" style={{ marginTop: 24, padding: "1.2rem 0" }}>
        <h2 style={{ fontWeight: 900, fontSize: "1rem", textAlign: "center", marginBottom: 10, color: theme === "dark" ? "#fff" : "#7c3aed" }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', boxSizing: 'border-box', alignItems: 'center', width: '100%' }}>
          {[
            { q: "What do you do with my information?", a: "We only use your information to prepare and deliver your cash offer. We never sell or share your data." },
            { q: "Do I need to clean or fix anything?", a: "Nope. We buy houses as-is — no cleaning or repairs needed." },
            { q: "But my house is in REALLY bad shape…", a: "That’s fine! We specialize in buying properties in any condition." },
            { q: "Can I leave anything behind?", a: "Yes. Leave behind anything you don’t want. We’ll handle the rest." },
            { q: "Do I pay any fees or commissions?", a: "None at all! We cover all title and escrow costs. You pay nothing." },
            { q: "What happens when I call you?", a: "We’ll ask a few quick questions about the property and walk you through next steps." },
            { q: "Why should I work with a cash buyer?", a: "It’s faster, simpler, and there’s no risk of deals falling through from financing issues." }
          ].map(({ q, a }, i) => (
            <div key={i} className="faq card" tabIndex={0} style={{ maxWidth: 320, margin: "0 auto", borderRadius: "1.2rem", background: theme === "dark" ? "linear-gradient(120deg, #2a2342 0%, #3a2e5f 100%)" : "linear-gradient(120deg, #ede9fe 0%, #c7bfff 100%)", boxShadow: "0 4px 24px rgba(31,38,135,0.07)", padding: "0.8rem 0.7rem", width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center" }}>
              <button
                style={{ width: "100%", background: "none", border: "none", outline: "none", fontWeight: 900, fontSize: "0.95rem", color: theme === "dark" ? "#fff" : "var(--primary)", borderBottom: "1px solid var(--faq-border)", borderRadius: "0.5rem", padding: "0.2rem 0.5rem", textAlign: "left", cursor: "pointer" }}
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                aria-expanded={faqOpen === i}
              >
                {q}
              </button>
              {faqOpen === i && (
                <div style={{ lineHeight: 1.5, color: theme === "dark" ? "#e5e7eb" : "var(--text)", fontWeight: 500, fontSize: "0.98rem", padding: "0.5rem 0.7rem 0.7rem 0.7rem", background: theme === "dark" ? "rgba(124,58,237,0.08)" : "rgba(124,58,237,0.04)", borderRadius: "0 0 1.2rem 1.2rem" }}>{a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* ...existing code for footer... */}
    </main>
  );
};

export default HomeMobile;
