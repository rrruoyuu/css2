// polling_china.js  (use for China pages)
document.addEventListener("DOMContentLoaded", () => {
  const VOTES_KEY = "poll_votes_v1__china"; // ✅ unique for CHINA

  // per-page session lock (clears when tab/website is closed)
  const pageId =
    (location.pathname || "page").replace(/[^\w-]+/g, "_").toLowerCase();
  const LOCK_KEY = `poll_lock_v1__china__${pageId}`;

  const optionEls = document.querySelectorAll(".poll .option");
  const voteBtns = document.querySelectorAll(".poll .voteBtn");

  // If this page has no poll, do nothing
  if (optionEls.length === 0 || voteBtns.length === 0) return;

  // lock persists on refresh + navigation
  let hasVoted = sessionStorage.getItem(LOCK_KEY) === "1";

  // ===== Insert message + total count below poll title =====
  const pollTitle = Array.from(document.querySelectorAll("section h2")).find(
    h2 =>
      h2.textContent.trim().toLowerCase() === "vote for your favourite cuisine!"
  );

  const msg = document.createElement("p");
  msg.style.fontWeight = "bold";
  msg.style.margin = "6px 0";
  msg.style.display = "none";

  const totalText = document.createElement("p");
  totalText.style.fontWeight = "bold";
  totalText.style.margin = "0 0 14px 0";
  totalText.textContent = "Total votes: 0";

   if (pollTitle) {
  pollTitle.insertAdjacentElement("afterend", msg);
}
   document.body.appendChild(totalText);


  function showMessage(text, color = "#d19a2a") {
    msg.textContent = text;
    msg.style.color = color;
    msg.style.display = "block";
  }

  function setButtonsEnabled(enabled) {
    voteBtns.forEach(b => (b.disabled = !enabled));
  }

  function buildDefaultVotes() {
    const obj = {};
    optionEls.forEach(opt => {
      const key = opt.dataset.item;
      if (key) obj[key] = 0;
    });
    return obj;
  }

  function loadVotes() {
    const defaults = buildDefaultVotes();
    try {
      const raw = localStorage.getItem(VOTES_KEY);
      if (!raw) return defaults;

      const saved = JSON.parse(raw);
      if (!saved || typeof saved !== "object") return defaults;

      const merged = {};
      Object.keys(defaults).forEach(k => {
        merged[k] = typeof saved[k] === "number" ? saved[k] : 0;
      });
      return merged;
    } catch {
      return defaults;
    }
  }

  function saveVotes(votes) {
    localStorage.setItem(VOTES_KEY, JSON.stringify(votes));
  }

  function render(votes) {
    const total = Object.values(votes).reduce((a, b) => a + b, 0);

    // show total vote count
    totalText.textContent = "Total votes: " + total;

    optionEls.forEach(opt => {
      const key = opt.dataset.item;
      const count = votes[key] || 0;
      const percent = total === 0 ? 0 : Math.round((count / total) * 100);

      opt.querySelector(".percent").textContent = percent + "%";
      opt.querySelector(".fill").style.width = percent + "%";
    });
  }

  const votes = loadVotes();
  render(votes);

  // already voted on this page
  if (hasVoted) {
    setButtonsEnabled(false);
    voteBtns.forEach(b => b.classList.add("voted"));
    voteBtns.forEach(b => {b.textContent = "Voted";});
    showMessage("Thank you for your vote!");
  }

  voteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (hasVoted) {
        alert("Thank you for your vote!");
        return;
      }

      const option = btn.closest(".option");
      if (!option) return;

      const key = option.dataset.item;
      if (!key) return;

      // record vote
      votes[key] = (votes[key] || 0) + 1;
      saveVotes(votes);
      render(votes);

      // lock this page until tab is closed
      hasVoted = true;
      sessionStorage.setItem(LOCK_KEY, "1");

      setButtonsEnabled(false);
      voteBtns.forEach(b => b.classList.add("voted"));
      voteBtns.forEach(b => {b.textContent = "Voted";});
      showMessage("Thank you for your vote!");
    });
  });
});

// Clear local poll: localStorage.removeItem("poll_votes_v1__china");

