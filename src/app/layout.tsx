"use client";

import React from "react";
import "./globals.css";
import { Inter } from 'next/font/google';
import { useTheme } from "./ThemeProvider";

import ThemeToggle from "./ThemeToggle";
// ...existing code...


const inter = Inter({ subsets: ['latin'] });

import { ThemeProvider } from "./ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/logosite.png" type="image/png" />
        <meta name="theme-color" content="#7c3aed" />
        <style>{`
          section {
            padding-block: 1.5rem !important;
          }
          @media (max-width: 600px) {
            h1, h2, h3 { font-size: 80% !important; }
          }
        `}</style>
      </head>
      <body style={{ margin: 0 }} className="antialiased">
        <ThemeProvider>
          <AppContent>{children}</AppContent>
        </ThemeProvider>
      </body>
    </html>
  );
}

function HtmlWithTheme({ children }: { children: React.ReactNode }) {
  // Remove <html> from client component, just return children
  return <>{children}</>;
}

function AppContent({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [stickyActive, setStickyActive] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setStickyActive(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className={theme}
      style={{
        fontFamily: inter.style.fontFamily,
        background: theme === 'dark' ? '#18181b' : '#f9f9ff',
        color: theme === 'dark' ? '#f3f4f6' : 'var(--text)',
        minHeight: '100vh',
        transition: 'background 0.4s, color 0.3s',
      }}
    >
      <header
        className={stickyActive ? 'sticky-active' : ''}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "1.1rem 1.5rem 1.1rem 1.5rem",
          borderBottom: "none",
        }}
      >
        <img
          src="/logosite.png"
          alt="Luna Haven Logo"
          width={160}
          height={160}
          style={{
            display: "block",
            maxWidth: "100%",
            borderRadius: 20,
            background: "var(--logo-bg, transparent)",
            cursor: "pointer"
          }}
          onClick={() => window.location.href = "/"}
        />
        <ThemeToggle />
      </header>
      {children}
      <footer
        style={{
          background: "var(--glass-bg)",
          padding: "3.5rem 1.5rem 2.2rem 1.5rem",
          marginTop: "0",
          borderTop: "2.5px solid var(--faq-border)",
          borderRadius: "2.2rem 2.2rem 0 0",
          color: "var(--text)",
          fontFamily: 'Inter, system-ui, sans-serif',
          boxShadow: "0 -6px 36px rgba(31,38,135,0.09)",
          backdropFilter: "var(--glass-blur)",
          WebkitBackdropFilter: "var(--glass-blur)",
          transition: "background 0.5s, color 0.3s",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            maxWidth: "1200px",
            margin: "0 auto",
            gap: "2.5rem",
          }}
        >
          <div style={{ flex: "1", minWidth: "220px", marginBottom: "2rem" }}>
            <img
              src="/logosite.png"
              alt="Luna Haven Logo"
              width={100}
              height={100}
              style={{ display: "block", maxWidth: "100%", borderRadius: 20, background: "var(--logo-bg, transparent)" }}
            />
            <div style={{ marginTop: "1.3rem", display: "flex", gap: "1.3rem", alignItems: "center" }}>
              <a href="https://facebook.com/lunahaven" aria-label="Facebook" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontSize: 24, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}>
                <span aria-hidden="true">&#x1F426;</span>
              </a>
              <a href="https://instagram.com/lunahaven" aria-label="Instagram" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontSize: 24, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}>
                <span aria-hidden="true">&#x1F33C;</span>
              </a>
              <a href="mailto:support@lunahaven.net" aria-label="Email" style={{ color: "var(--primary)", fontSize: 24, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}>
                <span aria-hidden="true">&#x2709;&#xFE0F;</span>
              </a>
            </div>
          </div>
          <div style={{ flex: "1", minWidth: "180px", marginBottom: "1.5rem" }}>
            <h4 style={{ color: "var(--primary)", fontWeight: 600, marginBottom: "1rem", borderBottom: "2px solid var(--accent)", display: "inline-block", fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.08rem' }}>
              QUICK LINKS
            </h4>
            <div>
              <a href="/" style={{ color: "var(--primary)", textDecoration: "underline", fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}>Home</a>
            </div>
            <div>
              <a href="/privacy-policy" style={{ color: "var(--primary)", textDecoration: "underline", fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}>Privacy Policy</a>
            </div>
          </div>
          <div style={{ flex: "1", minWidth: "220px", marginBottom: "1.5rem" }}>
            <h4 style={{ color: "var(--primary)", fontWeight: 600, marginBottom: "1rem", borderBottom: "2px solid var(--accent)", display: "inline-block", fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1.08rem' }}>
              CONTACT US
            </h4>
            <div style={{ marginBottom: "0.5rem" }}>
              <a href="tel:9152747574" style={{ color: "var(--primary)", textDecoration: "underline", fontWeight: 600, fontFamily: 'Inter, system-ui, sans-serif' }}>
                📞 (915) 274-7574
              </a>
            </div>
            <div>
              <a href="mailto:support@lunahaven.net" style={{ color: "var(--primary)", textDecoration: "underline", fontWeight: 600, fontFamily: 'Inter, system-ui, sans-serif' }}>
                📧 support@lunahaven.net
              </a>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", margin: "2.5rem auto 0 auto", borderTop: "1.5px solid var(--faq-border)", paddingTop: "1.2rem" }}>
          <div style={{ textAlign: "center", color: '#6b7280', fontSize: "1.09rem", fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500, letterSpacing: "0.01em" }}>
            Luna Haven LLC is a legally registered homebuyer based in Texas.<br />
            &copy; {new Date().getFullYear()} Luna Haven LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}