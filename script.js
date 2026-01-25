// nav-bar
function createNavbar(targetId) {
  const navEl = document.createElement("nav");

  const path = window.location.pathname; 
  const inSubfolder =
    path.includes("/China/") ||
    path.includes("/Korea/") ||
    path.includes("/Japan/") ||
    path.includes("/Singapore/");

  const base = inSubfolder ? "../" : "./"; 

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
      e.preventDefault(); 
    }
  });
}

createNavbar("#nav-container");



// map 
// Only run pins code if the map exists on this page
const pinsLayer = document.getElementById("pinsLayer");
const tip = document.getElementById("tip");

if (pinsLayer && tip) {
  const pins = [
    { name: "China",       flag: "🇨🇳", color: "#e53935", x: 46, y: 32, url: "China/china.html" },
    { name: "South Korea", flag: "🇰🇷", color: "#1e88e5", x: 70, y: 31, url: "Korea/korea.html"},
    { name: "Japan",       flag: "🇯🇵", color: "#43a047", x: 81, y: 30, url: "Japan/japan.html" },
    { name: "Singapore",   flag: "🇸🇬", color: "#8e24aa", x: 46, y: 79, url: "Singapore/singapore.html" },
  ];

  function showTip(text) {
    tip.textContent = text;
    tip.classList.add("show");
    clearTimeout(showTip._t);
    showTip._t = setTimeout(() => tip.classList.remove("show"), 1600);
  }

  function makePin(p) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pin";
    btn.style.left = `${p.x}%`;
    btn.style.top = `${p.y}%`;
    btn.setAttribute("aria-label", `${p.name} pin`);

    btn.innerHTML = `
      <div class="head" style="background:${p.color}">${p.flag}</div>
      <div class="tail"></div>
    `;

    btn.addEventListener("click", () => {
      showTip(`📍 ${p.name}`);
      btn.animate(
        [
          { transform: "translate(-50%, -100%) scale(1)" },
          { transform: "translate(-50%, -100%) scale(1.12)" },
          { transform: "translate(-50%, -100%) scale(1)" }
        ],
        { duration: 280, easing: "ease-out" }
      );
      // Navigate to the page
      window.location.href = p.url;  // <-- this line makes it go to another page
    });

    return btn;
  }

  pins.forEach(p => pinsLayer.appendChild(makePin(p)));
}
