window.onload=init;
function init(){    
    bloqueRGPD = document.getElementById("emergenteRGPD");
    if(detectCookie("rgpdOK")){
        if (getCookie("rgpdOK")==1){eliminarBloqueRGPD();}
    }else{
        document.getElementById("botonRGPD").addEventListener("click",function(){
        eliminarBloqueRGPD();
        setCookie("rgpdOK",1,365);
        })        
    }
}

function eliminarBloqueRGPD(){
    bloqueRGPD.parentNode.removeChild(bloqueRGPD);
}

// Función que abre y cierra el menú superior
// para pantallas pequeñas
function mostrar_menu(){
  var estado = document.getElementById("barraSuperior").style.display;
  if (estado == "none"){
    document.getElementById("barraSuperior").style.display = "block";  
  }
  else{
    document.getElementById("barraSuperior").style.display = "none";
  }
}

// Al loro //
// Esta función no se utiliza. Habrá que borrarla
function cerrar_menu() {
    document.getElementById("barraSuperior").style.display = "none";
    document.getElementById("item_superpuesto").style.display = "none";
}


// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  //Estas líneas hay que eliminarlas
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}