"use client";

import HeroSection from "./Components/form/HeroSection";
import Categories from "./Components/form/Categories";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="w-4/5 mx-auto">
        <Categories />
      </div>
    </main>
  );
}
