const myLibrary = [
    {
        title:"Lord of the Rings",
        author: "J.R.R. Tolkien",
        id: "LOTR3",
        read: false,
        description: "The Lord of the Rings is an epic fantasy saga by J.R.R. Tolkien where the fate of Middle-earth hinges on a hobbit named Frodo Baggins, who must destroy the One Ring in the fires of Mount Doom to defeat the dark lord Sauron.  To accomplish this, Frodo is joined by a diverse fellowship of heroes who face corruption, war, and overwhelming odds while the free peoples of the world rally against Sauron’s forces. "
    },
    {
        title:"The Chronicles of Narnia: The Lion the Witch and the Wardrobe",
        author: "C.S. Lewis",
        id: "NARNIA2",
        read: false,
        description: "The Lion, the Witch and the Wardrobe is a fantasy novel by C.S. Lewis where four siblings escape World War II by entering a magical land called Narnia through a wardrobe.  They ally with the lion Aslan to defeat the tyrannical White Witch and fulfill a prophecy that restores peace to the kingdom.  "
    }
];

function Book(title, author, read, description) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.id = crypto.randomUUID();
    this.read = read;
    this.description = description;
    this.toggleRead = function (read) {
         if(this.read){
             this.read = false
             return;
         }
         this.read = true;
    }.bind(this);
}

function addBookToLibrary(title, author, read, description) {
    // take params, create a book then store it in the array
    const newBook = new Book(title, author, read, description);
  myLibrary.push(newBook);
}

//card takes in the book object from the my Library Array
function createBookCard(book) {
  const bookContainer = document.createElement('div');
  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('p');
  /*
   Need the HTML Structure to look like this:

   <div id="LOTR3" class="book-card">
       <h2 class="book-title">Lord of the Rings</h2>
       <p class="book-author">by J.R.R. Tolkien</p>

       <div class="book-read-status">
           <input type="checkbox" id="LOTR3-read" checked>
           <label for="LOTR3-read">Read</label>
       </div>

       <p class="book-description">
           The Lord of the Rings is an epic fantasy saga...
       </p>
   </div>
  */
  bookContainer.id = book.id;

}

function displayBooks() {
  const outputLocation = document.getElementById('output');
}
