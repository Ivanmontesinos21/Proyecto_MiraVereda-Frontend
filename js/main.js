function getPelicula(id){
   fetch(`http://172.30.198.219:8080/api/pelicula/${id}`)
   .then((res)=>res.json())
   .then((data)=>{
    console.log(data);

   })
}
getPelicula(2);

function getCliente(id){
    fetch(`http://172.30.198.219:8080/api/pelicula/${id}`)
    .then.apply((res)=>res.json())
    .then((data)=>{
     console.log(data);
 
    })
 }
 getCliente(0);


function addCliente(cliente){
    fetch(`http://172.30.198.219:8080/api/usuario/`, 
        {
            method: "POST",
            body: JSON.stringify(cliente)
        }
    )
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);

    })
}




function setCredentials(email, password) {
    setCookie("email", email, 14);
    setCookie("password", password, 14);
}

function getEmail() {
    return getCookie("email");
}

function getPassword() {
    return getCookie("password");
}

function login() {
    let email = document.getElementById("email");
    let password = document.getElementById("contrasenya");
    setCredentials(email.value, password.value);
}

let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", event => {
    event.preventDefault();
    login();
});

// https://stackoverflow.com/a/24103596
function setCookie(name, value, days) {
    let expires = "";
    if(days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + btoa(value || "")  + expires + "; path=/";
}

// https://stackoverflow.com/a/24103596
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while(c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if(c.indexOf(nameEQ) == 0)
            return atob(c.substring(nameEQ.length, c.length));
    }
    return null;
}

// https://stackoverflow.com/a/24103596
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}