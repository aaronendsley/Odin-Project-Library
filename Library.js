let myLibrary = [
    {
        title:"Lord of the Rings",
        author: "J.R.R. Tolkien",
        id: "LOTR3",
        read: false,
    description: "The Lord of the Rings is an epic fantasy saga by J.R.R. Tolkien where the fate of Middle-earth hinges on a hobbit named Frodo Baggins, who must destroy the One Ring in the fires of Mount Doom to defeat the dark lord Sauron.  To accomplish this, Frodo is joined by a diverse fellowship of heroes who face corruption, war, and overwhelming odds while the free peoples of the world rally against Sauron’s forces. ",
    toggleRead: function (read) {
      if (this.read) {
        this.read = false
        return;
      }
      this.read = true;
    }
    },
  {
    title: "The Chronicles of Narnia: The Lion the Witch and the Wardrobe",
    author: "C.S. Lewis",
    id: "NARNIA2",
    read: false,
    description: "The Lion, the Witch and the Wardrobe is a fantasy novel by C.S. Lewis where four siblings escape World War II by entering a magical land called Narnia through a wardrobe.  They ally with the lion Aslan to defeat the tyrannical White Witch and fulfill a prophecy that restores peace to the kingdom.  ",
    toggleRead: function (read) {
      if (this.read) {
        this.read = false
        return;
      }
      this.read = true;
    }
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
  displayBooks(newBook);
}

function removeBookFromLibrary(cardId) {
  // Remove the book from the library
  const NewLibrary = myLibrary.filter(function (book) {
    if (book.id !== cardId) {
      return book;
     }
  })
  myLibrary = NewLibrary;
  // Remove the book card from the dom
  document.getElementById(cardId).remove();
}

//card takes in the book object from the my Library Array
function createBookCard(book) {
  const bookCard = document.createElement('div');
   bookCard.id = book.id;
   bookCard.className = 'book-card';

   const title = document.createElement('h2');
   title.className = 'book-title';
   title.textContent = book.title;
   bookCard.appendChild(title);

   const author = document.createElement('p');
   author.className = 'book-author';
   author.textContent = `by ${book.author}`;
   bookCard.appendChild(author);

   const bookReadStatus = document.createElement('div');
   bookReadStatus.className = 'book-read-status';

   const checkbox = document.createElement('input');
   checkbox.type = 'checkbox';
   checkbox.id = `${book.id}-read`;
   checkbox.checked = book.read;
   checkbox.addEventListener('change', () => book.toggleRead(book.read));

   const label = document.createElement('label');
   label.htmlFor = `${book.id}-read`;
   label.textContent = 'Read';

   bookReadStatus.appendChild(checkbox);
   bookReadStatus.appendChild(label);
   bookCard.appendChild(bookReadStatus);

   const description = document.createElement('p');
   description.className = 'book-description';
   description.textContent = book.description;
  bookCard.appendChild(description);

  const removeCard = document.createElement('button');
  removeCard.type = "button";
  removeCard.classList = "remove-button";
  removeCard.addEventListener('click', () => {
    removeBookFromLibrary(book.id);
  });
  removeCard.textContent = "Remove Book";
  bookCard.appendChild(removeCard);

   return bookCard;

}

document.getElementById('add-book-form').addEventListener('submit', function (event) {
  event.preventDefault();
  addBookToLibrary(event.target.elements['title'].value, event.target.elements.author.value, event.target.elements['read'].checked, event.target.elements['description'].value);
})

function displayBooks(book) {
  const mainContent = document.getElementById('books');
  const NewCard = createBookCard(book);
  mainContent.appendChild(NewCard);
}

for (const book of myLibrary) {
  displayBooks(book);
}
