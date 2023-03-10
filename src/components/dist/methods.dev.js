"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.fieldsetCreate =
  exports.inputCreate =
  exports.pCreate =
  exports.h5Create =
  exports.h4Create =
  exports.h3Create =
  exports.h2Create =
  exports.h1Create =
  exports.ImgCreate =
  exports.navCreate =
  exports.divCreate =
  exports.methodCreate =
    void 0;

// Made by MrEpoch
// This file was made to be exported for use in other files, it holds methods for creating html elements in easier way
// divCreate function expression takes like first what is inside and then class and returns div at end
var methodCreate = function methodCreate(
  htmlName,
  inside,
  classAdd,
  idAdd,
  innerHtml
) {
  var element = document.createElement(htmlName);
  element.append(inside);
  element.classList.add(classAdd);

  if (idAdd) {
    element.id = idAdd;
  }

  if (innerHtml) {
    element.innerHTML = innerHtml;
  }

  return element;
};

exports.methodCreate = methodCreate;

var divCreate = function divCreate(InsideDiv, classAdd, idAdd, innerHtml) {
  var div = document.createElement("div");
  div.append(InsideDiv);
  div.classList.add(classAdd);

  if (idAdd) {
    div.id = idAdd;
  }

  if (innerHtml) {
    div.innerHTML = innerHtml;
  }

  return div;
};

exports.divCreate = divCreate;

var navCreate = function navCreate(InsideNav, classAdd, idAdd) {
  var nav = document.createElement("nav");
  nav.append(InsideNav);
  nav.classList.add(classAdd);

  if (idAdd) {
    nav.id = idAdd;
  }

  return nav;
}; // ImgCreate is returns takes Imported img and returns it ready for use to append to the div or other use

exports.navCreate = navCreate;

var ImgCreate = function ImgCreate(image) {
  var img = new Image();
  img.src = image;
  return img;
}; // h2Create creates h2 element which takes textContent and class and returns h2

exports.ImgCreate = ImgCreate;

var h1Create = function h1Create(TextInside, classAdd, idAdd) {
  var h1 = document.createElement("h1");
  h1.textContent = TextInside;
  h1.classList.add(classAdd);

  if (idAdd) {
    h1.id = idAdd;
  }

  return h1;
};

exports.h1Create = h1Create;

var h2Create = function h2Create(TextInside, classAdd, idAdd) {
  var h2 = document.createElement("h2");
  h2.textContent = TextInside;
  h2.classList.add(classAdd);

  if (idAdd) {
    h2.id = idAdd;
  }

  return h2;
};

exports.h2Create = h2Create;

var h3Create = function h3Create(TextInside, classAdd, idAdd) {
  var h3 = document.createElement("h3");
  h3.textContent = TextInside;
  h3.classList.add(classAdd);

  if (idAdd) {
    h3.id = idAdd;
  }

  return h3;
}; // h4Create creates h4 element which takes textContent and class and returns h4

exports.h3Create = h3Create;

var h4Create = function h4Create(TextInside, classAdd, idAdd) {
  var h4 = document.createElement("h4");
  h4.textContent = TextInside;
  h4.classList.add(classAdd);

  if (idAdd) {
    h4.id = idAdd;
  }

  return h4;
};

exports.h4Create = h4Create;

var h5Create = function h5Create(TextInside, classAdd, idAdd) {
  var h5 = document.createElement("h5");
  h5.textContent = TextInside;
  h5.classList.add(classAdd);

  if (idAdd) {
    h5.id = idAdd;
  }

  return h5;
}; // pCreate creates paragrahp with first parameter text and second class and returns paragraph

exports.h5Create = h5Create;

var pCreate = function pCreate(TextInside, classAdd, idAdd) {
  var p = document.createElement("p");
  p.textContent = TextInside;
  p.classList.add(classAdd);

  if (idAdd) {
    p.id = idAdd;
  }

  return p;
};

exports.pCreate = pCreate;

var inputCreate = function inputCreate(placeHolder, classAdd, type) {
  var input = document.createElement("input");
  input.placeholder = placeHolder;
  input.classList.add(classAdd);
  input.type = type;
  return input;
};

exports.inputCreate = inputCreate;

var fieldsetCreate = function fieldsetCreate(InsideField, classAdd, idAdd) {
  var field = document.createElement("fieldset");
  field.append(InsideField);
  field.classList.add(classAdd);

  if (idAdd) {
    field.id = idAdd;
  }

  return field;
}; // exporting all function expressions

exports.fieldsetCreate = fieldsetCreate;
