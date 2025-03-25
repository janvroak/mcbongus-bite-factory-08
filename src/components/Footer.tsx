
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-mcbongu-500">McBongu's</h3>
            <p className="text-gray-600 max-w-xs">
              Delivering your favorite meals with speed, quality, and a touch of culinary magic in Dharwad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-mcbongu-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-mcbongu-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-mcbongu-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-mcbongu-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-gray-600 hover:text-mcbongu-500 transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-600 hover:text-mcbongu-500 transition-colors">
                  Promotions
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-600 hover:text-mcbongu-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-600 hover:text-mcbongu-500 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-mcbongu-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-mcbongu-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-mcbongu-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-600">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-mcbongu-500" />
                <span>Station Road, Dharwad, Karnataka 580001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone size={18} className="flex-shrink-0 text-mcbongu-500" />
                <span>+91 94802 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail size={18} className="flex-shrink-0 text-mcbongu-500" />
                <span>support@mcbongus.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-gray-500 text-center text-sm">
            © {new Date().getFullYear()} McBongu's. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
