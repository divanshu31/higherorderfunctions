function createBook(title, author) {
    return {
      title: title,
      author: author,
      printInfo() {
        console.log("Book: " + this.title + ", Author: " + this.author);
      }
    };
  }
const book = createBook("hello", "jk reo");
book.printInfo();