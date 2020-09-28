
// FORM POPUP

document.getElementById('add').addEventListener("click", function() {
	document.querySelector('.pop-up').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", closePopUp);


//SUBMIT BUTTON

function Book(title,author,year) {
	this.title = title;
	this.author = author;
  this.year = year;
  }


document.getElementById('submit').addEventListener("click", function() {

let book= new Book(document.getElementById('title').value,
                  document.getElementById('author').value,
                  document.getElementById('year').value);     
                              

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
      <td><div class="container"><div class="toggle-btn"><div class="inner-circle"></div></div></div>
      <td><button class="btn"><i class="fa fa-trash"></i></button></td>
    `;

    library.appendChild(row);

    row.addEventListener("click", e => {
  if (e.target.classList.contains("btn")||e.target.classList.contains("fa")) {
    library.removeChild(row);
  }
});


row.addEventListener("click", e => {
  if (e.target.classList.contains("toggle-btn")||e.target.classList.contains("inner-circle")) {
    e.target.classList.toggle("active");
  }
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


















