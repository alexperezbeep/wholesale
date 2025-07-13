// app/page.tsx
import { HeroSection } from "../components/sections/HeroSection";
import { WhyChooseUsSection } from "../components/sections/WhyChooseUsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ContactSection } from "../components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection
        title="Sell Your House Fast for Cash"
        subtitle="Luna Haven connects motivated sellers with trusted investors. Get a fair cash offer within 24 hours."
        callToActionText="Get My Cash Offer"
        callToActionLink="/sell"
      />
      <WhyChooseUsSection
        reasons={[
          "No Repairs Needed",
          "Close in as Little as 7 Days",
          "No Hidden Fees or Commissions",
          "Fair Cash Offers, No Lowballs"
        ]}
      />
      <TestimonialsSection
        testimonials={[
          { name: "Carlos M.", quote: "Luna Haven helped me sell fast during a tough time. Highly recommend." },
          { name: "Angela R.", quote: "The process was easy and transparent. They really came through for me." }
        ]}
      />
      <ContactSection />
    </main>
  );
}
