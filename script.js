"use strict";
// Book Constructors
const Book = function (title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
};
// Array that hold book objects
const library = [];
// Add book to library
const addBookToLibrary = function (book) {
  library.push(book);
};

// Dom Function
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
const addBookForm = document.querySelector(".add-book-form");

addButton.addEventListener("click", showModal);
hideButton.addEventListener("click", hideModal);
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = Number(document.getElementById("pages").value);
  addBookToLibrary({ title, author, pages });
  hideModal();
});
