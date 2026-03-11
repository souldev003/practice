const products = [
  {
    id: 101,
    name: "iPhone 15",
    category: "Mobile",
    price: 95000,
    stock: 15,
    brand: "Apple",
  },
  {
    id: 102,
    name: "Samsung S23",
    category: "Mobile",
    price: 85000,
    stock: 10,
    brand: "Samsung",
  },
  {
    id: 103,
    name: "MacBook Air M2",
    category: "Laptop",
    price: 115000,
    stock: 5,
    brand: "Apple",
  },
  {
    id: 104,
    name: "HP Vitus",
    category: "Laptop",
    price: 78000,
    stock: 8,
    brand: "HP",
  },
  {
    id: 105,
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 35000,
    stock: 20,
    brand: "Sony",
  },
  {
    id: 106,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 145000,
    stock: 3,
    brand: "Dell",
  },
  {
    id: 107,
    name: "Google Pixel 8",
    category: "Mobile",
    price: 75000,
    stock: 12,
    brand: "Google",
  },
  {
    id: 108,
    name: "AirPods Pro 2",
    category: "Audio",
    price: 25000,
    stock: 25,
    brand: "Apple",
  },
  {
    id: 109,
    name: "Asus ROG Zephyrus",
    category: "Laptop",
    price: 185000,
    stock: 4,
    brand: "Asus",
  },
  {
    id: 110,
    name: "Logitech MX Master 3S",
    category: "Accessories",
    price: 12000,
    stock: 50,
    brand: "Logitech",
  },
  {
    id: 111,
    name: "Keychron K2",
    category: "Accessories",
    price: 9500,
    stock: 30,
    brand: "Keychron",
  },
  {
    id: 112,
    name: "Samsung Odyssey G7",
    category: "Monitor",
    price: 65000,
    stock: 7,
    brand: "Samsung",
  },
];

const newProducts = products.map((pd) =>
  pd.price >= 50000
    ? { ...pd, isExpensive: true, isGoriberJonno: "nah" }
    : { ...pd, isExpensive: false, isGoriberJonno: "yeah" },
);

const laptopProducts = Object.values(products).filter(
  (product) => product.category.toLocaleLowerCase() == "laptop",
);
// console.log(laptopProducts);

const boroloxerProducts = Object.values(newProducts).filter(
  (elem) => elem.isGoriberJonno.toLocaleLowerCase() === "nah",
);

// console.log(boroloxerProducts);

// console.log(newProducts);

const prod = products.map((pd) => {
  return {
    ...pd,
    isExpensive: pd.price > 50000,
  };
});

// console.log(prod);

const expensiveProduct = products.filter((product) => product.price > 50000);

console.log(expensiveProduct);
