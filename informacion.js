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
  regex = /^[A-Za-z1-9]\w{2,8}$/;
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
  if (errors.length > 0) {
    validationField.innerHTML = errors.join('');

    return false;
  }
    validationField.innerHTML = errors.join('');
    return true;
}