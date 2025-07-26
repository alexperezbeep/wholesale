"use client";
import { useTheme } from "./ThemeProvider";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(120deg, #2a2342 0%, #3a2e5f 100%)"
            : "linear-gradient(120deg, #ede9fe 0%, #c7bfff 100%)",
        color: theme === "dark" ? "#fff" : "#232336",
        border: "none",
        borderRadius: "1.2rem",
        fontWeight: 700,
        fontSize: "1.09rem",
        padding: "0.8rem 1.7rem",
        boxShadow:
          theme === "dark"
            ? "0 2px 12px rgba(124,58,237,0.13)"
            : "0 2px 8px rgba(124,58,237,0.10)",
        cursor: "pointer",
        transition: "background 0.18s, color 0.18s",
      }}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
