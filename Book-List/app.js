// book class: represents a book
class Book {
  constructor(title, auther, isbn) {
    this.title = title;
    this.auther = auther;
    this.isbn = isbn;
  }
}

// UI class: handle UI tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");
    row.innerHTML = `
    <td> ${book.title}</td>
    <td> ${book.auther}</td>
    <td> ${book.isbn}</td>
    <td> <a href="#" class="btn btn-danger btn-sm delete"> X </a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    // create alert
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    // display alert
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    // make the alert time limited
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  static clearFields() {
    document.querySelector("#title", title).value = "";
    document.querySelector("#auther", auther).value = "";
    document.querySelector("#isbn", isbn).value = "";
  }
}

// store class: handles storage
class Store {
  // get books
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  // add book
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  // remove book
  static removeBook(isbn) {
    console.log(isbn);
    const books = Store.getBooks();

    books.forEach((book, index) => {
      // the space was added because the recieved string had a space before the number causing it to pass the If statment
      if (` ${book.isbn}` === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// event: display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// even: add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // prevent refresh
  e.preventDefault();
  //get form values
  const title = document.querySelector("#title").value;
  const auther = document.querySelector("#auther").value;
  const isbn = document.querySelector("#isbn").value;

  // valitade
  if (title === "" || auther === "" || isbn === "") {
    UI.showAlert("Please Fill The Form", "danger");
  } else {
    // instatiate book
    const book = new Book(title, auther, isbn);

    // add book to UI
    UI.addBookToList(book);

    // add book to store
    Store.addBook(book);

    // book added alert
    UI.showAlert("Book Added", "success");
    // clear fields
    UI.clearFields();
  }
});

// event: to remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove Book from UI
  const isbnCollected =
    e.target.parentElement.previousElementSibling.textContent;
  console.log(e.target.parentElement.previousElementSibling);
  Store.removeBook(isbnCollected);

  //book deleted alert
  UI.showAlert("Book Removed", "success");
});
