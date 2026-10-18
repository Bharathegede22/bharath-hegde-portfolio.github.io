/* Noir Puja landing — shared by the Shopify sections and the static preview.
   Safe to include once per section: init() only binds elements it hasn't bound yet,
   and re-runs when the theme editor reloads a section. */
(function () {
  'use strict';
  if (window.NoirLanding) return;

  function once(el, key) {
    var flag = 'noir' + key;
    if (el.dataset[flag]) return false;
    el.dataset[flag] = '1';
    return true;
  }

  function isPreview() { return !!document.querySelector('.noir[data-preview]'); }

  // ---- Money formatting (mirrors Shopify's shop.money_format placeholders) ----
  function formatMoney(cents, format) {
    format = format || '₹{{amount}}';
    var value = (Number(cents) || 0) / 100;
    function withDelims(n, decimals, thousands, decimal) {
      var parts = n.toFixed(decimals).split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
      return parts.join(decimal);
    }
    return format.replace(/\{\{\s*(\w+)\s*\}\}/, function (_, key) {
      switch (key) {
        case 'amount_no_decimals': return withDelims(value, 0, ',', '.');
        case 'amount_with_comma_separator': return withDelims(value, 2, '.', ',');
        case 'amount_no_decimals_with_comma_separator': return withDelims(value, 0, '.', ',');
        default: return withDelims(value, 2, ',', '.');
      }
    });
  }

  function readJSON(scope, selector) {
    var el = scope.querySelector(selector);
    if (!el) return null;
    try { return JSON.parse(el.textContent); } catch (e) { return null; }
  }

  function toast(message) {
    var el = document.querySelector('.noir-toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'noir noir-toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('is-visible');
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove('is-visible'); }, 2600);
  }

  function initCountdowns() {
    document.querySelectorAll('[data-noir-countdown]').forEach(function (el) {
      if (!once(el, 'Countdown')) return;
      var end = Date.parse(el.getAttribute('data-end'));
      if (isNaN(end)) { el.hidden = true; return; }
      var units = ['d', 'h', 'm', 's'].reduce(function (acc, u) {
        acc[u] = el.querySelector('[data-unit="' + u + '"]');
        return acc;
      }, {});
      function pad(n) { return String(n).padStart(2, '0'); }
      function tick() {
        var diff = Math.max(0, end - Date.now());
        var s = Math.floor(diff / 1000);
        if (units.d) units.d.textContent = pad(Math.floor(s / 86400));
        if (units.h) units.h.textContent = pad(Math.floor(s / 3600) % 24);
        if (units.m) units.m.textContent = pad(Math.floor(s / 60) % 60);
        if (units.s) units.s.textContent = pad(s % 60);
        if (diff === 0) clearInterval(timer);
      }
      var timer = setInterval(tick, 1000);
      tick();
    });
  }

  function initFaq() {
    document.querySelectorAll('.noir-faq__q').forEach(function (btn) {
      if (!once(btn, 'Faq')) return;
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        document.getElementById(btn.getAttribute('aria-controls')).hidden = open;
      });
    });
  }

  function initGalleries() {
    document.querySelectorAll('[data-noir-gallery]').forEach(function (gallery) {
      if (!once(gallery, 'Gallery')) return;
      var main = gallery.querySelector('.noir-gallery__main');
      var thumbs = gallery.querySelectorAll('.noir-gallery__thumb');
      thumbs.forEach(function (thumb) {
        thumb.addEventListener('click', function () {
          main.replaceChildren.apply(main, Array.prototype.map.call(thumb.childNodes, function (n) { return n.cloneNode(true); }));
          thumbs.forEach(function (t) { t.removeAttribute('aria-current'); });
          thumb.setAttribute('aria-current', 'true');
        });
      });
    });
  }

  function initProductForms() {
    document.querySelectorAll('[data-noir-product]').forEach(function (form) {
      if (!once(form, 'Product')) return;
      var section = form.closest('.noir-product') || document;
      var moneyFormat = readJSON(section, '[data-noir-money]');
      var variants = readJSON(section, '[data-noir-variants]') || [];
      var idInput = form.querySelector('input[name="id"]');
      var qtyInput = form.querySelector('input[name="quantity"]');
      var submit = form.querySelector('[type="submit"]');
      var priceNow = section.querySelector('[data-price-now]');
      var priceWas = section.querySelector('[data-price-was]');
      var priceSave = section.querySelector('[data-price-save]');
      var stickyPrice = section.querySelector('[data-sticky-price]');
      var labels = { add: submit.getAttribute('data-label-add'), soldOut: submit.getAttribute('data-label-sold-out') };

      form.querySelectorAll('[data-qty]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) + Number(btn.getAttribute('data-qty')));
        });
      });

      function currentVariant() {
        var selected = Array.prototype.map.call(form.querySelectorAll('[data-option-index]'), function (group) {
          var checked = group.querySelector('input:checked');
          return checked ? checked.value : null;
        });
        return variants.find(function (v) {
          return v.options.every(function (opt, i) { return selected[i] == null || selected[i] === opt; });
        });
      }

      function render(variant) {
        if (!variant) {
          submit.disabled = true;
          submit.textContent = labels.soldOut;
          return;
        }
        idInput.value = variant.id;
        submit.disabled = !variant.available;
        submit.textContent = variant.available ? labels.add : labels.soldOut;
        var price = formatMoney(variant.price, moneyFormat);
        if (priceNow) priceNow.textContent = price;
        if (stickyPrice) stickyPrice.textContent = price;
        var onSale = variant.compare_at_price && variant.compare_at_price > variant.price;
        if (priceWas) { priceWas.hidden = !onSale; priceWas.textContent = onSale ? formatMoney(variant.compare_at_price, moneyFormat) : ''; }
        if (priceSave) {
          priceSave.hidden = !onSale;
          if (onSale) priceSave.textContent = 'Save ' + Math.round((1 - variant.price / variant.compare_at_price) * 100) + '%';
        }
      }

      form.addEventListener('change', function (e) {
        if (e.target.closest('[data-option-index]')) render(currentVariant());
      });
      if (variants.length) render(currentVariant());

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (isPreview()) { toast('Added to cart (preview, no store connected)'); return; }
        submit.disabled = true;
        var root = window.Shopify && window.Shopify.routes ? window.Shopify.routes.root : '/';
        fetch(root + 'cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ items: [{ id: Number(idInput.value), quantity: Number(qtyInput.value) || 1 }] })
        })
          .then(function (res) { if (!res.ok) throw new Error('add failed'); return res.json(); })
          .then(function () {
            var redirect = form.getAttribute('data-after-add');
            if (redirect) { window.location.href = redirect; return; }
            toast('Added to cart');
            document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', { bubbles: true }));
          })
          .catch(function () { HTMLFormElement.prototype.submit.call(form); })
          .finally(function () { submit.disabled = false; });
      });

      // Sticky add-to-cart: show once this buy box scrolls above the viewport
      var sticky = section.querySelector('.noir-sticky');
      var buyBox = section.querySelector('.noir-buy');
      if (sticky && buyBox && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          var entry = entries[0];
          sticky.classList.toggle('is-visible', !entry.isIntersecting && entry.boundingClientRect.top < 0);
        }).observe(buyBox);
        var stickyBtn = sticky.querySelector('[data-sticky-buy]');
        if (stickyBtn) stickyBtn.addEventListener('click', function () {
          buyBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          if (!submit.disabled) form.requestSubmit ? form.requestSubmit(submit) : submit.click();
        });
      }
    });
  }

  var revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('is-in'); revealObserver.unobserve(entry.target); }
        });
      }, { rootMargin: '0px 0px -10% 0px' })
    : null;

  function initReveal() {
    document.querySelectorAll('.noir [data-reveal]').forEach(function (el) {
      if (!once(el, 'Reveal')) return;
      // The theme editor should show content immediately
      if (!revealObserver || window.Shopify && window.Shopify.designMode) el.classList.add('is-in');
      else revealObserver.observe(el);
    });
  }

  function init() {
    initCountdowns();
    initFaq();
    initGalleries();
    initProductForms();
    initReveal();
  }

  window.NoirLanding = { init: init, formatMoney: formatMoney };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  document.addEventListener('shopify:section:load', init);
})();
