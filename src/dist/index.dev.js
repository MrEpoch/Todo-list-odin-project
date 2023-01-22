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

if (!localStorage.getItem("Id")) {
  localStorage.setItem("Id", "0");
}

function storageAvailable(type) {
  var storage;

  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException && // everything except Firefox
      (e.code === 22 || // Firefox
        e.code === 1014 || // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" || // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
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
  localStorage.setItem("name-".concat(idlocal), itemObject.name);
  localStorage.setItem("time-".concat(idlocal), itemObject.name);
  localStorage.setItem("date-".concat(idlocal), itemObject.date);
  localStorage.setItem("text-".concat(idlocal), itemObject.text);
  return localStorage;
} // if (storageAvailable('localStorage')) {
//   // Yippee! We can use localStorage awesomeness
// }
// else {
//   // Too bad, no localStorage for us
// }

var checkPage = function checkPage(value) {
  var currentPage = value.children["0"].id;
  var btnLogic;
  var submitBtns;
  var pageBtns = {};

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

  return {
    btnLogic: btnLogic,
    pageBtns: pageBtns,
    submitBtns: submitBtns,
  };
}; //

var navbar = function navbar() {
  var myNavbar = methods.navCreate("", "navbar");
  var projectsHeader = methods.h3Create("Todo", "navbar-h3-projects");
  var projectsDiv = methods.divCreate(projectsHeader, "navbar-div-projects");
  myNavbar.append(projectsDiv);
  return myNavbar;
};

var SvgPict = function SvgPict() {
  var plusIcon =
    '<svg viewBox="0 0 26 26">\n                      <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"> </path>\n                    </svg>';
  var returnIcon =
    '<svg style="width:24px;height:24px" viewBox="0 0 24 24">\n                        <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"> </path>\n                      </svg>';
  return {
    plusIcon: plusIcon,
    returnIcon: returnIcon,
  };
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
  var add = methods.divCreate("", "add-item", "", SvgPict().plusIcon);
  myContent.append(doing, will, done, add);
  var addHtml = myContent.children["3"];
  addHtml.addEventListener("mouseover", function () {
    addHtml.textContent = "New";
  });
  addHtml.addEventListener("mouseout", function () {
    addHtml.innerHTML = SvgPict().plusIcon;
  });
  return myContent;
};

var TodoName = function TodoName(pageName) {
  var TodoNameContainer = methods.divCreate("", "projNameContainer");
  var TodoNameLabel = methods.methodCreate(
    "label",
    "Todo name",
    "label-".concat(pageName, "-name")
  );
  var TodoNameInput = methods.inputCreate(
    "My awesome project!",
    "name-doing",
    "text"
  );
  TodoNameContainer.append(TodoNameLabel, TodoNameInput);
  return TodoNameContainer;
};

var TodoTime = function TodoTime(pageName) {
  var TodoTimeContainer = methods.divCreate("", "projTimeContainer");
  var TodoTimeLabel = methods.methodCreate(
    "label",
    "Completion Time",
    "label-".concat(pageName, "-time")
  );
  var TodoTimeInput = methods.inputCreate(
    "",
    "".concat(pageName, "-time"),
    "time"
  );
  TodoTimeContainer.append(TodoTimeLabel, TodoTimeInput);
  return TodoTimeContainer;
};

var TodoDate = function TodoDate(pageName) {
  var TodoDateContainer = methods.divCreate("", "projDateContainer");
  var TodoDateLabel = methods.methodCreate(
    "label",
    "Completion date",
    "label-".concat(pageName, "-date")
  );
  var TodoDateInput = methods.inputCreate(
    "",
    "".concat(pageName, "-date"),
    "date"
  );
  TodoDateContainer.append(TodoDateLabel, TodoDateInput);
  return TodoDateContainer;
};

var TodoText = function TodoText(pageName) {
  var TodoTextContainer = methods.divCreate("", "projTextContainer");
  var TodoTextInside = methods.methodCreate(
    "textarea",
    "",
    "".concat(pageName, "-projText")
  );
  TodoTextContainer.append(TodoTextInside);
  return TodoTextContainer;
};

var TodoSubmit = function TodoSubmit(pageName) {
  var submitBtn = methods.methodCreate(
    "button",
    "submit",
    "".concat(pageName, "-btn"),
    "submitBtn"
  );
  var wrappedBtn = methods.divCreate(submitBtn, "submit-btn-container");
  return wrappedBtn;
};

function WritingPages(pageName) {
  this.page = methods.divCreate(
    "",
    "page-".concat(pageName, "-container"),
    "".concat(pageName)
  );
  this.field = methods.fieldsetCreate("", "field-".concat(pageName));
  this.returnBtn = methods.divCreate(
    "",
    "return-".concat(pageName),
    "return-text",
    SvgPict().returnIcon
  );
  this.field.append(
    TodoName("".concat(pageName)),
    TodoTime("".concat(pageName)),
    TodoDate("".concat(pageName)),
    TodoText("".concat(pageName))
  );
  this.page.append(this.returnBtn, this.field, TodoSubmit("".concat(pageName)));
}

var doingPage = function doingPage() {
  var MyPage = new WritingPages("doing");
  return MyPage.page;
};

var willPage = function willPage() {
  var MyPage = new WritingPages("will");
  return MyPage.page;
};

var TodoPage = function TodoPage(idNum) {
  var h2Name = methods.h2Create(
    localStorage.getItem("name-".concat(idNum)),
    "h2Name"
  );
  var h2Time = methods.h2Create(
    localStorage.getItem("time-".concat(idNum)),
    "h2time"
  );
  var h2Date = methods.h2Create(
    localStorage.getItem("date-".concat(idNum)),
    "h2date"
  );
  var h2Text = methods.h2Create(
    localStorage.getItem("text-".concat(idNum)),
    "h2text"
  );
  var someDiv = methods.divCreate("", "someDiv");
  someDiv.append(h2Name, h2Time, h2Date, h2Text);
  return someDiv;
};

var donePage = function donePage() {
  var MyPage = new WritingPages("done");
  return MyPage.page;
};

var chooseContent = function chooseContent() {
  var choose = methods.divCreate("", "choose-container", "choose");
  var chooseText = {
    doing: "Doing",
    will: "Will do",
    done: "Done",
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
  var back = methods.divCreate(
    "",
    "back-choose",
    "return-text",
    SvgPict().returnIcon
  );
  choose.append(doingWrap, willWrap, doneWrap, back);
  return choose;
};

var idGet = function idGet() {
  var idCalled = localStorage.getItem("Id");
  return idCalled;
};

var idSet = function idSet(value) {
  var idChanged = localStorage.setItem("Id", "".concat(value));
  return idChanged;
}; //

var returnBtn = function returnBtn(value) {
  var returnBtns = checkPage(src).btnLogic;
  returnBtns.addEventListener("click", function () {
    src.innerHTML = "";
    src.append(value);
  });
  return returnBtns;
};

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

var pageLoader = function pageLoader(btn, page, value) {
  if (
    value.children["0"].id !== "main" ||
    value.children["0"].id !== "choose"
  ) {
    var parameter = btn;
    var Loadedpage = checkPage(value).pageBtns[(parameter += "Btns")];
    Loadedpage.addEventListener("click", function () {
      src.innerHTML = "";
      src.append(page);
      var submit = checkPage(src).submitBtns;
      submit.addEventListener("click", function () {
        var nowId = idGet();
        console.log(nowId);
        var input =
          value.children["0"].children["1"].children["0"].children["1"];
        var time =
          value.children["0"].children["1"].children["1"].children["1"];
        var date =
          value.children["0"].children["1"].children["2"].children["1"];
        var textA =
          value.children["0"].children["1"].children["3"].children["0"];
        var FirstItem = new NewItem(
          nowId,
          input.value,
          time.value,
          date.value,
          textA.value
        );
        localItem(FirstItem, nowId);
        var changeId = parseInt(nowId, 10);
        idSet((changeId += 1));
      });
      var side = TodoPage();
      returnBtn(side);
    });
  }
};

src.append(main);
var addBtn = checkPage(src).btnLogic;
addBtn.addEventListener("click", function () {
  addBtn.innerHTML = SvgPict().plusIcon;
  src.innerHTML = "";
  src.append(chooseContent());
  returnBtn(main);
  pageLoader("doing", doingPage(), src);
  pageLoader("will", willPage(), src);
  pageLoader("done", donePage(), src);
});
document.body.appendChild(src);
