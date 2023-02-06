import * as methods from "./components/methods";
import "./style.css";
import "./components/fonts/Demiths-L3oRZ.otf";

const src = methods.divCreate("", "src");

let folderContainer;

function folderCheck() {
  if (localStorage.length === 0) {
    folderContainer = {};
    folderContainer.main = {};
    localStorage.setItem("folderContainer", folderContainer);
  } else {
    const folders = JSON.parse(localStorage.getItem("folderContainer"));
    folderContainer = folders; 
  }
}




const lateCheck = (folder) => {
  const dateContainer = [];
  const timeContainer = [];
  const localLength = idGet("init");
  const folderItem = folderGet(folder);
  for (let i = 0; i < localLength; i += 1) {
    const localStor = folderItem[i];
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
    folderItem[i] = localStor;
  }
  localStorage.clear();
  localStorage.setItem(folder, JSON.stringify(folderItem));
};


const checkPage = (value) => {
  const currentPage = value.children["0"].id;
  let btnLogic;
  let submitBtns;
  let writeBtns;
  let nextBtn;
  let deleteBtn;
  let prevBtn;
  const pageBtns = {};
  if (currentPage === "main") {
    btnLogic = value.children["0"].children["1"].children["3"];
    writeBtns = value.children["0"].children["1"].children["4"];
    pageBtns.doingBtns = value.children["0"].children["1"].children["0"];
    pageBtns.lateBtns = value.children["0"].children["1"].children["1"];
    pageBtns.completedBtns = value.children["0"].children["1"].children["2"];
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
    deleteBtn = value.children["0"].children["3"].children["0"];
    prevBtn = value.children["0"].children["4"].children["0"];
  }

  return {
    btnLogic,
    pageBtns,
    submitBtns,
    writeBtns,
    nextBtn,
    deleteBtn,
    prevBtn,
  };
};

//

const navbar = () => {
  const myNavbar = methods.navCreate("", "navbar");
  const projectsDiv = methods.divCreate("", "navbar-div-projects");
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

  const deleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-forever-outline</title><path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" /></svg>`;
  return { deleteIcon, plusIcon, returnIcon, writeIcon, noteIcon };
};

const cardsInner = {
  doingH4: methods.h4Create("Doing", "doing-content"),
  lateH4: methods.h4Create("Late", "Late-content"),
  completedH4: methods.h4Create("completed", "completed-content"),
};

const content = () => {
  const myContent = methods.divCreate("", "content-cards");
  function Card(h4Text, type) {
    const cardDiv = methods.divCreate(h4Text, "card", type);
    return cardDiv;
  }

  const doing = Card(cardsInner.doingH4, "doing-card");
  const late = Card(cardsInner.lateH4, "late-card");
  const completed = Card(cardsInner.completedH4, "completed-card");

  const add = methods.divCreate("", "add-item", "", SvgPict().plusIcon);
  const see = methods.divCreate("", "see-item", "", SvgPict().noteIcon);

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
  const TodoNameContainer = methods.divCreate("", "projNameContainer");
  const TodoNameLabel = methods.methodCreate(
    "Label",
    "Todo name",
    `label-${pageName}-name`
  );
  const TodoNameInput = methods.inputCreate(
    "My awesome project!",
    "name-doing",
    "text"
  );

  TodoNameContainer.append(TodoNameLabel, TodoNameInput);

  return TodoNameContainer;
};

const TodoTime = (pageName) => {
  const TodoTimeContainer = methods.divCreate("", "projTimeContainer");
  const TodoTimeLabel = methods.methodCreate(
    "Label",
    "Completion Time",
    `label-${pageName}-time`
  );
  const TodoTimeInput = methods.inputCreate("", `${pageName}-time`, "time");

  TodoTimeContainer.append(TodoTimeLabel, TodoTimeInput);

  return TodoTimeContainer;
};
const TodoDate = (pageName) => {
  const TodoDateContainer = methods.divCreate("", "projDateContainer");
  const TodoDateLabel = methods.methodCreate(
    "Label",
    "Completion date",
    `label-${pageName}-date`
  );
  const TodoDateInput = methods.inputCreate("", `${pageName}-date`, "date");

  TodoDateContainer.append(TodoDateLabel, TodoDateInput);

  return TodoDateContainer;
};
const TodoText = (pageName) => {
  const TodoTextContainer = methods.divCreate("", "projTextContainer");
  const TodoTextInside = methods.methodCreate(
    "textarea",
    "",
    `${pageName}-projText`
  );
  TodoTextInside.setAttribute("maxlength", "100");

  TodoTextContainer.append(TodoTextInside);

  return TodoTextContainer;
};
const TodocompletedOr = () => {
  const TodocompletedContainer = methods.divCreate("", "projDoneContainer");
  const TodocompletedLabel = methods.methodCreate("Label", "completed");
  const TodocompletedInside = methods.divCreate("", "done");

  TodocompletedContainer.append(TodocompletedLabel, TodocompletedInside);

  return TodocompletedContainer;
};
const TodoSubmit = (pageName) => {
  const submitBtn = methods.methodCreate(
    "button",
    "submit",
    `${pageName}-btn`,
    "submitBtn"
  );

  const wrappedBtn = methods.divCreate(submitBtn, "submit-btn-container");

  return wrappedBtn;
};

