'use client';
import React, { useState } from 'react';

export default function Home() {
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
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>{title}</h2>
      {children}
    </div>
  );

  const Button = (props: any) => (
    <button {...props} style={{
      display: 'block',
      width: '100%',
      padding: '0.75rem 1rem',
      marginBottom: '0.75rem',
      background: '#eff6ff',
      border: 'none',
      borderRadius: '8px',
      color: '#1e3a8a',
      fontWeight: 500,
      cursor: 'pointer'
    }}>
      {props.children}
    </button>
  );

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', padding: '2rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Need to sell your home fast?</h1>
        <p style={{ color: '#4b5563', marginTop: '1rem' }}>Get a cash offer in just 7 days</p>
        {step === 0 && (
          <button onClick={next} style={{
            background: '#2563eb',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontWeight: 500,
            marginTop: '1.5rem',
            cursor: 'pointer'
          }}>
            Get My Cash Offer
          </button>
        )}
      </section>

      {/* Multi-Step Form */}
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
            <input name="address" onChange={handleChange} placeholder="123 Main St" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
            <div style={{ textAlign: 'right', marginTop: '1rem' }}>
              <Button onClick={next}>Next</Button>
            </div>
          </StepCard>
        )}
        {step === 5 && (
          <StepCard title="What's your name?">
            <input name="name" onChange={handleChange} placeholder="Full Name" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <Button onClick={back}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </StepCard>
        )}
        {step === 6 && (
          <StepCard title="What's your email?">
            <input type="email" name="email" onChange={handleChange} placeholder="you@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <Button onClick={back}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </StepCard>
        )}
        {step === 7 && (
          <StepCard title="What's your phone number?">
            <input name="phone" onChange={handleChange} placeholder="(555) 555-5555" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <Button onClick={back}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </StepCard>
        )}
        {step === 8 && (
          <StepCard title="How did you hear about us?">
            <input name="how" onChange={handleChange} placeholder="Google, Friend, etc." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <Button onClick={back}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </StepCard>
        )}
        {step === 9 && (
          <form onSubmit={handleSubmit}>
            <StepCard title="Any concerns working with a homebuyer?">
              <input name="concern" onChange={handleChange} placeholder="Optional..." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                <Button type="button" onClick={back}>Back</Button>
                <Button type="submit">Submit</Button>
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

      {/* New Image-Based Testimonials */}
      <section style={{ marginTop: '5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem' }}>What Our Sellers Say</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {['mark.png', 'tony.png', 'enrique.png', 'grace.png', 'laurie.png', 'nicholas.png'].map((src, i) => (
            <img key={i} src={`/${src}`} alt={`testimonial-${i}`} style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }} />
          ))}
        </div>
      </section>

      {/* Proudly Display Property Images */}
      <section style={{ marginTop: '5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem' }}>Recent Properties We've Worked With</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {['brent.jpg', 'darryl.png', '109.png', '516-518.jpg'].map((src, i) => (
            <img key={i} src={`/${src}`} alt={`property-${i}`} style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }} />
          ))}
        </div>
      </section>
    </main>
  );
}
