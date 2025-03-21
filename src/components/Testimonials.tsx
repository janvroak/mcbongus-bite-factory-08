
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "McBongu's has completely changed how I order food. The delivery is always on time, and the food arrives hot and fresh. Their customer service is exceptional!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Busy Professional",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "As someone who works long hours, McBongu's has been a lifesaver. The app is intuitive, the restaurant selection is impressive, and I've never had a bad experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "College Student",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    quote: "McBongu's offers great student discounts, which I absolutely love! The delivery is always quick, and they have so many affordable options to choose from.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const activeTestimonial = testimonials[activeIndex];
  
  return (
    <section className="py-16 bg-mcbongu-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Controls for larger screens */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 rounded-full border-gray-200 text-gray-400 hover:text-mcbongu-500 hover:border-mcbongu-200 z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 rounded-full border-gray-200 text-gray-400 hover:text-mcbongu-500 hover:border-mcbongu-200 z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div 
            className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
            key={activeTestimonial.id}
          >
            <div className="flex flex-col items-center text-center animate-fade-in">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-mcbongu-100">
                <img 
                  src={activeTestimonial.avatar} 
                  alt={activeTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < activeTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 text-lg italic mb-6">
                "{activeTestimonial.quote}"
              </blockquote>
              
              <div>
                <p className="font-semibold text-gray-900">{activeTestimonial.name}</p>
                <p className="text-gray-500 text-sm">{activeTestimonial.role}</p>
              </div>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-mcbongu-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Mobile controls */}
          <div className="flex justify-center mt-6 space-x-3 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-gray-200 text-gray-400 hover:text-mcbongu-500 hover:border-mcbongu-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-gray-200 text-gray-400 hover:text-mcbongu-500 hover:border-mcbongu-200"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
