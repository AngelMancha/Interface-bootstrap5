function setCookie(){
  let a = document.getElementById("name").value;
  let b = document.getElementById("surname").value;
  let c = document.getElementById("date").value;
  let d = document.getElementById("email").value;
  let e = document.getElementById("username").value;
  let f = document.getElementById("password").value;
  let g = document.getElementById("image").value;

  document.cookie = "name="+ a + ";path=/" ;
  document.cookie = "surname="+ b + ";path=/" ;
  document.cookie = "date="+ c + ";path=/" ;
  document.cookie = "email="+ d + ";path=/" ;
  document.cookie = "username="+ e + ";path=/" ;
  document.cookie = "password="+ f + ";path=/" ;
  document.cookie = "image="+ g + ";path=/" ;
}  
