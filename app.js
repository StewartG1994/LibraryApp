const submit = document.getElementById('submit')
const bookArea = document.querySelector('.bookCards')
let title = document.getElementById('title')
let author = document.getElementById('author')
let pages = document.getElementById('pages')

const myLibrary = []

function Book(title, pages, author){
    this.title = title;
    this.pages = pages;
    this.author = author
    this.read = false
}

Book.prototype.readStatus = function(){
    this.read = !this.read
}

function fieldReset (){
    title.value = '';
    author.value = '';
    pages.value = '';
}

function addBookToLibrary (title, pages, author){
    let newBook = new Book(title,pages,author)
    myLibrary.push(newBook)
}

submit.addEventListener('click' , () =>{
event.preventDefault()
bookArea.textContent='';
addBookToLibrary(title.value, pages.value, author.value)
runBuildACard()
fieldReset()
console.log(myLibrary)
})

function runBuildACard(){
    for (let i = 0; i < myLibrary.length; i++){
        item = myLibrary[i]
        buildACard(item)
    }
}

function trueFalseText(item, readBtn){
    if (item.read === false) {readBtn.textContent = 'Not Read'}
    else{readBtn.textContent = 'Read'}
}

function buildACard(item){
let card = document.createElement('div')
card.className = 'card'
let index = myLibrary.indexOf(item)
card.setAttribute('cardNumber', index)
let titleElement = document.createElement('p')
let pageElement = document.createElement('p')
let authorElement = document.createElement('p')
const deleteButton = document.createElement('button')
deleteButton.className = 'deleteBtn'

const readButton = document.createElement('button')
readButton.className = 'readBtn'
trueFalseText(item , readButton)
//readButton.textContent = 'Un Read'

deleteButton.textContent = 'Delete Book'
titleElement.textContent = item.title;
pageElement.textContent = item.pages;
authorElement.textContent = item.author

card.appendChild(titleElement)
card.appendChild(pageElement)
card.appendChild(authorElement)
card.appendChild(readButton)
card.appendChild(deleteButton)

bookArea.appendChild(card)

cardDelete(deleteButton)
readToggle(readButton)
}

function cardDelete (deleteButton) {
    deleteButton.addEventListener('click',  event => {
        let deleteCard = event.target.parentElement;
        let indexInfo = deleteCard.getAttribute('cardNumber');    
        bookArea.removeChild(deleteCard)
        myLibrary.splice(Number(indexInfo), 1);
    })
   
}

function readToggle (readButton){
    readButton.addEventListener('click', event =>{
    let indexItem = readButton.parentElement.getAttribute('cardNumber')
    let objectItem = myLibrary[indexItem]
    objectItem.readStatus()
    
    if (objectItem.read === true){readButton.textContent = 'Read'}
    else{readButton.textContent ='Not Read'}

    })
}


