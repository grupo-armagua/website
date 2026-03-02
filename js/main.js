(function () {

  // Año dinámico en footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Formulario → WhatsApp + Evento de conversión
  const form = document.getElementById("quoteForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = new FormData(form);

      const nombre = (data.get("nombre") || "").trim();
      const telefono = (data.get("telefono") || "").trim();
      const email = (data.get("email") || "").trim();
      const servicio = (data.get("servicio") || "").trim();
      const ubicacion = (data.get("ubicacion") || "").trim();
      const mensaje = (data.get("mensaje") || "").trim();

      const text =
        `Hola, estoy escribiendo desde la web de Grupo Armagua.\n\n` +
        `Nombre: ${nombre}\n` +
        `Teléfono: ${telefono}\n` +
        (email ? `Email: ${email}\n` : "") +
        `Servicio: ${servicio}\n` +
        `Ubicación: ${ubicacion}\n` +
        (mensaje ? `Detalles: ${mensaje}\n` : "");

      const phone = "50236326030";
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

      // Disparar evento de conversión (si gtag está instalado)
      if (typeof gtag === "function") {
        gtag("event", "form_submit", {
          event_category: "contact",
          event_label: "whatsapp_form",
          value: 1
        });
      }

      // Esperar 300ms para asegurar registro del evento
      setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
      }, 300);

      form.reset();
    });
  }

  // ===== Cookie Banner =====
(function () {
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");

  if (!banner || !acceptBtn) return;

  // Mostrar solo si no ha aceptado
  if (!localStorage.getItem("cookiesAccepted")) {
    banner.style.display = "block";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    banner.style.display = "none";
  });
})();

const productBulletImages = document.querySelectorAll(".bullet-media-item__img");
productBulletImages.forEach((img) => {
  img.addEventListener("error", function () {
    this.src = "assets/img/productos/placeholder-producto.jpg";
    this.alt = "Imagen de referencia del producto";
  });
});

document.addEventListener('DOMContentLoaded', function () {

  const btn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if(btn && menu){

    btn.addEventListener('click', function(){

      const isOpen = menu.classList.toggle('is-open');
      btn.classList.toggle('is-active');

      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    });

  }

});

})();
