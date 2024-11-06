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

}

//markAsLikedBookToggle
//markAsFavoriteToggle
//saveToLocalStorage ==> myComments/ boolean liked / boolean favorite
//loadFromLocalStorage ==> boolean liked / boolean favorite

/*====================================================================================================
    EVENT LISTENERS
====================================================================================================*/ 
// Add eventlistenders here
