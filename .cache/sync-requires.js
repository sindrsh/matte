const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/sindre/web/matte/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/sindre/web/matte/src/pages/404.js"))),
  "component---src-pages-bok-js": hot(preferDefault(require("/home/sindre/web/matte/src/pages/bok.js"))),
  "component---src-pages-brok-js": hot(preferDefault(require("/home/sindre/web/matte/src/pages/brok.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/sindre/web/matte/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/sindre/web/matte/src/pages/page-2.js"))),
  "component---src-pages-pdf-gen-js": hot(preferDefault(require("/home/sindre/web/matte/src/pages/pdf_gen.js"))),
  "component---src-pages-pdf-out-js": hot(preferDefault(require("/home/sindre/web/matte/src/pages/pdf_out.js"))),
  "component---src-pages-rekning-js": hot(preferDefault(require("/home/sindre/web/matte/src/pages/rekning.js"))),
  "component---src-pages-tital-js": hot(preferDefault(require("/home/sindre/web/matte/src/pages/tital.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/sindre/web/matte/src/pages/using-typescript.tsx")))
}

