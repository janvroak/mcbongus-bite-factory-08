
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for restaurants near:", location);
  };

  return (
    <section className="hero-section">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Delicious Food, <br />
            <span className="text-mcbongu-100">Delivered Fast</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
            Order from the best local restaurants with easy, on-demand delivery.
          </p>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0">
            <div className="glass-card flex items-center flex-1 pl-4 pr-2 py-2 rounded-full overflow-hidden w-full sm:w-auto border border-white/30">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your delivery address"
                className="bg-transparent outline-none flex-1 text-gray-800 placeholder-gray-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button 
              type="submit" 
              className="bg-mcbongu-500 hover:bg-mcbongu-600 rounded-full px-6 py-3 font-medium text-white w-full sm:w-auto sm:-ml-2"
            >
              Find Food
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="glass-card px-4 py-2 text-sm text-gray-800">★ 4.8 App Rating</div>
            <div className="glass-card px-4 py-2 text-sm text-gray-800">🕒 30 Min Delivery</div>
            <div className="glass-card px-4 py-2 text-sm text-gray-800">🍔 100+ Restaurants</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
