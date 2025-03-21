
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import PopularCuisines from "@/components/PopularCuisines";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import DownloadApp from "@/components/DownloadApp";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PopularCuisines />
        <FeaturedRestaurants />
        <WhyChooseUs />
        <Testimonials />
        <DownloadApp />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
