
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Search,
  MapPin
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Determine if current page is a landing page (which may have transparent navbar)
  const isLandingPage = location.pathname === '/';
  
  // Use background on specific pages or when scrolled
  const useBackground = isScrolled || !isLandingPage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useBackground
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className={`text-3xl font-bold ${useBackground ? 'text-mcbongu-900' : 'text-white'}`}>
              McBongu's
            </h1>
          </Link>

          {/* Location selector - only on large screens */}
          <div className={`hidden md:flex items-center space-x-2 ${useBackground ? 'text-gray-700' : 'text-white'} text-base`}>
            <MapPin className="h-5 w-5" />
            <span className="font-medium">Dharwad</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/restaurants" 
              className={`navbar-item text-base font-medium ${useBackground ? 'text-gray-700' : 'text-white'} hover:text-mcbongu-500 transition-colors`}
            >
              Restaurants
            </Link>
            <Link 
              to="/offers" 
              className={`navbar-item text-base font-medium ${useBackground ? 'text-gray-700' : 'text-white'} hover:text-mcbongu-500 transition-colors`}
            >
              Offers
            </Link>
            <Link 
              to="/about" 
              className={`navbar-item text-base font-medium ${useBackground ? 'text-gray-700' : 'text-white'} hover:text-mcbongu-500 transition-colors`}
            >
              About
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`${useBackground ? 'text-gray-700 hover:text-mcbongu-500' : 'text-white hover:text-white/80'} h-12 w-12`}
              >
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                variant={useBackground ? "outline" : "secondary"}
                className={`${useBackground ? "" : "bg-white/20 backdrop-blur-sm border-white/40 hover:bg-white/30 text-white"} text-base py-2.5 px-5`}
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                variant={useBackground ? "default" : "secondary"}
                className={`${useBackground ? "bg-mcbongu-500 hover:bg-mcbongu-600" : "bg-white text-mcbongu-600 hover:bg-white/90"} text-base py-2.5 px-5`}
              >
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${useBackground ? 'text-gray-700' : 'text-white'} h-12 w-12`}
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white animate-slide-down">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <div className="flex items-center space-x-2 text-gray-700 border-b border-gray-100 pb-2">
              <MapPin className="h-5 w-5" />
              <span className="text-base font-medium">Dharwad</span>
            </div>
            
            <Link to="/restaurants" className="block navbar-item py-3 text-base font-medium text-gray-700 hover:text-mcbongu-500">
              Restaurants
            </Link>
            <Link to="/offers" className="block navbar-item py-3 text-base font-medium text-gray-700 hover:text-mcbongu-500">
              Offers
            </Link>
            <Link to="/about" className="block navbar-item py-3 text-base font-medium text-gray-700 hover:text-mcbongu-500">
              About
            </Link>
            
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
              <Link to="/cart" className="flex items-center space-x-2 navbar-item text-gray-700 hover:text-mcbongu-500">
                <ShoppingCart className="h-6 w-6" />
                <span className="text-base">Cart</span>
              </Link>
              <Link to="/login" className="flex items-center space-x-2 navbar-item text-gray-700 hover:text-mcbongu-500">
                <User className="h-6 w-6" />
                <span className="text-base">Account</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
