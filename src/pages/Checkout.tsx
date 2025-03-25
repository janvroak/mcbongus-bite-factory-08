
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Landmark, Check, ChevronsUpDown, User, MapPin, Phone, Home, Building, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/useCartStore";

const paymentOptions = [
  {
    id: "card",
    title: "Credit/Debit Card",
    icon: <CreditCard className="h-4 w-4" />
  },
  {
    id: "banking",
    title: "Internet Banking",
    icon: <Landmark className="h-4 w-4" />
  }
];

const addressTypes = [
  {
    id: "home",
    title: "Home",
    icon: <Home className="h-4 w-4" />
  },
  {
    id: "work",
    title: "Work",
    icon: <Briefcase className="h-4 w-4" />
  },
  {
    id: "other",
    title: "Other",
    icon: <Building className="h-4 w-4" />
  }
];

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [addressType, setAddressType] = useState("home");
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  
  // Card fields (dummy)
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if cart is empty, redirect to cart page if it is
    if (cartItems.length === 0) {
      navigate("/cart");
      toast.error("Your cart is empty");
    }
    
    // Check if a promo code was applied in the cart page
    const urlParams = new URLSearchParams(window.location.search);
    setPromoApplied(urlParams.get("promo") === "applied");
  }, [cartItems, navigate]);
  
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };
  
  const calculateDiscount = () => {
    return promoApplied ? calculateSubtotal() * 0.2 : 0; // 20% discount if promo was applied
  };
  
  const calculateTax = () => {
    return calculateSubtotal() * 0.05; // 5% GST
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const tax = calculateTax();
    const deliveryFee = 49;
    
    return subtotal + tax + deliveryFee - discount;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !phone || !address || !city || !state || !zipCode) {
      toast.error("Please fill all the address fields");
      return;
    }
    
    if (paymentMethod === "card" && (!cardNumber || !cardName || !expiry || !cvv)) {
      toast.error("Please fill all the payment details");
      return;
    }
    
    setIsProcessing(true);
    
    // Generate a random order ID
    const orderId = "ORD" + Math.floor(100000 + Math.random() * 900000);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart(); // Clear the cart after successful order
      navigate(`/order-confirmation/${orderId}`);
      
      toast.success("Order placed successfully!", {
        description: "Your order has been received and is being processed."
      });
    }, 2000);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              className="mr-4"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Delivery & Payment */}
              <div className="lg:col-span-2 space-y-8">
                {/* Delivery Details */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Delivery Details</h2>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Doe"
                              className="pl-10"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="(123) 456-7890"
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="123 Main St, Apt 4B"
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Dharwad"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Select value={state} onValueChange={setState}>
                            <SelectTrigger id="state">
                              <SelectValue placeholder="Select State" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="KA">Karnataka</SelectItem>
                              <SelectItem value="MH">Maharashtra</SelectItem>
                              <SelectItem value="TN">Tamil Nadu</SelectItem>
                              <SelectItem value="AP">Andhra Pradesh</SelectItem>
                              <SelectItem value="KL">Kerala</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">PIN Code</Label>
                          <Input
                            id="zipCode"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            placeholder="580001"
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Label className="mb-3 block">Address Type</Label>
                        <div className="flex flex-wrap gap-3">
                          {addressTypes.map((type) => (
                            <div 
                              key={type.id}
                              onClick={() => setAddressType(type.id)}
                              className={`
                                flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-colors
                                ${addressType === type.id 
                                  ? 'bg-mcbongu-500 text-white' 
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                              `}
                            >
                              {type.icon}
                              <span>{type.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Payment Method */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Method</h2>
                    
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                      {paymentOptions.map((option) => (
                        <div 
                          key={option.id}
                          className={`
                            relative flex items-center p-4 rounded-lg border cursor-pointer transition-all
                            ${paymentMethod === option.id 
                              ? 'border-mcbongu-500 bg-mcbongu-50' 
                              : 'border-gray-200 hover:border-mcbongu-200'}
                          `}
                        >
                          <RadioGroupItem value={option.id} id={option.id} className="sr-only" />
                          <Label
                            htmlFor={option.id}
                            className="flex items-center flex-1 cursor-pointer"
                          >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-4">
                              {option.icon}
                            </div>
                            <span className="font-medium text-gray-900">{option.title}</span>
                          </Label>
                          
                          {paymentMethod === option.id && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-mcbongu-500 text-white">
                              <Check className="h-3 w-3" />
                            </div>
                          )}
                        </div>
                      ))}
                    </RadioGroup>
                    
                    {paymentMethod === "card" && (
                      <div className="mt-6 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input
                            id="cardName"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input
                              id="expiry"
                              value={expiry}
                              onChange={(e) => setExpiry(e.target.value)}
                              placeholder="MM/YY"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              value={cvv}
                              onChange={(e) => setCvv(e.target.value)}
                              placeholder="123"
                              type="password"
                            />
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg mt-4 text-sm text-blue-700">
                          For testing, you can use any valid-looking card number.
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === "banking" && (
                      <div className="mt-6 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="bankName">Bank Name</Label>
                          <Select>
                            <SelectTrigger id="bankName">
                              <SelectValue placeholder="Select Bank" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hdfc">HDFC Bank</SelectItem>
                              <SelectItem value="sbi">State Bank of India</SelectItem>
                              <SelectItem value="icici">ICICI Bank</SelectItem>
                              <SelectItem value="axis">Axis Bank</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg mt-4 text-sm text-blue-700">
                          You will be redirected to your bank's website to complete the payment.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Right Column: Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                  <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>₹{calculateSubtotal().toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-600">
                      <span>GST (5%)</span>
                      <span>₹{calculateTax().toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span>₹49.00</span>
                    </div>
                    
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-₹{calculateDiscount().toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between font-semibold text-lg text-gray-900 mb-6">
                    <span>Total</span>
                    <span>₹{calculateTotal().toFixed(2)}</span>
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-mcbongu-500 hover:bg-mcbongu-600 text-white rounded-full py-2"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Order...
                      </span>
                    ) : "Place Order"}
                  </Button>
                  
                  <p className="text-gray-500 text-xs text-center mt-4">
                    By placing your order, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
