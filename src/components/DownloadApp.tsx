
import { Button } from "@/components/ui/button";
import { Smartphone, Check } from "lucide-react";

const DownloadApp = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-lg animate-slide-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-mcbongu-100 text-mcbongu-600 mb-4">
              <Smartphone className="h-4 w-4 mr-2" />
              <span>Mobile App</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Download Our App for <br />
              <span className="text-mcbongu-500">Fast & Easy</span> Ordering
            </h2>
            
            <p className="text-gray-600 mb-8">
              Get the full McBongu's experience on your phone. Order food, track your delivery in real-time, save your favorite restaurants, and receive exclusive app-only offers.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Exclusive in-app discounts and promotions",
                "Faster checkout with saved payment methods",
                "Real-time GPS order tracking",
                "Personalized recommendations"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-mcbongu-500 mt-0.5 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl h-14 px-6 flex items-center justify-center"
              >
                <div className="mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5227 12.0211C17.5095 10.1011 18.2547 8.44072 19.6252 7.22324C18.7462 5.92228 17.3275 5.2305 15.5015 5.0962C13.7633 4.96553 11.8465 6.01296 11.1269 6.01296C10.371 6.01296 8.71875 5.13099 7.33581 5.13099C4.59268 5.17662 1.625 7.4249 1.625 11.9961C1.625 13.4976 1.90357 15.048 2.4607 16.6448C3.19531 18.7563 5.9248 24 8.76339 23.9197C10.1201 23.8864 11.0913 22.9578 12.8932 22.9578C14.6429 22.9578 15.5352 23.9197 17.0634 23.9197C19.9282 23.8796 22.4177 19.1594 23.1114 17.0372C19.8525 15.6159 17.5227 12.0211 17.5227 12.0211ZM14.8574 3.18013C15.9619 1.89392 15.7539 0.695633 15.7143 0.25C14.7232 0.30344 13.5928 0.865528 12.9257 1.55329C12.1895 2.31129 11.7192 3.27868 11.8401 4.78012C12.9233 4.85985 13.8594 4.32732 14.8574 3.18013Z" fill="white"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base font-semibold -mt-1">App Store</div>
                </div>
              </Button>
              
              <Button
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl h-14 px-6 flex items-center justify-center"
              >
                <div className="mr-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.60971 1.59439C3.42402 1.83169 3.33203 2.14295 3.33203 2.51149V21.4885C3.33203 21.857 3.42402 22.1683 3.60971 22.4056L3.70313 22.4927L14.4514 11.8507V11.5V11.1493L3.7248 0.507324L3.60971 1.59439Z" fill="white"/>
                    <path d="M18.3672 15.7148L14.4512 11.8505V11.5V11.1495L18.3672 7.28516L18.4844 7.34988L23.0977 9.91114C24.3008 10.5932 24.3008 11.7073 23.0977 12.391L18.4844 14.9522L18.3672 15.7148Z" fill="white"/>
                    <path d="M18.4844 14.9522L14.4512 11L3.60938 21.7142C4.01562 22.1478 4.6582 22.2095 5.38672 21.7759L18.4844 14.9522Z" fill="white"/>
                    <path d="M3.60938 0.285767C4.6582 -0.147829 5.01172 0.0272079 5.38672 0.22412L18.4844 7.04779L14.4512 11L3.60938 0.285767Z" fill="white"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base font-semibold -mt-1">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
          
          {/* Phone Image */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl lg:ml-10 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="McBongu's Mobile App" 
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-mcbongu-500/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mcbongu-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-80 -z-10"></div>
      </div>
    </section>
  );
};

export default DownloadApp;
