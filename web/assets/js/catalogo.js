const productGrid = document.getElementById("productGrid");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");

function renderProducts() {
  productGrid.innerHTML = Object.entries(products).map(([id, product]) => {
    const image = product.image
      ? `<img src="assets/catalogo/${product.image}" alt="" width="360" height="240" loading="lazy" decoding="async">`
      : '<svg class="sprout-icon placeholder-icon" aria-hidden="true" focusable="false"><use href="#icon-sprout"></use></svg>';
    const allergens = product.allergens.length ? product.allergens.join(", ") : "—";

    return `<article class="product-card min-w-0 overflow-hidden rounded-xl border border-solid border-[#e6dcc7] bg-[#f8f0df] shadow-[0_2px_4px_rgba(70,54,24,.08)]" data-id="${id}" data-name="${product.name}" data-producer="${product.producer}" data-category="${product.category}" data-season="${product.season}" data-allergens="${product.allergens.join("|")}" data-price="${product.priceCents}">
      <div class="product-image block h-[132px] overflow-hidden bg-[#e7dec9] hasta900:h-[145px] hasta650:h-[112px]">${image}</div>
      <div class="product-info px-3 pt-[11px] pb-3 hasta650:px-[9px] hasta650:pt-[9px] hasta650:pb-[10px]">
        <h2 class="product-title">${product.name}</h2>
        <p class="product-category">${product.category}</p>
        <p class="product-price">${formatPrice(product.priceCents)} / ${product.unit}</p>
        <span class="season-tag">✦ ${product.season}</span>
        <p class="producer">${product.producer}</p>
        <p class="allergen-note">Alérgenos declarados: ${allergens}</p>
        <div class="product-actions">
          <div class="quantity" role="group" aria-label="Cantidad de ${product.name}">
            <button type="button" class="qty-minus" aria-label="Reducir ${product.name}">−</button>
            <output>1</output>
            <button type="button" class="qty-plus" aria-label="Aumentar ${product.name}">＋</button>
          </div>
          <button class="button button-terra add-to-cart" type="button"><svg class="sprout-icon add-icon" aria-hidden="true" focusable="false"><use href="#icon-sprout"></use></svg>Añadir</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

function applyFilters() {
  const selected = {
    season: [...document.querySelectorAll('[name="season"]:checked')].map(input => input.value),
    producer: [...document.querySelectorAll('[name="producer"]:checked')].map(input => input.value),
    category: [...document.querySelectorAll('[name="category"]:checked')].map(input => input.value),
    allergen: [...document.querySelectorAll('[name="allergen"]:checked')].map(input => input.value)
  };
  let visible = 0;
  const total = productGrid.children.length;

  [...productGrid.children].forEach(card => {
    const cardAllergens = card.dataset.allergens ? card.dataset.allergens.split("|") : [];
    const matches = (!selected.season.length || selected.season.includes(card.dataset.season))
      && (!selected.producer.length || selected.producer.includes(card.dataset.producer))
      && (!selected.category.length || selected.category.includes(card.dataset.category))
      && (!selected.allergen.length || selected.allergen.some(allergen =>
        allergen === "none" ? cardAllergens.length === 0 : cardAllergens.some(declared =>
          declared.toLocaleLowerCase("es") === allergen.toLocaleLowerCase("es")
        )
      ));
    card.hidden = !matches;
    if (matches) visible++;
  });

  resultsCount.textContent = visible === total
    ? `Mostrando ${total} productos`
    : `Mostrando ${visible} de ${total} productos`;
  noResults.hidden = visible > 0;
}

function sortProducts(mode) {
  const cards = [...productGrid.children];
  cards.sort((a, b) => {
    if (mode === "az") return a.dataset.name.localeCompare(b.dataset.name, "es");
    if (mode === "za") return b.dataset.name.localeCompare(a.dataset.name, "es");
    if (mode === "price-asc") return Number(a.dataset.price) - Number(b.dataset.price);
    if (mode === "price-desc") return Number(b.dataset.price) - Number(a.dataset.price);
    return a.dataset.id.localeCompare(b.dataset.id, "es", { numeric: true });
  }).forEach(card => productGrid.append(card));
}

renderProducts();
applyFilters();

productGrid.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;

  const card = button.closest(".product-card");
  const output = card.querySelector("output");
  if (button.classList.contains("qty-plus")) {
    output.textContent = Number(output.textContent) + 1;
  } else if (button.classList.contains("qty-minus")) {
    output.textContent = Math.max(1, Number(output.textContent) - 1);
  } else if (button.classList.contains("add-to-cart")) {
    const id = card.dataset.id;
    cart[id] = (cart[id] || 0) + Number(output.textContent);
    saveCart();
    openCart();
  }
});

document.querySelectorAll('.filters input[type="checkbox"]').forEach(input => input.addEventListener("change", applyFilters));
document.getElementById("clearFilters").addEventListener("click", () => {
  document.querySelectorAll(".filters input").forEach(input => { input.checked = false; });
  applyFilters();
});
document.getElementById("sortSelect").addEventListener("change", event => sortProducts(event.target.value));
document.getElementById("filterOpen").addEventListener("click", () => document.body.classList.add("filters-open"));
document.getElementById("filterClose").addEventListener("click", () => document.body.classList.remove("filters-open"));
document.getElementById("filterBackdrop").addEventListener("click", () => document.body.classList.remove("filters-open"));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") document.body.classList.remove("filters-open");
});
