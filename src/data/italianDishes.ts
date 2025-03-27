
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
          price: 249,
          image: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-pasta-2`,
          name: "Fettuccine Alfredo",
          description: "Creamy pasta with Parmesan cheese and butter",
          price: 279,
          image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-pasta-3`,
          name: "Penne Arrabbiata",
          description: "Spicy tomato sauce with garlic, tomatoes, and red chili pepper flakes",
          price: 229,
          image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: true,
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
          price: 299,
          image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-pizza-2`,
          name: "Pepperoni",
          description: "Tomato sauce, mozzarella, and pepperoni",
          price: 349,
          image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-pizza-3`,
          name: "Quattro Formaggi",
          description: "Four cheese pizza with mozzarella, gorgonzola, parmesan, and ricotta",
          price: 379,
          image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
          price: 199,
          image: "https://images.unsplash.com/photo-1571877227200-a0d98ea2ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-dessert-2`,
          name: "Panna Cotta",
          description: "Italian dessert of sweetened cream thickened with gelatin and molded",
          price: 179,
          image: "https://images.unsplash.com/photo-1586040140378-b5634cb4c8fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: false
        }
      ]
    }
  ];
};
