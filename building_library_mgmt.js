function book(title, author){
    return {
        title,
        author,
        details() {
            console.log(`Title : ${this.title}, Author : ${this.author}`);
        }
    };
}

function createLibrary(){
    let books = [];
    return {
        addBook(book){
            books.push(book);
            console.log(`Added : ${book.title}`);
        },
        removeBook(title){
            const index = books.findIndex(book => book.title === title);
            if(index !== -1){
                books.splice(index, 1);
                console.log(`Removed : ${title}`);
            }
            else{
                console.log(`Book not found : ${title}`);
                return;
            }
        },
        listBooks(){
            if(books.length === 0) console.log("No books in the library");
            console.log("Library Books : ");
            books.forEach(book => book.details());
        }
    };
}



const library = createLibrary();

const book1 = book("To Kill a Mockingbird", "Harper Lee");
const book2 = book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
library.removeBook("1984");
library.listBooks();