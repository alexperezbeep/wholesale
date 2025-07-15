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
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      {children}
    </div>
  );

  return (
    <main className="max-w-3xl mx-auto py-16 px-4 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Sell Your House for Cash</h1>
        <p className="text-gray-600">We buy houses fast in any condition. No fees. No agents. No hassle.</p>
        {step === 0 && (
          <button onClick={next} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium">
            Get My Cash Offer
          </button>
        )}
      </section>

      {/* Multi-step Form */}
      <section>
        {step === 1 && (
          <StepCard title="Why are you looking to sell?">
            <div className="space-y-3">
              {['Job relocation', 'Inherited property', 'Facing foreclosure', 'Too many repairs', 'Other'].map(option => (
                <button
                  key={option}
                  onClick={() => handleOption('motivation', option)}
                  className="w-full bg-blue-100 hover:bg-blue-200 text-blue-900 py-3 px-4 rounded-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          </StepCard>
        )}

        {step === 2 && (
          <StepCard title="Does the property need repairs?">
            <div className="space-y-3">
              {['Excellent', 'Minor repairs', 'Major repairs', 'Needs full rehab'].map(option => (
                <button
                  key={option}
                  onClick={() => handleOption('repairs', option)}
                  className="w-full bg-blue-100 hover:bg-blue-200 text-blue-900 py-3 px-4 rounded-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          </StepCard>
        )}

        {step === 3 && (
          <StepCard title="What’s your timeline to sell?">
            <div className="space-y-3">
              {['Immediately', 'Within 30 days', '1–3 months', 'Just exploring'].map(option => (
                <button
                  key={option}
                  onClick={() => handleOption('timeline', option)}
                  className="w-full bg-blue-100 hover:bg-blue-200 text-blue-900 py-3 px-4 rounded-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          </StepCard>
        )}

        {step === 4 && (
          <StepCard title="What’s the property address?">
            <input
              name="address"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="123 Main St, City, State"
            />
            <div className="flex justify-end mt-6">
              <button onClick={next} className="bg-blue-600 text-white px-6 py-2 rounded-xl">
                Next
              </button>
            </div>
          </StepCard>
        )}

        {step === 5 && (
          <StepCard title="What's your name?">
            <input
              name="name"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Full Name"
            />
            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-blue-600 font-medium">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-6 py-2 rounded-xl">Next</button>
            </div>
          </StepCard>
        )}

        {step === 6 && (
          <StepCard title="What's your email?">
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="you@example.com"
            />
            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-blue-600 font-medium">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-6 py-2 rounded-xl">Next</button>
            </div>
          </StepCard>
        )}

        {step === 7 && (
          <StepCard title="What's your phone number?">
            <input
              name="phone"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="(555) 555-5555"
            />
            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-blue-600 font-medium">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-6 py-2 rounded-xl">Next</button>
            </div>
          </StepCard>
        )}

        {step === 8 && (
          <StepCard title="How did you hear about us?">
            <input
              name="how"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              placeholder="Google, friend, etc."
            />
            <div className="flex justify-between mt-6">
              <button onClick={back} className="text-blue-600 font-medium">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-6 py-2 rounded-xl">Next</button>
            </div>
          </StepCard>
        )}

        {step === 9 && (
          <form onSubmit={handleSubmit}>
            <StepCard title="Any concerns working with a homebuyer?">
              <input
                name="concern"
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="Your concern (optional)"
              />
              <div className="flex justify-between mt-6">
                <button type="button" onClick={back} className="text-blue-600 font-medium">Back</button>
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-xl">
                  Submit
                </button>
              </div>
            </StepCard>
          </form>
        )}

        {step === 10 && (
          <StepCard title="Hang tight… we're reviewing your info!">
            <p className="text-gray-600 mt-4">We’ll get back to you shortly with a cash offer.</p>
          </StepCard>
        )}
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">What Our Sellers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/brent.jpg" alt="Brent" className="rounded object-cover w-full h-48 mb-4" />
            <p className="italic">"Brent was awesome to work with. Highly recommend!"</p>
            <p className="text-sm mt-2 text-gray-600">— Brent</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/darryl.png" alt="Darryl" className="rounded object-cover w-full h-48 mb-4" />
            <p className="italic">"Darryl sold fast and easy. Smooth process!"</p>
            <p className="text-sm mt-2 text-gray-600">— Darryl</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/109.png" alt="Seller" className="rounded object-cover w-full h-48 mb-4" />
            <p className="italic">"Quick close and no hassle. Amazing!"</p>
            <p className="text-sm mt-2 text-gray-600">— Happy Seller</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/516-518.jpg" alt="Seller" className="rounded object-cover w-full h-48 mb-4" />
            <p className="italic">"Appreciate how smooth it all went!"</p>
            <p className="text-sm mt-2 text-gray-600">— Happy Seller</p>
          </div>
        </div>
      </section>
    </main>
  );
}
