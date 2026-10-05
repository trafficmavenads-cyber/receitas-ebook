(() => {
  "use strict";
  const config = window.OFFER_CONFIG || {};
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  if (Number.isInteger(config.guaranteeDays) && config.guaranteeDays > 0) {
    document.querySelectorAll("[data-guarantee]").forEach(el => {
      el.textContent = String(config.guaranteeDays);
    });
  }

  let checkout = null;
  try {
    if (typeof config.checkoutUrl === "string" && config.checkoutUrl.trim()) {
      const url = new URL(config.checkoutUrl.trim());
      if (url.protocol === "https:" && !url.username && !url.password) checkout = url;
    }
  } catch { /* O checkout permanece indisponível quando a URL é inválida. */ }

  if (checkout) {
    const campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "src", "sck", "fbclid", "gclid", "ttclid"];
    const incoming = new URLSearchParams(window.location.search);
    for (const key of campaignKeys) {
      const value = incoming.get(key);
      if (value && !checkout.searchParams.has(key)) checkout.searchParams.set(key, value);
    }
  }

  const dialog = document.getElementById("checkout-unavailable");
  document.querySelectorAll("[data-checkout]").forEach(link => {
    if (checkout) {
      link.href = checkout.toString();
      link.addEventListener("click", () => {
        if (typeof window.fbq === "function") {
          try {
            window.fbq("trackCustom", "CheckoutClick", {
              content_name: "Receitinha do Dia",
              button_text: link.textContent.trim()
            });
          } catch { /* A compra continua mesmo se o rastreamento estiver indisponível. */ }
        }
      });
    } else {
      link.setAttribute("aria-haspopup", "dialog");
      link.addEventListener("click", event => {
        event.preventDefault();
        if (dialog && typeof dialog.showModal === "function") dialog.showModal();
        else window.alert("Compra indisponível no momento. Tente novamente mais tarde.");
      });
    }
  });
  const mobilePurchase = document.querySelector("[data-mobile-purchase]");
  const hero = document.querySelector(".hero");
  const closingCta = document.querySelector(".closing-cta");
  if (mobilePurchase && hero && closingCta && "IntersectionObserver" in window) {
    let heroVisible = true;
    let closingVisible = false;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === closingCta) closingVisible = entry.isIntersecting;
      }
      mobilePurchase.hidden = heroVisible || closingVisible;
    });
    observer.observe(hero);
    observer.observe(closingCta);
  }
})();
