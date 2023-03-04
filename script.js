"use strict";

const showModal = function () {
  blurBg.style.display = "block";
  modal.style.display = "block";
};
const hideModal = function () {
  modal.style.display = "none";
  blurBg.style.display = "none";
};
const addButton = document.querySelector(".add");
const hideButton = document.querySelector(".hide");
const modal = document.querySelector(".modal");
const blurBg = document.querySelector(".blur-bg");

addButton.addEventListener("click", showModal);
hideButton.addEventListener("click", hideModal);
