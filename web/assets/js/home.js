const basketDialog = document.getElementById("basketDialog");
const basketTriggers = document.querySelectorAll("[data-basket]");
let selectedBasketId;

if (typeof basketDialog.showModal === "function") {
  basketTriggers.forEach(trigger => {
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute("aria-controls", basketDialog.id);
    trigger.addEventListener("click", event => {
      event.preventDefault();
      selectedBasketId = trigger.dataset.basket;
      const basket = baskets[selectedBasketId];
      document.getElementById("basketDialogTitle").textContent = basket.name;
      document.getElementById("basketDialogPrice").textContent = `${formatPrice(basket.priceCents)} / mes`;
      document.getElementById("basketDialogDetails").textContent = `${basket.people} personas · Entrega ${basket.delivery.toLocaleLowerCase("es")}`;
      document.getElementById("basketDialogContents").textContent = basket.contents;
      document.getElementById("basketIllustrations").innerHTML = basket.illustrations.map(([image, label]) =>
        `<figure><img src="assets/${image}" alt="" loading="lazy"><figcaption>${label}</figcaption></figure>`
      ).join("");
      basketDialog.showModal();
      basketDialog.scrollTop = 0;
    });
  });
  basketDialog.querySelector(".basket-dialog-close").addEventListener("click", () => basketDialog.close());
  basketDialog.addEventListener("click", event => {
    if (event.target === basketDialog) basketDialog.close();
  });
  basketDialog.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      event.preventDefault();
      basketDialog.close();
    }
  });
  document.getElementById("addBasket").addEventListener("click", () => {
    addBasketToCart(selectedBasketId);
    basketDialog.close();
    openCart();
  });
}
