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