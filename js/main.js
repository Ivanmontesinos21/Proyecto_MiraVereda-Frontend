const ipUrl = "localhost";

function getPelicula(id){
   fetch(ipUrl+`/api/pelicula/${id}`)
   .then((res)=>res.json())
   .then((data)=>{
    console.log(data);

   })
}
//getPelicula(2);

function getCliente(){
    let clientes=[];
  
     
    fetch(ipUrl+`/api/usuario/`)
    .then(res=>{res.json()
    .then(json=>{
     //console.log(data);
     clientes=json; 
     console.log(clientes);

    let contenedor=document.getElementById("usuarios");
    contenedor.innerHTML="";
    clientes.forEach(cliente=>{
        contenedor.innerHTML+=
        `
        <tr>
            <td>${cliente.id}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.apellido}</td>
            <td>${cliente.email}</td>
            <td>${cliente.fechaNacimiento}</td>
            <td>${cliente.domicilio}</td>
            <td>${cliente.codigoPostal}</td>
       
        </tr>


        `;
    })
    });
});
    

/*
    let contenedor2;
    contenedor2:documento.getElementsById("tarjetas");
    clientes.forEach(tarjeta=>{
        contenedor2.innerHTML+=
        `
        <tr>
            <td>${tarjeta.id}</td>
            <td>${tarjeta.numTarjeta}</td>
            <td>${tarjeta.CVV}</td>
            <td>${tarjeta.fechaCaducidad}</td>
            <td>${tarjeta.titular}</td>
       
        </tr>


        `;
    })
    */
 }
 //getCliente(7);


 function deleteCliente(id){
    fetch(`http://172.30.198.219:8080/api/cliente/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
     console.log(data);
 
    })

 }
 //deleteCliente(2);

function addCliente(){
    /*
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://172.30.198.219:8080/api/cliente/");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xhr.responseType="json";
    const body=JSON.stringify({
        nombre:document.getElementById("nombre").value,
        apellidos:document.getElementById("apellidos").value,
        email:document.getElementById("email").value,
        fechaNacimiento:document.getElementById("fechaNacimiento").value,
        domiclio:document.getElementById("domicilio").value,
        codigoPostal:document.getElementById("codigoPostal").value
    });
    xhr.onload=()=>{
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log(JSON.parse(xhr.responseText));
          } else {
            console.log(`Error: ${xhr.status}`);
          }
    };
        xhr.send(body);

        */
  let  cliente={
        nombre:document.getElementById("nombre").value,
        apellidos:document.getElementById("apellidos").value,
        email:document.getElementById("email").value,
        fechaNacimiento:dateToInt(document.getElementById("fechaNacimiento").value),
        contrasenya:document.getElementById("contrasenya").value,
        domicilio:document.getElementById("domicilio").value,
        codigoPostal:document.getElementById("codigoPostal").value
    };

    fetch(ipUrl+`/api/usuario/`, 
        {
            method: "POST",
            body: JSON.stringify(cliente),

            headers: {
                'Content-type': 'application/json; charset=UTF-8'
              },
              
        })
    .then((res)=>res.json())
    .then((json)=>{
        console.log(json);})
        .ca
    
}


//addCliente('Paco','Mariano','1234','aules@asdf','Mi casa','4783',Date('2000-02-02'));

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
    return new Date(int * 1000);
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