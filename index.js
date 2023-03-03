const menuIconEl = document.getElementById("bar");
console.log(menuIconEl);
const navbarEl = document.getElementById("navbar");
console.log(navbarEl);
const exitNavEl = document.getElementById("close");
// const shoppingBagEl = document.getElementById("lg-bag");

if (menuIconEl) {
  menuIconEl.addEventListener("click", (event) => {
    navbarEl.classList.add("active");
    // shoppingBagEl.style.display = "none";
  });
}

if (exitNavEl) {
  exitNavEl.addEventListener("click", (event) => {
    navbarEl.classList.remove("active");
  });
}

// menuIconEl.addEventListener("click", (Event) => {
//   navbarEl.style.right = "0px";
// });
