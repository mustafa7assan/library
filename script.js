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
  ShowBooks();
};

const ShowBooks = function () {
  const booksContainer = document.querySelector(".books");
  booksContainer.innerHTML = "";
  for (const book of library) {
    const div = `
    <div class="book-card">
    <div class="book-cover">
      <img src="img/book-cover.jpg" alt="book cover" />
    </div>
    <div class="book-info">
      <p class="title">${book.title}</p>
      <p class="author">By: ${book.author}</p>
      <p class="pages">${book.pages} page</p>
      <div class="button">
        <button class="btn edit">Edit</button>
        <button class="btn delete">Delete</button>
      </div>
    </div>
    <div class="book-read">
      <button class="btn read">Read</button>
    </div>
  </div>
    `;
    booksContainer.insertAdjacentHTML("afterbegin", div);
  }
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
  addBookForm.reset();
});
