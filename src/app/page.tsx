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
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
await fetch('https://formspree.io/f/xnnzagjb', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(formData)
});
next();
};

const StepCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
<div className="card">
<h2>{title}</h2>
{children}
</div>
);

const Button = (props: any) => (
<button {...props} className="btn-option">
{props.children}
</button>
);

return (
<main style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
<header
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    background: 'var(--card)',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    borderBottom: 'none',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  }}
>
  <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
    <img src="/logo.png" alt="Luna Haven Logo" style={{ height: '40px', width: 'auto', borderRadius: '8px' }} />
    <span style={{
      fontWeight: 700,
      fontSize: '1.25rem',
      color: 'var(--text)',
      letterSpacing: '0.02em',
      fontFamily: 'Inter, sans-serif'
    }}>
      Luna Haven
    </span>
  </a>
  <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
    <a href="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>Home</a>
    <a href="/about-us" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>About Us</a>
    <button
      onClick={toggleTheme}
      className="btn-primary"
      style={{
        marginLeft: '1rem',
        background: theme === 'dark' ? '#334155' : '#2563eb',
        borderRadius: '8px',
        fontWeight: 600,
        fontSize: '1rem',
        padding: '0.5rem 1rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
      }}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  </nav>
</header>

<section className="hero">
<h1>Need to sell your home fast?</h1>
<p style={{ color: '#4b5563', marginTop: '1rem' }}>Get a cash offer in just 7 days</p>
<p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.5rem' }}>
Operating since June 2023 — 10+ homeowners helped.
</p>
{step === 0 && (
<button onClick={next} className="btn-primary" style={{ marginTop: '1.5rem' }}>
Get My Cash Offer
</button>
)}
</section>

{/* FORM */}
<section>
{step === 1 && (
<StepCard title="Why are you looking to sell?">
{['Job relocation', 'Inherited property', 'Facing foreclosure', 'Too many repairs', 'Other'].map(opt => (
<Button key={opt} onClick={() => handleOption('motivation', opt)}>{opt}</Button>
))}
</StepCard>
)}
{step === 2 && (
<StepCard title="Does the property need repairs?">
{['Excellent', 'Minor repairs', 'Major repairs', 'Needs full rehab'].map(opt => (
<Button key={opt} onClick={() => handleOption('repairs', opt)}>{opt}</Button>
))}
</StepCard>
)}
{step === 3 && (
<StepCard title="What’s your timeline to sell?">
{['Immediately', 'Within 30 days', '1–3 months', 'Just exploring'].map(opt => (
<Button key={opt} onClick={() => handleOption('timeline', opt)}>{opt}</Button>
))}
</StepCard>
)}
{step === 4 && (
<StepCard title="What’s the property address?">
<input name="address" onChange={handleChange} placeholder="123 Main St" />
<div className="nav-btns">
<button className="btn-primary" onClick={next}>Next</button>
</div>
</StepCard>
)}
{step === 5 && (
<StepCard title="What's your name?">
<input name="name" onChange={handleChange} placeholder="Full Name" />
<div className="nav-btns">
<button className="btn-primary" onClick={back}>Back</button>
<button className="btn-primary" onClick={next}>Next</button>
</div>
</StepCard>
)}
{step === 6 && (
<StepCard title="What's your email?">
<input type="email" name="email" onChange={handleChange} placeholder="you@example.com" />
<div className="nav-btns">
<button className="btn-primary" onClick={back}>Back</button>
<button className="btn-primary" onClick={next}>Next</button>
</div>
</StepCard>
)}
{step === 7 && (
<StepCard title="What's your phone number?">
<input name="phone" onChange={handleChange} placeholder="(555) 555-5555" />
<div className="nav-btns">
<button className="btn-primary" onClick={back}>Back</button>
<button className="btn-primary" onClick={next}>Next</button>
</div>
</StepCard>
)}
{step === 8 && (
<StepCard title="How did you hear about us?">
<input name="how" onChange={handleChange} placeholder="Google, Friend, etc." />
<div className="nav-btns">
<button className="btn-primary" onClick={back}>Back</button>
<button className="btn-primary" onClick={next}>Next</button>
</div>
</StepCard>
)}
{step === 9 && (
<form onSubmit={handleSubmit}>
<StepCard title="Any concerns working with a homebuyer?">
<input name="concern" onChange={handleChange} placeholder="Optional..." />
<div className="nav-btns">
<button type="button" className="btn-primary" onClick={back}>Back</button>
<button type="submit" className="btn-submit">Submit</button>
</div>
</StepCard>
</form>
)}
{step === 10 && (
<StepCard title="Hang tight… we're reviewing your info!">
<p style={{ color: '#6b7280', marginTop: '1rem' }}>We’ll get back to you shortly with a cash offer.</p>
</StepCard>
)}
</section>

