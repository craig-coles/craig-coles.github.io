webpackJsonp(["component---src-pages-work-index-js"],{'./node_modules/babel-loader/lib/index.js?{"sourceMaps":true,"presets":[["/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-env/lib/index.js",{"targets":{"node":4,"uglify":true}}],"/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-react/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-flow/lib/index.js",["/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-stage-0/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-remove-graphql-queries/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-transform-runtime/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-transform-object-rest-spread/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-transform-async-to-generator/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-transform-flow-strip-types/lib/index.js","/Users/craigcoles/projects/craigcoles.com/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/work/index.js':function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=r("./node_modules/babel-runtime/helpers/classCallCheck.js"),i=n(s),o=r("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),u=n(o),a=r("./node_modules/babel-runtime/helpers/inherits.js"),c=n(a),l=r("./node_modules/react/react.js"),d=n(l),h=r("./src/components/Link/index.js"),p=(n(h),r("./node_modules/prop-types/index.js")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(p),g=(r("./src/utils/typography.js"),r("./node_modules/string/lib/string.js")),m=(n(g),r("./src/components/Title/index.js")),v=n(m),b=r("./src/components/ContentContainer/index.js"),w=n(b),j=r("./src/components/GridList/index.js"),y=n(j),O={data:f.object.isRequired},_=function(e){function t(){return(0,i.default)(this,t),(0,u.default)(this,e.apply(this,arguments))}return(0,c.default)(t,e),t.prototype.componentDidMount=function(){},t.prototype.render=function(){var e=this.props.data.allContentfulWork;return d.default.createElement("div",null,d.default.createElement(w.default,null,d.default.createElement(v.default,null,"Work"),d.default.createElement(y.default,{data:e})))},t}(d.default.Component);_.propTypes=O,t.default=_;t.pageQuery="** extracted graphql fragment **"},"./node_modules/string/lib/_count.js":function(e,t){function r(e,t){for(var r=0,n=e.indexOf(t);n>=0;)r+=1,n=e.indexOf(t,n+1);return r}e.exports=r},"./node_modules/string/lib/_splitLeft.js":function(e,t){function r(e,t,r,n){if(void 0===r)var r=-1;var s=e.split(t),i=s.slice(0,r),o=s.slice(r);return s=0===o.length?i:i.concat(o.join(t)),void 0===n?s:n<0?s.slice(n):s.slice(0,n)}e.exports=r},"./node_modules/string/lib/_splitRight.js":function(e,t){function r(e,t,r,n){if(void 0===r)var r=-1;if(void 0===n)var n=0;for(var s=[e],i=e.length-1;i>=0;i--)0===s[0].slice(i).indexOf(t)&&(s.length<=r||-1===r)&&(s.splice(1,0,s[0].slice(i+t.length)),s[0]=s[0].slice(0,i));return n>=0?s.slice(-n):s.slice(0,-n)}e.exports=r},"./node_modules/string/lib/string.js":function(e,t,r){var n,s;(function(){"use strict";function i(e,t){e.s=null!==t&&void 0!==t?"string"==typeof t?t:t.toString():t,e.orig=t,null!==t&&void 0!==t?e.__defineGetter__?e.__defineGetter__("length",function(){return e.s.length}):e.length=t.length:e.length=-1}function o(e){i(this,e)}function u(){for(var e in v)!function(e){var t=v[e];m.hasOwnProperty(e)||(b.push(e),m[e]=function(){return String.prototype.s=this,t.apply(this,arguments)})}(e)}function a(){for(var e=0;e<b.length;++e)delete String.prototype[b[e]];b.length=0}function c(){var e=[];if(Object.getOwnPropertyNames)return e=Object.getOwnPropertyNames(m),e.splice(e.indexOf("valueOf"),1),e.splice(e.indexOf("toString"),1),e;var t={};for(var r in String.prototype)t[r]=r;for(var r in Object.prototype)delete t[r];for(var r in t)e.push(r);return e}function l(e){return new o(e)}function d(e,t){var r,n=[];for(r=0;r<e.length;r++)n.push(e[r]),t&&t.call(e,e[r],r);return n}function h(e){var t,r,n=[],s=/^[A-Za-z0-9]+$/;for(e=p(e),r=0;r<e.length;++r)t=e.charAt(r),s.test(t)?n.push(t):"\\000"===t?n.push("\\000"):n.push("\\"+t);return n.join("")}function p(e){return null==e?"":""+e}var f={},g={"Á":"A","Ă":"A","Ắ":"A","Ặ":"A","Ằ":"A","Ẳ":"A","Ẵ":"A","Ǎ":"A","Â":"A","Ấ":"A","Ậ":"A","Ầ":"A","Ẩ":"A","Ẫ":"A","Ä":"A","Ǟ":"A","Ȧ":"A","Ǡ":"A","Ạ":"A","Ȁ":"A","À":"A","Ả":"A","Ȃ":"A","Ā":"A","Ą":"A","Å":"A","Ǻ":"A","Ḁ":"A","Ⱥ":"A","Ã":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ḃ":"B","Ḅ":"B","Ɓ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ć":"C","Č":"C","Ç":"C","Ḉ":"C","Ĉ":"C","Ċ":"C","Ƈ":"C","Ȼ":"C","Ď":"D","Ḑ":"D","Ḓ":"D","Ḋ":"D","Ḍ":"D","Ɗ":"D","Ḏ":"D","ǲ":"D","ǅ":"D","Đ":"D","Ƌ":"D","Ǳ":"DZ","Ǆ":"DZ","É":"E","Ĕ":"E","Ě":"E","Ȩ":"E","Ḝ":"E","Ê":"E","Ế":"E","Ệ":"E","Ề":"E","Ể":"E","Ễ":"E","Ḙ":"E","Ë":"E","Ė":"E","Ẹ":"E","Ȅ":"E","È":"E","Ẻ":"E","Ȇ":"E","Ē":"E","Ḗ":"E","Ḕ":"E","Ę":"E","Ɇ":"E","Ẽ":"E","Ḛ":"E","Ꝫ":"ET","Ḟ":"F","Ƒ":"F","Ǵ":"G","Ğ":"G","Ǧ":"G","Ģ":"G","Ĝ":"G","Ġ":"G","Ɠ":"G","Ḡ":"G","Ǥ":"G","Ḫ":"H","Ȟ":"H","Ḩ":"H","Ĥ":"H","Ⱨ":"H","Ḧ":"H","Ḣ":"H","Ḥ":"H","Ħ":"H","Í":"I","Ĭ":"I","Ǐ":"I","Î":"I","Ï":"I","Ḯ":"I","İ":"I","Ị":"I","Ȉ":"I","Ì":"I","Ỉ":"I","Ȋ":"I","Ī":"I","Į":"I","Ɨ":"I","Ĩ":"I","Ḭ":"I","Ꝺ":"D","Ꝼ":"F","Ᵹ":"G","Ꞃ":"R","Ꞅ":"S","Ꞇ":"T","Ꝭ":"IS","Ĵ":"J","Ɉ":"J","Ḱ":"K","Ǩ":"K","Ķ":"K","Ⱪ":"K","Ꝃ":"K","Ḳ":"K","Ƙ":"K","Ḵ":"K","Ꝁ":"K","Ꝅ":"K","Ĺ":"L","Ƚ":"L","Ľ":"L","Ļ":"L","Ḽ":"L","Ḷ":"L","Ḹ":"L","Ⱡ":"L","Ꝉ":"L","Ḻ":"L","Ŀ":"L","Ɫ":"L","ǈ":"L","Ł":"L","Ǉ":"LJ","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ń":"N","Ň":"N","Ņ":"N","Ṋ":"N","Ṅ":"N","Ṇ":"N","Ǹ":"N","Ɲ":"N","Ṉ":"N","Ƞ":"N","ǋ":"N","Ñ":"N","Ǌ":"NJ","Ó":"O","Ŏ":"O","Ǒ":"O","Ô":"O","Ố":"O","Ộ":"O","Ồ":"O","Ổ":"O","Ỗ":"O","Ö":"O","Ȫ":"O","Ȯ":"O","Ȱ":"O","Ọ":"O","Ő":"O","Ȍ":"O","Ò":"O","Ỏ":"O","Ơ":"O","Ớ":"O","Ợ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ȏ":"O","Ꝋ":"O","Ꝍ":"O","Ō":"O","Ṓ":"O","Ṑ":"O","Ɵ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Õ":"O","Ṍ":"O","Ṏ":"O","Ȭ":"O","Ƣ":"OI","Ꝏ":"OO","Ɛ":"E","Ɔ":"O","Ȣ":"OU","Ṕ":"P","Ṗ":"P","Ꝓ":"P","Ƥ":"P","Ꝕ":"P","Ᵽ":"P","Ꝑ":"P","Ꝙ":"Q","Ꝗ":"Q","Ŕ":"R","Ř":"R","Ŗ":"R","Ṙ":"R","Ṛ":"R","Ṝ":"R","Ȑ":"R","Ȓ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꜿ":"C","Ǝ":"E","Ś":"S","Ṥ":"S","Š":"S","Ṧ":"S","Ş":"S","Ŝ":"S","Ș":"S","Ṡ":"S","Ṣ":"S","Ṩ":"S","ẞ":"SS","Ť":"T","Ţ":"T","Ṱ":"T","Ț":"T","Ⱦ":"T","Ṫ":"T","Ṭ":"T","Ƭ":"T","Ṯ":"T","Ʈ":"T","Ŧ":"T","Ɐ":"A","Ꞁ":"L","Ɯ":"M","Ʌ":"V","Ꜩ":"TZ","Ú":"U","Ŭ":"U","Ǔ":"U","Û":"U","Ṷ":"U","Ü":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","Ǖ":"U","Ṳ":"U","Ụ":"U","Ű":"U","Ȕ":"U","Ù":"U","Ủ":"U","Ư":"U","Ứ":"U","Ự":"U","Ừ":"U","Ử":"U","Ữ":"U","Ȗ":"U","Ū":"U","Ṻ":"U","Ų":"U","Ů":"U","Ũ":"U","Ṹ":"U","Ṵ":"U","Ꝟ":"V","Ṿ":"V","Ʋ":"V","Ṽ":"V","Ꝡ":"VY","Ẃ":"W","Ŵ":"W","Ẅ":"W","Ẇ":"W","Ẉ":"W","Ẁ":"W","Ⱳ":"W","Ẍ":"X","Ẋ":"X","Ý":"Y","Ŷ":"Y","Ÿ":"Y","Ẏ":"Y","Ỵ":"Y","Ỳ":"Y","Ƴ":"Y","Ỷ":"Y","Ỿ":"Y","Ȳ":"Y","Ɏ":"Y","Ỹ":"Y","Ź":"Z","Ž":"Z","Ẑ":"Z","Ⱬ":"Z","Ż":"Z","Ẓ":"Z","Ȥ":"Z","Ẕ":"Z","Ƶ":"Z","Ĳ":"IJ","Œ":"OE","ᴀ":"A","ᴁ":"AE","ʙ":"B","ᴃ":"B","ᴄ":"C","ᴅ":"D","ᴇ":"E","ꜰ":"F","ɢ":"G","ʛ":"G","ʜ":"H","ɪ":"I","ʁ":"R","ᴊ":"J","ᴋ":"K","ʟ":"L","ᴌ":"L","ᴍ":"M","ɴ":"N","ᴏ":"O","ɶ":"OE","ᴐ":"O","ᴕ":"OU","ᴘ":"P","ʀ":"R","ᴎ":"N","ᴙ":"R","ꜱ":"S","ᴛ":"T","ⱻ":"E","ᴚ":"R","ᴜ":"U","ᴠ":"V","ᴡ":"W","ʏ":"Y","ᴢ":"Z","á":"a","ă":"a","ắ":"a","ặ":"a","ằ":"a","ẳ":"a","ẵ":"a","ǎ":"a","â":"a","ấ":"a","ậ":"a","ầ":"a","ẩ":"a","ẫ":"a","ä":"a","ǟ":"a","ȧ":"a","ǡ":"a","ạ":"a","ȁ":"a","à":"a","ả":"a","ȃ":"a","ā":"a","ą":"a","ᶏ":"a","ẚ":"a","å":"a","ǻ":"a","ḁ":"a","ⱥ":"a","ã":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ḃ":"b","ḅ":"b","ɓ":"b","ḇ":"b","ᵬ":"b","ᶀ":"b","ƀ":"b","ƃ":"b","ɵ":"o","ć":"c","č":"c","ç":"c","ḉ":"c","ĉ":"c","ɕ":"c","ċ":"c","ƈ":"c","ȼ":"c","ď":"d","ḑ":"d","ḓ":"d","ȡ":"d","ḋ":"d","ḍ":"d","ɗ":"d","ᶑ":"d","ḏ":"d","ᵭ":"d","ᶁ":"d","đ":"d","ɖ":"d","ƌ":"d","ı":"i","ȷ":"j","ɟ":"j","ʄ":"j","ǳ":"dz","ǆ":"dz","é":"e","ĕ":"e","ě":"e","ȩ":"e","ḝ":"e","ê":"e","ế":"e","ệ":"e","ề":"e","ể":"e","ễ":"e","ḙ":"e","ë":"e","ė":"e","ẹ":"e","ȅ":"e","è":"e","ẻ":"e","ȇ":"e","ē":"e","ḗ":"e","ḕ":"e","ⱸ":"e","ę":"e","ᶒ":"e","ɇ":"e","ẽ":"e","ḛ":"e","ꝫ":"et","ḟ":"f","ƒ":"f","ᵮ":"f","ᶂ":"f","ǵ":"g","ğ":"g","ǧ":"g","ģ":"g","ĝ":"g","ġ":"g","ɠ":"g","ḡ":"g","ᶃ":"g","ǥ":"g","ḫ":"h","ȟ":"h","ḩ":"h","ĥ":"h","ⱨ":"h","ḧ":"h","ḣ":"h","ḥ":"h","ɦ":"h","ẖ":"h","ħ":"h","ƕ":"hv","í":"i","ĭ":"i","ǐ":"i","î":"i","ï":"i","ḯ":"i","ị":"i","ȉ":"i","ì":"i","ỉ":"i","ȋ":"i","ī":"i","į":"i","ᶖ":"i","ɨ":"i","ĩ":"i","ḭ":"i","ꝺ":"d","ꝼ":"f","ᵹ":"g","ꞃ":"r","ꞅ":"s","ꞇ":"t","ꝭ":"is","ǰ":"j","ĵ":"j","ʝ":"j","ɉ":"j","ḱ":"k","ǩ":"k","ķ":"k","ⱪ":"k","ꝃ":"k","ḳ":"k","ƙ":"k","ḵ":"k","ᶄ":"k","ꝁ":"k","ꝅ":"k","ĺ":"l","ƚ":"l","ɬ":"l","ľ":"l","ļ":"l","ḽ":"l","ȴ":"l","ḷ":"l","ḹ":"l","ⱡ":"l","ꝉ":"l","ḻ":"l","ŀ":"l","ɫ":"l","ᶅ":"l","ɭ":"l","ł":"l","ǉ":"lj","ſ":"s","ẜ":"s","ẛ":"s","ẝ":"s","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ᵯ":"m","ᶆ":"m","ń":"n","ň":"n","ņ":"n","ṋ":"n","ȵ":"n","ṅ":"n","ṇ":"n","ǹ":"n","ɲ":"n","ṉ":"n","ƞ":"n","ᵰ":"n","ᶇ":"n","ɳ":"n","ñ":"n","ǌ":"nj","ó":"o","ŏ":"o","ǒ":"o","ô":"o","ố":"o","ộ":"o","ồ":"o","ổ":"o","ỗ":"o","ö":"o","ȫ":"o","ȯ":"o","ȱ":"o","ọ":"o","ő":"o","ȍ":"o","ò":"o","ỏ":"o","ơ":"o","ớ":"o","ợ":"o","ờ":"o","ở":"o","ỡ":"o","ȏ":"o","ꝋ":"o","ꝍ":"o","ⱺ":"o","ō":"o","ṓ":"o","ṑ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","õ":"o","ṍ":"o","ṏ":"o","ȭ":"o","ƣ":"oi","ꝏ":"oo","ɛ":"e","ᶓ":"e","ɔ":"o","ᶗ":"o","ȣ":"ou","ṕ":"p","ṗ":"p","ꝓ":"p","ƥ":"p","ᵱ":"p","ᶈ":"p","ꝕ":"p","ᵽ":"p","ꝑ":"p","ꝙ":"q","ʠ":"q","ɋ":"q","ꝗ":"q","ŕ":"r","ř":"r","ŗ":"r","ṙ":"r","ṛ":"r","ṝ":"r","ȑ":"r","ɾ":"r","ᵳ":"r","ȓ":"r","ṟ":"r","ɼ":"r","ᵲ":"r","ᶉ":"r","ɍ":"r","ɽ":"r","ↄ":"c","ꜿ":"c","ɘ":"e","ɿ":"r","ś":"s","ṥ":"s","š":"s","ṧ":"s","ş":"s","ŝ":"s","ș":"s","ṡ":"s","ṣ":"s","ṩ":"s","ʂ":"s","ᵴ":"s","ᶊ":"s","ȿ":"s","ɡ":"g","ß":"ss","ᴑ":"o","ᴓ":"o","ᴝ":"u","ť":"t","ţ":"t","ṱ":"t","ț":"t","ȶ":"t","ẗ":"t","ⱦ":"t","ṫ":"t","ṭ":"t","ƭ":"t","ṯ":"t","ᵵ":"t","ƫ":"t","ʈ":"t","ŧ":"t","ᵺ":"th","ɐ":"a","ᴂ":"ae","ǝ":"e","ᵷ":"g","ɥ":"h","ʮ":"h","ʯ":"h","ᴉ":"i","ʞ":"k","ꞁ":"l","ɯ":"m","ɰ":"m","ᴔ":"oe","ɹ":"r","ɻ":"r","ɺ":"r","ⱹ":"r","ʇ":"t","ʌ":"v","ʍ":"w","ʎ":"y","ꜩ":"tz","ú":"u","ŭ":"u","ǔ":"u","û":"u","ṷ":"u","ü":"u","ǘ":"u","ǚ":"u","ǜ":"u","ǖ":"u","ṳ":"u","ụ":"u","ű":"u","ȕ":"u","ù":"u","ủ":"u","ư":"u","ứ":"u","ự":"u","ừ":"u","ử":"u","ữ":"u","ȗ":"u","ū":"u","ṻ":"u","ų":"u","ᶙ":"u","ů":"u","ũ":"u","ṹ":"u","ṵ":"u","ᵫ":"ue","ꝸ":"um","ⱴ":"v","ꝟ":"v","ṿ":"v","ʋ":"v","ᶌ":"v","ⱱ":"v","ṽ":"v","ꝡ":"vy","ẃ":"w","ŵ":"w","ẅ":"w","ẇ":"w","ẉ":"w","ẁ":"w","ⱳ":"w","ẘ":"w","ẍ":"x","ẋ":"x","ᶍ":"x","ý":"y","ŷ":"y","ÿ":"y","ẏ":"y","ỵ":"y","ỳ":"y","ƴ":"y","ỷ":"y","ỿ":"y","ȳ":"y","ẙ":"y","ɏ":"y","ỹ":"y","ź":"z","ž":"z","ẑ":"z","ʑ":"z","ⱬ":"z","ż":"z","ẓ":"z","ȥ":"z","ẕ":"z","ᵶ":"z","ᶎ":"z","ʐ":"z","ƶ":"z","ɀ":"z","ﬀ":"ff","ﬃ":"ffi","ﬄ":"ffl","ﬁ":"fi","ﬂ":"fl","ĳ":"ij","œ":"oe","ﬆ":"st","ₐ":"a","ₑ":"e","ᵢ":"i","ⱼ":"j","ₒ":"o","ᵣ":"r","ᵤ":"u","ᵥ":"v","ₓ":"x"},m=String.prototype,v=o.prototype={between:function(e,t){var r=this.s,n=r.indexOf(e),s=r.indexOf(t,n+e.length);return-1==s&&null!=t?new this.constructor(""):-1==s&&null==t?new this.constructor(r.substring(n+e.length)):new this.constructor(r.slice(n+e.length,s))},camelize:function(){var e=this.trim().s.replace(/(\-|_|\s)+(.)?/g,function(e,t,r){return r?r.toUpperCase():""});return new this.constructor(e)},capitalize:function(){return new this.constructor(this.s.substr(0,1).toUpperCase()+this.s.substring(1).toLowerCase())},charAt:function(e){return this.s.charAt(e)},chompLeft:function(e){var t=this.s;return 0===t.indexOf(e)?(t=t.slice(e.length),new this.constructor(t)):this},chompRight:function(e){if(this.endsWith(e)){var t=this.s;return t=t.slice(0,t.length-e.length),new this.constructor(t)}return this},collapseWhitespace:function(){var e=this.s.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"");return new this.constructor(e)},contains:function(e){return this.s.indexOf(e)>=0},count:function(e){return r("./node_modules/string/lib/_count.js")(this.s,e)},dasherize:function(){var e=this.trim().s.replace(/[_\s]+/g,"-").replace(/([A-Z])/g,"-$1").replace(/-+/g,"-").toLowerCase();return new this.constructor(e)},equalsIgnoreCase:function(e){return this.s.toLowerCase()==e.toLowerCase()},latinise:function(){var e=this.replace(/[^A-Za-z0-9\[\] ]/g,function(e){return g[e]||e});return new this.constructor(e)},decodeHtmlEntities:function(){var e=this.s;return e=e.replace(/&#(\d+);?/g,function(e,t){return String.fromCharCode(t)}).replace(/&#[xX]([A-Fa-f0-9]+);?/g,function(e,t){return String.fromCharCode(parseInt(t,16))}).replace(/&([^;\W]+;?)/g,function(e,t){var r=t.replace(/;$/,""),n=f[t]||t.match(/;$/)&&f[r];return"number"==typeof n?String.fromCharCode(n):"string"==typeof n?n:e}),new this.constructor(e)},endsWith:function(){for(var e=Array.prototype.slice.call(arguments,0),t=0;t<e.length;++t){var r=this.s.length-e[t].length;if(r>=0&&this.s.indexOf(e[t],r)===r)return!0}return!1},escapeHTML:function(){return new this.constructor(this.s.replace(/[&<>"']/g,function(e){return"&"+O[e]+";"}))},ensureLeft:function(e){var t=this.s;return 0===t.indexOf(e)?this:new this.constructor(e+t)},ensureRight:function(e){var t=this.s;return this.endsWith(e)?this:new this.constructor(t+e)},humanize:function(){if(null===this.s||void 0===this.s)return new this.constructor("");var e=this.underscore().replace(/_id$/,"").replace(/_/g," ").trim().capitalize();return new this.constructor(e)},isAlpha:function(){return!/[^a-z\xDF-\xFF]|^$/.test(this.s.toLowerCase())},isAlphaNumeric:function(){return!/[^0-9a-z\xDF-\xFF]/.test(this.s.toLowerCase())},isEmpty:function(){return null===this.s||void 0===this.s||/^[\s\xa0]*$/.test(this.s)},isLower:function(){return this.isAlpha()&&this.s.toLowerCase()===this.s},isNumeric:function(){return!/[^0-9]/.test(this.s)},isUpper:function(){return this.isAlpha()&&this.s.toUpperCase()===this.s},left:function(e){if(e>=0){var t=this.s.substr(0,e);return new this.constructor(t)}return this.right(-e)},lines:function(){return this.replaceAll("\r\n","\n").s.split("\n")},pad:function(e,t){if(null==t&&(t=" "),this.s.length>=e)return new this.constructor(this.s);e-=this.s.length;var r=Array(Math.ceil(e/2)+1).join(t),n=Array(Math.floor(e/2)+1).join(t);return new this.constructor(r+this.s+n)},padLeft:function(e,t){return null==t&&(t=" "),this.s.length>=e?new this.constructor(this.s):new this.constructor(Array(e-this.s.length+1).join(t)+this.s)},padRight:function(e,t){return null==t&&(t=" "),this.s.length>=e?new this.constructor(this.s):new this.constructor(this.s+Array(e-this.s.length+1).join(t))},parseCSV:function(e,t,r,n){e=e||",",r=r||"\\",void 0===t&&(t='"');var s=0,i=[],o=[],u=this.s.length,a=!1,c=!1,l=this,d=function(e){return l.s.charAt(e)};if(void 0!==n)var h=[];for(t||(a=!0);s<u;){var p=d(s);switch(p){case r:if(a&&(r!==t||d(s+1)===t)){s+=1,i.push(d(s));break}if(r!==t)break;case t:a=!a;break;case e:c&&(a=!1,c=!1),a&&t?i.push(p):(o.push(i.join("")),i.length=0);break;case n:c?(a=!1,c=!1,o.push(i.join("")),h.push(o),o=[],i.length=0):a?i.push(p):h&&(o.push(i.join("")),h.push(o),o=[],i.length=0);break;case" ":a&&i.push(p);break;default:a?i.push(p):p!==t&&(i.push(p),a=!0,c=!0)}s+=1}return o.push(i.join("")),h?(h.push(o),h):o},replaceAll:function(e,t){var r=this.s.split(e).join(t);return new this.constructor(r)},splitLeft:function(e,t,n){return r("./node_modules/string/lib/_splitLeft.js")(this.s,e,t,n)},splitRight:function(e,t,n){return r("./node_modules/string/lib/_splitRight.js")(this.s,e,t,n)},strip:function(){for(var e=this.s,t=0,r=arguments.length;t<r;t++)e=e.split(arguments[t]).join("");return new this.constructor(e)},stripLeft:function(e){var t,r,n=p(this.s);return void 0===e?r=/^\s+/g:(t=h(e),r=new RegExp("^["+t+"]+","g")),new this.constructor(n.replace(r,""))},stripRight:function(e){var t,r,n=p(this.s);return void 0===e?r=/\s+$/g:(t=h(e),r=new RegExp("["+t+"]+$","g")),new this.constructor(n.replace(r,""))},right:function(e){if(e>=0){var t=this.s.substr(this.s.length-e,e);return new this.constructor(t)}return this.left(-e)},setValue:function(e){return i(this,e),this},slugify:function(){var e=new o(new o(this.s).latinise().s.replace(/[^\w\s-]/g,"").toLowerCase()).dasherize().s;return"-"===e.charAt(0)&&(e=e.substr(1)),new this.constructor(e)},startsWith:function(){for(var e=Array.prototype.slice.call(arguments,0),t=0;t<e.length;++t)if(0===this.s.lastIndexOf(e[t],0))return!0;return!1},stripPunctuation:function(){return new this.constructor(this.s.replace(/[^\w\s]|_/g,"").replace(/\s+/g," "))},stripTags:function(){var e=this.s;return d(arguments.length>0?arguments:[""],function(t){e=e.replace(RegExp("</?"+t+"[^<>]*>","gi"),"")}),new this.constructor(e)},template:function(e,t,r){var n=this.s,t=t||l.TMPL_OPEN,r=r||l.TMPL_CLOSE,s=t.replace(/[-[\]()*\s]/g,"\\$&").replace(/\$/g,"\\$"),i=r.replace(/[-[\]()*\s]/g,"\\$&").replace(/\$/g,"\\$"),o=new RegExp(s+"(.+?)"+i,"g");return(n.match(o)||[]).forEach(function(s){var i=s.substring(t.length,s.length-r.length).trim(),o=void 0===e[i]?"":e[i];n=n.replace(s,o)}),new this.constructor(n)},times:function(e){return new this.constructor(new Array(e+1).join(this.s))},titleCase:function(){var e=this.s;return e&&(e=e.replace(/(^[a-z]| [a-z]|-[a-z]|_[a-z])/g,function(e){return e.toUpperCase()})),new this.constructor(e)},toBoolean:function(){if("string"==typeof this.orig){var e=this.s.toLowerCase();return"true"===e||"yes"===e||"on"===e||"1"===e}return!0===this.orig||1===this.orig},toFloat:function(e){var t=parseFloat(this.s);return e?parseFloat(t.toFixed(e)):t},toInt:function(){return/^\s*-?0x/i.test(this.s)?parseInt(this.s,16):parseInt(this.s,10)},trim:function(){var e;return e=void 0===m.trim?this.s.replace(/(^\s*|\s*$)/g,""):this.s.trim(),new this.constructor(e)},trimLeft:function(){var e;return e=m.trimLeft?this.s.trimLeft():this.s.replace(/(^\s*)/g,""),new this.constructor(e)},trimRight:function(){var e;return e=m.trimRight?this.s.trimRight():this.s.replace(/\s+$/,""),new this.constructor(e)},truncate:function(e,t){var r=this.s;if(e=~~e,t=t||"...",r.length<=e)return new this.constructor(r);var n=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},s=r.slice(0,e+1).replace(/.(?=\W*\w*$)/g,n);return s=s.slice(s.length-2).match(/\w\w/)?s.replace(/\s*\S+$/,""):new o(s.slice(0,s.length-1)).trimRight().s,new o((s+t).length>r.length?r:r.slice(0,s.length)+t)},toCSV:function(){var e=",",t='"',r="\\",n=!0,s=!1,i=[];if("object"==typeof arguments[0]?(e=arguments[0].delimiter||e,e=arguments[0].separator||e,t=arguments[0].qualifier||t,n=!!arguments[0].encloseNumbers,r=arguments[0].escape||r,s=!!arguments[0].keys):"string"==typeof arguments[0]&&(e=arguments[0]),"string"==typeof arguments[1]&&(t=arguments[1]),null===arguments[1]&&(t=null),this.orig instanceof Array)i=this.orig;else for(var u in this.orig)this.orig.hasOwnProperty(u)&&(s?i.push(u):i.push(this.orig[u]));for(var a=r+t,c=[],l=0;l<i.length;++l){var d=function(e){return null!==e&&""!==e}(t);if("number"==typeof i[l]&&(d&=n),d&&c.push(t),null!==i[l]&&void 0!==i[l]){var h=new o(i[l]).replaceAll(t,a).s;c.push(h)}else c.push("");d&&c.push(t),e&&c.push(e)}return c.length=c.length-1,new this.constructor(c.join(""))},toString:function(){return this.s},underscore:function(){var e=this.trim().s.replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase();return new this.constructor(e)},unescapeHTML:function(){return new this.constructor(this.s.replace(/\&([^;]+);/g,function(e,t){var r;return t in y?y[t]:(r=t.match(/^#x([\da-fA-F]+)$/))?String.fromCharCode(parseInt(r[1],16)):(r=t.match(/^#(\d+)$/))?String.fromCharCode(~~r[1]):e}))},valueOf:function(){return this.s.valueOf()},wrapHTML:function(e,t){var r=this.s,n=null==e?"span":e,s="",i="";if("object"==typeof t)for(var o in t)s+=" "+o+'="'+new this.constructor(t[o]).escapeHTML()+'"';return r=i.concat("<",n,s,">",this,"</",n,">"),new this.constructor(r)}},b=[],w=function(){for(var e=c(),t={},r=0;r<e.length;++r){var n=e[r];if("to"!==n&&"toEnd"!==n){var s=m[n];try{var i=typeof s.apply("teststring");t[n]=i}catch(e){}}}return t}();for(var j in w)!function(e){var t=m[e];"function"==typeof t&&(v[e]||("string"===w[e]?v[e]=function(){return new this.constructor(t.apply(this,arguments))}:v[e]=t))}(j);v.repeat=v.times,v.include=v.contains,v.toInteger=v.toInt,v.toBool=v.toBoolean,v.decodeHTMLEntities=v.decodeHtmlEntities,v.constructor=o,l.extendPrototype=u,l.restorePrototype=a,l.VERSION="3.3.3",l.TMPL_OPEN="{{",l.TMPL_CLOSE="}}",l.ENTITIES=f,void 0!==e&&void 0!==e.exports?e.exports=l:(n=[],void 0!==(s=function(){return l}.apply(t,n))&&(e.exports=s));var y={lt:"<",gt:">",quot:'"',apos:"'",amp:"&"},O={};for(var _ in y)O[y[_]]=_;f={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,"OElig;":338,"oelig;":339,"Scaron;":352,"scaron;":353,"Yuml;":376,"fnof;":402,"circ;":710,"tilde;":732,"Alpha;":913,"Beta;":914,"Gamma;":915,"Delta;":916,"Epsilon;":917,"Zeta;":918,"Eta;":919,"Theta;":920,"Iota;":921,"Kappa;":922,"Lambda;":923,"Mu;":924,"Nu;":925,"Xi;":926,"Omicron;":927,"Pi;":928,"Rho;":929,"Sigma;":931,"Tau;":932,"Upsilon;":933,"Phi;":934,"Chi;":935,"Psi;":936,"Omega;":937,"alpha;":945,"beta;":946,"gamma;":947,"delta;":948,"epsilon;":949,"zeta;":950,"eta;":951,"theta;":952,"iota;":953,"kappa;":954,"lambda;":955,"mu;":956,"nu;":957,"xi;":958,"omicron;":959,"pi;":960,"rho;":961,"sigmaf;":962,"sigma;":963,"tau;":964,"upsilon;":965,"phi;":966,"chi;":967,"psi;":968,"omega;":969,"thetasym;":977,"upsih;":978,"piv;":982,"ensp;":8194,"emsp;":8195,"thinsp;":8201,"zwnj;":8204,"zwj;":8205,"lrm;":8206,"rlm;":8207,"ndash;":8211,"mdash;":8212,"lsquo;":8216,"rsquo;":8217,"sbquo;":8218,"ldquo;":8220,"rdquo;":8221,"bdquo;":8222,"dagger;":8224,"Dagger;":8225,"bull;":8226,"hellip;":8230,"permil;":8240,"prime;":8242,"Prime;":8243,"lsaquo;":8249,"rsaquo;":8250,"oline;":8254,"frasl;":8260,"euro;":8364,"image;":8465,"weierp;":8472,"real;":8476,"trade;":8482,"alefsym;":8501,"larr;":8592,"uarr;":8593,"rarr;":8594,"darr;":8595,"harr;":8596,"crarr;":8629,"lArr;":8656,"uArr;":8657,"rArr;":8658,"dArr;":8659,"hArr;":8660,"forall;":8704,"part;":8706,"exist;":8707,"empty;":8709,"nabla;":8711,"isin;":8712,"notin;":8713,"ni;":8715,"prod;":8719,"sum;":8721,"minus;":8722,"lowast;":8727,"radic;":8730,"prop;":8733,"infin;":8734,"ang;":8736,"and;":8743,"or;":8744,"cap;":8745,"cup;":8746,"int;":8747,"there4;":8756,"sim;":8764,"cong;":8773,"asymp;":8776,"ne;":8800,"equiv;":8801,"le;":8804,"ge;":8805,"sub;":8834,"sup;":8835,"nsub;":8836,"sube;":8838,"supe;":8839,"oplus;":8853,"otimes;":8855,"perp;":8869,"sdot;":8901,"lceil;":8968,"rceil;":8969,"lfloor;":8970,"rfloor;":8971,"lang;":9001,"rang;":9002,"loz;":9674,"spades;":9824,"clubs;":9827,"hearts;":9829,"diams;":9830}}).call(this)},"./src/components/ContentContainer/ContentContainer.module.css":function(e,t){e.exports={container:"ContentContainer-module--container--2FWWJ"}},"./src/components/ContentContainer/index.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return o.default.createElement("div",{className:a.default.container},e.children)}t.__esModule=!0;var i=r("./node_modules/react/react.js"),o=n(i),u=r("./src/components/ContentContainer/ContentContainer.module.css"),a=n(u);t.default=s},"./src/components/GridList/GridList.module.css":function(e,t){e.exports={gridList:"GridList-module--grid-list--1ztII"}},"./src/components/GridList/index.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=r("./node_modules/react/react.js"),i=n(s),o=r("./src/components/Link/index.js"),u=(n(o),r("./src/components/GridListItem/index.js")),a=n(u),c=r("./src/components/GridList/GridList.module.css"),l=(n(c),function(e){var t=e.data;return i.default.createElement("ul",{className:"work-grid"},t.edges.map(function(e,t){var r=t+10;return i.default.createElement(a.default,{data:e.node,key:r})}))});t.default=l},"./src/components/GridListItem/GridListItem.module.css":function(e,t){e.exports={gridListItem:"GridListItem-module--grid-list-item--2iLiR"}},"./src/components/GridListItem/index.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=r("./node_modules/react/react.js"),i=n(s),o=r("./src/components/Link/index.js"),u=n(o),a=r("./node_modules/prop-types/index.js"),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),l=r("./node_modules/string/lib/string.js"),d=n(l),h=r("./src/components/GridListItem/GridListItem.module.css"),p=n(h),f=function(e){var t=e.data;return i.default.createElement("li",{className:p.default["grid-list-item"]},i.default.createElement("h2",null,t.title),i.default.createElement("img",{src:t.media[0].file.url,alt:t.media[0].title}),i.default.createElement(u.default,{to:"/work/"+(0,d.default)(t.title).slugify().s},t.title))};f.propTypes={data:c.object.isRequired},t.default=f},"./src/components/Link/Link.module.css":function(e,t){},"./src/components/Link/index.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=r("./node_modules/react/react.js"),i=n(s),o=r("./node_modules/gatsby-link/index.js"),u=n(o),a=r("./src/components/Link/Link.module.css"),c=n(a),l=function(e){return i.default.createElement(u.default,{className:c.default.link,to:e.to,onClick:e.handleClick},e.children)};t.default=l},"./src/components/Title/Title.module.css":function(e,t){e.exports={title:"Title-module--title--2IL6F"}},"./src/components/Title/index.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return o.default.createElement("h1",{className:a.default.title},e.children)}t.__esModule=!0;var i=r("./node_modules/react/react.js"),o=n(i),u=r("./src/components/Title/Title.module.css"),a=n(u);t.default=s}});
//# sourceMappingURL=component---src-pages-work-index-js-cb5b65595d2ad6824e7a.js.map