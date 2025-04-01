
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Package, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useOrderStatus } from "@/hooks/useApi";

const OrderTracking = () => {
  const { id: orderId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: orderStatus, isLoading, error } = useOrderStatus(orderId || null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getStatusStep = () => {
    if (!orderStatus) return 0;
    
    switch (orderStatus.status) {
      case 'preparing': return 1;
      case 'ready': return 2;
      case 'out-for-delivery': return 3;
      case 'delivered': return 4;
      default: return 0;
    }
  };

  const statusStep = getStatusStep();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Track Your Order</h1>
            <p className="text-gray-600 mt-2">Order ID: {orderId}</p>
          </div>
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-mcbongu-500"></div>
              <p className="mt-4 text-gray-600">Fetching your order status...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading order status</p>
              <Button 
                onClick={() => navigate("/help")}
                className="mt-4"
                variant="outline"
              >
                Contact Support
              </Button>
            </div>
          ) : (
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Status: <span className="text-mcbongu-600 capitalize">{orderStatus?.status.replace(/-/g, ' ')}</span>
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Estimated delivery: 30-45 minutes
                    </p>
                  </div>
                  <Button 
                    onClick={() => navigate("/help")}
                    className="mt-4 md:mt-0"
                    variant="outline"
                  >
                    Need Help?
                  </Button>
                </div>
                
                {/* Progress Tracker */}
                <div className="relative">
                  <div className="overflow-hidden h-2 mb-6 text-xs flex rounded bg-gray-200">
                    <div 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-mcbongu-500 transition-all duration-500"
                      style={{ width: `${statusStep * 25}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className={`flex flex-col items-center ${statusStep >= 1 ? 'text-mcbongu-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full mb-1 ${statusStep >= 1 ? 'bg-mcbongu-100 text-mcbongu-600' : 'bg-gray-100 text-gray-400'}`}>
                        <Package className="h-4 w-4" />
                      </div>
                      <span className="text-xs">Preparing</span>
                    </div>
                    <div className={`flex flex-col items-center ${statusStep >= 2 ? 'text-mcbongu-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full mb-1 ${statusStep >= 2 ? 'bg-mcbongu-100 text-mcbongu-600' : 'bg-gray-100 text-gray-400'}`}>
                        <Clock className="h-4 w-4" />
                      </div>
                      <span className="text-xs">Ready</span>
                    </div>
                    <div className={`flex flex-col items-center ${statusStep >= 3 ? 'text-mcbongu-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full mb-1 ${statusStep >= 3 ? 'bg-mcbongu-100 text-mcbongu-600' : 'bg-gray-100 text-gray-400'}`}>
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span className="text-xs">On the way</span>
                    </div>
                    <div className={`flex flex-col items-center ${statusStep >= 4 ? 'text-mcbongu-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full mb-1 ${statusStep >= 4 ? 'bg-mcbongu-100 text-mcbongu-600' : 'bg-gray-100 text-gray-400'}`}>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs">Delivered</span>
                    </div>
                  </div>
                </div>
                
                {orderStatus?.status === "out-for-delivery" && (
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Delivery Partner Information</h3>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium">Rahul S.</p>
                        <p className="text-sm text-gray-600">+91 98765-43210</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="font-medium text-gray-900 mb-4">Delivery Address</h3>
                  <p className="text-gray-700">
                    123 Main Street, Apartment 4B<br />
                    Dharwad, Karnataka 580001
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderTracking;
