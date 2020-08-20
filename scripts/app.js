// init 

let btn_sbmt = document.querySelector(".card__submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let id = document.getElementById("id");
let cardList = document.getElementById("card__list")

btn_sbmt.addEventListener('click',function(){
    titleV = title.value;
    authorV = author.value;
    idV = id.value;


    createBook(titleV,authorV,idV);

    clearField();
});


function createBook(book,author,id){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book}</td>
    <td>${author}</td>
    <td>${id}</td>
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