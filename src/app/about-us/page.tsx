'use client';
import React from 'react';
import { useTheme } from '../ThemeProvider';

export default function AboutPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
      {/* HEADER */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem 2rem',
        background: 'var(--card)',
        boxShadow: 'var(--card-shadow)',
        borderRadius: '0 0 1.5rem 1.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        marginBottom: '2rem'
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Luna Haven Logo" style={{ height: '44px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Home</a>
          <a href="/about-us" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>About Us</a>
          <button
            onClick={toggleTheme}
            className="btn-primary"
            style={{
              marginLeft: '1.5rem',
              background: theme === 'dark' ? 'var(--primary-dark)' : 'var(--primary)',
              color: '#fff',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1.15rem',
              padding: '0.5rem 1.2rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
              border: 'none'
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
        <p style={{ marginTop: '0.75rem', lineHeight: '1.75' }}>
          We buy houses. In as little as one phone call, you can receive a quick cash offer from us. We aren’t real estate agents — we are direct cash home buyers.
          It’s a common misconception that we are the same, but that’s not the case. <strong>The goal of a cash home buyer is to offer homeowners a fair price for their home in a quick and hassle-free manner.</strong>
        </p>

        <p style={{ marginTop: '1rem', lineHeight: '1.75' }}>
          We are able to accomplish this through an <strong>efficient, streamlined</strong> home-selling process. In just three easy steps, you can enjoy more money, less hassle, and accomplish your goals in less time.
        </p>

        <h2 style={{ fontSize: '1.25rem', marginTop: '2.5rem', fontWeight: 600 }}>Cash Home Buyers Nationwide!</h2>
        <p style={{ marginTop: '0.75rem', lineHeight: '1.75' }}>
          As a cash home buyer, we are dedicated to helping homeowners who need to sell their houses fast and hassle-free.
          Whether you're facing foreclosure, divorce, or simply need to sell quickly for any reason, we’re here to help.
        </p>

        <p style={{ marginTop: '1rem', lineHeight: '1.75' }}>
          When you work with us, you don’t need to worry about the usual hassles of selling a house. We don’t require any repairs or cleaning.
          We offer a fair cash offer for your home and close on your timeline.
        </p>
      </section>

      {/* RIGHT SIDE GET OFFER BOX */}
      <div style={{
        position: 'fixed',
        top: '8rem',
        right: '2rem',
        background: 'var(--card)',
        color: 'var(--text)',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
        width: '300px',
        zIndex: 1000
      }}>
        <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem' }}>Get An Offer!</h3>
        <input placeholder="Home Address Here..." style={{
          width: '100%',
          padding: '0.75rem',
          marginBottom: '1rem',
          borderRadius: '8px',
          border: '1px solid #ccc',
          background: theme === 'dark' ? '#18181b' : '#fff',
          color: 'var(--text)',
          fontSize: '1.13rem',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
        }} />
        <button style={{
          background: theme === 'dark' ? 'var(--primary-dark)' : 'var(--primary)',
          color: 'white',
          padding: '0.75rem',
          width: '100%',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 700,
          fontSize: '1.13rem',
          cursor: 'pointer',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
        }}>
          Get Offer!
        </button>
      </div>

      {/* Floating theme toggle for extra prevalence */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 2000,
          background: theme === 'dark' ? 'var(--primary-dark)' : 'var(--primary)',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 56,
          height: 56,
          boxShadow: '0 2px 12px rgba(0,0,0,0.13)',
          fontSize: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </main>
  );
}