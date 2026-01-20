document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-page]").forEach(el => {
    el.style.cursor = "pointer";
    el.addEventListener("click", () => {
      const page = el.dataset.page;
      if (page) {
        window.location.href = page;
      }
    });
  });

});

function createNavbar(targetId) {

  const target = document.querySelector(targetId);
  if (!target) return;   
  const navEl = document.createElement("nav");

  const homeNavItem = document.createElement("a");
  homeNavItem.href = "japan.html"; 
  homeNavItem.appendChild(document.createTextNode("Japanese Cuisine"));

  // create nav item for curry rice
  const curryriceNavItem = document.createElement("a");
  curryriceNavItem.href = "curryrice.html";
  curryriceNavItem.appendChild(document.createTextNode("Curry Rice"));

  // create nav item for udon
  const udonNavItem = document.createElement("a");
  udonNavItem.href = "udon.html";
  udonNavItem.appendChild(document.createTextNode("Udon"));

  // create nav item for miso soup
  const misosoupNavItem = document.createElement("a");
  misosoupNavItem.href = "misosoup.html";
  misosoupNavItem.appendChild(document.createTextNode("Miso Soup"));

  // create nav item for takoyaki
  const takoyakiNavItem = document.createElement("a");
  takoyakiNavItem.href = "takoyaki.html";
  takoyakiNavItem.appendChild(document.createTextNode("Takoyaki"));

  // create nav item for okonomiyaki
  const okonomiyakiNavItem = document.createElement("a");
  okonomiyakiNavItem.href = "okonomiyaki.html";
  okonomiyakiNavItem.appendChild(document.createTextNode("Okonomiyaki"));

  // ===================== APPEND ALL NAV ITEMS =====================
  navEl.appendChild(homeNavItem);
  navEl.appendChild(curryriceNavItem);
  navEl.appendChild(udonNavItem);
  navEl.appendChild(misosoupNavItem);
  navEl.appendChild(takoyakiNavItem);
  navEl.appendChild(okonomiyakiNavItem);

  // insert navbar into target container
  document.querySelector(targetId).appendChild(navEl);
}
createNavbar("#japan-food-nav");
