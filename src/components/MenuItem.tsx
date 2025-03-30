
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

// Expanded fallback images categorized by food type with more specific categories
const fallbackImages = {
  default: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000",
  // Burgers by type
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  vegburger: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // Pizza varieties
  pizza: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  margherita: "https://images.unsplash.com/photo-1595854341625-f33e596b5969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // Pasta varieties
  pasta: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  spaghetti: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  lasagna: "https://images.unsplash.com/photo-1619895092538-128341789da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // Japanese food
  sushi: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ramen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  tempura: "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // Mexican food
  taco: "https://images.unsplash.com/photo-1570461226513-e08b58a52c53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  burrito: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  nachos: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  quesadilla: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // Indian food by type
  indian: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  curry: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  paneer: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  dosa: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  biryani: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  naan: "https://images.unsplash.com/photo-1596797038530-2c107aa8e1f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  samosa: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  idli: "https://images.unsplash.com/photo-1589301733091-62d9f0b5702a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // Chinese food
  chinese: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  noodles: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  dimsum: "https://images.unsplash.com/photo-1496116218417-1a56e30069a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // Desserts
  dessert: "https://images.unsplash.com/photo-1571877227200-a0d98ea2ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  icecream: "https://images.unsplash.com/photo-1576506295286-5cda18df9ef1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // Sides
  fries: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  onionrings: "https://images.unsplash.com/photo-1639025094604-2c5f638f926c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // Drinks
  drink: "https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  milkshake: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  coffee: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  cocktail: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
  
  // Enhanced fallback image selection based on item name
  const getFallbackImage = (itemName: string) => {
    const lowerName = itemName.toLowerCase();
    
    // Burgers
    if (lowerName.includes('burger')) {
      if (lowerName.includes('veggie') || lowerName.includes('veg')) return fallbackImages.vegburger;
      return fallbackImages.burger;
    }
    
    // Pizza
    if (lowerName.includes('pizza')) {
      if (lowerName.includes('margherita')) return fallbackImages.margherita;
      return fallbackImages.pizza;
    }
    
    // Pasta
    if (lowerName.includes('pasta')) return fallbackImages.pasta;
    if (lowerName.includes('spaghetti')) return fallbackImages.spaghetti;
    if (lowerName.includes('lasagna')) return fallbackImages.lasagna;
    if (lowerName.includes('fettuccine')) return fallbackImages.pasta;
    
    // Japanese
    if (lowerName.includes('sushi') || lowerName.includes('nigiri') || lowerName.includes('maki') || lowerName.includes('roll')) return fallbackImages.sushi;
    if (lowerName.includes('ramen')) return fallbackImages.ramen;
    if (lowerName.includes('tempura')) return fallbackImages.tempura;
    
    // Mexican
    if (lowerName.includes('taco')) return fallbackImages.taco;
    if (lowerName.includes('burrito')) return fallbackImages.burrito;
    if (lowerName.includes('nachos')) return fallbackImages.nachos;
    if (lowerName.includes('quesadilla')) return fallbackImages.quesadilla;
    
    // Indian
    if (lowerName.includes('curry') || lowerName.includes('masala')) return fallbackImages.curry;
    if (lowerName.includes('paneer')) return fallbackImages.paneer;
    if (lowerName.includes('dosa')) return fallbackImages.dosa;
    if (lowerName.includes('biryani')) return fallbackImages.biryani;
    if (lowerName.includes('naan')) return fallbackImages.naan;
    if (lowerName.includes('samosa')) return fallbackImages.samosa;
    if (lowerName.includes('idli')) return fallbackImages.idli;
    if (lowerName.includes('butter chicken')) return fallbackImages.curry;
    
    // Chinese
    if (lowerName.includes('noodle')) return fallbackImages.noodles;
    if (lowerName.includes('dim sum') || lowerName.includes('dumpling')) return fallbackImages.dimsum;
    if (lowerName.includes('chinese')) return fallbackImages.chinese;
    
    // Desserts
    if (lowerName.includes('ice cream')) return fallbackImages.icecream;
    if (lowerName.includes('cake')) return fallbackImages.cake;
    if (lowerName.includes('dessert')) return fallbackImages.dessert;
    
    // Sides
    if (lowerName.includes('fries')) return fallbackImages.fries;
    if (lowerName.includes('onion ring')) return fallbackImages.onionrings;
    
    // Drinks
    if (lowerName.includes('milkshake') || lowerName.includes('shake')) return fallbackImages.milkshake;
    if (lowerName.includes('coffee')) return fallbackImages.coffee;
    if (lowerName.includes('cocktail')) return fallbackImages.cocktail;
    if (lowerName.includes('drink') || lowerName.includes('beverage')) return fallbackImages.drink;
    
    // Catch-alls by cuisine
    if (lowerName.includes('indian')) return fallbackImages.indian;
    if (lowerName.includes('mexican')) return fallbackImages.taco;
    if (lowerName.includes('japanese')) return fallbackImages.sushi;
    if (lowerName.includes('chinese')) return fallbackImages.chinese;
    
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
