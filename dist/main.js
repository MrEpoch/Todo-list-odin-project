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

const idGet = () => {
  const idCalled = localStorage.getItem("Id");
  return idCalled;
};

const idSet = (value) => {
  const idChanged = localStorage.setItem("Id", `${value}`);
  return idChanged;
};

function localItem(itemObject, id) {
  localStorage.setItem(`${id}`, JSON.stringify(itemObject));
}

const idLocalMeasure = () => {
  const nowId = localStorage.length - 1;
  return nowId;
};

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

checkIfId();

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
  const localLength = parseInt(idGet(), 10) - 1;
  for (let i = 0; i < localLength; i += 1) {
    const localStor = JSON.parse(localStorage.getItem(i.toString()));
    if (localStor.date || (localStor.date && localStor.time)) {
      const curDate = new Date();
      const curYear = curDate.getFullYear();
      const curMonth = curDate.getMonth();
      const curDay = curDate.getDay();
      const curHour = curDate.getHours();
      const curMinute = curDate.getMinutes();
      dateContainer[i] = localStor.date.split("-");
      timeContainer[i] = localStor.time.split(":");

      if (dateContainer[i]["0"] > curYear) {
        localStor.late = false;
      } else if (
        dateContainer[i]["1"] > curMonth &&
        dateContainer[i]["0"] === curYear
      ) {
        localStor.late = false;
      } else if (
        dateContainer[i]["2"] > curDay &&
        dateContainer[i]["1"] === curMonth &&
        dateContainer[i]["0"] === curYear
      ) {
        localStor.late = false;
      } else if (
        timeContainer[i]["0"] > curHour &&
        dateContainer[i]["2"] === curDay &&
        dateContainer[i]["1"] === curMonth &&
        dateContainer[i]["0"] === curYear
      ) {
        localStor.late = false;
      } else if (
        timeContainer[i]["1"] >= curMinute &&
        timeContainer[i]["0"] === curHour &&
        dateContainer[i]["2"] === curDay &&
        dateContainer[i]["1"] === curMonth &&
        dateContainer[i]["0"] === curYear
      ) {
        localStor.late = false;
      } else {
        localStor.late = true;
      }
    }
    localStorage.setItem(i.toString(), JSON.stringify(localStor));
  }
};

lateCheck();

