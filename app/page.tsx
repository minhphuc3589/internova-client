"use client";

import { HeroSection, NewArrivalsSection, SalesSection } from "@/components/sections/home";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-col gap-16 w-full px-8 py-16 border border-red-700">
        <HeroSection />
        <NewArrivalsSection />
        <SalesSection />

      </main>
    </div>
  );
}

export default HomePage;
