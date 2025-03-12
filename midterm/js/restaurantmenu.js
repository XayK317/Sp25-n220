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

const menuList = document.getElementById("menu");
const cartTable = document.getElementById("cart");
const noItemsRow = document.getElementById("no-items");

const cart = [];
function updateCart() {
  const cartRows = cartTable.querySelectorAll("tr:not(#no-items)");
  cartRows.forEach((row) => row.remove());

  if (cart.length === 0) {
    noItemsRow.style.display = "table-row";
  } else {
    noItemsRow.style.display = "none";

    let total = 0;
    cart.forEach((item, index) => {
      const row = document.createElement("tr");
      row.setAttribute("data-index", index);
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td><textarea class="special-request" data-index="${index}">${
        item.specialRequest
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
  }
}

menuList.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("add-to-cart")) {
    const name = e.target.getAttribute("data-item");
    const price = parseFloat(e.target.getAttribute("data-price"));
    cart.push({ name, price, specialRequest: "" });
    updateCart();
  }
});

menuItems.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
   <button class="add-to-cart" data-item="${item.name}" data-price="${
    item.price
  }">+</button>`;
  menuList.appendChild(li);
});

cartTable.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("remove-item")) {
    const index = e.target.getAttribute("data-index");

    cart.splice(index, 1);
    updateCart();
  }
});
cartTable.addEventListener("input", (e) => {
  if (e.target && e.target.classList.contains("special-request")) {
    const index = e.target.getAttribute("data-index");
    const newSpecialRequest = e.target.value;
    cart[index].specialRequest = newSpecialRequest;
  }
});

updateCart();
