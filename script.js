/*====================================================================================================
    GLOBAL VARIABLES
====================================================================================================*/
// Add global variables here
const booksContainerRef = document.getElementById('booksContainer');
const h1Ref = document.getElementById('headline');


/*====================================================================================================
    FUNCTIONS
====================================================================================================*/
/*
* Is called when the page is opened and initialises the rendering of all books 
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
*/
function init() {
    getFromLocalStorage();
    renderBookGroup("all");
}

/*
* Goes through an array of books and renders all contained
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
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

/*
* Description
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
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

/*
* Description
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
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

/*
* Goes through all comments of a book and renders all contained
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
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

/*
* Create a new comment for the book with the appropriate index
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
*/
function createMyComment(i) {
    let commentInpRef = document.getElementById(`commentInp${i}`);
    books[i].comments.push({ name: "YOU", comment: commentInpRef.value });
    renderBookGroup("all");
    saveToLocalStorage();
}


//saveToLocalStorage ==> myComments (/) / boolean isLikedBook () / boolean isFavouriteBook ()
/*
* Saves the array books as a string in LocalStorage
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
*/
function saveToLocalStorage() {
    localStorage.setItem("myBooks", JSON.stringify(books));
}

//loadFromLocalStorage ==> myComments (/) / boolean isLikedBook () / boolean isFavouriteBook ()
/*
* Loads from LocalStorage the string mybooks and if it is not null it is assigned as object to the array books
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
*/
function getFromLocalStorage() {
    const myLoadedBooks = localStorage.getItem('myBooks'); // wird als String geladen nicht als Array!
    let myArray = JSON.parse(myLoadedBooks); // Wandelt String in Array (object) um.

    if (myArray != null) { // Darf nur gemacht werden, wenn die Variable im LocalStorage gefunden wird
        books = myArray;
    }
}

/*
* Description
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
*/
function toggleIsLikedBook(i) {
    let heartRef = document.getElementById(`heart${i}`);
    let likesRef = document.getElementById(`likes${i}`);
    if (heartRef.classList.contains("isLikedBook")) {
        heartRef.classList.remove("isLikedBook");
        likesRef.innerHTML -= 1;
        books[i].liked = false;
    } else {
        heartRef.classList.add("isLikedBook");
        likesRef.innerHTML = parseInt(likesRef.innerHTML) + 1;
        books[i].liked = true;
    }
    saveToLocalStorage();
}
/*
* Description
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
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
