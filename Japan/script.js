document.querySelectorAll(".food-card").forEach((card) => {
  card.addEventListener("click", () => {
    const pageToOpen = card.dataset.page; // ✅ THIS is where the link comes from

    if (!pageToOpen) {
      alert("No page link found. Add data-page='...' to this food-card.");
      return;
    }

    window.location.href = pageToOpen; // ✅ goes to that food page
  });
});