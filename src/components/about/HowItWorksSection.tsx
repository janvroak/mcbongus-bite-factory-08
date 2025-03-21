
const HowItWorksSection = () => {
  return (
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
  );
};

export default HowItWorksSection;
