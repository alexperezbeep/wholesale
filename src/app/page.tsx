'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <main className="max-w-xl mx-auto min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full overflow-hidden relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && (
              <div>
                <h1 className="text-xl font-semibold mb-4">Why are you looking to sell?</h1>
                <input className="border p-2 w-full" name="motivation" onChange={handleChange} />
                <button onClick={next} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Next</button>
              </div>
            )}
            {step === 1 && (
              <div>
                <h1 className="text-xl font-semibold mb-4">Does the property need repairs?</h1>
                <input className="border p-2 w-full" name="repairs" onChange={handleChange} />
                <div className="flex justify-between mt-4">
                  <button onClick={back}>Back</button>
                  <button onClick={next}>Next</button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <h1 className="text-xl font-semibold mb-4">What’s your timeline to sell?</h1>
                <input className="border p-2 w-full" name="timeline" onChange={handleChange} />
                <div className="flex justify-between mt-4">
                  <button onClick={back}>Back</button>
                  <button onClick={next}>Next</button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h1 className="text-xl font-semibold mb-4">What’s the property address?</h1>
                <input className="border p-2 w-full" name="address" onChange={handleChange} />
                <div className="flex justify-between mt-4">
                  <button onClick={back}>Back</button>
                  <button onClick={next}>Next</button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div>
                <h1 className="text-xl font-semibold mb-4">What's your name?</h1>
                <input className="border p-2 w-full" name="name" onChange={handleChange} />
                <div className="flex justify-between mt-4">
                  <button onClick={back}>Back</button>
                  <button onClick={next}>Next</button>
                </div>
              </div>
            )}
            {step === 5 && (
              <div>
                <h1 className="text-xl font-semibold mb-4">What's your email?</h1>
                <input className="border p-2 w-full" name="email" type="email" onChange={handleChange} />
                <div className="flex justify-between mt-4">
                  <button onClick={back}>Back</button>
                  <button onClick={next}>Next</button>
                </div>
              </div>
            )}
            {step === 6 && (
              <div>
                <h1 className="text-xl font-semibold mb-4">What's your phone number?</h1>
                <input className="border p-2 w-full" name="phone" onChange={handleChange} />
                <div className="flex justify-between mt-4">
                  <button onClick={back}>Back</button>
                  <button onClick={next}>Next</button>
                </div>
              </div>
            )}
            {step === 7 && (
              <div>
                <h1 className="text-xl font-semibold mb-4">How did you hear about us?</h1>
                <input className="border p-2 w-full" name="how" onChange={handleChange} />
                <div className="flex justify-between mt-4">
                  <button onClick={back}>Back</button>
                  <button onClick={next}>Next</button>
                </div>
              </div>
            )}
            {step === 8 && (
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl font-semibold mb-4">Do you have any concerns working with a homebuyer?</h1>
                <input className="border p-2 w-full" name="concern" onChange={handleChange} />
                <div className="flex justify-between mt-4">
                  <button type="button" onClick={back}>Back</button>
                  <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
                </div>
              </form>
            )}
            {step === 9 && (
              <div>
                <h1 className="text-2xl font-bold text-center">Hang tight… we're reviewing your info!</h1>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
