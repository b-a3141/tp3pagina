/**
 * 
 */
let btnAdminProductos = document.getElementById("btnAdminProductos");
let btnAdminUsuarios = document.getElementById("btnAdminUsuarios");

btnAdminProductos.addEventListener("click", function(){
  return location.href = 'administrarProductos.html'});

btnAdminUsuarios.addEventListener("click", function(){
  return location.href = 'administrarUsuarios.html'});
