const ipUrl = "http://172.30.134.201:8080";

function getPelicula(id){
   fetch(ipUrl+`/api/pelicula/${id}`)
   .then((res)=>res.json())
   .then((data)=>{
    console.log(data);

   })
}

function getClienteId(){
    let inputId=document.getElementById("id");
    if(inputId.value.length == 0) {
        getClientes();
        return;
    }
let cliente;
fetch(ipUrl+`/api/usuario/${inputId.value}`)
            .then(res => {
                if(res.ok) {
                    res.json().then(data=>{
                        cliente=data; 
                      
                       let contenedor=document.getElementById("usuarios");
                       contenedor.innerHTML="";
           
                               
                       let clienteElem = renderCliente(cliente);
                   
                           contenedor.appendChild(clienteElem);
           
                      });
                }
                else {
                    res.text().then(err => alert(err));
                }
            })
}

function getClientes(){
    fetch(ipUrl+`/api/usuario/`)
    .then(res=>res.json())
    .then(clientes=>{

    let contenedor=document.getElementById("usuarios");
    contenedor.innerHTML="";
 
    clientes.forEach(cliente=>{
    
        let clienteElem = renderCliente(cliente);

        contenedor.appendChild(clienteElem);
        
    })

    })
}

function renderCliente(cliente) {
    let clienteElem = document.createElement("div");
        clienteElem.className = "card-panel fill-horizontal";

        let id = document.createElement("h3");
        id.innerText = cliente.id;
        clienteElem.appendChild(id);

        let nombre = document.createElement("p");
        nombre.innerText = "Nombre: " + cliente.nombre;
        clienteElem.appendChild(nombre);

        let apellidos = document.createElement("p");
        apellidos.innerText = "Apellidos: " +  cliente.apellidos;
        clienteElem.appendChild(apellidos);

        let email = document.createElement("p");
        email.innerText = "Email: " + cliente.email;
        clienteElem.appendChild(email);

        let fechaNacimiento = document.createElement("p");
        fechaNacimiento.innerText = "Fecha de Nacimiento: "+ intToDate(cliente.fechaNacimiento).toLocaleDateString();
        clienteElem.appendChild(fechaNacimiento);

        let domicilio = document.createElement("p");
        domicilio.innerText = "Domicilio: " +  cliente.domicilio;
        clienteElem.appendChild(domicilio);

        let codigoPostal = document.createElement("p");
        codigoPostal.innerText ="Código Postal: " +  cliente.codigoPostal;
        clienteElem.appendChild(codigoPostal);

        let botonEditar = document.createElement("a");
        botonEditar.className = "button";
        botonEditar.innerText = "Editar";
        botonEditar.href = "Actualizar_Usuario.html?id=" + cliente.id;
        clienteElem.appendChild(botonEditar);

        let botonEliminar = document.createElement("button");
        botonEliminar.className = "button";
        botonEliminar.innerText = "Eliminar";
        botonEliminar.onclick = function() {
            deleteCliente(cliente.id);
        };
        clienteElem.appendChild(botonEliminar);

        return clienteElem;
}

function getClienteIdUpdate(id){
let cliente;
fetch(ipUrl+`/api/usuario/${id}`)
            .then(res => {
                if(res.ok) {
                    res.json().then(data=>{
                        cliente=data; 
                   
                        document.getElementById("nombre").value=cliente.nombre;
                        document.getElementById("apellidos").value=cliente.apellidos;
                        document.getElementById("email").value=cliente.email;
                        document.getElementById("fechaNacimiento").valueAsDate=intToDate(cliente.fechaNacimiento);
                        document.getElementById("domicilio").value=cliente.domicilio;
                        document.getElementById("codigoPostal").value=cliente.codigoPostal;

                    
           
                      });
                }
                else {
                    res.text().then(err => alert(err));
                }
            })
}
    

 function deleteCliente(id){
   

let cliente;
fetch(ipUrl+`/api/usuario/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
})
.then(response => {
    return response.json( )
})
.then(data => {
    console.log(data);
    location.reload();
 });


 }
 //deleteCliente(2);

function addCliente(){
  
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
    .then((data)=>{
        data;})
        
    
}



function updateCliente(){
    
    let clientes=[];
    let clienteNew,nombreViejo,apellidosViejo,emailViejo,
    fechaNacimientoViejo,contrasenyaViejo,domicilioViejo,
    codigoPostalViejo;

    
    const newUser={
            id:document.getElementById("id").value,          
            nombre:document.getElementById("nombre").value,          
            apellidos:document.getElementById("apellidos").value,
            email:document.getElementById("email").value,
            fechaNacimiento:dateToInt(document.getElementById("fechaNacimiento").value),
            contrasenya:document.getElementById("contrasenya").value,
            domicilio:document.getElementById("domicilio").value,
            codigoPostal:document.getElementById("codigoPostal").value
            };
            const options={
                method: "PUT",
                body: JSON.stringify(newUser),
                headers: {   'Content-type': 'application/json; charset=UTF-8'}
            }
  
  /*
    for (i = 0; i < usuarios.length; i++) {
    cliente={
      nombre:document.getElementById("nombre").value,
      usuarios[i].getElementsByTagName("username")[0].textContent=user_introducido;
  
      apellidos:document.getElementById("apellidos").value,
      email:document.getElementById("email").value,
      fechaNacimiento:date.intToDate(document.getElementById("fechaNacimiento").value),
      contrasenya:document.getElementById("contrasenya").value,
      domicilio:document.getElementById("domicilio").value,
      codigoPostal:document.getElementById("codigoPostal").value
          }
      }),
      */
        fetch(ipUrl+`/api/usuario/`,options)
        .then(res => {
            if(res.ok)
                alert("Se ha modificado el usuario con exito");
            else
                res.json().then(json => alert(json.message));
        })
  /*
        clientes.forEach(cliente=>{
  
            if(cliente.id==document.getElementById("nombre").value){
                 nombreViejo=cliente.nombre;
                 apellidosViejo=cliente.apellidos;
                 emailViejo=cliente.email;
                 fechaNacimientoViejo=cliente.fechaNacimiento;
                 contrasenyaViejo=cliente.contrasenya;
                 domicilioViejo=cliente.domicilio;
                 codigoPostalViejo=cliente.codigoPostal;
               
     
            }
            */
          
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
    return new Date(int * 1000);
}

function dateToInt(date) {
    return new Date(date).getTime() / 1000;
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