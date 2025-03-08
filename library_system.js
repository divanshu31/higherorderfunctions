let books = [];

function addBook(book){
    books.push(book);
    displayBooks();
}

function removeBook(book){
    const index = books.indexOf(book);
    if(index !== -1){
        books.splice(index, 1);  // splice is basically used to remove current element from the given array
    }
    else{
        console.log(`Book not found: ${book}`);
    }
    displayBooks();
}

function searchBook(book){
    console.log(books.includes(book) ? `${book} is available` : `${book} is not in the library.`);
}

//find first and alst occurence of a book title
function findBookOccurrences(book){
    console.log(`First occurrence of ${book} :`, books.indexOf(book));
    console.log(`Last occurrence of ${book} : `, books.lastIndexOf(book));
}

//extract a subset of books
function extractBooks(start, end){
    console.log("Extracted Books: ", books.splice(start, end));
}

//sort books alphabetically
function sortBooks() {
    books.sort((a, b) => a.localeCompare(b));
    displayBooks();
}

//replace a book using splice
function replaceBook(index, newBook) {
    if(index >= 0 && index < books.length) {
        books.splice(index, 1, newBook);
    }
    else{
        console.log("Invalid Index");
    }
    displayBooks();
}

//Join books into a string
function joinBooks(){
    console.log("Library Collection : ", books.join(", "));
}

//display current list of books
function displayBooks(){
    console.log("Current Books: ", books);
}

addBook("The subtle art of not giving a f*ck");
addBook("The great Da Vinci");
addBook("291912");
addBook("Christopher Columbus");

removeBook("291912");
searchBook("Christopher Columbus");
extractBooks(1, 3);
sortBooks();
replaceBook(2, "Brave New World");
joinBooks();