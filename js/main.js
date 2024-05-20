const ipUrl = "localhost";

function getPelicula(id){
   fetch(`http://172.30.198.219:8080/api/pelicula/${id}`)
   .then((res)=>res.json())
   .then((data)=>{
    console.log(data);

   })
}
getPelicula(2);

function getCliente(id){
    fetch(`http://172.30.198.219:8080/api/usuario/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
     console.log(data);
 
    })
 }
 getCliente(7);


 function deleteCliente(id){
    fetch(`http://172.30.198.219:8080/api/cliente/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
     console.log(data);
 
    })

 }
 //deleteCliente(2);

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

function intToDate(int) {
    return new Date(int);
}

function segToDuracion(seconds, max = -1) {
	let times = [
		[31536000, "año"],
		[86400, "día"],
		[3600, "hora"],
		[60, "minuto"],
		[1, "segundo"]
	];
	let text = [];
	for(let i=0; i<times.length; i++){
		let interval = seconds / times[i][0];
		let time = Math.floor(interval);
		if(interval >= 1) {
			text.push(time + " " + times[i][1] + (time == 1 ? "" : "s"));
		}
		seconds -= time * times[i][0];
		if(text.length == max)
			break;
	}
	return text.length == 0 ? "0 segundos" : text.join(" ");
}