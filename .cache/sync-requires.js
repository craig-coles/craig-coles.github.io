// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---src-pages-index-js": preferDefault(require("/Users/craigcoles/projects/craig-coles.github.io/src/pages/index.js")),
  "page-component---src-pages-another-cool-page-index-js": preferDefault(require("/Users/craigcoles/projects/craig-coles.github.io/src/pages/another-cool-page/index.js"))
}

exports.json = {
  "index.json": require("/Users/craigcoles/projects/craig-coles.github.io/.cache/json/index.json"),
  "another-cool-page.json": require("/Users/craigcoles/projects/craig-coles.github.io/.cache/json/another-cool-page.json")
}

exports.layouts = {

}