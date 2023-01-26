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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --btn-size: 70px;\n}\n\n@font-face {\n  font-family: \"Demiths\";\n  src: local(\"Demiths\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"OpenType\");\n  font-weight: bold;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.src {\n  width: 100%;\n  height: 100%;\n}\n\n.main {\n  width: 100%;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  grid-template: 0.5fr 3fr / 1fr;\n}\n\n.see-item {\n  position: absolute;\n  width: var(--btn-size);\n  height: var(--btn-size);\n  right: 10px;\n  right: 35px;\n  top: 250px;\n  background-color: white;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.see-item > svg {\n  width: 40px;\n  height: 40px;\n}\n\n.see-item:hover {\n  background-color: rgb(144, 141, 141);\n}\n\n#doing,\n#late,\n#write,\n#completed {\n  display: grid;\n  grid-template-rows: 1fr 3.5fr 1fr;\n}\n\n#write > fieldset {\n  grid-row: 2 / 3;\n  width: 40%;\n  height: 100%;\n  justify-self: center;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr) 3fr;\n  background-color: white;\n}\n\n.projNameContainer,\n.projTimeContainer,\n.projDateContainer {\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n\n.projNameContainer > label {\n  padding-right: 30px;\n}\n\ninput[type=\"text\"] {\n  width: 250px;\n  height: 30px;\n}\n\ninput[type=\"time\"] {\n  width: 80px;\n  height: 30px;\n}\n\ninput[type=\"date\"] {\n  width: 120px;\n  height: 30px;\n}\n\n.projDoneContainer {\n  position: absolute;\n  top: 350px;\n}\n\n.projDoneContainer > label {\n  padding: 10px;\n}\n\n.projTextContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  justify-self: center;\n  resize: none;\n  width: 420px;\n  height: 180px;\n  padding: 10px;\n}\n\n.projTimeContainer > label {\n  padding-right: 30px;\n}\n\n.page-doing-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n#return-text {\n  width: var(--btn-size);\n  height: var(--btn-size);\n  border-radius: 50px;\n  background-color: rgba(255, 255, 255, 0.548);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n}\n\n#return-text:hover {\n  background-color: white;\n}\n\n.submit-btn-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#submitBtn {\n  background-color: transparent;\n  border: 3px solid black;\n  border-radius: 10px;\n  width: 120px;\n  height: 40px;\n  align-self: center;\n}\n\n#submitBtn:hover {\n  background-color: grey;\n}\n\n.page-write-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.page-completed-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.choose-container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  align-items: center;\n}\n\n.back-choose {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.552);\n  border-radius: 50px;\n}\n\n.back-choose:hover {\n  background-color: white;\n  cursor: pointer;\n}\n\n.choose-container > #wrap-choose {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#wrap-choose > div {\n  border: 2px solid black;\n  width: 160px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.item-name,\n.item-time,\n.item-date,\n.item-text {\n  display: flex;\n  padding: 5px;\n}\n\n.item-name > h3,\n.item-time > h3,\n.item-date > h3,\n.item-text > h3 {\n  padding-left: 15px;\n}\n\n#wrap-choose > div:hover {\n  background-color: rgba(224, 221, 221, 0.627);\n  cursor: pointer;\n}\n\n.doing-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.Late-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.completed-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.navbar > .navbar-div-projects {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 15px;\n}\n\n.navbar-div-projects > .navbar-h3-projects {\n  font-family: \"Demiths\";\n  font-size: 24px;\n  letter-spacing: 0.7px;\n  border-bottom: 2px solid black;\n  border-radius: 5px;\n}\n\n.content-cards {\n  display: flex;\n  justify-content: space-around;\n  width: 90%;\n  height: 100%;\n}\n\n.card {\n  background-color: white;\n  width: 23%;\n  height: 67%;\n  border-radius: 25px;\n  padding: 20px;\n  border: 2px solid black;\n}\n\n.card > h4 {\n  font-family: \"Demiths\";\n  font-size: 15px;\n  border-bottom: 2px solid black;\n  border-radius: 10px;\n  width: 100px;\n  text-align: center;\n}\n\n.add-item {\n  position: absolute;\n  right: 35px;\n  top: 140px;\n  background-color: #fafafa;\n  border: 2px solid rgba(215, 205, 205, 0.795);\n  width: var(--btn-size);\n  height: var(--btn-size);\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Demiths\";\n}\n\n.add-item:hover {\n  background-color: #ded8d8;\n  cursor: pointer;\n}\n\n.add-item > svg {\n  height: 50px;\n  width: 50px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --btn-size: 70px;\n}\n\n@font-face {\n  font-family: \"Demiths\";\n  src: local(\"Demiths\"),\n    url(\"./components/fonts/Demiths-L3oRZ.otf\") format(\"OpenType\");\n  font-weight: bold;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.src {\n  width: 100%;\n  height: 100%;\n}\n\n.main {\n  width: 100%;\n  height: 100%;\n  background-image: url(\"./components/images/background.jpg\");\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  grid-template: 0.5fr 3fr / 1fr;\n}\n\n.see-item {\n  position: absolute;\n  width: var(--btn-size);\n  height: var(--btn-size);\n  right: 10px;\n  right: 35px;\n  top: 250px;\n  background-color: white;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.see-item > svg {\n  width: 40px;\n  height: 40px;\n}\n\n.see-item:hover {\n  background-color: rgb(144, 141, 141);\n}\n\n#doing,\n#late,\n#write,\n#completed {\n  display: grid;\n  grid-template-rows: 1fr 3.5fr 1fr;\n}\n\n#write > fieldset {\n  grid-row: 2 / 3;\n  width: 40%;\n  height: 100%;\n  justify-self: center;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr) 3fr;\n  background-color: white;\n}\n\n.projNameContainer,\n.projTimeContainer,\n.projDateContainer {\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n\n.projNameContainer > label {\n  padding-right: 30px;\n}\n\ninput[type=\"text\"] {\n  width: 250px;\n  height: 30px;\n}\n\ninput[type=\"time\"] {\n  width: 80px;\n  height: 30px;\n}\n\ninput[type=\"date\"] {\n  width: 120px;\n  height: 30px;\n}\n\n.projDoneContainer {\n  position: absolute;\n  top: 350px;\n}\n\n.projDoneContainer > label {\n  padding: 10px;\n}\n\n.projTextContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  justify-self: center;\n  resize: none;\n  width: 420px;\n  height: 180px;\n  padding: 10px;\n}\n\n.projTimeContainer > label {\n  padding-right: 30px;\n}\n\n.page-doing-container {\n  background-image: url(\"./components/images/doing.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n#return-text {\n  width: var(--btn-size);\n  height: var(--btn-size);\n  border-radius: 50px;\n  background-color: rgba(255, 255, 255, 0.548);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n}\n\n#return-text:hover {\n  background-color: white;\n}\n\n.submit-btn-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#submitBtn {\n  background-color: transparent;\n  border: 3px solid black;\n  border-radius: 10px;\n  width: 120px;\n  height: 40px;\n  align-self: center;\n}\n\n#submitBtn:hover {\n  background-color: grey;\n}\n\n.page-write-container {\n  background-image: url(\"./components/images/will.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.page-completed-container {\n  background-image: url(\"./components/images/done.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.choose-container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  align-items: center;\n}\n\n.back-choose {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.552);\n  border-radius: 50px;\n}\n\n.back-choose:hover {\n  background-color: white;\n  cursor: pointer;\n}\n\n.choose-container > #wrap-choose {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#wrap-choose > div {\n  border: 2px solid black;\n  width: 160px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.item-name,\n.item-time,\n.item-date,\n.item-text {\n  display: flex;\n  padding: 5px;\n}\n\n.item-name > h3,\n.item-time > h3,\n.item-date > h3,\n.item-text > h3 {\n  padding-left: 15px;\n}\n\n#wrap-choose > div:hover {\n  background-color: rgba(224, 221, 221, 0.627);\n  cursor: pointer;\n}\n\n.doing-wrap {\n  background-image: url(\"./components/images/doing.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.Late-wrap {\n  background-image: url(\"./components/images/will.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.completed-wrap {\n  background-image: url(\"./components/images/done.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.navbar > .navbar-div-projects {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 15px;\n}\n\n.navbar-div-projects > .navbar-h3-projects {\n  font-family: \"Demiths\";\n  font-size: 24px;\n  letter-spacing: 0.7px;\n  border-bottom: 2px solid black;\n  border-radius: 5px;\n}\n\n.content-cards {\n  display: flex;\n  justify-content: space-around;\n  width: 90%;\n  height: 100%;\n}\n\n.card {\n  background-color: white;\n  width: 23%;\n  height: 67%;\n  border-radius: 25px;\n  padding: 20px;\n  border: 2px solid black;\n}\n\n.card > h4 {\n  font-family: \"Demiths\";\n  font-size: 15px;\n  border-bottom: 2px solid black;\n  border-radius: 10px;\n  width: 100px;\n  text-align: center;\n}\n\n.add-item {\n  position: absolute;\n  right: 35px;\n  top: 140px;\n  background-color: #fafafa;\n  border: 2px solid rgba(215, 205, 205, 0.795);\n  width: var(--btn-size);\n  height: var(--btn-size);\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Demiths\";\n}\n\n.add-item:hover {\n  background-color: #ded8d8;\n  cursor: pointer;\n}\n\n.add-item > svg {\n  height: 50px;\n  width: 50px;\n}\n"],"sourceRoot":""}]);
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

const idArr = [];

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

const requestItem = (id, item) => {
  if (!localStorage.getItem(`${id}`)) {
    return "empty";
  }
  const itemsObject = JSON.parse(localStorage.getItem(`${id}`));
  if (!itemsObject[item]) {
    return "empty";
  }
  const requestedItem = itemsObject[item];
  return requestedItem;
};

