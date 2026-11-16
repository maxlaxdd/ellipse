// 頁面清單：新增頁面時在這裡加一筆
// 順序 = 閱讀順序（上一篇／下一篇照這個順序）

const CATEGORIES = [
  { id: "basics", name: "基礎" },
  { id: "properties", name: "性質" },
  { id: "applications", name: "應用" }
];

const PAGES = [
  {
    cat: "basics",
    title: "橢圓的定義與標準式",
    file: "definition.html",
    summary: "到兩個焦點距離和固定的點，以及標準式。"
  },
  {
    cat: "properties",
    title: "離心率",
    file: "eccentricity.html",
    summary: "用一個數字表示橢圓有多扁。"
  },
  {
    cat: "applications",
    title: "行星軌道",
    file: "orbits.html",
    summary: "行星繞太陽的軌道是橢圓，太陽在焦點上。"
  }
];
