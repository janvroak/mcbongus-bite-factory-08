
import { useState } from "react";
import { PlusCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCartStore, CartItem } from "@/store/useCartStore";
import { toast } from "sonner";

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number | string;
    image: string;
    restaurantName?: string;
    tags?: string[];
    nutritionInfo?: {
      calories: string;
      protein: string;
      carbs: string;
      fat: string;
      allergens?: string[];
    };
  };
  restaurantName: string;
  onAddToCart?: (itemId: string) => void;
}

// Fallback images categorized by food type
const fallbackImages = {
  default: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  pizza: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  pasta: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  sushi: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  taco: "https://images.unsplash.com/photo-1570461226513-e08b58a52c53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  indian: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  dessert: "https://images.unsplash.com/photo-1571877227200-a0d98ea2ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const MenuItem = ({ item, restaurantName, onAddToCart }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCartStore();
  
  const handleAddToCart = () => {
    // Handle both number and string price formats
    const priceValue = typeof item.price === 'number' 
      ? item.price 
      : parseFloat(item.price.replace(/[^\d.]/g, ''));
    
    // Add item to cart store
    addItem({
      id: item.id,
      name: item.name,
      description: item.description,
      price: priceValue,
      quantity: 1,
      image: item.image,
      restaurantName: restaurantName,
    });
    
    // Call the onAddToCart prop if provided (for notifications, etc)
    if (onAddToCart) {
      onAddToCart(item.id);
    }
    
    toast.success("Item added to cart", {
      description: "You can view your cart by clicking the cart icon."
    });
  };
  
  // Get fallback image based on item name
  const getFallbackImage = (itemName: string) => {
    const lowerName = itemName.toLowerCase();
    if (lowerName.includes('burger')) return fallbackImages.burger;
    if (lowerName.includes('pizza')) return fallbackImages.pizza;
    if (lowerName.includes('pasta') || lowerName.includes('spaghetti') || lowerName.includes('fettuccine')) return fallbackImages.pasta;
    if (lowerName.includes('sushi') || lowerName.includes('nigiri') || lowerName.includes('sashimi') || lowerName.includes('roll')) return fallbackImages.sushi;
    if (lowerName.includes('taco')) return fallbackImages.taco;
    if (lowerName.includes('curry') || lowerName.includes('paneer') || lowerName.includes('dosa') || lowerName.includes('samosa')) return fallbackImages.indian;
    if (lowerName.includes('dessert') || lowerName.includes('cake') || lowerName.includes('ice cream') || lowerName.includes('tiramisu')) return fallbackImages.dessert;
    return fallbackImages.default;
  };
  
  // Format price display to include ₹ symbol if it's a number
  const displayPrice = typeof item.price === 'number' ? `₹${item.price}` : item.price;
  
  return (
    <div 
      className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start sm:items-center gap-4 flex-1">
        {item.image && (
          <div className="rounded-lg overflow-hidden w-20 h-20 flex-shrink-0">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = getFallbackImage(item.name);
              }}
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center justify-between sm:justify-start">
            <h3 className="font-medium text-gray-900">{item.name}</h3>
            
            {item.nutritionInfo && (
              <Dialog>
                <DialogTrigger asChild>
                  <button className="ml-2 text-gray-400 hover:text-mcbongu-500 transition-colors">
                    <Info className="h-4 w-4" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>{item.name} - Nutrition Information</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Calories</p>
                      <p className="font-medium">{item.nutritionInfo.calories}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Protein</p>
                      <p className="font-medium">{item.nutritionInfo.protein}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Carbs</p>
                      <p className="font-medium">{item.nutritionInfo.carbs}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-500">Fat</p>
                      <p className="font-medium">{item.nutritionInfo.fat}</p>
                    </div>
                  </div>
                  
                  {item.nutritionInfo.allergens && item.nutritionInfo.allergens.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Allergens:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.nutritionInfo.allergens.map((allergen, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded"
                          >
                            {allergen}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            )}
          </div>
          
          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 sm:mt-0">
        <p className="font-medium text-gray-900 sm:mr-4">{displayPrice}</p>
        <Button 
          onClick={handleAddToCart}
          variant="ghost"
          className="text-mcbongu-500 hover:text-mcbongu-600 hover:bg-mcbongu-50"
        >
          <PlusCircle className="h-5 w-5 mr-1" />
          Add
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
