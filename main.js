/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 71:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(122);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --board-width: 300px;
  --hand-font: "Permanent Marker", cursive;
  --roboto-font: "Roboto", sans-serif;
  --white: #ffffff;
  --grey-1: #e3e3e3;
  --grey-2: #adadad;
  --grey-3: #f1f1f1;
  --blue: #46a3ff;
  --red: #ff827e;
  --black: #000000;
}

/* text align */
.text-center {
  text-align: center;
}

.text-start {
  text-align: left;
}

.text-end {
  text-align: right;
}

/* margins */
.mb-10 {
  margin-bottom: 10px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-40 {
  margin-bottom: 40px;
}

.mb-50 {
  margin-bottom: 50px;
}

.mb-100 {
  margin-bottom: 100px;
}

/* font weights */
.heading.typ-300,
.para.typ-300 {
  font-weight: 300;
}

.heading.typ-400,
.para.typ-400 {
  font-weight: 400;
}

.heading.typ-500,
.para.typ-500 {
  font-weight: 500;
}

.heading.typ-600,
.para.typ-600 {
  font-weight: 600;
}

.heading.typ-700,
.para.typ-700 {
  font-weight: 700;
}

.heading.typ-800,
.para.typ-800 {
  font-weight: 800;
}

.heading.typ-900,
.para.typ-900 {
  font-weight: 900;
}

.heading.typ-grey-2,
.para.typ-grey-2 {
  color: var(--grey-2);
}

.heading.typ-24 {
  font-size: 24px;
}

.para.typ-18 {
  font-size: 18px;
}

.para.typ-14 {
  font-size: 14px;
}

.btn {
  transition: 500ms ease all;
  cursor: pointer;
}

.btn.typ-outline {
  border: 1px solid var(--grey-1);
  padding: 16px;
  border-radius: 4px;
  display: block;
  width: 100%;
  background-color: var(--white);
}

.btn.typ-outline .icon {
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
}

.input-box .input-field {
  border: 1px solid var(--grey-1);
  padding: 10px;
  border-radius: 4px;
  display: block;
  width: 100%;
  background-color: var(--white);
  outline: none;
}

.input-field:focus {
  border-color: var(--blue);
}

.players-turn {
  color: var(--red);
}

body {
  background-color: var(--black);
  font-family: var(--roboto-font);
}

#app {
  background-color: var(--white);
  height: 100vh;
  min-width: 390px;
  width: 390px;
  margin: 0 auto;
  padding: 24px;
}

.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: var(--board-width);
  height: var(--board-width);
  gap: 10px;
  font-family: var(--hand-font);
  font-size: calc(var(--board-width) / 4);
  line-height: 1;
  margin: 0 auto;
}

.cell {
  border: 1px solid var(--grey-1);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.cell:hover {
  background-color: var(--grey-3);
}

.cell.x-cell {
  background-color: rgba(70, 163, 255, 0.2);
  border-color: var(--blue);
  color: var(--blue);
}

.cell.o-cell {
  background-color: rgba(255, 130, 126, 0.2);
  border-color: var(--red);
  color: var(--red);
}

.scoreboard-wrapper {
  display: flex;
  background-color: var(--white);
  justify-content: center;
  align-items: center;
  grid-gap: 50px;
}

.app-intro-wrapper,
.home-wrapper,
.game-wrapper,
.app-intro-wrapper {
  display: none;
}

.app-intro-wrapper {
  background-color: var(--white);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-intro-wrapper img {
  max-width: 120px;
}

.score-box {
  position: relative;
}

.score-box:not(:last-child):after {
  content: "";
  display: inline-block;
  height: 20px;
  background: var(--grey-2);
  width: 1px;
  position: absolute;
  left: calc(100% + 20px);
  top: 50%;
  transform: translateY(-50%);
}

.no-click {
  pointer-events: none;
}

.app-login-wrapper {
  padding: 100px 20px 20px;
  text-align: center;
}

.app-login-wrapper .intro-img img {
  max-width: 150px;
}

.input-box {
  position: relative;
}

.input-box .input-field:focus + .btn .icon {
  color: var(--blue);
}

.input-box .btn {
  position: absolute;
  top: 50%;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--white);
  transform: translateY(-50%);
}

.input-box .icon.icon-forward {
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  transition: 50ms ease all;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(382), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(448), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(966), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(952), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___, { hash: "#icomoon" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'icomoon';
  src:  url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  src:  url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('embedded-opentype'),
    url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype'),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('woff'),
    url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-forward:before {
  content: "\\e902";
}
.icon-arrow-bold-right:before {
  content: "\\e901";
}
.icon-load:before {
  content: "\\e900";
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 382:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c40fb8e19fa1f969a49.eot?q3u2hq";

/***/ }),

/***/ 417:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d39c3fed833d4fde6d0b.ttf?q3u2hq";

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 601:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 952:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/icomoon.svg";

/***/ }),

