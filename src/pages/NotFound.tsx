
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="max-w-md text-center px-4">
          <h1 className="text-9xl font-bold text-mcbongu-500">404</h1>
          <div className="h-2 w-16 bg-mcbongu-500 mx-auto my-6"></div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="rounded-full bg-mcbongu-500 hover:bg-mcbongu-600">
            <Link to="/" className="flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