function WritingPages(pageName) {
  this.page = methods.divCreate(
    "",
    `page-${pageName}-container`,
    `${pageName}`
  );
  this.field = methods.fieldsetCreate("", `field-${pageName}`);
  this.returnBtn = methods.divCreate(
    "",
    `return-${pageName}`,
    "return-text",
    SvgPict().returnIcon
  );

  this.field.append(
    TodoName(`${pageName}`),
    TodoTime(`${pageName}`),
    TodoDate(`${pageName}`),
    TodoText(`${pageName}`),
    TodocompletedOr(`${pageName}`)
  );
  this.page.append(this.returnBtn, this.field, TodoSubmit(`${pageName}`));
}

function SeePage() {

  this.page = methods.divCreate("", `page-see`);
  this.page.id = "see";

  this.field = methods.fieldsetCreate("", `field-see`);
  this.returnBtn = methods.divCreate(
    "",
    `return-Re`,
    "return-text",
    SvgPict().returnIcon
  );

  this.next = methods.methodCreate("button", "next", "btn-next");
  this.delete = methods.methodCreate(
    "button",
    "",
    "btn-delete",
    "delete",
    SvgPict().deleteIcon
  );
  this.prev = methods.methodCreate("button", "previus", "btn-prev");

  this.name = methods.divCreate("Name:", "item-name");
  this.name.append(methods.methodCreate("h3", this.nameItem));
  this.time = methods.divCreate("Time:", "item-time");
  this.time.append(methods.methodCreate("h3", this.timeItem));
  this.date = methods.divCreate("Date:", "item-date");
  this.date.append(methods.methodCreate("h3", this.dateItem));
  this.text = methods.divCreate("Text:", "item-text");
  this.text.append(methods.methodCreate("h3", this.textItem));

  this.field.append(this.name, this.time, this.date, this.text);

  this.nextContainer = methods.divCreate("", "btn-next-container");
  this.deleteContainer = methods.divCreate("", "btn-delete-container");
  this.prevContainer = methods.divCreate("", "btn-prev-container");

  this.nextContainer.append(this.next);
  this.deleteContainer.append(this.delete);
  this.prevContainer.append(this.prev);

  this.page.append(
    this.returnBtn,
    this.field,
    this.nextContainer,
    this.deleteContainer,
    this.prevContainer
  );
}

const writePage = () => {
  const MyPage = new WritingPages("write");
  return MyPage.page;
};

const choosePage = () => {
  const choose = methods.divCreate("", "choose-container", "choose");

  const chooseText = {
    doing: "Doing",
    late: "Late",
    completed: "Completed",
  };

  const doingChoose = methods.divCreate(
    methods.h3Create(chooseText.doing, "doing-choose-h3"),
    "doing-choose-div"
  );
  const lateChoose = methods.divCreate(
    methods.h3Create(chooseText.late, "Late-choose-h3"),
    "Late-choose-div"
  );
  const completedChoose = methods.divCreate(
    methods.h3Create(chooseText.completed, "completed-choose-h3"),
    "completed-choose-div"
  );

  const doingWrap = methods.divCreate(doingChoose, "doing-wrap", "wrap-choose");
  const lateWrap = methods.divCreate(lateChoose, "Late-wrap", "wrap-choose");
  const completedWrap = methods.divCreate(
    completedChoose,
    "completed-wrap",
    "wrap-choose"
  );
  const back = methods.divCreate(
    "",
    "back-choose",
    "return-text",
    SvgPict().returnIcon
  );

  choose.append(doingWrap, lateWrap, completedWrap, back);

  return choose;
};

const checkBox = () => {
  const completed = src.children[0].children["1"].children["4"].children["1"];
  completed.addEventListener("click", () => {
    completed.classList.toggle("done-style");
  });
};

const seePage = () => {
  const chosen = new SeePage();
  const myPage = chosen.page;
  const myField = chosen.field;
  return { myPage, myField };
};

//


const chooseS = choosePage();
const main = methods.divCreate("", "main");
main.append(navbar(), content());

src.append(main);

const addBtn = checkPage(src).btnLogic;
const seeBtn = checkPage(src).writeBtns;

const doingCard = src.children["0"].children["1"].children["0"];
const lateCard = src.children["0"].children["1"].children["1"];
const completedCard = src.children["0"].children["1"].children["2"];



document.body.appendChild(src);
