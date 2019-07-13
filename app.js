document.querySelector('form').addEventListener('submit',createBook)

function createBook(e){
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const isbn = document.getElementById('isbn');
    if(title.value === '' || author.value === '' || isbn.value ===''){
        showError(0);
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
    title.value='';
    author.value='';
    isbn.value='';
    e.preventDefault();
}

function showError(error){
    if(error === 0){
        console.log('Insufficient data');
    }
}