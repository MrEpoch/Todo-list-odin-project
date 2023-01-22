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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n}\n\n@font-face {\n  font-family: \"Demiths\";\n  src: local(\"Demiths\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"OpenType\");\n  font-weight: bold;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.src {\n  width: 100%;\n  height: 100%;\n}\n\n.main {\n  width: 100%;\n  height: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  grid-template: 0.5fr 3fr / 1fr;\n}\n\n#doing,\n#will,\n#done {\n  display: grid;\n  grid-template-rows: 1fr 3.5fr 1fr;\n}\n\n#doing > fieldset,\n#will > fieldset,\n#done > fieldset {\n  grid-row: 2 / 3;\n  width: 40%;\n  height: 100%;\n  justify-self: center;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr) 3fr;\n  background-color: white;\n}\n\n.projNameContainer,\n.projTimeContainer,\n.projDateContainer {\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n\n.projNameContainer > label {\n  padding-right: 30px;\n}\n\ninput[type=\"text\"] {\n  width: 250px;\n  height: 30px;\n}\n\ninput[type=\"time\"] {\n  width: 80px;\n  height: 30px;\n}\n\ninput[type=\"date\"] {\n  width: 120px;\n  height: 30px;\n}\n\n.projTextContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  justify-self: center;\n  resize: none;\n  width: 420px;\n  height: 180px;\n  padding: 10px;\n}\n\n.projTimeContainer > label {\n  padding-right: 30px;\n}\n\n.page-doing-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n#return-text {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  background-color: rgba(255, 255, 255, 0.548);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n}\n\n#return-text:hover {\n  background-color: white;\n}\n\n.submit-btn-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#submitBtn {\n  background-color: transparent;\n  border: 3px solid black;\n  border-radius: 10px;\n  width: 120px;\n  height: 40px;\n  align-self: center;\n}\n\n#submitBtn:hover {\n  background-color: grey;\n}\n\n.page-will-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.page-done-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.choose-container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  align-items: center;\n}\n\n.back-choose {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.552);\n  border-radius: 50px;\n}\n\n.back-choose:hover {\n  background-color: white;\n  cursor: pointer;\n}\n\n.choose-container > #wrap-choose {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#wrap-choose > div {\n  border: 2px solid black;\n  width: 160px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n#wrap-choose > div:hover {\n  background-color: rgba(224, 221, 221, 0.627);\n  cursor: pointer;\n}\n\n.doing-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.will-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.done-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.navbar > .navbar-div-projects {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 15px;\n}\n\n.navbar-div-projects > .navbar-h3-projects {\n  font-family: \"Demiths\";\n  font-size: 24px;\n  letter-spacing: 0.7px;\n  border-bottom: 2px solid black;\n  border-radius: 5px;\n}\n\n.content-cards {\n  display: flex;\n  justify-content: space-around;\n  width: 90%;\n  height: 100%;\n}\n\n.card {\n  background-color: white;\n  width: 23%;\n  height: 67%;\n  border-radius: 25px;\n  padding: 20px;\n  border: 2px solid black;\n}\n\n.card > h4 {\n  font-family: \"Demiths\";\n  font-size: 15px;\n  border-bottom: 2px solid black;\n  border-radius: 10px;\n  width: 80px;\n  text-align: center;\n}\n\n.add-item {\n  position: absolute;\n  right: 35px;\n  top: 140px;\n  background-color: #fafafa;\n  border: 2px solid rgba(215, 205, 205, 0.795);\n  width: 60px;\n  height: 60px;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Demiths\";\n}\n\n.add-item:hover {\n  background-color: #ded8d8;\n  cursor: pointer;\n}\n\n.add-item > svg {\n  height: 50px;\n  width: 50px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n}\n\n@font-face {\n  font-family: \"Demiths\";\n  src: local(\"Demiths\"),\n    url(\"./components/fonts/Demiths-L3oRZ.otf\") format(\"OpenType\");\n  font-weight: bold;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.src {\n  width: 100%;\n  height: 100%;\n}\n\n.main {\n  width: 100%;\n  height: 100%;\n  background-image: url(\"./components/images/background.jpg\");\n  background-size: cover;\n  background-position: center;\n  display: grid;\n  grid-template: 0.5fr 3fr / 1fr;\n}\n\n#doing,\n#will,\n#done {\n  display: grid;\n  grid-template-rows: 1fr 3.5fr 1fr;\n}\n\n#doing > fieldset,\n#will > fieldset,\n#done > fieldset {\n  grid-row: 2 / 3;\n  width: 40%;\n  height: 100%;\n  justify-self: center;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr) 3fr;\n  background-color: white;\n}\n\n.projNameContainer,\n.projTimeContainer,\n.projDateContainer {\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n\n.projNameContainer > label {\n  padding-right: 30px;\n}\n\ninput[type=\"text\"] {\n  width: 250px;\n  height: 30px;\n}\n\ninput[type=\"time\"] {\n  width: 80px;\n  height: 30px;\n}\n\ninput[type=\"date\"] {\n  width: 120px;\n  height: 30px;\n}\n\n.projTextContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  justify-self: center;\n  resize: none;\n  width: 420px;\n  height: 180px;\n  padding: 10px;\n}\n\n.projTimeContainer > label {\n  padding-right: 30px;\n}\n\n.page-doing-container {\n  background-image: url(\"./components/images/doing.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n#return-text {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  background-color: rgba(255, 255, 255, 0.548);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n}\n\n#return-text:hover {\n  background-color: white;\n}\n\n.submit-btn-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#submitBtn {\n  background-color: transparent;\n  border: 3px solid black;\n  border-radius: 10px;\n  width: 120px;\n  height: 40px;\n  align-self: center;\n}\n\n#submitBtn:hover {\n  background-color: grey;\n}\n\n.page-will-container {\n  background-image: url(\"./components/images/will.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.page-done-container {\n  background-image: url(\"./components/images/done.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.choose-container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  align-items: center;\n}\n\n.back-choose {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.552);\n  border-radius: 50px;\n}\n\n.back-choose:hover {\n  background-color: white;\n  cursor: pointer;\n}\n\n.choose-container > #wrap-choose {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#wrap-choose > div {\n  border: 2px solid black;\n  width: 160px;\n  height: 60px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n#wrap-choose > div:hover {\n  background-color: rgba(224, 221, 221, 0.627);\n  cursor: pointer;\n}\n\n.doing-wrap {\n  background-image: url(\"./components/images/doing.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.will-wrap {\n  background-image: url(\"./components/images/will.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.done-wrap {\n  background-image: url(\"./components/images/done.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.navbar > .navbar-div-projects {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 15px;\n}\n\n.navbar-div-projects > .navbar-h3-projects {\n  font-family: \"Demiths\";\n  font-size: 24px;\n  letter-spacing: 0.7px;\n  border-bottom: 2px solid black;\n  border-radius: 5px;\n}\n\n.content-cards {\n  display: flex;\n  justify-content: space-around;\n  width: 90%;\n  height: 100%;\n}\n\n.card {\n  background-color: white;\n  width: 23%;\n  height: 67%;\n  border-radius: 25px;\n  padding: 20px;\n  border: 2px solid black;\n}\n\n.card > h4 {\n  font-family: \"Demiths\";\n  font-size: 15px;\n  border-bottom: 2px solid black;\n  border-radius: 10px;\n  width: 80px;\n  text-align: center;\n}\n\n.add-item {\n  position: absolute;\n  right: 35px;\n  top: 140px;\n  background-color: #fafafa;\n  border: 2px solid rgba(215, 205, 205, 0.795);\n  width: 60px;\n  height: 60px;\n  border-radius: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Demiths\";\n}\n\n.add-item:hover {\n  background-color: #ded8d8;\n  cursor: pointer;\n}\n\n.add-item > svg {\n  height: 50px;\n  width: 50px;\n}\n"],"sourceRoot":""}]);
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
if (!localStorage.getItem("Id")) {
  localStorage.setItem("Id", "0");
}

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

