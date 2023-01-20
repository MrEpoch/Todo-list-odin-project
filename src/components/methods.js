// Made by MrEpoch

// This file was made to be exported for use in other files, it holds methods for creating html elements in easier way

// divCreate function expression takes like first what is inside and then class and returns div at end

const divCreate = (InsideDiv, classAdd) => {
  const div = document.createElement("div");
  div.append(InsideDiv);
  div.classList.add(classAdd);
  return div;
};

const navCreate = (InsideNav, classAdd) => {
  const nav = document.createElement("nav");
  nav.append(InsideNav);
  nav.classList.add(classAdd);
  return nav;
};

// ImgCreate is returns takes Imported img and returns it ready for use to append to the div or other use

const ImgCreate = (image) => {
  const img = new Image();
  img.src = image;
  return img;
};

// h2Create creates h2 element which takes textContent and class and returns h2

const h1Create = (TextInside, classAdd) => {
  const h1 = document.createElement("h1");
  h1.textContent = TextInside;
  h1.classList.add(classAdd);
  return h1;
};

const h2Create = (TextInside, classAdd) => {
  const h2 = document.createElement("h2");
  h2.textContent = TextInside;
  h2.classList.add(classAdd);
  return h2;
};

const h3Create = (TextInside, classAdd) => {
  const h3 = document.createElement("h3");
  h3.textContent = TextInside;
  h3.classList.add(classAdd);
  return h3;
};

// h4Create creates h4 element which takes textContent and class and returns h4

const h4Create = (TextInside, classAdd) => {
  const h4 = document.createElement("h4");
  h4.textContent = TextInside;
  h4.classList.add(classAdd);
  return h4;
};

const h5Create = (TextInside, classAdd) => {
  const h5 = document.createElement("h5");
  h5.textContent = TextInside;
  h5.classList.add(classAdd);
  return h5;
};

// pCreate creates paragrahp with first parameter text and second class and returns paragraph

const pCreate = (TextInside, classAdd) => {
  const p = document.createElement("p");
  p.textContent = TextInside;
  p.classList.add(classAdd);
  return p;
};

// exporting all function expressions

export {
  divCreate,
  navCreate,
  ImgCreate,
  h1Create,
  h2Create,
  h3Create,
  h4Create,
  h5Create,
  pCreate,
};