const assignPlace = () => {
  const numOfItems = localStorage.length - 1;
  for (let i = 0; i < numOfItems; i += 1) {
    const value = JSON.parse(localStorage.getItem(`${i}`));
    if (value.completed === true) {
      value.place = "completed";
      localStorage.setItem(i.toString(), JSON.stringify(value));
    } else if (value.completed === false) {
      if (value.late === true) {
        value.place = "late";
        localStorage.setItem(i.toString(), JSON.stringify(value));
      } else {
        value.place = "doing";
        localStorage.setItem(i.toString(), JSON.stringify(value));
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

const idSeeCheck = (id, page) => {
  const checkingValue = requestItem(id, "place");
  if (checkingValue === page) {
    return true;
  }
  return false;
};

function SeePage(id, value) {
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
  const chosen = new SeePage(id, value);
  if (idSeeCheck(id, page) === false) {
    chosen.name.innerHTML = "empty";
    chosen.time.innerHTML = "empty";
    chosen.date.innerHTML = "empty";
    chosen.text.innerHTML = "empty";
  }
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
    checkIfId();
    assignPlace();
    lateCheck();
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

const seeBtnsLogic = (value, id, page) => {
  const field = value.children["0"].children["1"];
  const next = checkPage(value).nextBtn;
  const prev = checkPage(value).prevBtn;
  let currId = id;
  next.addEventListener("click", () => {
    checkIfId();
    if (currId < idGet() - 1) {
      currId += 1;
      field.innerHTML = "";
      const stringNum = currId.toString();
      field.append(seePage(stringNum, "see", page).myField);
    } else if (currId === idGet() - 1) {
      currId = 0;
      field.innerHTML = "";
      const stringNum = currId.toString();
      field.append(seePage(stringNum, "see", page).myField);
    }
  });
  prev.addEventListener("click", () => {
    checkIfId();
    if (currId > 0) {
      currId -= 1;
      field.innerHTML = "";
      const stringNum = currId.toString();
      field.append(seePage(stringNum, "see", page).myField);
    } else if (currId === 0) {
      currId = idGet() - 1;
      field.innerHTML = "";
      const stringNum = currId.toString();
      field.append(seePage(stringNum, "see", page).myField);
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
    console.log(Item);
    localItem(Item, nowId);
    let changeId = parseInt(nowId, 10);
    idSet((changeId += 1));
    checkIfId();
    lateCheck();
    reLate();
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
      seeBtnsLogic(value, 0, btn);
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

  checkIfId();

  writeSubmit(src);
  returnBtn(main);
});

seeBtn.addEventListener("click", () => {
  src.innerHTML = "";
  src.append(chooseS);

  checkIfId();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLFVBQVUsVUFBVSxNQUFNLFFBQVEsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBZUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RKRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQzNCO0FBQ3lCOztBQUU5QyxZQUFZLDBEQUFpQjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsTUFBTTtBQUN4RDtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLEdBQUc7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsR0FBRztBQUNsQztBQUNBO0FBQ0EseURBQXlELEdBQUc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw2REFBb0I7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQyxxREFBcUQsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIsMERBQWlCO0FBQ3BDLHlCQUF5Qix5REFBZ0I7QUFDekMsc0JBQXNCLDBEQUFpQjtBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSxxTUFBcU0sYUFBYSxLQUFLLGFBQWEsTUFBTSxhQUFhOztBQUV2UDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLG9CQUFvQiwwREFBaUI7QUFDckM7QUFDQSxvQkFBb0IsMERBQWlCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLHlEQUFnQjtBQUM3QixZQUFZLHlEQUFnQjtBQUM1QixpQkFBaUIseURBQWdCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDBEQUFpQjtBQUMvQixjQUFjLDBEQUFpQjs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDBEQUFpQjtBQUM3Qyx3QkFBd0IsNkRBQW9CO0FBQzVDO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQSx3QkFBd0IsNERBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsMERBQWlCO0FBQzdDLHdCQUF3Qiw2REFBb0I7QUFDNUM7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBLHdCQUF3Qiw0REFBbUIsUUFBUSxTQUFTOztBQUU1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMERBQWlCO0FBQzdDLHdCQUF3Qiw2REFBb0I7QUFDNUM7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBLHdCQUF3Qiw0REFBbUIsUUFBUSxTQUFTOztBQUU1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMERBQWlCO0FBQzdDLHlCQUF5Qiw2REFBb0I7QUFDN0M7QUFDQTtBQUNBLE9BQU8sU0FBUztBQUNoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMERBQWlCO0FBQ2xELDZCQUE2Qiw2REFBb0I7QUFDakQsOEJBQThCLDREQUFtQjs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZEQUFvQjtBQUN4QztBQUNBO0FBQ0EsT0FBTyxTQUFTO0FBQ2hCO0FBQ0E7O0FBRUEscUJBQXFCLDBEQUFpQjs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBLGNBQWMsMERBQWlCO0FBQy9CO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLE9BQU8sU0FBUztBQUNoQjtBQUNBLGVBQWUsK0RBQXNCLGNBQWMsU0FBUztBQUM1RCxtQkFBbUIsMERBQWlCO0FBQ3BDO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLHVCQUF1QixTQUFTO0FBQ2hDLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0EsNkRBQTZELFNBQVM7QUFDdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDBEQUFpQixhQUFhLE1BQU07QUFDbEQ7O0FBRUEsZUFBZSwrREFBc0I7QUFDckMsbUJBQW1CLDBEQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsNkRBQW9CO0FBQ2xDLGNBQWMsNkRBQW9COztBQUVsQyxjQUFjLDBEQUFpQjtBQUMvQjtBQUNBLGNBQWMsMERBQWlCO0FBQy9CO0FBQ0EsY0FBYywwREFBaUI7QUFDL0I7QUFDQSxjQUFjLDBEQUFpQjtBQUMvQjs7QUFFQTs7QUFFQSx1QkFBdUIsMERBQWlCO0FBQ3hDLHVCQUF1QiwwREFBaUI7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMERBQWlCOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiwwREFBaUI7QUFDdkMsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQTtBQUNBLHFCQUFxQiwwREFBaUI7QUFDdEMsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQTtBQUNBLDBCQUEwQiwwREFBaUI7QUFDM0MsSUFBSSx5REFBZ0I7QUFDcEI7QUFDQTs7QUFFQSxvQkFBb0IsMERBQWlCO0FBQ3JDLG1CQUFtQiwwREFBaUI7QUFDcEMsd0JBQXdCLDBEQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMERBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDBEQUFpQjtBQUM5QixFQUFFLHlEQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9tZXRob2RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ZvbnRzL0RlbWl0aHMtTDNvUloub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9pbmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ltYWdlcy93aWxsLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9uZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1idG4tc2l6ZTogNzBweDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbiAgc3JjOiBsb2NhbChcXFwiRGVtaXRoc1xcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwiT3BlblR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zcmMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMC41ZnIgM2ZyIC8gMWZyO1xcbn1cXG5cXG4uc2VlLWl0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLXNpemUpO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICByaWdodDogMzVweDtcXG4gIHRvcDogMjUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VlLWl0ZW0gPiBzdmcge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5zZWUtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAxNDEsIDE0MSk7XFxufVxcblxcbiNkb2luZyxcXG4jbGF0ZSxcXG4jd3JpdGUsXFxuI2NvbXBsZXRlZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMy41ZnIgMWZyO1xcbn1cXG5cXG4jd3JpdGUgPiBmaWVsZHNldCB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKSAzZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2pOYW1lQ29udGFpbmVyLFxcbi5wcm9qVGltZUNvbnRhaW5lcixcXG4ucHJvakRhdGVDb250YWluZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxufVxcblxcbi5wcm9qTmFtZUNvbnRhaW5lciA+IGxhYmVsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnByb2pEb25lQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzUwcHg7XFxufVxcblxcbi5wcm9qRG9uZUNvbnRhaW5lciA+IGxhYmVsIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qVGV4dENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvalRpbWVDb250YWluZXIgPiBsYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucGFnZS1kb2luZy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JldHVybi10ZXh0IHtcXG4gIHdpZHRoOiB2YXIoLS1idG4tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNyZXR1cm4tdGV4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5wYWdlLXdyaXRlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGFnZS1jb21wbGV0ZWQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jaG9vc2UtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJhY2stY2hvb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDEwcHg7XFxuICB3aWR0aDogNDVweDtcXG4gIGhlaWdodDogNDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5iYWNrLWNob29zZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNob29zZS1jb250YWluZXIgPiAjd3JhcC1jaG9vc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3dyYXAtY2hvb3NlID4gZGl2IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLml0ZW0tbmFtZSxcXG4uaXRlbS10aW1lLFxcbi5pdGVtLWRhdGUsXFxuLml0ZW0tdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaXRlbS1uYW1lID4gaDMsXFxuLml0ZW0tdGltZSA+IGgzLFxcbi5pdGVtLWRhdGUgPiBoMyxcXG4uaXRlbS10ZXh0ID4gaDMge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4jd3JhcC1jaG9vc2UgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDIyMSwgMjIxLCAwLjYyNyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kb2luZy13cmFwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5MYXRlLXdyYXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbXBsZXRlZC13cmFwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5uYXZiYXIgPiAubmF2YmFyLWRpdi1wcm9qZWN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLm5hdmJhci1kaXYtcHJvamVjdHMgPiAubmF2YmFyLWgzLXByb2plY3RzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVtaXRoc1xcXCI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb250ZW50LWNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDIzJTtcXG4gIGhlaWdodDogNjclO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNhcmQgPiBoNCB7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgdG9wOiAxNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIxNSwgMjA1LCAyMDUsIDAuNzk1KTtcXG4gIHdpZHRoOiB2YXIoLS1idG4tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZW1pdGhzXFxcIjtcXG59XFxuXFxuLmFkZC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWQ4ZDg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtaXRlbSA+IHN2ZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCOzhEQUNnRTtFQUNoRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWDt3RUFDc0U7QUFDeEU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBMkQ7RUFDM0Qsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5REFBc0Q7RUFDdEQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5REFBcUQ7RUFDckQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseURBQXFEO0VBQ3JELDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7OztFQUlFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlEQUFzRDtFQUN0RCwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5REFBcUQ7RUFDckQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseURBQXFEO0VBQ3JELDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLDRDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1idG4tc2l6ZTogNzBweDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbiAgc3JjOiBsb2NhbChcXFwiRGVtaXRoc1xcXCIpLFxcbiAgICB1cmwoXFxcIi4vY29tcG9uZW50cy9mb250cy9EZW1pdGhzLUwzb1JaLm90ZlxcXCIpIGZvcm1hdChcXFwiT3BlblR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zcmMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2NvbXBvbmVudHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDNmciAvIDFmcjtcXG59XFxuXFxuLnNlZS1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiB2YXIoLS1idG4tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1zaXplKTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgcmlnaHQ6IDM1cHg7XFxuICB0b3A6IDI1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNlZS1pdGVtID4gc3ZnIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uc2VlLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NCwgMTQxLCAxNDEpO1xcbn1cXG5cXG4jZG9pbmcsXFxuI2xhdGUsXFxuI3dyaXRlLFxcbiNjb21wbGV0ZWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDMuNWZyIDFmcjtcXG59XFxuXFxuI3dyaXRlID4gZmllbGRzZXQge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcikgM2ZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qTmFtZUNvbnRhaW5lcixcXG4ucHJvalRpbWVDb250YWluZXIsXFxuLnByb2pEYXRlQ29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4ucHJvak5hbWVDb250YWluZXIgPiBsYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5wcm9qRG9uZUNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDM1MHB4O1xcbn1cXG5cXG4ucHJvakRvbmVDb250YWluZXIgPiBsYWJlbCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvalRleHRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnByb2pUaW1lQ29udGFpbmVyID4gbGFiZWwge1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLnBhZ2UtZG9pbmctY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2ltYWdlcy9kb2luZy5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JldHVybi10ZXh0IHtcXG4gIHdpZHRoOiB2YXIoLS1idG4tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNyZXR1cm4tdGV4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5wYWdlLXdyaXRlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvd2lsbC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBhZ2UtY29tcGxldGVkLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9uZS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNob29zZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmFjay1jaG9vc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTBweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmJhY2stY2hvb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hvb3NlLWNvbnRhaW5lciA+ICN3cmFwLWNob29zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jd3JhcC1jaG9vc2UgPiBkaXYge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaXRlbS1uYW1lLFxcbi5pdGVtLXRpbWUsXFxuLml0ZW0tZGF0ZSxcXG4uaXRlbS10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pdGVtLW5hbWUgPiBoMyxcXG4uaXRlbS10aW1lID4gaDMsXFxuLml0ZW0tZGF0ZSA+IGgzLFxcbi5pdGVtLXRleHQgPiBoMyB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcblxcbiN3cmFwLWNob29zZSA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgMjIxLCAyMjEsIDAuNjI3KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRvaW5nLXdyYXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2NvbXBvbmVudHMvaW1hZ2VzL2RvaW5nLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uTGF0ZS13cmFwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2ltYWdlcy93aWxsLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29tcGxldGVkLXdyYXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2NvbXBvbmVudHMvaW1hZ2VzL2RvbmUuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5uYXZiYXIgPiAubmF2YmFyLWRpdi1wcm9qZWN0cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLm5hdmJhci1kaXYtcHJvamVjdHMgPiAubmF2YmFyLWgzLXByb2plY3RzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVtaXRoc1xcXCI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb250ZW50LWNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDIzJTtcXG4gIGhlaWdodDogNjclO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNhcmQgPiBoNCB7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgdG9wOiAxNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIxNSwgMjA1LCAyMDUsIDAuNzk1KTtcXG4gIHdpZHRoOiB2YXIoLS1idG4tc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1zaXplKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZW1pdGhzXFxcIjtcXG59XFxuXFxuLmFkZC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWQ4ZDg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtaXRlbSA+IHN2ZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIE1hZGUgYnkgTXJFcG9jaFxuXG4vLyBUaGlzIGZpbGUgd2FzIG1hZGUgdG8gYmUgZXhwb3J0ZWQgZm9yIHVzZSBpbiBvdGhlciBmaWxlcywgaXQgaG9sZHMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgaHRtbCBlbGVtZW50cyBpbiBlYXNpZXIgd2F5XG5cbi8vIGRpdkNyZWF0ZSBmdW5jdGlvbiBleHByZXNzaW9uIHRha2VzIGxpa2UgZmlyc3Qgd2hhdCBpcyBpbnNpZGUgYW5kIHRoZW4gY2xhc3MgYW5kIHJldHVybnMgZGl2IGF0IGVuZFxuXG5jb25zdCBtZXRob2RDcmVhdGUgPSAoaHRtbE5hbWUsIGluc2lkZSwgY2xhc3NBZGQsIGlkQWRkLCBpbm5lckh0bWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaHRtbE5hbWUpO1xuICBlbGVtZW50LmFwcGVuZChpbnNpZGUpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBlbGVtZW50LmlkID0gaWRBZGQ7XG4gIH1cbiAgaWYgKGlubmVySHRtbCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgZGl2Q3JlYXRlID0gKEluc2lkZURpdiwgY2xhc3NBZGQsIGlkQWRkLCBpbm5lckh0bWwpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmFwcGVuZChJbnNpZGVEaXYpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGRpdi5pZCA9IGlkQWRkO1xuICB9XG4gIGlmIChpbm5lckh0bWwpIHtcbiAgICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICB9XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBuYXZDcmVhdGUgPSAoSW5zaWRlTmF2LCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2LmFwcGVuZChJbnNpZGVOYXYpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIG5hdi5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBuYXY7XG59O1xuXG4vLyBJbWdDcmVhdGUgaXMgcmV0dXJucyB0YWtlcyBJbXBvcnRlZCBpbWcgYW5kIHJldHVybnMgaXQgcmVhZHkgZm9yIHVzZSB0byBhcHBlbmQgdG8gdGhlIGRpdiBvciBvdGhlciB1c2VcblxuY29uc3QgSW1nQ3JlYXRlID0gKGltYWdlKSA9PiB7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gaW1hZ2U7XG4gIHJldHVybiBpbWc7XG59O1xuXG4vLyBoMkNyZWF0ZSBjcmVhdGVzIGgyIGVsZW1lbnQgd2hpY2ggdGFrZXMgdGV4dENvbnRlbnQgYW5kIGNsYXNzIGFuZCByZXR1cm5zIGgyXG5cbmNvbnN0IGgxQ3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBoMS5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgaDEuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gaDE7XG59O1xuXG5jb25zdCBoMkNyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgaDIuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGgyLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGgyO1xufTtcblxuY29uc3QgaDNDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGgzLmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoMy5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoMztcbn07XG5cbi8vIGg0Q3JlYXRlIGNyZWF0ZXMgaDQgZWxlbWVudCB3aGljaCB0YWtlcyB0ZXh0Q29udGVudCBhbmQgY2xhc3MgYW5kIHJldHVybnMgaDRcblxuY29uc3QgaDRDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBoNC50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGg0LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoNC5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoNDtcbn07XG5cbmNvbnN0IGg1Q3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgaDUudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBoNS5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgaDUuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gaDU7XG59O1xuXG4vLyBwQ3JlYXRlIGNyZWF0ZXMgcGFyYWdyYWhwIHdpdGggZmlyc3QgcGFyYW1ldGVyIHRleHQgYW5kIHNlY29uZCBjbGFzcyBhbmQgcmV0dXJucyBwYXJhZ3JhcGhcblxuY29uc3QgcENyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwLnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgcC5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgcC5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBwO1xufTtcblxuY29uc3QgaW5wdXRDcmVhdGUgPSAocGxhY2VIb2xkZXIsIGNsYXNzQWRkLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlSG9sZGVyO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaW5wdXQudHlwZSA9IHR5cGU7XG5cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgZmllbGRzZXRDcmVhdGUgPSAoSW5zaWRlRmllbGQsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgZmllbGQuYXBwZW5kKEluc2lkZUZpZWxkKTtcbiAgZmllbGQuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGZpZWxkLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGZpZWxkO1xufTtcblxuLy8gZXhwb3J0aW5nIGFsbCBmdW5jdGlvbiBleHByZXNzaW9uc1xuXG5leHBvcnQge1xuICBtZXRob2RDcmVhdGUsXG4gIGRpdkNyZWF0ZSxcbiAgbmF2Q3JlYXRlLFxuICBJbWdDcmVhdGUsXG4gIGgxQ3JlYXRlLFxuICBoMkNyZWF0ZSxcbiAgaDNDcmVhdGUsXG4gIGg0Q3JlYXRlLFxuICBoNUNyZWF0ZSxcbiAgcENyZWF0ZSxcbiAgaW5wdXRDcmVhdGUsXG4gIGZpZWxkc2V0Q3JlYXRlLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gXCIuL2NvbXBvbmVudHMvbWV0aG9kc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9mb250cy9EZW1pdGhzLUwzb1JaLm90ZlwiO1xuXG5jb25zdCBzcmMgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcInNyY1wiKTtcblxuY29uc3QgaWRHZXQgPSAoKSA9PiB7XG4gIGNvbnN0IGlkQ2FsbGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJJZFwiKTtcbiAgcmV0dXJuIGlkQ2FsbGVkO1xufTtcblxuY29uc3QgaWRTZXQgPSAodmFsdWUpID0+IHtcbiAgY29uc3QgaWRDaGFuZ2VkID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJJZFwiLCBgJHt2YWx1ZX1gKTtcbiAgcmV0dXJuIGlkQ2hhbmdlZDtcbn07XG5cbmZ1bmN0aW9uIGxvY2FsSXRlbShpdGVtT2JqZWN0LCBpZCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtpZH1gLCBKU09OLnN0cmluZ2lmeShpdGVtT2JqZWN0KSk7XG59XG5cbmNvbnN0IGlkTG9jYWxNZWFzdXJlID0gKCkgPT4ge1xuICBjb25zdCBub3dJZCA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxO1xuICByZXR1cm4gbm93SWQ7XG59O1xuXG5jb25zdCBjaGVja0lmSWQgPSAoKSA9PiB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJJZFwiKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiSWRcIiwgXCIwXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHJlcXVlc3RJdGVtID0gKGlkLCBpdGVtKSA9PiB7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7aWR9YCkpIHtcbiAgICByZXR1cm4gXCJlbXB0eVwiO1xuICB9XG4gIGNvbnN0IGl0ZW1zT2JqZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtpZH1gKSk7XG4gIGlmICghaXRlbXNPYmplY3RbaXRlbV0pIHtcbiAgICByZXR1cm4gXCJlbXB0eVwiO1xuICB9XG4gIGNvbnN0IHJlcXVlc3RlZEl0ZW0gPSBpdGVtc09iamVjdFtpdGVtXTtcbiAgcmV0dXJuIHJlcXVlc3RlZEl0ZW07XG59O1xuXG5jaGVja0lmSWQoKTtcblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIE5ld0l0ZW0obmFtZSwgdGltZSwgZGF0ZSwgY29tcGxldGVkLCB0ZXh0KSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMudGltZSA9IHRpbWU7XG4gIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB0aGlzLnRleHQgPSB0ZXh0O1xufVxuXG5mdW5jdGlvbiBMb2FkSChoVHlwZSwgaFZhbHVlKSB7XG4gIGNvbnN0IGxvYWRlckgzID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoaFR5cGUsIGhWYWx1ZSwgXCJmdW5jdGlvbi1sb2FkZWQtaDNcIik7XG5cbiAgcmV0dXJuIGxvYWRlckgzO1xufVxuXG4vLyBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbi8vICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xuLy8gfVxuLy8gZWxzZSB7XG4vLyAgIC8vIFRvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXNcbi8vIH1cblxuLy8gZGF0ZSA9PT0gMC1ZZWFyLCAxLW1vbnRoLCAyLWRheVxuXG5jb25zdCBsYXRlQ2hlY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBbXTtcbiAgY29uc3QgdGltZUNvbnRhaW5lciA9IFtdO1xuICBjb25zdCBsb2NhbExlbmd0aCA9IHBhcnNlSW50KGlkR2V0KCksIDEwKSAtIDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGxvY2FsU3RvciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaS50b1N0cmluZygpKSk7XG4gICAgaWYgKGxvY2FsU3Rvci5kYXRlIHx8IChsb2NhbFN0b3IuZGF0ZSAmJiBsb2NhbFN0b3IudGltZSkpIHtcbiAgICAgIGNvbnN0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgY3VyWWVhciA9IGN1ckRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IGN1ck1vbnRoID0gY3VyRGF0ZS5nZXRNb250aCgpO1xuICAgICAgY29uc3QgY3VyRGF5ID0gY3VyRGF0ZS5nZXREYXkoKTtcbiAgICAgIGNvbnN0IGN1ckhvdXIgPSBjdXJEYXRlLmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBjdXJNaW51dGUgPSBjdXJEYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgIGRhdGVDb250YWluZXJbaV0gPSBsb2NhbFN0b3IuZGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICB0aW1lQ29udGFpbmVyW2ldID0gbG9jYWxTdG9yLnRpbWUuc3BsaXQoXCI6XCIpO1xuXG4gICAgICBpZiAoZGF0ZUNvbnRhaW5lcltpXVtcIjBcIl0gPiBjdXJZZWFyKSB7XG4gICAgICAgIGxvY2FsU3Rvci5sYXRlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRlQ29udGFpbmVyW2ldW1wiMVwiXSA+IGN1ck1vbnRoICYmXG4gICAgICAgIGRhdGVDb250YWluZXJbaV1bXCIwXCJdID09PSBjdXJZZWFyXG4gICAgICApIHtcbiAgICAgICAgbG9jYWxTdG9yLmxhdGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGVDb250YWluZXJbaV1bXCIyXCJdID4gY3VyRGF5ICYmXG4gICAgICAgIGRhdGVDb250YWluZXJbaV1bXCIxXCJdID09PSBjdXJNb250aCAmJlxuICAgICAgICBkYXRlQ29udGFpbmVyW2ldW1wiMFwiXSA9PT0gY3VyWWVhclxuICAgICAgKSB7XG4gICAgICAgIGxvY2FsU3Rvci5sYXRlID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0aW1lQ29udGFpbmVyW2ldW1wiMFwiXSA+IGN1ckhvdXIgJiZcbiAgICAgICAgZGF0ZUNvbnRhaW5lcltpXVtcIjJcIl0gPT09IGN1ckRheSAmJlxuICAgICAgICBkYXRlQ29udGFpbmVyW2ldW1wiMVwiXSA9PT0gY3VyTW9udGggJiZcbiAgICAgICAgZGF0ZUNvbnRhaW5lcltpXVtcIjBcIl0gPT09IGN1clllYXJcbiAgICAgICkge1xuICAgICAgICBsb2NhbFN0b3IubGF0ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGltZUNvbnRhaW5lcltpXVtcIjFcIl0gPj0gY3VyTWludXRlICYmXG4gICAgICAgIHRpbWVDb250YWluZXJbaV1bXCIwXCJdID09PSBjdXJIb3VyICYmXG4gICAgICAgIGRhdGVDb250YWluZXJbaV1bXCIyXCJdID09PSBjdXJEYXkgJiZcbiAgICAgICAgZGF0ZUNvbnRhaW5lcltpXVtcIjFcIl0gPT09IGN1ck1vbnRoICYmXG4gICAgICAgIGRhdGVDb250YWluZXJbaV1bXCIwXCJdID09PSBjdXJZZWFyXG4gICAgICApIHtcbiAgICAgICAgbG9jYWxTdG9yLmxhdGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3Rvci5sYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaS50b1N0cmluZygpLCBKU09OLnN0cmluZ2lmeShsb2NhbFN0b3IpKTtcbiAgfVxufTtcblxubGF0ZUNoZWNrKCk7XG5cbmNvbnN0IGFzc2lnblBsYWNlID0gKCkgPT4ge1xuICBjb25zdCBudW1PZkl0ZW1zID0gbG9jYWxTdG9yYWdlLmxlbmd0aCAtIDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZJdGVtczsgaSArPSAxKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2l9YCkpO1xuICAgIGlmICh2YWx1ZS5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgIHZhbHVlLnBsYWNlID0gXCJjb21wbGV0ZWRcIjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkudG9TdHJpbmcoKSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGlmICh2YWx1ZS5sYXRlID09PSB0cnVlKSB7XG4gICAgICAgIHZhbHVlLnBsYWNlID0gXCJsYXRlXCI7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGkudG9TdHJpbmcoKSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlLnBsYWNlID0gXCJkb2luZ1wiO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpLnRvU3RyaW5nKCksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5hc3NpZ25QbGFjZSgpO1xuXG5jb25zdCBjaGVja1BhZ2UgPSAodmFsdWUpID0+IHtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uaWQ7XG4gIGxldCBidG5Mb2dpYztcbiAgbGV0IHN1Ym1pdEJ0bnM7XG4gIGxldCB3cml0ZUJ0bnM7XG4gIGxldCBuZXh0QnRuO1xuICBsZXQgcHJldkJ0bjtcbiAgY29uc3QgcGFnZUJ0bnMgPSB7fTtcbiAgaWYgKGN1cnJlbnRQYWdlID09PSBcIm1haW5cIikge1xuICAgIGJ0bkxvZ2ljID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMVwiXS5jaGlsZHJlbltcIjNcIl07XG4gICAgd3JpdGVCdG5zID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMVwiXS5jaGlsZHJlbltcIjRcIl07XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgPT09IFwiY2hvb3NlXCIpIHtcbiAgICBidG5Mb2dpYyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjNcIl07XG4gICAgcGFnZUJ0bnMuZG9pbmdCdG5zID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjBcIl07XG4gICAgcGFnZUJ0bnMubGF0ZUJ0bnMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiMFwiXTtcbiAgICBwYWdlQnRucy5jb21wbGV0ZWRCdG5zID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMlwiXS5jaGlsZHJlbltcIjBcIl07XG4gIH0gZWxzZSBpZiAoXG4gICAgY3VycmVudFBhZ2UgPT09IFwiZG9pbmdcIiB8fFxuICAgIGN1cnJlbnRQYWdlID09PSBcImxhdGVcIiB8fFxuICAgIGN1cnJlbnRQYWdlID09PSBcImNvbXBsZXRlZFwiIHx8XG4gICAgY3VycmVudFBhZ2UgPT09IFwid3JpdGVcIlxuICApIHtcbiAgICBidG5Mb2dpYyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjBcIl07XG4gICAgc3VibWl0QnRucyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjJcIl0uY2hpbGRyZW5bXCIwXCJdO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSBcInNlZVwiKSB7XG4gICAgYnRuTG9naWMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIwXCJdO1xuICAgIG5leHRCdG4gPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIyXCJdLmNoaWxkcmVuW1wiMFwiXTtcbiAgICBwcmV2QnRuID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiM1wiXS5jaGlsZHJlbltcIjBcIl07XG4gIH1cblxuICByZXR1cm4geyBidG5Mb2dpYywgcGFnZUJ0bnMsIHN1Ym1pdEJ0bnMsIHdyaXRlQnRucywgbmV4dEJ0biwgcHJldkJ0biB9O1xufTtcblxuY29uc3QgbXlUeXBlID0gKGlkKSA9PiB7XG4gIGNvbnN0IG15Q29tcGxldGUgPSByZXF1ZXN0SXRlbShpZCwgXCJjb21wbGV0ZVwiKTtcbiAgY29uc3QgbXlMYXRlID0gcmVxdWVzdEl0ZW0oaWQsIFwiY29tcGxldGVcIik7XG5cbiAgaWYgKG15Q29tcGxldGUgPT09IHRydWUpIHtcbiAgICByZXR1cm4gXCJjb21wbGV0ZWRcIjtcbiAgfVxuICBpZiAobXlMYXRlID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIFwibGF0ZVwiO1xuICB9XG5cbiAgcmV0dXJuIFwiZG9pbmdcIjtcbn07XG5cbi8vXG5cbmNvbnN0IG5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgbXlOYXZiYXIgPSBtZXRob2RzLm5hdkNyZWF0ZShcIlwiLCBcIm5hdmJhclwiKTtcbiAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBtZXRob2RzLmgzQ3JlYXRlKFwiVG9kb1wiLCBcIm5hdmJhci1oMy1wcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBtZXRob2RzLmRpdkNyZWF0ZShwcm9qZWN0c0hlYWRlciwgXCJuYXZiYXItZGl2LXByb2plY3RzXCIpO1xuICBteU5hdmJhci5hcHBlbmQocHJvamVjdHNEaXYpO1xuXG4gIHJldHVybiBteU5hdmJhcjtcbn07XG5cbmNvbnN0IFN2Z1BpY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHBsdXNJY29uID0gYDxzdmcgdmlld0JveD1cIjAgMCAyNiAyNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1pcIj4gPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuICBjb25zdCByZXR1cm5JY29uID0gYDxzdmcgc3R5bGU9XCJ3aWR0aDoyNHB4O2hlaWdodDoyNHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjAsMTFWMTNIOEwxMy41LDE4LjVMMTIuMDgsMTkuOTJMNC4xNiwxMkwxMi4wOCw0LjA4TDEzLjUsNS41TDgsMTFIMjBaXCI+IDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuICBjb25zdCB3cml0ZUljb24gPSBgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwXCIgeT1cIjBcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjU2IDI1NlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PHN0eWxlPi5zdDJ7ZmlsbDojNjllYmZjfS5zdDV7ZmlsbDojZDQ3NmUyfS5zdDE0e2ZpbGw6I2VkZDRjMn08L3N0eWxlPjxwYXRoIGQ9XCJNMjA1IDBIMjBjNS41MiAwIDEwLjUyIDIuMjQgMTQuMTQgNS44NlM0MCAxNC40OCA0MCAyMHYyMzZoMTg1VjIwYzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwelwiIHN0eWxlPVwiZmlsbDojZmZlZmU0XCIvPjxwYXRoIGNsYXNzPVwic3QxNFwiIGQ9XCJNNDAgMjUwaDE4NXY2SDQwelwiLz48cGF0aCBkPVwiTTIwNSAwSDIwYzUuNTIgMCAxMC41MiAyLjI0IDE0LjE0IDUuODYuMDQ1LjA0NS4wODMuMDk1LjEyNy4xNEgyMDVjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjB2LTZjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjB6XCIgc3R5bGU9XCJmaWxsOiNmZmY3ZjJcIi8+PHBhdGggZD1cIk0xNDQgNTZINzBhOCA4IDAgMCAxIDAtMTZoNzRhOCA4IDAgMCAxIDAgMTZ6XCIgc3R5bGU9XCJmaWxsOiNmZjgzNTRcIi8+PHBhdGggY2xhc3M9XCJzdDE0XCIgZD1cIk0xODggODRINjZhNCA0IDAgMCAxIDAtOGgxMjJhNCA0IDAgMCAxIDAgOHpNMTg4IDExMS4ySDY2YTQgNCAwIDAgMSAwLThoMTIyYTQgNCAwIDAgMSAwIDh6TTE4OCAxMzguNEg2NmE0IDQgMCAwIDEgMC04aDEyMmE0IDQgMCAwIDEgMCA4ek0xODggMTY1LjZINjZhNCA0IDAgMCAxIDAtOGgxMjJhNCA0IDAgMCAxIDAgOHpNMTg4IDE5Mi44SDY2YTQgNCAwIDAgMSAwLThoMTIyYTQgNCAwIDAgMSAwIDh6TTE0NyAyMjBINjZhNCA0IDAgMCAxIDAtOGg4MWE0IDQgMCAwIDEgMCA4ek00MCAyMHY2MEgwVjIwQzAgOC45NSA4Ljk1IDAgMjAgMGM1LjUyIDAgMTAuNTIgMi4yNCAxNC4xNCA1Ljg2UzQwIDE0LjQ4IDQwIDIwelwiLz48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoMzAgMTczLjQxNyAxNzUuNTY1KVwiIGNsYXNzPVwic3Q1XCIgZD1cIk0xNjMuNDExIDE1MC41NzVoMjB2NTBoLTIwelwiLz48cGF0aCBjbGFzcz1cInN0NVwiIGQ9XCJtMTY5LjU3MSAyMDIuMjI2LTE3LjMyLTEwLTUuNjI1IDI0LjU2N2EyLjcwOCAyLjcwOCAwIDAgMCA0LjQ4MyAyLjU4OWwxOC40NjItMTcuMTU2elwiLz48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoMzAgMjEyLjE2MyAxMDguNDQ3KVwiIGNsYXNzPVwic3QyXCIgZD1cIk0yMDIuMTYxIDU1Ljk1OGgyMHYxMDVoLTIwelwiLz48cGF0aCB0cmFuc2Zvcm09XCJyb3RhdGUoLTE1MCAyNDQuODA3IDc1LjkyKVwiIGNsYXNzPVwic3QyXCIgZD1cIk0yNDIuODAzIDcyLjkyaDR2NmgtNHpcIi8+PHBhdGggY2xhc3M9XCJzdDJcIiBkPVwiTTIyMy45OTkgMTIzLjk1NGE0IDQgMCAwIDAgNS40NjQtMS40NjRsMjYtNDUuMDMzYTQgNCAwIDEgMC02LjkyOC00bC0yNiA0NS4wMzNhNCA0IDAgMCAwIDEuNDY0IDUuNDY0elwiLz48cGF0aCBjbGFzcz1cInN0NVwiIGQ9XCJNMjUwLjkxMSA0MS4zNDFjLTQuNzgzLTIuNzYxLTEwLjg5OS0xLjEyMy0xMy42NiAzLjY2bC03LjUgMTIuOTkgMTcuMzIgMTAgNy41LTEyLjk5YzIuNzYyLTQuNzgyIDEuMTIzLTEwLjg5OC0zLjY2LTEzLjY2elwiPiA8L3BhdGg+PC9zdmc+YDtcblxuICBjb25zdCBub3RlSWNvbiA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPm5vdGUtbXVsdGlwbGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0zLDZWMjJIMjFWMjRIM0EyLDIgMCAwLDEgMSwyMlY2SDNNMTYsOUgyMS41TDE2LDMuNVY5TTcsMkgxN0wyMyw4VjE4QTIsMiAwIDAsMSAyMSwyMEg3QzUuODksMjAgNSwxOS4xIDUsMThWNEEyLDIgMCAwLDEgNywyTTcsNFYxOEgyMVYxMUgxNFY0SDdaXCI+IDwvcGF0aD48L3N2Zz5gO1xuICByZXR1cm4geyBwbHVzSWNvbiwgcmV0dXJuSWNvbiwgd3JpdGVJY29uLCBub3RlSWNvbiB9O1xufTtcblxuY29uc3QgY29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgbXlDb250ZW50ID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJjb250ZW50LWNhcmRzXCIpO1xuICBmdW5jdGlvbiBDYXJkKGg0VGV4dCkge1xuICAgIGNvbnN0IGNhcmREaXYgPSBtZXRob2RzLmRpdkNyZWF0ZShoNFRleHQsIFwiY2FyZFwiKTtcbiAgICByZXR1cm4gY2FyZERpdjtcbiAgfVxuXG4gIGNvbnN0IGNhcmRzSW5uZXIgPSB7XG4gICAgZG9pbmdINDogbWV0aG9kcy5oNENyZWF0ZShcIkRvaW5nXCIsIFwiZG9pbmctY29udGVudFwiKSxcbiAgICBsYXRlSDQ6IG1ldGhvZHMuaDRDcmVhdGUoXCJMYXRlXCIsIFwiTGF0ZS1jb250ZW50XCIpLFxuICAgIGNvbXBsZXRlZEg0OiBtZXRob2RzLmg0Q3JlYXRlKFwiY29tcGxldGVkXCIsIFwiY29tcGxldGVkLWNvbnRlbnRcIiksXG4gIH07XG5cbiAgY29uc3QgZG9pbmcgPSBDYXJkKGNhcmRzSW5uZXIuZG9pbmdINCk7XG4gIGNvbnN0IGxhdGUgPSBDYXJkKGNhcmRzSW5uZXIubGF0ZUg0KTtcbiAgY29uc3QgY29tcGxldGVkID0gQ2FyZChjYXJkc0lubmVyLmNvbXBsZXRlZEg0KTtcblxuICBjb25zdCBhZGQgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcImFkZC1pdGVtXCIsIFwiXCIsIFN2Z1BpY3QoKS5wbHVzSWNvbik7XG4gIGNvbnN0IHNlZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwic2VlLWl0ZW1cIiwgXCJcIiwgU3ZnUGljdCgpLm5vdGVJY29uKTtcblxuICBteUNvbnRlbnQuYXBwZW5kKGRvaW5nLCBsYXRlLCBjb21wbGV0ZWQsIGFkZCwgc2VlKTtcbiAgY29uc3QgYWRkSHRtbCA9IG15Q29udGVudC5jaGlsZHJlbltcIjNcIl07XG5cbiAgYWRkSHRtbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICBhZGRIdG1sLnRleHRDb250ZW50ID0gXCJOZXdcIjtcbiAgfSk7XG5cbiAgYWRkSHRtbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGFkZEh0bWwuaW5uZXJIVE1MID0gU3ZnUGljdCgpLnBsdXNJY29uO1xuICB9KTtcblxuICByZXR1cm4gbXlDb250ZW50O1xufTtcblxuY29uc3QgVG9kb05hbWUgPSAocGFnZU5hbWUpID0+IHtcbiAgY29uc3QgVG9kb05hbWVDb250YWluZXIgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcInByb2pOYW1lQ29udGFpbmVyXCIpO1xuICBjb25zdCBUb2RvTmFtZUxhYmVsID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoXG4gICAgXCJMYWJlbFwiLFxuICAgIFwiVG9kbyBuYW1lXCIsXG4gICAgYGxhYmVsLSR7cGFnZU5hbWV9LW5hbWVgXG4gICk7XG4gIGNvbnN0IFRvZG9OYW1lSW5wdXQgPSBtZXRob2RzLmlucHV0Q3JlYXRlKFxuICAgIFwiTXkgYXdlc29tZSBwcm9qZWN0IVwiLFxuICAgIFwibmFtZS1kb2luZ1wiLFxuICAgIFwidGV4dFwiXG4gICk7XG5cbiAgVG9kb05hbWVDb250YWluZXIuYXBwZW5kKFRvZG9OYW1lTGFiZWwsIFRvZG9OYW1lSW5wdXQpO1xuXG4gIHJldHVybiBUb2RvTmFtZUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IFRvZG9UaW1lID0gKHBhZ2VOYW1lKSA9PiB7XG4gIGNvbnN0IFRvZG9UaW1lQ29udGFpbmVyID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJwcm9qVGltZUNvbnRhaW5lclwiKTtcbiAgY29uc3QgVG9kb1RpbWVMYWJlbCA9IG1ldGhvZHMubWV0aG9kQ3JlYXRlKFxuICAgIFwiTGFiZWxcIixcbiAgICBcIkNvbXBsZXRpb24gVGltZVwiLFxuICAgIGBsYWJlbC0ke3BhZ2VOYW1lfS10aW1lYFxuICApO1xuICBjb25zdCBUb2RvVGltZUlucHV0ID0gbWV0aG9kcy5pbnB1dENyZWF0ZShcIlwiLCBgJHtwYWdlTmFtZX0tdGltZWAsIFwidGltZVwiKTtcblxuICBUb2RvVGltZUNvbnRhaW5lci5hcHBlbmQoVG9kb1RpbWVMYWJlbCwgVG9kb1RpbWVJbnB1dCk7XG5cbiAgcmV0dXJuIFRvZG9UaW1lQ29udGFpbmVyO1xufTtcbmNvbnN0IFRvZG9EYXRlID0gKHBhZ2VOYW1lKSA9PiB7XG4gIGNvbnN0IFRvZG9EYXRlQ29udGFpbmVyID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJwcm9qRGF0ZUNvbnRhaW5lclwiKTtcbiAgY29uc3QgVG9kb0RhdGVMYWJlbCA9IG1ldGhvZHMubWV0aG9kQ3JlYXRlKFxuICAgIFwiTGFiZWxcIixcbiAgICBcIkNvbXBsZXRpb24gZGF0ZVwiLFxuICAgIGBsYWJlbC0ke3BhZ2VOYW1lfS1kYXRlYFxuICApO1xuICBjb25zdCBUb2RvRGF0ZUlucHV0ID0gbWV0aG9kcy5pbnB1dENyZWF0ZShcIlwiLCBgJHtwYWdlTmFtZX0tZGF0ZWAsIFwiZGF0ZVwiKTtcblxuICBUb2RvRGF0ZUNvbnRhaW5lci5hcHBlbmQoVG9kb0RhdGVMYWJlbCwgVG9kb0RhdGVJbnB1dCk7XG5cbiAgcmV0dXJuIFRvZG9EYXRlQ29udGFpbmVyO1xufTtcbmNvbnN0IFRvZG9UZXh0ID0gKHBhZ2VOYW1lKSA9PiB7XG4gIGNvbnN0IFRvZG9UZXh0Q29udGFpbmVyID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJwcm9qVGV4dENvbnRhaW5lclwiKTtcbiAgY29uc3QgVG9kb1RleHRJbnNpZGUgPSBtZXRob2RzLm1ldGhvZENyZWF0ZShcbiAgICBcInRleHRhcmVhXCIsXG4gICAgXCJcIixcbiAgICBgJHtwYWdlTmFtZX0tcHJvalRleHRgXG4gICk7XG5cbiAgVG9kb1RleHRDb250YWluZXIuYXBwZW5kKFRvZG9UZXh0SW5zaWRlKTtcblxuICByZXR1cm4gVG9kb1RleHRDb250YWluZXI7XG59O1xuY29uc3QgVG9kb2NvbXBsZXRlZE9yID0gKHBhZ2VuYW1lKSA9PiB7XG4gIGNvbnN0IFRvZG9jb21wbGV0ZWRDb250YWluZXIgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcInByb2pEb25lQ29udGFpbmVyXCIpO1xuICBjb25zdCBUb2RvY29tcGxldGVkTGFiZWwgPSBtZXRob2RzLm1ldGhvZENyZWF0ZShcIkxhYmVsXCIsIFwiY29tcGxldGVkXCIpO1xuICBjb25zdCBUb2RvY29tcGxldGVkSW5zaWRlID0gbWV0aG9kcy5pbnB1dENyZWF0ZShcIlwiLCBcImRvbmVcIiwgXCJjaGVja2JveFwiKTtcblxuICBUb2RvY29tcGxldGVkQ29udGFpbmVyLmFwcGVuZChUb2RvY29tcGxldGVkTGFiZWwsIFRvZG9jb21wbGV0ZWRJbnNpZGUpO1xuXG4gIHJldHVybiBUb2RvY29tcGxldGVkQ29udGFpbmVyO1xufTtcbmNvbnN0IFRvZG9TdWJtaXQgPSAocGFnZU5hbWUpID0+IHtcbiAgY29uc3Qgc3VibWl0QnRuID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoXG4gICAgXCJidXR0b25cIixcbiAgICBcInN1Ym1pdFwiLFxuICAgIGAke3BhZ2VOYW1lfS1idG5gLFxuICAgIFwic3VibWl0QnRuXCJcbiAgKTtcblxuICBjb25zdCB3cmFwcGVkQnRuID0gbWV0aG9kcy5kaXZDcmVhdGUoc3VibWl0QnRuLCBcInN1Ym1pdC1idG4tY29udGFpbmVyXCIpO1xuXG4gIHJldHVybiB3cmFwcGVkQnRuO1xufTtcblxuZnVuY3Rpb24gV3JpdGluZ1BhZ2VzKHBhZ2VOYW1lKSB7XG4gIHRoaXMucGFnZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgYHBhZ2UtJHtwYWdlTmFtZX0tY29udGFpbmVyYCxcbiAgICBgJHtwYWdlTmFtZX1gXG4gICk7XG4gIHRoaXMuZmllbGQgPSBtZXRob2RzLmZpZWxkc2V0Q3JlYXRlKFwiXCIsIGBmaWVsZC0ke3BhZ2VOYW1lfWApO1xuICB0aGlzLnJldHVybkJ0biA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgYHJldHVybi0ke3BhZ2VOYW1lfWAsXG4gICAgXCJyZXR1cm4tdGV4dFwiLFxuICAgIFN2Z1BpY3QoKS5yZXR1cm5JY29uXG4gICk7XG5cbiAgdGhpcy5maWVsZC5hcHBlbmQoXG4gICAgVG9kb05hbWUoYCR7cGFnZU5hbWV9YCksXG4gICAgVG9kb1RpbWUoYCR7cGFnZU5hbWV9YCksXG4gICAgVG9kb0RhdGUoYCR7cGFnZU5hbWV9YCksXG4gICAgVG9kb2NvbXBsZXRlZE9yKGAke3BhZ2VOYW1lfWApLFxuICAgIFRvZG9UZXh0KGAke3BhZ2VOYW1lfWApXG4gICk7XG4gIHRoaXMucGFnZS5hcHBlbmQodGhpcy5yZXR1cm5CdG4sIHRoaXMuZmllbGQsIFRvZG9TdWJtaXQoYCR7cGFnZU5hbWV9YCkpO1xufVxuXG5jb25zdCBpZFNlZUNoZWNrID0gKGlkLCBwYWdlKSA9PiB7XG4gIGNvbnN0IGNoZWNraW5nVmFsdWUgPSByZXF1ZXN0SXRlbShpZCwgXCJwbGFjZVwiKTtcbiAgaWYgKGNoZWNraW5nVmFsdWUgPT09IHBhZ2UpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiBTZWVQYWdlKGlkLCB2YWx1ZSkge1xuICB0aGlzLm5hbWVJdGVtID0gcmVxdWVzdEl0ZW0oaWQsIFwibmFtZVwiKTtcbiAgdGhpcy50aW1lSXRlbSA9IHJlcXVlc3RJdGVtKGlkLCBcInRpbWVcIik7XG4gIHRoaXMuZGF0ZUl0ZW0gPSByZXF1ZXN0SXRlbShpZCwgXCJkYXRlXCIpO1xuICB0aGlzLnRleHRJdGVtID0gcmVxdWVzdEl0ZW0oaWQsIFwidGV4dFwiKTtcblxuICB0aGlzLnBhZ2UgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBgcGFnZS0ke3ZhbHVlfWApO1xuICB0aGlzLnBhZ2UuaWQgPSBcInNlZVwiO1xuXG4gIHRoaXMuZmllbGQgPSBtZXRob2RzLmZpZWxkc2V0Q3JlYXRlKFwiXCIsIGBmaWVsZC1SZWApO1xuICB0aGlzLnJldHVybkJ0biA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgYHJldHVybi1SZWAsXG4gICAgXCJyZXR1cm4tdGV4dFwiLFxuICAgIFN2Z1BpY3QoKS5yZXR1cm5JY29uXG4gICk7XG5cbiAgdGhpcy5uZXh0ID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoXCJidXR0b25cIiwgXCJuZXh0XCIsIFwiYnRuLW5leHRcIik7XG4gIHRoaXMucHJldiA9IG1ldGhvZHMubWV0aG9kQ3JlYXRlKFwiYnV0dG9uXCIsIFwicHJldml1c1wiLCBcImJ0bi1wcmV2XCIpO1xuXG4gIHRoaXMubmFtZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiTmFtZTpcIiwgXCJpdGVtLW5hbWVcIik7XG4gIHRoaXMubmFtZS5hcHBlbmQoTG9hZEgoXCJoM1wiLCB0aGlzLm5hbWVJdGVtKSk7XG4gIHRoaXMudGltZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiVGltZTpcIiwgXCJpdGVtLXRpbWVcIik7XG4gIHRoaXMudGltZS5hcHBlbmQoTG9hZEgoXCJoM1wiLCB0aGlzLnRpbWVJdGVtKSk7XG4gIHRoaXMuZGF0ZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiRGF0ZTpcIiwgXCJpdGVtLWRhdGVcIik7XG4gIHRoaXMuZGF0ZS5hcHBlbmQoTG9hZEgoXCJoM1wiLCB0aGlzLmRhdGVJdGVtKSk7XG4gIHRoaXMudGV4dCA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiVGV4dDpcIiwgXCJpdGVtLXRleHRcIik7XG4gIHRoaXMudGV4dC5hcHBlbmQoTG9hZEgoXCJoM1wiLCB0aGlzLnRleHRJdGVtKSk7XG5cbiAgdGhpcy5maWVsZC5hcHBlbmQodGhpcy5uYW1lLCB0aGlzLnRpbWUsIHRoaXMuZGF0ZSwgdGhpcy50ZXh0KTtcblxuICB0aGlzLm5leHRDb250YWluZXIgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcImJ0bi1uZXh0LWNvbnRhaW5lclwiKTtcbiAgdGhpcy5wcmV2Q29udGFpbmVyID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJidG4tcHJldi1jb250YWluZXJcIik7XG5cbiAgdGhpcy5uZXh0Q29udGFpbmVyLmFwcGVuZCh0aGlzLm5leHQpO1xuICB0aGlzLnByZXZDb250YWluZXIuYXBwZW5kKHRoaXMucHJldik7XG5cbiAgdGhpcy5wYWdlLmFwcGVuZChcbiAgICB0aGlzLnJldHVybkJ0bixcbiAgICB0aGlzLmZpZWxkLFxuICAgIHRoaXMubmV4dENvbnRhaW5lcixcbiAgICB0aGlzLnByZXZDb250YWluZXJcbiAgKTtcbn1cblxuY29uc3Qgd3JpdGVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBNeVBhZ2UgPSBuZXcgV3JpdGluZ1BhZ2VzKFwid3JpdGVcIik7XG4gIHJldHVybiBNeVBhZ2UucGFnZTtcbn07XG5cbmNvbnN0IGNob29zZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNob29zZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwiY2hvb3NlLWNvbnRhaW5lclwiLCBcImNob29zZVwiKTtcblxuICBjb25zdCBjaG9vc2VUZXh0ID0ge1xuICAgIGRvaW5nOiBcIkRvaW5nXCIsXG4gICAgbGF0ZTogXCJMYXRlXCIsXG4gICAgY29tcGxldGVkOiBcIkNvbXBsZXRlZFwiLFxuICB9O1xuXG4gIGNvbnN0IGRvaW5nQ2hvb3NlID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgbWV0aG9kcy5oM0NyZWF0ZShjaG9vc2VUZXh0LmRvaW5nLCBcImRvaW5nLWNob29zZS1oM1wiKSxcbiAgICBcImRvaW5nLWNob29zZS1kaXZcIlxuICApO1xuICBjb25zdCBsYXRlQ2hvb3NlID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgbWV0aG9kcy5oM0NyZWF0ZShjaG9vc2VUZXh0LmxhdGUsIFwiTGF0ZS1jaG9vc2UtaDNcIiksXG4gICAgXCJMYXRlLWNob29zZS1kaXZcIlxuICApO1xuICBjb25zdCBjb21wbGV0ZWRDaG9vc2UgPSBtZXRob2RzLmRpdkNyZWF0ZShcbiAgICBtZXRob2RzLmgzQ3JlYXRlKGNob29zZVRleHQuY29tcGxldGVkLCBcImNvbXBsZXRlZC1jaG9vc2UtaDNcIiksXG4gICAgXCJjb21wbGV0ZWQtY2hvb3NlLWRpdlwiXG4gICk7XG5cbiAgY29uc3QgZG9pbmdXcmFwID0gbWV0aG9kcy5kaXZDcmVhdGUoZG9pbmdDaG9vc2UsIFwiZG9pbmctd3JhcFwiLCBcIndyYXAtY2hvb3NlXCIpO1xuICBjb25zdCBsYXRlV3JhcCA9IG1ldGhvZHMuZGl2Q3JlYXRlKGxhdGVDaG9vc2UsIFwiTGF0ZS13cmFwXCIsIFwid3JhcC1jaG9vc2VcIik7XG4gIGNvbnN0IGNvbXBsZXRlZFdyYXAgPSBtZXRob2RzLmRpdkNyZWF0ZShcbiAgICBjb21wbGV0ZWRDaG9vc2UsXG4gICAgXCJjb21wbGV0ZWQtd3JhcFwiLFxuICAgIFwid3JhcC1jaG9vc2VcIlxuICApO1xuICBjb25zdCBiYWNrID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgXCJcIixcbiAgICBcImJhY2stY2hvb3NlXCIsXG4gICAgXCJyZXR1cm4tdGV4dFwiLFxuICAgIFN2Z1BpY3QoKS5yZXR1cm5JY29uXG4gICk7XG5cbiAgY2hvb3NlLmFwcGVuZChkb2luZ1dyYXAsIGxhdGVXcmFwLCBjb21wbGV0ZWRXcmFwLCBiYWNrKTtcblxuICByZXR1cm4gY2hvb3NlO1xufTtcblxuY29uc3Qgc2VlUGFnZSA9IChpZCwgdmFsdWUsIHBhZ2UpID0+IHtcbiAgY29uc3QgY2hvc2VuID0gbmV3IFNlZVBhZ2UoaWQsIHZhbHVlKTtcbiAgaWYgKGlkU2VlQ2hlY2soaWQsIHBhZ2UpID09PSBmYWxzZSkge1xuICAgIGNob3Nlbi5uYW1lLmlubmVySFRNTCA9IFwiZW1wdHlcIjtcbiAgICBjaG9zZW4udGltZS5pbm5lckhUTUwgPSBcImVtcHR5XCI7XG4gICAgY2hvc2VuLmRhdGUuaW5uZXJIVE1MID0gXCJlbXB0eVwiO1xuICAgIGNob3Nlbi50ZXh0LmlubmVySFRNTCA9IFwiZW1wdHlcIjtcbiAgfVxuICBjb25zdCBteVBhZ2UgPSBjaG9zZW4ucGFnZTtcbiAgY29uc3QgbXlGaWVsZCA9IGNob3Nlbi5maWVsZDtcbiAgcmV0dXJuIHsgbXlQYWdlLCBteUZpZWxkIH07XG59O1xuXG4vL1xuXG5jb25zdCByZXR1cm5CdG4gPSAodmFsdWUpID0+IHtcbiAgY29uc3QgcmV0dXJuQnRucyA9IGNoZWNrUGFnZShzcmMpLmJ0bkxvZ2ljO1xuICByZXR1cm5CdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3JjLmlubmVySFRNTCA9IFwiXCI7XG4gICAgc3JjLmFwcGVuZCh2YWx1ZSk7XG4gICAgY2hlY2tJZklkKCk7XG4gICAgYXNzaWduUGxhY2UoKTtcbiAgICBsYXRlQ2hlY2soKTtcbiAgfSk7XG4gIHJldHVybiByZXR1cm5CdG5zO1xufTtcblxuY29uc3QgZXJyb3JNZXNzID0gXCJQbGVhc2UgcmVzdGFydCBwYWdlIG9yIGNvbnRhY3Qgc3VwcG9ydCFcIjtcbmNvbnN0IG1haW4gPSBtZXRob2RzLmRpdkNyZWF0ZShcbiAgbWV0aG9kcy5oMUNyZWF0ZShlcnJvck1lc3MsIFwiZXJyb3JcIiksXG4gIFwibWFpblwiLFxuICBcIm1haW5cIlxuKTtcbmlmIChuYXZiYXIoKSAmJiBjb250ZW50KCkpIHtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuICBtYWluLmFwcGVuZChuYXZiYXIoKSwgY29udGVudCgpKTtcbn0gZWxzZSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgXCIqKiogIG5hdmJhcigpIG9yIGNvbnRlbnQoKSBkaWRuJ3QgcmV0dXJuIGV4cGVjdGVkIHZhbHVlISAgKioqXCJcbiAgKTtcbn1cbmNvbnN0IGNob29zZVMgPSBjaG9vc2VQYWdlKCk7XG5cbmNvbnN0IHNlZUJ0bnNMb2dpYyA9ICh2YWx1ZSwgaWQsIHBhZ2UpID0+IHtcbiAgY29uc3QgZmllbGQgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIxXCJdO1xuICBjb25zdCBuZXh0ID0gY2hlY2tQYWdlKHZhbHVlKS5uZXh0QnRuO1xuICBjb25zdCBwcmV2ID0gY2hlY2tQYWdlKHZhbHVlKS5wcmV2QnRuO1xuICBsZXQgY3VycklkID0gaWQ7XG4gIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGVja0lmSWQoKTtcbiAgICBpZiAoY3VycklkIDwgaWRHZXQoKSAtIDEpIHtcbiAgICAgIGN1cnJJZCArPSAxO1xuICAgICAgZmllbGQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IHN0cmluZ051bSA9IGN1cnJJZC50b1N0cmluZygpO1xuICAgICAgZmllbGQuYXBwZW5kKHNlZVBhZ2Uoc3RyaW5nTnVtLCBcInNlZVwiLCBwYWdlKS5teUZpZWxkKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJJZCA9PT0gaWRHZXQoKSAtIDEpIHtcbiAgICAgIGN1cnJJZCA9IDA7XG4gICAgICBmaWVsZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3Qgc3RyaW5nTnVtID0gY3VycklkLnRvU3RyaW5nKCk7XG4gICAgICBmaWVsZC5hcHBlbmQoc2VlUGFnZShzdHJpbmdOdW0sIFwic2VlXCIsIHBhZ2UpLm15RmllbGQpO1xuICAgIH1cbiAgfSk7XG4gIHByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGVja0lmSWQoKTtcbiAgICBpZiAoY3VycklkID4gMCkge1xuICAgICAgY3VycklkIC09IDE7XG4gICAgICBmaWVsZC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29uc3Qgc3RyaW5nTnVtID0gY3VycklkLnRvU3RyaW5nKCk7XG4gICAgICBmaWVsZC5hcHBlbmQoc2VlUGFnZShzdHJpbmdOdW0sIFwic2VlXCIsIHBhZ2UpLm15RmllbGQpO1xuICAgIH0gZWxzZSBpZiAoY3VycklkID09PSAwKSB7XG4gICAgICBjdXJySWQgPSBpZEdldCgpIC0gMTtcbiAgICAgIGZpZWxkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zdCBzdHJpbmdOdW0gPSBjdXJySWQudG9TdHJpbmcoKTtcbiAgICAgIGZpZWxkLmFwcGVuZChzZWVQYWdlKHN0cmluZ051bSwgXCJzZWVcIiwgcGFnZSkubXlGaWVsZCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHdyaXRlU3VibWl0ID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdCA9IGNoZWNrUGFnZShzcmMpLnN1Ym1pdEJ0bnM7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG5vd0lkID0gaWRHZXQoKTtcbiAgICBjb25zdCBpbnB1dCA9IHZhbHVlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW1wiMVwiXS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIxXCJdO1xuICAgIGNvbnN0IHRpbWUgPSB2YWx1ZS5jaGlsZHJlblswXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiMVwiXTtcbiAgICBjb25zdCBkYXRlID0gdmFsdWUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiMlwiXS5jaGlsZHJlbltcIjFcIl07XG4gICAgY29uc3QgY29tcGxldGVkID1cbiAgICAgIHZhbHVlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW1wiMVwiXS5jaGlsZHJlbltcIjNcIl0uY2hpbGRyZW5bXCIxXCJdO1xuICAgIGNvbnN0IHRleHRBID0gdmFsdWUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiNFwiXS5jaGlsZHJlbltcIjBcIl07XG4gICAgY29uc3QgSXRlbSA9IG5ldyBOZXdJdGVtKFxuICAgICAgaW5wdXQudmFsdWUsXG4gICAgICB0aW1lLnZhbHVlLFxuICAgICAgZGF0ZS52YWx1ZSxcbiAgICAgIGNvbXBsZXRlZC5jaGVja2VkLFxuICAgICAgdGV4dEEudmFsdWVcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKEl0ZW0pO1xuICAgIGxvY2FsSXRlbShJdGVtLCBub3dJZCk7XG4gICAgbGV0IGNoYW5nZUlkID0gcGFyc2VJbnQobm93SWQsIDEwKTtcbiAgICBpZFNldCgoY2hhbmdlSWQgKz0gMSkpO1xuICAgIGNoZWNrSWZJZCgpO1xuICAgIGxhdGVDaGVjaygpO1xuICAgIHJlTGF0ZSgpO1xuICAgIGFzc2lnblBsYWNlKCk7XG4gIH0pO1xuICByZXR1cm4gc3VibWl0O1xufTtcblxuY29uc3Qgd3JpdGVMb2FkZXIgPSAoYnRuLCBwYWdlLCB2YWx1ZSwgcmV0dXJuUGFnZSkgPT4ge1xuICBpZiAodmFsdWUuY2hpbGRyZW5bXCIwXCJdLmlkID09PSBcImNob29zZVwiKSB7XG4gICAgbGV0IHBhcmFtZXRlciA9IGJ0bjtcbiAgICBjb25zdCBMb2FkZWRwYWdlID0gY2hlY2tQYWdlKHZhbHVlKS5wYWdlQnRuc1socGFyYW1ldGVyICs9IFwiQnRuc1wiKV07XG4gICAgTG9hZGVkcGFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3JjLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBzcmMuYXBwZW5kKHBhZ2UpO1xuICAgICAgcmV0dXJuQnRuKHJldHVyblBhZ2UpO1xuICAgICAgc2VlQnRuc0xvZ2ljKHZhbHVlLCAwLCBidG4pO1xuICAgIH0pO1xuICB9XG59O1xuXG5zcmMuYXBwZW5kKG1haW4pO1xuXG5jb25zdCBhZGRCdG4gPSBjaGVja1BhZ2Uoc3JjKS5idG5Mb2dpYztcbmNvbnN0IHNlZUJ0biA9IGNoZWNrUGFnZShzcmMpLndyaXRlQnRucztcblxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZEJ0bi5pbm5lckhUTUwgPSBTdmdQaWN0KCkucGx1c0ljb247XG4gIHNyYy5pbm5lckhUTUwgPSBcIlwiO1xuICBzcmMuYXBwZW5kKHdyaXRlUGFnZSgpKTtcblxuICBjaGVja0lmSWQoKTtcblxuICB3cml0ZVN1Ym1pdChzcmMpO1xuICByZXR1cm5CdG4obWFpbik7XG59KTtcblxuc2VlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHNyYy5pbm5lckhUTUwgPSBcIlwiO1xuICBzcmMuYXBwZW5kKGNob29zZVMpO1xuXG4gIGNoZWNrSWZJZCgpO1xuXG4gIHdyaXRlTG9hZGVyKFwiZG9pbmdcIiwgc2VlUGFnZShcIjBcIiwgXCJzZWVcIiwgXCJkb2luZ1wiKS5teVBhZ2UsIHNyYywgY2hvb3NlUyk7XG4gIHdyaXRlTG9hZGVyKFwibGF0ZVwiLCBzZWVQYWdlKFwiMFwiLCBcInNlZVwiLCBcImxhdGVcIikubXlQYWdlLCBzcmMsIGNob29zZVMpO1xuICB3cml0ZUxvYWRlcihcbiAgICBcImNvbXBsZXRlZFwiLFxuICAgIHNlZVBhZ2UoXCIwXCIsIFwic2VlXCIsIFwiY29tcGxldGVkXCIpLm15UGFnZSxcbiAgICBzcmMsXG4gICAgY2hvb3NlU1xuICApO1xuXG4gIHJldHVybkJ0bihtYWluKTtcbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNyYyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=