// polling1.js
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Unique poll data per page (each page stores its own votes)
  // Example keys:
  // poll_votes_v1__index_html
  // poll_votes_v1__korea_korea_html
  // poll_votes_v1__japan_udon_html
  const pollId = (location.pathname || "page")
    .replace(/[^\w-]+/g, "_")
    .toLowerCase();

  const VOTES_KEY = `poll_votes_v1__${pollId}`; // persistent totals (per page)

  // ✅ per-page session lock (clears when tab/website is closed)
  const LOCK_KEY = `poll_lock_v1__${pollId}`;

  const pollEl = document.querySelector(".poll");
  if (!pollEl) return;

  const optionEls = pollEl.querySelectorAll(".option");
  const voteBtns = pollEl.querySelectorAll(".voteBtn");
  if (optionEls.length === 0 || voteBtns.length === 0) return;

  // lock persists on refresh + navigation (same tab)
  let hasVoted = sessionStorage.getItem(LOCK_KEY) === "1";

  // ===== Insert message + total count below THIS poll title =====
  const sectionEl = pollEl.closest("section") || document;
  const pollTitle = sectionEl.querySelector("h2");

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

  if (hasVoted) {
    setButtonsEnabled(false);
    voteBtns.forEach(b => b.classList.add("voted"));
    voteBtns.forEach(b => {b.textContent = "Voted";});
    showMessage("Thankyou For Your Voting!");
  }

  voteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (hasVoted) {
        alert("Thankyou For Your Voting!");
        return;
      }

      const option = btn.closest(".option");
      if (!option) return;

      const key = option.dataset.item;
      if (!key) return;

      votes[key] = (votes[key] || 0) + 1;
      saveVotes(votes);
      render(votes);

      hasVoted = true;
      sessionStorage.setItem(LOCK_KEY, "1");

      setButtonsEnabled(false);
      voteBtns.forEach(b => b.classList.add("voted"));
      voteBtns.forEach(b => {b.textContent = "Voted";});
      showMessage("Thankyou For Your Voting!");
    });
  });
});

// Clear all: localStorage.clear();
// vote again immediately: sessionStorage.clear();

