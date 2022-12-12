function setCookie(){
  let name = document.getElementById("nombre_registro").value;
  let surname = document.getElementById("apellido_registro").value;
  let username = document.getElementById("usuario_registro").value;
  let email = document.getElementById("email_registro").value;
  let password = document.getElementById("contrasena_registro").value;
  let photo = document.getElementById("archivo_registro").value;

  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("photo", photo);
}  

function validarContrasena() 
{  
  var pw = document.getElementById("contrasena_registro").value;  
  regex = "[A-Za-z0-9]{2,8}";
  if(pw.match(regex)) 
  { 
  setCookie();
  return true;
  }
  else
  { 
  alert('Contraseña no válida. Debe contener letras y números, con longitud máxima de 8 caracteres')
  return false;
  }
}

function validar()
{
  var  validationField = document.getElementById('validacion');
  var  password= document.getElementById('contrasena_registro');

  var content = password.value;
  var  errors = [];
  console.log(content);
  if (content.length >8) {
    errors.push("Tu contraseña debe ser menor a 9 caracteres. "); 
  }
  if (content.length <3) {
    errors.push("Tu contraseña debe ser mayor a 2 caracteres. "); 
  }
  if (content.search(/[@#$%^&+=.\-_*"]/) >0) {
    errors.push("Tu contraseña no puede incluir caracteres especiales. ");

  }
  if (content.search(/[0-9]/) <0) {
    errors.push("Tu contraseña debe incluir al menos un número. ");
  }
  if (errors.length > 0) {
    validationField.innerHTML = errors.join('');

    return false;
  }
    validationField.innerHTML = errors.join('');
    return true;
}

function checkCookie() 
{
  var y = document.getElementById("usuario_sesion").value;
  var username = localStorage.getItem("username");
  var x = document.getElementById("contrasena_sesion").value;
  var password = localStorage.getItem("password");
  

  if (username != null) 
  { 
    if (username==y) 
    {
        if (password==x) 
        {
          profile_menu();
          return;
        }
        else
        {
          alert('Contraseña incorrecta.');
          return;
        }
    }
    else
    {
      alert('Usuario no registrado.');
      return;
    }
  }
  alert('Usuario no registrado.');
  return;
}



function profile_menu()
{   
  document.getElementById("boton_registro_sesion").style.display = "none";  
  document.getElementById("myModal2").style.display = "none";  
  document.getElementById("myModal").style.display = "none";  
  document.getElementById("menu_perfil").style.display = "inline-block";
  cambiar_foto();
}


function cambiar_foto(){
    var file = localStorage.getItem("archivo_registro");
    if (file != null) {
      document.getElementById("foto_perfil").src = 'archivos/imagenes/profile_photo/foto_perfil_cute.jpg';
    }
    else{
      document.getElementById("foto_perfil").src = 'archivos/imagenes/profile_photo/perfil_default.jpg';
  }
}
