const music = new Audio();

function reproducir(){
    music.play()
}

function reproducir(){
    music.play()
    let play = document.getElementById("reproductor_play");
    play.style.display="none"
    let pause = document.getElementById("reproductor_pause");
    pause.style.display="block"
}

function pausar(){
    music.pause()
    let play = document.getElementById("reproductor_play");
    play.style.display="block"
    let pause = document.getElementById("reproductor_pause");
    pause.style.display="none"
}

function like(){
    document.getElementById("like").style.display="none";
    document.getElementById("no_like").style.display="block";
}

function no_like(){
    document.getElementById("like").style.display="block";
    document.getElementById("no_like").style.display="none";
}

function rep_despe() {
    music.src = "./archivos/canciones/rosalia/despecha.mp3"
    document.getElementById("artista").innerHTML = "Rosalia"
    document.getElementById("cancion").innerHTML = "Despechá"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/rosalia/despecha.jpg")
    reproducir()
}


function rep_saoko() {

    music.src=("./archivos/canciones/rosalia/saoko.mp3");
    document.getElementById("artista").innerHTML = "Rosalia"
    document.getElementById("cancion").innerHTML = "Saoko"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/rosalia/saoko.png")
    reproducir()
}
function rep_biz() {

    music.src=("./archivos/canciones/rosalia/bizcochito.mp3");
    document.getElementById("artista").innerHTML = "Rosalia"
    document.getElementById("cancion").innerHTML = "Bizcochito"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/rosalia/bizcochito.jpg")
    reproducir()
}
function rep_dinero() {

    music.src=("./archivos/canciones/rosalia/dinero.mp3");
    document.getElementById("artista").innerHTML = "Rosalia"
    document.getElementById("cancion").innerHTML = "Dinero"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/rosalia/dinero.jpg")
    reproducir()
}
function rep_altura() {

    music.src=("./archivos/canciones/rosalia/altura.mp3");
    document.getElementById("artista").innerHTML = "Rosalia"
    document.getElementById("cancion").innerHTML = "Con altura"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/rosalia/altura.jpg")
    reproducir()
}

function rep_kimi() {

    music.src=("./archivos/canciones/anime/kiminouso.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Kimi Na Wa"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/Anime/kiminawa.jpg")
    reproducir()
}

function rep_cruel() {

    music.src=("./archivos/canciones/anime/cruelangel.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "A Cruel Angel´s Thesis"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/Anime/cruelangel.jpg")
    reproducir()
}

function rep_gurenge() {

    music.src=("./archivos/canciones/anime/gurenge.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Gurenge"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/Anime/gurenge.jpg")
    reproducir()
}

function rep_shinzo() {

    music.src=("./archivos/canciones/anime/shinzowosasageyo.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Sinzo Wo Ssageyo"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/Anime/shinzowosasageyo.jpg")
    reproducir()
}

function rep_shiga() {

    music.src=("./archivos/canciones/anime/yourname.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Shigatsu Wa Kimi No Uso"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/Anime/yourlieinapril.jpg")
    reproducir()
}

function rep_baby() {

    music.src=("./archivos/canciones/TikTok/baby_otaku.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Baby Otaku"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/Tiktok/otaku.jpg")
    reproducir()
}

function rep_freaky() {

    music.src=("./archivos/canciones/TikTok/freaky_girl.mp3");
    document.getElementById("artista").innerHTML = "Nicki Minaj"
    document.getElementById("cancion").innerHTML = "Freaky Girl"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/Tiktok/freaky.jpg")
    reproducir()
}

function rep_unholy() {

    music.src=("./archivos/canciones/TikTok/UNHOLY.mp3");
    document.getElementById("artista").innerHTML = "Sam Smith - Kim Petras"
    document.getElementById("cancion").innerHTML = "Unholy"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/Tiktok/unholy.jfif")
    reproducir()
}

function rep_kulosa() {

    music.src=("./archivos/canciones/TikTok/KULOSA.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Kulosa"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/Tiktok/Kulosa.jfif")
    reproducir()
}

function rep_cbat() {

    music.src=("./archivos/canciones/TikTok/cbat.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Cbat"
    document.getElementById("footer_foto").src = ("./archivos/imagenes/Tiktok/cbat.jfif")
    reproducir()
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function seleccionar() {

    var input, filter, table, tr, td, i, txtValue;
    //obtiene lo que el usuario ha escrito en la barra del buscador
    input = document.getElementById("myInput");
    //lo transforma a mayúsculas para que no sea case sensitive
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    //obtiene las filas de la tabla y las guarda en la variable tr
    // la variable tr (table row) contiene el nombre de la canción y el artista
    //tr contiene 2 td´s (table data)
    tr = table.getElementsByTagName("tr");

    // Este bucle se ejecuta tantas veces como filas haya en la tabla
    for (i = 0; i < tr.length; i++) {
        //td guarda el elemento que contiene el nombre de la cancion
        td = tr[i].getElementsByTagName("td")[1];

        if (td) {
            //obtiene el string que hay dentro del elemento td
            txtValue = td.textContent || td.innerText;
            //lo compara con lo que el usuario ha escrito en la barra del buscador
            //y oculta las filas que no coincidan
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";

            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
