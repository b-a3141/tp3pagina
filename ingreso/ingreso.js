
let usuario = document.getElementById("inputNombreUsuario");


function reconocerAdmin(){
   
   if (usuario.value === "admin") {
       return location.href =  '../admin/update.html';
   }
  else{
    return location.href = '../usuario/updateUsuario.html';
  }
   
}