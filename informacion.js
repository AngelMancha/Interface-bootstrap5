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
  regex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{2,8}$/;
  if(pw.match(regex)) 
  { 
  setCookie();
  localStorage.setItem("status","OK");
  profile_menu();
  window.alert('Usuario registrado con éxito');
  location.reload();
  return true;
  }
  else
  { 
  alert('Contraseña no válida. Debe contener 2 caracteres con letras y números, con longitud máxima de 8')
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
          localStorage.setItem("status","OK");
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
  if (localStorage.getItem("status")=="OK") 
  {
    document.getElementById("boton_registro_sesion").style.display = "none";
    document.getElementById("menu_perfil").style.display = "inline-block";
    cambiar_foto();
  }
  if (localStorage.getItem("status")=="")
  {
    document.getElementById("boton_registro_sesion").style.display = "inline-block";
    document.getElementById("menu_perfil").style.display = "none";
  }
  document.getElementById("Profile").innerHTML=localStorage.getItem("username");


}



function cambiar_foto(){
  const file = localStorage.getItem("photo");
  if (file !== "") {
    document.getElementById("foto_perfil").src = getProfilePhoto(file);
  }
  else{
    document.getElementById("foto_perfil").src = 'archivos/imagenes/photos/perfil_default.jpg';
  }
}

/* Esta función devuelve el Path de la imagen */
function getProfilePhoto(image) {
  let path = "archivos/imagenes/photos/";
  let count_slash = 0;
  let img = "";
  for (let character of image) {
    if (count_slash > 1) {
      img += character;
    }
    if (character === "\\") {
      count_slash += 1
    }
  }
  return path + img
}


function cerrar_sesion(){

  localStorage.setItem("status","");
  profile_menu();
  
}