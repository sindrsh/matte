
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/sindre/web/matte/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/sindre/web/matte/src/pages/404.js")),
  "component---src-pages-bok-js": preferDefault(require("/home/sindre/web/matte/src/pages/bok.js")),
  "component---src-pages-brok-js": preferDefault(require("/home/sindre/web/matte/src/pages/brok.js")),
  "component---src-pages-index-js": preferDefault(require("/home/sindre/web/matte/src/pages/index.js")),
  "component---src-pages-pdf-gen-js": preferDefault(require("/home/sindre/web/matte/src/pages/pdf_gen.js")),
  "component---src-pages-pdf-out-js": preferDefault(require("/home/sindre/web/matte/src/pages/pdf_out.js")),
  "component---src-pages-rekning-js": preferDefault(require("/home/sindre/web/matte/src/pages/rekning.js")),
  "component---src-pages-tital-js": preferDefault(require("/home/sindre/web/matte/src/pages/tital.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/sindre/web/matte/src/pages/using-typescript.tsx"))
}

