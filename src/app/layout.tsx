"use client";

import React from "react";
import "./globals.css";
import { ThemeProvider, useTheme } from "./ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body className="antialiased" style={{ margin: 0 }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.5rem 2rem",
            background: "var(--card)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            borderBottom: "none",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
              }}
            >
              <img
                src="/logo.png"
                alt="Luna Haven Logo"
                style={{
                  height: "56px",
                  width: "auto",
                  borderRadius: "10px",
                }}
              />
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "var(--primary)",
                  letterSpacing: "0.01em",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Luna Haven
              </span>
            </a>
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <a
                href="/"
                style={{
                  color: "var(--primary)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Home
              </a>
              <a
                href="/about-us"
                style={{
                  color: "var(--primary)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                About Us
              </a>
              <button
                onClick={toggleTheme}
                className="btn-primary"
                style={{
                  marginLeft: "1rem",
                  background:
                    theme === "dark"
                      ? "var(--primary-dark)"
                      : "var(--primary)",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  padding: "0.5rem 1.2rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                  border: "none",
                  color: "#fff",
                }}
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
              </button>
            </nav>
          </header>
          <section
            className="hero"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4rem 1rem 2rem 1rem",
              margin: "2rem auto 3rem auto",
              maxWidth: "700px",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                marginBottom: "1rem",
                color: "var(--primary)",
                letterSpacing: "-0.02em",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Need to sell your home fast?
            </h1>
            <p
              style={{
                color: "#334155",
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Get a cash offer in just 7 days
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#64748b",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Operating since June 2023 — 10+ homeowners helped.
            </p>
          {/* Removed step/next button for layout-level hero */}
          </section>
          {children}
          {/* Place at the bottom of every page */}
          <footer
            style={{
              background: "var(--glass-bg)",
              padding: "2.5rem 1rem 1.5rem 1rem",
              marginTop: "5rem",
              borderTop: "2px solid var(--faq-border)",
              borderRadius: "2rem 2rem 0 0",
              color: "var(--text)",
              boxShadow: "0 -4px 32px rgba(31,38,135,0.07)",
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
                gap: "2rem",
              }}
            >
              <div style={{ flex: "1", minWidth: "220px", marginBottom: "1.5rem" }}>
                <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.7rem", textDecoration: "none" }}>
                  <img
                    src="/logo.png"
                    alt="Luna Haven Logo"
                    style={{ height: "48px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
                  />
                  <span style={{ fontWeight: 800, fontSize: "1.35rem", color: "var(--primary)", fontFamily: "Inter, sans-serif" }}>
                    Luna Haven
                  </span>
                </a>
                <div style={{ marginTop: "1.1rem", display: "flex", gap: "1.1rem" }}>
                  <a href="https://facebook.com/lunahaven" aria-label="Facebook" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontSize: 22 }}>
                    <span aria-hidden="true">&#x1F426;</span>
                  </a>
                  <a href="https://instagram.com/lunahaven" aria-label="Instagram" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontSize: 22 }}>
                    <span aria-hidden="true">&#x1F33C;</span>
                  </a>
                  <a href="mailto:support@lunahaven.net" aria-label="Email" style={{ color: "var(--primary)", fontSize: 22 }}>
                    <span aria-hidden="true">&#x2709;&#xFE0F;</span>
                  </a>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "180px", marginBottom: "1.5rem" }}>
                <h4 style={{ color: "var(--primary)", fontWeight: 600, marginBottom: "1rem", borderBottom: "2px solid var(--accent)", display: "inline-block" }}>
                  QUICK LINKS
                </h4>
                <div>
                  <a href="/" style={{ color: "var(--primary)", textDecoration: "underline" }}>Home</a>
                </div>
                <div>
                  <a href="/about-us" style={{ color: "var(--primary)", textDecoration: "underline" }}>About Us</a>
                </div>
                <div>
                  <a href="/privacy-policy" style={{ color: "var(--primary)", textDecoration: "underline" }}>Privacy Policy</a>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "220px", marginBottom: "1.5rem" }}>
                <h4 style={{ color: "var(--primary)", fontWeight: 600, marginBottom: "1rem", borderBottom: "2px solid var(--accent)", display: "inline-block" }}>
                  CONTACT US
                </h4>
                <div style={{ marginBottom: "0.5rem" }}>
                  <a href="tel:9152747574" style={{ color: "var(--primary)", textDecoration: "underline", fontWeight: 600 }}>
                    📞 (915) 274-7574
                  </a>
                </div>
                <div>
                  <a href="mailto:support@lunahaven.net" style={{ color: "var(--primary)", textDecoration: "underline", fontWeight: 600 }}>
                    📧 support@lunahaven.net
                  </a>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", color: "#6b7280", marginTop: "2.5rem", fontSize: "1.05rem" }}>
              Luna Haven LLC is a legally registered homebuyer based in Texas.<br />
              &copy; {new Date().getFullYear()} Luna Haven LLC. All rights reserved.
            </div>
          </footer>
      </body>
    </html>
  );
}