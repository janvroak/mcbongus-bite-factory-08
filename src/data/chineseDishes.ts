
export const createChineseMenuCategories = (restaurantId: string) => {
  return [
    {
      id: "starters",
      name: "Starters",
      items: [
        {
          id: `${restaurantId}-starter-1`,
          name: "Spring Rolls (4 pc)",
          description: "Crispy rolls filled with vegetables and served with sweet chili sauce",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-starter-2`,
          name: "Dim Sum Basket (6 pc)",
          description: "Assorted steamed dumplings including har gow and siu mai",
          price: "₹249",
          image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-starter-3`,
          name: "Crispy Fried Wontons (6 pc)",
          description: "Meat-filled wontons deep-fried and served with sweet and sour sauce",
          price: "₹219",
          image: "https://images.unsplash.com/photo-1496116218417-1a56e30069a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-starter-4`,
          name: "Salt and Pepper Tofu",
          description: "Crispy tofu tossed with five-spice salt, chili, and spring onions",
          price: "₹179",
          image: "https://images.unsplash.com/photo-1564671546498-aa134e987ffe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: true,
          popular: false
        },
        {
          id: `${restaurantId}-starter-5`,
          name: "Sesame Prawn Toast (4 pc)",
          description: "Minced prawn spread on toast, topped with sesame seeds and deep-fried",
          price: "₹239",
          image: "https://images.unsplash.com/photo-1625866351786-7e0f2ee10adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        }
      ]
    },
    {
      id: "main-course",
      name: "Main Course",
      items: [
        {
          id: `${restaurantId}-main-1`,
          name: "Kung Pao Chicken",
          description: "Chicken with peanuts, vegetables, and chili peppers in Kung Pao sauce",
          price: "₹329",
          image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: true
        },
        {
          id: `${restaurantId}-main-2`,
          name: "Sweet and Sour Pork",
          description: "Crispy pork with bell peppers, pineapple, and onions in sweet and sour sauce",
          price: "₹349",
          image: "https://images.unsplash.com/photo-1603138033887-1df19aaa8e97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-main-3`,
          name: "Vegetable Stir Fry",
          description: "Seasonal vegetables stir-fried in garlic sauce",
          price: "₹269",
          image: "https://images.unsplash.com/photo-1512058454905-6b841e7ad132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-main-4`,
          name: "Mapo Tofu",
          description: "Soft tofu in spicy sauce with minced pork and Sichuan peppercorns",
          price: "₹299",
          image: "https://images.unsplash.com/photo-1582452737566-796bf99de531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: false
        },
        {
          id: `${restaurantId}-main-5`,
          name: "Peking Duck",
          description: "Roasted duck with thin pancakes, spring onion, cucumber, and hoisin sauce",
          price: "₹499",
          image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-main-6`,
          name: "Black Pepper Beef",
          description: "Sliced beef stir-fried with black pepper sauce and vegetables",
          price: "₹359",
          image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: true
        }
      ]
    },
    {
      id: "rice-noodles",
      name: "Rice & Noodles",
      items: [
        {
          id: `${restaurantId}-rice-1`,
          name: "Vegetable Fried Rice",
          description: "Rice stir-fried with mixed vegetables and eggs",
          price: "₹219",
          image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-noodle-1`,
          name: "Hakka Noodles",
          description: "Stir-fried noodles with vegetables in soy sauce",
          price: "₹229",
          image: "https://images.unsplash.com/photo-1619894991209-c3c9c6d73505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-rice-2`,
          name: "Chicken Fried Rice",
          description: "Rice stir-fried with chicken, eggs, and vegetables",
          price: "₹249",
          image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-noodle-2`,
          name: "Singapore Noodles",
          description: "Stir-fried rice vermicelli with curry powder, shrimp, and vegetables",
          price: "₹259",
          image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: false
        },
        {
          id: `${restaurantId}-noodle-3`,
          name: "Dan Dan Noodles",
          description: "Spicy Sichuan noodles with chili oil, Sichuan pepper, and minced pork",
          price: "₹269",
          image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: true
        }
      ]
    }
  ];
};
