const menuItems = [
  { name: "Hamburger", price: 2.99 },
  { name: "Cheeseburger", price: 3.99 },
  { name: "Cheese Pizza", price: 3.99 },
  { name: "Pepperoni Pizza", price: 4.99 },
  { name: "Sausage Pizza", price: 4.99 },
  { name: "Caesar Salad", price: 3.99 },
  { name: "Fries", price: 1.99 },
  { name: "Onion Rings", price: 2.49 },
];

let cart = [];
const menuList = document.getElementById("menu");
const cartTable = document.getElementById("cart");
const noItemsMessage = document.getElementById("no-items");

function checkCart() {
  if (cart.length === 0) {
    noItemsMessage.style.display = "block";
  } else {
    noItemsMessage.style.display = "none";
  }
}

function updateCart() {
  cartTable.innerHTML = "";
  let total = 0;
  cart.forEach(function (item, index) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td><textarea class="special-request" data-index="${index}" placeholder="Special Request">${
      item.specialRequest || ""
    }</textarea></td>
      <td><button class="remove-item" data-index="${index}">Remove</button></td>
    `;
    cartTable.appendChild(row);
    total += item.price;
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td colspan="3">$${total.toFixed(2)}</td>
  `;
  cartTable.appendChild(totalRow);

  checkCart();
}

menuItems.forEach(function (item) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = "+";
  button.onclick = function () {
    cart.push({ ...item, specialRequest: "" });
    updateCart();
  };
  li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
  li.appendChild(button);
  menuList.appendChild(li);
});

cartTable.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("remove-item")) {
    const index = e.target.getAttribute("data-index");
    cart.splice(index, 1);
    updateCart();
  }
});

cartTable.addEventListener("input", function (e) {
  if (e.target && e.target.classList.contains("special-request")) {
    const index = e.target.getAttribute("data-index");
    const newSpecialRequest = e.target.value;
    cart[index].specialRequest = newSpecialRequest;
  }
});

updateCart();
