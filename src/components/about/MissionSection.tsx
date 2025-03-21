
const MissionSection = () => {
  return (
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
  );
};

export default MissionSection;
