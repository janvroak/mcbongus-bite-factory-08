
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Headphones, MessageCircle, FileText, Phone, Mail, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-24 flex-grow">
        {/* Banner */}
        <div className="bg-mcbongu-500 text-white py-12">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-3xl font-bold mb-4">How Can We Help You?</h1>
            <p className="text-lg opacity-90">
              Get answers to your questions about McBongu's services
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <Tabs defaultValue="helpcenter" className="w-full">
            <TabsList className="w-full mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="helpcenter" className="flex items-center gap-2">
                <Headphones size={18} />
                <span>Help Center</span>
              </TabsTrigger>
              <TabsTrigger value="faqs" className="flex items-center gap-2">
                <FileText size={18} />
                <span>FAQs</span>
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <MessageCircle size={18} />
                <span>Contact Us</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <FileText size={18} />
                <span>Privacy Policy</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Help Center Content */}
            <TabsContent value="helpcenter" className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Help Center</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Order Issues</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Track your current order</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Report missing items</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Request a refund</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Order taking too long</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Account & Payments</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Update payment methods</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Change account details</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Manage addresses</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Payment failed issues</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">App & Website</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>App installation help</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Technical issues</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Browser compatibility</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Location services</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Delivery</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Delivery time estimates</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Delivery zones</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Delivery partner issues</span>
                    </li>
                    <li className="flex items-center text-gray-600 hover:text-mcbongu-500 transition-colors">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      <span>Special delivery instructions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-5 bg-mcbongu-50 rounded-lg border border-mcbongu-100 mt-8">
                <h3 className="text-lg font-semibold mb-2">Need immediate assistance?</h3>
                <p className="text-gray-600 mb-4">Our team is available 24/7 to help you with any issues.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+919480212345" className="flex items-center gap-2 px-4 py-2 bg-mcbongu-500 text-white rounded-md hover:bg-mcbongu-600 transition-colors">
                    <Phone size={16} />
                    <span>Call Us</span>
                  </a>
                  <Link to="/contact" className="flex items-center gap-2 px-4 py-2 bg-white text-mcbongu-500 border border-mcbongu-200 rounded-md hover:bg-mcbongu-50 transition-colors">
                    <MessageCircle size={16} />
                    <span>Message Us</span>
                  </Link>
                </div>
              </div>
            </TabsContent>
            
            {/* FAQs Content */}
            <TabsContent value="faqs" className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Ordering</h3>
                  
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-medium text-gray-900 mb-2">How do I place an order?</h4>
                      <p className="text-gray-600">
                        You can place an order by browsing restaurants, selecting items, adding them to your cart, and proceeding to checkout. Make sure you're logged in to your account for a smooth ordering experience.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Can I schedule an order for later?</h4>
                      <p className="text-gray-600">
                        Yes, during checkout you can select "Schedule for Later" and choose your preferred delivery time up to 2 days in advance.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-medium text-gray-900 mb-2">What is the minimum order value?</h4>
                      <p className="text-gray-600">
                        The minimum order value varies by restaurant. You can see the minimum order amount on each restaurant's page.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">How can I use promo codes?</h4>
                      <p className="text-gray-600">
                        You can apply promo codes during checkout. Simply enter the code in the "Apply Coupon" field and the discount will be automatically applied if valid.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Delivery</h3>
                  
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-medium text-gray-900 mb-2">How long will my delivery take?</h4>
                      <p className="text-gray-600">
                        Delivery times vary depending on your location, the restaurant's preparation time, and current delivery conditions. The estimated delivery time is shown at checkout.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Is there a delivery fee?</h4>
                      <p className="text-gray-600">
                        Yes, delivery fees vary based on your distance from the restaurant and are clearly displayed during checkout.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">What if I'm not at home when the delivery arrives?</h4>
                      <p className="text-gray-600">
                        Our delivery partners will wait for up to 3 minutes. You can also add delivery instructions or update your phone number to ensure smooth delivery.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Payment & Refunds</h3>
                  
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-medium text-gray-900 mb-2">What payment methods do you accept?</h4>
                      <p className="text-gray-600">
                        We accept credit/debit cards, UPI, net banking, and cash on delivery for most orders.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-medium text-gray-900 mb-2">How do I request a refund?</h4>
                      <p className="text-gray-600">
                        You can request a refund through the "Help" section in your account or by contacting our customer support. Refunds are processed within 5-7 business days.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Is online payment secure?</h4>
                      <p className="text-gray-600">
                        Yes, all our payment gateways are secure and PCI-DSS compliant. We use industry-standard encryption to protect your payment information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Contact Us Content */}
            <TabsContent value="contact" className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Get in Touch</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-mcbongu-500 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Customer Support</p>
                          <p className="text-gray-600">+91 94802 12345</p>
                          <p className="text-gray-500 text-sm">Available 24/7</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-mcbongu-500 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Email Us</p>
                          <p className="text-gray-600">support@mcbongus.com</p>
                          <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-mcbongu-500 mt-1" />
                        <div>
                          <p className="font-medium text-gray-900">Office Address</p>
                          <p className="text-gray-600">Station Road, Dharwad,</p>
                          <p className="text-gray-600">Karnataka 580001, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Business Hours</h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-gray-600">Monday - Friday</p>
                        <p className="font-medium text-gray-900">9:00 AM - 10:00 PM</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">Saturday</p>
                        <p className="font-medium text-gray-900">9:00 AM - 11:00 PM</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">Sunday</p>
                        <p className="font-medium text-gray-900">10:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Send Us a Message</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mcbongu-500 focus:border-mcbongu-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mcbongu-500 focus:border-mcbongu-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mcbongu-500 focus:border-mcbongu-500"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mcbongu-500 focus:border-mcbongu-500"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-mcbongu-500 text-white font-medium rounded-md hover:bg-mcbongu-600 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </TabsContent>
            
            {/* Privacy Policy Content */}
            <TabsContent value="privacy" className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="prose max-w-none">
                  <p className="text-gray-600">Last Updated: June 15, 2023</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">1. Introduction</h3>
                  <p className="text-gray-600">
                    McBongu's ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services.
                  </p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">2. Information We Collect</h3>
                  <p className="text-gray-600">We may collect the following types of information:</p>
                  <ul className="list-disc pl-5 mt-2 mb-4 text-gray-600">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, delivery address, and payment information.</li>
                    <li><strong>Usage Information:</strong> How you interact with our services, including order history, browsing behavior, and device information.</li>
                    <li><strong>Location Information:</strong> With your permission, we collect precise location data to improve delivery accuracy.</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">3. How We Use Your Information</h3>
                  <p className="text-gray-600">We use your information for various purposes, including:</p>
                  <ul className="list-disc pl-5 mt-2 mb-4 text-gray-600">
                    <li>Processing and fulfilling orders</li>
                    <li>Providing customer support</li>
                    <li>Sending promotional offers and newsletters (with your consent)</li>
                    <li>Improving our services and user experience</li>
                    <li>Detecting and preventing fraudulent activities</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">4. Sharing Your Information</h3>
                  <p className="text-gray-600">We may share your information with:</p>
                  <ul className="list-disc pl-5 mt-2 mb-4 text-gray-600">
                    <li>Restaurants to fulfill your orders</li>
                    <li>Delivery partners to deliver your orders</li>
                    <li>Payment processors to complete transactions</li>
                    <li>Service providers who help us operate our business</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">5. Your Choices</h3>
                  <p className="text-gray-600">
                    You have several rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-5 mt-2 mb-4 text-gray-600">
                    <li>Access and update your information through your account settings</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request deletion of your personal information (subject to legal requirements)</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">6. Security</h3>
                  <p className="text-gray-600">
                    We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">7. Contact Us</h3>
                  <p className="text-gray-600">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-gray-600 mt-2">
                    Email: privacy@mcbongus.com<br />
                    Phone: +91 94802 12345<br />
                    Address: Station Road, Dharwad, Karnataka 580001, India
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
