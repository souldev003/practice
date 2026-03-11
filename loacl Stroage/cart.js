const addToCart = () => {
  //   const cartBtn = document.getElementById("add-to-cart");
  const itemNameInput = document.getElementById("gadget-name");
  const quantityInput = document.getElementById("quantity");

  let itemName = itemNameInput.value;
  let quantity = parseInt(quantityInput.value);

  displayItem(itemName, quantity);
  addProductToCart(itemName, quantity);

  itemName = "";
  quantity = "";
};

const getCart = () => {
  let cart = {};

  const JSONCart = localStorage.getItem("allProducts");
  if (JSONCart) {
    cart = JSON.parse(JSONCart);
  }

  return cart;
};

const addProductToCart = (product, quantity) => {
  const cart = getCart();

  if (cart[product]) {
    cart[product] = cart[product] + quantity;
  } else {
    cart[product] = quantity;
  }

  const allProducts = JSON.stringify(cart);
  localStorage.setItem("allProducts", allProducts);

  console.log(cart);
};

const displayItem = (product, quantity) => {
  const ul = document.getElementById("ul-container");

  const li = document.createElement("li");
  li.classList.add("text-white", "font-bold");
  li.innerText = `${product} : ${quantity}`;

  ul.appendChild(li);
};

const showCart = () => {
  const cart = getCart();

  for (const product in cart) {
    const cartQuantity = cart[product];

    displayItem(product, cartQuantity);
  }
};

showCart();
