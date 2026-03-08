const container = document.getElementById("links");
const searchInput = document.getElementById("search");

function loadLinks() {
  LINKS.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";

    const card = document.createElement("div");
    card.className = "card";

    const icon = document.createElement("span");
    icon.textContent = link.icon;
    icon.className = "card-icon";
    icon.style.color = link.color;

    card.appendChild(icon);

    const name = document.createElement("span");
    name.textContent = link.name;

    card.appendChild(name);

    a.appendChild(card);
    container.appendChild(a);
  });
}

loadLinks();

const localContainer = document.getElementById("local-links");

function loadLocalLinks() {
  LOCAL_PORTS.forEach((service) => {
    const a = document.createElement("a");
    a.href = `http://localhost:${service.port}`;
    a.target = "_blank";

    const card = document.createElement("div");
    card.className = "card local-card";
    card.dataset.port = service.port;

    const icon = document.createElement("span");
    icon.textContent = service.icon;
    icon.className = "card-icon";
    icon.style.color = service.color;

    card.appendChild(icon);

    const name = document.createElement("span");
    name.textContent = service.name;

    card.appendChild(name);

    a.appendChild(card);
    localContainer.appendChild(a);

    checkPort(service, card);
  });
}

function checkPort(service, card) {
  fetch(`http://localhost:${service.port}`, { mode: "no-cors" })
    .then(() => {
      card.classList.add("active");
    })
    .catch(() => {
      card.classList.add("inactive");
    });
}

loadLocalLinks();

function handleSearch(query) {
  const parts = query.split(" ");

  let prefix = parts[0];
  let searchQuery = parts.slice(1).join(" ");

  if (SEARCH_ENGINES[prefix]) {
    const url = SEARCH_ENGINES[prefix] + encodeURIComponent(searchQuery);
    window.open(url, "_blank");
  } else {
    const url = SEARCH_ENGINES[DEFAULT_ENGINE] + encodeURIComponent(query);
    window.open(url, "_blank");
  }
}

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.trim();
    if (!query) return;

    handleSearch(query);

    searchInput.value = "";
  }
});

// autofocus search on page load
window.addEventListener("load", () => {
  searchInput.focus();
});

window.onload = () => search.focus();

// Ctrl + K or / to focus search
document.addEventListener("keydown", (e) => {
  const active = document.activeElement === searchInput;

  // Ctrl + K
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }

  // "/" like many web apps
  if (e.key === "/" && !active) {
    e.preventDefault();
    searchInput.focus();
  }
});

const hintItems = document.querySelectorAll(".hint-block ul li");

for (let i = 1; i < hintItems.length; i += 2) {
  hintItems[i].style.backgroundColor = "var(--ctp-mocha-surface0)";
  console.log(hintItems[i]);
}
