//nav-bar
function createNavbar(targetId) {
  // create navbar element
  const navEl = document.createElement("nav");

  // create nav item for home
  const homeNavItem = document.createElement("a");
  homeNavItem.href = "../index.html";
  const homeNavItemText = document.createTextNode("Home");
  homeNavItem.appendChild(homeNavItemText);

  // create nav item for korea
  const koreaNavItem = document.createElement("a");
  koreaNavItem.href = "../Korea/korea.html";
  const koreaNavItemText = document.createTextNode("Korean");
  koreaNavItem.appendChild(koreaNavItemText);

  // create nav item for japan
  const japanNavItem = document.createElement("a");
  japanNavItem.href = "../Japan/japan.html";
  const japanNavItemText = document.createTextNode("Japanese");
  japanNavItem.appendChild(japanNavItemText);

   // create nav item for singapore
  const singaporeNavItem= document.createElement("a");
  singaporeNavItem.href = "../Singapore/singapore.html";
  const singaporeNavItemText = document.createTextNode("Singapore");
  singaporeNavItem.appendChild(singaporeNavItemText);

   // create nav item for china
  const chinaNavItem= document.createElement("a");
  chinaNavItem.href = "../China/china.html";
  const chinaNavItemText = document.createTextNode("Chinese");
  chinaNavItem.appendChild(chinaNavItemText);

  navEl.appendChild(homeNavItem);
  navEl.appendChild(koreaNavItem);
  navEl.appendChild(japanNavItem);
  navEl.appendChild(singaporeNavItem)
  navEl.appendChild(chinaNavItem)
  document.querySelector(targetId).appendChild(navEl);
}

createNavbar("#nav-container");

function toggleDesc(button) {
    const desc = button.closest(".desc");
    const full = desc.querySelector(".desc-full");

    if (full.style.display === "block") {
        full.style.display = "none";
        button.textContent = "View more";
    } else {
        full.style.display = "block";
        button.textContent = "View less";
    }
}