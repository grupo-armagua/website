(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const nombre = (data.get("nombre") || "").toString().trim();
      const telefono = (data.get("telefono") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const servicio = (data.get("servicio") || "").toString().trim();
      const ubicacion = (data.get("ubicacion") || "").toString().trim();
      const mensaje = (data.get("mensaje") || "").toString().trim();

      const text =
        `Hola, estoy escribiendo desde la web de Grupo Armagua.\n\n` +
        `Nombre: ${nombre}\n` +
        `Teléfono: ${telefono}\n` +
        (email ? `Email: ${email}\n` : "") +
        `Servicio: ${servicio}\n` +
        `Ubicación: ${ubicacion}\n` +
        (mensaje ? `Detalles: ${mensaje}\n` : "");

      const url = `https://wa.me/50236326030?text=${encodeURIComponent(text)}`;

      if (typeof gtag === "function") {
        gtag("event", "form_submit", {
          event_category: "contact",
          event_label: "whatsapp_form",
          value: 1,
        });
      }

      setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
      }, 300);

      form.reset();
    });
  }

  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");
  if (banner && acceptBtn) {
    if (!localStorage.getItem("cookiesAccepted")) banner.style.display = "block";
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      banner.style.display = "none";
    });
  }

  document.querySelectorAll(".bullet-media-item__img").forEach((img) => {
    img.addEventListener("error", () => {
      img.src = "assets/img/productos/placeholder-producto.jpg";
      img.alt = "Imagen de referencia del producto";
    });
  });
})();

