
interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tags?: string[];
  nutritionInfo?: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    allergens?: string[];
  };
}

interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  minOrder: string;
  featured?: boolean;
  menuItems?: MenuItem[];
}

export const allRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Kamat Hotel",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    cuisine: "South Indian, North Karnataka",
    rating: 4.8,
    deliveryTime: "20-30 min",
    minOrder: "₹150",
    featured: true,
    menuItems: [
      { name: "Jolada Rotti", description: "Traditional sorghum bread", price: "₹50", image: "https://images.unsplash.com/photo-1630383249896-05c7278ef229?q=80&w=1000" },
      { name: "Girmit", description: "Spicy snack with puffed rice", price: "₹65", image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1000" }
    ]
  },
  {
    id: "2",
    name: "Basaveshwar Khanavali",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "North Karnataka, Traditional",
    rating: 4.5,
    deliveryTime: "25-35 min",
    minOrder: "₹200",
    featured: true,
    menuItems: [
      { name: "Akki Rotti", description: "Rice flour flatbread", price: "₹70", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000" },
      { name: "Ennegayi", description: "Stuffed brinjal curry", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "3",
    name: "Swadisht",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000",
    cuisine: "North Indian, Punjabi",
    rating: 4.7,
    deliveryTime: "30-40 min",
    minOrder: "₹250",
    featured: true,
    menuItems: [
      { name: "Butter Chicken", description: "Creamy tomato chicken curry", price: "₹280", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000" },
      { name: "Naan", description: "Leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1596406328004-8f823492a50a?q=80&w=1000" }
    ]
  },
  {
    id: "4",
    name: "Dharwad Peda House",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000",
    cuisine: "Sweets, Desserts",
    rating: 4.9,
    deliveryTime: "15-25 min",
    minOrder: "₹100",
    featured: true,
    menuItems: [
      { name: "Dharwad Peda", description: "Famous milk-based sweet", price: "₹50 per piece", image: "https://images.unsplash.com/photo-1605197948554-93ea1b6393e9?q=80&w=1000" },
      { name: "Mysore Pak", description: "Ghee-based sweet", price: "₹70 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "5",
    name: "Udupi Krishna Bhavan",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "South Indian, Udupi",
    rating: 4.6,
    deliveryTime: "20-30 min",
    minOrder: "₹120",
    featured: true,
    menuItems: [
      { name: "Masala Dosa", description: "Crispy rice crepe with potato filling", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli Sambar", description: "Steamed rice cakes with lentil soup", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "6",
    name: "Niyaz",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
    cuisine: "Mughlai, Biryani",
    rating: 4.5,
    deliveryTime: "30-45 min",
    minOrder: "₹200",
    featured: true,
    menuItems: [
      { name: "Chicken Biryani", description: "Fragrant rice with spiced chicken", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Seekh Kebab", description: "Minced meat skewers", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "7",
    name: "Bombay Chaat House",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    cuisine: "Street Food, Chaat",
    rating: 4.4,
    deliveryTime: "15-25 min",
    minOrder: "₹100",
    featured: false,
    menuItems: [
      { name: "Pani Puri", description: "Hollow crisp filled with spicy water", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Bhel Puri", description: "Savory snack with puffed rice", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "8",
    name: "Annapurna Thali",
    image: "https://images.unsplash.com/photo-1573551565922-aec98de55ee2?q=80&w=1000",
    cuisine: "North Indian, South Indian",
    rating: 4.3,
    deliveryTime: "25-40 min",
    minOrder: "₹180",
    featured: false,
    menuItems: [
      { name: "North Indian Thali", description: "Complete meal with variety of dishes", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "South Indian Thali", description: "Complete South Indian meal", price: "₹190", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "9",
    name: "Shiv Bhojan Griha",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=1000",
    cuisine: "Maharashtrian, Traditional",
    rating: 4.2,
    deliveryTime: "30-45 min",
    minOrder: "₹150",
    featured: false,
    menuItems: [
      { name: "Puran Poli", description: "Sweet flatbread", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Misal Pav", description: "Spicy sprout curry with bread", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "10",
    name: "New Modern Hotel",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.1,
    deliveryTime: "20-30 min",
    minOrder: "₹120",
    featured: false,
    menuItems: [
      { name: "Bisi Bele Bath", description: "Spicy rice dish with lentils", price: "₹110", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Ragi Mudde", description: "Finger millet balls", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "11",
    name: "Punjabi Dhaba",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
    cuisine: "Punjabi, North Indian",
    rating: 4.4,
    deliveryTime: "25-40 min",
    minOrder: "₹200",
    featured: false
  },
  {
    id: "12",
    name: "Sona's Multicuisine",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "Chinese, North Indian",
    rating: 4.0,
    deliveryTime: "30-45 min",
    minOrder: "₹250",
    featured: false
  },
  {
    id: "13",
    name: "Malgudi Cafe",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000",
    cuisine: "South Indian, Coffee",
    rating: 4.6,
    deliveryTime: "15-25 min",
    minOrder: "₹100",
    featured: false
  },
  {
    id: "14",
    name: "Desi Bytes",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    cuisine: "Fast Food, Indian",
    rating: 4.2,
    deliveryTime: "20-30 min",
    minOrder: "₹150",
    featured: false
  },
  {
    id: "15",
    name: "Royal Biryani House",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1000",
    cuisine: "Biryani, Mughlai",
    rating: 4.5,
    deliveryTime: "30-45 min",
    minOrder: "₹250",
    featured: false
  },
  {
    id: "16",
    name: "Sai Prasad",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "North Karnataka, Veg",
    rating: 4.3,
    deliveryTime: "20-35 min",
    minOrder: "₹120",
    featured: false
  },
  {
    id: "17",
    name: "China Town",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000",
    cuisine: "Chinese, Asian",
    rating: 4.0,
    deliveryTime: "30-45 min",
    minOrder: "₹180",
    featured: false
  },
  {
    id: "18",
    name: "Pizza Junction",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000", 
    cuisine: "Pizza, Fast Food",
    rating: 4.1,
    deliveryTime: "25-40 min",
    minOrder: "₹200",
    featured: false
  },
  {
    id: "19",
    name: "Tandoori Nights",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
    cuisine: "North Indian, Mughlai",
    rating: 4.4,
    deliveryTime: "30-45 min",
    minOrder: "₹220",
    featured: false
  },
  {
    id: "20",
    name: "Dosae",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    cuisine: "South Indian, Dosa",
    rating: 4.6,
    deliveryTime: "15-30 min",
    minOrder: "₹100",
    featured: false
  },
  {
    id: "21",
    name: "Darshini",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minOrder: "₹80",
    featured: false
  },
  {
    id: "22",
    name: "Shree Annapoorna",
    image: "https://images.unsplash.com/photo-1573551565922-aec98de55ee2?q=80&w=1000",
    cuisine: "South Indian, Tamil",
    rating: 4.2,
    deliveryTime: "25-35 min",
    minOrder: "₹120",
    featured: false
  },
  {
    id: "23",
    name: "Vaishali",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=1000",
    cuisine: "Maharashtrian, South Indian",
    rating: 4.4,
    deliveryTime: "20-35 min",
    minOrder: "₹150",
    featured: false
  },
  {
    id: "24",
    name: "Shree Tiffins",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "South Indian, Breakfast",
    rating: 4.5,
    deliveryTime: "15-25 min",
    minOrder: "₹90",
    featured: false
  },
  {
    id: "25",
    name: "Urban Dhaba",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
    cuisine: "North Indian, Punjabi",
    rating: 4.2,
    deliveryTime: "25-40 min",
    minOrder: "₹200",
    featured: false
  },
  {
    id: "26",
    name: "Gokul Oottupura",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "Kerala, South Indian",
    rating: 4.1,
    deliveryTime: "25-40 min",
    minOrder: "₹180",
    featured: false
  },
  {
    id: "27",
    name: "Cafe Coffee World",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "Cafe, Continental",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minOrder: "₹150",
    featured: false
  },
  {
    id: "28",
    name: "Sri Udupi Park",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.4,
    deliveryTime: "15-30 min",
    minOrder: "₹100",
    featured: false
  },
  {
    id: "29",
    name: "KR Kitchen",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000",
    cuisine: "North Karnataka, Traditional",
    rating: 4.0,
    deliveryTime: "30-45 min",
    minOrder: "₹120",
    featured: false
  },
  {
    id: "30",
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "North Indian, Mughlai",
    rating: 4.2,
    deliveryTime: "25-40 min",
    minOrder: "₹220",
    featured: false
  },
  {
    id: "31",
    name: "Dharwad Idlis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    cuisine: "South Indian, Breakfast",
    rating: 4.6,
    deliveryTime: "15-25 min",
    minOrder: "₹80",
    featured: false
  },
  {
    id: "32",
    name: "Kabab Corner",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
    cuisine: "Mughlai, BBQ",
    rating: 4.3,
    deliveryTime: "25-40 min",
    minOrder: "₹180",
    featured: false
  },
  {
    id: "33",
    name: "Paratha Box",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "North Indian, Street Food",
    rating: 4.2,
    deliveryTime: "20-30 min",
    minOrder: "₹120",
    featured: false
  },
  {
    id: "34",
    name: "Shri Krishna Sagar",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.4,
    deliveryTime: "15-30 min",
    minOrder: "₹100",
    featured: false
  },
  {
    id: "35",
    name: "Taj Mahal Restaurant",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
    cuisine: "North Indian, Mughlai",
    rating: 4.1,
    deliveryTime: "30-45 min",
    minOrder: "₹200",
    featured: false
  },
  {
    id: "36",
    name: "Dharwad Pav Bhaji",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    cuisine: "Street Food, Maharashtrian",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minOrder: "₹120",
    featured: false
  },
  {
    id: "37",
    name: "Karavali",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "Coastal, Seafood",
    rating: 4.5,
    deliveryTime: "30-45 min",
    minOrder: "₹250",
    featured: false
  },
  {
    id: "38",
    name: "Biryani Paradise",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000",
    cuisine: "Biryani, Hyderabadi",
    rating: 4.4,
    deliveryTime: "30-45 min",
    minOrder: "₹200",
    featured: false
  },
  {
    id: "39",
    name: "Upahara Darshini",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.2,
    deliveryTime: "15-25 min",
    minOrder: "₹90",
    featured: false
  },
  {
    id: "40",
    name: "Andhra Bhavan",
    image: "https://images.unsplash.com/photo-1617819912313-e393cfb7e732?q=80&w=1000",
    cuisine: "Andhra, Spicy",
    rating: 4.3,
    deliveryTime: "25-40 min",
    minOrder: "₹180",
    featured: false
  },
  {
    id: "41",
    name: "Bengali Delight",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=1000",
    cuisine: "Bengali, Sweets",
    rating: 4.4,
    deliveryTime: "30-45 min",
    minOrder: "₹200",
    featured: false
  },
  {
    id: "42",
    name: "Shahi Durbar",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "Mughlai, North Indian",
    rating: 4.1,
    deliveryTime: "25-40 min",
    minOrder: "₹220",
    featured: false
  },
  {
    id: "43",
    name: "Veg Paradise",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000",
    cuisine: "Pure Veg, Indian",
    rating: 4.2,
    deliveryTime: "20-35 min",
    minOrder: "₹150",
    featured: false
  },
  {
    id: "44",
    name: "Biriyani Hut",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000",
    cuisine: "Biryani, Mughlai",
    rating: 4.3,
    deliveryTime: "30-45 min",
    minOrder: "₹220",
    featured: false
  },
  {
    id: "45",
    name: "South Indian Express",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "South Indian, Idli-Dosa",
    rating: 4.4,
    deliveryTime: "15-30 min",
    minOrder: "₹100",
    featured: false
  },
  {
    id: "46",
    name: "Dharwad Chaat Centre",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    cuisine: "Street Food, Chaat",
    rating: 4.3,
    deliveryTime: "15-25 min",
    minOrder: "₹80",
    featured: false
  },
  {
    id: "47",
    name: "Belgaum Kunda Shop",
    image: "https://images.unsplash.com/photo-1605197948554-93ea1b6393e9?q=80&w=1000",
    cuisine: "Sweets, Desserts",
    rating: 4.6,
    deliveryTime: "20-30 min",
    minOrder: "₹100",
    featured: false
  },
  {
    id: "48",
    name: "North Karnataka Meals",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "North Karnataka, Traditional",
    rating: 4.3,
    deliveryTime: "25-40 min",
    minOrder: "₹150",
    featured: false
  },
  {
    id: "49",
    name: "Anna Kuteera",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.1,
    deliveryTime: "20-30 min",
    minOrder: "₹120",
    featured: false
  },
  {
    id: "50",
    name: "Dharwad Food Court",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    cuisine: "Multi-cuisine, Food Court",
    rating: 4.0,
    deliveryTime: "30-45 min",
    minOrder: "₹200",
    featured: false
  }
];
