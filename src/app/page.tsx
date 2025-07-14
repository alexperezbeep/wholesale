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
    <main className="max-w-2xl mx-auto py-16 px-4 text-center space-y-24">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-900">Sell Your House for Cash</h1>
        <p className="text-gray-600 text-lg">We buy houses fast in any condition. No fees. No agents. No hassle.</p>
        <button onClick={next} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow">
          Get My Cash Offer
        </button>
      </section>

      {/* Form */}
      <section className="space-y-8">
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Why are you looking to sell?</h2>
            <input className="border p-3 w-full rounded" name="motivation" onChange={handleChange} />
            <button onClick={next} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Does the property need repairs?</h2>
            <input className="border p-3 w-full rounded" name="repairs" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What’s your timeline to sell?</h2>
            <input className="border p-3 w-full rounded" name="timeline" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What’s the property address?</h2>
            <input className="border p-3 w-full rounded" name="address" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's your name?</h2>
            <input className="border p-3 w-full rounded" name="name" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's your email?</h2>
            <input className="border p-3 w-full rounded" name="email" type="email" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 6 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's your phone number?</h2>
            <input className="border p-3 w-full rounded" name="phone" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 7 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">How did you hear about us?</h2>
            <input className="border p-3 w-full rounded" name="how" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 8 && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Any concerns working with a homebuyer?</h2>
            <input className="border p-3 w-full rounded" name="concern" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button type="button" onClick={back} className="text-blue-600">Back</button>
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </form>
        )}
        {step === 9 && (
          <div>
            <h2 className="text-2xl font-bold text-green-700">Hang tight… we're reviewing your info!</h2>
          </div>
        )}
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold mb-6">What Our Sellers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <img src="/test1.jpg" alt="Happy Seller" className="rounded mb-4 mx-auto h-40 object-cover" />
            <p className="italic">"Great experience working with this team!"</p>
            <p className="text-sm mt-2 text-gray-600">— Happy Seller</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="/test2.jpg" alt="Happy Seller" className="rounded mb-4 mx-auto h-40 object-cover" />
            <p className="italic">"Fast and easy process!"</p>
            <p className="text-sm mt-2 text-gray-600">— Happy Seller</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="/test3.jpg" alt="Happy Seller" className="rounded mb-4 mx-auto h-40 object-cover" />
            <p className="italic">"Would recommend to anyone!"</p>
            <p className="text-sm mt-2 text-gray-600">— Happy Seller</p>
          </div>
        </div>
      </section>
    </main>
  );
}
