
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Clock, DollarSign, MapPin, ChevronDown, ChevronUp, ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuItem from "@/components/MenuItem";
import { toast } from "sonner";

// Dummy restaurant data
const restaurants = [
  {
    id: "1",
    name: "Burger Kingdom",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    coverImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    cuisine: "American, Burgers",
    rating: 4.8,
    reviewCount: 342,
    deliveryTime: "20-30 min",
    minOrder: "$10",
    distance: "1.2 miles",
    address: "123 Burger Street, New York, NY 10001",
    description: "Serving the juiciest burgers in town since 2010. Our burgers are made with 100% Angus beef and served with fresh ingredients.",
    menuCategories: [
      {
        id: "burgers",
        name: "Burgers",
        items: [
          {
            id: "classic-burger",
            name: "Classic Burger",
            description: "100% Angus beef patty with lettuce, tomato, onion, and our special sauce",
            price: "$8.99",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
            tags: ["Bestseller", "Spicy"],
            nutritionInfo: {
              calories: "650 kcal",
              protein: "32g",
              carbs: "45g",
              fat: "28g",
              allergens: ["Gluten", "Soy", "Dairy"]
            }
          },
          {
            id: "cheese-burger",
            name: "Cheeseburger",
            description: "Classic burger with American cheese",
            price: "$9.99",
            image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
            nutritionInfo: {
              calories: "720 kcal",
              protein: "36g",
              carbs: "48g",
              fat: "34g",
              allergens: ["Gluten", "Soy", "Dairy"]
            }
          },
          {
            id: "bacon-burger",
            name: "Bacon Burger",
            description: "Classic burger with crispy bacon and cheese",
            price: "$11.99",
            image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
            tags: ["Popular"],
            nutritionInfo: {
              calories: "820 kcal",
              protein: "42g",
              carbs: "48g",
              fat: "42g",
              allergens: ["Gluten", "Soy", "Dairy"]
            }
          }
        ]
      },
      {
        id: "sides",
        name: "Sides",
        items: [
          {
            id: "french-fries",
            name: "French Fries",
            description: "Crispy golden fries seasoned with sea salt",
            price: "$3.99",
            image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
            tags: ["Vegan"],
            nutritionInfo: {
              calories: "320 kcal",
              protein: "4g",
              carbs: "42g",
              fat: "16g",
              allergens: []
            }
          },
          {
            id: "onion-rings",
            name: "Onion Rings",
            description: "Battered and fried onion rings",
            price: "$4.99",
            image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
            nutritionInfo: {
              calories: "400 kcal",
              protein: "6g",
              carbs: "48g",
              fat: "22g",
              allergens: ["Gluten"]
            }
          }
        ]
      },
      {
        id: "drinks",
        name: "Drinks",
        items: [
          {
            id: "soda",
            name: "Soft Drink",
            description: "Choice of Coke, Diet Coke, Sprite, or Fanta",
            price: "$1.99",
            image: "https://images.unsplash.com/photo-1596803244618-8dbee441d70b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
            nutritionInfo: {
              calories: "150 kcal",
              protein: "0g",
              carbs: "39g",
              fat: "0g",
              allergens: []
            }
          },
          {
            id: "milkshake",
            name: "Milkshake",
            description: "Creamy milkshake made with premium ice cream",
            price: "$4.99",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
            tags: ["Dessert"],
            nutritionInfo: {
              calories: "460 kcal",
              protein: "9g",
              carbs: "65g",
              fat: "18g",
              allergens: ["Dairy"]
            }
          }
        ]
      }
    ]
  },
  // Add other restaurants from previous data here...
];

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
  menuCategories: {
    id: string;
    name: string;
    items: {
      id: string;
      name: string;
      description: string;
      price: string;
      image: string;
      tags?: string[];
      nutritionInfo?: {
        calories: string;
        protein: string;
        carbs: string;
        fat: string;
        allergens?: string[];
      };
    }[];
  }[];
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
    const foundRestaurant = restaurants.find(r => r.id === id);
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
      
      // Initialize all categories as expanded
      const initialExpanded: Record<string, boolean> = {};
      foundRestaurant.menuCategories.forEach(category => {
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
                {restaurant.menuCategories.map((category) => (
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
                        {category.items.map((item) => (
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
                    <p className="text-gray-600">Phone: (123) 456-7890</p>
                    <p className="text-gray-600">Email: info@burgerkingdom.com</p>
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
