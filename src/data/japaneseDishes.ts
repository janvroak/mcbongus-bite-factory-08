
export const createJapaneseMenuCategories = (restaurantId: string) => {
  return [
    {
      id: "sushi",
      name: "Sushi",
      items: [
        {
          id: `${restaurantId}-sushi-1`,
          name: "Salmon Nigiri (2 pc)",
          description: "Fresh salmon slices over pressed vinegared rice",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-sushi-2`,
          name: "California Roll (6 pc)",
          description: "Crab, avocado and cucumber roll topped with sesame seeds",
          price: "₹249",
          image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-sushi-3`,
          name: "Vegetable Tempura Roll (6 pc)",
          description: "Tempura vegetables and avocado roll",
          price: "₹219",
          image: "https://images.unsplash.com/photo-1579584425986-4534d23652f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-sushi-4`,
          name: "Dragon Roll (8 pc)",
          description: "Shrimp tempura roll topped with avocado and eel sauce",
          price: "₹299",
          image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: true
        },
        {
          id: `${restaurantId}-sushi-5`,
          name: "Tuna Sashimi (5 pc)",
          description: "Fresh sliced raw tuna served with wasabi and soy sauce",
          price: "₹269",
          image: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        }
      ]
    },
    {
      id: "ramen",
      name: "Ramen",
      items: [
        {
          id: `${restaurantId}-ramen-1`,
          name: "Tonkotsu Ramen",
          description: "Rich pork bone broth with chashu pork, egg, green onions, and nori",
          price: "₹329",
          image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-ramen-2`,
          name: "Miso Ramen",
          description: "Miso-flavored broth with corn, bean sprouts, bamboo shoots, and green onions",
          price: "₹299",
          image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-ramen-3`,
          name: "Veggie Ramen",
          description: "Vegetable-based broth with tofu, mushrooms, corn, and seasonal vegetables",
          price: "₹279",
          image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-ramen-4`,
          name: "Spicy Tantanmen",
          description: "Spicy sesame-based broth with ground pork, bok choy, and chili oil",
          price: "₹339",
          image: "https://images.unsplash.com/photo-1614563637806-1d0eb7d4d43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: true
        },
        {
          id: `${restaurantId}-ramen-5`,
          name: "Chicken Shoyu Ramen",
          description: "Soy sauce-based broth with chicken, mushrooms, and marinated egg",
          price: "₹309",
          image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: false
        }
      ]
    },
    {
      id: "donburi",
      name: "Rice Bowls",
      items: [
        {
          id: `${restaurantId}-donburi-1`,
          name: "Chicken Katsu Don",
          description: "Breaded chicken cutlet served over rice with egg, onions, and sweet sauce",
          price: "₹289",
          image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-donburi-2`,
          name: "Gyudon",
          description: "Thinly sliced beef and onions simmered in sweet soy sauce over rice",
          price: "₹299",
          image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-donburi-3`,
          name: "Salmon Teriyaki Don",
          description: "Grilled salmon glazed with teriyaki sauce over steamed rice",
          price: "₹319",
          image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-donburi-4`,
          name: "Vegetable Tempura Don",
          description: "Assorted vegetable tempura served over rice with tempura sauce",
          price: "₹269",
          image: "https://images.unsplash.com/photo-1626466368754-f1e8eee8c0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        }
      ]
    }
  ];
};
