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
