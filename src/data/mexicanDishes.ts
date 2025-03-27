
export const createMexicanMenuCategories = (restaurantId: string) => {
  return [
    {
      id: "tacos",
      name: "Tacos",
      items: [
        {
          id: `${restaurantId}-taco-1`,
          name: "Carne Asada Tacos (3 pc)",
          description: "Grilled steak tacos with onions, cilantro, and lime on corn tortillas",
          price: "₹269",
          image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: true
        },
        {
          id: `${restaurantId}-taco-2`,
          name: "Al Pastor Tacos (3 pc)",
          description: "Marinated pork tacos with pineapple, onions, and cilantro on corn tortillas",
          price: "₹249",
          image: "https://images.unsplash.com/photo-1613514785940-daed07f8e2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: true
        },
        {
          id: `${restaurantId}-taco-3`,
          name: "Veggie Tacos (3 pc)",
          description: "Black beans, roasted corn, avocado, and pico de gallo on corn tortillas",
          price: "₹229",
          image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-taco-4`,
          name: "Fish Tacos (3 pc)",
          description: "Beer-battered fish with cabbage slaw, crema, and pico de gallo",
          price: "₹279",
          image: "https://images.unsplash.com/photo-1464219222984-216ebffaaf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-taco-5`,
          name: "Chicken Tinga Tacos (3 pc)",
          description: "Shredded chicken in chipotle sauce with lettuce, cheese, and sour cream",
          price: "₹259",
          image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: true
        }
      ]
    },
    {
      id: "burritos",
      name: "Burritos",
      items: [
        {
          id: `${restaurantId}-burrito-1`,
          name: "Chicken Burrito",
          description: "Grilled chicken, rice, beans, cheese, pico de gallo, and sour cream",
          price: "₹299",
          image: "https://images.unsplash.com/photo-1667407223168-40296536c2e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-burrito-2`,
          name: "Beef Burrito",
          description: "Seasoned ground beef, rice, beans, cheese, lettuce, and guacamole",
          price: "₹329",
          image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: false
        },
        {
          id: `${restaurantId}-burrito-3`,
          name: "Veggie Burrito",
          description: "Grilled vegetables, rice, black beans, cheese, pico de gallo, and avocado",
          price: "₹269",
          image: "https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-burrito-4`,
          name: "Carnitas Burrito",
          description: "Slow-roasted pork, rice, pinto beans, cheese, and pico de gallo",
          price: "₹319",
          image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-burrito-5`,
          name: "California Burrito",
          description: "Carne asada, french fries, guacamole, cheese, and sour cream",
          price: "₹339",
          image: "https://images.unsplash.com/photo-1635275431902-ba5662c43dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: true
        }
      ]
    },
    {
      id: "appetizers",
      name: "Appetizers",
      items: [
        {
          id: `${restaurantId}-app-1`,
          name: "Guacamole & Chips",
          description: "Freshly made guacamole with hand-cut tortilla chips",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1600038658687-13242c3dbb4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-app-2`,
          name: "Nachos Supreme",
          description: "Tortilla chips loaded with cheese, beans, jalapeños, guacamole, and sour cream",
          price: "₹249",
          image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: true,
          popular: true
        },
        {
          id: `${restaurantId}-app-3`,
          name: "Queso Fundido",
          description: "Melted cheese with chorizo, served with tortillas",
          price: "₹219",
          image: "https://images.unsplash.com/photo-1575576729617-6c2488427182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: false
        }
      ]
    }
  ];
};
