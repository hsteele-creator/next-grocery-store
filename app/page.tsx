import HeroSection from "./Components/form/HeroSection";
import Categories from "./Components/form/Categories";
import FeaturedProducts from "./Components/FeauturedProducts";
import Promotions from "./Components/Promotions";

export default function Home() {
  return (
      <main>
        <HeroSection />

        <div className="w-4/5 mx-auto">
          <Categories />
        <FeaturedProducts />
        <Promotions />
        </div>
      </main>
  );
}
