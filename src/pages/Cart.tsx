
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Minus, Plus, X, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/useCartStore";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateItemQuantity, removeItem } = useCartStore();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const applyPromoCode = () => {
    if (!promoCode) return;
    
    setIsApplyingPromo(true);
    
    // Simulate API call
    setTimeout(() => {
      if (promoCode.toUpperCase() === "MCBONGU20") {
        const subtotal = calculateSubtotal();
        setDiscount(subtotal * 0.2); // 20% discount
      } else {
        setDiscount(0);
      }
      setIsApplyingPromo(false);
    }, 1000);
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };
  
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * 0.05; // GST in India is 5% for restaurants
    const deliveryFee = 49; // ₹49 delivery fee
    return subtotal + tax + deliveryFee - discount;
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                <ShoppingCart className="h-12 w-12 text-gray-400" />
              </div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button 
                asChild
                className="bg-mcbongu-500 hover:bg-mcbongu-600 text-white rounded-full"
              >
                <Link to="/restaurants">Browse Restaurants</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Group items by restaurant
  const restaurantGroups = cartItems.reduce((groups, item) => {
    if (!groups[item.restaurantName]) {
      groups[item.restaurantName] = [];
    }
    groups[item.restaurantName].push(item);
    return groups;
  }, {} as Record<string, typeof cartItems>);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              className="mr-4"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              {Object.entries(restaurantGroups).map(([restaurantName, items]) => (
                <div key={restaurantName} className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                  <div className="p-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-900">
                      Items from {restaurantName}
                    </h2>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {items.map((item) => (
                      <div key={item.id} className="p-4">
                        <div className="flex">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000";
                              }}
                            />
                          </div>
                          
                          <div className="ml-4 flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium text-gray-900">{item.name}</h3>
                              <p className="font-medium text-gray-900">
                                ₹{(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                            
                            <p className="text-gray-600 text-sm">{item.description}</p>
                            
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center border border-gray-300 rounded-full">
                                <button 
                                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-mcbongu-500"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="mx-2 text-gray-700">{item.quantity}</span>
                                <button 
                                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-mcbongu-500"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-mcbongu-500"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Promo Code */}
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-medium text-gray-900 mb-3">Promo Code</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mcbongu-500 focus:border-transparent"
                  />
                  <Button 
                    onClick={applyPromoCode}
                    disabled={isApplyingPromo || !promoCode}
                    className="bg-mcbongu-500 hover:bg-mcbongu-600 text-white"
                  >
                    {isApplyingPromo ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Applying
                      </span>
                    ) : "Apply"}
                  </Button>
                </div>
                
                {discount > 0 && (
                  <p className="text-green-600 text-sm mt-2">
                    20% discount applied!
                  </p>
                )}
                
                <p className="text-gray-600 text-sm mt-2">
                  Try code "MCBONGU20" for 20% off your order.
                </p>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{calculateSubtotal().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>GST (5%)</span>
                    <span>₹{(calculateSubtotal() * 0.05).toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>₹49.00</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-₹{discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-semibold text-lg text-gray-900 mb-6">
                  <span>Total</span>
                  <span>₹{calculateTotal().toFixed(2)}</span>
                </div>
                
                <Button 
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-mcbongu-500 hover:bg-mcbongu-600 text-white rounded-full py-2"
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-gray-500 text-xs text-center mt-4">
                  By proceeding to checkout, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
