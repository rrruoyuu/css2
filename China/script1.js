// nav-bar
function createNavbar(targetId) {
  const navEl = document.createElement("nav");

  // If current page is inside a folder (China/, Korea/, Japan/, Singapore/),
  // then we need to go up one level to reach index.html and other folders.
  const path = window.location.pathname; // e.g. /CSS2/China/china.html
  const inSubfolder =
    path.includes("/China/") ||
    path.includes("/Korea/") ||
    path.includes("/Japan/") ||
    path.includes("/Singapore/");

  const base = inSubfolder ? "../" : "./"; // "../" from country pages, "./" from home

  /* HOME */
  const homeNavItem = document.createElement("a");
  homeNavItem.href = `${base}index.html`;
  homeNavItem.textContent = "Home";

  /* ===== KOREA ===== */
  const kDropdown = document.createElement("div");
  kDropdown.className = "dropdown";

  const kToggle = document.createElement("a");
  kToggle.className = "dropdown-toggle";
  kToggle.href = `${base}Korea/korea.html`;
  kToggle.innerHTML = `Korea <span class="arrow">▼</span>`;

  const kMenu = document.createElement("div");
  kMenu.className = "dropdown-content";

  const kFoods = [
    { name: "Bibimbap", link: "bibim.html" },
    { name: "Gimbap", link: "gimbap.html" },
    { name: "Kimchi Jeon", link: "jeon.html" },
    { name: "Jjajangmyeon", link: "jjajang.html" },
    { name: "Tteokbokki", link: "tteok.html" }
  ];

  kFoods.forEach(food => {
    const a = document.createElement("a");
    a.href = `${base}Korea/${food.link}`;
    a.textContent = food.name;
    kMenu.appendChild(a);
  });

  kDropdown.appendChild(kToggle);
  kDropdown.appendChild(kMenu);

  /* ===== JAPAN ===== */
  const jpDropdown = document.createElement("div");
  jpDropdown.className = "dropdown";

  const jpToggle = document.createElement("a");
  jpToggle.className = "dropdown-toggle";
  jpToggle.href = `${base}Japan/japan.html`;
  jpToggle.innerHTML = `Japan <span class="arrow">▼</span>`;

  const jpMenu = document.createElement("div");
  jpMenu.className = "dropdown-content";

  const jpFoods = [
    { name: "Curry Rice", link: "curryrice.html" },
    { name: "Miso Soup", link: "misosoup.html" },
    { name: "Okonomiyaki", link: "okonomiyaki.html" },
    { name: "Takoyaki", link: "takoyaki.html" },
    { name: "Udon", link: "udon.html" }
  ];

  jpFoods.forEach(food => {
    const a = document.createElement("a");
    a.href = `${base}Japan/${food.link}`;
    a.textContent = food.name;
    jpMenu.appendChild(a);
  });

  jpDropdown.appendChild(jpToggle);
  jpDropdown.appendChild(jpMenu);

  /* ===== SINGAPORE ===== */
  const sgDropdown = document.createElement("div");
  sgDropdown.className = "dropdown";

  const sgToggle = document.createElement("a");
  sgToggle.className = "dropdown-toggle";
  sgToggle.href = `${base}Singapore/singapore.html`;
  sgToggle.innerHTML = `Singapore <span class="arrow">▼</span>`;

  const sgMenu = document.createElement("div");
  sgMenu.className = "dropdown-content";

  const sgFoods = [
    { name: "Chicken Rice", link: "chicken-rice.html" },
    { name: "Laksa", link: "laksa.html" },
    { name: "Chilli Crab", link: "chilli-crab.html" },
    { name: "Nasi Lemak", link: "nasi-lemak.html" },
    { name: "Roti Prata", link: "roti-prata.html" }
  ];

  sgFoods.forEach(food => {
    const a = document.createElement("a");
    a.href = `${base}Singapore/${food.link}`;
    a.textContent = food.name;
    sgMenu.appendChild(a);
  });

  sgDropdown.appendChild(sgToggle);
  sgDropdown.appendChild(sgMenu);

  /* ===== CHINA ===== */
  const cDropdown = document.createElement("div");
  cDropdown.className = "dropdown";

  const cToggle = document.createElement("a");
  cToggle.className = "dropdown-toggle";
  cToggle.href = `${base}China/china.html`;
  cToggle.innerHTML = `China <span class="arrow">▼</span>`;

  const cMenu = document.createElement("div");
  cMenu.className = "dropdown-content";

  const cFoods = [
    { name: "Tea", link: "atea.html" },
    { name: "Xiao Long Bao", link: "axiaolongbao.html" },
    { name: "Hotpot", link: "hotpot.html" },
    { name: "Mala", link: "mala.html" },
    { name: "Peking Duck", link: "pekingduck.html" }
  ];

  cFoods.forEach(food => {
    const a = document.createElement("a");
    a.href = `${base}China/${food.link}`;
    a.textContent = food.name;
    cMenu.appendChild(a);
  });

  cDropdown.appendChild(cToggle);
  cDropdown.appendChild(cMenu);

  /* ===== APPEND ALL ===== */
  navEl.appendChild(homeNavItem);
  navEl.appendChild(kDropdown);
  navEl.appendChild(jpDropdown);
  navEl.appendChild(sgDropdown);
  navEl.appendChild(cDropdown);

  document.querySelector(targetId).appendChild(navEl);

  homeNavItem.addEventListener("click", (e) => {
    const current = window.location.pathname;
    if (current.endsWith("/index.html") || current.endsWith("/")) {
      e.preventDefault(); // stays on home, no error
    }
  });
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

