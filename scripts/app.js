// init 

let btn_sbmt = document.querySelector(".card__submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let id = document.getElementById("id");
let cardList = document.getElementById("card__list");
let container = document.querySelector(".container");
let card = document.querySelector('.card');




document.addEventListener('DOMContentLoaded', function(){
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    
    books.forEach(function (book) {
        createBook(book);
    });
});


cardList.addEventListener('click',function(e){
    if(e.target.classList.contains('card__delete')){
        let id = e.target.parentElement.parentElement.cells[2].innerText
      
        let lc = getBooksFromLC();
        lc.forEach(function(book,index){
            if(book.id == id){
                e.target.parentNode.parentNode.remove();
                lc.splice(index,1);
            }
        })
        localStorage.setItem('books', JSON.stringify(lc));

    };
})
btn_sbmt.addEventListener('click',function(){
    titleV = title.value;
    authorV = author.value;
    idV = id.value;

    if(titleV == "" || authorV == "" || idV == ""){
        showAlert("Please check your numbers",false);
    }else{
        let flag = 0;
        let books = getBooksFromLC();
        books.forEach(function(book){
            if(book.id == idV){
                flag++;
                return false ;
            }
        })
        if(flag){
            showAlert("this Id is already added",false)
        }else{
        const book = {
            title:titleV,
            author:authorV,
            id:idV
        }
        // check if id already in lc

        storeBooksToLocalStorage(book);
        showAlert("Book added to list",true)
        createBook(book);
    }
        clearField();

    }
});


function createBook(book){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.id}</td>
    <td>
        <div class="card__delete"></div>
    </td>
    `
    cardList.appendChild(row);
}

function clearField(){
    title.value = "";
    author.value = "";
    id.value = "";
}
function showAlert(msg,isGood){

    if(document.querySelector('.red-alert') !==null){
        document.querySelector('.red-alert').remove();
    }
    if(document.querySelector('.green-alert') !== null){
        document.querySelector('.green-alert').remove();
    }  
    const div = document.createElement('div');
    div.className = isGood ? "green-alert" : "red-alert";
    div.innerHTML=`${msg}`
    container.insertBefore(div,card);
    setTimeout(clearAlert,3000)
}

function clearAlert(){
    if(document.querySelector('.red-alert') !==null){
        document.querySelector('.red-alert').remove();
    }
    if(document.querySelector('.green-alert') !== null){
        document.querySelector('.green-alert').remove();
    }   
}

function storeBooksToLocalStorage(book) {
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

function getBooksFromLC(){
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }   
    return books;
}