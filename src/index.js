import * as methods from "./components/methods";
import "./style.css";
import "./components/fonts/Demiths-L3oRZ.otf";

const src = methods.divCreate("", "src");

const checkPage = (value) => {
  const currentPage = value.children["0"].id;
  let btnLogic;
  if (currentPage === "main") {
    btnLogic = value.children["0"].children["1"].children["3"];
  } else if (currentPage === "choose") {
    btnLogic = value.children["0"].children["3"];
  }
  return btnLogic;
};

let currentPage;

//

const navbar = () => {
  const myNavbar = methods.navCreate("", "navbar");
  const projectsHeader = methods.h3Create("Projects", "navbar-h3-projects");
  const projectsDiv = methods.divCreate(projectsHeader, "navbar-div-projects");
  myNavbar.append(projectsDiv);

  return myNavbar;
};

const plusSvg = () => {
  const plusIcon = `<svg viewBox="0 0 26 26">
                      <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"> </path>
                    </svg>`;
  return plusIcon;
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

  const add = methods.divCreate("", "add-item", "", plusSvg());

  myContent.append(doing, will, done, add);
  const addHtml = myContent.children["3"];

  addHtml.addEventListener("mouseover", () => {
    addHtml.textContent = "New";
  });

  addHtml.addEventListener("mouseout", () => {
    addHtml.innerHTML = plusSvg();
  });

  return myContent;
};

const doingPage = () => {
  const page = methods.divCreate("", "page-doing-container", "doing");
  const field = methods.fieldsetCreate("", "field-doing");

  return page;
};

const chooseContent = () => {
  const choose = methods.divCreate("", "choose-container", "choose");

  const chooseText = {
    doing: "Doing",
    will: "Will do",
    done: "Done",
    back: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"> </path>
          </svg>`,
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
  const back = methods.divCreate("", "back-choose", "", chooseText.back);

  choose.append(doingWrap, willWrap, doneWrap, back);

  return choose;
};

//
const verify = () => {};
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

src.append(main);

const addBtn = checkPage(src);

addBtn.addEventListener("click", () => {
  addBtn.innerHTML = plusSvg();
  src.innerHTML = "";
  src.append(chooseContent());

  currentPage = src.innerHTML;

  let returnBtn = checkPage(src);
  returnBtn.addEventListener("click", () => {
    src.innerHTML = "";
    src.append(main);
    returnBtn = "";
  });
});

// const check = (value) => {
//   if(value.children["0"].id === "main")
// }

document.body.appendChild(src);
