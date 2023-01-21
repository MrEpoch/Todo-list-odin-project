import * as methods from "./components/methods";
import "./style.css";
import "./components/fonts/Demiths-L3oRZ.otf";

const src = methods.divCreate("", "src");

const navbar = () => {
  const myNavbar = methods.navCreate("", "navbar");
  const projectsHeader = methods.h3Create("Projects", "navbar-h3-projects");
  const projectsDiv = methods.divCreate(projectsHeader, "navbar-div-projects");
  myNavbar.append(projectsDiv);

  return myNavbar;
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
    addSvg: `<svg viewBox="0 0 26 26">
              <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"> </path>
            </svg>`,
  };

  const doing = Card(cardsInner.doingH4);
  const will = Card(cardsInner.willH4);
  const done = Card(cardsInner.doneH4);

  const add = methods.divCreate("", "add-item");
  add.innerHTML = cardsInner.addSvg;

  myContent.append(doing, will, done, add);
  const addHtml = myContent.children["3"];

  addHtml.addEventListener("mouseover", () => {
    addHtml.textContent = "New";
  });

  addHtml.addEventListener("mouseout", () => {
    addHtml.innerHTML = cardsInner.addSvg;
  });

  return myContent;
};

const chooseContent = () => {
  const choose = methods.divCreate("", "choose-container");

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

  const doingWrap = methods.divCreate(doingChoose, "doing-wrap");
  const willWrap = methods.divCreate(willDoChoose, "will-wrap");
  const doneWrap = methods.divCreate(doneChoose, "done-wrap");

  choose.append(doingWrap, willWrap, doneWrap);

  return choose;
};

const errorMess = "Please restart page or contact support!";
const main = methods.divCreate(methods.h1Create(errorMess, "error"), "main");
if (navbar() && content()) {
  main.innerHTML = "";
  main.append(navbar(), content());
} else {
  console.error(
    "***  navbar() or content() didn't return expected value!  ***"
  );
}

const addBtn = main.children["1"].children["3"];

addBtn.addEventListener("click", () => {
  src.innerHTML = "";
  src.append(chooseContent());
});

src.append(main);

document.body.appendChild(src);
