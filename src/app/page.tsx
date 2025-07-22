

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    motivation: "",
    repairs: "",
    timeline: "",
    address: "",
    name: "",
    email: "",
    phone: "",
    how: "",
    concern: "",
  });
  // FAQ accordion state (only one open at a time)
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOption = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    next();
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("https://formspree.io/f/xnnzagjb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    next();
  };

  // Modern Card

  const StepCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="card" style={{ margin: "2.5rem auto", maxWidth: 520 }}>
      <h2 style={{ fontWeight: 800, fontSize: "2rem", marginBottom: 24, letterSpacing: "0.01em", textAlign: "center" }}>{title}</h2>
      {children}
    </div>
  );


  // Improved Option Button with theme variables and contrast
  const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    // Use theme variables for background/text for AA contrast
    const btnBg = theme === 'dark' ? 'var(--primary)' : 'var(--accent)';
    const btnText = theme === 'dark' ? '#fff' : '#111';
    const btnShadow = theme === 'dark' ? 'rgba(123,92,245,0.18)' : 'rgba(123,92,245,0.10)';
    return (
      <button
        {...props}
        className="btn-option"
        style={{
          fontSize: '1.13rem',
          marginBottom: 18,
          padding: '12px 24px',
          fontWeight: 700,
          borderRadius: 10,
          boxShadow: `0 2px 10px ${btnShadow}`,
          background: btnBg,
          color: btnText,
          border: '2px solid var(--primary)',
          width: '100%',
          textAlign: 'left',
          transition: 'background 0.2s, color 0.2s, border 0.2s, transform 0.13s',
          outline: 'none',
          cursor: 'pointer',
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = 'var(--primary)';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.transform = 'scale(1.03)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = btnBg;
          e.currentTarget.style.color = btnText;
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {props.children}
      </button>
    );
  };

  return (
    <main
      style={{
        background: theme === 'dark' ? 'linear-gradient(120deg, #18181b 60%, #232336 100%)' : 'linear-gradient(120deg, #f9f9ff 60%, #f3f4f6 100%)',
        minHeight: '100vh',
        fontFamily: 'Inter, system-ui, sans-serif',
        transition: 'background 0.4s',
      }}
    >
      {/* HERO - single, centered, with CTA (cleaned) */}
      <section className="hero" style={{ marginTop: 0, marginBottom: 40, paddingTop: 48, paddingBottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontWeight: 900, fontSize: "2.8rem", marginBottom: 12, letterSpacing: "-0.02em", textAlign: "center", fontFamily: "Inter, system-ui, sans-serif", color: 'var(--primary-dark)' }}>
          Need to sell your home fast?
        </h1>
        <p style={{ color: 'var(--text)', fontSize: "1.25rem", opacity: 0.92, marginBottom: 8, textAlign: "center", fontWeight: 500, fontFamily: 'Inter, system-ui, sans-serif' }}>
          Get a <b>cash offer in just 7 days</b>
        </p>
        <p style={{ color: 'var(--text)', fontSize: "1.08rem", opacity: 0.85, marginBottom: 0, textAlign: "center", fontWeight: 500, fontFamily: 'Inter, system-ui, sans-serif' }}>
          Operating since June 2023 — 10+ homeowners helped.
        </p>
        {step === 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button
              onClick={next}
              className="btn-primary"
              style={{
                marginTop: 18,
                fontSize: '1.13rem',
                padding: '1.1rem 2.5rem',
                minWidth: 220,
                borderRadius: '1.2rem',
                fontWeight: 900,
                boxShadow: '0 6px 24px var(--btn-shadow)',
                border: '2.5px solid var(--primary)',
                background: 'var(--accent)',
                color: 'var(--btn-text)',
                letterSpacing: '0.01em',
                textShadow: 'none',
                transition: 'background 0.2s, box-shadow 0.2s, color 0.2s, border 0.2s, transform 0.1s',
                outline: 'none',
                cursor: 'pointer',
                opacity: 1,
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 10px 32px var(--btn-shadow-hover)';
                e.currentTarget.style.transform = 'scale(1.04)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.color = 'var(--btn-text)';
                e.currentTarget.style.boxShadow = '0 6px 24px var(--btn-shadow)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onFocus={e => {
                e.currentTarget.style.boxShadow = '0 0 0 3px var(--primary), 0 6px 24px var(--btn-shadow)';
              }}
              onBlur={e => {
                e.currentTarget.style.boxShadow = '0 6px 24px var(--btn-shadow)';
              }}
            >
              Get My Cash Offer
            </button>
          </div>
        )}
      </section>
      {/* FORM STEPS */}
      <section style={{ margin: "0 auto", maxWidth: 540 }}>
        {step === 1 && (
          <StepCard title="Why are you looking to sell?">
            {["Job relocation", "Inherited property", "Facing foreclosure", "Too many repairs", "Other"].map((opt) => (
              <Button key={opt} onClick={() => handleOption("motivation", opt)}>{opt}</Button>
            ))}
          </StepCard>
        )}
        {step === 2 && (
          <StepCard title="Does the property need repairs?">
            {["Excellent", "Minor repairs", "Major repairs", "Needs full rehab"].map((opt) => (
              <Button key={opt} onClick={() => handleOption("repairs", opt)}>{opt}</Button>
            ))}
          </StepCard>
        )}
        {step === 3 && (
          <StepCard title="What’s your timeline to sell?">
            {["Immediately", "Within 30 days", "1–3 months", "Just exploring"].map((opt) => (
              <Button key={opt} onClick={() => handleOption("timeline", opt)}>{opt}</Button>
            ))}
          </StepCard>
        )}
        {step === 4 && (
          <StepCard title="What’s the property address?">
            <input
              name="address"
              onChange={handleChange}
              placeholder="123 Main St"
              autoFocus
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                background: theme === 'dark' ? '#18181b' : '#fff',
                color: 'var(--text)',
                fontSize: '1.13rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
              }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
              <button className="btn-primary" onClick={next} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Next</button>
            </div>
          </StepCard>
        )}
        {step === 5 && (
          <StepCard title="What's your name?">
            <input name="name" onChange={handleChange} placeholder="Full Name" autoFocus />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
              <button className="btn-option" onClick={back} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 700, fontSize: '1.13rem' }}>Back</button>
              <button className="btn-primary" onClick={next} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Next</button>
            </div>
          </StepCard>
        )}
        {step === 6 && (
          <StepCard title="What's your email?">
            <input type="email" name="email" onChange={handleChange} placeholder="you@example.com" autoFocus />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
              <button className="btn-option" onClick={back} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 700, fontSize: '1.13rem' }}>Back</button>
              <button className="btn-primary" onClick={next} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Next</button>
            </div>
          </StepCard>
        )}
        {step === 7 && (
          <StepCard title="What's your phone number?">
            <input name="phone" onChange={handleChange} placeholder="(555) 555-5555" autoFocus />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
              <button className="btn-option" onClick={back} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 700, fontSize: '1.13rem' }}>Back</button>
              <button className="btn-primary" onClick={next} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Next</button>
            </div>
          </StepCard>
        )}
        {step === 8 && (
          <StepCard title="How did you hear about us?">
            <input name="how" onChange={handleChange} placeholder="Google, Friend, etc." autoFocus />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
              <button className="btn-option" onClick={back} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 700, fontSize: '1.13rem' }}>Back</button>
              <button className="btn-primary" onClick={next} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Next</button>
            </div>
          </StepCard>
        )}
        {step === 9 && (
          <form onSubmit={handleSubmit}>
            <StepCard title="Any concerns working with a homebuyer?">
              <input name="concern" onChange={handleChange} placeholder="Optional..." autoFocus />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
                <button className="btn-option" onClick={back} style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 700, fontSize: '1.13rem' }}>Back</button>
                <button type="submit" className="btn-primary" style={{ minWidth: 120, borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.13rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(90deg, var(--primary), var(--accent))', color: '#fff', border: 'none', boxShadow: '0 4px 16px rgba(124,58,237,0.13)' }}>Submit</button>
              </div>
            </StepCard>
          </form>
        )}
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginTop: 64, textAlign: "center" }}>
        <h2 style={{ fontWeight: 900, fontSize: "2.2rem", marginBottom: 18, fontFamily: "Inter, system-ui, sans-serif", color: theme === 'dark' ? '#fff' : 'var(--primary-dark)' }}>How It Works</h2>
        <p style={{ color: theme === 'dark' ? '#e5e7eb' : 'var(--text)', opacity: 0.8, marginBottom: 32, fontSize: "1.15rem", fontFamily: 'Inter, system-ui, sans-serif' }}>Our Simple 3 Step Process</p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.2rem",
          justifyItems: "center"
        }}>
          {[
            {
              img: "/s1.jpg",
              title: "Fill Out the Online Form",
              desc: "One of our home buying specialists will call with your offer."
            },
            {
              img: "/s2.jpg",
              title: "Pick Your Closing Date",
              desc: "There’s no financing fall-through risk so you can confidently buy your next home."
            },
            {
              img: "/s3.jpg",
              title: "Get Paid and Move On",
              desc: "We pay more. Get cash in your pocket and move on to the next chapter in your life."
            }
          ].map((step, i) => (
            <div
              key={i}
              className="card how-card"
              tabIndex={0}
              style={{
                width: 320,
                minHeight: 360,
                height: 380,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '2rem 1.5rem',
                margin: 0,
                boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)',
                background: theme === 'dark' ? 'rgba(35,39,47,0.92)' : 'rgba(255,255,255,0.98)',
                borderRadius: 16,
                transition: 'box-shadow 0.18s, transform 0.18s',
                outline: 'none',
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.03)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(124,58,237,0.22)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)';
              }}
              onFocus={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px var(--primary)';
              }}
              onBlur={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)';
              }}
            >
              <Image
                src={step.img}
                alt={step.title}
                width={320}
                height={120}
                style={{ width: "100%", height: 120, objectFit: 'cover', borderRadius: "1.2rem", marginBottom: 18 }}
                priority={i === 0}
              />
              <h3 style={{ fontWeight: 700, fontSize: "1.18rem", marginBottom: 8, textAlign: 'center', fontFamily: "Inter, sans-serif", letterSpacing: "0.01em" }}>{step.title}</h3>
              <p style={{ color: "var(--text)", opacity: 0.7, marginTop: 8, textAlign: 'center', wordBreak: 'break-word', fontSize: '1.08rem', fontWeight: 500 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ marginTop: 80, textAlign: "center" }}>
        <h2 style={{ fontWeight: 900, fontSize: "2rem", marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#fff' : 'var(--primary-dark)' }}>People We’ve Served — And Why It Matters</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem"
        }}>
          {[
            { src: "/mark.png", name: "Mark" },
            { src: "/tony.png", name: "Tony" },
            { src: "/enrique.png", name: "Enrique" },
            { src: "/grace.png", name: "Grace" },
            { src: "/laurie.png", name: "Laurie" },
            { src: "/nicholas.png", name: "Nicholas" },
          ].map((t, i) => (
            <div
              key={i}
              className="card testimonial-card"
              tabIndex={0}
              style={{
                padding: 0,
                overflow: "hidden",
                maxWidth: 260,
                minWidth: 220,
                minHeight: 280,
                height: 320,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                background: theme === 'dark' ? 'rgba(35,39,47,0.92)' : 'rgba(255,255,255,0.98)',
                boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)',
                margin: '0 auto',
                wordBreak: 'break-word',
                color: theme === 'dark' ? '#f3f4f6' : 'var(--text)',
                fontFamily: 'Inter, system-ui, sans-serif',
                borderRadius: 16,
                transition: 'box-shadow 0.18s, transform 0.18s',
                outline: 'none',
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.03)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(124,58,237,0.22)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)';
              }}
              onFocus={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px var(--primary)';
              }}
              onBlur={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)';
              }}
            >
              <Image
                src={t.src}
                alt={t.name}
                width={260}
                height={180}
                style={{ width: "100%", height: 180, objectFit: 'cover', borderRadius: "1.2rem 1.2rem 0 0" }}
                loading="lazy"
              />
              <div style={{
                fontWeight: 700,
                marginTop: 10,
                marginBottom: 10,
                textAlign: 'center',
                width: '100%',
                fontSize: '1.08rem',
                whiteSpace: 'pre-line',
                overflowWrap: 'break-word',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                lineHeight: 1.3,
                padding: '0 0.5rem',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}>{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROPERTY PHOTOS */}
      <section style={{ marginTop: 64, textAlign: "center" }}>
        <h2 style={{ fontWeight: 900, fontSize: "2rem", marginBottom: 32, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#fff' : 'var(--primary-dark)' }}>We’ve Helped with Real Properties Like These</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          justifyItems: "center"
        }}>
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
          ].map((src, i) => (
            <div
              key={i}
              className="card property-card"
              tabIndex={0}
              style={{
                padding: 0,
                overflow: "hidden",
                maxWidth: 260,
                minWidth: 220,
                minHeight: 200,
                height: 200,
                margin: '0 auto',
                boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)',
                background: theme === 'dark' ? 'rgba(35,39,47,0.92)' : 'rgba(255,255,255,0.98)',
                borderRadius: 16,
                transition: 'box-shadow 0.18s, transform 0.18s',
                outline: 'none',
                color: theme === 'dark' ? '#f3f4f6' : 'var(--text)',
                fontFamily: 'Inter, system-ui, sans-serif',
                cursor: 'pointer',
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.03)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(124,58,237,0.22)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)';
              }}
              onFocus={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px var(--primary)';
              }}
              onBlur={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)';
              }}
            >
              <Image
                src={src}
                alt={`property ${i}`}
                width={260}
                height={180}
                style={{ width: "100%", height: 180, objectFit: 'cover', borderRadius: "1.2rem 1.2rem 0 0" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section style={{ marginTop: 80, textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <div
          className="card trust-block"
          tabIndex={0}
          style={{
            background: theme === 'dark'
              ? 'rgba(35,39,47,0.92)'
              : 'rgba(255,255,255,0.98)',
            borderRadius: 28,
            padding: '2.7rem 2.2rem',
            maxWidth: 700,
            width: '100%',
            boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 8px 32px rgba(124,58,237,0.10)',
            border: '2.5px solid var(--primary)',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: theme === 'dark' ? '#f3f4f6' : 'var(--text)',
            fontFamily: 'Inter, system-ui, sans-serif',
            transition: 'box-shadow 0.18s, transform 0.18s',
            outline: 'none',
          }}
          onMouseOver={e => {
            (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(124,58,237,0.22)';
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 8px 32px rgba(124,58,237,0.10)';
          }}
          onFocus={e => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px var(--primary)';
          }}
          onBlur={e => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 8px 32px rgba(124,58,237,0.10)';
          }}
        >
          <h2 style={{ fontWeight: 900, fontSize: '1.7rem', textAlign: 'center', marginBottom: 24, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#fff' : 'var(--primary-dark)' }}>Why Sellers Trust Us</h2>
          <ul style={{
            maxWidth: 600,
            margin: '0 auto',
            textAlign: 'left',
            lineHeight: 1.7,
            fontSize: '1.13rem',
            fontWeight: 600,
            padding: 0,
            listStyle: 'none',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            {[
              'Cancel anytime before signing',
              'You pay $0 in hidden fees',
              'Closing is contingent on clean title',
              'You choose your timeline',
              'Everything is explained clearly — no pressure',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  background: theme === 'dark' ? 'rgba(124,58,237,0.10)' : 'rgba(124,58,237,0.04)',
                  borderRadius: 12,
                  padding: '0.85rem 1.1rem',
                  margin: 0,
                  fontSize: '1.09rem',
                  color: theme === 'dark' ? '#f3f4f6' : 'var(--text)',
                  fontWeight: 600,
                  transition: 'background 0.18s',
                }}
              >
                <span style={{ fontSize: 22, color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 28 }}>✔️</span>
                <span style={{ fontWeight: 600, fontSize: '1.09rem', color: theme === 'dark' ? '#f3f4f6' : 'var(--text)', lineHeight: 1.5 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ SECTION - interactive accordion, only one open at a time */}
      <section style={{ marginTop: 80, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ fontWeight: 900, fontSize: "2.1rem", textAlign: "center", marginBottom: 18, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#fff' : 'var(--primary-dark)' }}>Frequently Asked Questions</h2>
        <p style={{ textAlign: "center", color: theme === 'dark' ? '#e5e7eb' : 'var(--text)', opacity: 0.8, marginBottom: 32, fontSize: "1.13rem", fontFamily: 'Inter, system-ui, sans-serif' }}>We Have The Answers</p>
        {[
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
        ].map(({ q, a }, i) => (
          <div
            key={i}
            className="faq card"
            tabIndex={0}
            style={{
              marginBottom: 28,
              border: theme === 'dark' ? '2px solid #7c3aed' : '1.5px solid var(--faq-border)',
              borderRadius: '1.5rem',
              background: theme === 'dark' ? 'rgba(35,39,47,0.92)' : 'rgba(255,255,255,0.98)',
              boxShadow: faqOpen === i ? (theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 8px 32px rgba(124,58,237,0.13)') : (theme === 'dark' ? '0 4px 24px rgba(31,38,135,0.10)' : '0 4px 24px rgba(31,38,135,0.07)'),
              transition: 'box-shadow 0.25s, border 0.18s, background 0.18s',
              overflow: 'hidden',
              outline: 'none',
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.01)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(124,58,237,0.22)';
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = faqOpen === i ? (theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 8px 32px rgba(124,58,237,0.13)') : (theme === 'dark' ? '0 4px 24px rgba(31,38,135,0.10)' : '0 4px 24px rgba(31,38,135,0.07)');
            }}
            onFocus={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px var(--primary)';
            }}
            onBlur={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = faqOpen === i ? (theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 8px 32px rgba(124,58,237,0.13)') : (theme === 'dark' ? '0 4px 24px rgba(31,38,135,0.10)' : '0 4px 24px rgba(31,38,135,0.07)');
            }}
          >
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
                  const next = document.getElementById(`faq-btn-${(i + 1) % 7}`);
                  next && (next as HTMLButtonElement).focus();
                }
                if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  const prev = document.getElementById(`faq-btn-${(i + 6) % 7}`);
                  prev && (prev as HTMLButtonElement).focus();
                }
              }}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                outline: 'none',
                fontWeight: 900,
                fontSize: '1.22rem',
                color: faqOpen === i ? (theme === 'dark' ? '#fff' : 'var(--primary)') : (theme === 'dark' ? '#c7bfff' : 'var(--primary)'),
                borderBottom: faqOpen === i ? '2px solid var(--primary)' : '1.5px solid var(--faq-border)',
                borderRadius: '0.7rem',
                padding: '1.1rem 1.2rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'color 0.2s, border 0.2s, background 0.18s',
                boxShadow: faqOpen === i ? '0 0 0 2.5px var(--primary)' : 'none',
                outlineOffset: 0,
                letterSpacing: '-0.01em',
              }}
              tabIndex={0}
              onFocus={e => {
                e.currentTarget.style.boxShadow = '0 0 0 2.5px var(--primary)';
              }}
              onBlur={e => {
                e.currentTarget.style.boxShadow = faqOpen === i ? '0 0 0 2.5px var(--primary)' : 'none';
              }}
            >
              {q}
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              style={{
                maxHeight: faqOpen === i ? 400 : 0,
                overflow: 'hidden',
                opacity: faqOpen === i ? 1 : 0,
                marginTop: faqOpen === i ? 10 : 0,
                transition: 'max-height 0.38s cubic-bezier(.4,0,.2,1), opacity 0.25s, margin-top 0.22s',
                lineHeight: 1.7,
                color: theme === 'dark' ? '#e5e7eb' : 'var(--text)',
                fontWeight: 500,
                fontSize: '1.13rem',
                padding: faqOpen === i ? '0.9rem 1.2rem 1.1rem 1.2rem' : '0 1.2rem',
                background: theme === 'dark' ? 'rgba(124,58,237,0.08)' : 'rgba(124,58,237,0.04)',
                border: 'none',
                boxSizing: 'border-box',
                willChange: 'max-height, opacity, margin-top',
                borderRadius: '0 0 1.2rem 1.2rem',
              }}
              aria-hidden={faqOpen !== i}
            >
              {faqOpen === i && (
                <span style={{ display: 'block', paddingRight: 4 }}>{a}</span>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
