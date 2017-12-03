$("#login").submit(function(){ 


        var Uname = $("#Usuario").val();
        var UPass = $("#Contraseña").val();
            if ((localStorage.nombre == Uname) && (localStorage.password == UPass) ){

                // Validar user y password
                localStorage.estado = 1;
                  mostrarDatos();

                }else {
                mostrarError();
                }

       return false;
})
        

function cargarLogin(){
    if (localStorage.estado == 1){
        mostrarDatos();
    }
}

function cargarRegistro(){
    if (localStorage.estado == 1){
       document.getElementById("formulario").className +="ocultar";

        mostrarDatos();
  }

}
function Salir(){
    localStorage.estado = 0;
    location.reload();
}

function mostrarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        // Mostrar DAtos del usuario Logueado
        document.getElementById("datos").innerHTML = "User: " + localStorage.nombre;
        document.getElementById("datos").innerHTML += '<button class="botonsalir" onclick="Salir()"><span> Salir </span> </button> ' ;
        document.getElementById("login").className +="ocultar";

    } 
}

function guardarDatos() {
    localStorage.nombre = document.getElementById("Usuario").value;
    localStorage.password = document.getElementById("Contraseña").value;
}

function mostrarError() {
    document.getElementById("error").innerHTML = "Usuario/Password invalido";

}
    
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('#busca')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

