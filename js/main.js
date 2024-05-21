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



 function deleteCliente(id){
    fetch(ipUrl+`/api/cliente/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
     console.log(data);

     let contenedor=document.getElementById("usuarios");
     contenedor.innerHTML="";
     clientes.forEach(cliente=>{
    


            
 
    })
    });

 };

 function updateCliente(id){
    
  let  clientes=[];
  let cliente,nombreViejo,apellidosViejo,emailViejo,
  fechaNacimientoViejo,contrasenyaViejo,domicilioViejo,
  codigoPostalViejo;

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
     
    fetch(ipUrl+`/api/usuario/`),{ method: "PUT",
    body: JSON.stringify(cliente),

    headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }}
    .then(res=>{res.json()
    .then(json=>{
     //console.log(data);
     clientes=json; 
    clientes.forEach(cliente=>{

        if(cliente.id==document.getElementById("nombre").value){
             nombreViejo=cliente.nombre;
             apellidosViejo=cliente.apellidos;
             emailViejo=cliente.email;
             fechaNacimientoViejo=cliente.fechaNacimiento;
             contrasenyaViejo=cliente.contrasenya;
             domicilioViejo=cliente.domicilio;
             codigoPostalViejo=cliente.codigoPostal;
           
/*
        nombreViejo:cliente.getElementById("nombre").value;
        apellidosViejo:cliente.getElementById("nombre").value;
        emailViejo:cliente.getElementById("nombre").value;
        fechaNacimientoViejo:cliente.getElementById("apellidos").value;
        contrasenyaViejo:cliente.getElementById("nombre").value;
        domicilioViejo:cliente.getElementById("nombre").value;
        codigoPostalViejo:cliente.getElementById("nombre").value;
*/
        }
     
    })
    cliente={
            nombre:document.getElementById("nombre").value=nombreViejo,
          //  usuarios[i].getElementsByTagName("username")[0].textContent=user_introducido;
        
            apellidos:document.getElementById("apellidos").value=apellidosViejo,
            email:document.getElementById("email").value=emailViejo,
            fechaNacimiento:date.intToDate(document.
                getElementById("fechaNacimiento").value)=fechaNacimientoViejo,
            contrasenya:document.getElementById("contrasenya").value=contrasenyaViejo,
            domicilio:document.getElementById("domicilio").value=domicilioViejo,
            codigoPostal:document.getElementById("codigoPostal").value=codigoPostalViejo
            };
        });
});
};


function addCliente(){

  let  cliente={
        nombre:document.getElementById("nombre").value,
        apellidos:document.getElementById("apellidos").value,
        email:document.getElementById("email").value,
        fechaNacimiento:date.intToDate(document.getElementById("fechaNacimiento").value),
        contrasenya:document.getElementById("contrasenya").value,
        domicilio:document.getElementById("domicilio").value,
        codigoPostal:document.getElementById("codigoPostal").value
    };

    fetch(ipUrl+`/api/usuario/`,{ method: "POST",
            body: JSON.stringify(cliente),

            headers: {
                'Content-type': 'application/json; charset=UTF-8'
              },})
    .then((res)=>res.json())
    .then((json)=>{
        console.log(json);})
    
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