const chapters = [
  { tome: "Tome I - Gothic Road Noir", id: 1, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_01.md" },
  { tome: "Tome I - Gothic Road Noir", id: 2, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_02.md" },
  { tome: "Tome I - Gothic Road Noir", id: 3, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_03.md" },
  { tome: "Tome I - Gothic Road Noir", id: 4, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_04.md" },
  { tome: "Tome I - Gothic Road Noir", id: 5, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_05.md" },
  { tome: "Tome I - Gothic Road Noir", id: 6, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_06.md" },
  { tome: "Tome I - Gothic Road Noir", id: 7, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_07.md" },
  { tome: "Tome I - Gothic Road Noir", id: 8, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_08.md" },
  { tome: "Tome I - Gothic Road Noir", id: 9, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_09.md" },
  { tome: "Tome I - Gothic Road Noir", id: 10, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_10.md" },
  { tome: "Tome I - Gothic Road Noir", id: 11, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_11.md" },
  { tome: "Tome I - Gothic Road Noir", id: 12, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_12.md" },
  { tome: "Tome I - Gothic Road Noir", id: 13, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_13.md" },
  { tome: "Tome I - Gothic Road Noir", id: 14, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_14.md" },
  { tome: "Tome I - Gothic Road Noir", id: 15, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_15.md" },
  { tome: "Tome I - Gothic Road Noir", id: 16, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_16.md" },
  { tome: "Tome I - Gothic Road Noir", id: 17, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_17.md" },
  { tome: "Tome I - Gothic Road Noir", id: 18, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_18.md" },
  { tome: "Tome I - Gothic Road Noir", id: 19, file: "../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR/CHAPTER_19.md" },
  { tome: "Tome II", id: 1, file: "../06_CHAPTERS/TOME_02/CHAPTER_01.md" },
  { tome: "Tome II", id: 2, file: "../06_CHAPTERS/TOME_02/CHAPTER_02.md" },
  { tome: "Tome II", id: 3, file: "../06_CHAPTERS/TOME_02/CHAPTER_03.md" },
  { tome: "Tome II", id: 4, file: "../06_CHAPTERS/TOME_02/CHAPTER_04.md" },
  { tome: "Tome II", id: 5, file: "../06_CHAPTERS/TOME_02/CHAPTER_05.md" },
  { tome: "Tome II", id: 6, file: "../06_CHAPTERS/TOME_02/CHAPTER_06.md" },
  { tome: "Tome II", id: 7, file: "../06_CHAPTERS/TOME_02/CHAPTER_07.md" },
  { tome: "Tome II", id: 8, file: "../06_CHAPTERS/TOME_02/CHAPTER_08.md" },
  { tome: "Tome II", id: 9, file: "../06_CHAPTERS/TOME_02/CHAPTER_09.md" },
  { tome: "Tome II", id: 10, file: "../06_CHAPTERS/TOME_02/CHAPTER_10.md" },
  { tome: "Tome II", id: 11, file: "../06_CHAPTERS/TOME_02/CHAPTER_11.md" },
  { tome: "Tome II", id: 12, file: "../06_CHAPTERS/TOME_02/CHAPTER_12.md" },
  { tome: "Tome II", id: 13, file: "../06_CHAPTERS/TOME_02/CHAPTER_13.md" },
  { tome: "Tome III", id: 1, file: "../06_CHAPTERS/TOME_03/CHAPTER_01.md" },
  { tome: "Tome III", id: 2, file: "../06_CHAPTERS/TOME_03/CHAPTER_02.md" },
  { tome: "Tome III", id: 3, file: "../06_CHAPTERS/TOME_03/CHAPTER_03.md" },
  { tome: "Tome III", id: 4, file: "../06_CHAPTERS/TOME_03/CHAPTER_04.md" },
  { tome: "Tome III", id: 5, file: "../06_CHAPTERS/TOME_03/CHAPTER_05.md" },
  { tome: "Tome III", id: 6, file: "../06_CHAPTERS/TOME_03/CHAPTER_06.md" },
  { tome: "Tome III", id: 7, file: "../06_CHAPTERS/TOME_03/CHAPTER_07.md" },
  { tome: "Tome III", id: 8, file: "../06_CHAPTERS/TOME_03/CHAPTER_08.md" },
  { tome: "Tome III", id: 9, file: "../06_CHAPTERS/TOME_03/CHAPTER_09.md" },
  { tome: "Tome III", id: 10, file: "../06_CHAPTERS/TOME_03/CHAPTER_10.md" },
  { tome: "Tome III", id: 11, file: "../06_CHAPTERS/TOME_03/CHAPTER_11.md" },
  { tome: "Tome III", id: 12, file: "../06_CHAPTERS/TOME_03/CHAPTER_12.md" },
];

const state = {
  currentIndex: 0,
  view: "prose",
  query: "",
  fontSize: Number(localStorage.getItem("lfdv-font-size")) || 18,
  docs: [],
};

const els = {
  chapterList: document.getElementById("chapterList"),
  chapterTitle: document.getElementById("chapterTitle"),
  chapterStatus: document.getElementById("chapterStatus"),
  chapterContent: document.getElementById("chapterContent"),
  chapterCount: document.getElementById("chapterCount"),
  currentTome: document.getElementById("currentTome"),
  readingProgress: document.getElementById("readingProgress"),
  searchInput: document.getElementById("searchInput"),
  previousChapter: document.getElementById("previousChapter"),
  nextChapter: document.getElementById("nextChapter"),
  increaseFont: document.getElementById("increaseFont"),
  decreaseFont: document.getElementById("decreaseFont"),
  themeToggle: document.getElementById("themeToggle"),
};

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let html = "";
  let listOpen = false;

  const closeList = () => {
    if (listOpen) {
      html += "</ul>";
      listOpen = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      closeList();
      continue;
    }

    if (line.startsWith("- ")) {
      if (!listOpen) {
        html += "<ul>";
        listOpen = true;
      }
      html += `<li>${inlineMarkdown(line.slice(2))}</li>`;
      continue;
    }

    closeList();

    if (line.startsWith("# ")) {
      html += `<h1>${inlineMarkdown(line.slice(2))}</h1>`;
    } else if (line.startsWith("## ")) {
      html += `<h2>${inlineMarkdown(line.slice(3))}</h2>`;
    } else if (line.startsWith("### ")) {
      html += `<h3>${inlineMarkdown(line.slice(4))}</h3>`;
    } else if (line.startsWith("> ")) {
      html += `<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`;
    } else if (line === "---") {
      html += "<hr />";
    } else {
      html += `<p>${inlineMarkdown(line)}</p>`;
    }
  }

  closeList();
  return html;
}

function getTitle(markdown, fallback) {
  const firstTitle = markdown.match(/^#\s+(.+)$/m);
  return firstTitle ? firstTitle[1].trim() : fallback;
}

function getStatus(markdown) {
  const status = markdown.match(/## Status\s+([\s\S]*?)(?:\n##|\n#|$)/);
  return status ? status[1].trim().split("\n")[0] : "Fiche projet";
}

function getSection(markdown, heading) {
  const pattern = new RegExp(`${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\n([\\s\\S]*)`, "m");
  const match = markdown.match(pattern);
  return match ? match[1].trim() : "";
}

function getNotes(markdown) {
  const keep = [];
  const sections = ["## Purpose", "## Conflict", "## Scenes", "## Cliffhanger", "## Continuity Notes"];
  for (const section of sections) {
    const start = markdown.indexOf(section);
    if (start === -1) continue;
    const next = markdown.indexOf("\n## ", start + section.length);
    const draft = markdown.indexOf("\n# DRAFT", start + section.length);
    const ends = [next, draft].filter((value) => value !== -1);
    const end = ends.length ? Math.min(...ends) : markdown.length;
    keep.push(markdown.slice(start, end).trim());
  }
  return keep.join("\n\n");
}

function getReadableMarkdown(doc) {
  if (state.view === "full") return doc.markdown;
  if (state.view === "notes") return getNotes(doc.markdown) || "Aucune note disponible.";

  const prose = getSection(doc.markdown, "# DRAFT V1 - PROSE");
  if (prose) return `# ${doc.title}\n\n${prose}`;

  return doc.markdown;
}

function highlight(html, query) {
  if (!query) return html;
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.replace(new RegExp(`(${safeQuery})`, "gi"), "<mark>$1</mark>");
}

function renderChapterList() {
  const query = state.query.toLowerCase();
  els.chapterList.innerHTML = "";

  state.docs.forEach((doc, index) => {
    const text = `${doc.title} ${doc.status} ${doc.markdown}`.toLowerCase();
    if (query && !text.includes(query)) return;

    const button = document.createElement("button");
    button.className = `chapter-card${index === state.currentIndex ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="chapter-number">${escapeHtml(doc.tome)} - Chapitre ${String(doc.id).padStart(2, "0")}</span>
      <span class="chapter-name">${escapeHtml(doc.title.replace(/^CHAPTER\s+\d+\s+-\s+/i, ""))}</span>
      <span class="chapter-meta">${escapeHtml(doc.status)}</span>
    `;
    button.addEventListener("click", () => {
      state.currentIndex = index;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    els.chapterList.appendChild(button);
  });

  if (!els.chapterList.children.length) {
    els.chapterList.innerHTML = '<p class="empty-state">Aucun chapitre ne correspond.</p>';
  }
}

function render() {
  const doc = state.docs[state.currentIndex];
  if (!doc) return;

  const readable = getReadableMarkdown(doc);
  els.chapterTitle.textContent = doc.title.replace(/^CHAPTER\s+\d+\s+-\s+/i, "");
  els.chapterStatus.textContent = `${doc.tome} / Chapitre ${String(doc.id).padStart(2, "0")} / ${doc.status}`;
  els.chapterCount.textContent = String(state.docs.length);
  els.currentTome.textContent = doc.tome;
  els.readingProgress.textContent = `${Math.round(((state.currentIndex + 1) / state.docs.length) * 100)}%`;
  els.chapterContent.innerHTML = highlight(markdownToHtml(readable), state.query);
  els.previousChapter.disabled = state.currentIndex === 0;
  els.nextChapter.disabled = state.currentIndex === state.docs.length - 1;
  document.documentElement.style.setProperty("--reader-size", `${state.fontSize}px`);
  renderChapterList();
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    render();
  });

  document.querySelectorAll(".switch-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".switch-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.view = button.dataset.view;
      render();
    });
  });

  els.previousChapter.addEventListener("click", () => {
    state.currentIndex = Math.max(0, state.currentIndex - 1);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  els.nextChapter.addEventListener("click", () => {
    state.currentIndex = Math.min(state.docs.length - 1, state.currentIndex + 1);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  els.increaseFont.addEventListener("click", () => {
    state.fontSize = Math.min(24, state.fontSize + 1);
    localStorage.setItem("lfdv-font-size", String(state.fontSize));
    render();
  });

  els.decreaseFont.addEventListener("click", () => {
    state.fontSize = Math.max(15, state.fontSize - 1);
    localStorage.setItem("lfdv-font-size", String(state.fontSize));
    render();
  });

  els.themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("lfdv-theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
  });
}

async function init() {
  if (localStorage.getItem("lfdv-theme") === "dark") {
    document.documentElement.classList.add("dark");
  }

  const loaded = await Promise.all(
    chapters.map(async (chapter) => {
      const response = await fetch(chapter.file);
      if (!response.ok) throw new Error(`Impossible de charger ${chapter.file}`);
      const markdown = await response.text();
      return {
        ...chapter,
        markdown,
        title: getTitle(markdown, `Chapitre ${chapter.id}`),
        status: getStatus(markdown),
      };
    })
  );

  state.docs = loaded;
  bindEvents();
  render();
}

init().catch((error) => {
  els.chapterContent.innerHTML = `<p class="empty-state">${escapeHtml(error.message)}</p>`;
});
