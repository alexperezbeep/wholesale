
'use client';
import React, { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    motivation: '',
    repairs: '',
    timeline: '',
    address: '',
    name: '',
    email: '',
    phone: '',
    how: '',
    concern: ''
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOption = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    next();
  };

"use client";
import React, { useState } from "react";
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

  // Modern Option Button
  const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props} className="btn-option" style={{ fontSize: "1.12rem", marginBottom: 18 }}>
      {props.children}
    </button>
  );

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <h1 style={{ fontWeight: 900, fontSize: "2.8rem", marginBottom: 12, letterSpacing: "-0.02em", textAlign: "center" }}>
          Sell Your Home <span style={{ color: "var(--primary)" }}>Fast</span> &amp; <span style={{ color: "var(--accent)" }}>Easy</span>
        </h1>
        <p style={{ color: "var(--text)", fontSize: "1.25rem", opacity: 0.85, marginBottom: 8, textAlign: "center" }}>
          Get a cash offer in just <b>7 days</b> — no repairs, no fees, no stress.
        </p>
        <p style={{ fontSize: "1.05rem", color: "var(--text)", opacity: 0.7, marginBottom: 24, textAlign: "center" }}>
          Operating since June 2023 — <b>10+ homeowners helped</b>.
        </p>
        {step === 0 && (
          <button onClick={next} className="btn-primary" style={{ marginTop: 18, fontSize: "1.18rem" }}>
            Get My Cash Offer
          </button>
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
            <input name="address" onChange={handleChange} placeholder="123 Main St" autoFocus />
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
              <button className="btn-primary" onClick={next} style={{ minWidth: 120 }}>Next</button>
            </div>
          </StepCard>
        )}
        {step === 5 && (
          <StepCard title="What's your name?">
            <input name="name" onChange={handleChange} placeholder="Full Name" autoFocus />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
              <button className="btn-option" onClick={back} style={{ minWidth: 120 }}>Back</button>
              <button className="btn-primary" onClick={next} style={{ minWidth: 120 }}>Next</button>
            </div>
          </StepCard>
        )}
        {step === 6 && (
          <StepCard title="What's your email?">
            <input type="email" name="email" onChange={handleChange} placeholder="you@example.com" autoFocus />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
              <button className="btn-option" onClick={back} style={{ minWidth: 120 }}>Back</button>
              <button className="btn-primary" onClick={next} style={{ minWidth: 120 }}>Next</button>
            </div>
          </StepCard>
        )}
        {step === 7 && (
          <StepCard title="What's your phone number?">
            <input name="phone" onChange={handleChange} placeholder="(555) 555-5555" autoFocus />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
              <button className="btn-option" onClick={back} style={{ minWidth: 120 }}>Back</button>
              <button className="btn-primary" onClick={next} style={{ minWidth: 120 }}>Next</button>
            </div>
          </StepCard>
        )}
        {step === 8 && (
          <StepCard title="How did you hear about us?">
            <input name="how" onChange={handleChange} placeholder="Google, Friend, etc." autoFocus />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
              <button className="btn-option" onClick={back} style={{ minWidth: 120 }}>Back</button>
              <button className="btn-primary" onClick={next} style={{ minWidth: 120 }}>Next</button>
            </div>
          </StepCard>
        )}
        {step === 9 && (
          <form onSubmit={handleSubmit}>
            <StepCard title="Any concerns working with a homebuyer?">
              <input name="concern" onChange={handleChange} placeholder="Optional..." autoFocus />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
                <button className="btn-option" onClick={back} style={{ minWidth: 120 }}>Back</button>
                <button type="submit" className="btn-primary" style={{ minWidth: 120 }}>Submit</button>
              </div>
            </StepCard>
          </form>
        )}
        {step === 10 && (
          <StepCard title="Hang tight… we're reviewing your info!">
            <p style={{ color: "var(--primary)", marginTop: 18, textAlign: "center" }}>
              We’ll get back to you shortly with a cash offer.
            </p>
          </StepCard>
        )}
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginTop: 64, textAlign: "center" }}>
        <h2 style={{ fontWeight: 900, fontSize: "2.2rem", marginBottom: 18 }}>How It Works</h2>
        <p style={{ color: "var(--text)", opacity: 0.7, marginBottom: 32, fontSize: "1.15rem" }}>Our Simple 3 Step Process</p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.2rem",
          justifyItems: "center"
        }}>
          {/* STEP 1 */}
          <div className="card" style={{ maxWidth: 340 }}>
            <img src="/s1.jpg" alt="Step 1" style={{ width: "100%", borderRadius: "1.2rem", marginBottom: 18, boxShadow: "0 2px 12px rgba(124,58,237,0.08)" }} />
            <h3 style={{ fontWeight: 700, fontSize: "1.18rem" }}>Fill Out the Online Form</h3>
            <p style={{ color: "var(--text)", opacity: 0.7, marginTop: 8 }}>One of our home buying specialists will call with your offer.</p>
          </div>
          {/* STEP 2 */}
          <div className="card" style={{ maxWidth: 340 }}>
            <img src="/s2.jpg" alt="Step 2" style={{ width: "100%", borderRadius: "1.2rem", marginBottom: 18, boxShadow: "0 2px 12px rgba(124,58,237,0.08)" }} />
            <h3 style={{ fontWeight: 700, fontSize: "1.18rem" }}>Pick Your Closing Date</h3>
            <p style={{ color: "var(--text)", opacity: 0.7, marginTop: 8 }}>There’s no financing fall-through risk so you can confidently buy your next home.</p>
          </div>
          {/* STEP 3 */}
          <div className="card" style={{ maxWidth: 340 }}>
            <img src="/s3.jpg" alt="Step 3" style={{ width: "100%", borderRadius: "1.2rem", marginBottom: 18, boxShadow: "0 2px 12px rgba(124,58,237,0.08)" }} />
            <h3 style={{ fontWeight: 700, fontSize: "1.18rem" }}>Get Paid and Move On</h3>
            <p style={{ color: "var(--text)", opacity: 0.7, marginTop: 8 }}>We pay more. Get cash in your pocket and move on to the next chapter in your life.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ marginTop: 80, textAlign: "center" }}>
        <h2 style={{ fontWeight: 900, fontSize: "2rem", marginBottom: 32 }}>People We’ve Served — And Why It Matters</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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
            <div key={i} className="card" style={{ padding: 0, overflow: "hidden", maxWidth: 260 }}>
              <img src={t.src} alt={t.name} style={{ width: "100%", borderRadius: "1.2rem 1.2rem 0 0" }} />
              <div style={{ fontWeight: 700, marginTop: 10, marginBottom: 10 }}>{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROPERTY PHOTOS */}
      <section style={{ marginTop: 64, textAlign: "center" }}>
        <h2 style={{ fontWeight: 900, fontSize: "2rem", marginBottom: 32 }}>We’ve Helped with Real Properties Like These</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem"
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
            <div key={i} className="card" style={{ padding: 0, overflow: "hidden", maxWidth: 260 }}>
              <img src={src} alt={`property ${i}`} style={{ width: "100%", borderRadius: "1.2rem" }} />
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="card" style={{ marginTop: 80, background: "var(--glass-bg)", boxShadow: "0 8px 32px rgba(124,58,237,0.10)", border: "2px solid var(--primary)", maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ fontWeight: 900, fontSize: "1.7rem", textAlign: "center", marginBottom: 24 }}>Why Sellers Trust Us</h2>
        <ul style={{ maxWidth: 600, margin: "0 auto", textAlign: "left", lineHeight: 1.75, fontSize: "1.13rem", fontWeight: 600 }}>
          <li>✅ Cancel anytime before signing</li>
          <li>✅ You pay $0 in hidden fees</li>
          <li>✅ Closing is contingent on clean title</li>
          <li>✅ You choose your timeline</li>
          <li>✅ Everything is explained clearly — no pressure</li>
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section style={{ marginTop: 80, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ fontWeight: 900, fontSize: "2.1rem", textAlign: "center", marginBottom: 18 }}>Frequently Asked Questions</h2>
        <p style={{ textAlign: "center", color: "var(--text)", opacity: 0.7, marginBottom: 32, fontSize: "1.13rem" }}>We Have The Answers</p>
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
        ].map(({ q, a }, i: number) => (
          <details key={i} className="faq" style={{ cursor: "pointer" }}>
            <summary style={{ fontWeight: 800, fontSize: "1.13rem", listStyle: "none" }}>{q}</summary>
            <p style={{ marginTop: 14, lineHeight: 1.6, color: "var(--text)", fontWeight: 500 }}>{a}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
    <details key={i} className="faq" style={{ cursor: 'pointer' }}>
