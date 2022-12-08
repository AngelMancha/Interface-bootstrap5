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

function rep_despe() {
    music.src = "./archivos/canciones/rosalia/despecha.mp3"
    document.getElementById("artista").innerHTML = "Rosalia"
    document.getElementById("cancion").innerHTML = "Despechá"
    reproducir()
}


function rep_saoko() {

    music.src=("./archivos/canciones/rosalia/saoko.mp3");
    document.getElementById("artista").innerHTML = "Rosalia"
    document.getElementById("cancion").innerHTML = "Saoko"
    reproducir()
}
function rep_biz() {

    music.src=("./archivos/canciones/rosalia/bizcochito.mp3");
    document.getElementById("artista").innerHTML = "Rosalia"
    document.getElementById("cancion").innerHTML = "Bizcochito"
    reproducir()
}
function rep_dinero() {

    music.src=("./archivos/canciones/rosalia/dinero.mp3");
    document.getElementById("artista").innerHTML = "Rosalia"
    document.getElementById("cancion").innerHTML = "Dinero"
    reproducir()
}
function rep_altura() {

    music.src=("./archivos/canciones/rosalia/altura.mp3");
    document.getElementById("artista").innerHTML = "Rosalia"
    document.getElementById("cancion").innerHTML = "Con altura"
    reproducir()
}

function rep_kimi() {

    music.src=("./archivos/canciones/anime/kiminouso.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Kimi Na Wa"
    reproducir()
}

function rep_cruel() {

    music.src=("./archivos/canciones/anime/cruelangel.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "A Cruel Angel´s Thesis"
    reproducir()
}

function rep_gurenge() {

    music.src=("./archivos/canciones/anime/gurenge.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Gurenge"
    reproducir()
}

function rep_shinzo() {

    music.src=("./archivos/canciones/anime/shinzowosasageyo.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Sinzo Wo Ssageyo"
    reproducir()
}

function rep_shiga() {

    music.src=("./archivos/canciones/anime/yourname.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Shigatsu Wa Kimi No Uso"
    reproducir()
}

function rep_baby() {

    music.src=("./archivos/canciones/TikTok/baby_otaku.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Baby Otaku"
    reproducir()
}

function rep_freaky() {

    music.src=("./archivos/canciones/TikTok/freaky_girl.mp3");
    document.getElementById("artista").innerHTML = "Nicki Minaj"
    document.getElementById("cancion").innerHTML = "Freaky Girl"
    reproducir()
}

function rep_unholy() {

    music.src=("./archivos/canciones/TikTok/UNHOLY.mp3");
    document.getElementById("artista").innerHTML = "Sam Smith - Kim Petras"
    document.getElementById("cancion").innerHTML = "Unholy"
    reproducir()
}

function rep_kulosa() {

    music.src=("./archivos/canciones/TikTok/KULOSA.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Kulosa"
    reproducir()
}

function rep_cbat() {

    music.src=("./archivos/canciones/TikTok/cbat.mp3");
    document.getElementById("artista").innerHTML = ""
    document.getElementById("cancion").innerHTML = "Cbat"
    reproducir()
}