function NewItem(itemId, name, time, date, text) {
  this.itemId = itemId;
  this.name = name;
  this.time = time;
  this.date = date;
  this.text = text;
}

function localItem(itemObject, idlocal) {
  localStorage.setItem(`name-${idlocal}`, itemObject.name);
  localStorage.setItem(`time-${idlocal}`, itemObject.name);
  localStorage.setItem(`date-${idlocal}`, itemObject.date);
  localStorage.setItem(`text-${idlocal}`, itemObject.text);

  return localStorage;
}

// if (storageAvailable('localStorage')) {
//   // Yippee! We can use localStorage awesomeness
// }
// else {
//   // Too bad, no localStorage for us
// }

const checkPage = (value) => {
  const currentPage = value.children["0"].id;
  let btnLogic;
  let submitBtns;
  const pageBtns = {};
  if (currentPage === "main") {
    btnLogic = value.children["0"].children["1"].children["3"];
  } else if (currentPage === "choose") {
    btnLogic = value.children["0"].children["3"];
    pageBtns.doingBtns = value.children["0"].children["0"].children["0"];
    pageBtns.willBtns = value.children["0"].children["1"].children["0"];
    pageBtns.doneBtns = value.children["0"].children["2"].children["0"];
  } else if (
    currentPage === "doing" ||
    currentPage === "will" ||
    currentPage === "done"
  ) {
    btnLogic = value.children["0"].children["0"];
    submitBtns = value.children["0"].children["2"].children["0"];
  }
  return { btnLogic, pageBtns, submitBtns };
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
  return { plusIcon, returnIcon };
};

const content = () => {
  const myContent = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "content-cards");
  function Card(h4Text) {
    const cardDiv = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(h4Text, "card");
    return cardDiv;
  }

  const cardsInner = {
    doingH4: _components_methods__WEBPACK_IMPORTED_MODULE_0__.h4Create("Doing", "doing-content"),
    willH4: _components_methods__WEBPACK_IMPORTED_MODULE_0__.h4Create("Will do", "will-do-content"),
    doneH4: _components_methods__WEBPACK_IMPORTED_MODULE_0__.h4Create("Done", "done-content"),
  };

  const doing = Card(cardsInner.doingH4);
  const will = Card(cardsInner.willH4);
  const done = Card(cardsInner.doneH4);

  const add = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "add-item", "", SvgPict().plusIcon);

  myContent.append(doing, will, done, add);
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
    "label",
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
    "label",
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
    "label",
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
    TodoText(`${pageName}`)
  );
  this.page.append(this.returnBtn, this.field, TodoSubmit(`${pageName}`));
}

const doingPage = () => {
  const MyPage = new WritingPages("doing");
  return MyPage.page;
};

const willPage = () => {
  const MyPage = new WritingPages("will");
  return MyPage.page;
};

const TodoPage = (idNum) => {
  const h2Name = _components_methods__WEBPACK_IMPORTED_MODULE_0__.h2Create(
    localStorage.getItem(`name-${idNum}`),
    "h2Name"
  );
  const h2Time = _components_methods__WEBPACK_IMPORTED_MODULE_0__.h2Create(
    localStorage.getItem(`time-${idNum}`),
    "h2time"
  );
  const h2Date = _components_methods__WEBPACK_IMPORTED_MODULE_0__.h2Create(
    localStorage.getItem(`date-${idNum}`),
    "h2date"
  );
  const h2Text = _components_methods__WEBPACK_IMPORTED_MODULE_0__.h2Create(
    localStorage.getItem(`text-${idNum}`),
    "h2text"
  );

  const someDiv = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "someDiv");
  someDiv.append(h2Name, h2Time, h2Date, h2Text);

  return someDiv;
};

const donePage = () => {
  const MyPage = new WritingPages("done");
  return MyPage.page;
};

const chooseContent = () => {
  const choose = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "choose-container", "choose");

  const chooseText = {
    doing: "Doing",
    will: "Will do",
    done: "Done",
  };

  const doingChoose = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    _components_methods__WEBPACK_IMPORTED_MODULE_0__.h3Create(chooseText.doing, "doing-choose-h3"),
    "doing-choose-div"
  );
  const willDoChoose = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    _components_methods__WEBPACK_IMPORTED_MODULE_0__.h3Create(chooseText.will, "will-choose-h3"),
    "will-choose-div"
  );
  const doneChoose = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    _components_methods__WEBPACK_IMPORTED_MODULE_0__.h3Create(chooseText.done, "done-choose-h3"),
    "done-choose-div"
  );

  const doingWrap = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(doingChoose, "doing-wrap", "wrap-choose");
  const willWrap = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(willDoChoose, "will-wrap", "wrap-choose");
  const doneWrap = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(doneChoose, "done-wrap", "wrap-choose");
  const back = _components_methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    "",
    "back-choose",
    "return-text",
    SvgPict().returnIcon
  );

  choose.append(doingWrap, willWrap, doneWrap, back);

  return choose;
};

