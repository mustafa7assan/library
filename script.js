"use strict";
// Book Constructors
const Book = function (title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = this.read;
};
// Array that hold book objects
const library = [];
// Add book to library
const addBookToLibrary = function (book) {
  library.push(book);
  ShowBooks();
};

// Document Object Model Functions
const ShowBooks = function () {
  const booksContainer = document.querySelector(".books");
  booksContainer.innerHTML = "";
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
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
        <button data-index=${i} class="btn edit">Edit</button>
        <button data-index=${i}  class="btn delete">Delete</button>
      </div>
    </div>
    <div class="book-read">
      <button data-index=${i} class="btn ${
      book.read ? "read" : "unread"
    } un-read" > ${book.read ? "Read" : "Unread"}</button>
    </div>
  </div>
    `;
    // Add Event Listeners to buttons
    booksContainer.insertAdjacentHTML("afterbegin", div);
    document.querySelector(".un-read").addEventListener("click", readToggle);
    document.querySelector(".delete").addEventListener("click", deleteBook);
  }
};

const getBookData = function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = Number(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;
  addBookToLibrary({ title, author, pages, read });
  hideModal();
  addBookForm.reset();
};
// Toggle book from read to unread and versa visa
const readToggle = function (e) {
  const index = Number(e.target.dataset.index);
  const book = library[index];
  book.read = !book.read;
  ShowBooks();
};
// Delete book from library
const deleteBook = function (e) {
  const index = Number(e.target.dataset.index);
  library.splice(index, 1);
  ShowBooks();
};
// Modal
const showModal = function () {
  blurBg.style.display = "block";
  modal.style.display = "block";
};
const hideModal = function () {
  modal.style.display = "none";
  blurBg.style.display = "none";
};

// Selectors
const addButton = document.querySelector(".add");
const hideButton = document.querySelector(".hide");
const modal = document.querySelector(".modal");
const blurBg = document.querySelector(".blur-bg");
const addBookForm = document.querySelector(".add-book-form");
// Events Listener
addButton.addEventListener("click", showModal);
hideButton.addEventListener("click", hideModal);
addBookForm.addEventListener("submit", getBookData);
