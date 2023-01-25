/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./components/fonts/Demiths-L3oRZ.otf */ "./src/components/fonts/Demiths-L3oRZ.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./components/images/background.jpg */ "./src/components/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./components/images/doing.jpg */ "./src/components/images/doing.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./components/images/will.jpg */ "./src/components/images/will.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./components/images/done.jpg */ "./src/components/images/done.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --btn-size: 70px;\n}\n\n@font-face {\n  font-family: \"Demiths\";\n  src: local(\"Demiths\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"OpenType\");\n  font-weight: bold;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.src {\n  width: 100%;\n  height: 100%;\n}\n\n.main {\n  width: 100%;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  grid-template: 0.5fr 3fr / 1fr;\n}\n\n.see-item {\n  position: absolute;\n  width: var(--btn-size);\n  height: var(--btn-size);\n  right: 10px;\n  right: 35px;\n  top: 250px;\n  background-color: white;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.see-item > svg {\n  width: 40px;\n  height: 40px;\n}\n\n.see-item:hover {\n  background-color: rgb(144, 141, 141);\n}\n\n#doing,\n#late,\n#write,\n#completed {\n  display: grid;\n  grid-template-rows: 1fr 3.5fr 1fr;\n}\n\n#write > fieldset {\n  grid-row: 2 / 3;\n  width: 40%;\n  height: 100%;\n  justify-self: center;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr) 3fr;\n  background-color: white;\n}\n\n.projNameContainer,\n.projTimeContainer,\n.projDateContainer {\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n\n.projNameContainer > label {\n  padding-right: 30px;\n}\n\ninput[type=\"text\"] {\n  width: 250px;\n  height: 30px;\n}\n\ninput[type=\"time\"] {\n  width: 80px;\n  height: 30px;\n}\n\ninput[type=\"date\"] {\n  width: 120px;\n  height: 30px;\n}\n\n.projDoneContainer {\n  position: absolute;\n  top: 350px;\n}\n\n.projDoneContainer > label {\n  padding: 10px;\n}\n\n.projTextContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  justify-self: center;\n  resize: none;\n  width: 420px;\n  height: 180px;\n  padding: 10px;\n}\n\n.projTimeContainer > label {\n  padding-right: 30px;\n}\n\n.page-doing-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n#return-text {\n  width: var(--btn-size);\n  height: var(--btn-size);\n  border-radius: 50px;\n  background-color: rgba(255, 255, 255, 0.548);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n}\n\n#return-text:hover {\n  background-color: white;\n}\n\n.submit-btn-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#submitBtn {\n  background-color: transparent;\n  border: 3px solid black;\n  border-radius: 10px;\n  width: 120px;\n  height: 40px;\n  align-self: center;\n}\n\n#submitBtn:hover {\n  background-color: grey;\n}\n\n.page-write-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.page-completed-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.choose-container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  align-items: center;\n}\n\n.back-choose {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.552);\n  border-radius: 50px;\n}\n\n.back-choose:hover {\n  background-color: white;\n  cursor: pointer;\n}\n\n.choose-container > #wrap-choose {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#wrap-choose > div {\n  border: 2px solid black;\n  width: 160px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n#wrap-choose > div:hover {\n  background-color: rgba(224, 221, 221, 0.627);\n  cursor: pointer;\n}\n\n.doing-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.Late-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.completed-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.navbar > .navbar-div-projects {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 15px;\n}\n\n.navbar-div-projects > .navbar-h3-projects {\n  font-family: \"Demiths\";\n  font-size: 24px;\n  letter-spacing: 0.7px;\n  border-bottom: 2px solid black;\n  border-radius: 5px;\n}\n\n.content-cards {\n  display: flex;\n  justify-content: space-around;\n  width: 90%;\n  height: 100%;\n}\n\n.card {\n  background-color: white;\n  width: 23%;\n  height: 67%;\n  border-radius: 25px;\n  padding: 20px;\n  border: 2px solid black;\n}\n\n.card > h4 {\n  font-family: \"Demiths\";\n  font-size: 15px;\n  border-bottom: 2px solid black;\n  border-radius: 10px;\n  width: 100px;\n  text-align: center;\n}\n\n.add-item {\n  position: absolute;\n  right: 35px;\n  top: 140px;\n  background-color: #fafafa;\n  border: 2px solid rgba(215, 205, 205, 0.795);\n  width: var(--btn-size);\n  height: var(--btn-size);\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Demiths\";\n}\n\n.add-item:hover {\n  background-color: #ded8d8;\n  cursor: pointer;\n}\n\n.add-item > svg {\n  height: 50px;\n  width: 50px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --btn-size: 70px;\n}\n\n@font-face {\n  font-family: \"Demiths\";\n  src: local(\"Demiths\"),\n    url(\"./components/fonts/Demiths-L3oRZ.otf\") format(\"OpenType\");\n  font-weight: bold;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.src {\n  width: 100%;\n  height: 100%;\n}\n\n.main {\n  width: 100%;\n  height: 100%;\n  background-image: url(\"./components/images/background.jpg\");\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  grid-template: 0.5fr 3fr / 1fr;\n}\n\n.see-item {\n  position: absolute;\n  width: var(--btn-size);\n  height: var(--btn-size);\n  right: 10px;\n  right: 35px;\n  top: 250px;\n  background-color: white;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.see-item > svg {\n  width: 40px;\n  height: 40px;\n}\n\n.see-item:hover {\n  background-color: rgb(144, 141, 141);\n}\n\n#doing,\n#late,\n#write,\n#completed {\n  display: grid;\n  grid-template-rows: 1fr 3.5fr 1fr;\n}\n\n#write > fieldset {\n  grid-row: 2 / 3;\n  width: 40%;\n  height: 100%;\n  justify-self: center;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr) 3fr;\n  background-color: white;\n}\n\n.projNameContainer,\n.projTimeContainer,\n.projDateContainer {\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n\n.projNameContainer > label {\n  padding-right: 30px;\n}\n\ninput[type=\"text\"] {\n  width: 250px;\n  height: 30px;\n}\n\ninput[type=\"time\"] {\n  width: 80px;\n  height: 30px;\n}\n\ninput[type=\"date\"] {\n  width: 120px;\n  height: 30px;\n}\n\n.projDoneContainer {\n  position: absolute;\n  top: 350px;\n}\n\n.projDoneContainer > label {\n  padding: 10px;\n}\n\n.projTextContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  justify-self: center;\n  resize: none;\n  width: 420px;\n  height: 180px;\n  padding: 10px;\n}\n\n.projTimeContainer > label {\n  padding-right: 30px;\n}\n\n.page-doing-container {\n  background-image: url(\"./components/images/doing.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n#return-text {\n  width: var(--btn-size);\n  height: var(--btn-size);\n  border-radius: 50px;\n  background-color: rgba(255, 255, 255, 0.548);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n}\n\n#return-text:hover {\n  background-color: white;\n}\n\n.submit-btn-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#submitBtn {\n  background-color: transparent;\n  border: 3px solid black;\n  border-radius: 10px;\n  width: 120px;\n  height: 40px;\n  align-self: center;\n}\n\n#submitBtn:hover {\n  background-color: grey;\n}\n\n.page-write-container {\n  background-image: url(\"./components/images/will.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.page-completed-container {\n  background-image: url(\"./components/images/done.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.choose-container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  align-items: center;\n}\n\n.back-choose {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.552);\n  border-radius: 50px;\n}\n\n.back-choose:hover {\n  background-color: white;\n  cursor: pointer;\n}\n\n.choose-container > #wrap-choose {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#wrap-choose > div {\n  border: 2px solid black;\n  width: 160px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n#wrap-choose > div:hover {\n  background-color: rgba(224, 221, 221, 0.627);\n  cursor: pointer;\n}\n\n.doing-wrap {\n  background-image: url(\"./components/images/doing.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.Late-wrap {\n  background-image: url(\"./components/images/will.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.completed-wrap {\n  background-image: url(\"./components/images/done.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.navbar > .navbar-div-projects {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 15px;\n}\n\n.navbar-div-projects > .navbar-h3-projects {\n  font-family: \"Demiths\";\n  font-size: 24px;\n  letter-spacing: 0.7px;\n  border-bottom: 2px solid black;\n  border-radius: 5px;\n}\n\n.content-cards {\n  display: flex;\n  justify-content: space-around;\n  width: 90%;\n  height: 100%;\n}\n\n.card {\n  background-color: white;\n  width: 23%;\n  height: 67%;\n  border-radius: 25px;\n  padding: 20px;\n  border: 2px solid black;\n}\n\n.card > h4 {\n  font-family: \"Demiths\";\n  font-size: 15px;\n  border-bottom: 2px solid black;\n  border-radius: 10px;\n  width: 100px;\n  text-align: center;\n}\n\n.add-item {\n  position: absolute;\n  right: 35px;\n  top: 140px;\n  background-color: #fafafa;\n  border: 2px solid rgba(215, 205, 205, 0.795);\n  width: var(--btn-size);\n  height: var(--btn-size);\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Demiths\";\n}\n\n.add-item:hover {\n  background-color: #ded8d8;\n  cursor: pointer;\n}\n\n.add-item > svg {\n  height: 50px;\n  width: 50px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  } // For old IE

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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/components/methods.js":
/*!***********************************!*\
  !*** ./src/components/methods.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgCreate": () => (/* binding */ ImgCreate),
/* harmony export */   "divCreate": () => (/* binding */ divCreate),
/* harmony export */   "fieldsetCreate": () => (/* binding */ fieldsetCreate),
/* harmony export */   "h1Create": () => (/* binding */ h1Create),
/* harmony export */   "h2Create": () => (/* binding */ h2Create),
/* harmony export */   "h3Create": () => (/* binding */ h3Create),
/* harmony export */   "h4Create": () => (/* binding */ h4Create),
/* harmony export */   "h5Create": () => (/* binding */ h5Create),
/* harmony export */   "inputCreate": () => (/* binding */ inputCreate),
/* harmony export */   "methodCreate": () => (/* binding */ methodCreate),
/* harmony export */   "navCreate": () => (/* binding */ navCreate),
/* harmony export */   "pCreate": () => (/* binding */ pCreate)
/* harmony export */ });
// Made by MrEpoch

// This file was made to be exported for use in other files, it holds methods for creating html elements in easier way

// divCreate function expression takes like first what is inside and then class and returns div at end

const methodCreate = (htmlName, inside, classAdd, idAdd, innerHtml) => {
  const element = document.createElement(htmlName);
  element.append(inside);
  element.classList.add(classAdd);
  if (idAdd) {
    element.id = idAdd;
  }
  if (innerHtml) {
    element.innerHTML = innerHtml;
  }
  return element;
};

const divCreate = (InsideDiv, classAdd, idAdd, innerHtml) => {
  const div = document.createElement("div");
  div.append(InsideDiv);
  div.classList.add(classAdd);
  if (idAdd) {
    div.id = idAdd;
  }
  if (innerHtml) {
    div.innerHTML = innerHtml;
  }
  return div;
};

const navCreate = (InsideNav, classAdd, idAdd) => {
  const nav = document.createElement("nav");
  nav.append(InsideNav);
  nav.classList.add(classAdd);
  if (idAdd) {
    nav.id = idAdd;
  }
  return nav;
};

// ImgCreate is returns takes Imported img and returns it ready for use to append to the div or other use

const ImgCreate = (image) => {
  const img = new Image();
  img.src = image;
  return img;
};

// h2Create creates h2 element which takes textContent and class and returns h2

const h1Create = (TextInside, classAdd, idAdd) => {
  const h1 = document.createElement("h1");
  h1.textContent = TextInside;
  h1.classList.add(classAdd);
  if (idAdd) {
    h1.id = idAdd;
  }
  return h1;
};

const h2Create = (TextInside, classAdd, idAdd) => {
  const h2 = document.createElement("h2");
  h2.textContent = TextInside;
  h2.classList.add(classAdd);
  if (idAdd) {
    h2.id = idAdd;
  }
  return h2;
};

