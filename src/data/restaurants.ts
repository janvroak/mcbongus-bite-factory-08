
import { createMenuCategories } from './indianDishes';
import { createItalianMenuCategories } from './italianDishes';
import { createJapaneseMenuCategories } from './japaneseDishes';
import { createMexicanMenuCategories } from './mexicanDishes';
import { createAmericanMenuCategories } from './americanDishes';
import { createChineseMenuCategories } from './chineseDishes';

export const allRestaurants = [
  // Indian Restaurants
  {
    id: "r1",
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "North Indian",
    rating: 4.5,
    reviewCount: 253,
    deliveryTime: "30-40 min",
    minOrder: "₹200",
    distance: "2.1 km",
    address: "23/A, Shakambhari Complex, Dharwad",
    description: "Authentic North Indian cuisine in the heart of Dharwad. Famous for our tandoori specialties and creamy curries.",
    featured: true
  },
  {
    id: "r2",
    name: "Dosa Darbar",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f45e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1610192244261-3f33de3f45e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "South Indian",
    rating: 4.3,
    reviewCount: 189,
    deliveryTime: "25-35 min",
    minOrder: "₹150",
    distance: "1.8 km",
    address: "45, College Road, Dharwad",
    description: "Serving authentic South Indian dishes. Our dosas, idlis, and vadas are made fresh daily using traditional recipes."
  },
  {
    id: "r3",
    name: "Biryani House",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "Biryani",
    rating: 4.7,
    reviewCount: 312,
    deliveryTime: "40-50 min",
    minOrder: "₹250",
    distance: "3.2 km",
    address: "78, Jubilee Circle, Dharwad",
    description: "Specializing in aromatic biryanis cooked in the traditional dum style. Try our signature Hyderabadi Biryani.",
    featured: true
  },
  
  // Italian Restaurants
  {
    id: "r4",
    name: "La Piazza",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "Italian",
    rating: 4.6,
    reviewCount: 187,
    deliveryTime: "35-45 min",
    minOrder: "₹300",
    distance: "2.5 km",
    address: "56, Park Avenue, Dharwad",
    description: "Authentic Italian cuisine featuring hand-tossed pizzas, fresh pasta, and classic Italian desserts.",
    menuCategories: createItalianMenuCategories("r4"),
    featured: true
  },
  {
    id: "r5",
    name: "Pasta Palace",
    image: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "Italian",
    rating: 4.4,
    reviewCount: 156,
    deliveryTime: "30-40 min",
    minOrder: "₹250",
    distance: "3.0 km",
    address: "32, College Road, Dharwad",
    description: "Specializing in homemade pasta with a variety of sauces. Our tiramisu is a must-try!",
    menuCategories: createItalianMenuCategories("r5")
  },
  
  // Japanese Restaurants
  {
    id: "r6",
    name: "Sakura Sushi",
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "Japanese",
    rating: 4.8,
    reviewCount: 203,
    deliveryTime: "40-50 min",
    minOrder: "₹400",
    distance: "4.2 km",
    address: "12, Premium Plaza, Dharwad",
    description: "Authentic Japanese sushi prepared by expert chefs using the freshest ingredients.",
    menuCategories: createJapaneseMenuCategories("r6"),
    featured: true
  },
  {
    id: "r7",
    name: "Tokyo Ramen",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "Japanese",
    rating: 4.5,
    reviewCount: 178,
    deliveryTime: "35-45 min",
    minOrder: "₹350",
    distance: "3.7 km",
    address: "89, Heritage Lane, Dharwad",
    description: "Specializing in authentic Japanese ramen with rich broths and fresh noodles.",
    menuCategories: createJapaneseMenuCategories("r7")
  },
  
  // Mexican Restaurants
  {
    id: "r8",
    name: "Amigos Mexican Grill",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "Mexican",
    rating: 4.3,
    reviewCount: 165,
    deliveryTime: "30-40 min",
    minOrder: "₹300",
    distance: "2.9 km",
    address: "27, Market Road, Dharwad",
    description: "Authentic Mexican cuisine featuring tacos, burritos, and quesadillas with homemade salsas.",
    menuCategories: createMexicanMenuCategories("r8"),
    featured: true
  },
  {
    id: "r9",
    name: "Taco Town",
    image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "Mexican",
    rating: 4.2,
    reviewCount: 142,
    deliveryTime: "25-35 min",
    minOrder: "₹250",
    distance: "2.3 km",
    address: "65, Castle Road, Dharwad",
    description: "Specializing in street-style tacos and traditional Mexican flavors.",
    menuCategories: createMexicanMenuCategories("r9")
  },
  
  // American Restaurants
  {
    id: "r10",
    name: "Burger Barn",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "American",
    rating: 4.5,
    reviewCount: 231,
    deliveryTime: "25-35 min",
    minOrder: "₹200",
    distance: "1.7 km",
    address: "43, Main Street, Dharwad",
    description: "Classic American burgers, fries, and shakes made with quality ingredients.",
    menuCategories: createAmericanMenuCategories("r10"),
    featured: true
  },
  {
    id: "r11",
    name: "Roadside Diner",
    image: "https://images.unsplash.com/photo-1555196301-9acc011dfde4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1555196301-9acc011dfde4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "American",
    rating: 4.3,
    reviewCount: 178,
    deliveryTime: "30-40 min",
    minOrder: "₹250",
    distance: "2.5 km",
    address: "98, Highway Junction, Dharwad",
    description: "American comfort food including burgers, sandwiches, and all-day breakfast.",
    menuCategories: createAmericanMenuCategories("r11")
  },
  
  // Chinese Restaurants
  {
    id: "r12",
    name: "Golden Dragon",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "Chinese",
    rating: 4.4,
    reviewCount: 198,
    deliveryTime: "30-40 min",
    minOrder: "₹250",
    distance: "2.2 km",
    address: "36, Dragon Plaza, Dharwad",
    description: "Authentic Chinese cuisine featuring traditional dishes from various regions of China.",
    menuCategories: createChineseMenuCategories("r12"),
    featured: true
  },
  {
    id: "r13",
    name: "Wok & Roll",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    coverImage: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    cuisine: "Chinese",
    rating: 4.2,
    reviewCount: 156,
    deliveryTime: "25-35 min",
    minOrder: "₹200",
    distance: "1.9 km",
    address: "72, Market Complex, Dharwad",
    description: "Quick and delicious Chinese food featuring wok-fried dishes and noodle specialties.",
    menuCategories: createChineseMenuCategories("r13")
  }
];
