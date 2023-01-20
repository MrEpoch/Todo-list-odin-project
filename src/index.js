import * as methods from "./components/methods";
import "./style.css";

const src = methods.divCreate("", "src");

const navbar = () => {
  const myNavbar = methods.navCreate("", "navbar");
  const projects = methods.h4Create("Projects", "navbar-h4-projects");

  myNavbar.append(projects);

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

  return myContent;
};

const swap = methods.divCreate("", "swap");
swap.append(navbar(), content());
src.append(swap);

document.body.appendChild(src);
