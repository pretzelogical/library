export class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    let readM = "";
    if (this.read == 0) {
      readM = "not read yet.";
    } else if (this.pages >= this.read) {
      readM = "done reading!";
    } else {
      readM = `${this.read} pages read.`;
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readM}`;
  }
}
