// Toggle navbar active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle Navbar Search box
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// Ketika Search Button di klik

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle Shopping Cart
const shoppingCart = document.querySelector(".shopping-cart");
// Ketika Shopping Cart button di klik
document.querySelector("#shopping-cart-button").onclick = () => {
  shoppingCart.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan NAV
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const scb = document.querySelector("#shopping-cart-button");
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

/* Modal Box */
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

/* Klik tombol close */

document.querySelector(".close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

/* Klik diluar modal box */
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
