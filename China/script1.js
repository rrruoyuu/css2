// ===================== CHINESE CUISINE NAV BAR =====================
function createNavbar(targetId) {

  const navEl = document.createElement("nav");

  const homeNavItem = document.createElement("a");
  homeNavItem.href = "china.html"; 
  homeNavItem.appendChild(document.createTextNode("Chinese Cuisine"));

  // create nav item for Peking Duck
  const duckNavItem = document.createElement("a");
  duckNavItem.href = "pekingduck.html";
  duckNavItem.appendChild(document.createTextNode("Peking Duck"));

  // create nav item for Mala
  const malaNavItem = document.createElement("a");
  malaNavItem.href = "mala.html";
  malaNavItem.appendChild(document.createTextNode("Mala"));

  // create nav item for HotPot
  const hotpotNavItem = document.createElement("a");
  hotpotNavItem.href = "hotpot.html";
  hotpotNavItem.appendChild(document.createTextNode("HotPot"));

  // create nav item for Tea
  const teaNavItem = document.createElement("a");
  teaNavItem.href = "atea.html";
  teaNavItem.appendChild(document.createTextNode("Tea"));

  // create nav item for XiaoLongBao
  const xlbNavItem = document.createElement("a");
  xlbNavItem.href = "axiaolongbao.html";
  xlbNavItem.appendChild(document.createTextNode("XiaoLongBao"));

  // ===================== APPEND ALL NAV ITEMS =====================
  navEl.appendChild(homeNavItem);
  navEl.appendChild(duckNavItem);
  navEl.appendChild(malaNavItem);
  navEl.appendChild(hotpotNavItem);
  navEl.appendChild(teaNavItem);
  navEl.appendChild(xlbNavItem);

  // insert navbar into target container
  document.querySelector(targetId).appendChild(navEl);
}

// call function
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