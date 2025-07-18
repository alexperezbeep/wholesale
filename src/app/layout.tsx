'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luna Haven",
  description: "Fast cash home buying with care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setTheme('dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ margin: 0 }}>
        {/* HEADER NAV */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2rem',
          borderBottom: '1px solid #e5e7eb',
          background: 'var(--card)'
        }}>
          <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>Luna Haven</div>
          <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="/" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>Home</a>
            <a href="/about-us" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>About Us</a>
            <button onClick={toggleTheme} style={{
              padding: '0.5rem 1rem',
              background: '#f3f4f6',
              borderRadius: '8px',
              border: '1px solid #d1d5db',
              fontWeight: 500,
              cursor: 'pointer'
            }}>
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
