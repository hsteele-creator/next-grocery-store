import HeroSection from "./Components/HeroSection";
import Categories from "./Components/Categories";
import FeaturedProducts from "./Components/FeauturedProducts";
import Promotions from "./Components/Promotions";
import Services from "./Components/Footer/Services";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="w-4/5 mx-auto">
        <Categories />
        <FeaturedProducts />
        <Promotions />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