const h3Create = (TextInside, classAdd, idAdd) => {
  const h3 = document.createElement("h3");
  h3.textContent = TextInside;
  h3.classList.add(classAdd);
  if (idAdd) {
    h3.id = idAdd;
  }
  return h3;
};

// h4Create creates h4 element which takes textContent and class and returns h4

const h4Create = (TextInside, classAdd, idAdd) => {
  const h4 = document.createElement("h4");
  h4.textContent = TextInside;
  h4.classList.add(classAdd);
  if (idAdd) {
    h4.id = idAdd;
  }
  return h4;
};

const h5Create = (TextInside, classAdd, idAdd) => {
  const h5 = document.createElement("h5");
  h5.textContent = TextInside;
  h5.classList.add(classAdd);
  if (idAdd) {
    h5.id = idAdd;
  }
  return h5;
};

// pCreate creates paragrahp with first parameter text and second class and returns paragraph

const pCreate = (TextInside, classAdd, idAdd) => {
  const p = document.createElement("p");
  p.textContent = TextInside;
  p.classList.add(classAdd);
  if (idAdd) {
    p.id = idAdd;
  }
  return p;
};

const inputCreate = (placeHolder, classAdd, type) => {
  const input = document.createElement("input");
  input.placeholder = placeHolder;
  input.classList.add(classAdd);
  input.type = type;

  return input;
};

const fieldsetCreate = (InsideField, classAdd, idAdd) => {
  const field = document.createElement("fieldset");
  field.append(InsideField);
  field.classList.add(classAdd);
  if (idAdd) {
    field.id = idAdd;
  }
  return field;
};

// exporting all function expressions




/***/ }),

/***/ "./src/components/fonts/Demiths-L3oRZ.otf":
/*!************************************************!*\
  !*** ./src/components/fonts/Demiths-L3oRZ.otf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f563047bc5fffe3b0216.otf";

/***/ }),

/***/ "./src/components/images/background.jpg":
/*!**********************************************!*\
  !*** ./src/components/images/background.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95c8ae4a83098dfc6d3b.jpg";

/***/ }),

/***/ "./src/components/images/doing.jpg":
/*!*****************************************!*\
  !*** ./src/components/images/doing.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f910a630b31b3bcb860e.jpg";

/***/ }),

/***/ "./src/components/images/done.jpg":
/*!****************************************!*\
  !*** ./src/components/images/done.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a27819562a0ae3a4c7b5.jpg";

/***/ }),

/***/ "./src/components/images/will.jpg":
/*!****************************************!*\
  !*** ./src/components/images/will.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22ff2c8695d3be101f30.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/methods */ "./src/components/methods.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_fonts_Demiths_L3oRZ_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fonts/Demiths-L3oRZ.otf */ "./src/components/fonts/Demiths-L3oRZ.otf");




const src = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "src");

const idGet = () => {
  const idCalled = localStorage.getItem("Id");
  return idCalled;
};

const idSet = (value) => {
  const idChanged = localStorage.setItem("Id", `${value}`);
  return idChanged;
};

let arrWithLocal = [];
let myMeasure = [];

const checkIfId = () => {
  if (!localStorage.getItem("Id")) {
    localStorage.setItem("Id", "0");
    return false;
  }
  return true;
};

const loadArr = () => {
  let curId = parseInt(idGet(), 10);
  if (checkIfId() === true && curId > arrWithLocal.length) {
    for (let i = 0; i < curId; i += 1) {
      let localVal = {
        name: localStorage.getItem(`name-${i}`),
        time: localStorage.getItem(`time-${i}`),
        date: localStorage.getItem(`date-${i}`),
        text: localStorage.getItem(`text-${i}`),
      };
      arrWithLocal.push(localVal);
    }
    return arrWithLocal;
  }
  return false;
};

const useLoadAndCheck = () => {
  checkIfId();
  loadArr();
};

useLoadAndCheck();
console.log(threeValues, arrWithLocal);
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function NewItem(itemId, name, time, date, completed, text) {
  this.itemId = itemId;
  this.name = name;
  this.time = time;
  this.date = date;
  this.completed = completed;
  this.text = text;
}

function localItem(itemObject, idlocal) {
  localStorage.setItem(`name-${idlocal}`, itemObject.name);
  localStorage.setItem(`time-${idlocal}`, itemObject.time);
  localStorage.setItem(`date-${idlocal}`, itemObject.date);
  localStorage.setItem(`completed-${idlocal}`, itemObject.completed);
  localStorage.setItem(`text-${idlocal}`, itemObject.text);

  return localStorage;
}

function findItem(id, item) {
  if (localStorage.getItem(`${item}-${id}`) === null) {
    return "empty";
  }

  return localStorage.getItem(`${item}-${id}`);
}

const itemsCount = () => {
  const currentId = localStorage.getItem("Id");
  const IntId = parseInt(currentId, 10) + 1;
  return IntId;
};

function LoadH(hType, hValue) {
  const loaderH3 = _components_methods__WEBPACK_IMPORTED_MODULE_0__.methodCreate(hType, hValue, "function-loaded-h3");

  return loaderH3;
}

// if (storageAvailable('localStorage')) {
//   // Yippee! We can use localStorage awesomeness
// }
// else {
//   // Too bad, no localStorage for us
// }

// date === 0-Year, 1-month, 2-day

const lateCheck = () => {
  let dateContainer = [];
  let timeContainer = [];
  for (let i = 0; i < arrWithLocal.length; i += 1) {
    if (arrWithLocal[i].date) {
      const curDate = new Date();
      const curYear = curDate.getFullYear();
      const curMonth = curDate.getMonth();
      const curDay = curDate.getDay();
      const curHour = curDate.getHours();
      const curMinute = curDate.getMinutes();
      dateContainer[i] = arrWithLocal[i].date.split("-");
      timeContainer[i] = arrWithLocal[i].time.split(":");
      if (dateContainer[i]["0"] >= curYear) {
        if (
          dateContainer[i]["1"] >= curMonth &&
          dateContainer[i]["0"] === curYear
        ) {
          if (
            dateContainer[i]["2"] >= curDay &&
            dateContainer[i]["1"] === curMonth
          ) {
            if (
              timeContainer[i]["0"] >= curHour &&
              dateContainer[i]["2"] === curDay
            ) {
              if (
                timeContainer[i]["1"] >= curMinute &&
                timeContainer[i]["0"] === curHour
              ) {
                arrWithLocal[i].late = false;
              } else {
                arrWithLocal[i].late = true;
              }
              arrWithLocal[i].late = false;
            } else {
              arrWithLocal[i].late = true;
            }
            arrWithLocal[i].late = false;
          } else {
            arrWithLocal[i].late = true;
          }
          arrWithLocal[i].late = false;
        } else {
          arrWithLocal[i].late = true;
        }
        arrWithLocal[i].late = false;
      } else {
        arrWithLocal[i].late = true;
      }
    }
  }
};

lateCheck();

const assignPlace = () => {
  for (let i = 0; i < arrWithLocal.length; i += 1) {
    if (arrWithLocal[i].completed === true) {
      arrWithLocal[i].place = "completed";
    } else if (arrWithLocal[i].completed === false) {
      if (arrWithLocal[i].late === true) {
        arrWithLocal[i].place = "late";
      } else if (arrWithLocal[i].late === false) {
        arrWithLocal[i].place = "doing";
      }
    }
  }
};

const checkPage = (value) => {
  const currentPage = value.children["0"].id;
  let btnLogic;
  let submitBtns;
  let writeBtns;
  let nextBtn;
  let prevBtn;
  const pageBtns = {};
  if (currentPage === "main") {
    btnLogic = value.children["0"].children["1"].children["3"];
    writeBtns = value.children["0"].children["1"].children["4"];
  } else if (currentPage === "choose") {
    btnLogic = value.children["0"].children["3"];
    pageBtns.doingBtns = value.children["0"].children["0"].children["0"];
    pageBtns.lateBtns = value.children["0"].children["1"].children["0"];
    pageBtns.completedBtns = value.children["0"].children["2"].children["0"];
  } else if (
    currentPage === "doing" ||
    currentPage === "late" ||
    currentPage === "completed" ||
    currentPage === "write"
  ) {
    btnLogic = value.children["0"].children["0"];
    submitBtns = value.children["0"].children["2"].children["0"];
  } else if (currentPage === "see") {
    btnLogic = value.children["0"].children["0"];
    nextBtn = value.children["0"].children["2"].children["0"];
    prevBtn = value.children["0"].children["3"].children["0"];
  }

  return { btnLogic, pageBtns, submitBtns, writeBtns, nextBtn, prevBtn };
};

//

const navbar = () => {
  const myNavbar = _components_methods__WEBPACK_IMPORTED_MODULE_0__.navCreate("", "navbar");
  const projectsHeader = _components_methods__WEBPACK_IMPORTED_MODULE_0__.h3Create("Todo", "navbar-h3-projects");
  const projectsDiv = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(projectsHeader, "navbar-div-projects");
  myNavbar.append(projectsDiv);

  return myNavbar;
};

