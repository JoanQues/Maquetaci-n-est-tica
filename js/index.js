import $ from "jquery";


Document.querySelector("#login").addEventListener('click', function () {
    window.location.href = 'login.html';
});



//Intento fetch canciones
function printCard(name, artist) {
    return ("<div class='col-sm-3'>" + name + ":" + artist + "</div>");
}

function getSongs() {
    fetch("SongsSrc")
        .then(data => data.json())
        .then(elem => {
            console.log(elem);
            let result = "";
            elem.data.map(item => {
                result += printCard(item.song_name, item.song_artist);
            });
        });
}