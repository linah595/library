//get elements 
const form = document.querySelector('.form');
const bookBtn = document.querySelector('.btn2');
const modal = document.getElementById('simpleModal');
const closeBtn = document.querySelector('.closebtn')

// class to store books
class Books {
    constructor(tittle, author, pages){
        this.tittle = tittle;
        this.author = author;
        this.pages = pages;
    }
}


//event to submit books

const addBook = (e) =>{
    e.preventDefault();
    let tittleInput = document.getElementById('tittle').value;
    let authorInput = document.getElementById('author').value;
    let pagesInput = document.getElementById('pages').value;
    
   let books = new Books(tittleInput, authorInput, pagesInput);
   
   const bookList = document.querySelector('.list');

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${books.tittle}</td>
    <td>${books.author}</td>
    <td>${books.pages}</td>
    <td><button class="delbtn">x</button></td>
    `;
    bookList.appendChild(row); 
    modal.style.display = "none";
    
    tittleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
}

form.addEventListener('submit' ,addBook);

//add model

const activateModal = (e) =>{
    modal.style.display = 'block';
    
}

bookBtn.addEventListener('click', activateModal);

//close button
const closeModal = (e) =>{
    modal.style.display = "none";
}
closeBtn.addEventListener('click', closeModal)
//delete button
function deleteBook(el) {
    if(el.classList.contains('delbtn')){
        el.parentElement.parentElement.remove();
    }
}
const bookItems = document.querySelector('.list').addEventListener('click', (e)=>{
    deleteBook(e.target)
});
// clear field

//local storage




