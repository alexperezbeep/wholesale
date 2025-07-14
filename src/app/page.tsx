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
    <main className="bg-gray-50">
      {/* Hero Banner */}
      <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url("/80ffc70157d62f19bcc5e6c4fff957da-uncropped_scaled_within_1536_1152.jpg")' }}>
        <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Sell Your House for Cash</h1>
          <p className="text-lg md:text-xl mb-6 text-center max-w-xl">We buy houses fast in any condition. No fees. No agents. No hassle.</p>
          <button onClick={next} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded shadow text-lg">Get My Cash Offer</button>
        </div>
      </section>

      {/* Multi-step Form */}
      <section className="max-w-xl mx-auto py-16 px-4 text-center">
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Why are you looking to sell?</h2>
            <input className="border p-2 w-full" name="motivation" onChange={handleChange} />
            <button onClick={next} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Does the property need repairs?</h2>
            <input className="border p-2 w-full" name="repairs" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's your timeline to sell?</h2>
            <input className="border p-2 w-full" name="timeline" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's the property address?</h2>
            <input className="border p-2 w-full" name="address" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's your name?</h2>
            <input className="border p-2 w-full" name="name" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's your email?</h2>
            <input className="border p-2 w-full" type="email" name="email" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 6 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What's your phone number?</h2>
            <input className="border p-2 w-full" name="phone" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 7 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">How did you hear about us?</h2>
            <input className="border p-2 w-full" name="how" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button onClick={back} className="text-blue-600">Back</button>
              <button onClick={next} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </div>
          </div>
        )}
        {step === 8 && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Any concerns about working with a homebuyer?</h2>
            <input className="border p-2 w-full" name="concern" onChange={handleChange} />
            <div className="flex justify-between mt-4">
              <button type="button" onClick={back} className="text-blue-600">Back</button>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
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
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Sellers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["9b38c5535dc030aaa80d043c0db5f9fb", "2796207fec2adaa303207a6c02112010", "791d35843fdfe28a51337985e8a43d47"].map((img, idx) => (
            <div key={idx} className="shadow rounded overflow-hidden">
              <img src={`/${img}-uncropped_scaled_within_1536_1152.jpg`} className="w-full h-64 object-cover" />
              <div className="p-4 text-sm">
                <p>"Great experience working with this team!"</p>
                <p className="font-semibold mt-2">— Happy Seller</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
