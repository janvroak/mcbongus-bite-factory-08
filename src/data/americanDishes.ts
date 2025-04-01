export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  veg: boolean;
  spicy: boolean;
  popular: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const createAmericanMenuCategories = (restaurantId: string): MenuCategory[] => {
  return [
    {
      id: "burgers",
      name: "Burgers",
      items: [
        {
          id: `${restaurantId}-burger-1`,
          name: "Classic Cheeseburger",
          description: "Beef patty with American cheese, lettuce, tomato, and special sauce",
          price: "₹299",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-burger-2`,
          name: "Bacon BBQ Burger",
          description: "Beef patty with cheddar, bacon, fried onions, and BBQ sauce",
          price: "₹349",
          image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-burger-3`,
          name: "Mushroom Swiss Burger",
          description: "Beef patty with sautéed mushrooms, Swiss cheese, and garlic aioli",
          price: "₹329",
          image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-burger-4`,
          name: "Veggie Burger",
          description: "Plant-based patty with lettuce, tomato, onion, and vegan mayo",
          price: "₹279",
          image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-burger-5`,
          name: "Jalapeño Popper Burger",
          description: "Beef patty with cream cheese, jalapeños, and crispy bacon",
          price: "₹339",
          image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: true,
          popular: false
        }
      ]
    },
    {
      id: "sides",
      name: "Sides",
      items: [
        {
          id: `${restaurantId}-side-1`,
          name: "French Fries",
          description: "Crispy golden fries served with ketchup",
          price: "₹149",
          image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-side-2`,
          name: "Onion Rings",
          description: "Battered and fried onion rings served with ranch dipping sauce",
          price: "₹179",
          image: "https://images.unsplash.com/photo-1639025094604-2c5f638f926c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: false
        },
        {
          id: `${restaurantId}-side-3`,
          name: "Mac and Cheese",
          description: "Creamy mac and cheese with a crispy breadcrumb topping",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1543339494-b4cd1c1e4e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-side-4`,
          name: "Sweet Potato Fries",
          description: "Crispy sweet potato fries with chipotle aioli",
          price: "₹169",
          image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-side-5`,
          name: "Loaded Potato Skins",
          description: "Potato skins topped with cheese, bacon, and sour cream",
          price: "₹219",
          image: "https://images.unsplash.com/photo-1585438772425-2599d13a5260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: false,
          spicy: false,
          popular: false
        }
      ]
    },
    {
      id: "milkshakes",
      name: "Milkshakes",
      items: [
        {
          id: `${restaurantId}-shake-1`,
          name: "Classic Vanilla Shake",
          description: "Creamy vanilla milkshake topped with whipped cream",
          price: "₹179",
          image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-shake-2`,
          name: "Chocolate Fudge Shake",
          description: "Rich chocolate shake with fudge sauce and chocolate chips",
          price: "₹199",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-shake-3`,
          name: "Strawberry Cheesecake Shake",
          description: "Strawberry milkshake with cheesecake pieces and graham cracker crumbs",
          price: "₹219",
          image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
          name: "New York Cheesecake",
          description: "Classic creamy cheesecake with graham cracker crust",
          price: "₹249",
          image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        },
        {
          id: `${restaurantId}-dessert-2`,
          name: "Chocolate Brownie Sundae",
          description: "Warm chocolate brownie topped with ice cream and chocolate sauce",
          price: "₹219",
          image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          veg: true,
          spicy: false,
          popular: true
        }
      ]
    }
  ];
};

export const getAmericanMenuCategories = (restaurantId: string): Promise<MenuCategory[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(createAmericanMenuCategories(restaurantId));
    }, 300);
  });
};

export const getMenuItemById = (restaurantId: string, itemId: string): Promise<MenuItem | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allCategories = createAmericanMenuCategories(restaurantId);
      for (const category of allCategories) {
        const item = category.items.find(item => item.id === itemId);
        if (item) {
          resolve(item);
          return;
        }
      }
      resolve(null);
    }, 300);
  });
};
