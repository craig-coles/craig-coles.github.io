webpackJsonp(["component---src-layouts-index-js","path---"],{"./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"sourceMaps":true,"presets":[["/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-env/lib/index.js",{"targets":{"node":4,"uglify":true}}],"/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-react/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-flow/lib/index.js",["/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-stage-0/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-remove-graphql-queries/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-transform-runtime/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-transform-object-rest-spread/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-transform-async-to-generator/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-transform-flow-strip-types/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/babel-runtime/helpers/extends.js"),a=o(s),l=n("./node_modules/react/react.js"),r=o(l),i=n("./src/layouts/index.js"),u=o(i),c=n("./.cache/json/layout-index.json"),d=o(c);t.default=function(e){return r.default.createElement(u.default,(0,a.default)({},e,d.default))}},"./src/components/ContentContainer/ContentContainer.module.css":function(e,t){e.exports={container:"ContentContainer-module--container--2FWWJ"}},"./src/components/ContentContainer/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return l.default.createElement("div",{className:i.default.container},e.children)}t.__esModule=!0;var a=n("./node_modules/react/react.js"),l=o(a),r=n("./src/components/ContentContainer/ContentContainer.module.css"),i=o(r);t.default=s},"./src/components/DateTimer/DateTimer.module.css":function(e,t){e.exports={timeUnit:"DateTimer-module--timeUnit--KMSqY"}},"./src/components/DateTimer/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),a=o(s),l=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),r=o(l),i=n("./node_modules/babel-runtime/helpers/inherits.js"),u=o(i),c=n("./node_modules/react/react.js"),d=o(c),m=n("./src/components/DateTimer/DateTimer.module.css"),f=o(m),p=function(e){function t(n){(0,a.default)(this,t);var o=(0,r.default)(this,e.call(this,n));return o.state={hours:"--",minutes:"--",seconds:"--",days:"--",months:"--",years:"--"},o}return(0,u.default)(t,e),t.prototype.getDateTime=function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),o=e.getSeconds(),s=e.getDate(),a=e.getMonth(),l=e.getFullYear();this.setState(function(e){return{hours:""+t,minutes:""+n,seconds:""+o,days:""+s,months:""+a,years:""+l}},this.timeOut())},t.prototype.timeOut=function(){var e=this;setTimeout(function(){e.getDateTime()},1e3)},t.prototype.componentDidMount=function(){this.timeOut()},t.prototype.render=function(){return d.default.createElement("ul",{className:f.default.metaData},d.default.createElement("li",null,d.default.createElement("span",{className:f.default.timeUnit},this.state.days)," :",d.default.createElement("span",{className:f.default.timeUnit},this.state.months)," :",d.default.createElement("span",{className:f.default.timeUnit},this.state.years)),d.default.createElement("li",null,d.default.createElement("span",{className:f.default.timeUnit},this.state.hours)," :",d.default.createElement("span",{className:f.default.timeUnit},this.state.minutes)," :",d.default.createElement("span",{className:f.default.timeUnit},this.state.seconds)))},t}(d.default.Component);t.default=p},"./src/components/Footer/Footer.module.css":function(e,t){e.exports={footer:"Footer-module--footer--3McR-",flexList:"Footer-module--flexList--3sG2C"}},"./src/components/Footer/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),a=o(s),l=n("./src/components/ContentContainer/index.js"),r=o(l),i=n("./src/components/Footer/Footer.module.css"),u=o(i),c=function(){return a.default.createElement("footer",{className:u.default.footer},a.default.createElement(r.default,null,a.default.createElement("ul",{className:u.default.flexList},a.default.createElement("li",null,"ccoles@gmail.com"),a.default.createElement("li",null,"© 2018 Craig Coles"))))};t.default=c},"./src/components/Header/Header.module.css":function(e,t){e.exports={header:"Header-module--header--m6gEM",metaData:"Header-module--metaData--2KJGw"}},"./src/components/Header/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(){return l.default.createElement("header",{className:u.default.header},l.default.createElement(m.default,null,l.default.createElement("span",{className:u.default.metaData},"version 3.0")))}t.__esModule=!0;var a=n("./node_modules/react/react.js"),l=o(a),r=n("./node_modules/gatsby-link/index.js"),i=(o(r),n("./src/components/Header/Header.module.css")),u=o(i),c=n("./src/components/DateTimer/index.js"),d=(o(c),n("./src/components/ContentContainer/index.js")),m=o(d);t.default=s},"./src/components/SiteContainer/SiteContainer.module.css":function(e,t){e.exports={siteContainer:"SiteContainer-module--siteContainer--3Lbqv"}},"./src/components/SiteContainer/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){e.children;return l.default.createElement("section",{className:i.default.siteContainer},e.children)}t.__esModule=!0;var a=n("./node_modules/react/react.js"),l=o(a),r=n("./src/components/SiteContainer/SiteContainer.module.css"),i=o(r);t.default=s},"./src/components/SiteNavigation/SiteNavigation.module.css":function(e,t){e.exports={siteNavigation:"SiteNavigation-module--site-navigation--298GT",navigationLink:"SiteNavigation-module--navigationLink--tuhm_"}},"./src/components/SiteNavigation/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/react/react.js"),a=o(s),l=n("./node_modules/gatsby-link/index.js"),r=o(l),i=n("./src/components/SiteNavigation/SiteNavigation.module.css"),u=o(i),c=function(e){d("transition name"),console.log("close nav triggered");var t=document.querySelector("#nav-trigger");t.checked&&(t.checked=!1)},d=function(e){console.log(e)},m=function(){return a.default.createElement("nav",{className:u.default.siteNavigation},a.default.createElement("ul",null,a.default.createElement("li",{className:u.default.siteNavigationItem},a.default.createElement(r.default,{className:u.default.navigationLink,to:"/",onClick:c},"Home")),a.default.createElement("li",{className:u.default.siteNavigationItem},a.default.createElement(r.default,{className:u.default.navigationLink,to:"/work",onClick:c},"Work")),a.default.createElement("li",{className:u.default.siteNavigationItem},a.default.createElement(r.default,{className:u.default.navigationLink,to:"/about",onClick:c},"About")),a.default.createElement("li",{className:u.default.siteNavigationItem},a.default.createElement(r.default,{className:u.default.navigationLink,to:"/blog",onClick:c},"Blog"))))};t.default=m},"./src/components/Transition/Transition.module.css":function(e,t){e.exports={transitionContainer:"Transition-module--transitionContainer--1duVN",slidein:"Transition-module--slidein--2c5vB",fadeout:"Transition-module--fadeout--1pdZM"}},"./src/components/Transition/TransitionRenderer.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),a=o(s),l=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),r=o(l),i=n("./node_modules/babel-runtime/helpers/inherits.js"),u=o(i),c=n("./node_modules/react/react.js"),d=o(c),m=function(e){function t(n){(0,a.default)(this,t);var o=(0,r.default)(this,e.call(this,n));return o.state={loading:!1},o}return(0,u.default)(t,e),t.prototype.componentWillReceiveProps=function(){var e=this;this.setState(function(e){return{loading:!0}}),setTimeout(function(){e.setState(function(e){return{loading:!1}})},Number(this.props.delay)/2)},t.prototype.shouldComponentUpdate=function(e,t){return!t.loading},t.prototype.render=function(){var e=this.state.loading?null:this.props.children();return d.default.createElement("div",null,e)},t}(d.default.Component);t.default=m},"./src/components/Transition/components/GooBlobs1/GooBlobs1.module.css":function(e,t){e.exports={transitionContainer:"GooBlobs1-module--transitionContainer--2ZbcD",fadeout:"GooBlobs1-module--fadeout--qQzjF"}},"./src/components/Transition/components/GooBlobs1/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return l.default.createElement("svg",null,l.default.createElement("defs",null,l.default.createElement("filter",{id:"goo"},l.default.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"30",result:"blur"}),l.default.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 -16 ",result:"matrix"}),l.default.createElement("feBlend",{in:"SourceGraphic",in2:"matrix"}))))}t.__esModule=!0;var a=n("./node_modules/react/react.js"),l=o(a),r=n("./src/components/Transition/components/GooBlobs1/GooBlobs1.module.css");o(r);t.default=s},"./src/components/Transition/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/babel-runtime/helpers/extends.js"),a=o(s),l=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),r=o(l),i=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),u=o(i),c=n("./node_modules/babel-runtime/helpers/inherits.js"),d=o(c),m=n("./node_modules/react/react.js"),f=o(m),p=n("./src/components/Transition/components/GooBlobs1/index.js"),g=o(p),b=n("./src/components/Transition/TransitionRenderer.js"),h=o(b),_=n("./src/components/Transition/Transition.module.css"),j=o(_),v=function(e){function t(n){(0,r.default)(this,t);var o=(0,u.default)(this,e.call(this,n));return o.state={loading:!1,text:"hey bud",className:""},o}return(0,d.default)(t,e),t.prototype.componentWillReceiveProps=function(){var e=this;this.setState(function(e){return{loading:!0}}),setTimeout(function(){e.setState(function(e){return{loading:!1}}),e.forceUpdate()},3e3),this.forceUpdate()},t.prototype.shouldComponentUpdate=function(e,t){return!1},t.prototype.componentDidMount=function(){},t.prototype.getTransitionElement=function(){return f.default.createElement("div",{className:j.default.transitionContainer+" "+this.state.className},f.default.createElement(g.default,null))},t.prototype.render=function(){var e=this.props.children(this.state),t=this.state.loading?this.getTransitionElement():null;return f.default.createElement("div",null,t,f.default.createElement(h.default,(0,a.default)({delay:"3000"},this.props),function(){return e}))},t}(f.default.Component);t.default=v},"./src/layouts/LayoutStyles.module.css":function(e,t){e.exports={bodyWrapper:"LayoutStyles-module--body-wrapper--2dalr",siteWrapper:"LayoutStyles-module--site-wrapper--379fw",navTrigger:"LayoutStyles-module--nav-trigger--1-fq1",navTriggerLabel:"LayoutStyles-module--nav-trigger-label--1ObTN",navBar:"LayoutStyles-module--nav-bar--8dY_W",animNavTransitions:"LayoutStyles-module--anim-nav-transitions--27NBx",blob2:"LayoutStyles-module--blob-2--2-WDm"}},"./src/layouts/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),a=o(s),l=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),r=o(l),i=n("./node_modules/babel-runtime/helpers/inherits.js"),u=o(i),c=n("./node_modules/react/react.js"),d=o(c),m=n("./node_modules/prop-types/index.js"),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(m),p=n("./src/components/Footer/index.js"),g=o(p),b=n("./src/components/Header/index.js"),h=o(b),_=n("./src/components/SiteNavigation/index.js"),j=o(_),v=n("./src/components/SiteContainer/index.js"),y=o(v),x=n("./src/components/Transition/index.js"),C=o(x),E=n("./src/layouts/LayoutStyles.module.css"),N=o(E),T={children:f.func.isRequired},S=function(e){function t(){return(0,a.default)(this,t),(0,r.default)(this,e.apply(this,arguments))}return(0,u.default)(t,e),t.prototype.render=function(){var e=this;return d.default.createElement("div",{className:N.default.bodyWrapper},d.default.createElement("input",{type:"checkbox",id:"nav-trigger",className:N.default.navTrigger}),d.default.createElement("label",{htmlFor:"nav-trigger",className:N.default.navTriggerLabel},d.default.createElement("span",{className:N.default.navBar}),d.default.createElement("span",{className:N.default.navBar}),d.default.createElement("span",{className:N.default.navBar})),d.default.createElement("div",{className:N.default.siteWrapper},d.default.createElement(j.default,null),d.default.createElement(h.default,null),d.default.createElement(y.default,null,d.default.createElement(C.default,this.props,function(t){return e.props.children()})),d.default.createElement(g.default,null)))},t}(d.default.Component);S.propTypes=T,t.default=S}});
//# sourceMappingURL=component---src-layouts-index-js-63dac24a0af27f3c3f47.js.map