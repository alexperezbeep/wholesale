'use client';
import React from 'react';
import { useTheme } from '../ThemeProvider';

export default function AboutPage() {
  // Add local state for multi-step form
  const [step, setStep] = React.useState(0); // 0 = form hidden
  const showForm = () => setStep(1);
  const { theme, toggleTheme } = useTheme();

  if (!theme) return null;

  return (
    <main
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(120deg, #18181b 60%, #232336 100%)'
          : 'linear-gradient(120deg, #f9f9ff 80%, #ede9fe 100%)',
        color: theme === 'dark' ? '#f3f4f6' : '#232336',
        minHeight: '100vh',
        fontFamily: 'Inter, system-ui, sans-serif',
        transition: 'background 0.4s',
        width: '100%',
      }}
    >
      {/* HEADER is now only in layout, not here */}
      {/* MAIN CONTENT */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        paddingTop: '4rem',
        background: theme === 'dark'
          ? 'rgba(35,35,54,0.96)'
          : 'linear-gradient(120deg, #ede9fe 60%, #c7bfff 100%)',
        borderRadius: 28,
        boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: theme === 'dark' ? '#fff' : 'var(--primary-dark)',
        transition: 'background 0.4s',
      }}>
        {/* Removed redundant blue-styled Luna Haven heading */}

        <h2 style={{ fontSize: '1.28rem', marginTop: '2rem', fontWeight: 700, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#c7bfff' : 'var(--primary)' }}>Who Are We?</h2>
        <p style={{ marginTop: '0.75rem', lineHeight: '1.75', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, color: theme === 'dark' ? '#e5e7eb' : 'var(--text)' }}>
          We buy houses. In as little as one phone call, you can receive a quick cash offer from us. We aren’t real estate agents — we are direct cash home buyers.
          It’s a common misconception that we are the same, but that’s not the case. <strong>The goal of a cash home buyer is to offer homeowners a fair price for their home in a quick and hassle-free manner.</strong>
        </p>

        <p style={{ marginTop: '1rem', lineHeight: '1.75', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, color: theme === 'dark' ? '#e5e7eb' : 'var(--text)' }}>
          We are able to accomplish this through an <strong>efficient, streamlined</strong> home-selling process. In just three easy steps, you can enjoy more money, less hassle, and accomplish your goals in less time.
        </p>

        <h2 style={{ fontSize: '1.28rem', marginTop: '2.5rem', fontWeight: 700, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#c7bfff' : 'var(--primary)' }}>Cash Home Buyers Nationwide!</h2>
        <p style={{ marginTop: '0.75rem', lineHeight: '1.75', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, color: theme === 'dark' ? '#e5e7eb' : 'var(--text)' }}>
          As a cash home buyer, we are dedicated to helping homeowners who need to sell their houses fast and hassle-free.
          Whether you're facing foreclosure, divorce, or simply need to sell quickly for any reason, we’re here to help.
        </p>

        <p style={{ marginTop: '1rem', lineHeight: '1.75', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, color: theme === 'dark' ? '#e5e7eb' : 'var(--text)' }}>
          When you work with us, you don’t need to worry about the usual hassles of selling a house. We don’t require any repairs or cleaning.
          We offer a fair cash offer for your home and close on your timeline.
        </p>
      </section>

      {/* RIGHT SIDE GET OFFER BOX */}
      <div style={{
        position: 'fixed',
        top: '8rem',
        right: '2rem',
        background: theme === 'dark' ? 'linear-gradient(120deg, #232336 60%, #18181b 100%)' : 'var(--card)',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: theme === 'dark' ? '#fff' : 'var(--primary-dark)',
        padding: '1.7rem 1.5rem 1.5rem 1.5rem',
        borderRadius: '20px',
        boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 8px 32px rgba(124,58,237,0.10)',
        width: '320px',
        zIndex: 1000,
        border: theme === 'dark' ? '2px solid var(--primary)' : '1.5px solid var(--primary)',
        transition: 'background 0.4s',
      }}>
        <h3 style={{ fontWeight: 900, fontSize: '1.28rem', marginBottom: '1.1rem', fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#fff' : 'var(--primary)' }}>Get An Offer!</h3>
        <input placeholder="Home Address Here..." style={{
          width: '100%',
          padding: '0.85rem',
          marginBottom: '1.1rem',
          borderRadius: '8px',
          border: '1.5px solid #c7bfff',
          background: theme === 'dark' ? '#18181b' : '#fff',
          color: theme === 'dark' ? '#fff' : 'var(--primary-dark)',
          fontSize: '1.13rem',
          fontFamily: 'Inter, system-ui, sans-serif',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
        }} />
      <button onClick={showForm} style={{
        display: 'inline-block',
        background: theme === 'dark' ? 'var(--primary-dark)' : 'var(--primary)',
        color: '#fff',
        padding: '0.85rem',
        width: '100%',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 900,
        fontSize: '1.13rem',
        fontFamily: 'Inter, system-ui, sans-serif',
        cursor: 'pointer',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'background 0.18s, color 0.18s',
      }}>
        Get Offer!
      </button>
      {/* ABOUT PAGE FORM STEPS - only show if step > 0 */}
      {step > 0 && (
        <section id="about-form" style={{ margin: "3.5rem auto 4rem auto", maxWidth: 540 }}>
          {/* Simple multi-step form logic for About page */}
          {step === 1 && (
            <div style={{ background: theme === 'dark' ? 'rgba(35,39,47,0.97)' : 'rgba(255,255,255,0.98)', borderRadius: 18, boxShadow: '0 4px 24px rgba(124,58,237,0.10)', padding: '2.3rem 1.7rem', marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'left', width: '100%' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 18, color: theme === 'dark' ? '#f3f4f6' : 'var(--primary)' }}>Why are you looking to sell?</h2>
              {["Job relocation", "Inherited property", "Facing foreclosure", "Too many repairs", "Other"].map((opt) => (
                <button key={opt} onClick={() => setStep(2)} style={{ fontSize: '1.13rem', marginBottom: 18, padding: '12px 24px', fontWeight: 700, borderRadius: 10, boxShadow: '0 2px 10px rgba(123,92,245,0.10)', background: theme === 'dark' ? 'var(--primary)' : 'var(--accent)', color: theme === 'dark' ? '#f3f4f6' : '#232336', border: '2px solid var(--primary)', width: '100%', textAlign: 'left', marginTop: 8, cursor: 'pointer', transition: 'background 0.18s, color 0.18s' }}>{opt}</button>
              ))}
            </div>
          )}
          {step === 2 && (
            <div style={{ background: theme === 'dark' ? 'rgba(35,39,47,0.97)' : 'rgba(255,255,255,0.98)', borderRadius: 18, boxShadow: '0 4px 24px rgba(124,58,237,0.10)', padding: '2.3rem 1.7rem', marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'left', width: '100%' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 18, color: theme === 'dark' ? '#f3f4f6' : 'var(--primary)' }}>Does the property need repairs?</h2>
              {["Excellent", "Minor repairs", "Major repairs", "Needs full rehab"].map((opt) => (
                <button key={opt} onClick={() => setStep(3)} style={{ fontSize: '1.13rem', marginBottom: 18, padding: '12px 24px', fontWeight: 700, borderRadius: 10, boxShadow: '0 2px 10px rgba(123,92,245,0.10)', background: theme === 'dark' ? 'var(--primary)' : 'var(--accent)', color: theme === 'dark' ? '#f3f4f6' : '#232336', border: '2px solid var(--primary)', width: '100%', textAlign: 'left', marginTop: 8, cursor: 'pointer', transition: 'background 0.18s, color 0.18s' }}>{opt}</button>
              ))}
            </div>
          )}
          {step === 3 && (
            <div style={{ background: theme === 'dark' ? 'rgba(35,39,47,0.97)' : 'rgba(255,255,255,0.98)', borderRadius: 18, boxShadow: '0 4px 24px rgba(124,58,237,0.10)', padding: '2.3rem 1.7rem', marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'left', width: '100%' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 18, color: theme === 'dark' ? '#f3f4f6' : 'var(--primary)' }}>What’s your timeline to sell?</h2>
              {["Immediately", "Within 30 days", "1–3 months", "Just exploring"].map((opt) => (
                <button key={opt} onClick={() => setStep(4)} style={{ fontSize: '1.13rem', marginBottom: 18, padding: '12px 24px', fontWeight: 700, borderRadius: 10, boxShadow: '0 2px 10px rgba(123,92,245,0.10)', background: theme === 'dark' ? 'var(--primary)' : 'var(--accent)', color: theme === 'dark' ? '#f3f4f6' : '#232336', border: '2px solid var(--primary)', width: '100%', textAlign: 'left', marginTop: 8, cursor: 'pointer', transition: 'background 0.18s, color 0.18s' }}>{opt}</button>
              ))}
            </div>
          )}
          {step === 4 && (
            <div style={{ background: theme === 'dark' ? 'rgba(35,39,47,0.97)' : 'rgba(255,255,255,0.98)', borderRadius: 18, boxShadow: '0 4px 24px rgba(124,58,237,0.10)', padding: '2.3rem 1.7rem', marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'left', width: '100%' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 18, color: theme === 'dark' ? '#f3f4f6' : 'var(--primary)' }}>What’s the property address?</h2>
              <input name="address" placeholder="123 Main St" autoFocus style={{ width: '100%', padding: '0.85rem', marginBottom: '1rem', borderRadius: '10px', border: '1.5px solid var(--primary)', background: theme === 'dark' ? '#232336' : '#f3f4f6', color: theme === 'dark' ? '#f3f4f6' : '#232336', fontSize: '1.13rem', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', transition: 'background 0.18s, color 0.18s' }} />
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
                <button className="btn-primary" onClick={() => setStep(5)} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Next</button>
              </div>
            </div>
          )}
          {step === 5 && (
            <div style={{ background: theme === 'dark' ? 'rgba(35,39,47,0.97)' : 'rgba(255,255,255,0.98)', borderRadius: 18, boxShadow: '0 4px 24px rgba(124,58,237,0.10)', padding: '2.3rem 1.7rem', marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'left', width: '100%' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 18, color: theme === 'dark' ? '#f3f4f6' : 'var(--primary)' }}>What's your name?</h2>
              <input name="name" placeholder="Full Name" autoFocus style={{ width: '100%', padding: '0.85rem', marginBottom: '1rem', borderRadius: '10px', border: '1.5px solid var(--primary)', background: theme === 'dark' ? '#232336' : '#f3f4f6', color: theme === 'dark' ? '#f3f4f6' : '#232336', fontSize: '1.13rem', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', transition: 'background 0.18s, color 0.18s' }} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
                <button className="btn-option" onClick={() => setStep(4)} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 700, fontSize: '1.13rem' }}>Back</button>
                <button className="btn-primary" onClick={() => setStep(6)} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Next</button>
              </div>
            </div>
          )}
          {step === 6 && (
            <div style={{ background: theme === 'dark' ? 'rgba(35,39,47,0.97)' : 'rgba(255,255,255,0.98)', borderRadius: 18, boxShadow: '0 4px 24px rgba(124,58,237,0.10)', padding: '2.3rem 1.7rem', marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'left', width: '100%' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 18, color: theme === 'dark' ? '#f3f4f6' : 'var(--primary)' }}>What's your email?</h2>
              <input type="email" name="email" placeholder="you@example.com" autoFocus style={{ width: '100%', padding: '0.85rem', marginBottom: '1rem', borderRadius: '10px', border: '1.5px solid var(--primary)', background: theme === 'dark' ? '#232336' : '#f3f4f6', color: theme === 'dark' ? '#f3f4f6' : '#232336', fontSize: '1.13rem', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', transition: 'background 0.18s, color 0.18s' }} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
                <button className="btn-option" onClick={() => setStep(5)} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 700, fontSize: '1.13rem' }}>Back</button>
                <button className="btn-primary" onClick={() => setStep(7)} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Next</button>
              </div>
            </div>
          )}
          {step === 7 && (
            <div style={{ background: theme === 'dark' ? 'rgba(35,39,47,0.97)' : 'rgba(255,255,255,0.98)', borderRadius: 18, boxShadow: '0 4px 24px rgba(124,58,237,0.10)', padding: '2.3rem 1.7rem', marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'left', width: '100%' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 18, color: theme === 'dark' ? '#f3f4f6' : 'var(--primary)' }}>What's your phone number?</h2>
              <input name="phone" placeholder="(555) 555-5555" autoFocus style={{ width: '100%', padding: '0.85rem', marginBottom: '1rem', borderRadius: '10px', border: '1.5px solid var(--primary)', background: theme === 'dark' ? '#232336' : '#f3f4f6', color: theme === 'dark' ? '#f3f4f6' : '#232336', fontSize: '1.13rem', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', transition: 'background 0.18s, color 0.18s' }} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
                <button className="btn-option" onClick={() => setStep(6)} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 700, fontSize: '1.13rem' }}>Back</button>
                <button className="btn-primary" onClick={() => setStep(8)} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Next</button>
              </div>
            </div>
          )}
          {step === 8 && (
            <div style={{ background: theme === 'dark' ? 'rgba(35,39,47,0.97)' : 'rgba(255,255,255,0.98)', borderRadius: 18, boxShadow: '0 4px 24px rgba(124,58,237,0.10)', padding: '2.3rem 1.7rem', marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'left', width: '100%' }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 18, color: theme === 'dark' ? '#f3f4f6' : 'var(--primary)' }}>How did you hear about us?</h2>
              <input name="how" placeholder="Google, Friend, etc." autoFocus style={{ width: '100%', padding: '0.85rem', marginBottom: '1rem', borderRadius: '10px', border: '1.5px solid var(--primary)', background: theme === 'dark' ? '#232336' : '#f3f4f6', color: theme === 'dark' ? '#f3f4f6' : '#232336', fontSize: '1.13rem', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', transition: 'background 0.18s, color 0.18s' }} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
                <button className="btn-option" onClick={() => setStep(7)} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 700, fontSize: '1.13rem' }}>Back</button>
                <button className="btn-primary" onClick={() => setStep(9)} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Next</button>
              </div>
            </div>
          )}
          {step === 9 && (
            <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
              <div style={{ background: theme === 'dark' ? 'rgba(35,39,47,0.97)' : 'rgba(255,255,255,0.98)', borderRadius: 18, boxShadow: '0 4px 24px rgba(124,58,237,0.10)', padding: '2.3rem 1.7rem', marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', textAlign: 'left', width: '100%' }}>
                <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginBottom: 18, color: theme === 'dark' ? '#f3f4f6' : 'var(--primary)' }}>Any concerns working with a homebuyer?</h2>
                <input name="concern" placeholder="Optional..." autoFocus style={{ width: '100%', padding: '0.85rem', marginBottom: '1rem', borderRadius: '10px', border: '1.5px solid var(--primary)', background: theme === 'dark' ? '#232336' : '#f3f4f6', color: theme === 'dark' ? '#f3f4f6' : '#232336', fontSize: '1.13rem', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', transition: 'background 0.18s, color 0.18s' }} />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
                  <button className="btn-option" onClick={() => setStep(8)} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 700, fontSize: '1.13rem' }}>Back</button>
                  <button type="submit" className="btn-primary" style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Submit</button>
                </div>
              </div>
            </form>
          )}
        </section>
      )}
      </div>

      {/* Floating theme toggle for extra prevalence */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 2000,
          background: theme === 'dark' ? 'var(--primary-dark)' : 'var(--primary)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 56,
          height: 56,
          boxShadow: '0 2px 12px rgba(0,0,0,0.13)',
          fontSize: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </main>
  );
}