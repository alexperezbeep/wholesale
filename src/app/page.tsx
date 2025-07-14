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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
      <section className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <h1 className="text-4xl font-bold text-blue-700">Sell Your House for Cash</h1>
        <p className="text-lg text-gray-600">We buy houses fast in any condition. No fees. No agents. No hassle.</p>
        {step === 0 && (
          <button
            onClick={next}
            className="bg-blue-600 text-white px-6 py-3 mt-4 font-semibold rounded shadow hover:bg-blue-700 transition"
          >
            Get My Cash Offer
          </button>
        )}
      </section>

      {step > 0 && (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
          {step === 1 && (
            <>
              <label className="block text-lg font-medium mb-2">Why are you looking to sell?</label>
              <select name="motivation" onChange={handleChange} className="w-full border p-2 rounded">
                <option value="">Select one</option>
                <option value="Job relocation">Job relocation</option>
                <option value="Downsizing">Downsizing</option>
                <option value="Inherited property">Inherited property</option>
                <option value="Facing foreclosure">Facing foreclosure</option>
                <option value="Other">Other</option>
              </select>
              <button onClick={next} type="button" className="btn-primary">Next</button>
            </>
          )}

          {step === 2 && (
            <>
              <label className="block text-lg font-medium mb-2">Does the property need repairs?</label>
              <select name="repairs" onChange={handleChange} className="w-full border p-2 rounded">
                <option value="">Select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not sure">Not sure</option>
              </select>
              <div className="flex justify-between">
                <button type="button" onClick={back} className="btn-secondary">Back</button>
                <button onClick={next} type="button" className="btn-primary">Next</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <label className="block text-lg font-medium mb-2">What's your timeline to sell?</label>
              <select name="timeline" onChange={handleChange} className="w-full border p-2 rounded">
                <option value="">Select one</option>
                <option value="ASAP">ASAP</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3+ months">3+ months</option>
              </select>
              <div className="flex justify-between">
                <button type="button" onClick={back} className="btn-secondary">Back</button>
                <button onClick={next} type="button" className="btn-primary">Next</button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <label className="block text-lg font-medium mb-2">What's the property address?</label>
              <input name="address" onChange={handleChange} className="w-full border p-2 rounded" />
              <div className="flex justify-between">
                <button type="button" onClick={back} className="btn-secondary">Back</button>
                <button onClick={next} type="button" className="btn-primary">Next</button>
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <label className="block text-lg font-medium mb-2">What's your name?</label>
              <input name="name" onChange={handleChange} className="w-full border p-2 rounded" />
              <div className="flex justify-between">
                <button type="button" onClick={back} className="btn-secondary">Back</button>
                <button onClick={next} type="button" className="btn-primary">Next</button>
              </div>
            </>
          )}

          {step === 6 && (
            <>
              <label className="block text-lg font-medium mb-2">What's your email?</label>
              <input type="email" name="email" onChange={handleChange} className="w-full border p-2 rounded" />
              <div className="flex justify-between">
                <button type="button" onClick={back} className="btn-secondary">Back</button>
                <button onClick={next} type="button" className="btn-primary">Next</button>
              </div>
            </>
          )}

          {step === 7 && (
            <>
              <label className="block text-lg font-medium mb-2">What's your phone number?</label>
              <input name="phone" onChange={handleChange} className="w-full border p-2 rounded" />
              <div className="flex justify-between">
                <button type="button" onClick={back} className="btn-secondary">Back</button>
                <button onClick={next} type="button" className="btn-primary">Next</button>
              </div>
            </>
          )}

          {step === 8 && (
            <>
              <label className="block text-lg font-medium mb-2">How did you hear about us?</label>
              <select name="how" onChange={handleChange} className="w-full border p-2 rounded">
                <option value="">Select one</option>
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
              <div className="flex justify-between">
                <button type="button" onClick={back} className="btn-secondary">Back</button>
                <button onClick={next} type="button" className="btn-primary">Next</button>
              </div>
            </>
          )}

          {step === 9 && (
            <>
              <label className="block text-lg font-medium mb-2">Any concerns working with a homebuyer?</label>
              <input name="concern" onChange={handleChange} className="w-full border p-2 rounded" />
              <div className="flex justify-between">
                <button type="button" onClick={back} className="btn-secondary">Back</button>
                <button type="submit" className="btn-primary">Submit</button>
              </div>
            </>
          )}
        </form>
      )}

      {step === 10 && (
        <section className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-green-600">Thanks! We'll review and reach out shortly.</h2>
        </section>
      )}

      <style jsx>{`
        .btn-primary {
          background-color: #2563eb;
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 0.375rem;
          font-weight: 600;
          transition: background-color 0.2s;
        }
        .btn-primary:hover {
          background-color: #1d4ed8;
        }
        .btn-secondary {
          background-color: #e5e7eb;
          color: #111827;
          padding: 0.5rem 1.25rem;
          border-radius: 0.375rem;
          font-weight: 600;
        }
        .btn-secondary:hover {
          background-color: #d1d5db;
        }
      `}</style>
    </main>
  );
}
