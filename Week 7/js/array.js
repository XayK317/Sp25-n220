const itemsUlRef = document.querySelector("#items");
const cartUlRef = document.querySelector("#cart");

const items = [
    "Apple",
    "orange",
    "Plum",
    "Pair",
    "Hairy Potato"
]
const cart = [];

function showCart() {
    for (let i = 0; i <cart.length; i++)
}

function addItemToCart(e) {
    cart.push(e.target.dataset.name);
}

for (let i = 0; i < items.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = items[i];
    // newLi.innerText = items[i];
    // items.UlRef.innerHTML +="<li>" + items[i] + "</li>";

    const newBtn = document.createElement("button");

}