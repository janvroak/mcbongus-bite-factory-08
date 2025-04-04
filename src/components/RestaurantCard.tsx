
import { useState } from "react";
import { Star, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  restaurant: {
    id: string;
    name: string;
    image: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    minOrder: string;
    featured?: boolean;
    menuItems?: {
      name: string;
      description: string;
    }[];
  };
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div 
        className="restaurant-card h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {restaurant.featured && (
          <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-[#f8f8f8] mb-1">{restaurant.name}</h3>
              <p className="text-[#f8f8f8]/70 text-sm">{restaurant.cuisine}</p>
            </div>
            <div className="flex items-center bg-green-50 text-green-700 font-medium text-sm px-2 py-1 rounded">
              <Star className="h-3 w-3 mr-1 fill-current" />
              {restaurant.rating}
            </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center text-[#f8f8f8]/70 text-sm">
              <Clock className="h-3 w-3 mr-1" />
              <span>{restaurant.deliveryTime}</span>
              <span className="mx-2">•</span>
              <span>Min. {restaurant.minOrder}</span>
            </div>
            <ChevronRight className="h-4 w-4 text-accent" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
