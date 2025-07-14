// components/CredibilitySection.tsx
export default function CredibilitySection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Proven Experience with High-Demand Properties
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Before focusing full-time on home buying, we ran successful furnished rentals for corporate and working guests. Here's what our past tenants had to say:
      </p>
      <div className="grid gap-6 max-w-4xl mx-auto">
        <blockquote className="border-l-4 pl-4 text-gray-800 dark:text-gray-200">
          “Your place isn't too far from our job site so we were hoping to stay in it.”<br />
          <span className="block mt-2 text-sm text-gray-500">— Anthony, 3-Month Stay</span>
        </blockquote>
        <blockquote className="border-l-4 pl-4 text-gray-800 dark:text-gray-200">
          “We’re excited to stay at your place!”<br />
          <span className="block mt-2 text-sm text-gray-500">— Tony, Contractor Guest</span>
        </blockquote>
        <blockquote className="border-l-4 pl-4 text-gray-800 dark:text-gray-200">
          “I would like to rent it for 2 months. Thank you.”<br />
          <span className="block mt-2 text-sm text-gray-500">— Fanny & Julien, Relocation Guests</span>
        </blockquote>
        <blockquote className="border-l-4 pl-4 text-gray-800 dark:text-gray-200">
          “It's not showing up as available but we would love to stay there if you can confirm.”<br />
          <span className="block mt-2 text-sm text-gray-500">— Karina, Long-Term Inquiry</span>
        </blockquote>
      </div>
    </section>
  );
}
