if (typeof addBasketToCart !== "function" || typeof openCart !== "function") {
  throw new Error("El carrito de prueba no está disponible.");
}
document.querySelectorAll("[data-add-basket]").forEach(button => {
  button.addEventListener("click", () => {
    addBasketToCart(button.dataset.addBasket);
    openCart();
  });
  button.disabled = false;
});
document.getElementById("basketActionStatus").hidden = true;
