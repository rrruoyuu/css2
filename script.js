//nav-bar
function createNavbar(targetId) {
  const navEl = document.createElement("nav");

  /* HOME */
  const homeNavItem = document.createElement("a");
  homeNavItem.href = "../index.html";
  homeNavItem.textContent = "Home";

  /* ===== KOREA ===== */
  const kDropdown = document.createElement("div");
  kDropdown.className = "dropdown";

  const kToggle = document.createElement("a");
  kToggle.className = "dropdown-toggle";
  kToggle.href = "../Korea/korea.html";
  kToggle.innerHTML = `Korea <span class="arrow">▼</span>`;

  const kMenu = document.createElement("div");
  kMenu.className = "dropdown-content";

  const kFoods = [
    { name: "Bibim", link: "bibim.html" },
    { name: "Gimbap", link: "gimbap.html" },
    { name: "Jeon", link: "jeon.html" },
    { name: "Jjajang", link: "jjajang.html" },
    { name: "Tteok", link: "tteok.html" }
  ];

  kFoods.forEach(food => {
    const a = document.createElement("a");
    a.href = `../Korea/${food.link}`;
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
  jpToggle.href = "../Japan/japan.html";
  jpToggle.innerHTML = `Japanese <span class="arrow">▼</span>`;

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
    a.href = `../Japan/${food.link}`;
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
  sgToggle.href = "../Singapore/singapore.html";
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
    a.href = `../Singapore/${food.link}`;
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
  cToggle.href = "../China/china.html";
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
    a.href = `../China/${food.link}`;
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
}

createNavbar("#nav-container");


// map 
// Only run pins code if the map exists on this page
const pinsLayer = document.getElementById("pinsLayer");
const tip = document.getElementById("tip");

if (pinsLayer && tip) {
  const pins = [
    { name: "China",       flag: "🇨🇳", color: "#e53935", x: 52, y: 38, url: "/China/china.html" },
    { name: "South Korea", flag: "🇰🇷", color: "#1e88e5", x: 82, y: 27, url: "/Korea/korea.html"},
    { name: "Japan",       flag: "🇯🇵", color: "#43a047", x: 93, y: 23, url: "/Japan/japan.html" },
    { name: "Singapore",   flag: "🇸🇬", color: "#8e24aa", x: 56, y: 86, url: "/Singapore/singapore.html" },
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

//poll
const options=document.querySelectorAll(".option");

let votes={};
let totalVotes=0;
let hasVoted=false;

options.forEach(option=>{
  const item=option.dataset.item;
  votes[item]=0;
});

document.querySelectorAll(".voteBtn").forEach(button => {
  button.addEventListener("click", () => {

    if (hasVoted) {
      alert("You already voted!");
      return;
    }

    const option = button.closest(".option");
    const item = option.dataset.item;

    votes[item]++;
    totalVotes++;
    hasVoted = true;

    updateResults();
  });
});

function updateResults() {
  options.forEach(option => {
    const item = option.dataset.item;
    const percent = (votes[item] / totalVotes) * 100;

    option.querySelector(".fill").style.width = percent + "%";
    option.querySelector(".percent").textContent =
      percent.toFixed(0) + "%";
  });
}