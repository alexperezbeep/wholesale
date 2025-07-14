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
    <main className="max-w-xl mx-auto py-16 px-4 space-y-8 text-center">
      {step === 0 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Why are you looking to sell?</h1>
          <select name="motivation" onChange={handleChange} className="border p-2 w-full">
            <option value="">Select one</option>
            <option value="Relocation">Relocation</option>
            <option value="Inherited property">Inherited property</option>
            <option value="Facing foreclosure">Facing foreclosure</option>
            <option value="Tired landlord">Tired landlord</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={next} className="mt-4 bg-blue-600 text-white px-4 py-2">Next</button>
        </div>
      )}
      {step === 1 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Does the property need repairs?</h1>
          <select name="repairs" onChange={handleChange} className="border p-2 w-full">
            <option value="">Select one</option>
            <option value="Yes, major repairs">Yes, major repairs</option>
            <option value="Some minor repairs">Some minor repairs</option>
            <option value="No repairs needed">No repairs needed</option>
          </select>
          <div className="flex justify-between mt-4">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">What's your timeline to sell?</h1>
          <select name="timeline" onChange={handleChange} className="border p-2 w-full">
            <option value="">Select one</option>
            <option value="ASAP">ASAP</option>
            <option value="1-2 months">1-2 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="Just exploring options">Just exploring options</option>
          </select>
          <div className="flex justify-between mt-4">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">What’s the property address?</h1>
          <input className="border p-2 w-full" name="address" onChange={handleChange} />
          <div className="flex justify-between mt-4">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">What's your name?</h1>
          <input className="border p-2 w-full" name="name" onChange={handleChange} />
          <div className="flex justify-between mt-4">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 5 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">What's your email?</h1>
          <input className="border p-2 w-full" name="email" type="email" onChange={handleChange} />
          <div className="flex justify-between mt-4">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 6 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">What's your phone number?</h1>
          <input className="border p-2 w-full" name="phone" onChange={handleChange} />
          <div className="flex justify-between mt-4">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 7 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">How did you hear about us?</h1>
          <select name="how" onChange={handleChange} className="border p-2 w-full">
            <option value="">Select one</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Bandit signs">Bandit signs</option>
            <option value="Referral">Referral</option>
            <option value="Other">Other</option>
          </select>
          <div className="flex justify-between mt-4">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
      {step === 8 && (
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mb-4">Do you have any concerns working with a homebuyer?</h1>
          <select name="concern" onChange={handleChange} className="border p-2 w-full">
            <option value="">Select one</option>
            <option value="No concerns">No concerns</option>
            <option value="Worried about scams">Worried about scams</option>
            <option value="Want fair price">Want fair price</option>
            <option value="Need to close quickly">Need to close quickly</option>
            <option value="Other">Other</option>
          </select>
          <div className="flex justify-between mt-4">
            <button type="button" onClick={back}>Back</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2">Submit</button>
          </div>
        </form>
      )}
      {step === 9 && (
        <div>
          <h1 className="text-2xl font-bold">Hang tight… we're reviewing your info!</h1>
        </div>
      )}
    </main>
  );
}
