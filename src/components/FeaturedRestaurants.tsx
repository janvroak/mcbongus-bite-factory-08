
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RestaurantCard from './RestaurantCard';
import { Button } from '@/components/ui/button';
import { allRestaurants } from '@/data/restaurants';

const FeaturedRestaurants = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  
  const featuredRestaurants = allRestaurants.filter(restaurant => restaurant.featured);
  
  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex + visibleCount >= featuredRestaurants.length ? 0 : prevIndex + visibleCount
    );
  };
  
  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex - visibleCount < 0 ? Math.max(0, featuredRestaurants.length - visibleCount) : prevIndex - visibleCount
    );
  };
  
  const visibleRestaurants = featuredRestaurants.slice(startIndex, startIndex + visibleCount);
  
  return (
    <section className="section-container">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Restaurants</h2>
          <p className="text-gray-600 mt-2">Explore our top-rated dining options in Dharwad</p>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-gray-200 text-gray-500 hover:text-mcbongu-500 hover:border-mcbongu-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-gray-200 text-gray-500 hover:text-mcbongu-500 hover:border-mcbongu-300"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
        {visibleRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="animate-scale-in">
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button 
          variant="outline" 
          className="rounded-full px-8 border-mcbongu-200 text-mcbongu-700 hover:bg-mcbongu-50"
          asChild
        >
          <a href="/restaurants">
            View All Restaurants
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
