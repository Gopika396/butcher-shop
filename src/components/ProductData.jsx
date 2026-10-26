import beefSteak from "../assets/images/beef-steak.jpg";
import chickenBreast from "../assets/images/chicken-breast.jpg";
import lambChops from "../assets/images/lamb-chops.jpg";
import beefMince from "../assets/images/beef-mince.jpg";
import chickenDrumsticks from "../assets/images/chicken-drumsticks.jpg";
import lambCurryCut from "../assets/images/lamb-curry-cut.jpg";

export const meatProducts = [
  {
    id: 1,
    name: "Premium Beef Steak",
    category: "Beef",
    price: 650,
    unit: "500 g",
    tag: "BEST SELLER",
    image: beefSteak,
    description: "Rich, tender cuts selected for a beautiful sear."
  },
  {
    id: 2,
    name: "Fresh Chicken Breast",
    category: "Chicken",
    price: 280,
    unit: "500 g",
    tag: "FRESH DAILY",
    image: chickenBreast,
    description: "Lean, versatile chicken prepared with care."
  },
  {
    id: 3,
    name: "Tender Lamb Chops",
    category: "Lamb",
    price: 590,
    unit: "500 g",
    tag: "BUTCHER'S PICK",
    image: lambChops,
    description: "A flavourful favourite for grills and weekend meals."
  },
  {
    id: 4,
    name: "Classic Beef Mince",
    category: "Beef",
    price: 420,
    unit: "500 g",
    tag: "",
    image: beefMince,
    description: "Perfect for burgers, meatballs and family recipes."
  },
  {
    id: 5,
    name: "Chicken Drumsticks",
    category: "Chicken",
    price: 240,
    unit: "500 g",
    tag: "",
    image: chickenDrumsticks,
    description: "Juicy drumsticks ready for roasting or marinating."
  },
  {
    id: 6,
    name: "Lamb Curry Cut",
    category: "Lamb",
    price: 560,
    unit: "500 g",
    tag: "",
    image: lambCurryCut,
    description: "Thoughtfully cut pieces for slow-cooked curries."
  }
];