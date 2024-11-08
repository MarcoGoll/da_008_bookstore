/*====================================================================================================
    GLOBAL VARIABLES
====================================================================================================*/
const booksContainerRef = document.getElementById('booksContainer');
const h1Ref = document.getElementById('headline');


/*====================================================================================================
    FUNCTIONS
====================================================================================================*/
/**
* Is called when the page is opened and initialises the rendering of all books 
*/
function init() {
    getFromLocalStorage();
    renderBookGroup("all");
}

/**
* Goes through an array of books and initialize the rendering of them groupwise
* @param {string} whichOne - Describes which book group is to be rendered => "all" - all / "liked" - only books which are liked / "fav" - only books which are favourite
*/
function renderBookGroup(whichOne) {
    booksContainerRef.innerHTML = "";
    setPageHeadline(whichOne);

    for (let i = 0; i < books.length; i++) {
        if (whichOne == "all") {
            renderBook(books[i], i);
        }
        if (whichOne == "liked" && books[i].liked) {
            renderBook(books[i], i);
        }
        if (whichOne == "fav" && books[i].isFavouritBook) {
            renderBook(books[i], i);
        }
    }
}

/**
* Sets the PageHeadline to match the selected book group
* @param {string} whichOne - Describes which headline is to be rendered
*/
function setPageHeadline(whichOne) {
    if (whichOne == "all") {
        h1Ref.innerHTML = "All Books";
    }
    if (whichOne == "liked") {
        h1Ref.innerHTML = "Liked Books";
    }
    if (whichOne == "fav") {
        h1Ref.innerHTML = "Favourite Books";
    }
}

/**
* Renders a book. If necessary, set the CSS classes for liked or favorite books. And initializes the loading of the comments for this book
* @param {object} currentBook - single book which is currently to be rendered
* @param {number} i - Counter to uniquely mark elements
*/
function renderBook(currentBook, i) {
    let likedClass = "";
    let favClass = "";

    if (currentBook.liked) {
        likedClass = "isLikedBook";
    }
    if (currentBook.isFavouritBook) {
        favClass = "isFavouritBook";
    }
    booksContainerRef.innerHTML += getBookTemplate(currentBook, i, likedClass, favClass);
    renderAllBookComments(currentBook, i)
}

/**
* Goes through all comments of a book and renders all contained
* @param {object} currentBook - single book from which the current comments are to be rendered
* @param {number} i - Counter to uniquely mark elements
*/
function renderAllBookComments(book, i) {
    let book_commentAreaRef = document.getElementById(`displayComments${i}`);
    book_commentAreaRef.innerHTML = "";
    if (books[i].comments.length == 0) {
        let displayCommentsRef = document.getElementById(`displayComments${i}`);
        displayCommentsRef.innerHTML = "<i>Noch keine Kommentare vorhanden.</i>"
    } else {
        for (let j = 0; j < books[i].comments.length; j++) {
            book_commentAreaRef.innerHTML += getCommentsTemplate(book, j);
        }
    }
}

/**
* Create a new comment for the book with the appropriate index AND triggers a localStorage save
* @param {number} i - Counter to uniquely mark elements
*/
function createMyComment(i) {
    let commentInpRef = document.getElementById(`commentInp${i}`);
    books[i].comments.push({ name: "YOU", comment: commentInpRef.value });
    renderBookGroup("all");
    saveToLocalStorage();
}

/*
* Saves the array books (with currenly changed data (comments, liked, isFavouritBook)) as a string in LocalStorage
*/
function saveToLocalStorage() {
    localStorage.setItem("myBooks", JSON.stringify(books));
}

/*
* Loads the string mybooks (with last changed data (comments, liked, isFavouritBook)) from LocalStorage and assing to object books
*/
function getFromLocalStorage() {
    const myLoadedBooks = localStorage.getItem('myBooks'); // is loaded as a string, not as an array!
    let myArray = JSON.parse(myLoadedBooks); // Converts string to array (object).

    if (myArray != null) { // May only be done if the variable is found in LocalStorage
        books = myArray;
    }
}

/**
* toogled the status of a book in relation to the like function 
* @param {number} i - identifys which book
*/
function toggleIsLikedBook(i) {
    let heartRef = document.getElementById(`heart${i}`);
    let likesRef = document.getElementById(`likes${i}`);
    if (heartRef.classList.contains("isLikedBook")) {
        heartRef.classList.remove("isLikedBook");
        likesRef.innerHTML -= 1;
        books[i].liked = false;
        books[i].likes = parseInt(likesRef.innerHTML);
    } else {
        heartRef.classList.add("isLikedBook");
        likesRef.innerHTML = parseInt(likesRef.innerHTML) + 1;
        books[i].liked = true;
        books[i].likes = parseInt(likesRef.innerHTML);
    }
    saveToLocalStorage();
}

/**
* toogled the status of a book in relation to the favourite function 
* @param {number} i - identifys which book
*/
function toggleIsFavouriteBook(i) {
    let FavouritRef = document.getElementById(`Favourit${i}`);
    if (FavouritRef.classList.contains("isFavouritBook")) {
        FavouritRef.classList.remove("isFavouritBook");
        books[i].isFavouritBook = false;
    } else {
        FavouritRef.classList.add("isFavouritBook");
        books[i].isFavouritBook = true;
    }
    saveToLocalStorage();
}
