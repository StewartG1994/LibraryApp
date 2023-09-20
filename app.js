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

deleteButton.textContent = 'Delete Book'
titleElement.textContent = item.title;
pageElement.textContent = item.pages;
authorElement.textContent = item.author

card.appendChild(titleElement)
card.appendChild(pageElement)
card.appendChild(authorElement)
card.appendChild(deleteButton)

bookArea.appendChild(card)

cardDelete(deleteButton)
}

function cardDelete (deleteButton) {
    deleteButton.addEventListener('click',  event => {
        let deleteCard = event.target.parentElement;
        let indexInfo = deleteCard.getAttribute('cardNumber');    
        bookArea.removeChild(deleteCard)
        myLibrary.splice(Number(indexInfo), 1);
    })
   
}


