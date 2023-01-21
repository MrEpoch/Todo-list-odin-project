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

require("./components/fonts/Demiths-L3oRZ.otf");

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

var checkPage = function checkPage(value) {
  var currentPage = value.children["0"].id;
  var btnLogic;

  if (currentPage === "main") {
    btnLogic = value.children["0"].children["1"].children["3"];
  } else if (currentPage === "choose") {
    btnLogic = value.children["0"].children["3"];
  }

  return btnLogic;
};

var currentPage; //

var navbar = function navbar() {
  var myNavbar = methods.navCreate("", "navbar");
  var projectsHeader = methods.h3Create("Projects", "navbar-h3-projects");
  var projectsDiv = methods.divCreate(projectsHeader, "navbar-div-projects");
  myNavbar.append(projectsDiv);
  return myNavbar;
};

var plusSvg = function plusSvg() {
  var plusIcon =
    '<svg viewBox="0 0 26 26">\n                      <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"> </path>\n                    </svg>';
  return plusIcon;
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
  };
  var doing = Card(cardsInner.doingH4);
  var will = Card(cardsInner.willH4);
  var done = Card(cardsInner.doneH4);
  var add = methods.divCreate("", "add-item", "", plusSvg());
  myContent.append(doing, will, done, add);
  var addHtml = myContent.children["3"];
  addHtml.addEventListener("mouseover", function () {
    addHtml.textContent = "New";
  });
  addHtml.addEventListener("mouseout", function () {
    addHtml.innerHTML = plusSvg();
  });
  return myContent;
};

var doingPage = function doingPage() {
  var page = methods.divCreate("", "page-doing-container", "doing");
  var field = methods.fieldsetCreate("", "field-doing");
  return page;
};

var chooseContent = function chooseContent() {
  var choose = methods.divCreate("", "choose-container", "choose");
  var chooseText = {
    doing: "Doing",
    will: "Will do",
    done: "Done",
    back: '<svg style="width:24px;height:24px" viewBox="0 0 24 24">\n              <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"> </path>\n          </svg>',
  };
  var doingChoose = methods.divCreate(
    methods.h3Create(chooseText.doing, "doing-choose-h3"),
    "doing-choose-div"
  );
  var willDoChoose = methods.divCreate(
    methods.h3Create(chooseText.will, "will-choose-h3"),
    "will-choose-div"
  );
  var doneChoose = methods.divCreate(
    methods.h3Create(chooseText.done, "done-choose-h3"),
    "done-choose-div"
  );
  var doingWrap = methods.divCreate(doingChoose, "doing-wrap", "wrap-choose");
  var willWrap = methods.divCreate(willDoChoose, "will-wrap", "wrap-choose");
  var doneWrap = methods.divCreate(doneChoose, "done-wrap", "wrap-choose");
  var back = methods.divCreate("", "back-choose", "", chooseText.back);
  choose.append(doingWrap, willWrap, doneWrap, back);
  return choose;
}; //

var verify = function verify() {};

var errorMess = "Please restart page or contact support!";
var main = methods.divCreate(
  methods.h1Create(errorMess, "error"),
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

src.append(main);
var addBtn = checkPage(src);
addBtn.addEventListener("click", function () {
  addBtn.innerHTML = plusSvg();
  src.innerHTML = "";
  src.append(chooseContent());
  currentPage = src.innerHTML;
  var returnBtn = checkPage(src);
  returnBtn.addEventListener("click", function () {
    src.innerHTML = "";
    src.append(main);
    returnBtn = "";
  });
}); // const check = (value) => {
//   if(value.children["0"].id === "main")
// }

document.body.appendChild(src);
