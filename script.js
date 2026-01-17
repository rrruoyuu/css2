let currentIndex = 0;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateSlide() {
  slider.style.transform =
    "translateX(-" + (currentIndex * 800) + "px)";
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSlide();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }
  updateSlide();
}

document.querySelectorAll(".nextBtn").forEach(btn => {
  btn.addEventListener("click", nextSlide);
});

document.querySelectorAll(".prevBtn").forEach(btn => {
  btn.addEventListener("click", prevSlide);
});

//nav-bar
function createNavbar(targetId) {
  // create navbar element
  const navEl = document.createElement("nav");

  // create nav item for home
  const homeNavItem = document.createElement("a");
  homeNavItem.href = "index.html";
  const homeNavItemText = document.createTextNode("Home");
  homeNavItem.appendChild(homeNavItemText);

  // create nav item for about
  const aboutNavItem = document.createElement("a");
  aboutNavItem.href = "about.html";
  const aboutNavItemText = document.createTextNode("smt 1");
  aboutNavItem.appendChild(aboutNavItemText);

  // create nav item for contact
  const contactNavItem = document.createElement("a");
  contactNavItem.href = "contact.html";
  const contactNavItemText = document.createTextNode("smt 2");
  contactNavItem.appendChild(contactNavItemText);

  const NpNavItem= document.createElement("a");
  NpNavItem.href = "np.html";
  const NpNavItemText = document.createTextNode("smt 3");
  NpNavItem.appendChild(NpNavItemText);

  navEl.appendChild(homeNavItem);
  navEl.appendChild(aboutNavItem);
  navEl.appendChild(contactNavItem);
  navEl.appendChild(NpNavItem)
  document.querySelector(targetId).appendChild(navEl);
}

createNavbar("#nav-container");

// map 
// Only run pins code if the map exists on this page
const pinsLayer = document.getElementById("pinsLayer");
const tip = document.getElementById("tip");

if (pinsLayer && tip) {
  const pins = [
    { name: "China",       flag: "🇨🇳", color: "#e53935", x: 52, y: 34 },
    { name: "South Korea", flag: "🇰🇷", color: "#1e88e5", x: 78, y: 27 },
    { name: "Japan",       flag: "🇯🇵", color: "#43a047", x: 91, y: 23 },
    { name: "Singapore",   flag: "🇸🇬", color: "#8e24aa", x: 62, y: 86 },
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
    });

    return btn;
  }

  pins.forEach(p => pinsLayer.appendChild(makePin(p)));
}