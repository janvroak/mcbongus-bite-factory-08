
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RestaurantCard from './RestaurantCard';
import { Button } from '@/components/ui/button';

const restaurants = [
  {
    id: "1",
    name: "Burger Kingdom",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    cuisine: "American, Burgers",
    rating: 4.8,
    deliveryTime: "20-30 min",
    minOrder: "$10",
    featured: true
  },
  {
    id: "2",
    name: "Pizza Haven",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    cuisine: "Italian, Pizza",
    rating: 4.5,
    deliveryTime: "25-35 min",
    minOrder: "$12",
    featured: true
  },
  {
    id: "3",
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    cuisine: "Japanese, Sushi",
    rating: 4.7,
    deliveryTime: "30-40 min",
    minOrder: "$15",
    featured: true
  },
  {
    id: "4",
    name: "Taco Express",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    cuisine: "Mexican, Tacos",
    rating: 4.3,
    deliveryTime: "15-25 min",
    minOrder: "$8",
    featured: true
  },
  {
    id: "5",
    name: "Curry House",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    cuisine: "Indian, Curry",
    rating: 4.6,
    deliveryTime: "30-45 min",
    minOrder: "$15",
    featured: true
  },
  {
    id: "6",
    name: "Noodle House",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    cuisine: "Chinese, Noodles",
    rating: 4.5,
    deliveryTime: "25-35 min",
    minOrder: "$10",
    featured: true
  }
];

const FeaturedRestaurants = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  
  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex + visibleCount >= restaurants.length ? 0 : prevIndex + visibleCount
    );
  };
  
  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex - visibleCount < 0 ? Math.max(0, restaurants.length - visibleCount) : prevIndex - visibleCount
    );
  };
  
  const visibleRestaurants = restaurants.slice(startIndex, startIndex + visibleCount);
  
  return (
    <section className="section-container">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Restaurants</h2>
          <p className="text-gray-600 mt-2">Explore our top-rated dining options</p>
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
