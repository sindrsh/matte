
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/sindre/web/matte/src/pages/404.js")),
  "component---src-pages-bok-js": preferDefault(require("/home/sindre/web/matte/src/pages/bok.js")),
  "component---src-pages-brok-js": preferDefault(require("/home/sindre/web/matte/src/pages/brok.js")),
  "component---src-pages-c-1-js": preferDefault(require("/home/sindre/web/matte/src/pages/c1.js")),
  "component---src-pages-c-2-js": preferDefault(require("/home/sindre/web/matte/src/pages/c2.js")),
  "component---src-pages-index-js": preferDefault(require("/home/sindre/web/matte/src/pages/index.js")),
  "component---src-pages-pdf-gen-js": preferDefault(require("/home/sindre/web/matte/src/pages/pdf_gen.js")),
  "component---src-pages-pdf-out-js": preferDefault(require("/home/sindre/web/matte/src/pages/pdf_out.js")),
  "component---src-pages-rekning-js": preferDefault(require("/home/sindre/web/matte/src/pages/rekning.js")),
  "component---src-pages-t-1-js": preferDefault(require("/home/sindre/web/matte/src/pages/t1.js")),
  "component---src-pages-t-2-js": preferDefault(require("/home/sindre/web/matte/src/pages/t2.js")),
  "component---src-pages-tital-js": preferDefault(require("/home/sindre/web/matte/src/pages/tital.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/sindre/web/matte/src/pages/using-typescript.tsx"))
}

