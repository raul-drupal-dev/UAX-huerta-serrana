const reference = window.location.hash.slice(1);
if (/^DEMO-\d{8}$/.test(reference)) {
  document.getElementById("demoReference").textContent = reference;
}
