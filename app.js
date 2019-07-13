document.querySelector('form').addEventListener('submit',createBook);
document.addEventListener('DOMContentLoaded',loadUpCollection);

function loadUpCollection(){
    const books = JSON.parse(localStorage.getItem('collection'));
    books.forEach(function(book){
        loadUI(book);
    })
}

function loadUI(book){
    tr = document.createElement('tr');
    tr.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#">X</a></td>`;
        document.querySelector('tbody').appendChild(tr);
}

function createBook(e){
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const isbn = document.getElementById('isbn');
    if(title.value === '' || author.value === '' || isbn.value ===''){
        showMessage(0);
    }
    else{
        tr = document.createElement('tr');
        tr.innerHTML = `<td>${title.value}</td>
                        <td>${author.value}</td>
                        <td>${isbn.value}</td>
                        <td><a href="#">X</a></td>`;
        document.querySelector('tbody').appendChild(tr);
        e.preventDefault();
    }
    const book = {
            title : title.value,
            author : author.value,
            isbn : isbn.value
        }

    if(localStorage.getItem('collection') === null){
        collection = [];
    }
    else{
        collection = JSON.parse(localStorage.getItem('collection'));
    }
    console.log(collection);
    collection.push(book);
    localStorage.setItem('collection',JSON.stringify(collection));

    title.value='';
    author.value='';
    isbn.value='';
    e.preventDefault();
}

document.querySelector('table').addEventListener('click',deleteBook);

function deleteBook(e){
    if(e.target.innerText === 'X'){
        const del = e.target;
        del.parentElement.parentElement.remove();
        showMessage(1);
        console.log(del.parentElement.parentElement);
    }
}

function showMessage(err){

    const shownError = document.createElement('div');
    document.querySelector('.container').insertBefore(shownError,document.querySelector('form'));

    if(err === 0){
        shownError.innerText = "Please fill out all the fields";
        shownError.classList.add('error');
        document.querySelector('.container').insertBefore(shownError,document.querySelector('form'));
        setTimeout(function(){
            document.querySelector('.error').remove();
        },3000);
    }
    else if (err === 1){ 
        shownError.innerText = "Successfully Deleted";
        shownError.classList.add('success');
        document.querySelector('.container').insertBefore(shownError,document.querySelector('form'));
        setTimeout(function(){
            document.querySelector('.success').remove();
        },3000);
    }
}