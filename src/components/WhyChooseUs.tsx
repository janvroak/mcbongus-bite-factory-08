
import { Truck, Clock, Award, Shield } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-8 w-8 text-[#ce6927]" />,
    title: "Fast Delivery",
    description: "We deliver your order to your doorstep as quickly as possible with our optimized routes."
  },
  {
    icon: <Clock className="h-8 w-8 text-[#ce6927]" />,
    title: "Real-Time Tracking",
    description: "Know exactly where your food is with our real-time GPS order tracking system."
  },
  {
    icon: <Award className="h-8 w-8 text-[#ce6927]" />,
    title: "Quality Food",
    description: "We partner with only the best restaurants to ensure your meals are of the highest quality."
  },
  {
    icon: <Shield className="h-8 w-8 text-[#ce6927]" />,
    title: "Secure Payments",
    description: "Multiple secure payment options for a hassle-free checkout experience."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#f8f8f8] mb-4">Why Choose McBongu's</h2>
          <p className="text-[#f8f8f8]/80 max-w-xl mx-auto">
            We're dedicated to providing the best food delivery service with these key benefits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-[#ce6927]/10 p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#f8f8f8] mb-2">{feature.title}</h3>
              <p className="text-[#f8f8f8]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
