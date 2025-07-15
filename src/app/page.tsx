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
      maxWidth: '700px',
      margin: '2rem auto',
      padding: '2rem',
      background: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{title}</h2>
      {children}
    </div>
  );

  const Button = (props: any) => (
    <button {...props} style={{
      width: '100%',
      padding: '1rem',
      marginTop: '1rem',
      border: 'none',
      backgroundColor: '#007aff',
      color: '#fff',
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      cursor: 'pointer'
    }}>
      {props.children}
    </button>
  );

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', background: '#f5f6f7' }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Need to sell your home fast?</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Get a cash offer in just 7 days</p>
        {step === 0 && (
          <button onClick={next} style={{
            marginTop: '1.5rem',
            padding: '1rem 2rem',
            backgroundColor: '#007aff',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}>
            Get My Cash Offer
          </button>
        )}
      </section>

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
            <Button onClick={next}>Next</Button>
          </StepCard>
        )}
        {step === 5 && (
          <StepCard title="What's your name?">
            <input name="name" onChange={handleChange} placeholder="Full Name" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={back}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </StepCard>
        )}
        {step === 6 && (
          <StepCard title="What's your email?">
            <input type="email" name="email" onChange={handleChange} placeholder="you@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={back}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </StepCard>
        )}
        {step === 7 && (
          <StepCard title="What's your phone number?">
            <input name="phone" onChange={handleChange} placeholder="(555) 555-5555" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={back}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </StepCard>
        )}
        {step === 8 && (
          <StepCard title="How did you hear about us?">
            <input name="how" onChange={handleChange} placeholder="Google, Friend, etc." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={back}>Back</Button>
              <Button onClick={next}>Next</Button>
            </div>
          </StepCard>
        )}
        {step === 9 && (
          <form onSubmit={handleSubmit}>
            <StepCard title="Any concerns working with a homebuyer?">
              <input name="concern" onChange={handleChange} placeholder="Optional..." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button type="button" onClick={back}>Back</Button>
                <Button type="submit">Submit</Button>
              </div>
            </StepCard>
          </form>
        )}
        {step === 10 && (
          <StepCard title="Hang tight… we're reviewing your info!">
            <p style={{ marginTop: '1rem', color: '#4b5563' }}>We’ll get back to you shortly with a cash offer.</p>
          </StepCard>
        )}
      </section>
    </main>
  );
}
