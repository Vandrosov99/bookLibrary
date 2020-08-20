// init 

let btn_sbmt = document.querySelector(".card__submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let id = document.getElementById("id");
let cardList = document.getElementById("card__list");
let container = document.querySelector(".container");
let card = document.querySelector('.card');
btn_sbmt.addEventListener('click',function(){
    titleV = title.value;
    authorV = author.value;
    idV = id.value;

    if(titleV == "" || authorV == "" || idV == ""){
        showAlert("Please check your numbers",false);
    }else{
        showAlert("Book added to list",true)
        createBook(titleV,authorV,idV);
        clearField();
    }
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
    setTimeout(clearAlert,12000)
}

function clearAlert(){
    if(document.querySelector('.red-alert') !==null){
        document.querySelector('.red-alert').remove();
    }
    if(document.querySelector('.green-alert') !== null){
        document.querySelector('.green-alert').remove();
    }   
}