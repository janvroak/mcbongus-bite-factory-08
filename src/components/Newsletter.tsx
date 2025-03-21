
import { useState } from "react";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
      
      toast({
        title: "Successfully subscribed!",
        description: "You'll now receive our latest offers and updates.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section className="bg-mcbongu-500 py-14">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Stay Updated with McBongu's
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for exclusive deals, new restaurant alerts, and special offers delivered directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full py-3 px-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/10 backdrop-blur-sm placeholder-white/60 text-white border border-white/20"
                disabled={isSubmitting || isSubscribed}
              />
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting || isSubscribed}
              className={`rounded-full py-3 px-6 font-medium transition-all duration-300 ${
                isSubscribed 
                  ? "bg-green-500 hover:bg-green-600" 
                  : "bg-white text-mcbongu-700 hover:bg-white/90"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-mcbongu-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing
                </span>
              ) : isSubscribed ? (
                <span className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  Subscribed
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </span>
              )}
            </Button>
          </form>
          
          <p className="text-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
