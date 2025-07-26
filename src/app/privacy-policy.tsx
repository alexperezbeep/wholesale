import React from "react";

const PrivacyPolicy = () => (
  <main style={{ fontFamily: 'Inter, system-ui, sans-serif', maxWidth: 800, margin: '0 auto', padding: '3rem 1.5rem', color: '#232336' }}>
    <h1 style={{ fontWeight: 900, fontSize: '2.3rem', marginBottom: 24 }}>Privacy Policy</h1>
    <p style={{ fontSize: '1.15rem', marginBottom: 18 }}>
      Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our website and services.
    </p>
    <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginTop: 32, marginBottom: 12 }}>Information We Collect</h2>
    <ul style={{ marginBottom: 18 }}>
      <li>Contact details (name, email, phone, address)</li>
      <li>Property information you submit</li>
      <li>Any other information you provide voluntarily</li>
    </ul>
    <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginTop: 32, marginBottom: 12 }}>How We Use Your Information</h2>
    <ul style={{ marginBottom: 18 }}>
      <li>To prepare and deliver your cash offer</li>
      <li>To communicate with you about your property</li>
      <li>To improve our services</li>
    </ul>
    <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginTop: 32, marginBottom: 12 }}>How We Protect Your Information</h2>
    <ul style={{ marginBottom: 18 }}>
      <li>We do not sell or share your data with third parties</li>
      <li>We use industry-standard security measures</li>
    </ul>
    <h2 style={{ fontWeight: 800, fontSize: '1.35rem', marginTop: 32, marginBottom: 12 }}>Contact Us</h2>
    <p>If you have any questions about this policy, please contact us at info@lunahaven.com.</p>
  </main>
);

export default PrivacyPolicy;
