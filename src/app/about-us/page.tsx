'use client';
import React from 'react';
import { useTheme } from '../ThemeProvider';

export default function AboutPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main>
      {/* HEADER */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid #e5e7eb'
      }}>
        {/* Replace text with logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Luna Haven Logo" style={{ height: '48px' }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/" style={{ marginRight: '1.5rem', color: '#1e3a8a', textDecoration: 'none', fontWeight: 500 }}>Home</a>
          <a href="/about-us" style={{ color: '#1e3a8a', textDecoration: 'none', fontWeight: 500 }}>About Us</a>
          <button
            onClick={toggleTheme}
            className="btn-primary"
            style={{
              marginLeft: '1rem',
              background: theme === 'dark' ? '#334155' : '#2563eb'
            }}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '3rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>About Luna Haven</h1>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', fontWeight: 600 }}>Who Are We?</h2>
        <p style={{ marginTop: '0.75rem', lineHeight: '1.75', color: '#374151' }}>
          We buy houses. In as little as one phone call, you can receive a quick cash offer from us. We aren’t real estate agents — we are direct cash home buyers.
          It’s a common misconception that we are the same, but that’s not the case. <strong>The goal of a cash home buyer is to offer homeowners a fair price for their home in a quick and hassle-free manner.</strong>
        </p>

        <p style={{ marginTop: '1rem', lineHeight: '1.75', color: '#374151' }}>
          We are able to accomplish this through an <strong>efficient, streamlined</strong> home-selling process. In just three easy steps, you can enjoy more money, less hassle, and accomplish your goals in less time.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2.5rem', fontWeight: 600 }}>Cash Home Buyers Nationwide!</h2>
        <p style={{ marginTop: '0.75rem', lineHeight: '1.75', color: '#374151' }}>
          As a cash home buyer, we are dedicated to helping homeowners who need to sell their houses fast and hassle-free.
          Whether you're facing foreclosure, divorce, or simply need to sell quickly for any reason, we’re here to help.
        </p>

        <p style={{ marginTop: '1rem', lineHeight: '1.75', color: '#374151' }}>
          When you work with us, you don’t need to worry about the usual hassles of selling a house. We don’t require any repairs or cleaning.
          We offer a fair cash offer for your home and close on your timeline.
        </p>
      </section>

      {/* RIGHT SIDE GET OFFER BOX */}
      <div style={{
        position: 'fixed',
        top: '8rem',
        right: '2rem',
        background: theme === 'dark' ? '#23232a' : '#e5e7eb',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
        width: '300px',
        zIndex: 1000
      }}>
        <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem', color: theme === 'dark' ? '#f3f4f6' : '#222' }}>Get An Offer!</h3>
        <input placeholder="Home Address Here..." style={{
          width: '100%',
          padding: '0.75rem',
          marginBottom: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          background: theme === 'dark' ? '#18181b' : '#fff',
          color: theme === 'dark' ? '#f3f4f6' : '#222'
        }} />
        <button style={{
          background: '#b91c1c',
          color: 'white',
          padding: '0.75rem',
          width: '100%',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          cursor: 'pointer'
        }}>
          Get Offer!
        </button>
      </div>
    </main>
  );
}