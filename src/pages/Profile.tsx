
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, Settings, LogOut, Mail, Phone, Edit, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useApi";
import { supabase } from "@/integrations/supabase/client";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
      return;
    }

    const fetchProfileData = async () => {
      if (!user) return;
      
      try {
        setIsLoadingProfile(true);
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (error) {
          console.error("Error fetching profile:", error);
          toast.error("Failed to load profile");
        } else {
          setProfileData(data);
        }
      } catch (error) {
        console.error("Profile fetch error:", error);
        toast.error("Failed to load profile data");
      } finally {
        setIsLoadingProfile(false);
      }
    };

    if (user) {
      fetchProfileData();
    }
  }, [user, isAuthenticated, isLoading, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      toast.success("Successfully logged out");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out");
    }
  };

  if (isLoading || isLoadingProfile) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mcbongu-500"></div>
        </main>
        <Footer />
      </div>
    );
  }

  const userEmail = user?.email || "No email available";
  const userName = profileData?.full_name || user?.user_metadata?.full_name || "User";
  const userPhone = profileData?.phone_number || "Not provided";
  const userInitials = userName.split(' ').map((n: string) => n[0]).join('').toUpperCase();
  
  // Format date for account creation
  const createdAt = user?.created_at ? new Date(user.created_at) : new Date();
  const formattedDate = createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Summary Card */}
            <Card className="col-span-1">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarFallback className="bg-mcbongu-500 text-white text-3xl">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-semibold">{userName}</h2>
                <p className="text-gray-500 mt-1">{userEmail}</p>
                
                <div className="w-full mt-6">
                  <Button
                    variant="outline"
                    className="w-full mb-2 justify-start"
                    onClick={() => {}}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full mb-2 justify-start"
                    onClick={() => {}}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                  </Button>
                  <Button
                    variant="destructive"
                    className="w-full mt-4 justify-start"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Profile Details Card */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader className="pb-3">
                <h2 className="text-xl font-semibold">Personal Information</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">{userName}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="font-medium">{userEmail}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>
                      <p className="font-medium">{userPhone}</p>
                      {!profileData?.phone_number && (
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-mcbongu-500 font-normal"
                          onClick={() => {}}
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Add phone number
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p className="font-medium">{formattedDate}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-6 flex justify-end">
                <Button 
                  variant="outline" 
                  className="mr-2"
                >
                  Order History
                </Button>
                <Button 
                  variant="outline"
                >
                  Saved Addresses
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
