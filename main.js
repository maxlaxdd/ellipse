// 首頁：依 pages.js 產生卡片
// 內容頁：產生上一篇／下一篇
// 新增頁面不用改這個檔案

const list = document.getElementById("page-list");
if (list) {
  CATEGORIES.forEach((c) => {
    const items = PAGES.filter((p) => p.cat === c.id);
    if (items.length === 0) return;
    let html = `<section class="group"><h2>${c.name}</h2><div class="cards">`;
    items.forEach((p) => {
      html += `
        <a class="card" href="${p.file}" data-cat="${p.cat}">
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
        </a>`;
    });
    html += `</div></section>`;
    list.innerHTML += html;
  });
}

const pager = document.getElementById("pager");
if (pager) {
  const here = location.pathname.split("/").slice(-3).join("/");
  const i = PAGES.findIndex((p) => p.file === here);
  const prev = PAGES[i - 1];
  const next = PAGES[i + 1];
  pager.innerHTML =
    (prev ? `<a href="../../${prev.file}"><small>← 上一篇</small>${prev.title}</a>` : "<span></span>") +
    (next ? `<a class="next" href="../../${next.file}"><small>下一篇 →</small>${next.title}</a>` : "<span></span>");
}
