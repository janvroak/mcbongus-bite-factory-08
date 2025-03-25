
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Github, Linkedin, Twitter } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "P Aneesh",
      role: "Co-Founder & CEO",
      image: "/geto.jpg",
      bio: "Visionary leader who conceptualized McBongu's to revolutionize food delivery.",
      socials: {
        twitter: "https://twitter.com/paneesh",
        linkedin: "https://linkedin.com/in/paneesh",
        github: "https://github.com/paneesh"
      }
    },
    {
      name: "Janaki Ram",
      role: "Co-Founder & CTO",
      image: "/nanami.jpg",
      bio: "Tech innovator who built the platform's architecture from the ground up.",
      socials: {
        twitter: "https://twitter.com/janakiram",
        linkedin: "https://linkedin.com/in/janakiram",
        github: "https://github.com/janakiram"
      }
    },
    {
      name: "Rithwik M",
      role: "Co-Founder & COO",
      image: "/yuji.jpg",
      bio: "Operations expert who ensures seamless delivery experiences every time.",
      socials: {
        twitter: "https://twitter.com/rithwikm",
        linkedin: "https://linkedin.com/in/rithwikm",
        github: "https://github.com/rithwikm"
      }
    },
    {
      name: "Rishik N",
      role: "Co-Founder & CMO",
      image: "/shigemo.jpg",
      bio: "Marketing genius who built the McBongu's brand and customer acquisition strategy.",
      socials: {
        twitter: "https://twitter.com/rishikn",
        linkedin: "https://linkedin.com/in/rishikn",
        github: "https://github.com/rishikn"
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-mcbongu-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-mcbongu-900 mb-6">Our Story</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                Founded in 2023, McBongu's was born from a simple idea: make delicious food from your favorite local restaurants accessible to everyone with just a few taps on your phone.
              </p>
              <p className="text-lg text-gray-700">
                Today, we connect thousands of customers with hundreds of restaurants across the country, delivering joy one meal at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-mcbongu-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At McBongu's, we're on a mission to transform how people experience food delivery. We believe everyone deserves:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-mcbongu-500 font-bold">•</span>
                    <span>Access to their favorite local restaurants, no matter where they are</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-mcbongu-500 font-bold">•</span>
                    <span>Lightning-fast delivery that respects their time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-mcbongu-500 font-bold">•</span>
                    <span>Food that arrives as fresh and delicious as if they were dining in</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-mcbongu-500 font-bold">•</span>
                    <span>An ordering experience that's simple, transparent, and reliable</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-mcbongu-500/80 to-mcbongu-600/80 z-10 rounded-lg"></div>
                <div className="absolute inset-0 bg-[url('/restaurant-kitchen.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-3xl font-bold text-white text-center px-6">Delivering Joy Since 2023</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-mcbongu-900 mb-4">Meet Our Founders</h2>
            <p className="text-lg text-gray-700 mb-16 max-w-3xl mx-auto">
              Our diverse team of innovators who came together with one shared vision: to revolutionize food delivery.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-32 w-32 border-4 border-mcbongu-100">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-bold text-mcbongu-900">{member.name}</h3>
                  <p className="text-mcbongu-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-mcbongu-900 mb-4">How McBongu's Works</h2>
            <p className="text-lg text-gray-700 mb-16 max-w-3xl mx-auto">
              Ordering your favorite food has never been easier. Our platform connects you with the best restaurants in your area in just a few simple steps.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="h-16 w-16 rounded-full bg-mcbongu-100 text-mcbongu-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-mcbongu-900 mb-3">Browse Restaurants</h3>
                <p className="text-gray-600">
                  Discover local restaurants and browse their menus to find exactly what you're craving.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="h-16 w-16 rounded-full bg-mcbongu-100 text-mcbongu-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-mcbongu-900 mb-3">Place Your Order</h3>
                <p className="text-gray-600">
                  Select your items, customize as needed, and check out securely with multiple payment options.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="h-16 w-16 rounded-full bg-mcbongu-100 text-mcbongu-500 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-mcbongu-900 mb-3">Enjoy Your Meal</h3>
                <p className="text-gray-600">
                  Track your order in real-time and enjoy your food delivered right to your doorstep.
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

export default AboutPage;
