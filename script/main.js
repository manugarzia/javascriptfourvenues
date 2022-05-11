//const head = document.querySelector("head");
head.innerHTML += '<link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />';


function init() {




const principal = document.querySelector("#principal"); 

// Añadir clases para márgenes y recuadro blanco
$('#principal').addClass('bg-white w-full h-full rounded drop-shadow-md flex flex-col justify-center');
$('body').addClass('bg-slate-300 w-full h-full p-4');
$('html').addClass('w-full h-full');

// Añadir una consola con fondo negro
const laconsola = document.createElement("div");
laconsola.className = "consola";
document.body.appendChild(laconsola);
$('.consola').addClass('w-1/4 h-1/2 bg-black absolute top-0 left-0 p-4');
laconsola.setAttribute("id","bloqueconsola");

let textoconsola = document.createElement("ul");
textoconsola.className = "text-white ";
laconsola.appendChild(textoconsola);
textoconsola.innerHTML = "<li>Crear consola + párrafo con el texto 'Hola'.</li>";
$('.clasetextoconsola').addClass('text-white');



// Introducir palabra Hola
let texto = document.createElement("p");
let saludo = document.createTextNode("Hola");
texto.appendChild(saludo);
principal.appendChild(texto);

// Añadir clase al text
$(texto).addClass('textosaludos text-center text-8xl');

//Cambiar Hola por Hello después de un segundo
window.setTimeout(function(){
  texto.innerHTML = "Hello";
  textoconsola.innerHTML += "<li>Cambiar 'Hola' por 'Hello'.</li>";
}, 1000);

//Preparar el layout para traer los futuros datos de JSON
const bloqueusuario = document.createElement("div");
bloqueusuario.className = "usuario mx-auto my-8 flex flex-row items-center";
principal.appendChild(bloqueusuario);

  const fotoperfil = document.createElement("img");
  fotoperfil.className = "foto rounded-full";
  bloqueusuario.appendChild(fotoperfil);

  const datosusuario = document.createElement("p");
  datosusuario.className = "datos p-4 text-xl text-slate-500";
  bloqueusuario.appendChild(datosusuario);

    const parrafonombre = document.createElement("span");
    parrafonombre.className = "parrafonombre inline mr-1";
    datosusuario.appendChild(parrafonombre);

    const parrafoapellido = document.createElement("span");
    parrafoapellido.className = "parrafoapellido inline";
    datosusuario.appendChild(parrafoapellido);



    const parrafomail = document.createElement("a");
    parrafomail.className = "elmail basis-full";
    datosusuario.appendChild(parrafomail);
 



// Llamar a los datos del JSON
window.setTimeout(function(){
  textoconsola.innerHTML += "<li>Cargar JSON de usuario random.</li>";
fetch('https://randomuser.me/api/?inc=name,nat,email,picture')
  .then(response => response.json())
  .then(json => {
// Prueba de que los datos cargan en la consola del navegador
  console.log(json);
  
// Convertir datos JSON en texto y cargarlos en párrafos creados previamente
  
  let nombre = (json.results[0].name.first);
  let apellido = (json.results[0].name.last);
  let foto = (json.results[0].picture.large);
  let email = (json.results[0].email);
  let cargarnombre = document.createTextNode(nombre);
  let cargarapellido = document.createTextNode(apellido);
  let cargarfoto = document.createTextNode(foto);
  let cargaremail = document.createTextNode(email);
  //iconos
  parrafonombre.innerHTML += '<span class="material-symbols-outlined relative top-1 mr-2">person</span>';
  parrafomail.innerHTML += '<span class="material-symbols-outlined relative top-1 mr-2">mail</span>';
  //Imprimir los datos
  parrafonombre.appendChild(cargarnombre);
  parrafoapellido.appendChild(cargarapellido);
  parrafomail.appendChild(cargaremail);
  console.log(cargarfoto);
  parrafoapellido.innerHTML += '<br/> ';
  // Añadir e-mail como "mailto" al botón creado previamente
  parrafomail.href ="mailto:" + (json.results[0].email);
  fotoperfil.src = (json.results[0].picture.large);
  });
}, 2000);

// preparar CONTINUAR
const botoncontinuar = document.createElement("a");
  botoncontinuar.className = "continuar text-center p-2 my-2 mx-auto w-1/4 bg-slate-400 cursor-pointer uppercase hover:bg-slate-500 text-slate-100";
  botoncontinuar.setAttribute("id","pulsame");

  //preparar REINICIAR
  const reiniciar = document.createElement("a");
      reiniciar.className = "reiniciar text-center p-2 my-2 mx-auto w-1/4 bg-slate-400 cursor-pointer uppercase hover:bg-slate-500 text-slate-100";
      reiniciar.setAttribute("id","reinicia");

  //mostrar botón continuar
window.setTimeout(function(){
  
    principal.appendChild(botoncontinuar);
    botoncontinuar.innerHTML = "continuar";
    textoconsola.innerHTML += "<li>Añadir botón 'continuar'.</li>";
    
    //bloqueusuario.removeChild(fotoperfil);
  }, 3000);
  

  window.setTimeout(function(){
  document.getElementById("pulsame").onclick = function() {myFunction()};

  function myFunction() {
    principal.removeChild(botoncontinuar);
    texto.innerHTML = "Adiós";
    textoconsola.innerHTML += "<li>Cambiar 'Hello' por 'Adiós'. Borrar botón 'Continuar'.</li>";
    
    window.setTimeout(function(){
      texto.innerHTML = "Bye";
      textoconsola.innerHTML += "<li>Cambiar 'Adiós' por 'Bye'.</li>";
    }, 1000);
    window.setTimeout(function(){
      texto.innerHTML = "";
      textoconsola.innerHTML += "<li>Borrar 'Bye'.</li>";
      window.setTimeout(function(){
      principal.appendChild(reiniciar);
      textoconsola.innerHTML += "<li>Crear botón 'Reiniciar' para limpiar y empezar de nuevo.</li>";
      reiniciar.innerHTML = "reiniciar";
      document.getElementById("reinicia").onclick = function() {resetear()};
      function resetear() {
        principal.removeChild(bloqueusuario);
        principal.removeChild(reiniciar);
        window.setTimeout(function(){
          init()
        }, 1000);
      }}, 1000);
      
    }, 2000);
    
    
  }
}, 3500);
}

window.onload=init;