{/* HOW IT WORKS */}
<section style={{ marginTop: '4rem', textAlign: 'center' }}>
<h2>How It Works</h2>
<p style={{ color: '#6b7280', marginBottom: '2rem' }}>Our Simple 3 Step Process</p>
<div style={{
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
gap: '1.5rem',
justifyItems: 'center'
}}>
{/* STEP 1 */}
<div className="card" style={{ maxWidth: '320px' }}>
<img src="/s1.jpg" alt="Step 1" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
<h3 style={{ fontWeight: 600 }}>Fill Out the Online Form</h3>
<p style={{ color: '#6b7280', marginTop: '0.5rem' }}>One of our home buying specialists will call with your offer.</p>
</div>
{/* STEP 2 */}
<div className="card" style={{ maxWidth: '320px' }}>
<img src="/s2.jpg" alt="Step 2" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
<h3 style={{ fontWeight: 600 }}>Pick Your Closing Date</h3>
<p style={{ color: '#6b7280', marginTop: '0.5rem' }}>There’s no financing fall-through risk so you can confidently buy your next home.</p>
</div>
{/* STEP 3 */}
<div className="card" style={{ maxWidth: '320px' }}>
<img src="/s3.jpg" alt="Step 3" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
<h3 style={{ fontWeight: 600 }}>Get Paid and Move On</h3>
<p style={{ color: '#6b7280', marginTop: '0.5rem' }}>We pay more. Get cash in your pocket and move on to the next chapter in your life.</p>
</div>
</div>
</section>
{/* VISUAL TESTIMONIALS */}
<section style={{ marginTop: '5rem', textAlign: 'center' }}>
  <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '2rem' }}>
    People We’ve Served — And Why It Matters
  </h2>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  }}>
    {[
      { src: '/mark.png', name: 'Mark' },
      { src: '/tony.png', name: 'Tony' },
      { src: '/enrique.png', name: 'Enrique' },
      { src: '/grace.png', name: 'Grace' },
      { src: '/laurie.png', name: 'Laurie' },
      { src: '/nicholas.png', name: 'Nicholas' }
    ].map((t, i) => (
      <div key={i}>
        <img src={t.src} alt={t.name} style={{ width: '100%', borderRadius: '10px' }} />
        <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>{t.name}</div>
      </div>
    ))}
  </div>
</section>

{/* PROPERTY PHOTOS */}
<section style={{ marginTop: '4rem', textAlign: 'center' }}>
<h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '2rem' }}>We’ve Helped with Real Properties Like These</h2>
<div style={{
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
gap: '1.5rem'
}}>
{['/brent.jpg',
'/darryl.png',
'/109.png',
'/516-518.jpg',
'/zv.png',
'/zw.png',
'/zx.png',
'/zy.png',
'/zz.jpg'].map((src, i) => (
<img key={i} src={src} alt={`property ${i}`} style={{ width: '100%', borderRadius: '10px' }} />
))}
</div>
</section>

{/* TRUST BLOCK */}
<section style={{ marginTop: '5rem', background: 'var(--card)', padding: '2rem', borderRadius: '12px' }}>
<h2 style={{ fontSize: '1.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '1.5rem' }}>Why Sellers Trust Us</h2>
<ul style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left', lineHeight: '1.75' }}>
<li>✅ Cancel anytime before signing</li>
<li>✅ You pay $0 in hidden fees</li>
<li>✅ Closing is contingent on clean title</li>
<li>✅ You choose your timeline</li>
<li>✅ Everything is explained clearly — no pressure</li>
</ul>
</section>

{/* FOOTER */}
{/* FAQ SECTION */}
<section style={{ marginTop: '5rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
  <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
  <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2rem' }}>We Have The Answers</p>
  {[
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
  ].map(({ q, a }, i) => (
    <details key={i} style={{
      background: 'var(--card)',
      color: 'var(--text)',
      borderRadius: '8px',
      marginBottom: '1rem',
      padding: '1rem',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      cursor: 'pointer'
    }}>
      <summary style={{ fontWeight: 600, fontSize: '1rem', listStyle: 'none' }}>{q}</summary>
      <p style={{ marginTop: '0.75rem', lineHeight: '1.6', color: 'var(--text)' }}>{a}</p>
    </details>
  ))}
</section>

<footer style={{ background: '#f9fafb', padding: '2rem 1rem', marginTop: '5rem' }}>
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
    {/* Logo */}
    <div style={{ flex: '1', minWidth: '250px', marginBottom: '1.5rem' }}>
      <img src="/logo.png" alt="Luna Haven Logo" style={{ height: '200px', marginBottom: '1rem' }} />
    </div>

    {/* Quick Links */}
    <div style={{ flex: '1', minWidth: '250px', marginBottom: '1.5rem' }}>
      <h4 style={{ color: '#1e3a8a', fontWeight: 600, marginBottom: '1rem', borderBottom: '2px solid #e11d48', display: 'inline-block' }}>QUICK LINKS</h4>
      <div><a href="/privacy-policy" style={{ color: '#1e40af', textDecoration: 'underline' }}>Privacy Policy</a></div>
    </div>

    {/* Contact Info */}
    <div style={{ flex: '1', minWidth: '250px', marginBottom: '1.5rem' }}>
      <h4 style={{ color: '#1e3a8a', fontWeight: 600, marginBottom: '1rem', borderBottom: '2px solid #e11d48', display: 'inline-block' }}>CONTACT US</h4>
      <div style={{ marginBottom: '0.5rem' }}>
        📞 <a href="tel:9152747574" style={{ color: '#1e40af', textDecoration: 'underline' }}>(915) 274-7574</a>
      </div>
      <div>
        📧 <a href="mailto:info@homecashofferpro.com" style={{ color: '#1e40af', textDecoration: 'underline' }}>support@lunahaven.net</a>
      </div>
    </div>
  </div>

  <div style={{ textAlign: 'center', color: '#6b7280', marginTop: '2rem' }}>
    Luna Haven LLC is a legally registered homebuyer based in [Your State].<br />
    &copy; {new Date().getFullYear()} Luna Haven LLC. All rights reserved.
  </div>
</footer>
</main>
);
}
