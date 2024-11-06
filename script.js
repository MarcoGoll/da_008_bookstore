/*====================================================================================================
    GLOBAL VARIABLES
====================================================================================================*/ 
// Add global variables here


/*====================================================================================================
    FUNCTIONS
====================================================================================================*/ 
/*
* Description for the function
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
* Description for the function
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
* Description for the function
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

//createMyComment
//likeBookToggle

/*====================================================================================================
    EVENT LISTENERS
====================================================================================================*/ 
// Add eventlistenders here
