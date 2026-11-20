// Datos del catálogo procedentes de recursos/productos_huerta_serrana.csv.
const products = {
  P01: { name: "Tomate rosa de la sierra", category: "Verdura", priceCents: 390, unit: "kg", producer: "Huerto Los Álamos", season: "Verano", allergens: [], image: "tomate.jpg" },
  P02: { name: "Calabaza de invierno", category: "Verdura", priceCents: 180, unit: "kg", producer: "Huerto Los Álamos", season: "Otoño", allergens: [], image: "calabaza-invierno.jpg" },
  P03: { name: "Judías verdes", category: "Verdura", priceCents: 420, unit: "kg", producer: "Huerto Los Álamos", season: "Verano", allergens: [], image: "judias-verdes.jpg" },
  P04: { name: "Manzana reineta", category: "Fruta", priceCents: 260, unit: "kg", producer: "Huerto Los Álamos", season: "Otoño", allergens: [], image: "manzana-reineta.jpg" },
  P05: { name: "Queso curado de cabra", category: "Lácteo", priceCents: 1850, unit: "kg", producer: "Quesería La Peña", season: "Todo el año", allergens: ["Leche"], image: "queso-curado-cabra.jpg" },
  P06: { name: "Yogur natural de oveja", category: "Lácteo", priceCents: 210, unit: "unidad", producer: "Quesería La Peña", season: "Todo el año", allergens: ["Leche"], image: "yogur-oveja.jpg" },
  P07: { name: "Miel de romero", category: "Despensa", priceCents: 750, unit: "bote 500 g", producer: "Apiarios del Jarama", season: "Primavera", allergens: [], image: "miel-romero.jpg" },
  P08: { name: "Miel de brezo", category: "Despensa", priceCents: 890, unit: "bote 500 g", producer: "Apiarios del Jarama", season: "Verano", allergens: [], image: "miel-brezo.jpg" },
  P09: { name: "Pan de centeno de masa madre", category: "Panadería", priceCents: 340, unit: "hogaza", producer: "Horno de Piedra", season: "Todo el año", allergens: ["Gluten"], image: "pan-centeno.jpg" },
  P10: { name: "Magdalenas de aceite de oliva", category: "Panadería", priceCents: 395, unit: "caja 6 uds", producer: "Horno de Piedra", season: "Todo el año", allergens: ["Gluten", "huevo"], image: "magdalenas-aceite.jpg" },
  P11: { name: "Huevos camperos", category: "Despensa", priceCents: 320, unit: "docena", producer: "Huerto Los Álamos", season: "Todo el año", allergens: ["Huevo"], image: "huevos-camperos.jpg" },
  P12: { name: "Mermelada de higo", category: "Despensa", priceCents: 480, unit: "bote 250 g", producer: "Horno de Piedra", season: "Otoño", allergens: [], image: "mermelada-higo.jpg" }
};
// Datos de recursos/cestas.csv, con la cantidad de huevos de C1 aclarada por el equipo.
const baskets = {
  C1: { name: "Cesta Pareja", priceCents: 3800, unit: "mes", people: "1-2", delivery: "Semanal", contents: "Verdura y fruta de temporada, acompañadas de 1 pan y 1 docena de huevos. Una selección para compartir.", imagePath: "home/cesta-clasica.jpg", illustrations: [["catalogo/tomate.jpg", "Verdura de temporada"], ["catalogo/manzana-reineta.jpg", "Fruta de temporada"], ["catalogo/pan-centeno.jpg", "Pan"], ["catalogo/huevos-camperos.jpg", "Huevos"]] },
  C2: { name: "Cesta Familia", priceCents: 6200, unit: "mes", people: "3-4", delivery: "Semanal", contents: "Una selección para compartir en familia: verdura y fruta de temporada, 2 panes, 1 docena de huevos y 1 queso o yogures.", imagePath: "home/cesta-familiar.jpg", illustrations: [["catalogo/tomate.jpg", "Verdura de temporada"], ["catalogo/manzana-reineta.jpg", "Fruta de temporada"], ["catalogo/pan-centeno.jpg", "Pan"], ["catalogo/huevos-camperos.jpg", "Huevos"], ["catalogo/queso-curado-cabra.jpg", "Queso"], ["catalogo/yogur-oveja.jpg", "Yogur"]] },
  C3: { name: "Cesta Despensa", priceCents: 4500, unit: "mes", people: "2-4", delivery: "Quincenal", contents: "Miel, mermelada, queso curado, magdalenas y 1 pan: una selección para disfrutar de nuestra despensa.", imagePath: "home/cesta-despensa.jpg", illustrations: [["catalogo/miel-romero.jpg", "Miel"], ["catalogo/mermelada-higo.jpg", "Mermelada"], ["catalogo/queso-curado-cabra.jpg", "Queso curado"], ["catalogo/magdalenas-aceite.jpg", "Magdalenas"], ["catalogo/pan-centeno.jpg", "Pan"]] }
};
const cartKey = "huerta-cart-csv-demo-v1";
const formatPrice = priceCents => new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR"
}).format(priceCents / 100);
const cartItem = id => products[id] || baskets[id];
const cartTotals = entries => entries.reduce((totals, [id, quantity]) => {
  if (products[id]) totals.products += products[id].priceCents * quantity;
  else if (baskets[id]) totals.baskets += baskets[id].priceCents * quantity;
  return totals;
}, { products: 0, baskets: 0 });
const productImageMarkup = (product, className) => product.image || product.imagePath
  ? `<img class="${className}" src="assets/${product.imagePath || `catalogo/${product.image}`}" alt="" width="66" height="58">`
  : `<span class="${className} product-placeholder" aria-hidden="true"></span>`;
let cart = JSON.parse(localStorage.getItem(cartKey) || "{}");
const drawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");

function renderCart() {
  const count = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  document.getElementById("cartCount").textContent = count;
  const amounts = cartTotals(Object.entries(cart));
  const summary = document.querySelector(".cart-summary");
  summary.querySelector(".total-line").innerHTML = `<strong>Productos</strong><span>${formatPrice(amounts.products)}</span>`;
  let basketTotal = summary.querySelector(".basket-total");
  if (!basketTotal) {
    basketTotal = document.createElement("div");
    basketTotal.className = "total-line basket-total";
    summary.querySelector(".total-line").after(basketTotal);
  }
  basketTotal.innerHTML = `<strong>Cestas al mes</strong><span>${formatPrice(amounts.baskets)} / mes</span>`;
  summary.querySelector(".price-disclaimer").textContent = "Importes orientativos separados; impuestos y envío pendientes de concretar. No se tramitan pedidos ni suscripciones.";
  if (!count) {
    cartItems.innerHTML = '<p class="empty-cart">Todavía no has añadido productos ni cestas.</p>';
    return;
  }
  cartItems.innerHTML = Object.entries(cart).filter(([, quantity]) => quantity > 0).map(([id, quantity]) => {
    const product = cartItem(id);
    return `<div class="cart-row">${productImageMarkup(product, "")}<div><strong>${product.name}</strong><small>${formatPrice(product.priceCents)} / ${product.unit}</small><div class="quantity"><button type="button" data-cart-minus="${id}" aria-label="Reducir ${product.name}">−</button><output>${quantity}</output><button type="button" data-cart-plus="${id}" aria-label="Aumentar ${product.name}">＋</button></div></div><button class="remove-item" type="button" data-remove="${id}" aria-label="Eliminar ${product.name}"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg></button></div>`;
  }).join("");
}
function saveCart() {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  renderCart();
}
function addBasketToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
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
renderCart();
