!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=337)}({18:function(t,e,o){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.defineProperty(e,"__esModule",{value:!0}),e.UskayUI=void 0,Object.setPrototypeOf(i.prototype,HTMLElement.prototype),Object.setPrototypeOf(i,HTMLElement);var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var o,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i),o=e,(a=[{key:"render",value:function(t){var e=this;return new Promise(function(o,n){var r=e.getStyle(t),i=e.getTemplate(t);i.then?i.then(function(t){e._render(r,t),o()}):(e._render(r,i),o())})}},{key:"_render",value:function(t,e){var o=document.createElement("template");o.innerHTML="<style>".concat(t,"</style>").concat(e),window.ShadyCSS&&(ShadyCSS.prepareTemplate(o,this.getComponentName()),ShadyCSS.styleElement(this)),this.attachShadow({mode:"open"}).appendChild(document.importNode(o.content,!0)),this.addEvents&&this.addEvents()}}])&&r(o.prototype,a),c&&r(o,c),e}();e.UskayUI=a},337:function(t,e,o){t.exports=o(338)},338:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UskayArticle=void 0;var n=o(339),r=(o(340),o(341),o(342),o(18));function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var o,c,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.UskayUI),o=e,(c=[{key:"getComponentName",value:function(){return"uskay-article"}},{key:"connectedCallback",value:function(){var t=this;this.firstFetchEndpoint="/md/".concat(location.pathname.match(/^\/article\/([a-zA-Z0-9-]+)/)[1],".md"),this.secondFetchEndpoint="/md/".concat(location.pathname.match(/^\/article\/([a-zA-Z0-9-]+)/)[1],"-all.md"),function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"render",this).call(this).then(function(e){t.shadowRoot.querySelector("#show-more")&&(t.isSecondFetchRequired=!0,window.requestIdleCallback?requestIdleCallback(function(e){t.hookIntersectionObserver(),t.preloadSecondFetch()}):(t.hookIntersectionObserver(),t.preloadSecondFetch()))})}},{key:"getStyle",value:function(){return"\n            :host {\n                display: block;\n                max-width:700px;\n                margin: 0px auto 50px auto;\n                background-color: #FFF;\n                padding:10px 50px 80px 50px;\n                border-radius: 2px;\n                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n            }\n            @media all and (max-width: 699px) {\n                :host {\n                    padding:10px 15px 80px 15px;\n                    border-radius: 0px;\n                    margin-bottom: 0px;\n                }\n            }\n            blockquote {\n                border-left: 10px #000 solid;\n                padding-left: 15px;\n                margin-left: 10px;\n            }\n            a:link { color: blue; }\n            a:visited { color: blue; }\n            a:hover { color: blue; }\n            a:active { color: blue; }\n            code {\n                background-color:#2b546d;\n                color: #FFF;\n            }\n        "}},{key:"getTemplate",value:function(t){return this.firstFetch()}},{key:"firstFetch",value:function(){var t=this;return new Promise(function(e,o){fetch(t.firstFetchEndpoint,{credentials:"include"}).then(function(t){t.text().then(function(t){var o=new n.MarkdownParser(t).getMarkUp(),r=document.querySelector("#dummyArticle");r&&(r.style.display="none"),e(o)})})})}},{key:"secondFetch",value:function(){var t=this;this.shadowRoot.querySelector("#show-more")&&fetch(this.secondFetchEndpoint,{credentials:"include"}).then(function(e){e.text().then(function(e){var o=new n.MarkdownParser(e).getMarkUp();t.shadowRoot.querySelector("#show-more").innerHTML=o,document.body.appendChild(document.createElement("uskay-profile")),document.body.appendChild(document.createElement("uskay-global-footer"))})})}},{key:"hookIntersectionObserver",value:function(){var t=this;new IntersectionObserver(function(e,o){e.forEach(function(e){e.isIntersecting&&("#show-more"==e.target.id&&o.unobserve(e.target),t.isSecondFetchRequired&&(t.isSecondFetchRequired=!1,t.secondFetch()))})}).observe(this.shadowRoot.querySelector("#show-more"))}},{key:"preloadSecondFetch",value:function(){var t,e,o,n;document.head.appendChild((t=this.secondFetchEndpoint,e="fetch",o="use-credentials",(n=document.createElement("link")).rel="preload",n.href=t,n.crossOrigin=o||"",n.as=e,n))}}])&&a(o.prototype,c),u&&a(o,u),e}();e.UskayArticle=c,customElements.define("uskay-article",c)},339:function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t}Object.defineProperty(e,"__esModule",{value:!0}),e.MarkdownParser=void 0;var a=function(){function t(e){n(this,t),this.md=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"),this.previouseRow,this.Row=function(){function t(e,o,r,i){n(this,t),this.row=e,this.isOl=void 0!==o&&o,this.isUl=void 0!==r&&r,this.isBlock=i}return i(t,[{key:"getInnerHTML",value:function(){return!0===this.isOl||!0===this.isUl||!0===this.isBlock?this.row:"".concat(this.row,"<br>")}},{key:"createNewRow",value:function(e,o){return new t(this.row.replace(e,o),this.isOl,this.isUl,this.isBlock)}},{key:"parseArticleHeader",value:function(){var e=this.row.match(/^{"header":(.+)}$/);if(e){this.isBlock=!0;var o=JSON.parse(e[1]);return new t('<uskay-article-header data-title="'.concat(o.title,'" data-subtitle="').concat(o.subtitle,'" data-date="').concat(o.date,'"></uskay-article-header>'))}return this}},{key:"parseArticleFooter",value:function(){var e=this.row.match(/^{"footer":(.+)}$/);if(e){this.isBlock=!0;var o=JSON.parse(e[1]);return new t('<uskay-article-footer data-title="'.concat(o.title,'" data-text="').concat(o.text,'" data-url="').concat(o.url,'"></uskay-article-footer>'))}return this}},{key:"parseH1",value:function(){var t=/^#\s(.+)/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<h1>$1</h1>")):this}},{key:"parseH2",value:function(){var t=/^##\s(.+)/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<h2>$1</h2>")):this}},{key:"parseH3",value:function(){var t=/^###\s(.+)/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<h3>$1</h3>")):this}},{key:"parseHR",value:function(){var t=/^----$/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<hr>")):this}},{key:"parseShowMore",value:function(){var t=/^====$/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,'<div id="show-more">\n                                    <div style="text-align:center;margin-top:50px;">\n                                        Loading...\n                                    </div>\n                                </div>')):this}},{key:"parseBlockQuote",value:function(){var t=/^>(.+)/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<blockquote>$1</blockquote>")):this}},{key:"parseGist",value:function(){var t=/^```gist\s(.+)```$/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<uskay-gist data-gistId=$1></uskay-gist>")):this}},{key:"parseImg",value:function(){var t=/^!\[.+\]\((.+)\s(\d+)x(\d+)\)$/;return this.row.match(t)?(this.isBlock=!0,this.createNewRow(t,"<uskay-img data-src=$1 data-width=$2 data-height=$3></uskay-img>")):this}},{key:"parseStrong",value:function(){return this.createNewRow(/\*\*(.+?)\*\*/g,"<b>$1</b>")}},{key:"parseEmphasis",value:function(){return this.createNewRow(/\*(.+?)\*/g,"<em>$1</em>")}},{key:"parseLink",value:function(){return this.createNewRow(/\[(.+?)\]\((https?:\/\/.+?)\)/g,'<a href="$2" target="_blank">$1</a>')}},{key:"parseCode",value:function(){return this.createNewRow(/`(.+?)`/g,"<code>$1</code>")}},{key:"parseList",value:function(){var t=/^[00-99]\.\s(.+)$/,e=/^-\s(.+)$/,o="<li>$1</li>";return this.row.match(t)?!1===this.isOl?(this.isOl=!0,this.createNewRow(t,"<ol>".concat(o))):this.createNewRow(t,o):this.row.match(e)?!1===this.isUl?(this.isUl=!0,this.createNewRow(e,"<ul>".concat(o))):this.createNewRow(e,o):!0===this.isOl?(this.isOl=!1,this.createNewRow(/^/,"</ul>")):!0===this.isUl?(this.isUl=!1,this.createNewRow(/^/,"</ul>")):this}}]),t}()}return i(t,[{key:"getMarkUp",value:function(){var t=this,e=[];return this.md.split("\n").forEach(function(o){var n=t.createRow(o);e.push(n.getInnerHTML()),t.previouseRow=n}),e.join("")}},{key:"createRow",value:function(t){var e=!1,o=!1;return this.previouseRow&&(e=this.previouseRow.isOl,o=this.previouseRow.isUl),new this.Row(t,e,o,!1).parseArticleHeader().parseArticleFooter().parseH1().parseH2().parseH3().parseHR().parseShowMore().parseGist().parseBlockQuote().parseImg().parseStrong().parseLink().parseEmphasis().parseCode().parseList()}}]),t}();e.MarkdownParser=a},340:function(t,e,o){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.defineProperty(e,"__esModule",{value:!0}),e.UskayGist=void 0,Object.setPrototypeOf(i.prototype,HTMLElement.prototype),Object.setPrototypeOf(i,HTMLElement);var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var o,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,i),o=e,(a=[{key:"connectedCallback",value:function(){var t=this.attachShadow({mode:"closed"});(function(e){return new Promise(function(o,n){var r=document.createElement("script"),i=function(t){return"cb"+e};window.__GistJsonpCallback||(window.__GistJsonpCallback={}),window.__GistJsonpCallback[i()]=function(t){return o(t)},r.setAttribute("src","https://gist.github.com/".concat(e,".json?callback=").concat("__GistJsonpCallback",".").concat(i())),r.setAttribute("defer",!0),t.appendChild(r)})})(this.getAttribute("data-gistId")).then(function(e){var o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("href",e.stylesheet),t.appendChild(o);var n=document.createElement("div");n.innerHTML=e.div,t.appendChild(n)})}}])&&r(o.prototype,a),c&&r(o,c),e}();e.UskayGist=a,customElements.define("uskay-gist",a)},341:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UskayArticleHeader=void 0;var n=o(18);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var o,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n.UskayUI),o=e,(a=[{key:"getComponentName",value:function(){return"uskay-article-header"}},{key:"connectedCallback",value:function(){var t={title:this.getAttribute("data-title"),subtitle:this.getAttribute("data-subtitle"),date:this.getAttribute("data-date")};(function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"render",this).call(this,t)}},{key:"getStyle",value:function(){return"\n            :host {\n                display: block;\n                position: relative;\n            }\n            h1 {\n                color: #000;\n                font-weight: 700;\n            }\n            .subtitle {\n                margin-top:-25px;\n                font-size:140%;\n                color: #666;\n            }\n            .date {\n                margin-top:5px;\n                color: blue;\n                \n            }\n        "}},{key:"getTemplate",value:function(t){return"\n                <h1>".concat(t.title,'</h1>\n                <div class="subtitle">').concat(t.subtitle,'</div>\n                <div class="date">').concat(t.date,"</div>\n        ")}}])&&i(o.prototype,a),c&&i(o,c),e}();e.UskayArticleHeader=a,customElements.define("uskay-article-header",a)},342:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UskayArticleFooter=void 0;var n=o(18);o(343),o(344),o(345);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var o,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n.UskayUI),o=e,(a=[{key:"getComponentName",value:function(){return"uskay-article-footer"}},{key:"connectedCallback",value:function(){var t={title:this.getAttribute("data-title"),text:this.getAttribute("data-text"),url:this.getAttribute("data-url")};(function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"render",this).call(this,t)}},{key:"getStyle",value:function(){return"\n            :host {\n                display: block;\n                position: relative;\n                margin-top:30px;\n            }\n            h1 {\n                color: #000;\n                font-weight: 700;\n            }\n            .subtitle {\n                margin-top:-25px;\n                font-size:140%;\n                color: #666;\n            }\n            .date {\n                margin-top:5px;\n                color: blue;\n            }\n            .share-button {\n                float: right;\n                margin-right:5px;\n\n            }\n        "}},{key:"getTemplate",value:function(t){return navigator.share?'\n                <uskay-web-share class="share-button" data-title="'.concat(t.title,'" data-text="').concat(t.text,'" data-url="').concat(t.url,'"></uskay-web-share> \n            '):'\n            <uskay-twitter-share class="share-button" data-title="'.concat(t.title,'" data-text="').concat(t.text,'" data-url="').concat(t.url,'"></uskay-twitter-share> \n            <uskay-facebook-share class="share-button" data-title="').concat(t.title,'" data-text="').concat(t.text,'" data-url="').concat(t.url,'"></uskay-facebook-share> \n        ')}}])&&i(o.prototype,a),c&&i(o,c),e}();e.UskayArticleFooter=a,customElements.define("uskay-article-footer",a)},343:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UskayTwitterShare=void 0;var n=o(91);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var o,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n.UskaySocialShare),o=e,(a=[{key:"getComponentName",value:function(){return"uskay-twitter-share"}},{key:"connectedCallback",value:function(){this.title=this.getAttribute("data-title"),this.text=this.getAttribute("data-text"),this.url=this.getAttribute("data-url"),function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"render",this).call(this,{backgroundColor:"#1DA1F2",imgURL:"/img/tw.png"})}},{key:"getLinkURL",value:function(){return"\n            https://twitter.com/intent/tweet?text=".concat(encodeURI(this.title)," - ").concat(encodeURI(this.text),"&url=https://blog.uskay.io").concat(this.url,"&via=uskay\n        ")}}])&&i(o.prototype,a),c&&i(o,c),e}();e.UskayTwitterShare=a,customElements.define("uskay-twitter-share",a)},344:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UskayFacebookShare=void 0;var n=o(91);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var o,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n.UskaySocialShare),o=e,(a=[{key:"getComponentName",value:function(){return"uskay-facebook-share"}},{key:"connectedCallback",value:function(){this.title=this.getAttribute("data-title"),this.text=this.getAttribute("data-text"),this.url=this.getAttribute("data-url"),function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"render",this).call(this,{backgroundColor:"#395A9A",imgURL:"/img/fb.png"})}},{key:"getLinkURL",value:function(){return"\n            https://www.facebook.com/sharer/sharer.php?display=popup&u=https://blog.uskay.io".concat(this.url,"&t=").concat(encodeURI(this.title)," - ").concat(encodeURI(this.text),"\n        ")}}])&&i(o.prototype,a),c&&i(o,c),e}();e.UskayFacebookShare=a,customElements.define("uskay-facebook-share",a)},345:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UskayWebShare=void 0;var n=o(91);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var o,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n.UskaySocialShare),o=e,(a=[{key:"getComponentName",value:function(){return"uskay-web-share"}},{key:"connectedCallback",value:function(){this.title=this.getAttribute("data-title"),this.text=this.getAttribute("data-text"),this.url=this.getAttribute("data-url"),function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"render",this).call(this,{backgroundColor:"#29495C",imgURL:"/img/webshare.png"})}},{key:"addEvents",value:function(){var t=this;this.shadowRoot.addEventListener("click",function(e){navigator.share({title:t.title,text:t.text,url:t.url})})}}])&&i(o.prototype,a),c&&i(o,c),e}();e.UskayWebShare=a,customElements.define("uskay-web-share",a)},91:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UskaySocialShare=void 0;var n=o(18);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var o,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n.UskayUI),o=e,(a=[{key:"getStyle",value:function(t){return"\n            :host {\n                display: block;\n                position: relative;\n                width: 50px;\n                height: 50px;\n                background-color: ".concat(t.backgroundColor,";\n                cursor: pointer;\n                border-radius: 2px;\n                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n            }\n            :host .social-share-icon {\n                width:30px;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%,-50%);\n            }\n        ")}},{key:"getTemplate",value:function(t){return'\n            <uskay-img class="social-share-icon" data-src="'.concat(t.imgURL,'" data-width="30" data-height="30" data-background-color="transparent"></uskay-img>\n        ')}},{key:"addEvents",value:function(){var t=this;this.shadowRoot.addEventListener("click",function(e){window.open(t.getLinkURL(),"newwindow","location=yes,height=570,width=520,scrollbars=yes,status=yes")})}}])&&i(o.prototype,a),c&&i(o,c),e}();e.UskaySocialShare=a}});