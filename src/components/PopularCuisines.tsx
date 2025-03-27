
import { useState } from "react";
import { Link } from "react-router-dom";

const cuisines = [
  {
    id: "italian",
    name: "Italian",
    image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "american",
    name: "American",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "japanese",
    name: "Japanese",
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "mexican",
    name: "Mexican",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "indian",
    name: "Indian",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "chinese",
    name: "Chinese",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  }
];

const PopularCuisines = () => {
  const [hoveredCuisine, setHoveredCuisine] = useState<string | null>(null);
  
  return (
    <section className="section-container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Cuisines</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore restaurants by your favorite food category
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {cuisines.map((cuisine) => (
          <Link
            key={cuisine.id}
            to={`/restaurants?cuisine=${cuisine.id}`}
            className="relative block rounded-xl overflow-hidden aspect-square group"
            onMouseEnter={() => setHoveredCuisine(cuisine.id)}
            onMouseLeave={() => setHoveredCuisine(null)}
          >
            <img
              src={cuisine.image}
              alt={cuisine.name}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{
                transform: hoveredCuisine === cuisine.id ? 'scale(1.1)' : 'scale(1)'
              }}
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              style={{
                opacity: hoveredCuisine === cuisine.id ? 0.85 : 0.7,
                transition: 'opacity 0.3s ease'
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                className="text-white font-semibold text-lg"
                style={{
                  transform: hoveredCuisine === cuisine.id ? 'translateY(0) scale(1.1)' : 'translateY(0) scale(1)',
                  transition: 'transform 0.3s ease'
                }}
              >
                {cuisine.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularCuisines;
