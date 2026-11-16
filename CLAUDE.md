# CLAUDE.md — 橢圓小百科

改東西或加新頁之前，先把這份看完。

## 專案目的

這是一個介紹數學「橢圓」的小網站，一頁講一個主題，例如定義、離心率、行星軌道。
網站用純 HTML、CSS、JavaScript 寫成，放在 GitHub Pages 上，不使用任何框架。

## 檔案結構

所有檔案都放在 repo 最外層，不分資料夾：

```
index.html           首頁（卡片自動產生，不要手動改）
style.css            全站樣式（只有這一個 CSS）
pages.js             頁面清單（新增頁面要改這裡）
main.js              產生首頁卡片和上一篇／下一篇
page-template.html   新頁面範本
definition.html      內容頁（基礎）
eccentricity.html    內容頁（性質）
orbits.html          內容頁（應用）
```

頁面屬於哪個分類，由 `pages.js` 裡的 `cat` 決定：`basics`（基礎）、`properties`（性質）、`applications`（應用）。

## 新增一頁的步驟

1. 複製 `page-template.html`，改成新的檔名。
2. 把範本裡所有 `{{ }}` 換成實際內容。
3. 在 `pages.js` 的 `PAGES` 加一筆：
   ```js
   {
     cat: "properties",
     title: "頁面標題",
     file: "檔名.html",
     summary: "一句話介紹"
   }
   ```
4. 不用改 `index.html`，首頁卡片和上一篇／下一篇會自動出現。

## 檔名規則

- 用英文小寫，單字之間用 `-`，例如 `focus-property.html`。
- 不要用中文、空格或底線。

## 頁面內容格式

每頁照這個順序寫，沒有的可以省略：

1. 重點（`<section class="summary">`）：2～4 點
2. 定義（`<div class="box def">`）
3. 公式（`<div class="box thm">`）
4. 例題（`<div class="box ex">`），要附解答

每個 box 的第一行寫 `<p class="box-title">類別：名稱</p>`。

## 數學符號

- 公式用 MathJax：行內 `\( \)`，獨立一行 `\[ \]`。
- 全站統一符號：長半軸 `a`、短半軸 `b`、`c² = a² − b²`、離心率 `e = c/a`，焦點在 x 軸上。

## 風格

- 繁體中文，句子簡短，像在寫筆記。
- 白底、簡單的講義風格，顏色只用 `style.css` 裡的變數，不要在 HTML 裡寫 style。
- 每個分類有自己的顏色（基礎藍、性質紫、應用橘）。

## AI 修改時要注意

- 只改需要改的檔案：新增一頁通常只會動新的 HTML 和 `pages.js`。
- 不要加新的 CSS 檔或其他套件，也不要建立資料夾。
- 連結都用相對路徑。
- 數學內容要正確，不確定就標「待確認」。
- 做完確認：首頁有出現新卡片、公式顯示正常、上一篇／下一篇正確。
