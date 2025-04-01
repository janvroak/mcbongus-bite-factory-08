
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!email) {
      toast.error("Please enter your email address");
      setIsLoading(false);
      return;
    }
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) {
        toast.error("Failed to send password reset email", { description: error.message });
        setIsLoading(false);
        return;
      }
      
      setIsSubmitted(true);
      toast.success("Password reset email sent!");
    } catch (error) {
      console.error("Password reset error:", error);
      toast.error("An unexpected error occurred");
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password</h1>
            <p className="text-gray-600">Enter your email to receive a password reset link</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-8">
            {isSubmitted ? (
              <div className="text-center space-y-4">
                <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Check your email</h3>
                <p className="text-gray-600">
                  We've sent a password reset link to <span className="font-medium">{email}</span>.
                  Please check your inbox and follow the instructions.
                </p>
                <Button 
                  onClick={() => navigate("/login")} 
                  variant="outline"
                  className="w-full mt-4"
                >
                  Return to Login
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john.doe@example.com"
                      className="pl-10"
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-mcbongu-500 hover:bg-mcbongu-600 text-white rounded-xl py-2"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Email...
                    </span>
                  ) : (
                    "Reset Password"
                  )}
                </Button>
              </form>
            )}
          </div>
          
          <div className="text-center mt-6">
            <Link to="/login" className="inline-flex items-center text-mcbongu-500 hover:text-mcbongu-600 hover-link">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Login
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
