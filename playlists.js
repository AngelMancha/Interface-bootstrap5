/* Documento js para implementar la funcionalidad de las playlists */

function setPlaylist(){
    let playlist_name = document.getElementById("nombre_playlist").value;
    let song = document.getElementById("buscar_cancion").value;

    localStorage.setItem("Playlist", playlist_name);
    localStorage.setItem("Song", song);

}