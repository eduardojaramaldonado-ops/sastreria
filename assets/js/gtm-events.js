(function () {
  'use strict';

  // --- Clic en teléfono ---
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="tel"]');
    if (!link) return;
    dataLayer.push({
      event: 'clic_telefono',
      categoria: 'contacto',
      accion: 'clic_telefono',
      etiqueta: link.href.replace('tel://', '').replace('tel:', '')
    });
  });

  // --- Clic en WhatsApp (botón joinchat) ---
  document.addEventListener('click', function (e) {
    if (e.target.closest('.joinchat__button') || e.target.closest('.joinchat__tooltip')) {
      dataLayer.push({
        event: 'clic_whatsapp',
        categoria: 'contacto',
        accion: 'clic_whatsapp',
        etiqueta: 'boton_flotante'
      });
    }
  });

  // --- Envío del formulario de contacto (Elementor Form) ---
  document.addEventListener('submit', function (e) {
    var form = e.target.closest('.elementor-form');
    if (!form) return;
    dataLayer.push({
      event: 'envio_formulario',
      categoria: 'contacto',
      accion: 'envio_formulario',
      etiqueta: form.getAttribute('name') || 'formulario_contacto'
    });
  });

  // --- Clic en botones CTA (Cotizar, Ver servicios, etc.) ---
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.elementor-button');
    if (!btn) return;
    var href = btn.getAttribute('href') || btn.closest('a') && btn.closest('a').getAttribute('href') || '';
    var texto = (btn.textContent || '').trim();
    // Solo CTAs que no sean teléfono ni WhatsApp (ya cubiertos)
    if (href.indexOf('tel:') !== -1) return;
    dataLayer.push({
      event: 'clic_cta',
      categoria: 'cta',
      accion: 'clic_boton',
      etiqueta: texto || href
    });
  });

})();
