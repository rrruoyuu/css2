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
