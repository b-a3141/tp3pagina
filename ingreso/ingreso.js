
let usuario = document.getElementById("inputNombreUsuario");


function reconocerAdmin(){
   
   if (usuario === "a") {
       return location.href = "../admin/updateUsuario.html";
   }
   else{
        return location.href =  '../admin/update.html';
    }
   
}

//todavía no funciona presionando enter
usuario.addEventListener('keydown', (event) => {
    if(event.code==="Enter"){ 
       reconocerAdmin();
    } 
});



// nombre.isAdmin()