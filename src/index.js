import * as methods from "./components/methods";
import "./style.css";
import "./components/fonts/Demiths-L3oRZ.otf";

const src = methods.divCreate("", "src");

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
  const myNavbar = methods.navCreate("", "navbar");
  const projectsHeader = methods.h3Create("Todo", "navbar-h3-projects");
  const projectsDiv = methods.divCreate(projectsHeader, "navbar-div-projects");
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
  const myContent = methods.divCreate("", "content-cards");
  function Card(h4Text) {
    const cardDiv = methods.divCreate(h4Text, "card");
    return cardDiv;
  }

  const cardsInner = {
    doingH4: methods.h4Create("Doing", "doing-content"),
    willH4: methods.h4Create("Will do", "will-do-content"),
    doneH4: methods.h4Create("Done", "done-content"),
  };

  const doing = Card(cardsInner.doingH4);
  const will = Card(cardsInner.willH4);
  const done = Card(cardsInner.doneH4);

  const add = methods.divCreate("", "add-item", "", SvgPict().plusIcon);

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
  const TodoNameContainer = methods.divCreate("", "projNameContainer");
  const TodoNameLabel = methods.methodCreate(
    "label",
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
    "label",
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
    "label",
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

  TodoTextContainer.append(TodoTextInside);

  return TodoTextContainer;
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

const donePage = () => {
  const MyPage = new WritingPages("done");
  return MyPage.page;
};

const chooseContent = () => {
  const choose = methods.divCreate("", "choose-container", "choose");

  const chooseText = {
    doing: "Doing",
    will: "Will do",
    done: "Done",
  };

  const doingChoose = methods.divCreate(
    methods.h3Create(chooseText.doing, "doing-choose-h3"),
    "doing-choose-div"
  );
  const willDoChoose = methods.divCreate(
    methods.h3Create(chooseText.will, "will-choose-h3"),
    "will-choose-div"
  );
  const doneChoose = methods.divCreate(
    methods.h3Create(chooseText.done, "done-choose-h3"),
    "done-choose-div"
  );

  const doingWrap = methods.divCreate(doingChoose, "doing-wrap", "wrap-choose");
  const willWrap = methods.divCreate(willDoChoose, "will-wrap", "wrap-choose");
  const doneWrap = methods.divCreate(doneChoose, "done-wrap", "wrap-choose");
  const back = methods.divCreate(
    "",
    "back-choose",
    "return-text",
    SvgPict().returnIcon
  );

  choose.append(doingWrap, willWrap, doneWrap, back);

  return choose;
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
const main = methods.divCreate(
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
      returnBtn(main);
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
