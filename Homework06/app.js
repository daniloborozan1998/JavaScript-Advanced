//task1

function Library(name, books, address) {
    this.name = name;
    this.books = books;
    this.address = address;
    this.numberOfMembers = () => {
        return this.books.length * 15;
    }
    this.printBooks = () => {
        if (!this.books.length == 0) {
            return this.books.forEach((book) => console.log(book))
        } else {
            console.log("There are no books");
            return;
        }
    }
}

function Book(title, genre, libraries, authors) {
    this.title = title;
    this.genre = genre;
    this.libraries = libraries;
    this.authors = authors;
    this.addLibrary = (library) => {
        library.books.push(this);
    }
    this.removeLibrary = (remLibrary) => {
        remLibrary.books.pop(this);
    }
}

function Author(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = [];
    this.currentBook = null;
    this.startBook = (book) => {
        this.currentBook = book;
        this.books.push(this.currentBook);
    }

}

let library = new Library("Public Library", [], "Skopje");
let library2 = new Library("Stuttgart Library", [], "Stuttgart");
let author = new Author("Jimmy", "Crash", 1983);
let book = new Book("JS Advanced Development", "web programming", library, [author]);
let book2 = new Book("JS Basics Development", "web programming", library2, [author]);
library.books.push(book);
library.books.push(book2);

//task2
book.addLibrary(library);
library.printBooks(book);
console.log(library);
book2.addLibrary(library2);
library2.printBooks(book2);
console.log(library2);

book.removeLibrary(library);
library.printBooks(book);
book.removeLibrary(library);
library.printBooks(book);

author.startBook(book);
author.startBook(book2);
console.log(author);

//task3

let newLibrary = Object.create(library);
newLibrary.addBook = function() {
    this.books.push(book);
}
newLibrary.addBook();