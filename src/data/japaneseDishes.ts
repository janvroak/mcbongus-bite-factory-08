
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
          price: 199,
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-sushi-2`,
          name: "California Roll (6 pc)",
          description: "Crab, avocado and cucumber roll topped with sesame seeds",
          price: 249,
          image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-sushi-3`,
          name: "Vegetable Tempura Roll (6 pc)",
          description: "Tempura vegetables and avocado roll",
          price: 219,
          image: "https://images.unsplash.com/photo-1641313736355-4692d58783cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: false
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
          price: 329,
          image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-ramen-2`,
          name: "Miso Ramen",
          description: "Miso-flavored broth with corn, bean sprouts, bamboo shoots, and green onions",
          price: 299,
          image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-ramen-3`,
          name: "Veggie Ramen",
          description: "Vegetable-based broth with tofu, mushrooms, corn, and seasonal vegetables",
          price: 279,
          image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        }
      ]
    }
  ];
};
