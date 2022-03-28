const musicContainer = document.guerySelector("music-container");
const playB = document.querySelector("#play");
const prevB = document.querySelector("#preview");
const nextB = document.querySelector("#next");
const audio = document.querySelector("#audio");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");

//songs
const songs = ["sensei", "future-base", "hidden-place"];

//song track
let songIndex = 2;

//load songs info DOM
loadSong(songs[songIndex]);

//update songs
function loadSong(song) {
  title.innerText = song;
  audio.src = `/music/${song}.mp3`;
  cover.src = `/images/${song}.jpg`;
}

//play