const loadArr = () => {
  const curId = parseInt(idGet(), 10);
  if (checkIfId() === true && curId > arrWithLocal.length) {
    for (let i = 0; i < curId; i += 1) {
      const localVal = {
        name: requestItem(i.toString(), "name"),
        time: requestItem(i.toString(), "time"),
        date: requestItem(i.toString(), "date"),
        text: requestItem(i.toString(), "text"),
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

function NewItem(name, time, date, completed, text) {
  this.name = name;
  this.time = time;
  this.date = date;
  this.completed = completed;
  this.text = text;
}

function localItem(itemObject, id) {
  localStorage.setItem(`${id}`, JSON.stringify(itemObject));
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
  const dateContainer = [];
  const timeContainer = [];
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

assignPlace();

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

const myType = (id) => {
  const myComplete = requestItem(id, "complete");
  const myLate = requestItem(id, "complete");

  if (myComplete === true) {
    return "completed";
  }
  if (myLate === true) {
    return "late";
  }

  return "doing";
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

const doingArr = [];
const lateArr = [];
const completedArr = [];

const returnType = () => {
  if (!arrWithLocal.length === 0) {
    for (let i = 0; i < arrWithLocal.length; i += 1) {
      if (arrWithLocal[i].place === "doing") {
        doingArr.push(arrWithLocal[i]);
      }
      if (arrWithLocal[i].place === "late") {
        lateArr.push(arrWithLocal[i]);
      }
      if (arrWithLocal[i].place === "completed") {
        completedArr.push(arrWithLocal[i]);
      }
    }
  }
};

returnType();

function SeePage(id, value, page) {
  this.nameItem = requestItem(id, "name");
  this.timeItem = requestItem(id, "time");
  this.dateItem = requestItem(id, "date");
  this.textItem = requestItem(id, "text");

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

  this.name = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("Name:", "item-name");
  this.name.append(LoadH("h3", this.nameItem));
  this.time = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("Time:", "item-time");
  this.time.append(LoadH("h3", this.timeItem));
  this.date = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("Date:", "item-date");
  this.date.append(LoadH("h3", this.dateItem));
  this.text = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("Text:", "item-text");
  this.text.append(LoadH("h3", this.textItem));

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

const seePage = (id, value, page) => {
  const chosen = new SeePage(id, value, page);
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
    const textA = value.children[0].children["1"].children["4"].children["0"];
    const Item = new NewItem(
      input.value,
      time.value,
      date.value,
      completed.checked,
      textA.value
    );
    localItem(Item, nowId);
    let changeId = parseInt(nowId, 10);
    idSet((changeId += 1));
    useLoadAndCheck();
    lateCheck();
    assignPlace();
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

  writeLoader("doing", seePage("0", "see", "doing").myPage, src, chooseS);
  writeLoader("late", seePage("0", "see", "late").myPage, src, chooseS);
  writeLoader(
    "completed",
    seePage("0", "see", "completed").myPage,
    src,
    chooseS
  );

  returnBtn(main);
});

document.body.appendChild(src);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLFVBQVUsVUFBVSxNQUFNLFFBQVEsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBZUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RKRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQzNCO0FBQ3lCOztBQUU5QyxZQUFZLDBEQUFpQjs7QUFFN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsTUFBTTtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsR0FBRztBQUNsQztBQUNBO0FBQ0EseURBQXlELEdBQUc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixHQUFHO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsNkRBQW9COztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CLDBEQUFpQjtBQUNwQyx5QkFBeUIseURBQWdCO0FBQ3pDLHNCQUFzQiwwREFBaUI7QUFDdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EscU1BQXFNLGFBQWEsS0FBSyxhQUFhLE1BQU0sYUFBYTs7QUFFdlA7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxvQkFBb0IsMERBQWlCO0FBQ3JDO0FBQ0Esb0JBQW9CLDBEQUFpQjtBQUNyQztBQUNBOztBQUVBO0FBQ0EsYUFBYSx5REFBZ0I7QUFDN0IsWUFBWSx5REFBZ0I7QUFDNUIsaUJBQWlCLHlEQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYywwREFBaUI7QUFDL0IsY0FBYywwREFBaUI7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QiwwREFBaUI7QUFDN0Msd0JBQXdCLDZEQUFvQjtBQUM1QztBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0Esd0JBQXdCLDREQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDBEQUFpQjtBQUM3Qyx3QkFBd0IsNkRBQW9CO0FBQzVDO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQSx3QkFBd0IsNERBQW1CLFFBQVEsU0FBUzs7QUFFNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBEQUFpQjtBQUM3Qyx3QkFBd0IsNkRBQW9CO0FBQzVDO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQSx3QkFBd0IsNERBQW1CLFFBQVEsU0FBUzs7QUFFNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBEQUFpQjtBQUM3Qyx5QkFBeUIsNkRBQW9CO0FBQzdDO0FBQ0E7QUFDQSxPQUFPLFNBQVM7QUFDaEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDBEQUFpQjtBQUNsRCw2QkFBNkIsNkRBQW9CO0FBQ2pELDhCQUE4Qiw0REFBbUI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2REFBb0I7QUFDeEM7QUFDQTtBQUNBLE9BQU8sU0FBUztBQUNoQjtBQUNBOztBQUVBLHFCQUFxQiwwREFBaUI7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDBEQUFpQjtBQUMvQjtBQUNBLFlBQVksU0FBUztBQUNyQixPQUFPLFNBQVM7QUFDaEI7QUFDQSxlQUFlLCtEQUFzQixjQUFjLFNBQVM7QUFDNUQsbUJBQW1CLDBEQUFpQjtBQUNwQztBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsU0FBUztBQUN6Qix1QkFBdUIsU0FBUztBQUNoQyxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBLDZEQUE2RCxTQUFTO0FBQ3RFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDBEQUFpQixhQUFhLE1BQU07QUFDbEQ7O0FBRUEsZUFBZSwrREFBc0I7QUFDckMsbUJBQW1CLDBEQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsNkRBQW9CO0FBQ2xDLGNBQWMsNkRBQW9COztBQUVsQyxjQUFjLDBEQUFpQjtBQUMvQjtBQUNBLGNBQWMsMERBQWlCO0FBQy9CO0FBQ0EsY0FBYywwREFBaUI7QUFDL0I7QUFDQSxjQUFjLDBEQUFpQjtBQUMvQjs7QUFFQTs7QUFFQSx1QkFBdUIsMERBQWlCO0FBQ3hDLHVCQUF1QiwwREFBaUI7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMERBQWlCOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiwwREFBaUI7QUFDdkMsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQTtBQUNBLHFCQUFxQiwwREFBaUI7QUFDdEMsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQTtBQUNBLDBCQUEwQiwwREFBaUI7QUFDM0MsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQTs7QUFFQSxvQkFBb0IsMERBQWlCO0FBQ3JDLG1CQUFtQiwwREFBaUI7QUFDcEMsd0JBQXdCLDBEQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMERBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDBEQUFpQjtBQUM5QixFQUFFLHlEQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2NvbXBvbmVudHMvZm9udHMvRGVtaXRocy1MM29SWi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2NvbXBvbmVudHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ltYWdlcy9kb2luZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2NvbXBvbmVudHMvaW1hZ2VzL3dpbGwuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ltYWdlcy9kb25lLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJ0bi1zaXplOiA3MHB4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVtaXRoc1xcXCI7XFxuICBzcmM6IGxvY2FsKFxcXCJEZW1pdGhzXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJPcGVuVHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNyYyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAwLjVmciAzZnIgLyAxZnI7XFxufVxcblxcbi5zZWUtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogdmFyKC0tYnRuLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4tc2l6ZSk7XFxuICByaWdodDogMTBweDtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgdG9wOiAyNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWUtaXRlbSA+IHN2ZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLnNlZS1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDE0MSwgMTQxKTtcXG59XFxuXFxuI2RvaW5nLFxcbiNsYXRlLFxcbiN3cml0ZSxcXG4jY29tcGxldGVkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzLjVmciAxZnI7XFxufVxcblxcbiN3cml0ZSA+IGZpZWxkc2V0IHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpIDNmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvak5hbWVDb250YWluZXIsXFxuLnByb2pUaW1lQ29udGFpbmVyLFxcbi5wcm9qRGF0ZUNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG59XFxuXFxuLnByb2pOYW1lQ29udGFpbmVyID4gbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucHJvakRvbmVDb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzNTBweDtcXG59XFxuXFxuLnByb2pEb25lQ29udGFpbmVyID4gbGFiZWwge1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnByb2pUZXh0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qVGltZUNvbnRhaW5lciA+IGxhYmVsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5wYWdlLWRvaW5nLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcmV0dXJuLXRleHQge1xcbiAgd2lkdGg6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLXNpemUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3JldHVybi10ZXh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3VibWl0LWJ0bi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzdWJtaXRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNzdWJtaXRCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnBhZ2Utd3JpdGUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wYWdlLWNvbXBsZXRlZC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNob29zZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmFjay1jaG9vc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTBweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmJhY2stY2hvb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hvb3NlLWNvbnRhaW5lciA+ICN3cmFwLWNob29zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jd3JhcC1jaG9vc2UgPiBkaXYge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaXRlbS1uYW1lLFxcbi5pdGVtLXRpbWUsXFxuLml0ZW0tZGF0ZSxcXG4uaXRlbS10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pdGVtLW5hbWUgPiBoMyxcXG4uaXRlbS10aW1lID4gaDMsXFxuLml0ZW0tZGF0ZSA+IGgzLFxcbi5pdGVtLXRleHQgPiBoMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbiN3cmFwLWNob29zZSA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjIxLCAyMjEsIDAuNjI3KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRvaW5nLXdyYXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkxhdGUtd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29tcGxldGVkLXdyYXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLm5hdmJhciA+IC5uYXZiYXItZGl2LXByb2plY3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubmF2YmFyLWRpdi1wcm9qZWN0cyA+IC5uYXZiYXItaDMtcHJvamVjdHMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZW1pdGhzXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbnRlbnQtY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjMlO1xcbiAgaGVpZ2h0OiA2NyU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2FyZCA+IGg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVtaXRoc1xcXCI7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDM1cHg7XFxuICB0b3A6IDE0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjE1LCAyMDUsIDIwNSwgMC43OTUpO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLXNpemUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbn1cXG5cXG4uYWRkLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZDhkODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1pdGVtID4gc3ZnIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEI7OERBQ2dFO0VBQ2hFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYO3dFQUNzRTtBQUN4RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUEyRDtFQUMzRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7OztFQUlFLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0Qyx1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7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RUFDekIsNENBQTRDO0VBQzVDLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJ0bi1zaXplOiA3MHB4O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVtaXRoc1xcXCI7XFxuICBzcmM6IGxvY2FsKFxcXCJEZW1pdGhzXFxcIiksXFxuICAgIHVybChcXFwiLi9jb21wb25lbnRzL2ZvbnRzL0RlbWl0aHMtTDNvUloub3RmXFxcIikgZm9ybWF0KFxcXCJPcGVuVHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNyYyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMC41ZnIgM2ZyIC8gMWZyO1xcbn1cXG5cXG4uc2VlLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLXNpemUpO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICByaWdodDogMzVweDtcXG4gIHRvcDogMjUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VlLWl0ZW0gPiBzdmcge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5zZWUtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAxNDEsIDE0MSk7XFxufVxcblxcbiNkb2luZyxcXG4jbGF0ZSxcXG4jd3JpdGUsXFxuI2NvbXBsZXRlZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMy41ZnIgMWZyO1xcbn1cXG5cXG4jd3JpdGUgPiBmaWVsZHNldCB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKSAzZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2pOYW1lQ29udGFpbmVyLFxcbi5wcm9qVGltZUNvbnRhaW5lcixcXG4ucHJvakRhdGVDb250YWluZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxufVxcblxcbi5wcm9qTmFtZUNvbnRhaW5lciA+IGxhYmVsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnByb2pEb25lQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzUwcHg7XFxufVxcblxcbi5wcm9qRG9uZUNvbnRhaW5lciA+IGxhYmVsIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qVGV4dENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvalRpbWVDb250YWluZXIgPiBsYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucGFnZS1kb2luZy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2NvbXBvbmVudHMvaW1hZ2VzL2RvaW5nLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcmV0dXJuLXRleHQge1xcbiAgd2lkdGg6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLXNpemUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3JldHVybi10ZXh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3VibWl0LWJ0bi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzdWJtaXRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNzdWJtaXRCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnBhZ2Utd3JpdGUtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2ltYWdlcy93aWxsLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGFnZS1jb21wbGV0ZWQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2ltYWdlcy9kb25lLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hvb3NlLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5iYWNrLWNob29zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAxMHB4O1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1Mik7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uYmFjay1jaG9vc2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaG9vc2UtY29udGFpbmVyID4gI3dyYXAtY2hvb3NlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN3cmFwLWNob29zZSA+IGRpdiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5pdGVtLW5hbWUsXFxuLml0ZW0tdGltZSxcXG4uaXRlbS1kYXRlLFxcbi5pdGVtLXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLml0ZW0tbmFtZSA+IGgzLFxcbi5pdGVtLXRpbWUgPiBoMyxcXG4uaXRlbS1kYXRlID4gaDMsXFxuLml0ZW0tdGV4dCA+IGgzIHtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuI3dyYXAtY2hvb3NlID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCAyMjEsIDIyMSwgMC42MjcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZG9pbmctd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9pbmcuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5MYXRlLXdyYXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2NvbXBvbmVudHMvaW1hZ2VzL3dpbGwuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21wbGV0ZWQtd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9uZS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLm5hdmJhciA+IC5uYXZiYXItZGl2LXByb2plY3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubmF2YmFyLWRpdi1wcm9qZWN0cyA+IC5uYXZiYXItaDMtcHJvamVjdHMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZW1pdGhzXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbnRlbnQtY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjMlO1xcbiAgaGVpZ2h0OiA2NyU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2FyZCA+IGg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVtaXRoc1xcXCI7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDM1cHg7XFxuICB0b3A6IDE0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjE1LCAyMDUsIDIwNSwgMC43OTUpO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLXNpemUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbn1cXG5cXG4uYWRkLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZDhkODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1pdGVtID4gc3ZnIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gTWFkZSBieSBNckVwb2NoXG5cbi8vIFRoaXMgZmlsZSB3YXMgbWFkZSB0byBiZSBleHBvcnRlZCBmb3IgdXNlIGluIG90aGVyIGZpbGVzLCBpdCBob2xkcyBtZXRob2RzIGZvciBjcmVhdGluZyBodG1sIGVsZW1lbnRzIGluIGVhc2llciB3YXlcblxuLy8gZGl2Q3JlYXRlIGZ1bmN0aW9uIGV4cHJlc3Npb24gdGFrZXMgbGlrZSBmaXJzdCB3aGF0IGlzIGluc2lkZSBhbmQgdGhlbiBjbGFzcyBhbmQgcmV0dXJucyBkaXYgYXQgZW5kXG5cbmNvbnN0IG1ldGhvZENyZWF0ZSA9IChodG1sTmFtZSwgaW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQsIGlubmVySHRtbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChodG1sTmFtZSk7XG4gIGVsZW1lbnQuYXBwZW5kKGluc2lkZSk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGVsZW1lbnQuaWQgPSBpZEFkZDtcbiAgfVxuICBpZiAoaW5uZXJIdG1sKSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBkaXZDcmVhdGUgPSAoSW5zaWRlRGl2LCBjbGFzc0FkZCwgaWRBZGQsIGlubmVySHRtbCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuYXBwZW5kKEluc2lkZURpdik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgZGl2LmlkID0gaWRBZGQ7XG4gIH1cbiAgaWYgKGlubmVySHRtbCkge1xuICAgIGRpdi5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gIH1cbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IG5hdkNyZWF0ZSA9IChJbnNpZGVOYXYsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXYuYXBwZW5kKEluc2lkZU5hdik7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgbmF2LmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIG5hdjtcbn07XG5cbi8vIEltZ0NyZWF0ZSBpcyByZXR1cm5zIHRha2VzIEltcG9ydGVkIGltZyBhbmQgcmV0dXJucyBpdCByZWFkeSBmb3IgdXNlIHRvIGFwcGVuZCB0byB0aGUgZGl2IG9yIG90aGVyIHVzZVxuXG5jb25zdCBJbWdDcmVhdGUgPSAoaW1hZ2UpID0+IHtcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSBpbWFnZTtcbiAgcmV0dXJuIGltZztcbn07XG5cbi8vIGgyQ3JlYXRlIGNyZWF0ZXMgaDIgZWxlbWVudCB3aGljaCB0YWtlcyB0ZXh0Q29udGVudCBhbmQgY2xhc3MgYW5kIHJldHVybnMgaDJcblxuY29uc3QgaDFDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGgxLmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoMS5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoMTtcbn07XG5cbmNvbnN0IGgyQ3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBoMi5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgaDIuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gaDI7XG59O1xuXG5jb25zdCBoM0NyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzLnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgaDMuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGgzLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGgzO1xufTtcblxuLy8gaDRDcmVhdGUgY3JlYXRlcyBoNCBlbGVtZW50IHdoaWNoIHRha2VzIHRleHRDb250ZW50IGFuZCBjbGFzcyBhbmQgcmV0dXJucyBoNFxuXG5jb25zdCBoNENyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGg0LnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgaDQuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGg0LmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGg0O1xufTtcblxuY29uc3QgaDVDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICBoNS50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGg1LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoNS5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoNTtcbn07XG5cbi8vIHBDcmVhdGUgY3JlYXRlcyBwYXJhZ3JhaHAgd2l0aCBmaXJzdCBwYXJhbWV0ZXIgdGV4dCBhbmQgc2Vjb25kIGNsYXNzIGFuZCByZXR1cm5zIHBhcmFncmFwaFxuXG5jb25zdCBwQ3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBwLmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBwLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIHA7XG59O1xuXG5jb25zdCBpbnB1dENyZWF0ZSA9IChwbGFjZUhvbGRlciwgY2xhc3NBZGQsIHR5cGUpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2VIb2xkZXI7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpbnB1dC50eXBlID0gdHlwZTtcblxuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5jb25zdCBmaWVsZHNldENyZWF0ZSA9IChJbnNpZGVGaWVsZCwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICBmaWVsZC5hcHBlbmQoSW5zaWRlRmllbGQpO1xuICBmaWVsZC5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgZmllbGQuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gZmllbGQ7XG59O1xuXG4vLyBleHBvcnRpbmcgYWxsIGZ1bmN0aW9uIGV4cHJlc3Npb25zXG5cbmV4cG9ydCB7XG4gIG1ldGhvZENyZWF0ZSxcbiAgZGl2Q3JlYXRlLFxuICBuYXZDcmVhdGUsXG4gIEltZ0NyZWF0ZSxcbiAgaDFDcmVhdGUsXG4gIGgyQ3JlYXRlLFxuICBoM0NyZWF0ZSxcbiAgaDRDcmVhdGUsXG4gIGg1Q3JlYXRlLFxuICBwQ3JlYXRlLFxuICBpbnB1dENyZWF0ZSxcbiAgZmllbGRzZXRDcmVhdGUsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIG1ldGhvZHMgZnJvbSBcIi4vY29tcG9uZW50cy9tZXRob2RzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL2ZvbnRzL0RlbWl0aHMtTDNvUloub3RmXCI7XG5cbmNvbnN0IHNyYyA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwic3JjXCIpO1xuXG5jb25zdCBpZEFyciA9IFtdO1xuXG5jb25zdCBpZEdldCA9ICgpID0+IHtcbiAgY29uc3QgaWRDYWxsZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIklkXCIpO1xuICByZXR1cm4gaWRDYWxsZWQ7XG59O1xuXG5jb25zdCBpZFNldCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBpZENoYW5nZWQgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIklkXCIsIGAke3ZhbHVlfWApO1xuICByZXR1cm4gaWRDaGFuZ2VkO1xufTtcblxubGV0IGFycldpdGhMb2NhbCA9IFtdO1xubGV0IG15TWVhc3VyZSA9IFtdO1xuXG5jb25zdCBjaGVja0lmSWQgPSAoKSA9PiB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJJZFwiKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiSWRcIiwgXCIwXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHJlcXVlc3RJdGVtID0gKGlkLCBpdGVtKSA9PiB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7aWR9YCkpIHtcbiAgICByZXR1cm4gXCJlbXB0eVwiO1xuICB9XG4gIGNvbnN0IGl0ZW1zT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtpZH1gKSk7XG4gIGlmICghaXRlbXNPYmplY3RbaXRlbV0pIHtcbiAgICByZXR1cm4gXCJlbXB0eVwiO1xuICB9XG4gIGNvbnN0IHJlcXVlc3RlZEl0ZW0gPSBpdGVtc09iamVjdFtpdGVtXTtcbiAgcmV0dXJuIHJlcXVlc3RlZEl0ZW07XG59O1xuXG5jb25zdCBsb2FkQXJyID0gKCkgPT4ge1xuICBjb25zdCBjdXJJZCA9IHBhcnNlSW50KGlkR2V0KCksIDEwKTtcbiAgaWYgKGNoZWNrSWZJZCgpID09PSB0cnVlICYmIGN1cklkID4gYXJyV2l0aExvY2FsLmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VySWQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbG9jYWxWYWwgPSB7XG4gICAgICAgIG5hbWU6IHJlcXVlc3RJdGVtKGkudG9TdHJpbmcoKSwgXCJuYW1lXCIpLFxuICAgICAgICB0aW1lOiByZXF1ZXN0SXRlbShpLnRvU3RyaW5nKCksIFwidGltZVwiKSxcbiAgICAgICAgZGF0ZTogcmVxdWVzdEl0ZW0oaS50b1N0cmluZygpLCBcImRhdGVcIiksXG4gICAgICAgIHRleHQ6IHJlcXVlc3RJdGVtKGkudG9TdHJpbmcoKSwgXCJ0ZXh0XCIpLFxuICAgICAgfTtcbiAgICAgIGFycldpdGhMb2NhbC5wdXNoKGxvY2FsVmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycldpdGhMb2NhbDtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCB1c2VMb2FkQW5kQ2hlY2sgPSAoKSA9PiB7XG4gIGNoZWNrSWZJZCgpO1xuICBsb2FkQXJyKCk7XG59O1xuXG51c2VMb2FkQW5kQ2hlY2soKTtcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBOZXdJdGVtKG5hbWUsIHRpbWUsIGRhdGUsIGNvbXBsZXRlZCwgdGV4dCkge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLnRpbWUgPSB0aW1lO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgdGhpcy50ZXh0ID0gdGV4dDtcbn1cblxuZnVuY3Rpb24gbG9jYWxJdGVtKGl0ZW1PYmplY3QsIGlkKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2lkfWAsIEpTT04uc3RyaW5naWZ5KGl0ZW1PYmplY3QpKTtcbn1cblxuY29uc3QgaXRlbXNDb3VudCA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJJZFwiKTtcbiAgY29uc3QgSW50SWQgPSBwYXJzZUludChjdXJyZW50SWQsIDEwKSArIDE7XG4gIHJldHVybiBJbnRJZDtcbn07XG5cbmZ1bmN0aW9uIExvYWRIKGhUeXBlLCBoVmFsdWUpIHtcbiAgY29uc3QgbG9hZGVySDMgPSBtZXRob2RzLm1ldGhvZENyZWF0ZShoVHlwZSwgaFZhbHVlLCBcImZ1bmN0aW9uLWxvYWRlZC1oM1wiKTtcblxuICByZXR1cm4gbG9hZGVySDM7XG59XG5cbi8vIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuLy8gICAvLyBZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzXG4vLyB9XG4vLyBlbHNlIHtcbi8vICAgLy8gVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1c1xuLy8gfVxuXG4vLyBkYXRlID09PSAwLVllYXIsIDEtbW9udGgsIDItZGF5XG5cbmNvbnN0IGxhdGVDaGVjayA9ICgpID0+IHtcbiAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IFtdO1xuICBjb25zdCB0aW1lQ29udGFpbmVyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyV2l0aExvY2FsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFycldpdGhMb2NhbFtpXS5kYXRlKSB7XG4gICAgICBjb25zdCBjdXJEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGN1clllYXIgPSBjdXJEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBjdXJNb250aCA9IGN1ckRhdGUuZ2V0TW9udGgoKTtcbiAgICAgIGNvbnN0IGN1ckRheSA9IGN1ckRhdGUuZ2V0RGF5KCk7XG4gICAgICBjb25zdCBjdXJIb3VyID0gY3VyRGF0ZS5nZXRIb3VycygpO1xuICAgICAgY29uc3QgY3VyTWludXRlID0gY3VyRGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICBkYXRlQ29udGFpbmVyW2ldID0gYXJyV2l0aExvY2FsW2ldLmRhdGUuc3BsaXQoXCItXCIpO1xuICAgICAgdGltZUNvbnRhaW5lcltpXSA9IGFycldpdGhMb2NhbFtpXS50aW1lLnNwbGl0KFwiOlwiKTtcbiAgICAgIGlmIChkYXRlQ29udGFpbmVyW2ldW1wiMFwiXSA+PSBjdXJZZWFyKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBkYXRlQ29udGFpbmVyW2ldW1wiMVwiXSA+PSBjdXJNb250aCAmJlxuICAgICAgICAgIGRhdGVDb250YWluZXJbaV1bXCIwXCJdID09PSBjdXJZZWFyXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGRhdGVDb250YWluZXJbaV1bXCIyXCJdID49IGN1ckRheSAmJlxuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lcltpXVtcIjFcIl0gPT09IGN1ck1vbnRoXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRpbWVDb250YWluZXJbaV1bXCIwXCJdID49IGN1ckhvdXIgJiZcbiAgICAgICAgICAgICAgZGF0ZUNvbnRhaW5lcltpXVtcIjJcIl0gPT09IGN1ckRheVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aW1lQ29udGFpbmVyW2ldW1wiMVwiXSA+PSBjdXJNaW51dGUgJiZcbiAgICAgICAgICAgICAgICB0aW1lQ29udGFpbmVyW2ldW1wiMFwiXSA9PT0gY3VySG91clxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBhcnJXaXRoTG9jYWxbaV0ubGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFycldpdGhMb2NhbFtpXS5sYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhcnJXaXRoTG9jYWxbaV0ubGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXJyV2l0aExvY2FsW2ldLmxhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJyV2l0aExvY2FsW2ldLmxhdGUgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyV2l0aExvY2FsW2ldLmxhdGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhcnJXaXRoTG9jYWxbaV0ubGF0ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycldpdGhMb2NhbFtpXS5sYXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBhcnJXaXRoTG9jYWxbaV0ubGF0ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyV2l0aExvY2FsW2ldLmxhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxubGF0ZUNoZWNrKCk7XG5cbmNvbnN0IGFzc2lnblBsYWNlID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycldpdGhMb2NhbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcnJXaXRoTG9jYWxbaV0uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICBhcnJXaXRoTG9jYWxbaV0ucGxhY2UgPSBcImNvbXBsZXRlZFwiO1xuICAgIH0gZWxzZSBpZiAoYXJyV2l0aExvY2FsW2ldLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChhcnJXaXRoTG9jYWxbaV0ubGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBhcnJXaXRoTG9jYWxbaV0ucGxhY2UgPSBcImxhdGVcIjtcbiAgICAgIH0gZWxzZSBpZiAoYXJyV2l0aExvY2FsW2ldLmxhdGUgPT09IGZhbHNlKSB7XG4gICAgICAgIGFycldpdGhMb2NhbFtpXS5wbGFjZSA9IFwiZG9pbmdcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmFzc2lnblBsYWNlKCk7XG5cbmNvbnN0IGNoZWNrUGFnZSA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBjdXJyZW50UGFnZSA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5pZDtcbiAgbGV0IGJ0bkxvZ2ljO1xuICBsZXQgc3VibWl0QnRucztcbiAgbGV0IHdyaXRlQnRucztcbiAgbGV0IG5leHRCdG47XG4gIGxldCBwcmV2QnRuO1xuICBjb25zdCBwYWdlQnRucyA9IHt9O1xuICBpZiAoY3VycmVudFBhZ2UgPT09IFwibWFpblwiKSB7XG4gICAgYnRuTG9naWMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiM1wiXTtcbiAgICB3cml0ZUJ0bnMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiNFwiXTtcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gXCJjaG9vc2VcIikge1xuICAgIGJ0bkxvZ2ljID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiM1wiXTtcbiAgICBwYWdlQnRucy5kb2luZ0J0bnMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMFwiXTtcbiAgICBwYWdlQnRucy5sYXRlQnRucyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCIwXCJdO1xuICAgIHBhZ2VCdG5zLmNvbXBsZXRlZEJ0bnMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIyXCJdLmNoaWxkcmVuW1wiMFwiXTtcbiAgfSBlbHNlIGlmIChcbiAgICBjdXJyZW50UGFnZSA9PT0gXCJkb2luZ1wiIHx8XG4gICAgY3VycmVudFBhZ2UgPT09IFwibGF0ZVwiIHx8XG4gICAgY3VycmVudFBhZ2UgPT09IFwiY29tcGxldGVkXCIgfHxcbiAgICBjdXJyZW50UGFnZSA9PT0gXCJ3cml0ZVwiXG4gICkge1xuICAgIGJ0bkxvZ2ljID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMFwiXTtcbiAgICBzdWJtaXRCdG5zID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMlwiXS5jaGlsZHJlbltcIjBcIl07XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgPT09IFwic2VlXCIpIHtcbiAgICBidG5Mb2dpYyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjBcIl07XG4gICAgbmV4dEJ0biA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjJcIl0uY2hpbGRyZW5bXCIwXCJdO1xuICAgIHByZXZCdG4gPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIzXCJdLmNoaWxkcmVuW1wiMFwiXTtcbiAgfVxuXG4gIHJldHVybiB7IGJ0bkxvZ2ljLCBwYWdlQnRucywgc3VibWl0QnRucywgd3JpdGVCdG5zLCBuZXh0QnRuLCBwcmV2QnRuIH07XG59O1xuXG5jb25zdCBteVR5cGUgPSAoaWQpID0+IHtcbiAgY29uc3QgbXlDb21wbGV0ZSA9IHJlcXVlc3RJdGVtKGlkLCBcImNvbXBsZXRlXCIpO1xuICBjb25zdCBteUxhdGUgPSByZXF1ZXN0SXRlbShpZCwgXCJjb21wbGV0ZVwiKTtcblxuICBpZiAobXlDb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBcImNvbXBsZXRlZFwiO1xuICB9XG4gIGlmIChteUxhdGUgPT09IHRydWUpIHtcbiAgICByZXR1cm4gXCJsYXRlXCI7XG4gIH1cblxuICByZXR1cm4gXCJkb2luZ1wiO1xufTtcblxuLy9cblxuY29uc3QgbmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBteU5hdmJhciA9IG1ldGhvZHMubmF2Q3JlYXRlKFwiXCIsIFwibmF2YmFyXCIpO1xuICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IG1ldGhvZHMuaDNDcmVhdGUoXCJUb2RvXCIsIFwibmF2YmFyLWgzLXByb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0c0RpdiA9IG1ldGhvZHMuZGl2Q3JlYXRlKHByb2plY3RzSGVhZGVyLCBcIm5hdmJhci1kaXYtcHJvamVjdHNcIik7XG4gIG15TmF2YmFyLmFwcGVuZChwcm9qZWN0c0Rpdik7XG5cbiAgcmV0dXJuIG15TmF2YmFyO1xufTtcblxuY29uc3QgU3ZnUGljdCA9ICgpID0+IHtcbiAgY29uc3QgcGx1c0ljb24gPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI2IDI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiPiA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG4gIGNvbnN0IHJldHVybkljb24gPSBgPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMCwxMVYxM0g4TDEzLjUsMTguNUwxMi4wOCwxOS45Mkw0LjE2LDEyTDEyLjA4LDQuMDhMMTMuNSw1LjVMOCwxMUgyMFpcIj4gPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG4gIGNvbnN0IHdyaXRlSWNvbiA9IGA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBcIiB5PVwiMFwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTYgMjU2XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48c3R5bGU+LnN0MntmaWxsOiM2OWViZmN9LnN0NXtmaWxsOiNkNDc2ZTJ9LnN0MTR7ZmlsbDojZWRkNGMyfTwvc3R5bGU+PHBhdGggZD1cIk0yMDUgMEgyMGM1LjUyIDAgMTAuNTIgMi4yNCAxNC4xNCA1Ljg2UzQwIDE0LjQ4IDQwIDIwdjIzNmgxODVWMjBjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjB6XCIgc3R5bGU9XCJmaWxsOiNmZmVmZTRcIi8+PHBhdGggY2xhc3M9XCJzdDE0XCIgZD1cIk00MCAyNTBoMTg1djZINDB6XCIvPjxwYXRoIGQ9XCJNMjA1IDBIMjBjNS41MiAwIDEwLjUyIDIuMjQgMTQuMTQgNS44Ni4wNDUuMDQ1LjA4My4wOTUuMTI3LjE0SDIwNWMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHYtNmMwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMHpcIiBzdHlsZT1cImZpbGw6I2ZmZjdmMlwiLz48cGF0aCBkPVwiTTE0NCA1Nkg3MGE4IDggMCAwIDEgMC0xNmg3NGE4IDggMCAwIDEgMCAxNnpcIiBzdHlsZT1cImZpbGw6I2ZmODM1NFwiLz48cGF0aCBjbGFzcz1cInN0MTRcIiBkPVwiTTE4OCA4NEg2NmE0IDQgMCAwIDEgMC04aDEyMmE0IDQgMCAwIDEgMCA4ek0xODggMTExLjJINjZhNCA0IDAgMCAxIDAtOGgxMjJhNCA0IDAgMCAxIDAgOHpNMTg4IDEzOC40SDY2YTQgNCAwIDAgMSAwLThoMTIyYTQgNCAwIDAgMSAwIDh6TTE4OCAxNjUuNkg2NmE0IDQgMCAwIDEgMC04aDEyMmE0IDQgMCAwIDEgMCA4ek0xODggMTkyLjhINjZhNCA0IDAgMCAxIDAtOGgxMjJhNCA0IDAgMCAxIDAgOHpNMTQ3IDIyMEg2NmE0IDQgMCAwIDEgMC04aDgxYTQgNCAwIDAgMSAwIDh6TTQwIDIwdjYwSDBWMjBDMCA4Ljk1IDguOTUgMCAyMCAwYzUuNTIgMCAxMC41MiAyLjI0IDE0LjE0IDUuODZTNDAgMTQuNDggNDAgMjB6XCIvPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgzMCAxNzMuNDE3IDE3NS41NjUpXCIgY2xhc3M9XCJzdDVcIiBkPVwiTTE2My40MTEgMTUwLjU3NWgyMHY1MGgtMjB6XCIvPjxwYXRoIGNsYXNzPVwic3Q1XCIgZD1cIm0xNjkuNTcxIDIwMi4yMjYtMTcuMzItMTAtNS42MjUgMjQuNTY3YTIuNzA4IDIuNzA4IDAgMCAwIDQuNDgzIDIuNTg5bDE4LjQ2Mi0xNy4xNTZ6XCIvPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgzMCAyMTIuMTYzIDEwOC40NDcpXCIgY2xhc3M9XCJzdDJcIiBkPVwiTTIwMi4xNjEgNTUuOTU4aDIwdjEwNWgtMjB6XCIvPjxwYXRoIHRyYW5zZm9ybT1cInJvdGF0ZSgtMTUwIDI0NC44MDcgNzUuOTIpXCIgY2xhc3M9XCJzdDJcIiBkPVwiTTI0Mi44MDMgNzIuOTJoNHY2aC00elwiLz48cGF0aCBjbGFzcz1cInN0MlwiIGQ9XCJNMjIzLjk5OSAxMjMuOTU0YTQgNCAwIDAgMCA1LjQ2NC0xLjQ2NGwyNi00NS4wMzNhNCA0IDAgMSAwLTYuOTI4LTRsLTI2IDQ1LjAzM2E0IDQgMCAwIDAgMS40NjQgNS40NjR6XCIvPjxwYXRoIGNsYXNzPVwic3Q1XCIgZD1cIk0yNTAuOTExIDQxLjM0MWMtNC43ODMtMi43NjEtMTAuODk5LTEuMTIzLTEzLjY2IDMuNjZsLTcuNSAxMi45OSAxNy4zMiAxMCA3LjUtMTIuOTljMi43NjItNC43ODIgMS4xMjMtMTAuODk4LTMuNjYtMTMuNjZ6XCI+IDwvcGF0aD48L3N2Zz5gO1xuXG4gIGNvbnN0IG5vdGVJY29uID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bm90ZS1tdWx0aXBsZS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTMsNlYyMkgyMVYyNEgzQTIsMiAwIDAsMSAxLDIyVjZIM00xNiw5SDIxLjVMMTYsMy41VjlNNywySDE3TDIzLDhWMThBMiwyIDAgMCwxIDIxLDIwSDdDNS44OSwyMCA1LDE5LjEgNSwxOFY0QTIsMiAwIDAsMSA3LDJNNyw0VjE4SDIxVjExSDE0VjRIN1pcIj4gPC9wYXRoPjwvc3ZnPmA7XG4gIHJldHVybiB7IHBsdXNJY29uLCByZXR1cm5JY29uLCB3cml0ZUljb24sIG5vdGVJY29uIH07XG59O1xuXG5jb25zdCBjb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBteUNvbnRlbnQgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcImNvbnRlbnQtY2FyZHNcIik7XG4gIGZ1bmN0aW9uIENhcmQoaDRUZXh0KSB7XG4gICAgY29uc3QgY2FyZERpdiA9IG1ldGhvZHMuZGl2Q3JlYXRlKGg0VGV4dCwgXCJjYXJkXCIpO1xuICAgIHJldHVybiBjYXJkRGl2O1xuICB9XG5cbiAgY29uc3QgY2FyZHNJbm5lciA9IHtcbiAgICBkb2luZ0g0OiBtZXRob2RzLmg0Q3JlYXRlKFwiRG9pbmdcIiwgXCJkb2luZy1jb250ZW50XCIpLFxuICAgIGxhdGVINDogbWV0aG9kcy5oNENyZWF0ZShcIkxhdGVcIiwgXCJMYXRlLWNvbnRlbnRcIiksXG4gICAgY29tcGxldGVkSDQ6IG1ldGhvZHMuaDRDcmVhdGUoXCJjb21wbGV0ZWRcIiwgXCJjb21wbGV0ZWQtY29udGVudFwiKSxcbiAgfTtcblxuICBjb25zdCBkb2luZyA9IENhcmQoY2FyZHNJbm5lci5kb2luZ0g0KTtcbiAgY29uc3QgbGF0ZSA9IENhcmQoY2FyZHNJbm5lci5sYXRlSDQpO1xuICBjb25zdCBjb21wbGV0ZWQgPSBDYXJkKGNhcmRzSW5uZXIuY29tcGxldGVkSDQpO1xuXG4gIGNvbnN0IGFkZCA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwiYWRkLWl0ZW1cIiwgXCJcIiwgU3ZnUGljdCgpLnBsdXNJY29uKTtcbiAgY29uc3Qgc2VlID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJzZWUtaXRlbVwiLCBcIlwiLCBTdmdQaWN0KCkubm90ZUljb24pO1xuXG4gIG15Q29udGVudC5hcHBlbmQoZG9pbmcsIGxhdGUsIGNvbXBsZXRlZCwgYWRkLCBzZWUpO1xuICBjb25zdCBhZGRIdG1sID0gbXlDb250ZW50LmNoaWxkcmVuW1wiM1wiXTtcblxuICBhZGRIdG1sLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgIGFkZEh0bWwudGV4dENvbnRlbnQgPSBcIk5ld1wiO1xuICB9KTtcblxuICBhZGRIdG1sLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgYWRkSHRtbC5pbm5lckhUTUwgPSBTdmdQaWN0KCkucGx1c0ljb247XG4gIH0pO1xuXG4gIHJldHVybiBteUNvbnRlbnQ7XG59O1xuXG5jb25zdCBUb2RvTmFtZSA9IChwYWdlTmFtZSkgPT4ge1xuICBjb25zdCBUb2RvTmFtZUNvbnRhaW5lciA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwicHJvak5hbWVDb250YWluZXJcIik7XG4gIGNvbnN0IFRvZG9OYW1lTGFiZWwgPSBtZXRob2RzLm1ldGhvZENyZWF0ZShcbiAgICBcIkxhYmVsXCIsXG4gICAgXCJUb2RvIG5hbWVcIixcbiAgICBgbGFiZWwtJHtwYWdlTmFtZX0tbmFtZWBcbiAgKTtcbiAgY29uc3QgVG9kb05hbWVJbnB1dCA9IG1ldGhvZHMuaW5wdXRDcmVhdGUoXG4gICAgXCJNeSBhd2Vzb21lIHByb2plY3QhXCIsXG4gICAgXCJuYW1lLWRvaW5nXCIsXG4gICAgXCJ0ZXh0XCJcbiAgKTtcblxuICBUb2RvTmFtZUNvbnRhaW5lci5hcHBlbmQoVG9kb05hbWVMYWJlbCwgVG9kb05hbWVJbnB1dCk7XG5cbiAgcmV0dXJuIFRvZG9OYW1lQ29udGFpbmVyO1xufTtcblxuY29uc3QgVG9kb1RpbWUgPSAocGFnZU5hbWUpID0+IHtcbiAgY29uc3QgVG9kb1RpbWVDb250YWluZXIgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcInByb2pUaW1lQ29udGFpbmVyXCIpO1xuICBjb25zdCBUb2RvVGltZUxhYmVsID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoXG4gICAgXCJMYWJlbFwiLFxuICAgIFwiQ29tcGxldGlvbiBUaW1lXCIsXG4gICAgYGxhYmVsLSR7cGFnZU5hbWV9LXRpbWVgXG4gICk7XG4gIGNvbnN0IFRvZG9UaW1lSW5wdXQgPSBtZXRob2RzLmlucHV0Q3JlYXRlKFwiXCIsIGAke3BhZ2VOYW1lfS10aW1lYCwgXCJ0aW1lXCIpO1xuXG4gIFRvZG9UaW1lQ29udGFpbmVyLmFwcGVuZChUb2RvVGltZUxhYmVsLCBUb2RvVGltZUlucHV0KTtcblxuICByZXR1cm4gVG9kb1RpbWVDb250YWluZXI7XG59O1xuY29uc3QgVG9kb0RhdGUgPSAocGFnZU5hbWUpID0+IHtcbiAgY29uc3QgVG9kb0RhdGVDb250YWluZXIgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcInByb2pEYXRlQ29udGFpbmVyXCIpO1xuICBjb25zdCBUb2RvRGF0ZUxhYmVsID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoXG4gICAgXCJMYWJlbFwiLFxuICAgIFwiQ29tcGxldGlvbiBkYXRlXCIsXG4gICAgYGxhYmVsLSR7cGFnZU5hbWV9LWRhdGVgXG4gICk7XG4gIGNvbnN0IFRvZG9EYXRlSW5wdXQgPSBtZXRob2RzLmlucHV0Q3JlYXRlKFwiXCIsIGAke3BhZ2VOYW1lfS1kYXRlYCwgXCJkYXRlXCIpO1xuXG4gIFRvZG9EYXRlQ29udGFpbmVyLmFwcGVuZChUb2RvRGF0ZUxhYmVsLCBUb2RvRGF0ZUlucHV0KTtcblxuICByZXR1cm4gVG9kb0RhdGVDb250YWluZXI7XG59O1xuY29uc3QgVG9kb1RleHQgPSAocGFnZU5hbWUpID0+IHtcbiAgY29uc3QgVG9kb1RleHRDb250YWluZXIgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcInByb2pUZXh0Q29udGFpbmVyXCIpO1xuICBjb25zdCBUb2RvVGV4dEluc2lkZSA9IG1ldGhvZHMubWV0aG9kQ3JlYXRlKFxuICAgIFwidGV4dGFyZWFcIixcbiAgICBcIlwiLFxuICAgIGAke3BhZ2VOYW1lfS1wcm9qVGV4dGBcbiAgKTtcblxuICBUb2RvVGV4dENvbnRhaW5lci5hcHBlbmQoVG9kb1RleHRJbnNpZGUpO1xuXG4gIHJldHVybiBUb2RvVGV4dENvbnRhaW5lcjtcbn07XG5jb25zdCBUb2RvY29tcGxldGVkT3IgPSAocGFnZW5hbWUpID0+IHtcbiAgY29uc3QgVG9kb2NvbXBsZXRlZENvbnRhaW5lciA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwicHJvakRvbmVDb250YWluZXJcIik7XG4gIGNvbnN0IFRvZG9jb21wbGV0ZWRMYWJlbCA9IG1ldGhvZHMubWV0aG9kQ3JlYXRlKFwiTGFiZWxcIiwgXCJjb21wbGV0ZWRcIik7XG4gIGNvbnN0IFRvZG9jb21wbGV0ZWRJbnNpZGUgPSBtZXRob2RzLmlucHV0Q3JlYXRlKFwiXCIsIFwiZG9uZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gIFRvZG9jb21wbGV0ZWRDb250YWluZXIuYXBwZW5kKFRvZG9jb21wbGV0ZWRMYWJlbCwgVG9kb2NvbXBsZXRlZEluc2lkZSk7XG5cbiAgcmV0dXJuIFRvZG9jb21wbGV0ZWRDb250YWluZXI7XG59O1xuY29uc3QgVG9kb1N1Ym1pdCA9IChwYWdlTmFtZSkgPT4ge1xuICBjb25zdCBzdWJtaXRCdG4gPSBtZXRob2RzLm1ldGhvZENyZWF0ZShcbiAgICBcImJ1dHRvblwiLFxuICAgIFwic3VibWl0XCIsXG4gICAgYCR7cGFnZU5hbWV9LWJ0bmAsXG4gICAgXCJzdWJtaXRCdG5cIlxuICApO1xuXG4gIGNvbnN0IHdyYXBwZWRCdG4gPSBtZXRob2RzLmRpdkNyZWF0ZShzdWJtaXRCdG4sIFwic3VibWl0LWJ0bi1jb250YWluZXJcIik7XG5cbiAgcmV0dXJuIHdyYXBwZWRCdG47XG59O1xuXG5mdW5jdGlvbiBXcml0aW5nUGFnZXMocGFnZU5hbWUpIHtcbiAgdGhpcy5wYWdlID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgXCJcIixcbiAgICBgcGFnZS0ke3BhZ2VOYW1lfS1jb250YWluZXJgLFxuICAgIGAke3BhZ2VOYW1lfWBcbiAgKTtcbiAgdGhpcy5maWVsZCA9IG1ldGhvZHMuZmllbGRzZXRDcmVhdGUoXCJcIiwgYGZpZWxkLSR7cGFnZU5hbWV9YCk7XG4gIHRoaXMucmV0dXJuQnRuID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgXCJcIixcbiAgICBgcmV0dXJuLSR7cGFnZU5hbWV9YCxcbiAgICBcInJldHVybi10ZXh0XCIsXG4gICAgU3ZnUGljdCgpLnJldHVybkljb25cbiAgKTtcblxuICB0aGlzLmZpZWxkLmFwcGVuZChcbiAgICBUb2RvTmFtZShgJHtwYWdlTmFtZX1gKSxcbiAgICBUb2RvVGltZShgJHtwYWdlTmFtZX1gKSxcbiAgICBUb2RvRGF0ZShgJHtwYWdlTmFtZX1gKSxcbiAgICBUb2RvY29tcGxldGVkT3IoYCR7cGFnZU5hbWV9YCksXG4gICAgVG9kb1RleHQoYCR7cGFnZU5hbWV9YClcbiAgKTtcbiAgdGhpcy5wYWdlLmFwcGVuZCh0aGlzLnJldHVybkJ0biwgdGhpcy5maWVsZCwgVG9kb1N1Ym1pdChgJHtwYWdlTmFtZX1gKSk7XG59XG5cbmNvbnN0IGRvaW5nQXJyID0gW107XG5jb25zdCBsYXRlQXJyID0gW107XG5jb25zdCBjb21wbGV0ZWRBcnIgPSBbXTtcblxuY29uc3QgcmV0dXJuVHlwZSA9ICgpID0+IHtcbiAgaWYgKCFhcnJXaXRoTG9jYWwubGVuZ3RoID09PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJXaXRoTG9jYWwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcnJXaXRoTG9jYWxbaV0ucGxhY2UgPT09IFwiZG9pbmdcIikge1xuICAgICAgICBkb2luZ0Fyci5wdXNoKGFycldpdGhMb2NhbFtpXSk7XG4gICAgICB9XG4gICAgICBpZiAoYXJyV2l0aExvY2FsW2ldLnBsYWNlID09PSBcImxhdGVcIikge1xuICAgICAgICBsYXRlQXJyLnB1c2goYXJyV2l0aExvY2FsW2ldKTtcbiAgICAgIH1cbiAgICAgIGlmIChhcnJXaXRoTG9jYWxbaV0ucGxhY2UgPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICAgICAgY29tcGxldGVkQXJyLnB1c2goYXJyV2l0aExvY2FsW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnJldHVyblR5cGUoKTtcblxuZnVuY3Rpb24gU2VlUGFnZShpZCwgdmFsdWUsIHBhZ2UpIHtcbiAgdGhpcy5uYW1lSXRlbSA9IHJlcXVlc3RJdGVtKGlkLCBcIm5hbWVcIik7XG4gIHRoaXMudGltZUl0ZW0gPSByZXF1ZXN0SXRlbShpZCwgXCJ0aW1lXCIpO1xuICB0aGlzLmRhdGVJdGVtID0gcmVxdWVzdEl0ZW0oaWQsIFwiZGF0ZVwiKTtcbiAgdGhpcy50ZXh0SXRlbSA9IHJlcXVlc3RJdGVtKGlkLCBcInRleHRcIik7XG5cbiAgdGhpcy5wYWdlID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgYHBhZ2UtJHt2YWx1ZX1gKTtcbiAgdGhpcy5wYWdlLmlkID0gXCJzZWVcIjtcblxuICB0aGlzLmZpZWxkID0gbWV0aG9kcy5maWVsZHNldENyZWF0ZShcIlwiLCBgZmllbGQtUmVgKTtcbiAgdGhpcy5yZXR1cm5CdG4gPSBtZXRob2RzLmRpdkNyZWF0ZShcbiAgICBcIlwiLFxuICAgIGByZXR1cm4tUmVgLFxuICAgIFwicmV0dXJuLXRleHRcIixcbiAgICBTdmdQaWN0KCkucmV0dXJuSWNvblxuICApO1xuXG4gIHRoaXMubmV4dCA9IG1ldGhvZHMubWV0aG9kQ3JlYXRlKFwiYnV0dG9uXCIsIFwibmV4dFwiLCBcImJ0bi1uZXh0XCIpO1xuICB0aGlzLnByZXYgPSBtZXRob2RzLm1ldGhvZENyZWF0ZShcImJ1dHRvblwiLCBcInByZXZpdXNcIiwgXCJidG4tcHJldlwiKTtcblxuICB0aGlzLm5hbWUgPSBtZXRob2RzLmRpdkNyZWF0ZShcIk5hbWU6XCIsIFwiaXRlbS1uYW1lXCIpO1xuICB0aGlzLm5hbWUuYXBwZW5kKExvYWRIKFwiaDNcIiwgdGhpcy5uYW1lSXRlbSkpO1xuICB0aGlzLnRpbWUgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlRpbWU6XCIsIFwiaXRlbS10aW1lXCIpO1xuICB0aGlzLnRpbWUuYXBwZW5kKExvYWRIKFwiaDNcIiwgdGhpcy50aW1lSXRlbSkpO1xuICB0aGlzLmRhdGUgPSBtZXRob2RzLmRpdkNyZWF0ZShcIkRhdGU6XCIsIFwiaXRlbS1kYXRlXCIpO1xuICB0aGlzLmRhdGUuYXBwZW5kKExvYWRIKFwiaDNcIiwgdGhpcy5kYXRlSXRlbSkpO1xuICB0aGlzLnRleHQgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlRleHQ6XCIsIFwiaXRlbS10ZXh0XCIpO1xuICB0aGlzLnRleHQuYXBwZW5kKExvYWRIKFwiaDNcIiwgdGhpcy50ZXh0SXRlbSkpO1xuXG4gIHRoaXMuZmllbGQuYXBwZW5kKHRoaXMubmFtZSwgdGhpcy50aW1lLCB0aGlzLmRhdGUsIHRoaXMudGV4dCk7XG5cbiAgdGhpcy5uZXh0Q29udGFpbmVyID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJidG4tbmV4dC1jb250YWluZXJcIik7XG4gIHRoaXMucHJldkNvbnRhaW5lciA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwiYnRuLXByZXYtY29udGFpbmVyXCIpO1xuXG4gIHRoaXMubmV4dENvbnRhaW5lci5hcHBlbmQodGhpcy5uZXh0KTtcbiAgdGhpcy5wcmV2Q29udGFpbmVyLmFwcGVuZCh0aGlzLnByZXYpO1xuXG4gIHRoaXMucGFnZS5hcHBlbmQoXG4gICAgdGhpcy5yZXR1cm5CdG4sXG4gICAgdGhpcy5maWVsZCxcbiAgICB0aGlzLm5leHRDb250YWluZXIsXG4gICAgdGhpcy5wcmV2Q29udGFpbmVyXG4gICk7XG59XG5cbmNvbnN0IHdyaXRlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgTXlQYWdlID0gbmV3IFdyaXRpbmdQYWdlcyhcIndyaXRlXCIpO1xuICByZXR1cm4gTXlQYWdlLnBhZ2U7XG59O1xuXG5jb25zdCBjaG9vc2VQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjaG9vc2UgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcImNob29zZS1jb250YWluZXJcIiwgXCJjaG9vc2VcIik7XG5cbiAgY29uc3QgY2hvb3NlVGV4dCA9IHtcbiAgICBkb2luZzogXCJEb2luZ1wiLFxuICAgIGxhdGU6IFwiTGF0ZVwiLFxuICAgIGNvbXBsZXRlZDogXCJDb21wbGV0ZWRcIixcbiAgfTtcblxuICBjb25zdCBkb2luZ0Nob29zZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIG1ldGhvZHMuaDNDcmVhdGUoY2hvb3NlVGV4dC5kb2luZywgXCJkb2luZy1jaG9vc2UtaDNcIiksXG4gICAgXCJkb2luZy1jaG9vc2UtZGl2XCJcbiAgKTtcbiAgY29uc3QgbGF0ZUNob29zZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIG1ldGhvZHMuaDNDcmVhdGUoY2hvb3NlVGV4dC5sYXRlLCBcIkxhdGUtY2hvb3NlLWgzXCIpLFxuICAgIFwiTGF0ZS1jaG9vc2UtZGl2XCJcbiAgKTtcbiAgY29uc3QgY29tcGxldGVkQ2hvb3NlID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgbWV0aG9kcy5oM0NyZWF0ZShjaG9vc2VUZXh0LmNvbXBsZXRlZCwgXCJjb21wbGV0ZWQtY2hvb3NlLWgzXCIpLFxuICAgIFwiY29tcGxldGVkLWNob29zZS1kaXZcIlxuICApO1xuXG4gIGNvbnN0IGRvaW5nV3JhcCA9IG1ldGhvZHMuZGl2Q3JlYXRlKGRvaW5nQ2hvb3NlLCBcImRvaW5nLXdyYXBcIiwgXCJ3cmFwLWNob29zZVwiKTtcbiAgY29uc3QgbGF0ZVdyYXAgPSBtZXRob2RzLmRpdkNyZWF0ZShsYXRlQ2hvb3NlLCBcIkxhdGUtd3JhcFwiLCBcIndyYXAtY2hvb3NlXCIpO1xuICBjb25zdCBjb21wbGV0ZWRXcmFwID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgY29tcGxldGVkQ2hvb3NlLFxuICAgIFwiY29tcGxldGVkLXdyYXBcIixcbiAgICBcIndyYXAtY2hvb3NlXCJcbiAgKTtcbiAgY29uc3QgYmFjayA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgXCJiYWNrLWNob29zZVwiLFxuICAgIFwicmV0dXJuLXRleHRcIixcbiAgICBTdmdQaWN0KCkucmV0dXJuSWNvblxuICApO1xuXG4gIGNob29zZS5hcHBlbmQoZG9pbmdXcmFwLCBsYXRlV3JhcCwgY29tcGxldGVkV3JhcCwgYmFjayk7XG5cbiAgcmV0dXJuIGNob29zZTtcbn07XG5cbmNvbnN0IHNlZVBhZ2UgPSAoaWQsIHZhbHVlLCBwYWdlKSA9PiB7XG4gIGNvbnN0IGNob3NlbiA9IG5ldyBTZWVQYWdlKGlkLCB2YWx1ZSwgcGFnZSk7XG4gIGNvbnN0IG15UGFnZSA9IGNob3Nlbi5wYWdlO1xuICBjb25zdCBteUZpZWxkID0gY2hvc2VuLmZpZWxkO1xuICByZXR1cm4geyBteVBhZ2UsIG15RmllbGQgfTtcbn07XG5cbi8vXG5cbmNvbnN0IHJldHVybkJ0biA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCByZXR1cm5CdG5zID0gY2hlY2tQYWdlKHNyYykuYnRuTG9naWM7XG4gIHJldHVybkJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzcmMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBzcmMuYXBwZW5kKHZhbHVlKTtcbiAgICB1c2VMb2FkQW5kQ2hlY2soKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJldHVybkJ0bnM7XG59O1xuXG5jb25zdCBlcnJvck1lc3MgPSBcIlBsZWFzZSByZXN0YXJ0IHBhZ2Ugb3IgY29udGFjdCBzdXBwb3J0IVwiO1xuY29uc3QgbWFpbiA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICBtZXRob2RzLmgxQ3JlYXRlKGVycm9yTWVzcywgXCJlcnJvclwiKSxcbiAgXCJtYWluXCIsXG4gIFwibWFpblwiXG4pO1xuaWYgKG5hdmJhcigpICYmIGNvbnRlbnQoKSkge1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kKG5hdmJhcigpLCBjb250ZW50KCkpO1xufSBlbHNlIHtcbiAgY29uc29sZS5lcnJvcihcbiAgICBcIioqKiAgbmF2YmFyKCkgb3IgY29udGVudCgpIGRpZG4ndCByZXR1cm4gZXhwZWN0ZWQgdmFsdWUhICAqKipcIlxuICApO1xufVxuY29uc3QgY2hvb3NlUyA9IGNob29zZVBhZ2UoKTtcblxuY29uc3Qgc2VlQnRuc0xvZ2ljID0gKHZhbHVlLCBpZCkgPT4ge1xuICBjb25zdCBmaWVsZCA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjFcIl07XG4gIGNvbnN0IG5leHQgPSBjaGVja1BhZ2UodmFsdWUpLm5leHRCdG47XG4gIGNvbnN0IHByZXYgPSBjaGVja1BhZ2UodmFsdWUpLnByZXZCdG47XG4gIGxldCBjdXJySWQgPSBpZDtcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVzZUxvYWRBbmRDaGVjaygpO1xuICAgIGlmIChjdXJySWQgPCBpZEdldCgpIC0gMSkge1xuICAgICAgY3VycklkICs9IDE7XG4gICAgICBmaWVsZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3Qgc3RyaW5nTnVtID0gY3VycklkLnRvU3RyaW5nKCk7XG4gICAgICBmaWVsZC5hcHBlbmQoc2VlUGFnZShzdHJpbmdOdW0sIFwic2VlXCIpLm15RmllbGQpO1xuICAgIH0gZWxzZSBpZiAoY3VycklkID09PSBpZEdldCgpIC0gMSkge1xuICAgICAgY3VycklkID0gMDtcbiAgICAgIGZpZWxkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBzdHJpbmdOdW0gPSBjdXJySWQudG9TdHJpbmcoKTtcbiAgICAgIGZpZWxkLmFwcGVuZChzZWVQYWdlKHN0cmluZ051bSwgXCJzZWVcIikubXlGaWVsZCk7XG4gICAgfVxuICB9KTtcbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHVzZUxvYWRBbmRDaGVjaygpO1xuICAgIGlmIChjdXJySWQgPiAwKSB7XG4gICAgICBjdXJySWQgLT0gMTtcbiAgICAgIGZpZWxkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBzdHJpbmdOdW0gPSBjdXJySWQudG9TdHJpbmcoKTtcbiAgICAgIGZpZWxkLmFwcGVuZChzZWVQYWdlKHN0cmluZ051bSwgXCJzZWVcIikubXlGaWVsZCk7XG4gICAgfSBlbHNlIGlmIChjdXJySWQgPT09IDApIHtcbiAgICAgIGN1cnJJZCA9IGlkR2V0KCkgLSAxO1xuICAgICAgZmllbGQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IHN0cmluZ051bSA9IGN1cnJJZC50b1N0cmluZygpO1xuICAgICAgZmllbGQuYXBwZW5kKHNlZVBhZ2Uoc3RyaW5nTnVtLCBcInNlZVwiKS5teUZpZWxkKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgd3JpdGVTdWJtaXQgPSAodmFsdWUpID0+IHtcbiAgY29uc3Qgc3VibWl0ID0gY2hlY2tQYWdlKHNyYykuc3VibWl0QnRucztcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgbm93SWQgPSBpZEdldCgpO1xuICAgIGNvbnN0IGlucHV0ID0gdmFsdWUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjFcIl07XG4gICAgY29uc3QgdGltZSA9IHZhbHVlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW1wiMVwiXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCIxXCJdO1xuICAgIGNvbnN0IGRhdGUgPSB2YWx1ZS5jaGlsZHJlblswXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCIyXCJdLmNoaWxkcmVuW1wiMVwiXTtcbiAgICBjb25zdCBjb21wbGV0ZWQgPVxuICAgICAgdmFsdWUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiM1wiXS5jaGlsZHJlbltcIjFcIl07XG4gICAgY29uc3QgdGV4dEEgPSB2YWx1ZS5jaGlsZHJlblswXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCI0XCJdLmNoaWxkcmVuW1wiMFwiXTtcbiAgICBjb25zdCBJdGVtID0gbmV3IE5ld0l0ZW0oXG4gICAgICBpbnB1dC52YWx1ZSxcbiAgICAgIHRpbWUudmFsdWUsXG4gICAgICBkYXRlLnZhbHVlLFxuICAgICAgY29tcGxldGVkLmNoZWNrZWQsXG4gICAgICB0ZXh0QS52YWx1ZVxuICAgICk7XG4gICAgbG9jYWxJdGVtKEl0ZW0sIG5vd0lkKTtcbiAgICBsZXQgY2hhbmdlSWQgPSBwYXJzZUludChub3dJZCwgMTApO1xuICAgIGlkU2V0KChjaGFuZ2VJZCArPSAxKSk7XG4gICAgdXNlTG9hZEFuZENoZWNrKCk7XG4gICAgbGF0ZUNoZWNrKCk7XG4gICAgYXNzaWduUGxhY2UoKTtcbiAgfSk7XG4gIHJldHVybiBzdWJtaXQ7XG59O1xuXG5jb25zdCB3cml0ZUxvYWRlciA9IChidG4sIHBhZ2UsIHZhbHVlLCByZXR1cm5QYWdlKSA9PiB7XG4gIGlmICh2YWx1ZS5jaGlsZHJlbltcIjBcIl0uaWQgPT09IFwiY2hvb3NlXCIpIHtcbiAgICBsZXQgcGFyYW1ldGVyID0gYnRuO1xuICAgIGNvbnN0IExvYWRlZHBhZ2UgPSBjaGVja1BhZ2UodmFsdWUpLnBhZ2VCdG5zWyhwYXJhbWV0ZXIgKz0gXCJCdG5zXCIpXTtcbiAgICBMb2FkZWRwYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzcmMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHNyYy5hcHBlbmQocGFnZSk7XG4gICAgICByZXR1cm5CdG4ocmV0dXJuUGFnZSk7XG4gICAgICBzZWVCdG5zTG9naWModmFsdWUsIDApO1xuICAgIH0pO1xuICB9XG59O1xuXG5zcmMuYXBwZW5kKG1haW4pO1xuXG5jb25zdCBhZGRCdG4gPSBjaGVja1BhZ2Uoc3JjKS5idG5Mb2dpYztcbmNvbnN0IHNlZUJ0biA9IGNoZWNrUGFnZShzcmMpLndyaXRlQnRucztcblxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZEJ0bi5pbm5lckhUTUwgPSBTdmdQaWN0KCkucGx1c0ljb247XG4gIHNyYy5pbm5lckhUTUwgPSBcIlwiO1xuICBzcmMuYXBwZW5kKHdyaXRlUGFnZSgpKTtcblxuICB1c2VMb2FkQW5kQ2hlY2soKTtcblxuICB3cml0ZVN1Ym1pdChzcmMpO1xuICByZXR1cm5CdG4obWFpbik7XG59KTtcblxuc2VlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNyYy5pbm5lckhUTUwgPSBcIlwiO1xuICBzcmMuYXBwZW5kKGNob29zZVMpO1xuXG4gIHVzZUxvYWRBbmRDaGVjaygpO1xuXG4gIHdyaXRlTG9hZGVyKFwiZG9pbmdcIiwgc2VlUGFnZShcIjBcIiwgXCJzZWVcIiwgXCJkb2luZ1wiKS5teVBhZ2UsIHNyYywgY2hvb3NlUyk7XG4gIHdyaXRlTG9hZGVyKFwibGF0ZVwiLCBzZWVQYWdlKFwiMFwiLCBcInNlZVwiLCBcImxhdGVcIikubXlQYWdlLCBzcmMsIGNob29zZVMpO1xuICB3cml0ZUxvYWRlcihcbiAgICBcImNvbXBsZXRlZFwiLFxuICAgIHNlZVBhZ2UoXCIwXCIsIFwic2VlXCIsIFwiY29tcGxldGVkXCIpLm15UGFnZSxcbiAgICBzcmMsXG4gICAgY2hvb3NlU1xuICApO1xuXG4gIHJldHVybkJ0bihtYWluKTtcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNyYyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=