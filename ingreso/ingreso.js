
let usuario = document.getElementById("inputNombreUsuario");


function reconocerAdmin(){
   
   if (usuario.value === "admin") {
       return location.href =  '../admin/update.html';
   }
  else{
    return location.href = '../usuario/updateUsuario.html';
  }
   
}

//todavía no funciona presionando enter
//usuario.addEventListener('keydown', (event) => {
//    if(event.code==="Enter"){ 
 //      reconocerAdmin();
//    } 
//});



// nombre.isAdmin()