// Interacciones de demostración. Sustituir el almacenamiento local y el catálogo
// por el estado/API que defina el proyecto cuando se implemente la tienda.
const products = {
  tomate:{name:"Tomate de la huerta",image:"assets/tomate.jpg",unit:"Unidad / formato por confirmar"},
  lechuga:{name:"Lechuga fresca",image:"assets/lechuga.jpg",unit:"Unidad / formato por confirmar"},
  zanahoria:{name:"Zanahoria",image:"assets/zanahoria.jpg",unit:"Formato por confirmar"},
  calabacin:{name:"Calabacín",image:"assets/calabacin.jpg",unit:"Unidad / formato por confirmar"},
  rabanos:{name:"Rábanos",image:"assets/rabanos.jpg",unit:"Manojo / formato por confirmar"},
  pimientos:{name:"Pimientos",image:"assets/pimientos.jpg",unit:"Formato por confirmar"}
};
let cart = JSON.parse(localStorage.getItem("huerta-cart-demo") || "{}");
const body=document.body, drawer=document.getElementById("cartDrawer");
function saveCart(){localStorage.setItem("huerta-cart-demo",JSON.stringify(cart));renderCart()}
function renderCart(){
  const items=document.getElementById("cartItems"), count=Object.values(cart).reduce((a,b)=>a+b,0);
  document.getElementById("cartCount").textContent=count;
  if(!count){items.innerHTML='<p class="empty-cart">Todavía no has añadido productos.</p>';return}
  items.innerHTML=Object.entries(cart).filter(([id,q])=>q>0).map(([id,q])=>{
    const p=products[id];return `<div class="cart-row"><img src="${p.image}" alt=""><div><strong>${p.name}</strong><small>${p.unit}</small><div class="quantity"><button type="button" data-cart-minus="${id}" aria-label="Reducir ${p.name}">−</button><output>${q}</output><button type="button" data-cart-plus="${id}" aria-label="Aumentar ${p.name}">＋</button></div></div><button class="remove-item" type="button" data-remove="${id}" aria-label="Eliminar ${p.name}"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5"/></svg></button></div>`
  }).join("");
}
function openCart(){body.classList.add("cart-open");drawer.setAttribute("aria-hidden","false");document.getElementById("cartClose").focus()}
function closeCart(){body.classList.remove("cart-open");drawer.setAttribute("aria-hidden","true");document.getElementById("cartOpen").focus()}
document.getElementById("cartOpen").addEventListener("click",openCart);
document.getElementById("cartClose").addEventListener("click",closeCart);
document.getElementById("continueShopping").addEventListener("click",closeCart);
document.getElementById("drawerBackdrop").addEventListener("click",closeCart);
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();body.classList.remove("filters-open")}});
document.querySelectorAll(".add-to-cart").forEach(btn=>btn.addEventListener("click",()=>{
  const id=btn.dataset.id, card=btn.closest(".product-card"), qty=Number(card.querySelector("output").textContent)||1;
  cart[id]=(cart[id]||0)+qty;saveCart();openCart();
}));
document.addEventListener("click",e=>{
  const plus=e.target.closest("[data-cart-plus]"),minus=e.target.closest("[data-cart-minus]"),remove=e.target.closest("[data-remove]");
  if(plus){const id=plus.dataset.cartPlus;cart[id]=(cart[id]||0)+1;saveCart()}
  if(minus){const id=minus.dataset.cartMinus;cart[id]=Math.max(0,(cart[id]||0)-1);if(!cart[id])delete cart[id];saveCart()}
  if(remove){delete cart[remove.dataset.remove];saveCart()}
});
document.querySelectorAll(".product-card .qty-plus").forEach(b=>b.addEventListener("click",()=>{const o=b.parentElement.querySelector("output");o.textContent=Number(o.textContent)+1}));
document.querySelectorAll(".product-card .qty-minus").forEach(b=>b.addEventListener("click",()=>{const o=b.parentElement.querySelector("output");o.textContent=Math.max(1,Number(o.textContent)-1)}));

// Filtros demostrativos: al conectar los CSV, ampliar los valores y la lógica de disponibilidad.
function applyFilters(){
 const selected={season:[...document.querySelectorAll('[name=season]:checked')].map(x=>x.value),producer:[...document.querySelectorAll('[name=producer]:checked')].map(x=>x.value),category:[...document.querySelectorAll('[name=category]:checked')].map(x=>x.value)};
 let visible=0;
 document.querySelectorAll(".product-card").forEach(card=>{
  const ok=(!selected.season.length||selected.season.includes(card.dataset.season))&&(!selected.producer.length||selected.producer.includes(card.dataset.producer))&&(!selected.category.length||selected.category.includes(card.dataset.category));
  card.hidden=!ok;if(ok)visible++;
 });
 document.getElementById("resultsCount").textContent=`Mostrando ${visible} productos`;
}
document.querySelectorAll('.filters input[type="checkbox"]').forEach(x=>x.addEventListener("change",applyFilters));
document.getElementById("clearFilters").addEventListener("click",()=>{document.querySelectorAll(".filters input").forEach(x=>x.checked=false);applyFilters()});
document.getElementById("sortSelect").addEventListener("change",e=>{
 const grid=document.getElementById("productGrid"),cards=[...grid.children],mode=e.target.value;
 cards.sort((a,b)=>mode==="az"?a.dataset.name.localeCompare(b.dataset.name,"es"):mode==="za"?b.dataset.name.localeCompare(a.dataset.name,"es"):Number(a.dataset.popular)-Number(b.dataset.popular)).forEach(c=>grid.append(c));
});
document.getElementById("filterOpen").addEventListener("click",()=>body.classList.add("filters-open"));
document.getElementById("filterClose").addEventListener("click",()=>body.classList.remove("filters-open"));
document.getElementById("filterBackdrop").addEventListener("click",()=>body.classList.remove("filters-open"));
document.getElementById("menuToggle").addEventListener("click",()=>{const nav=document.getElementById("mobile-nav"),open=nav.hidden;nav.hidden=!open;document.getElementById("menuToggle").setAttribute("aria-expanded",String(open))});
document.getElementById("searchToggle").addEventListener("click",()=>alert("El buscador se conectará al catálogo completo."));
renderCart();
