
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Copy, Tag, Check, PercentCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Offers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast.success("Promo code copied to clipboard!");
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const offers = [
    {
      id: 1,
      title: "50% OFF Your First Order",
      code: "WELCOME50",
      description: "Get 50% off on your first order up to $20. Valid for new users only.",
      validUntil: "December 31, 2023",
      minOrder: "$30",
      category: "New Users"
    },
    {
      id: 2,
      title: "Free Delivery Weekend",
      code: "FREEWEEKEND",
      description: "Enjoy free delivery on all orders placed during weekends.",
      validUntil: "Ongoing",
      minOrder: "$15",
      category: "Weekends"
    },
    {
      id: 3,
      title: "15% OFF for Birthday Month",
      code: "BDAYTREAT",
      description: "Celebrate your birthday month with 15% off on all orders.",
      validUntil: "Valid during birthday month",
      minOrder: "$20",
      category: "Birthday Special"
    },
    {
      id: 4,
      title: "Buy 1 Get 1 Free",
      code: "BOGO2023",
      description: "Order one meal and get another one of equal or lesser value for free.",
      validUntil: "Limited time offer",
      minOrder: "$25",
      category: "Special Deal"
    },
    {
      id: 5,
      title: "30% OFF on Family Meals",
      code: "FAMILY30",
      description: "Save 30% when you order family meal bundles from participating restaurants.",
      validUntil: "December 15, 2023",
      minOrder: "$50",
      category: "Family Deals"
    },
    {
      id: 6,
      title: "10% OFF for Healthcare Workers",
      code: "THANKYOU10",
      description: "As a token of appreciation, all healthcare workers can get 10% off their orders.",
      validUntil: "Ongoing",
      minOrder: "No minimum",
      category: "Healthcare Heroes"
    }
  ];

  const categories = ["All Offers", ...new Set(offers.map(offer => offer.category))];
  const [selectedCategory, setSelectedCategory] = useState("All Offers");

  const filteredOffers = selectedCategory === "All Offers" 
    ? offers 
    : offers.filter(offer => offer.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-mcbongu-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-mcbongu-900 mb-6">Promotions & Offers</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover exclusive deals and discounts from your favorite restaurants. Save big on your next order!
            </p>
          </div>
        </section>

        {/* Offers Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-mcbongu-500 hover:bg-mcbongu-600" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOffers.map((offer) => (
                <div key={offer.id} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden">
                  <div className="bg-mcbongu-500 text-white py-4 px-6">
                    <h3 className="text-xl font-bold">{offer.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <Tag className="h-4 w-4 text-mcbongu-500" />
                        <span className="text-sm text-gray-500">{offer.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-mcbongu-500" />
                        <span className="text-sm text-gray-500">Valid until: {offer.validUntil}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{offer.description}</p>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600">Minimum order: {offer.minOrder}</p>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                      <div className="font-mono font-bold text-mcbongu-800">{offer.code}</div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="flex items-center gap-1 text-mcbongu-500 hover:text-mcbongu-600"
                        onClick={() => handleCopyCode(offer.code)}
                      >
                        {copiedCode === offer.code ? (
                          <>
                            <Check className="h-4 w-4" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Refer a Friend */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center gap-2 text-mcbongu-500 mb-4">
                    <PercentCircle className="h-6 w-6" />
                    <span className="font-semibold">Special Offer</span>
                  </div>
                  <h2 className="text-3xl font-bold text-mcbongu-900 mb-4">Refer a Friend, Get $10 Off</h2>
                  <p className="text-gray-700 mb-6">
                    Invite your friends to McBongu's. When they sign up and place their first order using your referral code, you'll both receive $10 off your next order!
                  </p>
                  <Button className="bg-mcbongu-500 hover:bg-mcbongu-600">
                    Refer Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="md:w-1/2 bg-[url('/refer-friends.jpg')] bg-cover bg-center min-h-[300px]">
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-mcbongu-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-mcbongu-900 mb-2">How do I redeem a promo code?</h3>
                <p className="text-gray-700">
                  Simply enter the promo code in the designated field during checkout before confirming your order. The discount will be automatically applied if your order meets the requirements.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-mcbongu-900 mb-2">Can I use multiple promo codes at once?</h3>
                <p className="text-gray-700">
                  No, only one promo code can be applied per order. Choose the one that gives you the best value for your specific order.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-mcbongu-900 mb-2">Why isn't my promo code working?</h3>
                <p className="text-gray-700">
                  Promo codes might not work if: they've expired, your order doesn't meet the minimum requirement, you've already used the code before (for one-time use codes), or the promotion is specific to certain restaurants or items.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-mcbongu-900 mb-2">How often are new offers added?</h3>
                <p className="text-gray-700">
                  We regularly update our promotions, with special seasonal offers and restaurant-specific deals added weekly. Check back often or subscribe to our newsletter to stay updated.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
