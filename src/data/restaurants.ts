
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
      { name: "Girmit", description: "Spicy snack with puffed rice", price: "₹65", image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1000" },
      { name: "Benne Dosa", description: "Crispy dosa made with butter", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Neer Dosa", description: "Soft rice crepes served with chutney", price: "₹70", image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1000" },
      { name: "Mirchi Bajji", description: "Stuffed green chilies fried in batter", price: "₹40", image: "https://images.unsplash.com/photo-1630383249896-05c7278ef229?q=80&w=1000" },
      { name: "Mensinkai Sambhar", description: "Traditional North Karnataka sambhar with spicy chili", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hesarubele Palya", description: "Moong sprouts stir-fry with coconut", price: "₹70", image: "https://images.unsplash.com/photo-1630383249896-05c7278ef229?q=80&w=1000" },
      { name: "Dharwad Peda", description: "Famous milk sweet from Dharwad", price: "₹25", image: "https://images.unsplash.com/photo-1605197948554-93ea1b6393e9?q=80&w=1000" },
      { name: "Ragi Mudde", description: "Finger millet balls served with sambhar", price: "₹60", image: "https://images.unsplash.com/photo-1630383249896-05c7278ef229?q=80&w=1000" },
      { name: "Uppittu", description: "Semolina breakfast with vegetables", price: "₹55", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
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
      { name: "Ennegayi", description: "Stuffed brinjal curry", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Badanekai Yennegai", description: "Eggplant curry with peanut-coconut stuffing", price: "₹130", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000" },
      { name: "Bisi Bele Bath", description: "Spicy rice and lentil dish", price: "₹110", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kadubu", description: "Steamed dumplings with coconut filling", price: "₹80", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000" },
      { name: "Sajjige", description: "Sweet semolina pudding with dry fruits", price: "₹65", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Averehuli Saaru", description: "Tangy lentil soup with mangoes", price: "₹90", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000" },
      { name: "Nuchinunde", description: "Steamed lentil dumplings", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Holige", description: "Sweet flatbread with lentil stuffing", price: "₹75", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000" },
      { name: "Kori Gassi", description: "Mangalorean chicken curry", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
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
      { name: "Naan", description: "Leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1596406328004-8f823492a50a?q=80&w=1000" },
      { name: "Paneer Tikka Masala", description: "Grilled cottage cheese in spiced gravy", price: "₹220", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000" },
      { name: "Dal Makhani", description: "Creamy black lentil curry", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Amritsari Chole", description: "Spicy chickpea curry Punjabi style", price: "₹160", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000" },
      { name: "Malai Kofta", description: "Cottage cheese dumplings in rich gravy", price: "₹230", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sarson Da Saag", description: "Mustard greens with makki roti", price: "₹190", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000" },
      { name: "Tandoori Roti", description: "Whole wheat flatbread", price: "₹30", image: "https://images.unsplash.com/photo-1596406328004-8f823492a50a?q=80&w=1000" },
      { name: "Kadhai Paneer", description: "Cottage cheese in spicy bell pepper gravy", price: "₹240", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000" },
      { name: "Raita", description: "Yogurt with cucumber and spices", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
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
      { name: "Mysore Pak", description: "Ghee-based sweet", price: "₹70 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kunda", description: "Milk sweet with cardamom flavor", price: "₹60 per piece", image: "https://images.unsplash.com/photo-1605197948554-93ea1b6393e9?q=80&w=1000" },
      { name: "Jalebi", description: "Crispy fried sweet soaked in syrup", price: "₹180 per kg", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gulab Jamun", description: "Deep-fried milk solid balls in sugar syrup", price: "₹20 per piece", image: "https://images.unsplash.com/photo-1605197948554-93ea1b6393e9?q=80&w=1000" },
      { name: "Holige", description: "Sweet flatbread with coconut filling", price: "₹75 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Badam Puri", description: "Almond-based crispy sweet", price: "₹240 per kg", image: "https://images.unsplash.com/photo-1605197948554-93ea1b6393e9?q=80&w=1000" },
      { name: "Rasmalai", description: "Cottage cheese balls in sweetened milk", price: "₹35 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kheer", description: "Rice pudding with dry fruits", price: "₹90 per bowl", image: "https://images.unsplash.com/photo-1605197948554-93ea1b6393e9?q=80&w=1000" },
      { name: "Chandrakala", description: "Deep-fried sweet with khoya filling", price: "₹25 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
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
      { name: "Idli Sambar", description: "Steamed rice cakes with lentil soup", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Set Dosa", description: "Soft spongy dosa served with chutney", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mangalore Buns", description: "Sweet banana-flavored deep-fried bread", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Uddina Vada", description: "Crispy urad dal fritters", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Saagu", description: "Mixed vegetable curry", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kesari Bath", description: "Sweet semolina dessert", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Bisi Bele Bath", description: "Spicy rice and lentil dish", price: "₹110", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tomato Bath", description: "Tomato flavored rice", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
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
      { name: "Seekh Kebab", description: "Minced meat skewers", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mutton Biryani", description: "Basmati rice cooked with tender mutton pieces", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hyderabadi Biryani", description: "Spicy layered rice and meat dish", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken Tikka", description: "Marinated and grilled chicken pieces", price: "₹170", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken Korma", description: "Chicken in rich creamy sauce", price: "₹190", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rumali Roti", description: "Thin handkerchief-like bread", price: "₹25", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mughlai Paratha", description: "Stuffed bread with eggs and minced meat", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Phirni", description: "Ground rice pudding", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Shahi Tukda", description: "Royal bread pudding", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
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
      { name: "Bhel Puri", description: "Savory snack with puffed rice", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sev Puri", description: "Crisp puris topped with chutneys and sev", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dahi Puri", description: "Puri filled with yogurt and chutneys", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Raj Kachori", description: "Large kachori with various fillings", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Papdi Chaat", description: "Crisp wafers with toppings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Aloo Tikki", description: "Spiced potato patties with chutneys", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Ragda Pattice", description: "Potato patties with white peas curry", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Samosa Chaat", description: "Crushed samosa with chickpeas and chutneys", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dahi Kachori", description: "Kachori topped with yogurt and spices", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
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
      { name: "South Indian Thali", description: "Complete South Indian meal", price: "₹190", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rajasthani Thali", description: "Traditional Rajasthani feast", price: "₹250", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gujarati Thali", description: "Sweet and savory Gujarati dishes", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Punjabi Thali", description: "Hearty Punjabi meal", price: "₹240", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mini Thali", description: "Smaller portion thali for light eaters", price: "₹150", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Special Festival Thali", description: "Festive thali with seasonal specials", price: "₹300", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Biryani", description: "Fragrant rice with vegetables", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Butter Masala", description: "Cottage cheese in rich tomato gravy", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gulab Jamun", description: "Sweet milk solids dumpling", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
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
      { name: "Misal Pav", description: "Spicy sprout curry with bread", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada Pav", description: "Spicy potato fritter sandwich", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pav Bhaji", description: "Mashed vegetable curry with bread", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Thalipeeth", description: "Multi-grain savory pancake", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sabudana Khichdi", description: "Tapioca pearls with peanuts", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Bharli Vangi", description: "Stuffed eggplant dish", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Zunka Bhakri", description: "Chickpea flour curry with millet flatbread", price: "₹110", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Solkadhi", description: "Kokum and coconut milk digestive drink", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Shrikhand", description: "Sweetened strained yogurt dessert", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
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
      { name: "Ragi Mudde", description: "Finger millet balls", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Neer Dosa", description: "Soft rice crepes", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Akki Roti", description: "Rice flour flatbread", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chitranna", description: "Lemon rice with spices", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rava Idli", description: "Semolina steamed cakes", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mysore Masala Dosa", description: "Dosa with spicy red chutney", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vangi Bath", description: "Eggplant rice", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kesari Bath", description: "Sweet semolina dessert", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
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
    featured: false,
    menuItems: [
      { name: "Amritsari Chole", description: "Spicy chickpeas curry", price: "₹150", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Butter Naan", description: "Buttery leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Tikka", description: "Grilled cottage cheese with spices", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dal Makhani", description: "Creamy black lentil curry", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Butter Chicken", description: "Chicken in rich tomato sauce", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sarson Da Saag", description: "Mustard greens curry", price: "₹170", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Makki Di Roti", description: "Corn flour flatbread", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Lassi", description: "Sweet or salted yogurt drink", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rajma Chawal", description: "Kidney beans curry with rice", price: "₹140", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Punjabi Kadhi", description: "Yogurt curry with pakoras", price: "₹130", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "12",
    name: "Sona's Multicuisine",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "Chinese, North Indian",
    rating: 4.0,
    deliveryTime: "30-45 min",
    minOrder: "₹250",
    featured: false,
    menuItems: [
      { name: "Gobi Manchurian", description: "Cauliflower fritters in spicy sauce", price: "₹140", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hakka Noodles", description: "Stir-fried noodles with vegetables", price: "₹130", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Fried Rice", description: "Chinese-style fried rice", price: "₹150", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chilli Paneer", description: "Cottage cheese in spicy sauce", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Spring Rolls", description: "Crispy rolls with vegetable filling", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Butter Masala", description: "Cottage cheese in rich gravy", price: "₹190", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Manchow Soup", description: "Spicy Indo-Chinese soup", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sweet Corn Soup", description: "Creamy corn soup", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Szechuan Chicken", description: "Spicy chicken with Szechuan pepper", price: "₹210", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Honey Chilli Potato", description: "Crispy potatoes in sweet chilli sauce", price: "₹130", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "13",
    name: "Malgudi Cafe",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000",
    cuisine: "South Indian, Coffee",
    rating: 4.6,
    deliveryTime: "15-25 min",
    minOrder: "₹100",
    featured: false,
    menuItems: [
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Masala Dosa", description: "Crispy crepe with potato filling", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli Sambar", description: "Steamed rice cakes with lentil soup", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada", description: "Savory lentil donuts", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pongal", description: "Rice and lentil porridge", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Upma", description: "Semolina savory porridge", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kesari Bath", description: "Sweet semolina dessert", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rava Dosa", description: "Crispy semolina crepe", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Badam Milk", description: "Almond flavored milk", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Butter Bun", description: "Soft bun served with butter", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "14",
    name: "Desi Bytes",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    cuisine: "Fast Food, Indian",
    rating: 4.2,
    deliveryTime: "20-30 min",
    minOrder: "₹150",
    featured: false,
    menuItems: [
      { name: "Vada Pav", description: "Indian burger with spicy potato filling", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pav Bhaji", description: "Mashed vegetable curry with bread", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dabeli", description: "Sweet and spicy potato filling in a bun", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Samosa", description: "Fried pastry with savory filling", price: "₹20", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kachori", description: "Spicy deep-fried snack", price: "₹25", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chole Bhature", description: "Spicy chickpea curry with fried bread", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Ragda Pattice", description: "Potato patties with peas curry", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Raj Kachori", description: "Large stuffed kachori with toppings", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Aloo Tikki Chaat", description: "Potato patties with chutneys", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dahi Puri", description: "Crispy puris filled with yogurt", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "15",
    name: "Royal Biryani House",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1000",
    cuisine: "Biryani, Mughlai",
    rating: 4.5,
    deliveryTime: "30-45 min",
    minOrder: "₹250",
    featured: false,
    menuItems: [
      { name: "Hyderabadi Chicken Biryani", description: "Aromatic rice with marinated chicken", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mutton Biryani", description: "Spiced rice with tender mutton", price: "₹260", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Biryani", description: "Fragrant rice with vegetables", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Egg Biryani", description: "Biryani with boiled eggs", price: "₹190", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken 65", description: "Spicy fried chicken", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tandoori Chicken", description: "Clay oven roasted chicken", price: "₹240", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Malai Kofta", description: "Cottage cheese dumplings in creamy sauce", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Butter Naan", description: "Buttered leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken Korma", description: "Chicken in rich almond sauce", price: "₹210", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Raita", description: "Yogurt with vegetables", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "16",
    name: "Sai Prasad",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "North Karnataka, Veg",
    rating: 4.3,
    deliveryTime: "20-35 min",
    minOrder: "₹120",
    featured: false,
    menuItems: [
      { name: "Jolada Rotti", description: "Sorghum flatbread", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Badanekai Yennegai", description: "Stuffed brinjal curry", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Akki Rotti", description: "Rice flour flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Nuchinunde", description: "Steamed lentil dumplings", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Soppu Saaru", description: "Spinach lentil soup", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hesaru Bele Payasa", description: "Moong dal sweet dish", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Bisi Bele Bath", description: "Spicy rice with lentils", price: "₹110", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sabakki Payasa", description: "Sago pudding", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Ragi Mudde", description: "Finger millet balls", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Methi Palya", description: "Fenugreek leaves stir fry", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "17",
    name: "China Town",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000",
    cuisine: "Chinese, Asian",
    rating: 4.0,
    deliveryTime: "30-45 min",
    minOrder: "₹180",
    featured: false,
    menuItems: [
      { name: "Veg Manchurian", description: "Vegetable balls in savory sauce", price: "₹150", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hakka Noodles", description: "Stir-fried noodles with vegetables", price: "₹140", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Schezwan Fried Rice", description: "Spicy rice with vegetables", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chilli Paneer", description: "Cottage cheese in spicy sauce", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Spring Rolls", description: "Crispy rolls with vegetable filling", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Momos", description: "Steamed dumplings with vegetable filling", price: "₹130", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dragon Chicken", description: "Spicy chicken with bell peppers", price: "₹210", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hot and Sour Soup", description: "Spicy and tangy vegetable soup", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kung Pao Chicken", description: "Chicken with peanuts and vegetables", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Manchow Soup", description: "Spicy clear soup with vegetables", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "18",
    name: "Pizza Junction",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000", 
    cuisine: "Pizza, Fast Food",
    rating: 4.1,
    deliveryTime: "25-40 min",
    minOrder: "₹200",
    featured: false,
    menuItems: [
      { name: "Margherita Pizza", description: "Classic cheese and tomato pizza", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tandoori Paneer Pizza", description: "Pizza with marinated paneer", price: "₹250", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Supreme Pizza", description: "Mixed vegetable pizza", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Cheese Garlic Bread", description: "Garlic bread topped with cheese", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pasta Alfredo", description: "Creamy pasta with vegetables", price: "₹190", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "French Fries", description: "Crispy potato fries", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Cheesy Jalapeno Poppers", description: "Stuffed jalapenos with cheese", price: "₹140", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Corn and Cheese Paratha", description: "Stuffed flatbread with corn and cheese", price: "₹150", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Tikka Roll", description: "Wrap with spicy paneer filling", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Choco Lava Cake", description: "Dessert with molten chocolate center", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "19",
    name: "Tandoori Nights",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
    cuisine: "North Indian, Mughlai",
    rating: 4.4,
    deliveryTime: "30-45 min",
    minOrder: "₹220",
    featured: false,
    menuItems: [
      { name: "Tandoori Chicken", description: "Clay oven roasted chicken", price: "₹240", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken Tikka", description: "Boneless chicken pieces marinated and grilled", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Seekh Kebab", description: "Minced meat skewers", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Tikka", description: "Marinated and grilled cottage cheese", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Butter Chicken", description: "Chicken in rich tomato sauce", price: "₹260", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dal Makhani", description: "Creamy black lentil curry", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Naan", description: "Leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken Biryani", description: "Fragrant rice with chicken", price: "₹230", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Raita", description: "Yogurt with cucumber", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gulab Jamun", description: "Sweet milk dumplings", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "20",
    name: "Dosae",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    cuisine: "South Indian, Dosa",
    rating: 4.6,
    deliveryTime: "15-30 min",
    minOrder: "₹100",
    featured: false,
    menuItems: [
      { name: "Plain Dosa", description: "Crispy rice crepe", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Masala Dosa", description: "Dosa with potato filling", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mysore Masala Dosa", description: "Dosa with spicy red chutney", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rava Dosa", description: "Crispy semolina dosa", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Onion Dosa", description: "Dosa with onion toppings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paper Dosa", description: "Extra thin and crispy dosa", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Ghee Roast", description: "Dosa roasted with ghee", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli", description: "Steamed rice cakes", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada", description: "Savory lentil donuts", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "21",
    name: "Darshini",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minOrder: "₹80",
    featured: false,
    menuItems: [
      { name: "Khara Bath", description: "Savory semolina dish", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kesari Bath", description: "Sweet semolina dessert", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli", description: "Steamed rice cakes", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada", description: "Savory lentil donuts", price: "₹35", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Masala Dosa", description: "Rice crepe with potato filling", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Set Dosa", description: "Soft spongy dosa", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Poori Saagu", description: "Fried bread with vegetable curry", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Bisi Bele Bath", description: "Spicy rice with lentils", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chow Chow Bath", description: "Combination of khara and kesari bath", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "22",
    name: "Shree Annapoorna",
    image: "https://images.unsplash.com/photo-1573551565922-aec98de55ee2?q=80&w=1000",
    cuisine: "South Indian, Tamil",
    rating: 4.2,
    deliveryTime: "25-35 min",
    minOrder: "₹120",
    featured: false,
    menuItems: [
      { name: "Plain Dosa", description: "Crispy rice crepe", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli", description: "Steamed rice cakes", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Medu Vada", description: "Fried lentil donuts", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pongal", description: "Rice and lentil porridge", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Uttapam", description: "Thick pancake with toppings", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rava Kitchadi", description: "Semolina and vegetable porridge", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Appam", description: "Soft pancake with crispy edges", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rasam", description: "Spicy tamarind soup", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Curd Rice", description: "Yogurt mixed with rice", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "23",
    name: "Vaishali",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=1000",
    cuisine: "Maharashtrian, South Indian",
    rating: 4.4,
    deliveryTime: "20-35 min",
    minOrder: "₹150",
    featured: false,
    menuItems: [
      { name: "Misal Pav", description: "Spicy sprouts curry with bread", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada Pav", description: "Potato fritter sandwich", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pav Bhaji", description: "Mashed vegetable curry with bread", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Thalipeeth", description: "Multi-grain savory pancake", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Masala Dosa", description: "Rice crepe with potato filling", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sabudana Vada", description: "Fried tapioca patties", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Puran Poli", description: "Sweet flatbread", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Solkadhi", description: "Kokum and coconut milk drink", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kothimbir Vadi", description: "Coriander fritters", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Modak", description: "Sweet dumpling with coconut filling", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "24",
    name: "Shree Tiffins",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "South Indian, Breakfast",
    rating: 4.5,
    deliveryTime: "15-25 min",
    minOrder: "₹90",
    featured: false,
    menuItems: [
      { name: "Idli Sambar", description: "Steamed rice cakes with lentil soup", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Masala Dosa", description: "Rice crepe with potato filling", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada", description: "Savory lentil donuts", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Upma", description: "Semolina porridge", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Poha", description: "Flattened rice dish", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Set Dosa", description: "Soft spongy dosa", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Khara Bath", description: "Savory semolina dish", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kesari Bath", description: "Sweet semolina dessert", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Uttapam", description: "Thick pancake with toppings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "25",
    name: "Urban Dhaba",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
    cuisine: "North Indian, Punjabi",
    rating: 4.2,
    deliveryTime: "25-40 min",
    minOrder: "₹200",
    featured: false,
    menuItems: [
      { name: "Butter Chicken", description: "Chicken in rich tomato gravy", price: "₹260", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Tikka Masala", description: "Grilled cottage cheese in spicy gravy", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dal Makhani", description: "Creamy black lentil curry", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chole Bhature", description: "Chickpea curry with fried bread", price: "₹130", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tandoori Roti", description: "Whole wheat flatbread", price: "₹20", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Butter Naan", description: "Buttered leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Amritsari Fish", description: "Spiced fish fry", price: "₹240", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rajma Chawal", description: "Kidney bean curry with rice", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Lassi", description: "Yogurt drink", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gajar Ka Halwa", description: "Carrot dessert", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "26",
    name: "Gokul Oottupura",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "Kerala, South Indian",
    rating: 4.1,
    deliveryTime: "25-40 min",
    minOrder: "₹180",
    featured: false,
    menuItems: [
      { name: "Kerala Sadya", description: "Complete Kerala meal on banana leaf", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Appam", description: "Soft pancake with crispy edges", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Stew", description: "Coconut milk based vegetable stew", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Puttu", description: "Steamed rice cake with coconut", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kadala Curry", description: "Black chickpea curry", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dosa", description: "Rice crepe", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idiyappam", description: "String hoppers", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Avial", description: "Mixed vegetable dish with coconut", price: "₹110", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kerala Parotta", description: "Layered flatbread", price: "₹25", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Payasam", description: "Sweet milk pudding", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "27",
    name: "Cafe Coffee World",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "Cafe, Continental",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minOrder: "₹150",
    featured: false,
    menuItems: [
      { name: "Cappuccino", description: "Espresso with steamed milk", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Cold Coffee", description: "Blended coffee with ice cream", price: "₹150", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Sandwich", description: "Grilled sandwich with vegetables", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Wrap", description: "Whole wheat wrap with paneer filling", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pasta", description: "Creamy pasta with vegetables", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chocolate Brownie", description: "Warm chocolate brownie", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Masala Chai", description: "Spiced Indian tea", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "French Fries", description: "Crispy potato fries", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Cheese Croissant", description: "Buttery pastry with cheese", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mango Smoothie", description: "Refreshing mango drink", price: "₹130", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "28",
    name: "Sri Udupi Park",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.4,
    deliveryTime: "15-30 min",
    minOrder: "₹100",
    featured: false,
    menuItems: [
      { name: "Masala Dosa", description: "Rice crepe with potato filling", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli Sambar", description: "Steamed rice cakes with lentil soup", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada", description: "Savory lentil donuts", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rava Idli", description: "Semolina steamed cakes", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Bisi Bele Bath", description: "Spicy rice with lentils", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mysore Pak", description: "Sweet dessert made with ghee", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Neer Dosa", description: "Thin rice crepes", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Puliyogare", description: "Tamarind rice", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mangalore Buns", description: "Sweet banana buns", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "29",
    name: "KR Kitchen",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000",
    cuisine: "North Karnataka, Traditional",
    rating: 4.0,
    deliveryTime: "30-45 min",
    minOrder: "₹120",
    featured: false,
    menuItems: [
      { name: "Jolada Rotti", description: "Sorghum flatbread", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Ennegai", description: "Stuffed brinjal curry", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kodri Palya", description: "Bamboo shoot curry", price: "₹150", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Akki Rotti", description: "Rice flour flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Raagi Mudde", description: "Finger millet balls", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Soppu Saaru", description: "Spinach lentil soup", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hurali Saaru", description: "Horse gram soup", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kadubu", description: "Steamed dumplings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hesarubele Palya", description: "Green gram sprouts stir fry", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Girmit", description: "Spicy snack with puffed rice", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "30",
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "North Indian, Mughlai",
    rating: 4.2,
    deliveryTime: "25-40 min",
    minOrder: "₹220",
    featured: false,
    menuItems: [
      { name: "Butter Chicken", description: "Chicken in rich tomato gravy", price: "₹250", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Butter Masala", description: "Cottage cheese in creamy sauce", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dal Makhani", description: "Creamy black lentil curry", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Naan", description: "Leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mixed Vegetable Curry", description: "Vegetables in tomato gravy", price: "₹170", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken Biryani", description: "Fragrant rice with chicken", price: "₹230", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Malai Kofta", description: "Potato and cheese dumplings", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tandoori Roti", description: "Whole wheat flatbread", price: "₹20", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Lassi", description: "Yogurt drink", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gulab Jamun", description: "Sweet milk dumplings", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  // Added new restaurant entries with menu items
  {
    id: "31",
    name: "Dharwad Idlis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    cuisine: "South Indian, Breakfast",
    rating: 4.6,
    deliveryTime: "15-25 min",
    minOrder: "₹80",
    featured: false,
    menuItems: [
      { name: "Plain Idli", description: "Steamed rice cakes", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Masala Idli", description: "Tossed idlis with spices", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kancheepuram Idli", description: "Spiced temple-style idli", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli Sambar", description: "Idli with lentil soup", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rava Idli", description: "Semolina idli", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Thatte Idli", description: "Plate-shaped large idli", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada", description: "Savory lentil donut", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Coconut Chutney", description: "Coconut based condiment", price: "₹20", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Podi Idli", description: "Idli tossed with spice powder", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "32",
    name: "Kabab Corner",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
    cuisine: "Mughlai, BBQ",
    rating: 4.3,
    deliveryTime: "25-40 min",
    minOrder: "₹180",
    featured: false,
    menuItems: [
      { name: "Chicken Seekh Kebab", description: "Minced chicken skewers", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tandoori Chicken", description: "Clay oven roasted chicken", price: "₹240", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken Tikka", description: "Boneless marinated chicken pieces", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mutton Seekh Kebab", description: "Minced mutton skewers", price: "₹240", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Tikka", description: "Marinated cottage cheese", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tangdi Kebab", description: "Chicken drumsticks", price: "₹230", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hariyali Kebab", description: "Green herb marinated kebab", price: "₹210", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Reshmi Kebab", description: "Soft creamy kebab", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Boti Kebab", description: "Boneless mutton pieces", price: "₹260", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Roomali Roti", description: "Thin handkerchief bread", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "33",
    name: "Paratha Box",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "North Indian, Street Food",
    rating: 4.2,
    deliveryTime: "20-30 min",
    minOrder: "₹120",
    featured: false,
    menuItems: [
      { name: "Aloo Paratha", description: "Potato stuffed flatbread", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gobi Paratha", description: "Cauliflower stuffed flatbread", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Paratha", description: "Cottage cheese stuffed flatbread", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mixed Veg Paratha", description: "Mixed vegetable stuffed flatbread", price: "₹75", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Methi Paratha", description: "Fenugreek leaves flatbread", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mooli Paratha", description: "Radish stuffed flatbread", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Laccha Paratha", description: "Layered flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Curd", description: "Plain yogurt", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pickle", description: "Assorted Indian pickles", price: "₹20", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Butter Milk", description: "Spiced yogurt drink", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "34",
    name: "Shri Krishna Sagar",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.4,
    deliveryTime: "15-30 min",
    minOrder: "₹100",
    featured: false,
    menuItems: [
      { name: "Masala Dosa", description: "Crispy rice crepe with potato filling", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli Vada", description: "Steamed rice cakes with lentil fritters", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rava Idli", description: "Semolina steamed cakes", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Set Dosa", description: "Soft spongy dosa", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Khara Bath", description: "Savory semolina dish", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kesari Bath", description: "Sweet semolina dessert", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Bisi Bele Bath", description: "Spicy rice and lentil dish", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mysore Bajji", description: "Deep-fried savory snack", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Badam Milk", description: "Almond flavored milk", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "35",
    name: "Taj Mahal Restaurant",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",
    cuisine: "North Indian, Mughlai",
    rating: 4.1,
    deliveryTime: "30-45 min",
    minOrder: "₹200",
    featured: false,
    menuItems: [
      { name: "Shahi Paneer", description: "Cottage cheese in rich gravy", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Butter Chicken", description: "Chicken in tomato cream sauce", price: "₹250", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tandoori Roti", description: "Whole wheat flatbread", price: "₹20", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Naan", description: "Leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dal Makhani", description: "Black lentil curry", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Biryani", description: "Fragrant rice with vegetables", price: "₹190", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken Biryani", description: "Fragrant rice with chicken", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Raita", description: "Yogurt with cucumber", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gulab Jamun", description: "Sweet milk dumplings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Phirni", description: "Rice pudding", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "36",
    name: "Dharwad Pav Bhaji",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    cuisine: "Street Food, Maharashtrian",
    rating: 4.3,
    deliveryTime: "20-30 min",
    minOrder: "₹120",
    featured: false,
    menuItems: [
      { name: "Regular Pav Bhaji", description: "Mashed vegetable curry with bread", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Cheese Pav Bhaji", description: "Pav bhaji topped with cheese", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Jain Pav Bhaji", description: "Pav bhaji without onion & garlic", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada Pav", description: "Potato fritter sandwich", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Misal Pav", description: "Spicy sprouted bean curry with bread", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tawa Pulav", description: "Spiced rice cooked on griddle", price: "₹110", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Masala Pav", description: "Buttered pav tossed with spices", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Cheese Vada Pav", description: "Vada pav with cheese", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kanda Bhaji", description: "Onion fritters", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Lassi", description: "Sweet yogurt drink", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "37",
    name: "Karavali",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "Coastal, Seafood",
    rating: 4.5,
    deliveryTime: "30-45 min",
    minOrder: "₹250",
    featured: false,
    menuItems: [
      { name: "Fish Curry", description: "Tangy coastal fish curry", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Prawn Ghee Roast", description: "Spicy roasted prawns", price: "₹280", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Neer Dosa", description: "Thin rice crepes", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kori Rotti", description: "Chicken curry with rice wafers", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kane Fry", description: "Fried ladyfish", price: "₹240", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Anjal Fry", description: "Fried king fish", price: "₹290", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sukka Chicken", description: "Dry spiced chicken", price: "₹230", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mangalore Buns", description: "Sweet banana bread", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Goli Bajje", description: "Fried gram flour balls", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Coconut Rice", description: "Rice with coconut", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "38",
    name: "Biryani Paradise",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000",
    cuisine: "Biryani, Hyderabadi",
    rating: 4.4,
    deliveryTime: "30-45 min",
    minOrder: "₹200",
    featured: false,
    menuItems: [
      { name: "Hyderabadi Chicken Biryani", description: "Aromatic rice with spiced chicken", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hyderabadi Mutton Biryani", description: "Aromatic rice with tender mutton", price: "₹260", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Biryani", description: "Fragrant rice with vegetables", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Egg Biryani", description: "Fragrant rice with eggs", price: "₹190", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken 65", description: "Spicy fried chicken", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hyderabadi Haleem", description: "Slow-cooked meat and lentil stew", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mirchi Ka Salan", description: "Chili and peanut curry", price: "₹130", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Raita", description: "Yogurt with vegetables", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Double Ka Meetha", description: "Bread pudding dessert", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Qubani Ka Meetha", description: "Apricot dessert", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "39",
    name: "Upahara Darshini",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.2,
    deliveryTime: "15-25 min",
    minOrder: "₹90",
    featured: false,
    menuItems: [
      { name: "Masala Dosa", description: "Crispy rice crepe with potato filling", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli", description: "Steamed rice cakes", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada", description: "Savory lentil donut", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chow Chow Bath", description: "Sweet and savory semolina dishes", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Set Dosa", description: "Soft spongy dosa", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Uddina Vada", description: "Urad dal fritters", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rava Idli", description: "Semolina steamed cakes", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mysore Pak", description: "Gram flour sweet", price: "₹20", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chiroti", description: "Layered sweet pastry", price: "₹25", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "40",
    name: "Andhra Bhavan",
    image: "https://images.unsplash.com/photo-1617819912313-e393cfb7e732?q=80&w=1000",
    cuisine: "Andhra, Spicy",
    rating: 4.3,
    deliveryTime: "25-40 min",
    minOrder: "₹180",
    featured: false,
    menuItems: [
      { name: "Andhra Meals", description: "Complete spicy Andhra thali", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken Curry", description: "Spicy Andhra style chicken", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gongura Mutton", description: "Mutton with sorrel leaves", price: "₹260", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pesarattu", description: "Green gram dosa", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hyderabadi Biryani", description: "Aromatic rice with meat", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Royyala Vepudu", description: "Spicy prawn fry", price: "₹250", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gutti Vankaya", description: "Stuffed brinjal curry", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tomato Pappu", description: "Tomato lentil curry", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Andhra Rasam", description: "Spicy tamarind soup", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Qubani Ka Meetha", description: "Apricot dessert", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "41",
    name: "Bengali Delight",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=1000",
    cuisine: "Bengali, Sweets",
    rating: 4.4,
    deliveryTime: "30-45 min",
    minOrder: "₹200",
    featured: false,
    menuItems: [
      { name: "Macher Jhol", description: "Fish curry", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kosha Mangsho", description: "Slow cooked mutton", price: "₹260", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Shorshe Ilish", description: "Hilsa fish in mustard sauce", price: "₹300", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chingri Malai Curry", description: "Prawns in coconut milk", price: "₹280", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Luchi", description: "Deep fried bread", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Aloo Posto", description: "Potato in poppy seed paste", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rasgulla", description: "Cheese balls in sugar syrup", price: "₹20 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sandesh", description: "Sweet cheese confection", price: "₹30 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mishti Doi", description: "Sweet yogurt", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pantua", description: "Deep fried sweet", price: "₹25 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "42",
    name: "Shahi Durbar",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "Mughlai, North Indian",
    rating: 4.1,
    deliveryTime: "25-40 min",
    minOrder: "₹220",
    featured: false,
    menuItems: [
      { name: "Murgh Musallam", description: "Whole chicken in rich gravy", price: "₹350", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Butter Chicken", description: "Chicken in rich tomato gravy", price: "₹260", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rogan Josh", description: "Kashmiri lamb curry", price: "₹280", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Biryani", description: "Fragrant rice with meat", price: "₹230", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Naan", description: "Leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Pasanda", description: "Stuffed cottage cheese in gravy", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dal Makhani", description: "Creamy black lentil curry", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Seekh Kebab", description: "Minced meat skewers", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Phirni", description: "Rice pudding dessert", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Shahi Tukda", description: "Bread pudding", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "43",
    name: "Veg Paradise",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000",
    cuisine: "Pure Veg, Indian",
    rating: 4.2,
    deliveryTime: "20-35 min",
    minOrder: "₹150",
    featured: false,
    menuItems: [
      { name: "Paneer Butter Masala", description: "Cottage cheese in creamy sauce", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Kolhapuri", description: "Spicy mixed vegetable curry", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dal Tadka", description: "Yellow lentil tempered with spices", price: "₹140", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Biryani", description: "Fragrant rice with vegetables", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Naan", description: "Leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tandoori Roti", description: "Whole wheat flatbread", price: "₹20", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chana Masala", description: "Chickpea curry", price: "₹150", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Malai Kofta", description: "Potato and cheese dumplings in sauce", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Manchurian", description: "Vegetable balls in sweet & sour sauce", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gulab Jamun", description: "Sweet milk dumplings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "44",
    name: "Biriyani Hut",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000",
    cuisine: "Biryani, Mughlai",
    rating: 4.3,
    deliveryTime: "30-45 min",
    minOrder: "₹220",
    featured: false,
    menuItems: [
      { name: "Chicken Biryani", description: "Rice with chicken", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mutton Biryani", description: "Rice with mutton", price: "₹260", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Egg Biryani", description: "Rice with eggs", price: "₹180", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Biryani", description: "Rice with vegetables", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hyderabadi Biryani", description: "Spicy layered biryani", price: "₹240", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Lucknowi Biryani", description: "Fragrant Awadhi style biryani", price: "₹250", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken 65", description: "Spicy fried chicken", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chicken Curry", description: "Spicy chicken gravy", price: "₹220", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Raita", description: "Yogurt with vegetables", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gulab Jamun", description: "Sweet milk dumplings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "45",
    name: "South Indian Express",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    cuisine: "South Indian, Idli-Dosa",
    rating: 4.4,
    deliveryTime: "15-30 min",
    minOrder: "₹100",
    featured: false,
    menuItems: [
      { name: "Plain Dosa", description: "Crispy rice crepe", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Masala Dosa", description: "Dosa with potato filling", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paper Dosa", description: "Thin and crispy dosa", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli", description: "Steamed rice cakes", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada", description: "Savory lentil donut", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Uttapam", description: "Thick pancake with toppings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pongal", description: "Rice and lentil porridge", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Upma", description: "Semolina porridge", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sambar", description: "Lentil and vegetable stew", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "South Indian coffee", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "46",
    name: "Dharwad Chaat Centre",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    cuisine: "Street Food, Chaat",
    rating: 4.3,
    deliveryTime: "15-25 min",
    minOrder: "₹80",
    featured: false,
    menuItems: [
      { name: "Pani Puri", description: "Hollow crisp with flavored water", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Bhel Puri", description: "Puffed rice with chutneys", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dahi Puri", description: "Crisp puris with yogurt", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Sev Puri", description: "Crisp puris with toppings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Raj Kachori", description: "Large stuffed kachori", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Aloo Tikki", description: "Potato patties", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Samosa Chaat", description: "Crushed samosa with chutneys", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Papdi Chaat", description: "Crisp wafers with toppings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dahi Bhalla", description: "Lentil dumplings in yogurt", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Masala Chai", description: "Spiced tea", price: "₹20", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "47",
    name: "Belgaum Kunda Shop",
    image: "https://images.unsplash.com/photo-1605197948554-93ea1b6393e9?q=80&w=1000",
    cuisine: "Sweets, Desserts",
    rating: 4.6,
    deliveryTime: "20-30 min",
    minOrder: "₹100",
    featured: false,
    menuItems: [
      { name: "Belgaum Kunda", description: "Milk-based sweet", price: "₹50 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Dharwad Peda", description: "Milk-based sweet from Dharwad", price: "₹40 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Mysore Pak", description: "Gram flour and ghee sweet", price: "₹30 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gulab Jamun", description: "Fried milk solids in sugar syrup", price: "₹20 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rasmalai", description: "Cottage cheese in sweet milk", price: "₹40 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Jalebi", description: "Crispy sweet soaked in syrup", price: "₹180 per kg", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Holige", description: "Sweet stuffed flatbread", price: "₹80 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Badam Halwa", description: "Almond pudding", price: "₹70 per portion", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kajjaya", description: "Deep-fried sweet", price: "₹40 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rava Ladoo", description: "Semolina sweet balls", price: "₹20 per piece", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "48",
    name: "North Karnataka Meals",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    cuisine: "North Karnataka, Traditional",
    rating: 4.3,
    deliveryTime: "25-40 min",
    minOrder: "₹150",
    featured: false,
    menuItems: [
      { name: "North Karnataka Thali", description: "Complete traditional meal", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Jolada Rotti", description: "Sorghum bread", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Ennegai", description: "Stuffed brinjal curry", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Soppu Saaru", description: "Leafy greens soup", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Akki Rotti", description: "Rice flour flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Ragi Mudde", description: "Finger millet balls", price: "₹50", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Bele Palya", description: "Lentil stir fry", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Girmit", description: "Spicy puffed rice snack", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kaalu Saaru", description: "Black gram curry", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Hesaru Bele Payasa", description: "Green gram pudding", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "49",
    name: "Anna Kuteera",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    cuisine: "South Indian, Karnataka",
    rating: 4.1,
    deliveryTime: "20-30 min",
    minOrder: "₹120",
    featured: false,
    menuItems: [
      { name: "Masala Dosa", description: "Crispy rice crepe with potato filling", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Idli Sambar", description: "Steamed rice cakes with lentil soup", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Vada", description: "Savory lentil donut", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Set Dosa", description: "Soft spongy dosa", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Bisi Bele Bath", description: "Spicy rice and lentil dish", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Rava Idli", description: "Semolina steamed cakes", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Puliyogare", description: "Tamarind rice", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Kesari Bath", description: "Sweet semolina dessert", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Akki Rotti", description: "Rice flour flatbread", price: "₹60", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Filter Coffee", description: "Traditional South Indian coffee", price: "₹30", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  },
  {
    id: "50",
    name: "Dharwad Food Court",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    cuisine: "Multi-cuisine, Food Court",
    rating: 4.0,
    deliveryTime: "30-45 min",
    minOrder: "₹200",
    featured: false,
    menuItems: [
      { name: "Masala Dosa", description: "Crispy rice crepe with potato filling", price: "₹80", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Paneer Butter Masala", description: "Cottage cheese in creamy sauce", price: "₹200", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gobi Manchurian", description: "Cauliflower in Indo-Chinese sauce", price: "₹150", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Pav Bhaji", description: "Mashed vegetable curry with bread", price: "₹100", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Chole Bhature", description: "Chickpea curry with fried bread", price: "₹120", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Butter Naan", description: "Buttered leavened flatbread", price: "₹40", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Veg Biryani", description: "Fragrant rice with vegetables", price: "₹160", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Tandoori Chicken", description: "Clay oven roasted chicken", price: "₹240", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "French Fries", description: "Crispy potato fries", price: "₹90", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" },
      { name: "Gulab Jamun", description: "Sweet milk dumplings", price: "₹70", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000" }
    ]
  }
];

