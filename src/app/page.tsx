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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('https://formspree.io/f/xnnzagjb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    setStep(step + 1);
  };

  return (
    <main className="max-w-4xl mx-auto py-16 px-4 text-center space-y-20 font-sans">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Sell Your House for Cash</h1>
        <p className="text-gray-600 text-lg">We buy houses fast in any condition. No fees. No agents. No hassle.</p>
        <button onClick={next} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Get My Cash Offer</button>
      </section>

      {/* Form Steps */}
      <section>
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Why are you looking to sell?</h2>
            <input className="border p-2 w-full" name="motivation" onChange={handleChange} />
            <button onClick={next} className="mt-4 bg-blue-600 text-white px-4 py-2">Next</button>
          </div>
        )}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Does the property need repairs?</h2>
            <input className="border p-2 w-full" name="repairs" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back}>Back</button>
              <button onClick={next}>Next</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What’s your timeline to sell?</h2>
            <input className="border p-2 w-full" name="timeline" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back}>Back</button>
              <button onClick={next}>Next</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What’s the property address?</h2>
            <input className="border p-2 w-full" name="address" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back}>Back</button>
              <button onClick={next}>Next</button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's your name?</h2>
            <input className="border p-2 w-full" name="name" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back}>Back</button>
              <button onClick={next}>Next</button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's your email?</h2>
            <input className="border p-2 w-full" name="email" type="email" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back}>Back</button>
              <button onClick={next}>Next</button>
            </div>
          </div>
        )}
        {step === 6 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's your phone number?</h2>
            <input className="border p-2 w-full" name="phone" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back}>Back</button>
              <button onClick={next}>Next</button>
            </div>
          </div>
        )}
        {step === 7 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">How did you hear about us?</h2>
            <input className="border p-2 w-full" name="how" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back}>Back</button>
              <button onClick={next}>Next</button>
            </div>
          </div>
        )}
        {step === 8 && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Do you have any concerns working with a homebuyer?</h2>
            <input className="border p-2 w-full" name="concern" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button type="button" onClick={back}>Back</button>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </form>
        )}
        {step === 9 && (
          <div>
            <h2 className="text-2xl font-bold">Hang tight… we're reviewing your info!</h2>
          </div>
        )}
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold mb-6 font-sans">What Our Sellers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Wilde",
              date: "Nov 25, 2023",
              text: "Our family enjoyed our stay... Nick was quick and easy, and was proactive and responsive... Very comfortable, cozy and stylish home. Entire home is spotless... Thanks Nick!",
              image: "/test1.jpg"
            },
            {
              name: "Nadine Lomakin",
              date: "Dec 30, 2023",
              text: "This was our third trip... peaceful, comfortable, and cozy... Nick is always a wonderful and responsive host... perfect post-Christmas break.",
              image: "/test2.jpg"
            },
            {
              name: "Meghan",
              date: "Feb 6, 2024",
              text: "Really enjoyed having them. Very responsive and tidy. Would definitely recommend them.",
              image: "/test3.jpg"
            }
          ].map((review, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-md animate-fade-in duration-700 delay-100">
              <img src={review.image} alt="Seller" className="rounded object-cover w-full h-48 mb-4" />
              <p className="italic text-gray-700">"{review.text}"</p>
              <p className="text-sm mt-2 text-gray-600 font-medium">— {review.name}, {review.date}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
