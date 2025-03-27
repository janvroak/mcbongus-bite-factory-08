
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";
import { allRestaurants } from "@/data/restaurants"; 

const cuisineOptions = [
  "All Cuisines",
  "North Indian",
  "South Indian",
  "Italian",
  "Japanese",
  "Mexican",
  "American",
  "Chinese",
  "Biryani",
  "Fast Food"
];

const Restaurants = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");
  const [filteredRestaurants, setFilteredRestaurants] = useState(allRestaurants);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a cuisine in the URL
    const cuisineParam = searchParams.get("cuisine");
    if (cuisineParam) {
      const formattedCuisine = cuisineParam.charAt(0).toUpperCase() + cuisineParam.slice(1);
      setSelectedCuisine(formattedCuisine);
    }
  }, [searchParams]);
  
  useEffect(() => {
    let result = allRestaurants;
    
    // Filter by cuisine
    if (selectedCuisine !== "All Cuisines") {
      result = result.filter(restaurant => 
        restaurant.cuisine.toLowerCase().includes(selectedCuisine.toLowerCase())
      );
    }
    
    // Filter by search query - search in both restaurant names and cuisines
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      result = result.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchLower) || 
        restaurant.cuisine.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredRestaurants(result);
  }, [selectedCuisine, searchQuery]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The filtering is already handled by the useEffect
  };
  
  const handleCuisineSelect = (cuisine: string) => {
    setSelectedCuisine(cuisine);
    setIsFilterMenuOpen(false);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Restaurants in Dharwad</h1>
            <p className="text-gray-600">Discover restaurants that deliver to your doorstep</p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search restaurants, dishes, or cuisines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mcbongu-500 focus:border-transparent"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
            </form>
            
            <div className="relative">
              <Button 
                variant="outline" 
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                className="w-full md:w-auto justify-between border-gray-300"
              >
                <Filter className="h-4 w-4 mr-2" />
                {selectedCuisine}
                <SlidersHorizontal className="h-4 w-4 ml-2" />
              </Button>
              
              {isFilterMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 animate-scale-in">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {cuisineOptions.map((cuisine) => (
                      <button
                        key={cuisine}
                        onClick={() => handleCuisineSelect(cuisine)}
                        className={`w-full text-left px-4 py-2 text-sm ${
                          cuisine === selectedCuisine
                            ? "bg-mcbongu-50 text-mcbongu-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        role="menuitem"
                      >
                        {cuisine}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Restaurant Grid */}
          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="animate-fade-in">
                  <RestaurantCard restaurant={restaurant} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No restaurants found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Restaurants;
