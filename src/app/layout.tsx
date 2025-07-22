"use client";

import React, { useState } from "react";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [step, setStep] = useState<number>(0);

  function toggleTheme(event: React.MouseEvent<HTMLButtonElement>): void {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  function next(): void {
    setStep((prev) => prev + 1);
  }

  return (
    <html lang="en">
      <body className="antialiased" style={{ margin: 0 }}>
        <ThemeProvider>
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
              background: "linear-gradient(90deg, #e0e7ff 0%, #f8fafc 100%)",
              borderRadius: "16px",
              margin: "2rem auto 3rem auto",
              maxWidth: "700px",
              boxShadow: "0 4px 24px rgba(37,99,235,0.07)",
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
            {step === 0 && (
              <button
                onClick={next}
                className="btn-primary"
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.15rem",
                  padding: "1rem 2.5rem",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.12)",
                }}
              >
                Get My Cash Offer
              </button>
            )}
          </section>
          {children}
          {/* Place at the bottom of every page */}
          <footer
            style={{
              background: "var(--card)",
              padding: "2rem 1rem",
              marginTop: "5rem",
              borderTop: "1px solid #e5e7eb",
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
              }}
            >
              <div
                style={{
                  flex: "1",
                  minWidth: "250px",
                  marginBottom: "1.5rem",
                }}
              >
                <img
                  src="/logo.png"
                  alt="Luna Haven Logo"
                  style={{
                    height: "56px",
                    marginBottom: "1rem",
                    borderRadius: "10px",
                  }}
                />
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: "var(--primary)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Luna Haven
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  minWidth: "250px",
                  marginBottom: "1.5rem",
                }}
              >
                <h4
                  style={{
                    color: "var(--primary)",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    borderBottom: "2px solid var(--accent)",
                    display: "inline-block",
                  }}
                >
                  QUICK LINKS
                </h4>
                <div>
                  <a
                    href="/privacy-policy"
                    style={{
                      color: "var(--primary)",
                      textDecoration: "underline",
                    }}
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  minWidth: "250px",
                  marginBottom: "1.5rem",
                }}
              >
                <h4
                  style={{
                    color: "var(--primary)",
                    fontWeight: 600,
                    marginBottom: "1rem",
                    borderBottom: "2px solid var(--accent)",
                    display: "inline-block",
                  }}
                >
                  CONTACT US
                </h4>
                <div style={{ marginBottom: "0.5rem" }}>
                  📞{" "}
                  <a
                    href="tel:9152747574"
                    style={{
                      color: "var(--primary)",
                      textDecoration: "underline",
                    }}
                  >
                    (915) 274-7574
                  </a>
                </div>
                <div>
                  📧{" "}
                  <a
                    href="mailto:info@homecashofferpro.com"
                    style={{
                      color: "var(--primary)",
                      textDecoration: "underline",
                    }}
                  >
                    support@lunahaven.net
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                color: "#6b7280",
                marginTop: "2rem",
              }}
            >
              Luna Haven LLC is a legally registered homebuyer based in [Your
              State].
              <br />
              &copy; {new Date().getFullYear()} Luna Haven LLC. All rights
              reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}