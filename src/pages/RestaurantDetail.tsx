
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Clock, DollarSign, MapPin, ChevronDown, ChevronUp, ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuItem from "@/components/MenuItem";
import { toast } from "sonner";
import { allRestaurants } from "@/data/restaurants";
import { createMenuCategories } from "@/data/indianDishes";

interface Restaurant {
  id: string;
  name: string;
  image: string;
  coverImage: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  minOrder: string;
  distance: string;
  address: string;
  description: string;
  menuCategories?: any[];
}

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [cartCount, setCartCount] = useState(0);
  const [activeTab, setActiveTab] = useState("menu");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find restaurant by ID
    const foundRestaurant = allRestaurants.find(r => r.id === id);
    if (foundRestaurant) {
      // Generate menu categories with Indian dishes if they don't exist
      const restaurantWithMenu = {
        ...foundRestaurant,
        menuCategories: foundRestaurant.menuCategories || createMenuCategories(foundRestaurant.id)
      };
      
      setRestaurant(restaurantWithMenu);
      
      // Initialize all categories as expanded
      const initialExpanded: Record<string, boolean> = {};
      restaurantWithMenu.menuCategories.forEach(category => {
        initialExpanded[category.id] = true;
      });
      setExpandedCategories(initialExpanded);
    }
  }, [id]);
  
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };
  
  const handleAddToCart = (itemId: string) => {
    setCartCount(prev => prev + 1);
    
    toast.success("Item added to cart", {
      description: "You can view your cart by clicking the cart icon."
    });
  };
  
  if (!restaurant) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <p className="text-center text-gray-600">Loading restaurant details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="relative h-64 sm:h-80 md:h-96">
          <img 
            src={restaurant.coverImage} 
            alt={restaurant.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          <Button 
            variant="ghost" 
            className="absolute top-4 left-4 text-white bg-black/30 hover:bg-black/50 rounded-full"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back
          </Button>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{restaurant.name}</h1>
                <p className="text-gray-600 mt-1">{restaurant.cuisine}</p>
              </div>
              
              <div className="flex items-center mt-3 md:mt-0">
                <div className="flex items-center bg-green-50 text-green-700 font-semibold px-3 py-1 rounded">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  <span>{restaurant.rating}</span>
                  <span className="mx-1 text-gray-400">|</span>
                  <span className="text-gray-600 text-sm">{restaurant.reviewCount} reviews</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 text-mcbongu-500 mr-2" />
                <span>{restaurant.deliveryTime} delivery</span>
              </div>
              <div className="flex items-center text-gray-600">
                <DollarSign className="h-5 w-5 text-mcbongu-500 mr-2" />
                <span>Min. order {restaurant.minOrder}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 text-mcbongu-500 mr-2" />
                <span>{restaurant.distance} away</span>
              </div>
            </div>
            
            <p className="text-gray-700">{restaurant.description}</p>
          </div>
          
          <Tabs defaultValue="menu" className="mb-12" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
              <TabsTrigger value="menu">Menu</TabsTrigger>
              <TabsTrigger value="info">Information</TabsTrigger>
            </TabsList>
            
            <TabsContent value="menu" className="mt-6">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {restaurant.menuCategories?.map((category) => (
                  <div key={category.id} className="border-b border-gray-100 last:border-b-0">
                    <button
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                      onClick={() => toggleCategory(category.id)}
                    >
                      <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
                      {expandedCategories[category.id] ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    
                    {expandedCategories[category.id] && (
                      <div className="animate-accordion-down">
                        {category.items.map((item: any) => (
                          <MenuItem 
                            key={item.id} 
                            item={item} 
                            onAddToCart={handleAddToCart} 
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="info" className="mt-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Restaurant Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-1">Address</h3>
                    <p className="text-gray-600">{restaurant.address}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700 mb-1">Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
                      <p>Saturday: 11:00 AM - 11:00 PM</p>
                      <p>Sunday: 11:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700 mb-1">Contact</h3>
                    <p className="text-gray-600">Phone: +91 94123 45678</p>
                    <p className="text-gray-600">Email: info@{restaurant.name.toLowerCase().replace(/\s+/g, '')}dharwad.com</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Cart Button */}
        {cartCount > 0 && (
          <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
            <Button 
              onClick={() => navigate("/cart")}
              className="relative bg-mcbongu-500 hover:bg-mcbongu-600 text-white py-3 px-6 rounded-full shadow-lg animate-slide-up transition-all"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              View Cart ({cartCount})
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
