var form = document.getElementById("form");
var usernamefirst = document.getElementById("usernamefirst");
var usernamesecond = document.getElementById("usernamesecond");
var errortext = 0;
var message = document.getElementById("message");
var contactname = document.getElementById("edit");
var xbuttton = document.getElementById("xbuttton");

xbuttton.addEventListener("click", function(e){
    e.preventDefault();
    message.style.display = "none";
})

form.addEventListener("submit", function(e){

    e.preventDefault();    

    if(usernamefirst === "" || usernamesecond === ""){
        errortext = 1;
    }
    else{
        message.style.display = "block";
        contactname.innerHTML = `&#9989; Thank you for contacting us, ${usernamefirst.value}`;
    }

})