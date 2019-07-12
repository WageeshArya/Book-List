// book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI(){}

UI.prototype.showAlert = function(alert,message){

    const form = document.getElementById('book-form');
    const container = document.querySelector('.container');
    const shownMsgDiv = document.createElement('div');
    container.insertBefore(shownMsgDiv,form);
    shownMsgDiv.innerText = `${message}`;
    if(alert===0){
        shownMsgDiv.classList.add('error');
        setTimeout(function(){
            shownMsgDiv.classList.remove('success');
        },3000);
    }
    else
    {
        shownMsgDiv.classList.add('success');
        setTimeout(function(){
            shownMsgDiv.classList.remove('success');
        },3000);
    }
    
}

UI.prototype.addBookToList = function(book){
    const tbody = document.querySelector('.tbody');

    const row = document.createElement('tr');

    row.innerHTML=`<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;
    tbody.appendChild(row);

    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('ISBN').value='';
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit',function(e){
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('ISBN').value;
    const ui = new UI();
    if(title === '' || author === '' || isbn === '' )
    {
        ui.showAlert(0,'Please fill all the fields');
    }
    const book = new Book(title, author, isbn);
    
    ui.addBookToList(book);
});

document.querySelector('table').addEventListener('onClick',function(e){
    console.log(e.target);
    e.preventDefault();
});