
//Populate List of Books

const books = JSON.parse(localStorage.getItem('books')) || [];

function populateList(){
  for(let i=0;i<books.length;i++){
    addBookToUI(books[i]);
    }
}

populateList();




// FORM POPUP

document.getElementById('add').addEventListener("click", function() {
	document.querySelector('.pop-up').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", closePopUp);


//SUBMIT BUTTON

function Book(title,author,year,read) {
	this.title = title;
	this.author = author;
  this.year = year;
  this.read = read;
  }



document.getElementById('submit').addEventListener("click", function() {

let book= new Book(document.getElementById('title').value,
                  document.getElementById('author').value,
                  document.getElementById('year').value,
                  "");   
                  
//Local Storage

books.push(book);
localStorage.setItem('books', JSON.stringify(books));
                              

addBookToUI(book);
clearFields();
closePopUp();

});



//FUNCTIONS



function addBookToUI(book) {

const library = document.querySelector('#book-library');
const row = document.createElement('tr');

  row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td><div class="container"><div class="toggle-btn ${book.read}"><div class="inner-circle"></div></div></div>
      <td><button class="btn"><i class="fa fa-trash"></i></button></td>
    `;

    library.appendChild(row);

    row.addEventListener("click", e => {
  if (e.target.classList.contains("btn")||e.target.classList.contains("fa")) {
    library.removeChild(row);
    let index=books.indexOf(book);
    books.splice(index,1);
    localStorage.setItem('books', JSON.stringify(books));
  }
});


row.addEventListener("click", e => {
  if (e.target.classList.contains("toggle-btn")||e.target.classList.contains("inner-circle")) {
    e.target.classList.toggle("active");
  }
  if(e.target.classList.contains("active")){
    book.read="active";
  } else{
    book.read="";
  }
  localStorage.setItem('books', JSON.stringify(books));
});

}





function clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
  }







function closePopUp() {
	document.querySelector('.pop-up').style.display = "none";
}


