/***/ 966:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4633ea790b2a9543097.woff?q3u2hq";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// UNUSED EXPORTS: cells, winningCombination

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/style.css
var style = __webpack_require__(71);
;// ./src/assets/css/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const css_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// ./src/ui/uiElements.js
const xWinScoreElement = document.getElementById("xWinScore");
const xLossScoreElement = document.getElementById("xLossScore");
const xDrawScoreElement = document.getElementById("xDrawScore");
const oWinScoreElement = document.getElementById("oWinScore");
const oLossScoreElement = document.getElementById("oLossScore");
const oDrawScoreElement = document.getElementById("oDrawScore");
const cells = document.querySelectorAll(".cell");
const uiElements_board = document.getElementById("board");
const endMessage = document.getElementById("endMessage");
const restartButton = document.getElementById("restartButton");
const startNewgameButton = document.getElementById("startNewgameButton");
const resetScoreButton = document.getElementById("resetScoreButton");
const mainMenuButton = document.getElementById("mainMenuButton");
const gameWrapper = document.getElementById("game-wrapper");
const homeWrapper = document.getElementById("home-wrapper");
const appIntroWrapper = document.getElementById("app-intro-wrapper");
const userNameInput = document.getElementById("userName");



;// ./src/utils/storage.js
function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocal(key, defaultValue = null) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}
;// ./src/state/store.js


const defaultScore = {
  xPlayerScore: {
    win: 0,
    lose: 0,
    draw: 0,
  },
  oPlayerScore: {
    win: 0,
    lose: 0,
    draw: 0,
  },
};

const playersScore = getLocal("playersScore", defaultScore);

;// ./src/features/score.js




function updateWinScore(player) {
  if (player === "X") {
    playersScore.xPlayerScore.win++;
    playersScore.oPlayerScore.lose++;
  } else {
    playersScore.oPlayerScore.win++;
    playersScore.xPlayerScore.lose++;
  }
  setLocal("playersScore", playersScore);
  updateScoreUI();
}

function updateDrawScore() {
  playersScore.oPlayerScore.draw++;
  playersScore.xPlayerScore.draw++;
  setLocal("playersScore", playersScore);
  updateScoreUI();
}

function resetScore() {
  playersScore.xPlayerScore = { win: 0, lose: 0, draw: 0 };
  playersScore.oPlayerScore = { win: 0, lose: 0, draw: 0 };
  setLocal("playersScore", playersScore);
  updateScoreUI();
}


;// ./src/ui/uiController.js




function showNewGameScreen() {
  gameWrapper.style.display = "block";
  homeWrapper.style.display = "none";
}

function showAppIntroScreen() {
  gameWrapper.style.display = "none";
  homeWrapper.style.display = "none";
  appIntroWrapper.style.display = "flex";
}

function showMainMenuScreen() {
  gameWrapper.style.display = "none";
  homeWrapper.style.display = "block";
  updateScoreUI();
}

function updateScoreUI() {
  xWinScoreElement.textContent = playersScore.xPlayerScore.win;
  xLossScoreElement.textContent = playersScore.xPlayerScore.lose;
  xDrawScoreElement.textContent = playersScore.xPlayerScore.draw;

  oWinScoreElement.textContent = playersScore.oPlayerScore.win;
  oLossScoreElement.textContent = playersScore.oPlayerScore.lose;
  oDrawScoreElement.textContent = playersScore.oPlayerScore.draw;
}


function hideAppIntroScreen() {
  gameWrapper.style.display = "none";
  homeWrapper.style.display = "block";
  appIntroWrapper.remove();
  updateScoreUI();
}

console.log(playersScore)
;// ./src/main.js





const players = ["X", "O"];
let currentPlayer = players[0];

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

endMessage.textContent = `${currentPlayer}'s turn!`;

for (const cell of cells) {
  cell.addEventListener("click", function () {
    if (cell.textContent !== "") {
      return;
    }
    cell.textContent = currentPlayer;

    if (cell.textContent === "X") {
      cell.classList.add("x-cell");
    } else {
      cell.classList.add("o-cell");
    }

    if (checkWin(currentPlayer)) {
      endMessage.textContent = `Game over! ${currentPlayer} wins!`;
      board.classList.add("no-click");
      setTimeout(() => {
        updateWinScore(currentPlayer);
        restartGame();
        document.querySelector(".board").classList.remove("no-click");
      }, 3000);
      return;
    }

    if (checkTie()) {
      endMessage.textContent = `Game is tied!`;
      setTimeout(() => {
        updateDrawScore();
        restartGame();
      }, 3000);
      return;
    }

    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    if (currentPlayer == players[0]) {
      endMessage.textContent = `${players[0]}'s turn!`;
    } else {
      endMessage.textContent = `${players[1]}'s turn!`;
    }
  });
}

function checkWin(currentPlayer) {
  for (let i = 0; i < winningCombination.length; i++) {
    const [a, b, c] = winningCombination[i];
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent.trim() === "") {
      return false;
    }
  }
  return true;
}

function restartGame() {
  for (const cell of cells) {
    cell.textContent = "";
    cell.classList.remove("x-cell", "o-cell");
  }
  currentPlayer = players[0];
  endMessage.textContent = `${currentPlayer}'s turn!`;
}

restartButton.addEventListener("click", restartGame);

resetScoreButton.addEventListener("click", resetScore);

startNewgameButton.addEventListener("click", showNewGameScreen);

mainMenuButton.addEventListener("click", showMainMenuScreen);

window.addEventListener("DOMContentLoaded", () => {
   showAppIntroScreen();
   setTimeout(() => {
    hideAppIntroScreen();
   }, 2000);
});



/******/ })()
;