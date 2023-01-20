"use strict";

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

var methods = _interopRequireWildcard(require("./components/methods"));

require("./style.css");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

var src = methods.divCreate("", "src");

var navbar = function navbar() {
  var myNavbar = methods.navCreate("", "navbar");
  var projects = methods.h4Create("Projects", "navbar-h4-projects");
  myNavbar.append(projects);
  return myNavbar;
};

var content = function content() {
  var myContent = methods.divCreate("", "content-cards");

  function Card(h4Text) {
    var cardDiv = methods.divCreate(h4Text, "card");
    return cardDiv;
  }

  var cardsInner = {
    doingH4: methods.h4Create("Doing", "doing-content"),
    willH4: methods.h4Create("Will do", "will-do-content"),
    doneH4: methods.h4Create("Done", "done-content"),
    addSvg:
      '<svg viewBox="0 0 26 26">\n    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"> </path>\n</svg>',
  };
  var doing = Card(cardsInner.doingH4);
  var will = Card(cardsInner.willH4);
  var done = Card(cardsInner.doneH4);
  var add = methods.divCreate("", "add-item");
  add.innerHTML = cardsInner.addSvg;
  myContent.append(doing, will, done, add);
  return myContent;
};

var swap = methods.divCreate("", "swap");
swap.append(navbar(), content());
src.append(swap);
document.body.appendChild(src);
