// Make a array 1 to 10
// display array items
// when click on item push that item into another div
let div = document.querySelector(".list");
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cartArr = [];

items.forEach((item) => {
  div.innerHTML += `<button onclick="handlePush(this)">${item}</button>`;
});
function handlePush(e) {
  //   cartArr.push(e.target.value);
  console.log(e.innerHTML);
  cartArr.push(e.innerHTML);
  console.log(cartArr);
  render();
}
let cart = document.querySelector(".cart");
function render() {
  cart.innerHTML = ""; // clear cart div before re-rendering
  //   console.log(cartArr);  // for debugging purposes
  cartArr.map((i) => {
    cart.innerHTML += `<button onclick="removeItem(this)">${i}</button>`;
  });
}
function removeItem(t) {
  t.remove();
}
