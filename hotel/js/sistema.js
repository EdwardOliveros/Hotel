function seleccionar(link){
    let links = document.querySelectorAll("header nav a");

    links[0].className= "";
    links[1].className= "";
    links[2].className= "";
    links[3].className= "";
    links[4].className= "";
    links[5].className= "";

    link=className="selected";

}

/*LOGIN*/
const 
btnSignIn = document.getElementById("log-in"),
formContainer = document.getElementById("form-container"),
closeForm = document.getElementById("close");

btnSignIn.addEventListener("click", function() {
    formContainer.style.display = "block";
});

closeForm.addEventListener("click", function() {
    formContainer.style.display = "none";
});