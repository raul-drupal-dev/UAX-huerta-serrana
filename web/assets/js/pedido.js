const stepPanels = [
  document.getElementById("reviewStep"),
  document.getElementById("detailsStep"),
  document.getElementById("confirmStep")
];
const stepLabels = [...document.querySelectorAll(".order-steps li")];
const orderItems = document.getElementById("orderItems");
const nextStep = document.getElementById("nextStep");
const orderForm = document.getElementById("orderForm");
let currentStep = 0;

function showStep(step) {
  currentStep = step;
  stepPanels.forEach((panel, index) => {
    panel.hidden = index !== step;
    stepLabels[index].classList.toggle("is-current", index === step);
    if (index === step) stepLabels[index].setAttribute("aria-current", "step");
    else stepLabels[index].removeAttribute("aria-current");
  });
  nextStep.hidden = step !== 0;
  stepPanels[step].querySelector("h2").focus();
}

function renderOrder() {
  const entries = Object.entries(cart).filter(([, quantity]) => quantity > 0);
  const count = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  document.getElementById("summaryCount").textContent = count;
  const amounts = cartTotals(entries);
  document.getElementById("summaryProducts").textContent = formatPrice(amounts.products);
  document.getElementById("summaryBaskets").textContent = `${formatPrice(amounts.baskets)} / mes`;
  nextStep.disabled = count === 0;
  if (!count) {
    orderItems.innerHTML = '<p class="empty-order">Tu carrito está vacío. Añade productos desde el catálogo o cestas desde Inicio para continuar.</p>';
    if (currentStep !== 0) showStep(0);
  } else {
    orderItems.innerHTML = entries.map(([id, quantity]) => {
      const product = cartItem(id);
      return `<article class="order-item">${productImageMarkup(product, "order-item-image")}<div><h3>${product.name}</h3><p>${formatPrice(product.priceCents)} / ${product.unit}</p></div><div class="quantity" aria-label="Cantidad de ${product.name}"><button type="button" data-order-minus="${id}" aria-label="Reducir ${product.name}">−</button><output>${quantity}</output><button type="button" data-order-plus="${id}" aria-label="Aumentar ${product.name}">＋</button></div><button type="button" class="order-remove" data-order-remove="${id}" aria-label="Eliminar ${product.name}">×</button></article>`;
    }).join("");
  }
  const list = document.getElementById("confirmItems");
  list.replaceChildren(...entries.map(([id, quantity]) => {
    const item = document.createElement("li");
    const product = cartItem(id);
    item.className = "confirm-item";
    item.innerHTML = `${productImageMarkup(product, "confirm-item-image")}<div><strong class="confirm-item-name"></strong><span class="confirm-item-meta"></span></div><span class="confirm-item-price">${formatPrice(product.priceCents)} / ${product.unit}</span>`;
    item.querySelector(".confirm-item-name").textContent = product.name;
    item.querySelector(".confirm-item-meta").textContent = `Cantidad: ${quantity}`;
    return item;
  }));
}

orderItems.addEventListener("click", event => {
  const plus = event.target.closest("[data-order-plus]");
  const minus = event.target.closest("[data-order-minus]");
  const remove = event.target.closest("[data-order-remove]");
  if (plus) cart[plus.dataset.orderPlus]++;
  if (minus) {
    const id = minus.dataset.orderMinus;
    if (--cart[id] === 0) delete cart[id];
  }
  if (remove) delete cart[remove.dataset.orderRemove];
  if (plus || minus || remove) {
    saveCart();
    renderOrder();
    const target = plus || minus;
    const id = target && (target.dataset.orderPlus || target.dataset.orderMinus);
    const selector = plus ? `[data-order-plus="${id}"]` : `[data-order-minus="${id}"]`;
    (id && orderItems.querySelector(selector) || document.querySelector(".back-link")).focus();
  }
});
cartItems.addEventListener("click", () => renderOrder());
window.addEventListener("storage", event => {
  if (event.key === cartKey) {
    cart = JSON.parse(event.newValue || "{}");
    renderCart();
    renderOrder();
  }
});
document.getElementById("reviewCart").addEventListener("click", () => {
  closeCart();
  showStep(0);
});
nextStep.addEventListener("click", () => {
  if (!nextStep.disabled) showStep(1);
});
document.getElementById("backToReview").addEventListener("click", () => showStep(0));
document.getElementById("backToDetails").addEventListener("click", () => showStep(1));
orderForm.addEventListener("submit", event => {
  event.preventDefault();
  const fields = [
    ["Nombre", "orderName"], ["Correo", "orderEmail"], ["Teléfono", "orderPhone"],
    ["Dirección", "orderAddress"], ["Localidad", "orderCity"], ["Código postal", "orderPostal"],
    ["Comentarios", "orderNotes"]
  ];
  const details = document.getElementById("confirmDetails");
  details.replaceChildren();
  fields.forEach(([label, id]) => {
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = document.getElementById(id).value.trim() || "Sin comentarios";
    details.append(term, description);
  });
  showStep(2);
});
document.getElementById("confirmOrder").addEventListener("click", () => {
  const reference = String(Math.floor(Math.random() * 100000000)).padStart(8, "0");
  window.location.href = `gracias.html#DEMO-${reference}`;
});
renderOrder();