const SvgPict = () => {
  const plusIcon = `<svg viewBox="0 0 26 26">
                      <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"> </path>
                    </svg>`;
  const returnIcon = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"> </path>
                      </svg>`;
  const writeIcon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256" xml:space="preserve"><style>.st2{fill:#69ebfc}.st5{fill:#d476e2}.st14{fill:#edd4c2}</style><path d="M205 0H20c5.52 0 10.52 2.24 14.14 5.86S40 14.48 40 20v236h185V20c0-11.046-8.954-20-20-20z" style="fill:#ffefe4"/><path class="st14" d="M40 250h185v6H40z"/><path d="M205 0H20c5.52 0 10.52 2.24 14.14 5.86.045.045.083.095.127.14H205c11.046 0 20 8.954 20 20v-6c0-11.046-8.954-20-20-20z" style="fill:#fff7f2"/><path d="M144 56H70a8 8 0 0 1 0-16h74a8 8 0 0 1 0 16z" style="fill:#ff8354"/><path class="st14" d="M188 84H66a4 4 0 0 1 0-8h122a4 4 0 0 1 0 8zM188 111.2H66a4 4 0 0 1 0-8h122a4 4 0 0 1 0 8zM188 138.4H66a4 4 0 0 1 0-8h122a4 4 0 0 1 0 8zM188 165.6H66a4 4 0 0 1 0-8h122a4 4 0 0 1 0 8zM188 192.8H66a4 4 0 0 1 0-8h122a4 4 0 0 1 0 8zM147 220H66a4 4 0 0 1 0-8h81a4 4 0 0 1 0 8zM40 20v60H0V20C0 8.95 8.95 0 20 0c5.52 0 10.52 2.24 14.14 5.86S40 14.48 40 20z"/><path transform="rotate(30 173.417 175.565)" class="st5" d="M163.411 150.575h20v50h-20z"/><path class="st5" d="m169.571 202.226-17.32-10-5.625 24.567a2.708 2.708 0 0 0 4.483 2.589l18.462-17.156z"/><path transform="rotate(30 212.163 108.447)" class="st2" d="M202.161 55.958h20v105h-20z"/><path transform="rotate(-150 244.807 75.92)" class="st2" d="M242.803 72.92h4v6h-4z"/><path class="st2" d="M223.999 123.954a4 4 0 0 0 5.464-1.464l26-45.033a4 4 0 1 0-6.928-4l-26 45.033a4 4 0 0 0 1.464 5.464z"/><path class="st5" d="M250.911 41.341c-4.783-2.761-10.899-1.123-13.66 3.66l-7.5 12.99 17.32 10 7.5-12.99c2.762-4.782 1.123-10.898-3.66-13.66z"> </path></svg>`;

  const noteIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>note-multiple-outline</title><path d="M3,6V22H21V24H3A2,2 0 0,1 1,22V6H3M16,9H21.5L16,3.5V9M7,2H17L23,8V18A2,2 0 0,1 21,20H7C5.89,20 5,19.1 5,18V4A2,2 0 0,1 7,2M7,4V18H21V11H14V4H7Z"> </path></svg>`;
  return { plusIcon, returnIcon, writeIcon, noteIcon };
};

const content = () => {
  const myContent = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "content-cards");
  function Card(h4Text) {
    const cardDiv = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(h4Text, "card");
    return cardDiv;
  }

  const cardsInner = {
    doingH4: _components_methods__WEBPACK_IMPORTED_MODULE_0__.h4Create("Doing", "doing-content"),
    lateH4: _components_methods__WEBPACK_IMPORTED_MODULE_0__.h4Create("Late", "Late-content"),
    completedH4: _components_methods__WEBPACK_IMPORTED_MODULE_0__.h4Create("completed", "completed-content"),
  };

  const doing = Card(cardsInner.doingH4);
  const late = Card(cardsInner.lateH4);
  const completed = Card(cardsInner.completedH4);

  const add = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "add-item", "", SvgPict().plusIcon);
  const see = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "see-item", "", SvgPict().noteIcon);

  myContent.append(doing, late, completed, add, see);
  const addHtml = myContent.children["3"];

  addHtml.addEventListener("mouseover", () => {
    addHtml.textContent = "New";
  });

  addHtml.addEventListener("mouseout", () => {
    addHtml.innerHTML = SvgPict().plusIcon;
  });

  return myContent;
};

const TodoName = (pageName) => {
  const TodoNameContainer = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "projNameContainer");
  const TodoNameLabel = _components_methods__WEBPACK_IMPORTED_MODULE_0__.methodCreate(
    "Label",
    "Todo name",
    `label-${pageName}-name`
  );
  const TodoNameInput = _components_methods__WEBPACK_IMPORTED_MODULE_0__.inputCreate(
    "My awesome project!",
    "name-doing",
    "text"
  );

  TodoNameContainer.append(TodoNameLabel, TodoNameInput);

  return TodoNameContainer;
};

const TodoTime = (pageName) => {
  const TodoTimeContainer = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "projTimeContainer");
  const TodoTimeLabel = _components_methods__WEBPACK_IMPORTED_MODULE_0__.methodCreate(
    "Label",
    "Completion Time",
    `label-${pageName}-time`
  );
  const TodoTimeInput = _components_methods__WEBPACK_IMPORTED_MODULE_0__.inputCreate("", `${pageName}-time`, "time");

  TodoTimeContainer.append(TodoTimeLabel, TodoTimeInput);

  return TodoTimeContainer;
};
const TodoDate = (pageName) => {
  const TodoDateContainer = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "projDateContainer");
  const TodoDateLabel = _components_methods__WEBPACK_IMPORTED_MODULE_0__.methodCreate(
    "Label",
    "Completion date",
    `label-${pageName}-date`
  );
  const TodoDateInput = _components_methods__WEBPACK_IMPORTED_MODULE_0__.inputCreate("", `${pageName}-date`, "date");

  TodoDateContainer.append(TodoDateLabel, TodoDateInput);

  return TodoDateContainer;
};
const TodoText = (pageName) => {
  const TodoTextContainer = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "projTextContainer");
  const TodoTextInside = _components_methods__WEBPACK_IMPORTED_MODULE_0__.methodCreate(
    "textarea",
    "",
    `${pageName}-projText`
  );

  TodoTextContainer.append(TodoTextInside);

  return TodoTextContainer;
};
const TodocompletedOr = (pagename) => {
  const TodocompletedContainer = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "projDoneContainer");
  const TodocompletedLabel = _components_methods__WEBPACK_IMPORTED_MODULE_0__.methodCreate("Label", "completed");
  const TodocompletedInside = _components_methods__WEBPACK_IMPORTED_MODULE_0__.inputCreate("", "done", "checkbox");

  TodocompletedContainer.append(TodocompletedLabel, TodocompletedInside);

  return TodocompletedContainer;
};
const TodoSubmit = (pageName) => {
  const submitBtn = _components_methods__WEBPACK_IMPORTED_MODULE_0__.methodCreate(
    "button",
    "submit",
    `${pageName}-btn`,
    "submitBtn"
  );

  const wrappedBtn = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(submitBtn, "submit-btn-container");

  return wrappedBtn;
};

function WritingPages(pageName) {
  this.page = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    "",
    `page-${pageName}-container`,
    `${pageName}`
  );
  this.field = _components_methods__WEBPACK_IMPORTED_MODULE_0__.fieldsetCreate("", `field-${pageName}`);
  this.returnBtn = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    "",
    `return-${pageName}`,
    "return-text",
    SvgPict().returnIcon
  );

  this.field.append(
    TodoName(`${pageName}`),
    TodoTime(`${pageName}`),
    TodoDate(`${pageName}`),
    TodocompletedOr(`${pageName}`),
    TodoText(`${pageName}`)
  );
  this.page.append(this.returnBtn, this.field, TodoSubmit(`${pageName}`));
}

function SeePage(id, value) {
  this.nameItem = findItem(id, "name");
  this.timeItem = findItem(id, "time");
  this.dateItem = findItem(id, "date");
  this.textItem = findItem(id, "text");

  this.page = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", `page-${value}`);
  this.page.id = "see";

  this.field = _components_methods__WEBPACK_IMPORTED_MODULE_0__.fieldsetCreate("", `field-Re`);
  this.returnBtn = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    "",
    `return-Re`,
    "return-text",
    SvgPict().returnIcon
  );

  this.next = _components_methods__WEBPACK_IMPORTED_MODULE_0__.methodCreate("button", "next", "btn-next");
  this.prev = _components_methods__WEBPACK_IMPORTED_MODULE_0__.methodCreate("button", "previus", "btn-prev");

  this.name = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(LoadH("h3", this.nameItem), "item-name");
  this.time = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(LoadH("h3", this.timeItem), "item-time");
  this.date = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(LoadH("h3", this.dateItem), "item-date");
  this.text = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(LoadH("h3", this.textItem), "item-text");

  this.field.append(this.name, this.time, this.date, this.text);

  this.nextContainer = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "btn-next-container");
  this.prevContainer = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "btn-prev-container");

  this.nextContainer.append(this.next);
  this.prevContainer.append(this.prev);

  this.page.append(
    this.returnBtn,
    this.field,
    this.nextContainer,
    this.prevContainer
  );
}

const writePage = () => {
  const MyPage = new WritingPages("write");
  return MyPage.page;
};

const choosePage = () => {
  const choose = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "choose-container", "choose");

  const chooseText = {
    doing: "Doing",
    late: "Late",
    completed: "Completed",
  };

  const doingChoose = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    _components_methods__WEBPACK_IMPORTED_MODULE_0__.h3Create(chooseText.doing, "doing-choose-h3"),
    "doing-choose-div"
  );
  const lateChoose = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    _components_methods__WEBPACK_IMPORTED_MODULE_0__.h3Create(chooseText.late, "Late-choose-h3"),
    "Late-choose-div"
  );
  const completedChoose = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    _components_methods__WEBPACK_IMPORTED_MODULE_0__.h3Create(chooseText.completed, "completed-choose-h3"),
    "completed-choose-div"
  );

  const doingWrap = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(doingChoose, "doing-wrap", "wrap-choose");
  const lateWrap = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(lateChoose, "Late-wrap", "wrap-choose");
  const completedWrap = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    completedChoose,
    "completed-wrap",
    "wrap-choose"
  );
  const back = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    "",
    "back-choose",
    "return-text",
    SvgPict().returnIcon
  );

  choose.append(doingWrap, lateWrap, completedWrap, back);

  return choose;
};

const seePage = (id, value) => {
  const chosen = new SeePage(id, value);
  const myPage = chosen.page;
  const myField = chosen.field;
  return { myPage, myField };
};

//

const returnBtn = (value) => {
  const returnBtns = checkPage(src).btnLogic;
  returnBtns.addEventListener("click", () => {
    src.innerHTML = "";
    src.append(value);
    useLoadAndCheck();
  });

  return returnBtns;
};

const errorMess = "Please restart page or contact support!";
const main = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
  _components_methods__WEBPACK_IMPORTED_MODULE_0__.h1Create(errorMess, "error"),
  "main",
  "main"
);
if (navbar() && content()) {
  main.innerHTML = "";
  main.append(navbar(), content());
} else {
  console.error(
    "***  navbar() or content() didn't return expected value!  ***"
  );
}
const chooseS = choosePage();

const seeBtnsLogic = (value, id) => {
  const field = value.children["0"].children["1"];
  const next = checkPage(value).nextBtn;
  const prev = checkPage(value).prevBtn;
  let currId = id;
  next.addEventListener("click", () => {
    useLoadAndCheck();
    if (currId < idGet() - 1) {
      currId += 1;
      field.innerHTML = "";
      const stringNum = currId.toString();
      field.append(seePage(stringNum, "see").myField);
    } else if (currId === idGet() - 1) {
      currId = 0;
      field.innerHTML = "";
      const stringNum = currId.toString();
      field.append(seePage(stringNum, "see").myField);
    }
  });
  prev.addEventListener("click", () => {
    useLoadAndCheck();
    if (currId > 0) {
      currId -= 1;
      field.innerHTML = "";
      const stringNum = currId.toString();
      field.append(seePage(stringNum, "see").myField);
    } else if (currId === 0) {
      currId = idGet() - 1;
      field.innerHTML = "";
      const stringNum = currId.toString();
      field.append(seePage(stringNum, "see").myField);
    }
  });
};

const writeSubmit = (value) => {
  const submit = checkPage(src).submitBtns;
  submit.addEventListener("click", () => {
    const nowId = idGet();
    const input = value.children[0].children["1"].children["0"].children["1"];
    const time = value.children[0].children["1"].children["1"].children["1"];
    const date = value.children[0].children["1"].children["2"].children["1"];
    const completed =
      value.children[0].children["1"].children["3"].children["1"];
    console.log(completed.checked);
    const textA = value.children[0].children["1"].children["4"].children["0"];
    const FirstItem = new NewItem(
      nowId,
      input.value,
      time.value,
      date.value,
      completed.checked,
      textA.value
    );
    localItem(FirstItem, nowId);
    let changeId = parseInt(nowId, 10);
    idSet((changeId += 1));
    useLoadAndCheck();
    lateCheck();
  });
  return submit;
};

const writeLoader = (btn, page, value, returnPage) => {
  if (value.children["0"].id === "choose") {
    let parameter = btn;
    const Loadedpage = checkPage(value).pageBtns[(parameter += "Btns")];
    Loadedpage.addEventListener("click", () => {
      src.innerHTML = "";
      src.append(page);
      returnBtn(returnPage);
      seeBtnsLogic(value, 0);
    });
  }
};

src.append(main);

const addBtn = checkPage(src).btnLogic;
const seeBtn = checkPage(src).writeBtns;

addBtn.addEventListener("click", () => {
  addBtn.innerHTML = SvgPict().plusIcon;
  src.innerHTML = "";
  src.append(writePage());

  useLoadAndCheck();

  writeSubmit(src);
  returnBtn(main);
});

seeBtn.addEventListener("click", () => {
  src.innerHTML = "";
  src.append(chooseS);

  useLoadAndCheck();

  writeLoader("doing", seePage("0", "see").myPage, src, chooseS);
  writeLoader("late", seePage("0", "see").myPage, src, chooseS);
  writeLoader("completed", seePage("0", "see").myPage, src, chooseS);

  returnBtn(main);
});

document.body.appendChild(src);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSw0QkFBNEIsY0FBYyxlQUFlLDJCQUEyQixHQUFHLFdBQVcscUJBQXFCLEdBQUcsZ0JBQWdCLDZCQUE2QixxR0FBcUcsc0JBQXNCLEdBQUcsaUJBQWlCLGlCQUFpQixnQkFBZ0IsbUtBQW1LLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLGtFQUFrRSwyQkFBMkIsZ0NBQWdDLGtCQUFrQixtQ0FBbUMsR0FBRyxlQUFlLHVCQUF1QiwyQkFBMkIsNEJBQTRCLGdCQUFnQixnQkFBZ0IsZUFBZSw0QkFBNEIsd0JBQXdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLGdCQUFnQixpQkFBaUIsR0FBRyxxQkFBcUIseUNBQXlDLEdBQUcsMENBQTBDLGtCQUFrQixzQ0FBc0MsR0FBRyx1QkFBdUIsb0JBQW9CLGVBQWUsaUJBQWlCLHlCQUF5QixrQkFBa0IsMkNBQTJDLDRCQUE0QixHQUFHLGtFQUFrRSxrQkFBa0Isa0JBQWtCLG1DQUFtQyxHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRywwQkFBMEIsaUJBQWlCLGlCQUFpQixHQUFHLDBCQUEwQixnQkFBZ0IsaUJBQWlCLEdBQUcsMEJBQTBCLGlCQUFpQixpQkFBaUIsR0FBRyx3QkFBd0IsdUJBQXVCLGVBQWUsR0FBRyxnQ0FBZ0Msa0JBQWtCLEdBQUcsd0JBQXdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsY0FBYyx5QkFBeUIsaUJBQWlCLGlCQUFpQixrQkFBa0Isa0JBQWtCLEdBQUcsZ0NBQWdDLHdCQUF3QixHQUFHLDJCQUEyQiw2REFBNkQsZ0NBQWdDLDJCQUEyQixpQkFBaUIsZ0JBQWdCLEdBQUcsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGlEQUFpRCxrQkFBa0IsNEJBQTRCLHdCQUF3QixpQkFBaUIsR0FBRyx3QkFBd0IsNEJBQTRCLEdBQUcsMkJBQTJCLGdCQUFnQixrQkFBa0IsNEJBQTRCLEdBQUcsZ0JBQWdCLGtDQUFrQyw0QkFBNEIsd0JBQXdCLGlCQUFpQixpQkFBaUIsdUJBQXVCLEdBQUcsc0JBQXNCLDJCQUEyQixHQUFHLDJCQUEyQiw0REFBNEQsZ0NBQWdDLDJCQUEyQixpQkFBaUIsZ0JBQWdCLEdBQUcsK0JBQStCLDREQUE0RCxnQ0FBZ0MsMkJBQTJCLGlCQUFpQixnQkFBZ0IsR0FBRyx1QkFBdUIsaUJBQWlCLGtCQUFrQiwwQ0FBMEMsMEJBQTBCLHdCQUF3QixHQUFHLGtCQUFrQix1QkFBdUIsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaURBQWlELHdCQUF3QixHQUFHLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLEdBQUcsc0NBQXNDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsd0JBQXdCLDRCQUE0QixpQkFBaUIsaUJBQWlCLHdCQUF3QixrQkFBa0IsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsR0FBRyw4QkFBOEIsaURBQWlELG9CQUFvQixHQUFHLGlCQUFpQiw2REFBNkQsZ0NBQWdDLDJCQUEyQixpQkFBaUIsZ0JBQWdCLEdBQUcsZ0JBQWdCLDREQUE0RCxnQ0FBZ0MsMkJBQTJCLGlCQUFpQixnQkFBZ0IsR0FBRyxxQkFBcUIsNERBQTRELGdDQUFnQywyQkFBMkIsaUJBQWlCLGdCQUFnQixHQUFHLGFBQWEsa0JBQWtCLDBDQUEwQyxHQUFHLG9DQUFvQyxnQkFBZ0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHlCQUF5QixHQUFHLGdEQUFnRCw2QkFBNkIsb0JBQW9CLDBCQUEwQixtQ0FBbUMsdUJBQXVCLEdBQUcsb0JBQW9CLGtCQUFrQixrQ0FBa0MsZUFBZSxpQkFBaUIsR0FBRyxXQUFXLDRCQUE0QixlQUFlLGdCQUFnQix3QkFBd0Isa0JBQWtCLDRCQUE0QixHQUFHLGdCQUFnQiw2QkFBNkIsb0JBQW9CLG1DQUFtQyx3QkFBd0IsaUJBQWlCLHVCQUF1QixHQUFHLGVBQWUsdUJBQXVCLGdCQUFnQixlQUFlLDhCQUE4QixpREFBaUQsMkJBQTJCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsNkJBQTZCLEdBQUcscUJBQXFCLDhCQUE4QixvQkFBb0IsR0FBRyxxQkFBcUIsaUJBQWlCLGdCQUFnQixHQUFHLHFCQUFxQjtBQUNud2Q7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNsQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQWVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0SkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7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Q0E7O0FBRUE7QUFDQSxhQUFhLDBEQUFpQjtBQUM5QixFQUFFLHlEQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9tZXRob2RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ZvbnRzL0RlbWl0aHMtTDNvUloub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9pbmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ltYWdlcy93aWxsLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9uZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1idG4tc2l6ZTogNzBweDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbiAgc3JjOiBsb2NhbChcXFwiRGVtaXRoc1xcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwiT3BlblR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zcmMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMC41ZnIgM2ZyIC8gMWZyO1xcbn1cXG5cXG4uc2VlLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLXNpemUpO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICByaWdodDogMzVweDtcXG4gIHRvcDogMjUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VlLWl0ZW0gPiBzdmcge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5zZWUtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAxNDEsIDE0MSk7XFxufVxcblxcbiNkb2luZyxcXG4jbGF0ZSxcXG4jd3JpdGUsXFxuI2NvbXBsZXRlZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMy41ZnIgMWZyO1xcbn1cXG5cXG4jd3JpdGUgPiBmaWVsZHNldCB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKSAzZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2pOYW1lQ29udGFpbmVyLFxcbi5wcm9qVGltZUNvbnRhaW5lcixcXG4ucHJvakRhdGVDb250YWluZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxufVxcblxcbi5wcm9qTmFtZUNvbnRhaW5lciA+IGxhYmVsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnByb2pEb25lQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzUwcHg7XFxufVxcblxcbi5wcm9qRG9uZUNvbnRhaW5lciA+IGxhYmVsIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qVGV4dENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvalRpbWVDb250YWluZXIgPiBsYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucGFnZS1kb2luZy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JldHVybi10ZXh0IHtcXG4gIHdpZHRoOiB2YXIoLS1idG4tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNyZXR1cm4tdGV4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5wYWdlLXdyaXRlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGFnZS1jb21wbGV0ZWQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jaG9vc2UtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJhY2stY2hvb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDEwcHg7XFxuICB3aWR0aDogNDVweDtcXG4gIGhlaWdodDogNDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5iYWNrLWNob29zZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNob29zZS1jb250YWluZXIgPiAjd3JhcC1jaG9vc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3dyYXAtY2hvb3NlID4gZGl2IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3dyYXAtY2hvb3NlID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAyMjEsIDIyMSwgMC42MjcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZG9pbmctd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uTGF0ZS13cmFwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21wbGV0ZWQtd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4ubmF2YmFyID4gLm5hdmJhci1kaXYtcHJvamVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5uYXZiYXItZGl2LXByb2plY3RzID4gLm5hdmJhci1oMy1wcm9qZWN0cyB7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29udGVudC1jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAyMyU7XFxuICBoZWlnaHQ6IDY3JTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jYXJkID4gaDQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZW1pdGhzXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzVweDtcXG4gIHRvcDogMTQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMTUsIDIwNSwgMjA1LCAwLjc5NSk7XFxuICB3aWR0aDogdmFyKC0tYnRuLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4tc2l6ZSk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVtaXRoc1xcXCI7XFxufVxcblxcbi5hZGQtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkOGQ4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLWl0ZW0gPiBzdmcge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qjs4REFDZ0U7RUFDaEUsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1g7d0VBQ3NFO0FBQ3hFOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQTJEO0VBQzNELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIs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RUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLDRDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1idG4tc2l6ZTogNzBweDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbiAgc3JjOiBsb2NhbChcXFwiRGVtaXRoc1xcXCIpLFxcbiAgICB1cmwoXFxcIi4vY29tcG9uZW50cy9mb250cy9EZW1pdGhzLUwzb1JaLm90ZlxcXCIpIGZvcm1hdChcXFwiT3BlblR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zcmMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2NvbXBvbmVudHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDNmciAvIDFmcjtcXG59XFxuXFxuLnNlZS1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiB2YXIoLS1idG4tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1zaXplKTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgcmlnaHQ6IDM1cHg7XFxuICB0b3A6IDI1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlZS1pdGVtID4gc3ZnIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2VlLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NCwgMTQxLCAxNDEpO1xcbn1cXG5cXG4jZG9pbmcsXFxuI2xhdGUsXFxuI3dyaXRlLFxcbiNjb21wbGV0ZWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDMuNWZyIDFmcjtcXG59XFxuXFxuI3dyaXRlID4gZmllbGRzZXQge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcikgM2ZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qTmFtZUNvbnRhaW5lcixcXG4ucHJvalRpbWVDb250YWluZXIsXFxuLnByb2pEYXRlQ29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4ucHJvak5hbWVDb250YWluZXIgPiBsYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5wcm9qRG9uZUNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDM1MHB4O1xcbn1cXG5cXG4ucHJvakRvbmVDb250YWluZXIgPiBsYWJlbCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvalRleHRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnByb2pUaW1lQ29udGFpbmVyID4gbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLnBhZ2UtZG9pbmctY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2ltYWdlcy9kb2luZy5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JldHVybi10ZXh0IHtcXG4gIHdpZHRoOiB2YXIoLS1idG4tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNyZXR1cm4tdGV4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5wYWdlLXdyaXRlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvd2lsbC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBhZ2UtY29tcGxldGVkLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9uZS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNob29zZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmFjay1jaG9vc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTBweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmJhY2stY2hvb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hvb3NlLWNvbnRhaW5lciA+ICN3cmFwLWNob29zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jd3JhcC1jaG9vc2UgPiBkaXYge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jd3JhcC1jaG9vc2UgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDIyMSwgMjIxLCAwLjYyNyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kb2luZy13cmFwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2ltYWdlcy9kb2luZy5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkxhdGUtd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvd2lsbC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbXBsZXRlZC13cmFwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2ltYWdlcy9kb25lLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4ubmF2YmFyID4gLm5hdmJhci1kaXYtcHJvamVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5uYXZiYXItZGl2LXByb2plY3RzID4gLm5hdmJhci1oMy1wcm9qZWN0cyB7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29udGVudC1jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAyMyU7XFxuICBoZWlnaHQ6IDY3JTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jYXJkID4gaDQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZW1pdGhzXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzVweDtcXG4gIHRvcDogMTQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMTUsIDIwNSwgMjA1LCAwLjc5NSk7XFxuICB3aWR0aDogdmFyKC0tYnRuLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4tc2l6ZSk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVtaXRoc1xcXCI7XFxufVxcblxcbi5hZGQtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkOGQ4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLWl0ZW0gPiBzdmcge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBNYWRlIGJ5IE1yRXBvY2hcblxuLy8gVGhpcyBmaWxlIHdhcyBtYWRlIHRvIGJlIGV4cG9ydGVkIGZvciB1c2UgaW4gb3RoZXIgZmlsZXMsIGl0IGhvbGRzIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGh0bWwgZWxlbWVudHMgaW4gZWFzaWVyIHdheVxuXG4vLyBkaXZDcmVhdGUgZnVuY3Rpb24gZXhwcmVzc2lvbiB0YWtlcyBsaWtlIGZpcnN0IHdoYXQgaXMgaW5zaWRlIGFuZCB0aGVuIGNsYXNzIGFuZCByZXR1cm5zIGRpdiBhdCBlbmRcblxuY29uc3QgbWV0aG9kQ3JlYXRlID0gKGh0bWxOYW1lLCBpbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCwgaW5uZXJIdG1sKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGh0bWxOYW1lKTtcbiAgZWxlbWVudC5hcHBlbmQoaW5zaWRlKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgZWxlbWVudC5pZCA9IGlkQWRkO1xuICB9XG4gIGlmIChpbm5lckh0bWwpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmNvbnN0IGRpdkNyZWF0ZSA9IChJbnNpZGVEaXYsIGNsYXNzQWRkLCBpZEFkZCwgaW5uZXJIdG1sKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5hcHBlbmQoSW5zaWRlRGl2KTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBkaXYuaWQgPSBpZEFkZDtcbiAgfVxuICBpZiAoaW5uZXJIdG1sKSB7XG4gICAgZGl2LmlubmVySFRNTCA9IGlubmVySHRtbDtcbiAgfVxuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgbmF2Q3JlYXRlID0gKEluc2lkZU5hdiwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdi5hcHBlbmQoSW5zaWRlTmF2KTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBuYXYuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gbmF2O1xufTtcblxuLy8gSW1nQ3JlYXRlIGlzIHJldHVybnMgdGFrZXMgSW1wb3J0ZWQgaW1nIGFuZCByZXR1cm5zIGl0IHJlYWR5IGZvciB1c2UgdG8gYXBwZW5kIHRvIHRoZSBkaXYgb3Igb3RoZXIgdXNlXG5cbmNvbnN0IEltZ0NyZWF0ZSA9IChpbWFnZSkgPT4ge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IGltYWdlO1xuICByZXR1cm4gaW1nO1xufTtcblxuLy8gaDJDcmVhdGUgY3JlYXRlcyBoMiBlbGVtZW50IHdoaWNoIHRha2VzIHRleHRDb250ZW50IGFuZCBjbGFzcyBhbmQgcmV0dXJucyBoMlxuXG5jb25zdCBoMUNyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgaDEuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGgxLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGgxO1xufTtcblxuY29uc3QgaDJDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGgyLmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoMi5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoMjtcbn07XG5cbmNvbnN0IGgzQ3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaDMudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBoMy5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgaDMuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gaDM7XG59O1xuXG4vLyBoNENyZWF0ZSBjcmVhdGVzIGg0IGVsZW1lbnQgd2hpY2ggdGFrZXMgdGV4dENvbnRlbnQgYW5kIGNsYXNzIGFuZCByZXR1cm5zIGg0XG5cbmNvbnN0IGg0Q3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgaDQudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBoNC5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgaDQuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gaDQ7XG59O1xuXG5jb25zdCBoNUNyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gIGg1LnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgaDUuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGg1LmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGg1O1xufTtcblxuLy8gcENyZWF0ZSBjcmVhdGVzIHBhcmFncmFocCB3aXRoIGZpcnN0IHBhcmFtZXRlciB0ZXh0IGFuZCBzZWNvbmQgY2xhc3MgYW5kIHJldHVybnMgcGFyYWdyYXBoXG5cbmNvbnN0IHBDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIHAuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIHAuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gcDtcbn07XG5cbmNvbnN0IGlucHV0Q3JlYXRlID0gKHBsYWNlSG9sZGVyLCBjbGFzc0FkZCwgdHlwZSkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZUhvbGRlcjtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuXG4gIHJldHVybiBpbnB1dDtcbn07XG5cbmNvbnN0IGZpZWxkc2V0Q3JlYXRlID0gKEluc2lkZUZpZWxkLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG4gIGZpZWxkLmFwcGVuZChJbnNpZGVGaWVsZCk7XG4gIGZpZWxkLmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBmaWVsZC5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBmaWVsZDtcbn07XG5cbi8vIGV4cG9ydGluZyBhbGwgZnVuY3Rpb24gZXhwcmVzc2lvbnNcblxuZXhwb3J0IHtcbiAgbWV0aG9kQ3JlYXRlLFxuICBkaXZDcmVhdGUsXG4gIG5hdkNyZWF0ZSxcbiAgSW1nQ3JlYXRlLFxuICBoMUNyZWF0ZSxcbiAgaDJDcmVhdGUsXG4gIGgzQ3JlYXRlLFxuICBoNENyZWF0ZSxcbiAgaDVDcmVhdGUsXG4gIHBDcmVhdGUsXG4gIGlucHV0Q3JlYXRlLFxuICBmaWVsZHNldENyZWF0ZSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgbWV0aG9kcyBmcm9tIFwiLi9jb21wb25lbnRzL21ldGhvZHNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvZm9udHMvRGVtaXRocy1MM29SWi5vdGZcIjtcblxuY29uc3Qgc3JjID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJzcmNcIik7XG5cbmNvbnN0IGlkR2V0ID0gKCkgPT4ge1xuICBjb25zdCBpZENhbGxlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSWRcIik7XG4gIHJldHVybiBpZENhbGxlZDtcbn07XG5cbmNvbnN0IGlkU2V0ID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IGlkQ2hhbmdlZCA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiSWRcIiwgYCR7dmFsdWV9YCk7XG4gIHJldHVybiBpZENoYW5nZWQ7XG59O1xuXG5sZXQgYXJyV2l0aExvY2FsID0gW107XG5sZXQgbXlNZWFzdXJlID0gW107XG5cbmNvbnN0IGNoZWNrSWZJZCA9ICgpID0+IHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIklkXCIpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJJZFwiLCBcIjBcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgbG9hZEFyciA9ICgpID0+IHtcbiAgbGV0IGN1cklkID0gcGFyc2VJbnQoaWRHZXQoKSwgMTApO1xuICBpZiAoY2hlY2tJZklkKCkgPT09IHRydWUgJiYgY3VySWQgPiBhcnJXaXRoTG9jYWwubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJJZDsgaSArPSAxKSB7XG4gICAgICBsZXQgbG9jYWxWYWwgPSB7XG4gICAgICAgIG5hbWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBuYW1lLSR7aX1gKSxcbiAgICAgICAgdGltZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRpbWUtJHtpfWApLFxuICAgICAgICBkYXRlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZGF0ZS0ke2l9YCksXG4gICAgICAgIHRleHQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0ZXh0LSR7aX1gKSxcbiAgICAgIH07XG4gICAgICBhcnJXaXRoTG9jYWwucHVzaChsb2NhbFZhbCk7XG4gICAgfVxuICAgIHJldHVybiBhcnJXaXRoTG9jYWw7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgdXNlTG9hZEFuZENoZWNrID0gKCkgPT4ge1xuICBjaGVja0lmSWQoKTtcbiAgbG9hZEFycigpO1xufTtcblxudXNlTG9hZEFuZENoZWNrKCk7XG5jb25zb2xlLmxvZyh0aHJlZVZhbHVlcywgYXJyV2l0aExvY2FsKTtcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBOZXdJdGVtKGl0ZW1JZCwgbmFtZSwgdGltZSwgZGF0ZSwgY29tcGxldGVkLCB0ZXh0KSB7XG4gIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLnRpbWUgPSB0aW1lO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbn1cblxuZnVuY3Rpb24gbG9jYWxJdGVtKGl0ZW1PYmplY3QsIGlkbG9jYWwpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYG5hbWUtJHtpZGxvY2FsfWAsIGl0ZW1PYmplY3QubmFtZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aW1lLSR7aWRsb2NhbH1gLCBpdGVtT2JqZWN0LnRpbWUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgZGF0ZS0ke2lkbG9jYWx9YCwgaXRlbU9iamVjdC5kYXRlKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGNvbXBsZXRlZC0ke2lkbG9jYWx9YCwgaXRlbU9iamVjdC5jb21wbGV0ZWQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGV4dC0ke2lkbG9jYWx9YCwgaXRlbU9iamVjdC50ZXh0KTtcblxuICByZXR1cm4gbG9jYWxTdG9yYWdlO1xufVxuXG5mdW5jdGlvbiBmaW5kSXRlbShpZCwgaXRlbSkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7aXRlbX0tJHtpZH1gKSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBcImVtcHR5XCI7XG4gIH1cblxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7aXRlbX0tJHtpZH1gKTtcbn1cblxuY29uc3QgaXRlbXNDb3VudCA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJJZFwiKTtcbiAgY29uc3QgSW50SWQgPSBwYXJzZUludChjdXJyZW50SWQsIDEwKSArIDE7XG4gIHJldHVybiBJbnRJZDtcbn07XG5cbmZ1bmN0aW9uIExvYWRIKGhUeXBlLCBoVmFsdWUpIHtcbiAgY29uc3QgbG9hZGVySDMgPSBtZXRob2RzLm1ldGhvZENyZWF0ZShoVHlwZSwgaFZhbHVlLCBcImZ1bmN0aW9uLWxvYWRlZC1oM1wiKTtcblxuICByZXR1cm4gbG9hZGVySDM7XG59XG5cbi8vIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuLy8gICAvLyBZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzXG4vLyB9XG4vLyBlbHNlIHtcbi8vICAgLy8gVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1c1xuLy8gfVxuXG4vLyBkYXRlID09PSAwLVllYXIsIDEtbW9udGgsIDItZGF5XG5cbmNvbnN0IGxhdGVDaGVjayA9ICgpID0+IHtcbiAgbGV0IGRhdGVDb250YWluZXIgPSBbXTtcbiAgbGV0IHRpbWVDb250YWluZXIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJXaXRoTG9jYWwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJyV2l0aExvY2FsW2ldLmRhdGUpIHtcbiAgICAgIGNvbnN0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgY3VyWWVhciA9IGN1ckRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IGN1ck1vbnRoID0gY3VyRGF0ZS5nZXRNb250aCgpO1xuICAgICAgY29uc3QgY3VyRGF5ID0gY3VyRGF0ZS5nZXREYXkoKTtcbiAgICAgIGNvbnN0IGN1ckhvdXIgPSBjdXJEYXRlLmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBjdXJNaW51dGUgPSBjdXJEYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgIGRhdGVDb250YWluZXJbaV0gPSBhcnJXaXRoTG9jYWxbaV0uZGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICB0aW1lQ29udGFpbmVyW2ldID0gYXJyV2l0aExvY2FsW2ldLnRpbWUuc3BsaXQoXCI6XCIpO1xuICAgICAgaWYgKGRhdGVDb250YWluZXJbaV1bXCIwXCJdID49IGN1clllYXIpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRhdGVDb250YWluZXJbaV1bXCIxXCJdID49IGN1ck1vbnRoICYmXG4gICAgICAgICAgZGF0ZUNvbnRhaW5lcltpXVtcIjBcIl0gPT09IGN1clllYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lcltpXVtcIjJcIl0gPj0gY3VyRGF5ICYmXG4gICAgICAgICAgICBkYXRlQ29udGFpbmVyW2ldW1wiMVwiXSA9PT0gY3VyTW9udGhcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGltZUNvbnRhaW5lcltpXVtcIjBcIl0gPj0gY3VySG91ciAmJlxuICAgICAgICAgICAgICBkYXRlQ29udGFpbmVyW2ldW1wiMlwiXSA9PT0gY3VyRGF5XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRpbWVDb250YWluZXJbaV1bXCIxXCJdID49IGN1ck1pbnV0ZSAmJlxuICAgICAgICAgICAgICAgIHRpbWVDb250YWluZXJbaV1bXCIwXCJdID09PSBjdXJIb3VyXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGFycldpdGhMb2NhbFtpXS5sYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyV2l0aExvY2FsW2ldLmxhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGFycldpdGhMb2NhbFtpXS5sYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhcnJXaXRoTG9jYWxbaV0ubGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnJXaXRoTG9jYWxbaV0ubGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJXaXRoTG9jYWxbaV0ubGF0ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFycldpdGhMb2NhbFtpXS5sYXRlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyV2l0aExvY2FsW2ldLmxhdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGFycldpdGhMb2NhbFtpXS5sYXRlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJXaXRoTG9jYWxbaV0ubGF0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5sYXRlQ2hlY2soKTtcblxuY29uc3QgYXNzaWduUGxhY2UgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyV2l0aExvY2FsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFycldpdGhMb2NhbFtpXS5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgIGFycldpdGhMb2NhbFtpXS5wbGFjZSA9IFwiY29tcGxldGVkXCI7XG4gICAgfSBlbHNlIGlmIChhcnJXaXRoTG9jYWxbaV0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgaWYgKGFycldpdGhMb2NhbFtpXS5sYXRlID09PSB0cnVlKSB7XG4gICAgICAgIGFycldpdGhMb2NhbFtpXS5wbGFjZSA9IFwibGF0ZVwiO1xuICAgICAgfSBlbHNlIGlmIChhcnJXaXRoTG9jYWxbaV0ubGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYXJyV2l0aExvY2FsW2ldLnBsYWNlID0gXCJkb2luZ1wiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY2hlY2tQYWdlID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmlkO1xuICBsZXQgYnRuTG9naWM7XG4gIGxldCBzdWJtaXRCdG5zO1xuICBsZXQgd3JpdGVCdG5zO1xuICBsZXQgbmV4dEJ0bjtcbiAgbGV0IHByZXZCdG47XG4gIGNvbnN0IHBhZ2VCdG5zID0ge307XG4gIGlmIChjdXJyZW50UGFnZSA9PT0gXCJtYWluXCIpIHtcbiAgICBidG5Mb2dpYyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCIzXCJdO1xuICAgIHdyaXRlQnRucyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCI0XCJdO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSBcImNob29zZVwiKSB7XG4gICAgYnRuTG9naWMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIzXCJdO1xuICAgIHBhZ2VCdG5zLmRvaW5nQnRucyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIwXCJdO1xuICAgIHBhZ2VCdG5zLmxhdGVCdG5zID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMVwiXS5jaGlsZHJlbltcIjBcIl07XG4gICAgcGFnZUJ0bnMuY29tcGxldGVkQnRucyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjJcIl0uY2hpbGRyZW5bXCIwXCJdO1xuICB9IGVsc2UgaWYgKFxuICAgIGN1cnJlbnRQYWdlID09PSBcImRvaW5nXCIgfHxcbiAgICBjdXJyZW50UGFnZSA9PT0gXCJsYXRlXCIgfHxcbiAgICBjdXJyZW50UGFnZSA9PT0gXCJjb21wbGV0ZWRcIiB8fFxuICAgIGN1cnJlbnRQYWdlID09PSBcIndyaXRlXCJcbiAgKSB7XG4gICAgYnRuTG9naWMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIwXCJdO1xuICAgIHN1Ym1pdEJ0bnMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIyXCJdLmNoaWxkcmVuW1wiMFwiXTtcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gXCJzZWVcIikge1xuICAgIGJ0bkxvZ2ljID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMFwiXTtcbiAgICBuZXh0QnRuID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMlwiXS5jaGlsZHJlbltcIjBcIl07XG4gICAgcHJldkJ0biA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjNcIl0uY2hpbGRyZW5bXCIwXCJdO1xuICB9XG5cbiAgcmV0dXJuIHsgYnRuTG9naWMsIHBhZ2VCdG5zLCBzdWJtaXRCdG5zLCB3cml0ZUJ0bnMsIG5leHRCdG4sIHByZXZCdG4gfTtcbn07XG5cbi8vXG5cbmNvbnN0IG5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgbXlOYXZiYXIgPSBtZXRob2RzLm5hdkNyZWF0ZShcIlwiLCBcIm5hdmJhclwiKTtcbiAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBtZXRob2RzLmgzQ3JlYXRlKFwiVG9kb1wiLCBcIm5hdmJhci1oMy1wcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBtZXRob2RzLmRpdkNyZWF0ZShwcm9qZWN0c0hlYWRlciwgXCJuYXZiYXItZGl2LXByb2plY3RzXCIpO1xuICBteU5hdmJhci5hcHBlbmQocHJvamVjdHNEaXYpO1xuXG4gIHJldHVybiBteU5hdmJhcjtcbn07XG5cbmNvbnN0IFN2Z1BpY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHBsdXNJY29uID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNiAyNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1pcIj4gPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuICBjb25zdCByZXR1cm5JY29uID0gYDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjAsMTFWMTNIOEwxMy41LDE4LjVMMTIuMDgsMTkuOTJMNC4xNiwxMkwxMi4wOCw0LjA4TDEzLjUsNS41TDgsMTFIMjBaXCI+IDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuICBjb25zdCB3cml0ZUljb24gPSBgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwXCIgeT1cIjBcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjU2IDI1NlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PHN0eWxlPi5zdDJ7ZmlsbDojNjllYmZjfS5zdDV7ZmlsbDojZDQ3NmUyfS5zdDE0e2ZpbGw6I2VkZDRjMn08L3N0eWxlPjxwYXRoIGQ9XCJNMjA1IDBIMjBjNS41MiAwIDEwLjUyIDIuMjQgMTQuMTQgNS44NlM0MCAxNC40OCA0MCAyMHYyMzZoMTg1VjIwYzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwelwiIHN0eWxlPVwiZmlsbDojZmZlZmU0XCIvPjxwYXRoIGNsYXNzPVwic3QxNFwiIGQ9XCJNNDAgMjUwaDE4NXY2SDQwelwiLz48cGF0aCBkPVwiTTIwNSAwSDIwYzUuNTIgMCAxMC41MiAyLjI0IDE0LjE0IDUuODYuMDQ1LjA0NS4wODMuMDk1LjEyNy4xNEgyMDVjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjB2LTZjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjB6XCIgc3R5bGU9XCJmaWxsOiNmZmY3ZjJcIi8+PHBhdGggZD1cIk0xNDQgNTZINzBhOCA4IDAgMCAxIDAtMTZoNzRhOCA4IDAgMCAxIDAgMTZ6XCIgc3R5bGU9XCJmaWxsOiNmZjgzNTRcIi8+PHBhdGggY2xhc3M9XCJzdDE0XCIgZD1cIk0xODggODRINjZhNCA0IDAgMCAxIDAtOGgxMjJhNCA0IDAgMCAxIDAgOHpNMTg4IDExMS4ySDY2YTQgNCAwIDAgMSAwLThoMTIyYTQgNCAwIDAgMSAwIDh6TTE4OCAxMzguNEg2NmE0IDQgMCAwIDEgMC04aDEyMmE0IDQgMCAwIDEgMCA4ek0xODggMTY1LjZINjZhNCA0IDAgMCAxIDAtOGgxMjJhNCA0IDAgMCAxIDAgOHpNMTg4IDE5Mi44SDY2YTQgNCAwIDAgMSAwLThoMTIyYTQgNCAwIDAgMSAwIDh6TTE0NyAyMjBINjZhNCA0IDAgMCAxIDAtOGg4MWE0IDQgMCAwIDEgMCA4ek00MCAyMHY2MEgwVjIwQzAgOC45NSA4Ljk1IDAgMjAgMGM1LjUyIDAgMTAuNTIgMi4yNCAxNC4xNCA1Ljg2UzQwIDE0LjQ4IDQwIDIwelwiLz48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoMzAgMTczLjQxNyAxNzUuNTY1KVwiIGNsYXNzPVwic3Q1XCIgZD1cIk0xNjMuNDExIDE1MC41NzVoMjB2NTBoLTIwelwiLz48cGF0aCBjbGFzcz1cInN0NVwiIGQ9XCJtMTY5LjU3MSAyMDIuMjI2LTE3LjMyLTEwLTUuNjI1IDI0LjU2N2EyLjcwOCAyLjcwOCAwIDAgMCA0LjQ4MyAyLjU4OWwxOC40NjItMTcuMTU2elwiLz48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoMzAgMjEyLjE2MyAxMDguNDQ3KVwiIGNsYXNzPVwic3QyXCIgZD1cIk0yMDIuMTYxIDU1Ljk1OGgyMHYxMDVoLTIwelwiLz48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoLTE1MCAyNDQuODA3IDc1LjkyKVwiIGNsYXNzPVwic3QyXCIgZD1cIk0yNDIuODAzIDcyLjkyaDR2NmgtNHpcIi8+PHBhdGggY2xhc3M9XCJzdDJcIiBkPVwiTTIyMy45OTkgMTIzLjk1NGE0IDQgMCAwIDAgNS40NjQtMS40NjRsMjYtNDUuMDMzYTQgNCAwIDEgMC02LjkyOC00bC0yNiA0NS4wMzNhNCA0IDAgMCAwIDEuNDY0IDUuNDY0elwiLz48cGF0aCBjbGFzcz1cInN0NVwiIGQ9XCJNMjUwLjkxMSA0MS4zNDFjLTQuNzgzLTIuNzYxLTEwLjg5OS0xLjEyMy0xMy42NiAzLjY2bC03LjUgMTIuOTkgMTcuMzIgMTAgNy41LTEyLjk5YzIuNzYyLTQuNzgyIDEuMTIzLTEwLjg5OC0zLjY2LTEzLjY2elwiPiA8L3BhdGg+PC9zdmc+YDtcblxuICBjb25zdCBub3RlSWNvbiA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPm5vdGUtbXVsdGlwbGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0zLDZWMjJIMjFWMjRIM0EyLDIgMCAwLDEgMSwyMlY2SDNNMTYsOUgyMS41TDE2LDMuNVY5TTcsMkgxN0wyMyw4VjE4QTIsMiAwIDAsMSAyMSwyMEg3QzUuODksMjAgNSwxOS4xIDUsMThWNEEyLDIgMCAwLDEgNywyTTcsNFYxOEgyMVYxMUgxNFY0SDdaXCI+IDwvcGF0aD48L3N2Zz5gO1xuICByZXR1cm4geyBwbHVzSWNvbiwgcmV0dXJuSWNvbiwgd3JpdGVJY29uLCBub3RlSWNvbiB9O1xufTtcblxuY29uc3QgY29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgbXlDb250ZW50ID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJjb250ZW50LWNhcmRzXCIpO1xuICBmdW5jdGlvbiBDYXJkKGg0VGV4dCkge1xuICAgIGNvbnN0IGNhcmREaXYgPSBtZXRob2RzLmRpdkNyZWF0ZShoNFRleHQsIFwiY2FyZFwiKTtcbiAgICByZXR1cm4gY2FyZERpdjtcbiAgfVxuXG4gIGNvbnN0IGNhcmRzSW5uZXIgPSB7XG4gICAgZG9pbmdINDogbWV0aG9kcy5oNENyZWF0ZShcIkRvaW5nXCIsIFwiZG9pbmctY29udGVudFwiKSxcbiAgICBsYXRlSDQ6IG1ldGhvZHMuaDRDcmVhdGUoXCJMYXRlXCIsIFwiTGF0ZS1jb250ZW50XCIpLFxuICAgIGNvbXBsZXRlZEg0OiBtZXRob2RzLmg0Q3JlYXRlKFwiY29tcGxldGVkXCIsIFwiY29tcGxldGVkLWNvbnRlbnRcIiksXG4gIH07XG5cbiAgY29uc3QgZG9pbmcgPSBDYXJkKGNhcmRzSW5uZXIuZG9pbmdINCk7XG4gIGNvbnN0IGxhdGUgPSBDYXJkKGNhcmRzSW5uZXIubGF0ZUg0KTtcbiAgY29uc3QgY29tcGxldGVkID0gQ2FyZChjYXJkc0lubmVyLmNvbXBsZXRlZEg0KTtcblxuICBjb25zdCBhZGQgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcImFkZC1pdGVtXCIsIFwiXCIsIFN2Z1BpY3QoKS5wbHVzSWNvbik7XG4gIGNvbnN0IHNlZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwic2VlLWl0ZW1cIiwgXCJcIiwgU3ZnUGljdCgpLm5vdGVJY29uKTtcblxuICBteUNvbnRlbnQuYXBwZW5kKGRvaW5nLCBsYXRlLCBjb21wbGV0ZWQsIGFkZCwgc2VlKTtcbiAgY29uc3QgYWRkSHRtbCA9IG15Q29udGVudC5jaGlsZHJlbltcIjNcIl07XG5cbiAgYWRkSHRtbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICBhZGRIdG1sLnRleHRDb250ZW50ID0gXCJOZXdcIjtcbiAgfSk7XG5cbiAgYWRkSHRtbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGFkZEh0bWwuaW5uZXJIVE1MID0gU3ZnUGljdCgpLnBsdXNJY29uO1xuICB9KTtcblxuICByZXR1cm4gbXlDb250ZW50O1xufTtcblxuY29uc3QgVG9kb05hbWUgPSAocGFnZU5hbWUpID0+IHtcbiAgY29uc3QgVG9kb05hbWVDb250YWluZXIgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcInByb2pOYW1lQ29udGFpbmVyXCIpO1xuICBjb25zdCBUb2RvTmFtZUxhYmVsID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoXG4gICAgXCJMYWJlbFwiLFxuICAgIFwiVG9kbyBuYW1lXCIsXG4gICAgYGxhYmVsLSR7cGFnZU5hbWV9LW5hbWVgXG4gICk7XG4gIGNvbnN0IFRvZG9OYW1lSW5wdXQgPSBtZXRob2RzLmlucHV0Q3JlYXRlKFxuICAgIFwiTXkgYXdlc29tZSBwcm9qZWN0IVwiLFxuICAgIFwibmFtZS1kb2luZ1wiLFxuICAgIFwidGV4dFwiXG4gICk7XG5cbiAgVG9kb05hbWVDb250YWluZXIuYXBwZW5kKFRvZG9OYW1lTGFiZWwsIFRvZG9OYW1lSW5wdXQpO1xuXG4gIHJldHVybiBUb2RvTmFtZUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IFRvZG9UaW1lID0gKHBhZ2VOYW1lKSA9PiB7XG4gIGNvbnN0IFRvZG9UaW1lQ29udGFpbmVyID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJwcm9qVGltZUNvbnRhaW5lclwiKTtcbiAgY29uc3QgVG9kb1RpbWVMYWJlbCA9IG1ldGhvZHMubWV0aG9kQ3JlYXRlKFxuICAgIFwiTGFiZWxcIixcbiAgICBcIkNvbXBsZXRpb24gVGltZVwiLFxuICAgIGBsYWJlbC0ke3BhZ2VOYW1lfS10aW1lYFxuICApO1xuICBjb25zdCBUb2RvVGltZUlucHV0ID0gbWV0aG9kcy5pbnB1dENyZWF0ZShcIlwiLCBgJHtwYWdlTmFtZX0tdGltZWAsIFwidGltZVwiKTtcblxuICBUb2RvVGltZUNvbnRhaW5lci5hcHBlbmQoVG9kb1RpbWVMYWJlbCwgVG9kb1RpbWVJbnB1dCk7XG5cbiAgcmV0dXJuIFRvZG9UaW1lQ29udGFpbmVyO1xufTtcbmNvbnN0IFRvZG9EYXRlID0gKHBhZ2VOYW1lKSA9PiB7XG4gIGNvbnN0IFRvZG9EYXRlQ29udGFpbmVyID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJwcm9qRGF0ZUNvbnRhaW5lclwiKTtcbiAgY29uc3QgVG9kb0RhdGVMYWJlbCA9IG1ldGhvZHMubWV0aG9kQ3JlYXRlKFxuICAgIFwiTGFiZWxcIixcbiAgICBcIkNvbXBsZXRpb24gZGF0ZVwiLFxuICAgIGBsYWJlbC0ke3BhZ2VOYW1lfS1kYXRlYFxuICApO1xuICBjb25zdCBUb2RvRGF0ZUlucHV0ID0gbWV0aG9kcy5pbnB1dENyZWF0ZShcIlwiLCBgJHtwYWdlTmFtZX0tZGF0ZWAsIFwiZGF0ZVwiKTtcblxuICBUb2RvRGF0ZUNvbnRhaW5lci5hcHBlbmQoVG9kb0RhdGVMYWJlbCwgVG9kb0RhdGVJbnB1dCk7XG5cbiAgcmV0dXJuIFRvZG9EYXRlQ29udGFpbmVyO1xufTtcbmNvbnN0IFRvZG9UZXh0ID0gKHBhZ2VOYW1lKSA9PiB7XG4gIGNvbnN0IFRvZG9UZXh0Q29udGFpbmVyID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJwcm9qVGV4dENvbnRhaW5lclwiKTtcbiAgY29uc3QgVG9kb1RleHRJbnNpZGUgPSBtZXRob2RzLm1ldGhvZENyZWF0ZShcbiAgICBcInRleHRhcmVhXCIsXG4gICAgXCJcIixcbiAgICBgJHtwYWdlTmFtZX0tcHJvalRleHRgXG4gICk7XG5cbiAgVG9kb1RleHRDb250YWluZXIuYXBwZW5kKFRvZG9UZXh0SW5zaWRlKTtcblxuICByZXR1cm4gVG9kb1RleHRDb250YWluZXI7XG59O1xuY29uc3QgVG9kb2NvbXBsZXRlZE9yID0gKHBhZ2VuYW1lKSA9PiB7XG4gIGNvbnN0IFRvZG9jb21wbGV0ZWRDb250YWluZXIgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcInByb2pEb25lQ29udGFpbmVyXCIpO1xuICBjb25zdCBUb2RvY29tcGxldGVkTGFiZWwgPSBtZXRob2RzLm1ldGhvZENyZWF0ZShcIkxhYmVsXCIsIFwiY29tcGxldGVkXCIpO1xuICBjb25zdCBUb2RvY29tcGxldGVkSW5zaWRlID0gbWV0aG9kcy5pbnB1dENyZWF0ZShcIlwiLCBcImRvbmVcIiwgXCJjaGVja2JveFwiKTtcblxuICBUb2RvY29tcGxldGVkQ29udGFpbmVyLmFwcGVuZChUb2RvY29tcGxldGVkTGFiZWwsIFRvZG9jb21wbGV0ZWRJbnNpZGUpO1xuXG4gIHJldHVybiBUb2RvY29tcGxldGVkQ29udGFpbmVyO1xufTtcbmNvbnN0IFRvZG9TdWJtaXQgPSAocGFnZU5hbWUpID0+IHtcbiAgY29uc3Qgc3VibWl0QnRuID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoXG4gICAgXCJidXR0b25cIixcbiAgICBcInN1Ym1pdFwiLFxuICAgIGAke3BhZ2VOYW1lfS1idG5gLFxuICAgIFwic3VibWl0QnRuXCJcbiAgKTtcblxuICBjb25zdCB3cmFwcGVkQnRuID0gbWV0aG9kcy5kaXZDcmVhdGUoc3VibWl0QnRuLCBcInN1Ym1pdC1idG4tY29udGFpbmVyXCIpO1xuXG4gIHJldHVybiB3cmFwcGVkQnRuO1xufTtcblxuZnVuY3Rpb24gV3JpdGluZ1BhZ2VzKHBhZ2VOYW1lKSB7XG4gIHRoaXMucGFnZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgYHBhZ2UtJHtwYWdlTmFtZX0tY29udGFpbmVyYCxcbiAgICBgJHtwYWdlTmFtZX1gXG4gICk7XG4gIHRoaXMuZmllbGQgPSBtZXRob2RzLmZpZWxkc2V0Q3JlYXRlKFwiXCIsIGBmaWVsZC0ke3BhZ2VOYW1lfWApO1xuICB0aGlzLnJldHVybkJ0biA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgYHJldHVybi0ke3BhZ2VOYW1lfWAsXG4gICAgXCJyZXR1cm4tdGV4dFwiLFxuICAgIFN2Z1BpY3QoKS5yZXR1cm5JY29uXG4gICk7XG5cbiAgdGhpcy5maWVsZC5hcHBlbmQoXG4gICAgVG9kb05hbWUoYCR7cGFnZU5hbWV9YCksXG4gICAgVG9kb1RpbWUoYCR7cGFnZU5hbWV9YCksXG4gICAgVG9kb0RhdGUoYCR7cGFnZU5hbWV9YCksXG4gICAgVG9kb2NvbXBsZXRlZE9yKGAke3BhZ2VOYW1lfWApLFxuICAgIFRvZG9UZXh0KGAke3BhZ2VOYW1lfWApXG4gICk7XG4gIHRoaXMucGFnZS5hcHBlbmQodGhpcy5yZXR1cm5CdG4sIHRoaXMuZmllbGQsIFRvZG9TdWJtaXQoYCR7cGFnZU5hbWV9YCkpO1xufVxuXG5mdW5jdGlvbiBTZWVQYWdlKGlkLCB2YWx1ZSkge1xuICB0aGlzLm5hbWVJdGVtID0gZmluZEl0ZW0oaWQsIFwibmFtZVwiKTtcbiAgdGhpcy50aW1lSXRlbSA9IGZpbmRJdGVtKGlkLCBcInRpbWVcIik7XG4gIHRoaXMuZGF0ZUl0ZW0gPSBmaW5kSXRlbShpZCwgXCJkYXRlXCIpO1xuICB0aGlzLnRleHRJdGVtID0gZmluZEl0ZW0oaWQsIFwidGV4dFwiKTtcblxuICB0aGlzLnBhZ2UgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBgcGFnZS0ke3ZhbHVlfWApO1xuICB0aGlzLnBhZ2UuaWQgPSBcInNlZVwiO1xuXG4gIHRoaXMuZmllbGQgPSBtZXRob2RzLmZpZWxkc2V0Q3JlYXRlKFwiXCIsIGBmaWVsZC1SZWApO1xuICB0aGlzLnJldHVybkJ0biA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgYHJldHVybi1SZWAsXG4gICAgXCJyZXR1cm4tdGV4dFwiLFxuICAgIFN2Z1BpY3QoKS5yZXR1cm5JY29uXG4gICk7XG5cbiAgdGhpcy5uZXh0ID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoXCJidXR0b25cIiwgXCJuZXh0XCIsIFwiYnRuLW5leHRcIik7XG4gIHRoaXMucHJldiA9IG1ldGhvZHMubWV0aG9kQ3JlYXRlKFwiYnV0dG9uXCIsIFwicHJldml1c1wiLCBcImJ0bi1wcmV2XCIpO1xuXG4gIHRoaXMubmFtZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKExvYWRIKFwiaDNcIiwgdGhpcy5uYW1lSXRlbSksIFwiaXRlbS1uYW1lXCIpO1xuICB0aGlzLnRpbWUgPSBtZXRob2RzLmRpdkNyZWF0ZShMb2FkSChcImgzXCIsIHRoaXMudGltZUl0ZW0pLCBcIml0ZW0tdGltZVwiKTtcbiAgdGhpcy5kYXRlID0gbWV0aG9kcy5kaXZDcmVhdGUoTG9hZEgoXCJoM1wiLCB0aGlzLmRhdGVJdGVtKSwgXCJpdGVtLWRhdGVcIik7XG4gIHRoaXMudGV4dCA9IG1ldGhvZHMuZGl2Q3JlYXRlKExvYWRIKFwiaDNcIiwgdGhpcy50ZXh0SXRlbSksIFwiaXRlbS10ZXh0XCIpO1xuXG4gIHRoaXMuZmllbGQuYXBwZW5kKHRoaXMubmFtZSwgdGhpcy50aW1lLCB0aGlzLmRhdGUsIHRoaXMudGV4dCk7XG5cbiAgdGhpcy5uZXh0Q29udGFpbmVyID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJidG4tbmV4dC1jb250YWluZXJcIik7XG4gIHRoaXMucHJldkNvbnRhaW5lciA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwiYnRuLXByZXYtY29udGFpbmVyXCIpO1xuXG4gIHRoaXMubmV4dENvbnRhaW5lci5hcHBlbmQodGhpcy5uZXh0KTtcbiAgdGhpcy5wcmV2Q29udGFpbmVyLmFwcGVuZCh0aGlzLnByZXYpO1xuXG4gIHRoaXMucGFnZS5hcHBlbmQoXG4gICAgdGhpcy5yZXR1cm5CdG4sXG4gICAgdGhpcy5maWVsZCxcbiAgICB0aGlzLm5leHRDb250YWluZXIsXG4gICAgdGhpcy5wcmV2Q29udGFpbmVyXG4gICk7XG59XG5cbmNvbnN0IHdyaXRlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgTXlQYWdlID0gbmV3IFdyaXRpbmdQYWdlcyhcIndyaXRlXCIpO1xuICByZXR1cm4gTXlQYWdlLnBhZ2U7XG59O1xuXG5jb25zdCBjaG9vc2VQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjaG9vc2UgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcImNob29zZS1jb250YWluZXJcIiwgXCJjaG9vc2VcIik7XG5cbiAgY29uc3QgY2hvb3NlVGV4dCA9IHtcbiAgICBkb2luZzogXCJEb2luZ1wiLFxuICAgIGxhdGU6IFwiTGF0ZVwiLFxuICAgIGNvbXBsZXRlZDogXCJDb21wbGV0ZWRcIixcbiAgfTtcblxuICBjb25zdCBkb2luZ0Nob29zZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIG1ldGhvZHMuaDNDcmVhdGUoY2hvb3NlVGV4dC5kb2luZywgXCJkb2luZy1jaG9vc2UtaDNcIiksXG4gICAgXCJkb2luZy1jaG9vc2UtZGl2XCJcbiAgKTtcbiAgY29uc3QgbGF0ZUNob29zZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIG1ldGhvZHMuaDNDcmVhdGUoY2hvb3NlVGV4dC5sYXRlLCBcIkxhdGUtY2hvb3NlLWgzXCIpLFxuICAgIFwiTGF0ZS1jaG9vc2UtZGl2XCJcbiAgKTtcbiAgY29uc3QgY29tcGxldGVkQ2hvb3NlID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgbWV0aG9kcy5oM0NyZWF0ZShjaG9vc2VUZXh0LmNvbXBsZXRlZCwgXCJjb21wbGV0ZWQtY2hvb3NlLWgzXCIpLFxuICAgIFwiY29tcGxldGVkLWNob29zZS1kaXZcIlxuICApO1xuXG4gIGNvbnN0IGRvaW5nV3JhcCA9IG1ldGhvZHMuZGl2Q3JlYXRlKGRvaW5nQ2hvb3NlLCBcImRvaW5nLXdyYXBcIiwgXCJ3cmFwLWNob29zZVwiKTtcbiAgY29uc3QgbGF0ZVdyYXAgPSBtZXRob2RzLmRpdkNyZWF0ZShsYXRlQ2hvb3NlLCBcIkxhdGUtd3JhcFwiLCBcIndyYXAtY2hvb3NlXCIpO1xuICBjb25zdCBjb21wbGV0ZWRXcmFwID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgY29tcGxldGVkQ2hvb3NlLFxuICAgIFwiY29tcGxldGVkLXdyYXBcIixcbiAgICBcIndyYXAtY2hvb3NlXCJcbiAgKTtcbiAgY29uc3QgYmFjayA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgXCJiYWNrLWNob29zZVwiLFxuICAgIFwicmV0dXJuLXRleHRcIixcbiAgICBTdmdQaWN0KCkucmV0dXJuSWNvblxuICApO1xuXG4gIGNob29zZS5hcHBlbmQoZG9pbmdXcmFwLCBsYXRlV3JhcCwgY29tcGxldGVkV3JhcCwgYmFjayk7XG5cbiAgcmV0dXJuIGNob29zZTtcbn07XG5cbmNvbnN0IHNlZVBhZ2UgPSAoaWQsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGNob3NlbiA9IG5ldyBTZWVQYWdlKGlkLCB2YWx1ZSk7XG4gIGNvbnN0IG15UGFnZSA9IGNob3Nlbi5wYWdlO1xuICBjb25zdCBteUZpZWxkID0gY2hvc2VuLmZpZWxkO1xuICByZXR1cm4geyBteVBhZ2UsIG15RmllbGQgfTtcbn07XG5cbi8vXG5cbmNvbnN0IHJldHVybkJ0biA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCByZXR1cm5CdG5zID0gY2hlY2tQYWdlKHNyYykuYnRuTG9naWM7XG4gIHJldHVybkJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzcmMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBzcmMuYXBwZW5kKHZhbHVlKTtcbiAgICB1c2VMb2FkQW5kQ2hlY2soKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJldHVybkJ0bnM7XG59O1xuXG5jb25zdCBlcnJvck1lc3MgPSBcIlBsZWFzZSByZXN0YXJ0IHBhZ2Ugb3IgY29udGFjdCBzdXBwb3J0IVwiO1xuY29uc3QgbWFpbiA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICBtZXRob2RzLmgxQ3JlYXRlKGVycm9yTWVzcywgXCJlcnJvclwiKSxcbiAgXCJtYWluXCIsXG4gIFwibWFpblwiXG4pO1xuaWYgKG5hdmJhcigpICYmIGNvbnRlbnQoKSkge1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kKG5hdmJhcigpLCBjb250ZW50KCkpO1xufSBlbHNlIHtcbiAgY29uc29sZS5lcnJvcihcbiAgICBcIioqKiAgbmF2YmFyKCkgb3IgY29udGVudCgpIGRpZG4ndCByZXR1cm4gZXhwZWN0ZWQgdmFsdWUhICAqKipcIlxuICApO1xufVxuY29uc3QgY2hvb3NlUyA9IGNob29zZVBhZ2UoKTtcblxuY29uc3Qgc2VlQnRuc0xvZ2ljID0gKHZhbHVlLCBpZCkgPT4ge1xuICBjb25zdCBmaWVsZCA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjFcIl07XG4gIGNvbnN0IG5leHQgPSBjaGVja1BhZ2UodmFsdWUpLm5leHRCdG47XG4gIGNvbnN0IHByZXYgPSBjaGVja1BhZ2UodmFsdWUpLnByZXZCdG47XG4gIGxldCBjdXJySWQgPSBpZDtcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVzZUxvYWRBbmRDaGVjaygpO1xuICAgIGlmIChjdXJySWQgPCBpZEdldCgpIC0gMSkge1xuICAgICAgY3VycklkICs9IDE7XG4gICAgICBmaWVsZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3Qgc3RyaW5nTnVtID0gY3VycklkLnRvU3RyaW5nKCk7XG4gICAgICBmaWVsZC5hcHBlbmQoc2VlUGFnZShzdHJpbmdOdW0sIFwic2VlXCIpLm15RmllbGQpO1xuICAgIH0gZWxzZSBpZiAoY3VycklkID09PSBpZEdldCgpIC0gMSkge1xuICAgICAgY3VycklkID0gMDtcbiAgICAgIGZpZWxkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBzdHJpbmdOdW0gPSBjdXJySWQudG9TdHJpbmcoKTtcbiAgICAgIGZpZWxkLmFwcGVuZChzZWVQYWdlKHN0cmluZ051bSwgXCJzZWVcIikubXlGaWVsZCk7XG4gICAgfVxuICB9KTtcbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVzZUxvYWRBbmRDaGVjaygpO1xuICAgIGlmIChjdXJySWQgPiAwKSB7XG4gICAgICBjdXJySWQgLT0gMTtcbiAgICAgIGZpZWxkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBzdHJpbmdOdW0gPSBjdXJySWQudG9TdHJpbmcoKTtcbiAgICAgIGZpZWxkLmFwcGVuZChzZWVQYWdlKHN0cmluZ051bSwgXCJzZWVcIikubXlGaWVsZCk7XG4gICAgfSBlbHNlIGlmIChjdXJySWQgPT09IDApIHtcbiAgICAgIGN1cnJJZCA9IGlkR2V0KCkgLSAxO1xuICAgICAgZmllbGQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IHN0cmluZ051bSA9IGN1cnJJZC50b1N0cmluZygpO1xuICAgICAgZmllbGQuYXBwZW5kKHNlZVBhZ2Uoc3RyaW5nTnVtLCBcInNlZVwiKS5teUZpZWxkKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgd3JpdGVTdWJtaXQgPSAodmFsdWUpID0+IHtcbiAgY29uc3Qgc3VibWl0ID0gY2hlY2tQYWdlKHNyYykuc3VibWl0QnRucztcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgbm93SWQgPSBpZEdldCgpO1xuICAgIGNvbnN0IGlucHV0ID0gdmFsdWUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjFcIl07XG4gICAgY29uc3QgdGltZSA9IHZhbHVlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW1wiMVwiXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCIxXCJdO1xuICAgIGNvbnN0IGRhdGUgPSB2YWx1ZS5jaGlsZHJlblswXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCIyXCJdLmNoaWxkcmVuW1wiMVwiXTtcbiAgICBjb25zdCBjb21wbGV0ZWQgPVxuICAgICAgdmFsdWUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiM1wiXS5jaGlsZHJlbltcIjFcIl07XG4gICAgY29uc29sZS5sb2coY29tcGxldGVkLmNoZWNrZWQpO1xuICAgIGNvbnN0IHRleHRBID0gdmFsdWUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiNFwiXS5jaGlsZHJlbltcIjBcIl07XG4gICAgY29uc3QgRmlyc3RJdGVtID0gbmV3IE5ld0l0ZW0oXG4gICAgICBub3dJZCxcbiAgICAgIGlucHV0LnZhbHVlLFxuICAgICAgdGltZS52YWx1ZSxcbiAgICAgIGRhdGUudmFsdWUsXG4gICAgICBjb21wbGV0ZWQuY2hlY2tlZCxcbiAgICAgIHRleHRBLnZhbHVlXG4gICAgKTtcbiAgICBsb2NhbEl0ZW0oRmlyc3RJdGVtLCBub3dJZCk7XG4gICAgbGV0IGNoYW5nZUlkID0gcGFyc2VJbnQobm93SWQsIDEwKTtcbiAgICBpZFNldCgoY2hhbmdlSWQgKz0gMSkpO1xuICAgIHVzZUxvYWRBbmRDaGVjaygpO1xuICAgIGxhdGVDaGVjaygpO1xuICB9KTtcbiAgcmV0dXJuIHN1Ym1pdDtcbn07XG5cbmNvbnN0IHdyaXRlTG9hZGVyID0gKGJ0biwgcGFnZSwgdmFsdWUsIHJldHVyblBhZ2UpID0+IHtcbiAgaWYgKHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5pZCA9PT0gXCJjaG9vc2VcIikge1xuICAgIGxldCBwYXJhbWV0ZXIgPSBidG47XG4gICAgY29uc3QgTG9hZGVkcGFnZSA9IGNoZWNrUGFnZSh2YWx1ZSkucGFnZUJ0bnNbKHBhcmFtZXRlciArPSBcIkJ0bnNcIildO1xuICAgIExvYWRlZHBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNyYy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgc3JjLmFwcGVuZChwYWdlKTtcbiAgICAgIHJldHVybkJ0bihyZXR1cm5QYWdlKTtcbiAgICAgIHNlZUJ0bnNMb2dpYyh2YWx1ZSwgMCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbnNyYy5hcHBlbmQobWFpbik7XG5cbmNvbnN0IGFkZEJ0biA9IGNoZWNrUGFnZShzcmMpLmJ0bkxvZ2ljO1xuY29uc3Qgc2VlQnRuID0gY2hlY2tQYWdlKHNyYykud3JpdGVCdG5zO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkQnRuLmlubmVySFRNTCA9IFN2Z1BpY3QoKS5wbHVzSWNvbjtcbiAgc3JjLmlubmVySFRNTCA9IFwiXCI7XG4gIHNyYy5hcHBlbmQod3JpdGVQYWdlKCkpO1xuXG4gIHVzZUxvYWRBbmRDaGVjaygpO1xuXG4gIHdyaXRlU3VibWl0KHNyYyk7XG4gIHJldHVybkJ0bihtYWluKTtcbn0pO1xuXG5zZWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3JjLmlubmVySFRNTCA9IFwiXCI7XG4gIHNyYy5hcHBlbmQoY2hvb3NlUyk7XG5cbiAgdXNlTG9hZEFuZENoZWNrKCk7XG5cbiAgd3JpdGVMb2FkZXIoXCJkb2luZ1wiLCBzZWVQYWdlKFwiMFwiLCBcInNlZVwiKS5teVBhZ2UsIHNyYywgY2hvb3NlUyk7XG4gIHdyaXRlTG9hZGVyKFwibGF0ZVwiLCBzZWVQYWdlKFwiMFwiLCBcInNlZVwiKS5teVBhZ2UsIHNyYywgY2hvb3NlUyk7XG4gIHdyaXRlTG9hZGVyKFwiY29tcGxldGVkXCIsIHNlZVBhZ2UoXCIwXCIsIFwic2VlXCIpLm15UGFnZSwgc3JjLCBjaG9vc2VTKTtcblxuICByZXR1cm5CdG4obWFpbik7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcmMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9