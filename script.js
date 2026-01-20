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

// map 
// Only run pins code if the map exists on this page
const pinsLayer = document.getElementById("pinsLayer");
const tip = document.getElementById("tip");

if (pinsLayer && tip) {
  const pins = [
    { name: "China",       flag: "🇨🇳", color: "#e53935", x: 52, y: 34, url: "/China/china.html" },
    { name: "South Korea", flag: "🇰🇷", color: "#1e88e5", x: 78, y: 27, url: "/Korea/korea.html"},
    { name: "Japan",       flag: "🇯🇵", color: "#43a047", x: 91, y: 23, url: "/Japan/japan.html" },
    { name: "Singapore",   flag: "🇸🇬", color: "#8e24aa", x: 58, y: 86, url: "/Singapore/singapore.html" },
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
      alert("You already vote!");
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