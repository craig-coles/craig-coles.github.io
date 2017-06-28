// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---src-pages-index-js": require("gatsby-module-loader?name=page-component---src-pages-index-js!/Users/craigcoles/projects/craig-coles.github.io/src/pages/index.js"),
  "page-component---src-pages-another-cool-page-index-js": require("gatsby-module-loader?name=page-component---src-pages-another-cool-page-index-js!/Users/craigcoles/projects/craig-coles.github.io/src/pages/another-cool-page/index.js")
}

exports.json = {
  "index.json": require("gatsby-module-loader?name=path---index!/Users/craigcoles/projects/craig-coles.github.io/.cache/json/index.json"),
  "another-cool-page.json": require("gatsby-module-loader?name=path---another-cool-page!/Users/craigcoles/projects/craig-coles.github.io/.cache/json/another-cool-page.json")
}

exports.layouts = {

}