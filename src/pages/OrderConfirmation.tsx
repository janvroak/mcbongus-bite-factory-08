
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle, Package, Truck, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    id: "confirmed",
    title: "Order Confirmed",
    icon: <CheckCircle className="w-6 h-6" />,
    description: "Your order has been received"
  },
  {
    id: "preparing",
    title: "Preparing",
    icon: <Package className="w-6 h-6" />,
    description: "Restaurant is preparing your food"
  },
  {
    id: "ontheway",
    title: "On the way",
    icon: <Truck className="w-6 h-6" />,
    description: "Your order is on the way"
  },
  {
    id: "delivered",
    title: "Delivered",
    icon: <MapPin className="w-6 h-6" />,
    description: "Order has been delivered"
  }
];

const OrderConfirmation = () => {
  const { id } = useParams<{ id: string }>();
  const [currentStep, setCurrentStep] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState("35-45");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate order progression
    const timer1 = setTimeout(() => setCurrentStep(1), 3000);
    const timer2 = setTimeout(() => {
      setCurrentStep(2);
      setEstimatedTime("25-35");
    }, 8000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 animate-scale-in">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Thank You For Your Order!
            </h1>
            <p className="text-gray-600">
              Your order #{id} has been placed successfully.
            </p>
          </div>
          
          {/* Order Tracking */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-10">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Order Status</h2>
            </div>
            
            <div className="p-6">
              <div className="relative">
                {/* Progress line */}
                <div 
                  className="absolute top-9 left-7 w-[calc(100%-56px)] h-1 bg-gray-200"
                  style={{
                    backgroundImage: `linear-gradient(to right, #e84c76 ${(currentStep / (steps.length - 1)) * 100}%, transparent 0)`
                  }}
                ></div>
                
                {/* Steps */}
                <div className="relative z-10 flex justify-between">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-col items-center">
                      <div 
                        className={`w-14 h-14 rounded-full flex items-center justify-center ${
                          index <= currentStep 
                            ? 'bg-mcbongu-500 text-white' 
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {step.icon}
                      </div>
                      <span 
                        className={`mt-2 font-medium ${
                          index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                        }`}
                      >
                        {step.title}
                      </span>
                      <span 
                        className={`text-xs mt-1 text-center ${
                          index <= currentStep ? 'text-gray-600' : 'text-gray-400'
                        }`}
                      >
                        {step.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 flex items-center justify-center gap-6 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-mcbongu-500 mr-2" />
                  <div>
                    <span className="block text-sm text-gray-500">Estimated Delivery Time</span>
                    <span className="font-semibold text-gray-900">{estimatedTime} minutes</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-mcbongu-500 mr-2" />
                  <div>
                    <span className="block text-sm text-gray-500">Delivery Address</span>
                    <span className="font-semibold text-gray-900">123 Main St, Dharwad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Details */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-10">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Items</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <span className="text-gray-700">2 x Classic Burger</span>
                      <span className="block text-sm text-gray-500">Burger Kingdom</span>
                    </div>
                    <span className="text-gray-700">₹1,798</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <span className="text-gray-700">1 x French Fries</span>
                      <span className="block text-sm text-gray-500">Burger Kingdom</span>
                    </div>
                    <span className="text-gray-700">₹399</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <div>
                      <span className="text-gray-700">2 x Soft Drink</span>
                      <span className="block text-sm text-gray-500">Burger Kingdom</span>
                    </div>
                    <span className="text-gray-700">₹398</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Payment Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹2,595</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>GST</span>
                    <span>₹129.75</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>₹49</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹599</span>
                  </div>
                  <div className="flex justify-between font-semibold text-gray-900 pt-2 border-t border-gray-100">
                    <span>Total</span>
                    <span>₹2,174.75</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-medium text-gray-900 mb-3">Customer Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-sm text-gray-500">Name</span>
                    <span className="text-gray-900">John Doe</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Phone</span>
                    <span className="text-gray-900">(123) 456-7890</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Email</span>
                    <span className="text-gray-900">john.doe@example.com</span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Payment Method</span>
                    <span className="text-gray-900">Credit Card</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-mcbongu-500 hover:bg-mcbongu-600 text-white rounded-full">
              <Link to="/">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
