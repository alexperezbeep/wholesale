'use client';
import React from 'react';
import { useTheme } from '../ThemeProvider';

export default function AboutPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main
      style={{
        background: theme === 'dark' ? 'linear-gradient(120deg, #18181b 60%, #232336 100%)' : 'linear-gradient(120deg, #f9f9ff 60%, #f3f4f6 100%)',
        color: theme === 'dark' ? '#f3f4f6' : 'var(--text)',
        minHeight: '100vh',
        fontFamily: 'Inter, system-ui, sans-serif',
        transition: 'background 0.4s',
      }}
    >
      {/* HEADER is now only in layout, not here */}
      {/* MAIN CONTENT */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        paddingTop: '4rem',
        background: theme === 'dark' ? 'rgba(35,35,54,0.96)' : 'rgba(255,255,255,0.98)',
        borderRadius: 28,
        boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 4px 24px rgba(124,58,237,0.10)',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: theme === 'dark' ? '#fff' : 'var(--primary-dark)',
        transition: 'background 0.4s',
      }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#fff' : 'var(--primary-dark)', marginBottom: 8 }}>About Luna Haven</h1>

        <h2 style={{ fontSize: '1.28rem', marginTop: '2rem', fontWeight: 700, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#c7bfff' : 'var(--primary)' }}>Who Are We?</h2>
        <p style={{ marginTop: '0.75rem', lineHeight: '1.75', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, color: theme === 'dark' ? '#e5e7eb' : 'var(--text)' }}>
          We buy houses. In as little as one phone call, you can receive a quick cash offer from us. We aren’t real estate agents — we are direct cash home buyers.
          It’s a common misconception that we are the same, but that’s not the case. <strong>The goal of a cash home buyer is to offer homeowners a fair price for their home in a quick and hassle-free manner.</strong>
        </p>

        <p style={{ marginTop: '1rem', lineHeight: '1.75', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, color: theme === 'dark' ? '#e5e7eb' : 'var(--text)' }}>
          We are able to accomplish this through an <strong>efficient, streamlined</strong> home-selling process. In just three easy steps, you can enjoy more money, less hassle, and accomplish your goals in less time.
        </p>

        <h2 style={{ fontSize: '1.28rem', marginTop: '2.5rem', fontWeight: 700, fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#c7bfff' : 'var(--primary)' }}>Cash Home Buyers Nationwide!</h2>
        <p style={{ marginTop: '0.75rem', lineHeight: '1.75', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, color: theme === 'dark' ? '#e5e7eb' : 'var(--text)' }}>
          As a cash home buyer, we are dedicated to helping homeowners who need to sell their houses fast and hassle-free.
          Whether you're facing foreclosure, divorce, or simply need to sell quickly for any reason, we’re here to help.
        </p>

        <p style={{ marginTop: '1rem', lineHeight: '1.75', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, color: theme === 'dark' ? '#e5e7eb' : 'var(--text)' }}>
          When you work with us, you don’t need to worry about the usual hassles of selling a house. We don’t require any repairs or cleaning.
          We offer a fair cash offer for your home and close on your timeline.
        </p>
      </section>

      {/* RIGHT SIDE GET OFFER BOX */}
      <div style={{
        position: 'fixed',
        top: '8rem',
        right: '2rem',
        background: theme === 'dark' ? 'linear-gradient(120deg, #232336 60%, #18181b 100%)' : 'var(--card)',
        color: theme === 'dark' ? '#fff' : 'var(--primary-dark)',
        padding: '1.7rem 1.5rem 1.5rem 1.5rem',
        borderRadius: '20px',
        boxShadow: theme === 'dark' ? '0 8px 32px rgba(124,58,237,0.18)' : '0 8px 32px rgba(124,58,237,0.10)',
        width: '320px',
        zIndex: 1000,
        fontFamily: 'Inter, system-ui, sans-serif',
        border: theme === 'dark' ? '2px solid var(--primary)' : '1.5px solid var(--primary)',
        transition: 'background 0.4s',
      }}>
        <h3 style={{ fontWeight: 900, fontSize: '1.28rem', marginBottom: '1.1rem', fontFamily: 'Inter, system-ui, sans-serif', color: theme === 'dark' ? '#fff' : 'var(--primary)' }}>Get An Offer!</h3>
        <input placeholder="Home Address Here..." style={{
          width: '100%',
          padding: '0.85rem',
          marginBottom: '1.1rem',
          borderRadius: '8px',
          border: '1.5px solid #c7bfff',
          background: theme === 'dark' ? '#18181b' : '#fff',
          color: theme === 'dark' ? '#fff' : 'var(--primary-dark)',
          fontSize: '1.13rem',
          fontFamily: 'Inter, system-ui, sans-serif',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)'
        }} />
        <button style={{
          background: theme === 'dark' ? 'var(--primary-dark)' : 'var(--primary)',
          color: '#fff',
          padding: '0.85rem',
          width: '100%',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 900,
          fontSize: '1.13rem',
          fontFamily: 'Inter, system-ui, sans-serif',
          cursor: 'pointer',
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          transition: 'background 0.18s, color 0.18s',
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