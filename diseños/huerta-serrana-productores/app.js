// Comparte el carrito de demostración con la maqueta del catálogo.
const products = {
  tomate: { name: "Tomate de la huerta", image: "tomate.jpg", unit: "Unidad / formato por confirmar" },
  lechuga: { name: "Lechuga fresca", image: "lechuga.jpg", unit: "Unidad / formato por confirmar" },
  zanahoria: { name: "Zanahoria", image: "zanahoria.jpg", unit: "Formato por confirmar" },
  calabacin: { name: "Calabacín", image: "calabacin.jpg", unit: "Unidad / formato por confirmar" },
  rabanos: { name: "Rábanos", image: "rabanos.jpg", unit: "Manojo / formato por confirmar" },
  pimientos: { name: "Pimientos", image: "pimientos.jpg", unit: "Formato por confirmar" }
};
const cartKey = "huerta-cart-tailwind-demo";
let cart = JSON.parse(localStorage.getItem(cartKey) || "{}");
const drawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");

function renderCart() {
  const count = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  document.getElementById("cartCount").textContent = count;
  if (!count) {
    cartItems.innerHTML = '<p class="empty-cart">Todavía no has añadido productos.</p>';
    return;
  }
  cartItems.innerHTML = Object.entries(cart).filter(([, quantity]) => quantity > 0).map(([id, quantity]) => {
    const product = products[id];
    return `<div class="cart-row"><img src="../huerta-serrana-catalogo/assets/${product.image}" alt="" width="66" height="58"><div><strong>${product.name}</strong><small>${product.unit}</small><div class="quantity"><button type="button" data-cart-minus="${id}" aria-label="Reducir ${product.name}">−</button><output>${quantity}</output><button type="button" data-cart-plus="${id}" aria-label="Aumentar ${product.name}">＋</button></div></div><button class="remove-item" type="button" data-remove="${id}" aria-label="Eliminar ${product.name}"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg></button></div>`;
  }).join("");
}
function saveCart() {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  renderCart();
}
function openCart() {
  document.body.classList.add("cart-open");
  drawer.inert = false;
  drawer.setAttribute("aria-hidden", "false");
  document.getElementById("cartClose").focus();
}
function closeCart() {
  document.body.classList.remove("cart-open");
  drawer.inert = true;
  drawer.setAttribute("aria-hidden", "true");
  document.getElementById("cartOpen").focus();
}
document.getElementById("cartOpen").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("continueShopping").addEventListener("click", closeCart);
document.getElementById("drawerBackdrop").addEventListener("click", closeCart);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && document.body.classList.contains("cart-open")) closeCart();
});
cartItems.addEventListener("click", event => {
  const plus = event.target.closest("[data-cart-plus]");
  const minus = event.target.closest("[data-cart-minus]");
  const remove = event.target.closest("[data-remove]");
  if (plus) cart[plus.dataset.cartPlus]++;
  if (minus) {
    const id = minus.dataset.cartMinus;
    if (--cart[id] === 0) delete cart[id];
  }
  if (remove) delete cart[remove.dataset.remove];
  if (plus || minus || remove) saveCart();
});
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mobile-nav");
  nav.hidden = !nav.hidden;
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(!nav.hidden));
});
document.getElementById("searchToggle").addEventListener("click", () => alert("El buscador se conectará al catálogo completo."));

document.querySelectorAll("[data-story]").forEach(storyTrigger => {
  const storyDialog = document.getElementById(storyTrigger.dataset.story);
  if (!storyDialog || typeof storyDialog.showModal !== "function") return;
  storyTrigger.setAttribute("role", "button");
  storyTrigger.setAttribute("aria-haspopup", "dialog");
  storyTrigger.setAttribute("aria-controls", storyDialog.id);
  storyTrigger.addEventListener("click", event => {
    event.preventDefault();
    storyDialog.showModal();
    storyDialog.scrollTop = 0;
    document.body.classList.add("story-open");
  });
  storyDialog.querySelector(".story-close").addEventListener("click", () => storyDialog.close());
  storyDialog.addEventListener("click", event => {
    if (event.target === storyDialog) storyDialog.close();
  });
  storyDialog.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      event.preventDefault();
      storyDialog.close();
    }
  });
  storyDialog.addEventListener("close", () => {
    if (!document.querySelector(".story-dialog[open]")) document.body.classList.remove("story-open");
  });
});
renderCart();
