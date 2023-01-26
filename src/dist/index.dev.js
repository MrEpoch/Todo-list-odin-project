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
var idArr = [];

var idGet = function idGet() {
  var idCalled = localStorage.getItem("Id");
  return idCalled;
};

var idSet = function idSet(value) {
  var idChanged = localStorage.setItem("Id", "".concat(value));
  return idChanged;
};

function localItem(itemObject, id) {
  localStorage.setItem("".concat(id), JSON.stringify(itemObject));
}

var arrWithLocal = [];
var myMeasure = [];

var checkIfId = function checkIfId() {
  if (!localStorage.getItem("Id")) {
    localStorage.setItem("Id", "0");
    return false;
  }

  return true;
};

var requestItem = function requestItem(id, item) {
  if (!localStorage.getItem("".concat(id))) {
    return "empty";
  }

  var itemsObject = JSON.parse(localStorage.getItem("".concat(id)));

  if (!itemsObject[item]) {
    return "empty";
  }

  var requestedItem = itemsObject[item];
  return requestedItem;
};

var loadArr = function loadArr() {
  var curId = parseInt(idGet(), 10);

  if (checkIfId() === true && curId > arrWithLocal.length) {
    for (var i = 0; i < curId; i += 1) {
      var localVal = {
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

var useLoadAndCheck = function useLoadAndCheck() {
  checkIfId();
  loadArr();
};

useLoadAndCheck();

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

function NewItem(name, time, date, completed, text) {
  this.name = name;
  this.time = time;
  this.date = date;
  this.completed = completed;
  this.text = text;
}

var itemsCount = function itemsCount() {
  var currentId = localStorage.getItem("Id");
  var IntId = parseInt(currentId, 10) + 1;
  return IntId;
};

function LoadH(hType, hValue) {
  var loaderH3 = methods.methodCreate(hType, hValue, "function-loaded-h3");
  return loaderH3;
} // if (storageAvailable('localStorage')) {
//   // Yippee! We can use localStorage awesomeness
// }
// else {
//   // Too bad, no localStorage for us
// }
// date === 0-Year, 1-month, 2-day

var lateCheck = function lateCheck() {
  var dateContainer = [];
  var timeContainer = [];

  for (var i = 0; i < arrWithLocal.length; i += 1) {
    if (arrWithLocal[i].date) {
      var curDate = new Date();
      var curYear = curDate.getFullYear();
      var curMonth = curDate.getMonth();
      var curDay = curDate.getDay();
      var curHour = curDate.getHours();
      var curMinute = curDate.getMinutes();
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

var reLate = function reLate() {
  for (var i = 0; i < arrWithLocal.length; i += 1) {
    var value = JSON.parse(localStorage.getItem(i.toString()));
    value.late = arrWithLocal[i].late;
    localStorage.setItem(i.toString(), JSON.stringify(value));
  }
};

lateCheck();
reLate();
console.log(arrWithLocal[0]);

var assignPlace = function assignPlace() {
  var numOfItems = localStorage.length - 1;

  for (var i = 0; i < numOfItems; i += 1) {
    var value = JSON.parse(localStorage.getItem(i.toString()));

    if (value.completed === true) {
      arrWithLocal[i].place = "completed";
      value.place = arrWithLocal[i].place;
      localStorage.setItem(i.toString(), JSON.stringify(value));
    } else if (value.completed === false) {
      if (value.late === true) {
        arrWithLocal[i].place = "late";
        value.place = arrWithLocal[i].place;
        localStorage.setItem(i.toString(), JSON.stringify(value));
      } else if (value.late === false) {
        arrWithLocal[i].place = "doing";
        value.place = arrWithLocal[i].place;
        localStorage.setItem(i.toString(), JSON.stringify(value));
      }
    }
  }
};

assignPlace();

var checkPage = function checkPage(value) {
  var currentPage = value.children["0"].id;
  var btnLogic;
  var submitBtns;
  var writeBtns;
  var nextBtn;
  var prevBtn;
  var pageBtns = {};

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

  return {
    btnLogic: btnLogic,
    pageBtns: pageBtns,
    submitBtns: submitBtns,
    writeBtns: writeBtns,
    nextBtn: nextBtn,
    prevBtn: prevBtn,
  };
};

var myType = function myType(id) {
  var myComplete = requestItem(id, "complete");
  var myLate = requestItem(id, "complete");

  if (myComplete === true) {
    return "completed";
  }

  if (myLate === true) {
    return "late";
  }

  return "doing";
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
  var writeIcon =
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256" xml:space="preserve"><style>.st2{fill:#69ebfc}.st5{fill:#d476e2}.st14{fill:#edd4c2}</style><path d="M205 0H20c5.52 0 10.52 2.24 14.14 5.86S40 14.48 40 20v236h185V20c0-11.046-8.954-20-20-20z" style="fill:#ffefe4"/><path class="st14" d="M40 250h185v6H40z"/><path d="M205 0H20c5.52 0 10.52 2.24 14.14 5.86.045.045.083.095.127.14H205c11.046 0 20 8.954 20 20v-6c0-11.046-8.954-20-20-20z" style="fill:#fff7f2"/><path d="M144 56H70a8 8 0 0 1 0-16h74a8 8 0 0 1 0 16z" style="fill:#ff8354"/><path class="st14" d="M188 84H66a4 4 0 0 1 0-8h122a4 4 0 0 1 0 8zM188 111.2H66a4 4 0 0 1 0-8h122a4 4 0 0 1 0 8zM188 138.4H66a4 4 0 0 1 0-8h122a4 4 0 0 1 0 8zM188 165.6H66a4 4 0 0 1 0-8h122a4 4 0 0 1 0 8zM188 192.8H66a4 4 0 0 1 0-8h122a4 4 0 0 1 0 8zM147 220H66a4 4 0 0 1 0-8h81a4 4 0 0 1 0 8zM40 20v60H0V20C0 8.95 8.95 0 20 0c5.52 0 10.52 2.24 14.14 5.86S40 14.48 40 20z"/><path transform="rotate(30 173.417 175.565)" class="st5" d="M163.411 150.575h20v50h-20z"/><path class="st5" d="m169.571 202.226-17.32-10-5.625 24.567a2.708 2.708 0 0 0 4.483 2.589l18.462-17.156z"/><path transform="rotate(30 212.163 108.447)" class="st2" d="M202.161 55.958h20v105h-20z"/><path transform="rotate(-150 244.807 75.92)" class="st2" d="M242.803 72.92h4v6h-4z"/><path class="st2" d="M223.999 123.954a4 4 0 0 0 5.464-1.464l26-45.033a4 4 0 1 0-6.928-4l-26 45.033a4 4 0 0 0 1.464 5.464z"/><path class="st5" d="M250.911 41.341c-4.783-2.761-10.899-1.123-13.66 3.66l-7.5 12.99 17.32 10 7.5-12.99c2.762-4.782 1.123-10.898-3.66-13.66z"> </path></svg>';
  var noteIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>note-multiple-outline</title><path d="M3,6V22H21V24H3A2,2 0 0,1 1,22V6H3M16,9H21.5L16,3.5V9M7,2H17L23,8V18A2,2 0 0,1 21,20H7C5.89,20 5,19.1 5,18V4A2,2 0 0,1 7,2M7,4V18H21V11H14V4H7Z"> </path></svg>';
  return {
    plusIcon: plusIcon,
    returnIcon: returnIcon,
    writeIcon: writeIcon,
    noteIcon: noteIcon,
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
    lateH4: methods.h4Create("Late", "Late-content"),
    completedH4: methods.h4Create("completed", "completed-content"),
  };
  var doing = Card(cardsInner.doingH4);
  var late = Card(cardsInner.lateH4);
  var completed = Card(cardsInner.completedH4);
  var add = methods.divCreate("", "add-item", "", SvgPict().plusIcon);
  var see = methods.divCreate("", "see-item", "", SvgPict().noteIcon);
  myContent.append(doing, late, completed, add, see);
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
    "Label",
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
    "Label",
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
    "Label",
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

var TodocompletedOr = function TodocompletedOr(pagename) {
  var TodocompletedContainer = methods.divCreate("", "projDoneContainer");
  var TodocompletedLabel = methods.methodCreate("Label", "completed");
  var TodocompletedInside = methods.inputCreate("", "done", "checkbox");
  TodocompletedContainer.append(TodocompletedLabel, TodocompletedInside);
  return TodocompletedContainer;
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
    TodocompletedOr("".concat(pageName)),
    TodoText("".concat(pageName))
  );
  this.page.append(this.returnBtn, this.field, TodoSubmit("".concat(pageName)));
}

var doingArr = [];
var lateArr = [];
var completedArr = [];

var returnType = function returnType() {
  if (!arrWithLocal.length === 0) {
    for (var i = 0; i < arrWithLocal.length; i += 1) {
      if (arrWithLocal[i].place === "doing") {
        arrWithLocal.typeId = i;
        doingArr.push(arrWithLocal[i]);
      }

      if (arrWithLocal[i].place === "late") {
        arrWithLocal.typeId = i;
        lateArr.push(arrWithLocal[i]);
      }

      if (arrWithLocal[i].place === "completed") {
        arrWithLocal.typeId = i;
        completedArr.push(arrWithLocal[i]);
      }
    }
  }
};

returnType();

var idSeeCheck = function idSeeCheck(id, page) {
  var checkingValue = requestItem(id, "place");

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
  this.page = methods.divCreate("", "page-".concat(value));
  this.page.id = "see";
  this.field = methods.fieldsetCreate("", "field-Re");
  this.returnBtn = methods.divCreate(
    "",
    "return-Re",
    "return-text",
    SvgPict().returnIcon
  );
  this.next = methods.methodCreate("button", "next", "btn-next");
  this.prev = methods.methodCreate("button", "previus", "btn-prev");
  this.name = methods.divCreate("Name:", "item-name");
  this.name.append(LoadH("h3", this.nameItem));
  this.time = methods.divCreate("Time:", "item-time");
  this.time.append(LoadH("h3", this.timeItem));
  this.date = methods.divCreate("Date:", "item-date");
  this.date.append(LoadH("h3", this.dateItem));
  this.text = methods.divCreate("Text:", "item-text");
  this.text.append(LoadH("h3", this.textItem));
  this.field.append(this.name, this.time, this.date, this.text);
  this.nextContainer = methods.divCreate("", "btn-next-container");
  this.prevContainer = methods.divCreate("", "btn-prev-container");
  this.nextContainer.append(this.next);
  this.prevContainer.append(this.prev);
  this.page.append(
    this.returnBtn,
    this.field,
    this.nextContainer,
    this.prevContainer
  );
}

var writePage = function writePage() {
  var MyPage = new WritingPages("write");
  return MyPage.page;
};

var choosePage = function choosePage() {
  var choose = methods.divCreate("", "choose-container", "choose");
  var chooseText = {
    doing: "Doing",
    late: "Late",
    completed: "Completed",
  };
  var doingChoose = methods.divCreate(
    methods.h3Create(chooseText.doing, "doing-choose-h3"),
    "doing-choose-div"
  );
  var lateChoose = methods.divCreate(
    methods.h3Create(chooseText.late, "Late-choose-h3"),
    "Late-choose-div"
  );
  var completedChoose = methods.divCreate(
    methods.h3Create(chooseText.completed, "completed-choose-h3"),
    "completed-choose-div"
  );
  var doingWrap = methods.divCreate(doingChoose, "doing-wrap", "wrap-choose");
  var lateWrap = methods.divCreate(lateChoose, "Late-wrap", "wrap-choose");
  var completedWrap = methods.divCreate(
    completedChoose,
    "completed-wrap",
    "wrap-choose"
  );
  var back = methods.divCreate(
    "",
    "back-choose",
    "return-text",
    SvgPict().returnIcon
  );
  choose.append(doingWrap, lateWrap, completedWrap, back);
  return choose;
};

var seePage = function seePage(id, value, page) {
  var chosen = new SeePage(id, value);

  if (idSeeCheck(id, page) === false) {
    chosen.name.innerHTML = "empty";
    chosen.time.innerHTML = "empty";
    chosen.date.innerHTML = "empty";
    chosen.text.innerHTML = "empty";
  }

  var myPage = chosen.page;
  var myField = chosen.field;
  return {
    myPage: myPage,
    myField: myField,
  };
}; //

var returnBtn = function returnBtn(value) {
  var returnBtns = checkPage(src).btnLogic;
  returnBtns.addEventListener("click", function () {
    src.innerHTML = "";
    src.append(value);
    useLoadAndCheck();
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

var chooseS = choosePage();

var seeBtnsLogic = function seeBtnsLogic(value, id, page) {
  var field = value.children["0"].children["1"];
  var next = checkPage(value).nextBtn;
  var prev = checkPage(value).prevBtn;
  var currId = id;
  next.addEventListener("click", function () {
    useLoadAndCheck();

    if (currId < idGet() - 1) {
      currId += 1;
      field.innerHTML = "";
      var stringNum = currId.toString();
      field.append(seePage(stringNum, "see", page).myField);
    } else if (currId === idGet() - 1) {
      currId = 0;
      field.innerHTML = "";

      var _stringNum = currId.toString();

      field.append(seePage(_stringNum, "see", page).myField);
    }
  });
  prev.addEventListener("click", function () {
    useLoadAndCheck();

    if (currId > 0) {
      currId -= 1;
      field.innerHTML = "";
      var stringNum = currId.toString();
      field.append(seePage(stringNum, "see", page).myField);
    } else if (currId === 0) {
      currId = idGet() - 1;
      field.innerHTML = "";

      var _stringNum2 = currId.toString();

      field.append(seePage(_stringNum2, "see", page).myField);
    }
  });
};

var writeSubmit = function writeSubmit(value) {
  var submit = checkPage(src).submitBtns;
  submit.addEventListener("click", function () {
    var nowId = idGet();
    var input = value.children[0].children["1"].children["0"].children["1"];
    var time = value.children[0].children["1"].children["1"].children["1"];
    var date = value.children[0].children["1"].children["2"].children["1"];
    var completed = value.children[0].children["1"].children["3"].children["1"];
    var textA = value.children[0].children["1"].children["4"].children["0"];
    var Item = new NewItem(
      input.value,
      time.value,
      date.value,
      completed.checked,
      textA.value
    );
    console.log(Item);
    localItem(Item, nowId);
    var changeId = parseInt(nowId, 10);
    idSet((changeId += 1));
    useLoadAndCheck();
    lateCheck();
    assignPlace();
  });
  return submit;
};

var writeLoader = function writeLoader(btn, page, value, returnPage) {
  if (value.children["0"].id === "choose") {
    var parameter = btn;
    var Loadedpage = checkPage(value).pageBtns[(parameter += "Btns")];
    Loadedpage.addEventListener("click", function () {
      src.innerHTML = "";
      src.append(page);
      returnBtn(returnPage);
      seeBtnsLogic(value, 0, btn);
    });
  }
};

src.append(main);
var addBtn = checkPage(src).btnLogic;
var seeBtn = checkPage(src).writeBtns;
addBtn.addEventListener("click", function () {
  addBtn.innerHTML = SvgPict().plusIcon;
  src.innerHTML = "";
  src.append(writePage());
  useLoadAndCheck();
  writeSubmit(src);
  returnBtn(main);
});
seeBtn.addEventListener("click", function () {
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