const idGet = () => {
  const idCalled = localStorage.getItem("Id");
  return idCalled;
};

const idSet = (value) => {
  const idChanged = localStorage.setItem("Id", `${value}`);
  return idChanged;
};

//

const returnBtn = (value) => {
  const returnBtns = checkPage(src).btnLogic;
  returnBtns.addEventListener("click", () => {
    src.innerHTML = "";
    src.append(value);
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

const pageLoader = (btn, page, value) => {
  if (
    value.children["0"].id !== "main" ||
    value.children["0"].id !== "choose"
  ) {
    let parameter = btn;
    const Loadedpage = checkPage(value).pageBtns[(parameter += "Btns")];
    Loadedpage.addEventListener("click", () => {
      src.innerHTML = "";
      src.append(page);
      const submit = checkPage(src).submitBtns;
      submit.addEventListener("click", () => {
        let nowId = idGet();
        console.log(nowId);
        const input =
          value.children["0"].children["1"].children["0"].children["1"];
        const time =
          value.children["0"].children["1"].children["1"].children["1"];
        const date =
          value.children["0"].children["1"].children["2"].children["1"];
        const textA =
          value.children["0"].children["1"].children["3"].children["0"];
        const FirstItem = new NewItem(
          nowId,
          input.value,
          time.value,
          date.value,
          textA.value
        );
        localItem(FirstItem, nowId);
        let changeId = parseInt(nowId, 10);
        idSet((changeId += 1));
      });
      const side = TodoPage();
      returnBtn(side);
    });
  }
};

src.append(main);

const addBtn = checkPage(src).btnLogic;

addBtn.addEventListener("click", () => {
  addBtn.innerHTML = SvgPict().plusIcon;
  src.innerHTML = "";
  src.append(chooseContent());

  returnBtn(main);

  pageLoader("doing", doingPage(), src);

  pageLoader("will", willPage(), src);

  pageLoader("done", donePage(), src);
});

document.body.appendChild(src);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFlRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEpGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFD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QjtBQUNwQyxtQkFBbUIsMERBQWlCO0FBQ3BDLGVBQWUsMERBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxNQUFNO0FBQ3hEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLGFBQWEsMERBQWlCO0FBQzlCLEVBQUUseURBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9tZXRob2RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ZvbnRzL0RlbWl0aHMtTDNvUloub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9pbmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ltYWdlcy93aWxsLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9uZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVtaXRoc1xcXCI7XFxuICBzcmM6IGxvY2FsKFxcXCJEZW1pdGhzXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJPcGVuVHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNyYyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAwLjVmciAzZnIgLyAxZnI7XFxufVxcblxcbiNkb2luZyxcXG4jd2lsbCxcXG4jZG9uZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMy41ZnIgMWZyO1xcbn1cXG5cXG4jZG9pbmcgPiBmaWVsZHNldCxcXG4jd2lsbCA+IGZpZWxkc2V0LFxcbiNkb25lID4gZmllbGRzZXQge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcikgM2ZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qTmFtZUNvbnRhaW5lcixcXG4ucHJvalRpbWVDb250YWluZXIsXFxuLnByb2pEYXRlQ29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4ucHJvak5hbWVDb250YWluZXIgPiBsYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5wcm9qVGV4dENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJvalRpbWVDb250YWluZXIgPiBsYWJlbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucGFnZS1kb2luZy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JldHVybi10ZXh0IHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3JldHVybi10ZXh0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3VibWl0LWJ0bi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzdWJtaXRCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNzdWJtaXRCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnBhZ2Utd2lsbC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnBhZ2UtZG9uZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNob29zZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmFjay1jaG9vc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTBweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmJhY2stY2hvb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hvb3NlLWNvbnRhaW5lciA+ICN3cmFwLWNob29zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jd3JhcC1jaG9vc2UgPiBkaXYge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jd3JhcC1jaG9vc2UgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDIyMSwgMjIxLCAwLjYyNyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kb2luZy13cmFwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53aWxsLXdyYXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRvbmUtd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4ubmF2YmFyID4gLm5hdmJhci1kaXYtcHJvamVjdHMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVxcblxcbi5uYXZiYXItZGl2LXByb2plY3RzID4gLm5hdmJhci1oMy1wcm9qZWN0cyB7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29udGVudC1jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAyMyU7XFxuICBoZWlnaHQ6IDY3JTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jYXJkID4gaDQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZW1pdGhzXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAzNXB4O1xcbiAgdG9wOiAxNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIxNSwgMjA1LCAyMDUsIDAuNzk1KTtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbn1cXG5cXG4uYWRkLWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZDhkODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1pdGVtID4gc3ZnIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qjs4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WixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qiw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkRlbWl0aHNcXFwiO1xcbiAgc3JjOiBsb2NhbChcXFwiRGVtaXRoc1xcXCIpLFxcbiAgICB1cmwoXFxcIi4vY29tcG9uZW50cy9mb250cy9EZW1pdGhzLUwzb1JaLm90ZlxcXCIpIGZvcm1hdChcXFwiT3BlblR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zcmMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2NvbXBvbmVudHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDNmciAvIDFmcjtcXG59XFxuXFxuI2RvaW5nLFxcbiN3aWxsLFxcbiNkb25lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzLjVmciAxZnI7XFxufVxcblxcbiNkb2luZyA+IGZpZWxkc2V0LFxcbiN3aWxsID4gZmllbGRzZXQsXFxuI2RvbmUgPiBmaWVsZHNldCB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKSAzZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2pOYW1lQ29udGFpbmVyLFxcbi5wcm9qVGltZUNvbnRhaW5lcixcXG4ucHJvakRhdGVDb250YWluZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxufVxcblxcbi5wcm9qTmFtZUNvbnRhaW5lciA+IGxhYmVsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnByb2pUZXh0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5wcm9qVGltZUNvbnRhaW5lciA+IGxhYmVsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5wYWdlLWRvaW5nLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9pbmcuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNyZXR1cm4tdGV4dCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNyZXR1cm4tdGV4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC1idG4tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0QnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jc3VibWl0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5wYWdlLXdpbGwtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2ltYWdlcy93aWxsLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGFnZS1kb25lLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9uZS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNob29zZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmFjay1jaG9vc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTBweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NTIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmJhY2stY2hvb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hvb3NlLWNvbnRhaW5lciA+ICN3cmFwLWNob29zZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jd3JhcC1jaG9vc2UgPiBkaXYge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jd3JhcC1jaG9vc2UgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDIyMSwgMjIxLCAwLjYyNyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kb2luZy13cmFwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9jb21wb25lbnRzL2ltYWdlcy9kb2luZy5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLndpbGwtd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvd2lsbC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRvbmUtd3JhcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vY29tcG9uZW50cy9pbWFnZXMvZG9uZS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG59XFxuXFxuLm5hdmJhciA+IC5uYXZiYXItZGl2LXByb2plY3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubmF2YmFyLWRpdi1wcm9qZWN0cyA+IC5uYXZiYXItaDMtcHJvamVjdHMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZW1pdGhzXFxcIjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjdweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbnRlbnQtY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjMlO1xcbiAgaGVpZ2h0OiA2NyU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2FyZCA+IGg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVtaXRoc1xcXCI7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtaXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzVweDtcXG4gIHRvcDogMTQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyMTUsIDIwNSwgMjA1LCAwLjc5NSk7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEZW1pdGhzXFxcIjtcXG59XFxuXFxuLmFkZC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWQ4ZDg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtaXRlbSA+IHN2ZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIE1hZGUgYnkgTXJFcG9jaFxuXG4vLyBUaGlzIGZpbGUgd2FzIG1hZGUgdG8gYmUgZXhwb3J0ZWQgZm9yIHVzZSBpbiBvdGhlciBmaWxlcywgaXQgaG9sZHMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgaHRtbCBlbGVtZW50cyBpbiBlYXNpZXIgd2F5XG5cbi8vIGRpdkNyZWF0ZSBmdW5jdGlvbiBleHByZXNzaW9uIHRha2VzIGxpa2UgZmlyc3Qgd2hhdCBpcyBpbnNpZGUgYW5kIHRoZW4gY2xhc3MgYW5kIHJldHVybnMgZGl2IGF0IGVuZFxuXG5jb25zdCBtZXRob2RDcmVhdGUgPSAoaHRtbE5hbWUsIGluc2lkZSwgY2xhc3NBZGQsIGlkQWRkLCBpbm5lckh0bWwpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaHRtbE5hbWUpO1xuICBlbGVtZW50LmFwcGVuZChpbnNpZGUpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBlbGVtZW50LmlkID0gaWRBZGQ7XG4gIH1cbiAgaWYgKGlubmVySHRtbCkge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgZGl2Q3JlYXRlID0gKEluc2lkZURpdiwgY2xhc3NBZGQsIGlkQWRkLCBpbm5lckh0bWwpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmFwcGVuZChJbnNpZGVEaXYpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGRpdi5pZCA9IGlkQWRkO1xuICB9XG4gIGlmIChpbm5lckh0bWwpIHtcbiAgICBkaXYuaW5uZXJIVE1MID0gaW5uZXJIdG1sO1xuICB9XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBuYXZDcmVhdGUgPSAoSW5zaWRlTmF2LCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2LmFwcGVuZChJbnNpZGVOYXYpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIG5hdi5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBuYXY7XG59O1xuXG4vLyBJbWdDcmVhdGUgaXMgcmV0dXJucyB0YWtlcyBJbXBvcnRlZCBpbWcgYW5kIHJldHVybnMgaXQgcmVhZHkgZm9yIHVzZSB0byBhcHBlbmQgdG8gdGhlIGRpdiBvciBvdGhlciB1c2VcblxuY29uc3QgSW1nQ3JlYXRlID0gKGltYWdlKSA9PiB7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gaW1hZ2U7XG4gIHJldHVybiBpbWc7XG59O1xuXG4vLyBoMkNyZWF0ZSBjcmVhdGVzIGgyIGVsZW1lbnQgd2hpY2ggdGFrZXMgdGV4dENvbnRlbnQgYW5kIGNsYXNzIGFuZCByZXR1cm5zIGgyXG5cbmNvbnN0IGgxQ3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBoMS5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgaDEuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gaDE7XG59O1xuXG5jb25zdCBoMkNyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgaDIuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGgyLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGgyO1xufTtcblxuY29uc3QgaDNDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGgzLmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoMy5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoMztcbn07XG5cbi8vIGg0Q3JlYXRlIGNyZWF0ZXMgaDQgZWxlbWVudCB3aGljaCB0YWtlcyB0ZXh0Q29udGVudCBhbmQgY2xhc3MgYW5kIHJldHVybnMgaDRcblxuY29uc3QgaDRDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBoNC50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGg0LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoNC5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoNDtcbn07XG5cbmNvbnN0IGg1Q3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcbiAgaDUudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBoNS5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgaDUuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gaDU7XG59O1xuXG4vLyBwQ3JlYXRlIGNyZWF0ZXMgcGFyYWdyYWhwIHdpdGggZmlyc3QgcGFyYW1ldGVyIHRleHQgYW5kIHNlY29uZCBjbGFzcyBhbmQgcmV0dXJucyBwYXJhZ3JhcGhcblxuY29uc3QgcENyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwLnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgcC5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgcC5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBwO1xufTtcblxuY29uc3QgaW5wdXRDcmVhdGUgPSAocGxhY2VIb2xkZXIsIGNsYXNzQWRkLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlSG9sZGVyO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaW5wdXQudHlwZSA9IHR5cGU7XG5cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgZmllbGRzZXRDcmVhdGUgPSAoSW5zaWRlRmllbGQsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcbiAgZmllbGQuYXBwZW5kKEluc2lkZUZpZWxkKTtcbiAgZmllbGQuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGZpZWxkLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGZpZWxkO1xufTtcblxuLy8gZXhwb3J0aW5nIGFsbCBmdW5jdGlvbiBleHByZXNzaW9uc1xuXG5leHBvcnQge1xuICBtZXRob2RDcmVhdGUsXG4gIGRpdkNyZWF0ZSxcbiAgbmF2Q3JlYXRlLFxuICBJbWdDcmVhdGUsXG4gIGgxQ3JlYXRlLFxuICBoMkNyZWF0ZSxcbiAgaDNDcmVhdGUsXG4gIGg0Q3JlYXRlLFxuICBoNUNyZWF0ZSxcbiAgcENyZWF0ZSxcbiAgaW5wdXRDcmVhdGUsXG4gIGZpZWxkc2V0Q3JlYXRlLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gXCIuL2NvbXBvbmVudHMvbWV0aG9kc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9mb250cy9EZW1pdGhzLUwzb1JaLm90ZlwiO1xuXG5jb25zdCBzcmMgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcInNyY1wiKTtcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJJZFwiKSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIklkXCIsIFwiMFwiKTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIE5ld0l0ZW0oaXRlbUlkLCBuYW1lLCB0aW1lLCBkYXRlLCB0ZXh0KSB7XG4gIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLnRpbWUgPSB0aW1lO1xuICB0aGlzLmRhdGUgPSBkYXRlO1xuICB0aGlzLnRleHQgPSB0ZXh0O1xufVxuXG5mdW5jdGlvbiBsb2NhbEl0ZW0oaXRlbU9iamVjdCwgaWRsb2NhbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgbmFtZS0ke2lkbG9jYWx9YCwgaXRlbU9iamVjdC5uYW1lKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRpbWUtJHtpZGxvY2FsfWAsIGl0ZW1PYmplY3QubmFtZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBkYXRlLSR7aWRsb2NhbH1gLCBpdGVtT2JqZWN0LmRhdGUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdGV4dC0ke2lkbG9jYWx9YCwgaXRlbU9iamVjdC50ZXh0KTtcblxuICByZXR1cm4gbG9jYWxTdG9yYWdlO1xufVxuXG4vLyBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbi8vICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xuLy8gfVxuLy8gZWxzZSB7XG4vLyAgIC8vIFRvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXNcbi8vIH1cblxuY29uc3QgY2hlY2tQYWdlID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmlkO1xuICBsZXQgYnRuTG9naWM7XG4gIGxldCBzdWJtaXRCdG5zO1xuICBjb25zdCBwYWdlQnRucyA9IHt9O1xuICBpZiAoY3VycmVudFBhZ2UgPT09IFwibWFpblwiKSB7XG4gICAgYnRuTG9naWMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiM1wiXTtcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gXCJjaG9vc2VcIikge1xuICAgIGJ0bkxvZ2ljID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiM1wiXTtcbiAgICBwYWdlQnRucy5kb2luZ0J0bnMgPSB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMFwiXTtcbiAgICBwYWdlQnRucy53aWxsQnRucyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCIwXCJdO1xuICAgIHBhZ2VCdG5zLmRvbmVCdG5zID0gdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMlwiXS5jaGlsZHJlbltcIjBcIl07XG4gIH0gZWxzZSBpZiAoXG4gICAgY3VycmVudFBhZ2UgPT09IFwiZG9pbmdcIiB8fFxuICAgIGN1cnJlbnRQYWdlID09PSBcIndpbGxcIiB8fFxuICAgIGN1cnJlbnRQYWdlID09PSBcImRvbmVcIlxuICApIHtcbiAgICBidG5Mb2dpYyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjBcIl07XG4gICAgc3VibWl0QnRucyA9IHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjJcIl0uY2hpbGRyZW5bXCIwXCJdO1xuICB9XG4gIHJldHVybiB7IGJ0bkxvZ2ljLCBwYWdlQnRucywgc3VibWl0QnRucyB9O1xufTtcblxuLy9cblxuY29uc3QgbmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBteU5hdmJhciA9IG1ldGhvZHMubmF2Q3JlYXRlKFwiXCIsIFwibmF2YmFyXCIpO1xuICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IG1ldGhvZHMuaDNDcmVhdGUoXCJUb2RvXCIsIFwibmF2YmFyLWgzLXByb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0c0RpdiA9IG1ldGhvZHMuZGl2Q3JlYXRlKHByb2plY3RzSGVhZGVyLCBcIm5hdmJhci1kaXYtcHJvamVjdHNcIik7XG4gIG15TmF2YmFyLmFwcGVuZChwcm9qZWN0c0Rpdik7XG5cbiAgcmV0dXJuIG15TmF2YmFyO1xufTtcblxuY29uc3QgU3ZnUGljdCA9ICgpID0+IHtcbiAgY29uc3QgcGx1c0ljb24gPSBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI2IDI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiPiA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG4gIGNvbnN0IHJldHVybkljb24gPSBgPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0yMCwxMVYxM0g4TDEzLjUsMTguNUwxMi4wOCwxOS45Mkw0LjE2LDEyTDEyLjA4LDQuMDhMMTMuNSw1LjVMOCwxMUgyMFpcIj4gPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG4gIHJldHVybiB7IHBsdXNJY29uLCByZXR1cm5JY29uIH07XG59O1xuXG5jb25zdCBjb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBteUNvbnRlbnQgPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcImNvbnRlbnQtY2FyZHNcIik7XG4gIGZ1bmN0aW9uIENhcmQoaDRUZXh0KSB7XG4gICAgY29uc3QgY2FyZERpdiA9IG1ldGhvZHMuZGl2Q3JlYXRlKGg0VGV4dCwgXCJjYXJkXCIpO1xuICAgIHJldHVybiBjYXJkRGl2O1xuICB9XG5cbiAgY29uc3QgY2FyZHNJbm5lciA9IHtcbiAgICBkb2luZ0g0OiBtZXRob2RzLmg0Q3JlYXRlKFwiRG9pbmdcIiwgXCJkb2luZy1jb250ZW50XCIpLFxuICAgIHdpbGxINDogbWV0aG9kcy5oNENyZWF0ZShcIldpbGwgZG9cIiwgXCJ3aWxsLWRvLWNvbnRlbnRcIiksXG4gICAgZG9uZUg0OiBtZXRob2RzLmg0Q3JlYXRlKFwiRG9uZVwiLCBcImRvbmUtY29udGVudFwiKSxcbiAgfTtcblxuICBjb25zdCBkb2luZyA9IENhcmQoY2FyZHNJbm5lci5kb2luZ0g0KTtcbiAgY29uc3Qgd2lsbCA9IENhcmQoY2FyZHNJbm5lci53aWxsSDQpO1xuICBjb25zdCBkb25lID0gQ2FyZChjYXJkc0lubmVyLmRvbmVINCk7XG5cbiAgY29uc3QgYWRkID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJhZGQtaXRlbVwiLCBcIlwiLCBTdmdQaWN0KCkucGx1c0ljb24pO1xuXG4gIG15Q29udGVudC5hcHBlbmQoZG9pbmcsIHdpbGwsIGRvbmUsIGFkZCk7XG4gIGNvbnN0IGFkZEh0bWwgPSBteUNvbnRlbnQuY2hpbGRyZW5bXCIzXCJdO1xuXG4gIGFkZEh0bWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgYWRkSHRtbC50ZXh0Q29udGVudCA9IFwiTmV3XCI7XG4gIH0pO1xuXG4gIGFkZEh0bWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICBhZGRIdG1sLmlubmVySFRNTCA9IFN2Z1BpY3QoKS5wbHVzSWNvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIG15Q29udGVudDtcbn07XG5cbmNvbnN0IFRvZG9OYW1lID0gKHBhZ2VOYW1lKSA9PiB7XG4gIGNvbnN0IFRvZG9OYW1lQ29udGFpbmVyID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJwcm9qTmFtZUNvbnRhaW5lclwiKTtcbiAgY29uc3QgVG9kb05hbWVMYWJlbCA9IG1ldGhvZHMubWV0aG9kQ3JlYXRlKFxuICAgIFwibGFiZWxcIixcbiAgICBcIlRvZG8gbmFtZVwiLFxuICAgIGBsYWJlbC0ke3BhZ2VOYW1lfS1uYW1lYFxuICApO1xuICBjb25zdCBUb2RvTmFtZUlucHV0ID0gbWV0aG9kcy5pbnB1dENyZWF0ZShcbiAgICBcIk15IGF3ZXNvbWUgcHJvamVjdCFcIixcbiAgICBcIm5hbWUtZG9pbmdcIixcbiAgICBcInRleHRcIlxuICApO1xuXG4gIFRvZG9OYW1lQ29udGFpbmVyLmFwcGVuZChUb2RvTmFtZUxhYmVsLCBUb2RvTmFtZUlucHV0KTtcblxuICByZXR1cm4gVG9kb05hbWVDb250YWluZXI7XG59O1xuXG5jb25zdCBUb2RvVGltZSA9IChwYWdlTmFtZSkgPT4ge1xuICBjb25zdCBUb2RvVGltZUNvbnRhaW5lciA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwicHJvalRpbWVDb250YWluZXJcIik7XG4gIGNvbnN0IFRvZG9UaW1lTGFiZWwgPSBtZXRob2RzLm1ldGhvZENyZWF0ZShcbiAgICBcImxhYmVsXCIsXG4gICAgXCJDb21wbGV0aW9uIFRpbWVcIixcbiAgICBgbGFiZWwtJHtwYWdlTmFtZX0tdGltZWBcbiAgKTtcbiAgY29uc3QgVG9kb1RpbWVJbnB1dCA9IG1ldGhvZHMuaW5wdXRDcmVhdGUoXCJcIiwgYCR7cGFnZU5hbWV9LXRpbWVgLCBcInRpbWVcIik7XG5cbiAgVG9kb1RpbWVDb250YWluZXIuYXBwZW5kKFRvZG9UaW1lTGFiZWwsIFRvZG9UaW1lSW5wdXQpO1xuXG4gIHJldHVybiBUb2RvVGltZUNvbnRhaW5lcjtcbn07XG5jb25zdCBUb2RvRGF0ZSA9IChwYWdlTmFtZSkgPT4ge1xuICBjb25zdCBUb2RvRGF0ZUNvbnRhaW5lciA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwicHJvakRhdGVDb250YWluZXJcIik7XG4gIGNvbnN0IFRvZG9EYXRlTGFiZWwgPSBtZXRob2RzLm1ldGhvZENyZWF0ZShcbiAgICBcImxhYmVsXCIsXG4gICAgXCJDb21wbGV0aW9uIGRhdGVcIixcbiAgICBgbGFiZWwtJHtwYWdlTmFtZX0tZGF0ZWBcbiAgKTtcbiAgY29uc3QgVG9kb0RhdGVJbnB1dCA9IG1ldGhvZHMuaW5wdXRDcmVhdGUoXCJcIiwgYCR7cGFnZU5hbWV9LWRhdGVgLCBcImRhdGVcIik7XG5cbiAgVG9kb0RhdGVDb250YWluZXIuYXBwZW5kKFRvZG9EYXRlTGFiZWwsIFRvZG9EYXRlSW5wdXQpO1xuXG4gIHJldHVybiBUb2RvRGF0ZUNvbnRhaW5lcjtcbn07XG5jb25zdCBUb2RvVGV4dCA9IChwYWdlTmFtZSkgPT4ge1xuICBjb25zdCBUb2RvVGV4dENvbnRhaW5lciA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwicHJvalRleHRDb250YWluZXJcIik7XG4gIGNvbnN0IFRvZG9UZXh0SW5zaWRlID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoXG4gICAgXCJ0ZXh0YXJlYVwiLFxuICAgIFwiXCIsXG4gICAgYCR7cGFnZU5hbWV9LXByb2pUZXh0YFxuICApO1xuXG4gIFRvZG9UZXh0Q29udGFpbmVyLmFwcGVuZChUb2RvVGV4dEluc2lkZSk7XG5cbiAgcmV0dXJuIFRvZG9UZXh0Q29udGFpbmVyO1xufTtcbmNvbnN0IFRvZG9TdWJtaXQgPSAocGFnZU5hbWUpID0+IHtcbiAgY29uc3Qgc3VibWl0QnRuID0gbWV0aG9kcy5tZXRob2RDcmVhdGUoXG4gICAgXCJidXR0b25cIixcbiAgICBcInN1Ym1pdFwiLFxuICAgIGAke3BhZ2VOYW1lfS1idG5gLFxuICAgIFwic3VibWl0QnRuXCJcbiAgKTtcblxuICBjb25zdCB3cmFwcGVkQnRuID0gbWV0aG9kcy5kaXZDcmVhdGUoc3VibWl0QnRuLCBcInN1Ym1pdC1idG4tY29udGFpbmVyXCIpO1xuXG4gIHJldHVybiB3cmFwcGVkQnRuO1xufTtcblxuZnVuY3Rpb24gV3JpdGluZ1BhZ2VzKHBhZ2VOYW1lKSB7XG4gIHRoaXMucGFnZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgYHBhZ2UtJHtwYWdlTmFtZX0tY29udGFpbmVyYCxcbiAgICBgJHtwYWdlTmFtZX1gXG4gICk7XG4gIHRoaXMuZmllbGQgPSBtZXRob2RzLmZpZWxkc2V0Q3JlYXRlKFwiXCIsIGBmaWVsZC0ke3BhZ2VOYW1lfWApO1xuICB0aGlzLnJldHVybkJ0biA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgYHJldHVybi0ke3BhZ2VOYW1lfWAsXG4gICAgXCJyZXR1cm4tdGV4dFwiLFxuICAgIFN2Z1BpY3QoKS5yZXR1cm5JY29uXG4gICk7XG5cbiAgdGhpcy5maWVsZC5hcHBlbmQoXG4gICAgVG9kb05hbWUoYCR7cGFnZU5hbWV9YCksXG4gICAgVG9kb1RpbWUoYCR7cGFnZU5hbWV9YCksXG4gICAgVG9kb0RhdGUoYCR7cGFnZU5hbWV9YCksXG4gICAgVG9kb1RleHQoYCR7cGFnZU5hbWV9YClcbiAgKTtcbiAgdGhpcy5wYWdlLmFwcGVuZCh0aGlzLnJldHVybkJ0biwgdGhpcy5maWVsZCwgVG9kb1N1Ym1pdChgJHtwYWdlTmFtZX1gKSk7XG59XG5cbmNvbnN0IGRvaW5nUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgTXlQYWdlID0gbmV3IFdyaXRpbmdQYWdlcyhcImRvaW5nXCIpO1xuICByZXR1cm4gTXlQYWdlLnBhZ2U7XG59O1xuXG5jb25zdCB3aWxsUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgTXlQYWdlID0gbmV3IFdyaXRpbmdQYWdlcyhcIndpbGxcIik7XG4gIHJldHVybiBNeVBhZ2UucGFnZTtcbn07XG5cbmNvbnN0IFRvZG9QYWdlID0gKGlkTnVtKSA9PiB7XG4gIGNvbnN0IGgyTmFtZSA9IG1ldGhvZHMuaDJDcmVhdGUoXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYG5hbWUtJHtpZE51bX1gKSxcbiAgICBcImgyTmFtZVwiXG4gICk7XG4gIGNvbnN0IGgyVGltZSA9IG1ldGhvZHMuaDJDcmVhdGUoXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRpbWUtJHtpZE51bX1gKSxcbiAgICBcImgydGltZVwiXG4gICk7XG4gIGNvbnN0IGgyRGF0ZSA9IG1ldGhvZHMuaDJDcmVhdGUoXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGRhdGUtJHtpZE51bX1gKSxcbiAgICBcImgyZGF0ZVwiXG4gICk7XG4gIGNvbnN0IGgyVGV4dCA9IG1ldGhvZHMuaDJDcmVhdGUoXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRleHQtJHtpZE51bX1gKSxcbiAgICBcImgydGV4dFwiXG4gICk7XG5cbiAgY29uc3Qgc29tZURpdiA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwic29tZURpdlwiKTtcbiAgc29tZURpdi5hcHBlbmQoaDJOYW1lLCBoMlRpbWUsIGgyRGF0ZSwgaDJUZXh0KTtcblxuICByZXR1cm4gc29tZURpdjtcbn07XG5cbmNvbnN0IGRvbmVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBNeVBhZ2UgPSBuZXcgV3JpdGluZ1BhZ2VzKFwiZG9uZVwiKTtcbiAgcmV0dXJuIE15UGFnZS5wYWdlO1xufTtcblxuY29uc3QgY2hvb3NlQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY2hvb3NlID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJjaG9vc2UtY29udGFpbmVyXCIsIFwiY2hvb3NlXCIpO1xuXG4gIGNvbnN0IGNob29zZVRleHQgPSB7XG4gICAgZG9pbmc6IFwiRG9pbmdcIixcbiAgICB3aWxsOiBcIldpbGwgZG9cIixcbiAgICBkb25lOiBcIkRvbmVcIixcbiAgfTtcblxuICBjb25zdCBkb2luZ0Nob29zZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIG1ldGhvZHMuaDNDcmVhdGUoY2hvb3NlVGV4dC5kb2luZywgXCJkb2luZy1jaG9vc2UtaDNcIiksXG4gICAgXCJkb2luZy1jaG9vc2UtZGl2XCJcbiAgKTtcbiAgY29uc3Qgd2lsbERvQ2hvb3NlID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgbWV0aG9kcy5oM0NyZWF0ZShjaG9vc2VUZXh0LndpbGwsIFwid2lsbC1jaG9vc2UtaDNcIiksXG4gICAgXCJ3aWxsLWNob29zZS1kaXZcIlxuICApO1xuICBjb25zdCBkb25lQ2hvb3NlID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgbWV0aG9kcy5oM0NyZWF0ZShjaG9vc2VUZXh0LmRvbmUsIFwiZG9uZS1jaG9vc2UtaDNcIiksXG4gICAgXCJkb25lLWNob29zZS1kaXZcIlxuICApO1xuXG4gIGNvbnN0IGRvaW5nV3JhcCA9IG1ldGhvZHMuZGl2Q3JlYXRlKGRvaW5nQ2hvb3NlLCBcImRvaW5nLXdyYXBcIiwgXCJ3cmFwLWNob29zZVwiKTtcbiAgY29uc3Qgd2lsbFdyYXAgPSBtZXRob2RzLmRpdkNyZWF0ZSh3aWxsRG9DaG9vc2UsIFwid2lsbC13cmFwXCIsIFwid3JhcC1jaG9vc2VcIik7XG4gIGNvbnN0IGRvbmVXcmFwID0gbWV0aG9kcy5kaXZDcmVhdGUoZG9uZUNob29zZSwgXCJkb25lLXdyYXBcIiwgXCJ3cmFwLWNob29zZVwiKTtcbiAgY29uc3QgYmFjayA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIFwiXCIsXG4gICAgXCJiYWNrLWNob29zZVwiLFxuICAgIFwicmV0dXJuLXRleHRcIixcbiAgICBTdmdQaWN0KCkucmV0dXJuSWNvblxuICApO1xuXG4gIGNob29zZS5hcHBlbmQoZG9pbmdXcmFwLCB3aWxsV3JhcCwgZG9uZVdyYXAsIGJhY2spO1xuXG4gIHJldHVybiBjaG9vc2U7XG59O1xuXG5jb25zdCBpZEdldCA9ICgpID0+IHtcbiAgY29uc3QgaWRDYWxsZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIklkXCIpO1xuICByZXR1cm4gaWRDYWxsZWQ7XG59O1xuXG5jb25zdCBpZFNldCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBpZENoYW5nZWQgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIklkXCIsIGAke3ZhbHVlfWApO1xuICByZXR1cm4gaWRDaGFuZ2VkO1xufTtcblxuLy9cblxuY29uc3QgcmV0dXJuQnRuID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IHJldHVybkJ0bnMgPSBjaGVja1BhZ2Uoc3JjKS5idG5Mb2dpYztcbiAgcmV0dXJuQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNyYy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHNyYy5hcHBlbmQodmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gcmV0dXJuQnRucztcbn07XG5cbmNvbnN0IGVycm9yTWVzcyA9IFwiUGxlYXNlIHJlc3RhcnQgcGFnZSBvciBjb250YWN0IHN1cHBvcnQhXCI7XG5jb25zdCBtYWluID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gIG1ldGhvZHMuaDFDcmVhdGUoZXJyb3JNZXNzLCBcImVycm9yXCIpLFxuICBcIm1haW5cIixcbiAgXCJtYWluXCJcbik7XG5pZiAobmF2YmFyKCkgJiYgY29udGVudCgpKSB7XG4gIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgbWFpbi5hcHBlbmQobmF2YmFyKCksIGNvbnRlbnQoKSk7XG59IGVsc2Uge1xuICBjb25zb2xlLmVycm9yKFxuICAgIFwiKioqICBuYXZiYXIoKSBvciBjb250ZW50KCkgZGlkbid0IHJldHVybiBleHBlY3RlZCB2YWx1ZSEgICoqKlwiXG4gICk7XG59XG5cbmNvbnN0IHBhZ2VMb2FkZXIgPSAoYnRuLCBwYWdlLCB2YWx1ZSkgPT4ge1xuICBpZiAoXG4gICAgdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmlkICE9PSBcIm1haW5cIiB8fFxuICAgIHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5pZCAhPT0gXCJjaG9vc2VcIlxuICApIHtcbiAgICBsZXQgcGFyYW1ldGVyID0gYnRuO1xuICAgIGNvbnN0IExvYWRlZHBhZ2UgPSBjaGVja1BhZ2UodmFsdWUpLnBhZ2VCdG5zWyhwYXJhbWV0ZXIgKz0gXCJCdG5zXCIpXTtcbiAgICBMb2FkZWRwYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzcmMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHNyYy5hcHBlbmQocGFnZSk7XG4gICAgICBjb25zdCBzdWJtaXQgPSBjaGVja1BhZ2Uoc3JjKS5zdWJtaXRCdG5zO1xuICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBub3dJZCA9IGlkR2V0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vd0lkKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPVxuICAgICAgICAgIHZhbHVlLmNoaWxkcmVuW1wiMFwiXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMVwiXTtcbiAgICAgICAgY29uc3QgdGltZSA9XG4gICAgICAgICAgdmFsdWUuY2hpbGRyZW5bXCIwXCJdLmNoaWxkcmVuW1wiMVwiXS5jaGlsZHJlbltcIjFcIl0uY2hpbGRyZW5bXCIxXCJdO1xuICAgICAgICBjb25zdCBkYXRlID1cbiAgICAgICAgICB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiMlwiXS5jaGlsZHJlbltcIjFcIl07XG4gICAgICAgIGNvbnN0IHRleHRBID1cbiAgICAgICAgICB2YWx1ZS5jaGlsZHJlbltcIjBcIl0uY2hpbGRyZW5bXCIxXCJdLmNoaWxkcmVuW1wiM1wiXS5jaGlsZHJlbltcIjBcIl07XG4gICAgICAgIGNvbnN0IEZpcnN0SXRlbSA9IG5ldyBOZXdJdGVtKFxuICAgICAgICAgIG5vd0lkLFxuICAgICAgICAgIGlucHV0LnZhbHVlLFxuICAgICAgICAgIHRpbWUudmFsdWUsXG4gICAgICAgICAgZGF0ZS52YWx1ZSxcbiAgICAgICAgICB0ZXh0QS52YWx1ZVxuICAgICAgICApO1xuICAgICAgICBsb2NhbEl0ZW0oRmlyc3RJdGVtLCBub3dJZCk7XG4gICAgICAgIGxldCBjaGFuZ2VJZCA9IHBhcnNlSW50KG5vd0lkLCAxMCk7XG4gICAgICAgIGlkU2V0KChjaGFuZ2VJZCArPSAxKSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHNpZGUgPSBUb2RvUGFnZSgpO1xuICAgICAgcmV0dXJuQnRuKHNpZGUpO1xuICAgIH0pO1xuICB9XG59O1xuXG5zcmMuYXBwZW5kKG1haW4pO1xuXG5jb25zdCBhZGRCdG4gPSBjaGVja1BhZ2Uoc3JjKS5idG5Mb2dpYztcblxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZEJ0bi5pbm5lckhUTUwgPSBTdmdQaWN0KCkucGx1c0ljb247XG4gIHNyYy5pbm5lckhUTUwgPSBcIlwiO1xuICBzcmMuYXBwZW5kKGNob29zZUNvbnRlbnQoKSk7XG5cbiAgcmV0dXJuQnRuKG1haW4pO1xuXG4gIHBhZ2VMb2FkZXIoXCJkb2luZ1wiLCBkb2luZ1BhZ2UoKSwgc3JjKTtcblxuICBwYWdlTG9hZGVyKFwid2lsbFwiLCB3aWxsUGFnZSgpLCBzcmMpO1xuXG4gIHBhZ2VMb2FkZXIoXCJkb25lXCIsIGRvbmVQYWdlKCksIHNyYyk7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcmMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9