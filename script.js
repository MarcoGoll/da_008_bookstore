/*====================================================================================================
    GLOBAL VARIABLES
====================================================================================================*/ 
// Add global variables here

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
function init(){
    getFromLocalStorage();
    renderAllBooks();
    
}

/*
* Goes through an array of books and renders all contained
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
*/
function renderAllBooks(){
    let content__section__BooksRef = document.getElementById('content__section__Books');
    content__section__BooksRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        content__section__BooksRef.innerHTML += getBookTemplate(books[i], i);
        renderAllBookComments(books[i], i);    
    }    
}

/*
* Goes through all comments of a book and renders all contained
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
*/
function renderAllBookComments(book, i){
    let book_commentAreaRef = document.getElementById(`displayComments${i}`);
    book_commentAreaRef.innerHTML = "";
    if(books[i].comments.length == 0){
        let displayCommentsRef = document.getElementById(`displayComments${i}`);
        displayCommentsRef.innerHTML = "<i>Noch keine Kommentare vorhanden.</i>"
    }else{
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
function createMyComment(i){
    let commentInpRef = document.getElementById(`commentInp${i}`);
    books[i].comments.push({ name: "YOU", comment: commentInpRef.value});
    renderAllBooks();
    saveToLocalStorage();
}


//saveToLocalStorage ==> myComments (/) / boolean isLikedBook () / boolean isFavoriteBook ()
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

//loadFromLocalStorage ==> myComments (/) / boolean isLikedBook () / boolean isFavoriteBook ()
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
* Loads from LocalStorage the string mybooks and if it is not null it is assigned as object to the array books
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
*/
function togleIsLikedBook(i){
 let heartRef = document.getElementById(`heart${i}`);
 let likesRef = document.getElementById(`likes${i}`);   
 if(heartRef.classList.contains("isLikedBook")){
    heartRef.classList.remove("isLikedBook");
    likesRef.innerHTML -= 1; 
 }else{
    heartRef.classList.add("isLikedBook");
    likesRef.innerHTML = parseInt(likesRef.innerHTML) + 1;
 }
}
//toggleIsFavoriteBook

/*====================================================================================================
    EVENT LISTENERS
====================================================================================================*/ 
// Add eventlistenders here
