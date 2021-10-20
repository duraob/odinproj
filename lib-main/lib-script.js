let myLib = [];

function Book(title,  author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.readStatus = function() {
        let status = ''

        if(this.read)
            status = 'READ'
        else
            status = 'NOT READ'

        return status
    }

    this.info = function() {
        if(this.read){
            let status = 'READ'
        } else {
            let status = 'NOT READ'
        }
        bookInfo = `${this.title} by ${this.author}, ${this.pages} pages,  ${status}`
        return bookInfo
    }
}

function addToLib() {
    event.preventDefault()
    bookForm.style.display = 'none'
    const title = bookForm.elements['title'].value
    const auth = bookForm.elements['auth'].value
    const pages = bookForm.elements['pages'].value
    const status = bookForm.elements['status'].checked
    
    const newBook = new Book(title, auth, pages, status)

    if(!(newBook in myLib))
    {
        myLib.push(newBook)
    }

    libDisplay()

    bookForm.reset()
}

function libDisplay() {
    const library = document.querySelector('.library')
    const bookCards = document.querySelectorAll('.bookCard')

    bookCards.forEach((book) => library.removeChild(book))

    myLib.forEach((Book) => addBookCard(Book))
}

function openForm(item) {
    resetForm(item)
    item.style.display = 'flex'
    item.style.flexDirection = 'column'
    item.style.justifyContent = 'center'
    item.style.alignItems = 'center'
  }

function resetForm(item) {
    item.reset()
}

function closeForm(item) {
    item.style.display = 'none'
}

function removeBook(item) {
    let bookIndex = myLib.indexOf(item)
    myLib.splice(bookIndex, 1)
    libDisplay()
}

function changeReadStatus(book, status)
{
    if(book.read)
    {
        book.read = false
        status.style.backgroundColor = 'slategray'
        status.textContent = book.readStatus()
    }
    else
    {
        status.style.backgroundColor = 'green'
        book.read = true
        status.textContent = book.readStatus()
    }

}

function addBookCard(book) {
    const bookDiv = document.createElement('div')
    bookDiv.classList.add('bookCard')

    const title = document.createElement('h3')
    title.textContent = book.title
    const auth = document.createElement('h3')
    auth.textContent = book.author
    const pages = document.createElement('h3')
    pages.textContent = book.pages
    const statusBtn= document.createElement('button')
    statusBtn.textContent = book.readStatus()
    statusBtn.style.backgroundColor = (book.read ? 'green' : 'slategray')
    statusBtn.addEventListener(('click'), ()=> changeReadStatus(book, statusBtn))
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'REMOVE'
    removeBtn.addEventListener(('click'), ()=> removeBook(book))

    bookDiv.appendChild(title)
    bookDiv.appendChild(auth)
    bookDiv.appendChild(pages)
    bookDiv.appendChild(statusBtn)
    bookDiv.appendChild(removeBtn)

    const libDiv = document.querySelector('.library')
    libDiv.appendChild(bookDiv)
}

const bookForm = document.querySelector('#bookForm')

const addBookBtn = document.querySelector('#addBookBtn')
addBookBtn.addEventListener(('click'), ()=> openForm(bookForm))

const closeBtn = document.querySelector('#closeBtn')
closeBtn.addEventListener(('click'), ()=> closeForm(bookForm))

const submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener(('click'), addToLib)