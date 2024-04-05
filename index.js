function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  let fifthBook = books[4]
  console.log("Fifth Book:", fifthBook.name)
  
  let characterIndex = 1030
  let totalPages = books.reduce((total, book) => total + book.numberOfPages, 0)
    console.log("Total Number of Pages:", totalPages)

  books.forEach(book => {
    if (characterIndex >= 0 && characterIndex < book.characters.length) {
      const targetCharacter = book.characters[characterIndex]
      console.log("1031st Character:", targetCharacter)
      characterIndex = -1 
    } else {
      characterIndex -= book.characters.length
    }
    
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

