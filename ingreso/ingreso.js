
let usuario = document.getElementById("inputNombreUsuario").value ;

function reconocerAdmin(){
    alert(usuario)
   if (usuario === "a"){
       return location.href = "../admin/updateUsuario.html";
   }
   else{
        return location.href =  '../admin/update.html';
    }
   
}

// nombre.isAdmin()