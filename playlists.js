/* Documento js para implementar la funcionalidad de las playlists */

/* La siguiente función guarda en Local Storage la información de la playlist que crea el usuario */
function setPlaylist(){
    let playlist_name = document.getElementById("nombre_playlist").value;
    let playlist_photo = document.getElementById("foto_playlist").value;
    localStorage.setItem("Playlist", playlist_name);
    localStorage.setItem("foto_playlist", playlist_photo);
    window.alert("Playlist creada con éxito")
    location.reload()
}


/* Esta función comprueba si una playlist existe. En caso de que no exista se mostrará un mensaje
* en el que se notifica al usuario que no hay existencia de playlist
* En otro caso se muestra un album con la foto de la playlist y las canciones que incluye
* */
function existPlaylist() {
    let playlist_name = localStorage.getItem("Playlist");
    let playlist_photo = localStorage.getItem("foto_playlist")
    if (playlist_name !== null) {
        document.getElementById("playlist1").style.display = "inline-block";
        document.getElementById("no_exist_playlist").style.display = "none";
        setPlaylistValues(playlist_name, playlist_photo)
    }

}


/* Esta función devuelve el Path de la imagen */
function getPlaylistImage(image) {
    let path = "archivos/playlist_photo/";
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


/* Esta función pone los valores de la playlist */
function setPlaylistValues(playlist_name, playlist_photo) {
    document.getElementById("playlist_tittle").innerHTML = playlist_name;
    if (playlist_photo !== "") {
        let id_photo_playlist = document.getElementById("photo_playlist");
        id_photo_playlist.src = getPlaylistImage(playlist_photo);
    }
}


/* Esta función permite añadir canciones */
function addSongBtn() {
    document.getElementById("add_song").style.display = "block";
    document.getElementById("btn_save").style.display = "inline-block";
}


/* Esta función oculta el buscador y el botón Guardar */

function saveBtn() {
    document.getElementById("add_song").style.display = "none";
    document.getElementById("btn_save").style.display = "none";
}


/* Esta funcion permite ver las canciones */
function viewSongs() {
    document.getElementById("cancionesPlaylist").style.display = "inline-block";
}

function addUnholy() {
    let unholy = document.getElementById("unholy").value;
    localStorage.setItem("unholy", unholy);
}

function addSaoko() {
    let saoko = document.getElementById("saoko").value;
    localStorage.setItem("saoko", saoko);
}


