/*
* Provides the intended HTML code for a book and takes over the index for unique designations where necessary
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
*/
function getBookTemplate(book, i) {
    return `<div class="book" id="book${i}">
                    <h2 class="book__headline">${book.name}</h2>
                    <div class="book__dividingLine"></div>
                    <div class="book__img">
                        <img src="./assets/img/book.png" alt="buch">
                    </div>
                    <div class="book__dividingLine"></div>
                    <div class="book__infoArea">
                        <div class="infoArea__highlights">
                            <div class="infoArea__price">${book.price.toFixed(2).replace(".", ",")} €</div>
                            <div class="infoArea__likeOrNot">
                                <div id="likes${i}" class="likes">${book.likes}</div>
                                <svg id="heart${i}" class="heart" onclick="toggleIsLikedBook(${i})"  xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                    <path
                                        d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                                </svg>
                                <svg id="favorit${i}" class="favorit" onclick="toggleIsFavoriteBook(${i})" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
                            </div>
                        </div>
                        <div class="infoArea__lines">
                            <div class="infoArea__line">
                                <p class="label">Author</p>
                                <p class="value" id="authorValue${i}">: ${book.author}</p>
                            </div>
                            <div class="infoArea__line">
                                <p class="label">Publication</p>
                                <p class="value" id="publicationValue${i}">: ${book.publishedYear}</p>
                            </div>
                            <div class="infoArea__line">
                                <p class="label">Genre</p>
                                <p class="value" id="genreValue${i}">: ${book.genre}</p>
                            </div>
                        </div>
                    </div>
                    <div class="book__dividingLine"></div>
                    <div class="book__commentArea">
                        <h3>Comments:</h3>
                        <div class="displayComments" id="displayComments${i}"></div>
                        <div class="sendComment">
                            <input type="text" name="comment" id="commentInp${i}" placeholder="Schreibe dein Kommentar ...">
                            <button onclick="createMyComment(${i})" id="sendCommentBtn"><svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path
                                    d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    </div>
                </div>`;
}

/*
* Provides the intended HTML code for a comment and takes over the index for unique designations where necessary
* @param {string} <variableName> Desription for the usage of a parameter
* @param {number} <variableName> Desription for the usage of a parameter
* @param {(string|Array)} <variableName> Desription for the usage of a parameter
* @param {(number|Array)} <variableName> Desription for the usage of a parameter
* @returns {(string|Array)} <variableName> Desription for the return variable/value
*/
function getCommentsTemplate(book, i) {
    return `
    <div class="displayComment">
        <div class="submitter">[${book.comments[i].name}]</div>
        <div class="comment">: ${book.comments[i].comment}</div>
    </div>
    `;
} 