// First create HTML elements to append books to in index file
// Then add functionality to add function so data can go into file
// see if things append properly and display well
// add css afterwards

const button = document.querySelector(".addButton");
const titleInput = document.querySelector("#bookName");
const authorInput = document.querySelector("#bookAuthor");
const pagesInput = document.querySelector("#numOfPages");
const readInput = document.querySelector("#haveRead");
const readInputNo = document.querySelector("#haveNotRead");

let myLibrary = [];

function Book(title, author, pages, read) {
	// the constructor...
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

button.addEventListener("click", function () {
	const book = new Book(
		`${titleInput.value}`,
		`${authorInput.value}`,
		`${pagesInput.value}`,
		`${readInput.value}`
	);
	myLibrary.push(book);
	console.log(readInput.value);
	const bookBox = document.createElement("div");
	bookBox.style.border = "3px solid black";
	bookBox.style.width = "10%";
	document.body.appendChild(bookBox);
	bookBox.innerText = `Title: ${titleInput.value}
	Author: ${authorInput.value}
	Pages: ${pagesInput.value}
	Read: ${readInput.value}`;
});
