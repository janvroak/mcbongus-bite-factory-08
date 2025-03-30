export const createItalianMenuCategories = (restaurantId: string) => {
  return [
    {
      id: "pasta",
      name: "Pasta",
      items: [
        {
          id: `${restaurantId}-pasta-1`,
          name: "Spaghetti Carbonara",
          description: "Classic Roman pasta dish with eggs, cheese, pancetta, and black pepper",
          price: "₹249",
          image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-pasta-2`,
          name: "Fettuccine Alfredo",
          description: "Creamy pasta with Parmesan cheese and butter",
          price: "₹279",
          image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-pasta-3`,
          name: "Penne Arrabbiata",
          description: "Spicy tomato sauce with garlic, tomatoes, and red chili pepper flakes",
          price: "₹229",
          image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: true,
          popular: false
        },
        {
          id: `${restaurantId}-pasta-4`,
          name: "Lasagna Bolognese",
          description: "Layered pasta with rich meat sauce, bechamel, and cheese",
          price: "₹299",
          image: "https://images.unsplash.com/photo-1619740773525-9635a57a7d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-pasta-5`,
          name: "Ravioli with Sage Butter",
          description: "Stuffed pasta with ricotta and spinach, topped with sage butter sauce",
          price: "₹269",
          image: "https://images.unsplash.com/photo-1587740908075-9e245170cc3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: false
        }
      ]
    },
    {
      id: "pizza",
      name: "Pizza",
      items: [
        {
          id: `${restaurantId}-pizza-1`,
          name: "Margherita",
          description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
          price: "₹299",
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-pizza-2`,
          name: "Pepperoni",
          description: "Tomato sauce, mozzarella, and pepperoni",
          price: "₹349",
          image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-pizza-3`,
          name: "Quattro Formaggi",
          description: "Four cheese pizza with mozzarella, gorgonzola, parmesan, and ricotta",
          price: "₹379",
          image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-pizza-4`,
          name: "Prosciutto e Rucola",
          description: "Pizza with mozzarella, prosciutto, arugula, and parmesan shavings",
          price: "₹399",
          image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-pizza-5`,
          name: "Vegetariana",
          description: "Pizza with bell peppers, mushrooms, onions, olives, and artichokes",
          price: "₹359",
          image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: false
        }
      ]
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          id: `${restaurantId}-dessert-1`,
          name: "Tiramisu",
          description: "Coffee-flavored Italian dessert made of ladyfingers dipped in coffee, layered with mascarpone cheese",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1571877227200-a0d98ea2ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-dessert-2`,
          name: "Panna Cotta",
          description: "Italian dessert of sweetened cream thickened with gelatin and molded",
          price: "₹179",
          image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-dessert-3`,
          name: "Cannoli",
          description: "Sicilian pastry dessert filled with sweetened ricotta cream and chocolate chips",
          price: "₹189",
          image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-dessert-4`,
          name: "Gelato (2 scoops)",
          description: "Italian ice cream in various flavors - chocolate, vanilla, pistachio, or strawberry",
          price: "₹159",
          image: "https://images.unsplash.com/photo-1629213428121-fda95217624d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        }
      ]
    }
  ];
};
