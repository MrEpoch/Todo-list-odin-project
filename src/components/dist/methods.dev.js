"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.pCreate =
  exports.h5Create =
  exports.h4Create =
  exports.h3Create =
  exports.h2Create =
  exports.h1Create =
  exports.ImgCreate =
  exports.navCreate =
  exports.divCreate =
    void 0;

// Made by MrEpoch
// This file was made to be exported for use in other files, it holds methods for creating html elements in easier way
// divCreate function expression takes like first what is inside and then class and returns div at end
var divCreate = function divCreate(InsideDiv, classAdd) {
  var div = document.createElement("div");
  div.append(InsideDiv);
  div.classList.add(classAdd);
  return div;
};

exports.divCreate = divCreate;

var navCreate = function navCreate(InsideNav, classAdd) {
  var nav = document.createElement("nav");
  nav.append(InsideNav);
  nav.classList.add(classAdd);
  return nav;
}; // ImgCreate is returns takes Imported img and returns it ready for use to append to the div or other use

exports.navCreate = navCreate;

var ImgCreate = function ImgCreate(image) {
  var img = new Image();
  img.src = image;
  return img;
}; // h2Create creates h2 element which takes textContent and class and returns h2

exports.ImgCreate = ImgCreate;

var h1Create = function h1Create(TextInside, classAdd) {
  var h1 = document.createElement("h1");
  h1.textContent = TextInside;
  h1.classList.add(classAdd);
  return h1;
};

exports.h1Create = h1Create;

var h2Create = function h2Create(TextInside, classAdd) {
  var h2 = document.createElement("h2");
  h2.textContent = TextInside;
  h2.classList.add(classAdd);
  return h2;
};

exports.h2Create = h2Create;

var h3Create = function h3Create(TextInside, classAdd) {
  var h3 = document.createElement("h3");
  h3.textContent = TextInside;
  h3.classList.add(classAdd);
  return h3;
}; // h4Create creates h4 element which takes textContent and class and returns h4

exports.h3Create = h3Create;

var h4Create = function h4Create(TextInside, classAdd) {
  var h4 = document.createElement("h4");
  h4.textContent = TextInside;
  h4.classList.add(classAdd);
  return h4;
};

exports.h4Create = h4Create;

var h5Create = function h5Create(TextInside, classAdd) {
  var h5 = document.createElement("h5");
  h5.textContent = TextInside;
  h5.classList.add(classAdd);
  return h5;
}; // pCreate creates paragrahp with first parameter text and second class and returns paragraph

exports.h5Create = h5Create;

var pCreate = function pCreate(TextInside, classAdd) {
  var p = document.createElement("p");
  p.textContent = TextInside;
  p.classList.add(classAdd);
  return p;
}; // exporting all function expressions

exports.pCreate = pCreate;
