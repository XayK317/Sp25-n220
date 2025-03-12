const menuItems = [
  "Hamburger",
  "Cheeseburger",
  "Cheese Pizza",
  "Pepperoni Pizza",
  "Sausage Pizza",
  "Caesar Salad",
  "Fries",
  "Onion Rings",
];

let cart = [];

const menuList = document.getElementById("menu");
const cartList = document.getElementById("cart");
const removeItemBtn = document.getElementById("remove-item");
const noItemsMessage = document.getElementById("no-items");

function checkCart() {
  if (cart.length === 0) {
    noItemsMessage.style.display = "block";
  } else {
    noItemsMessage.style.display = "none";
  }
}

function updateCart() {
  cartList.innerHTML = "";
  cart.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
  checkCart();
}

removeItemBtn.onclick = function () {
  cart.pop();
  updateCart();
};

menuItems.forEach(function (item) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = "+";
  button.onclick = function () {
    cart.push(item);
    updateCart();
  };

  li.textContent = item;
  li.appendChild(button);
  menuList.appendChild(li);
});

updateCart();
