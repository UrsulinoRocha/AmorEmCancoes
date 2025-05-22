
const about = document.getElementById('about');
const fullText = document.getElementById('fullText');
const smallText = document.getElementById('smallText');

const music = document.getElementById("music");
const cardMusic = document.getElementById("cardMusic");

const albumPhoto = document.getElementById('albumPhoto')
const album = document.getElementById('album')
const musicName = document.getElementById('musicName')
const currentMusic = document.getElementById('currentMusic')

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

const progressBar = document.getElementById("progressBar");
const progressContainer = document.getElementById("progressContainer");

const videoPlayer = document.getElementById('videoPlayer')
const video = document.getElementById('video')
const body = document.getElementById('body')

window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('change', window.scrollY > 10);
});

function moreText() {
  smallText.style.display = 'none'
  fullText.style.display = 'block'
  about.style.background = 'linear-gradient(180deg, rgba(12, 12, 12, 0.8) 0%, rgb(12, 12, 12) 90%)'
}
function lessText() {
  smallText.style.display = 'block'
  fullText.style.display = 'none'
  about.style.background = 'linear-gradient(180deg, rgba(12, 12, 12, 0.5) 20%, rgb(12, 12, 12) 90%)'
}

// PLAYER DE MÚSICA
playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", () => {
  music.pause();
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
});


music.addEventListener("timeupdate", () => {
  const progress = (music.currentTime / music.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

music.addEventListener("timeupdate", () => {
  const progress = (music.currentTime / music.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

progressContainer.addEventListener("click", (e) => {
  const progress = (e.offsetX / progressContainer.offsetWidth) * music.duration;
  music.currentTime = progress;
});

// MUDAR INFORMAÇÕES DA MÚSICA

function music1(){
  cardMusic.style.display = 'flex'
  musicName.innerHTML = 'Eu Creio nas Promessas de Deus'
  albumPhoto.src = "./img/capa.png"
  album.innerHTML = 'Padre Marcelo Rossi<br>'
  music.src = "./src/Creio nas promessas de Deus.mp3"
  music.play() 
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}
function music2(){
  cardMusic.style.display = 'flex'
  musicName.innerHTML = 'Cheiro de rosas">Remix</span>'
  album.innerHTML = 'Colo de Deus'
  albumPhoto.src = "./img/capa.png"
  music.src = "./src/Cheiro de rosas.mp3"
  music.play()  
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}
function music3(){
  cardMusic.style.display = 'flex'
  musicName.innerHTML = 'Simplesmente José'
  albumPhoto.src = "./img/capa.png"
  album.innerHTML = 'Eugênio Jorge<br>'
  music.src = "./src/Simplesmente José.mp3"
  music.play() 
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}
function music4(){
  cardMusic.style.display = 'flex'
  musicName.innerHTML = 'Jesus meu esposo'
  album.innerHTML = 'Colo de Deus'
  albumPhoto.src = "./img/capa.png"
  music.src = "./src/Jesus meu esposo.mp3"
  music.play() 
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

//MUDAR VIDEO MODAL

function exitModal(){
  videoPlayer.style.display = 'none'
  body.style.overflow = 'auto'
  video.src = '##'
}


function video1(){

  window.scrollTo(0, document.body.scrollHeight);

  music.pause();
  cardMusic.style.display = 'none'
  videoPlayer.style.display = 'flex'
  body.style.overflow = 'hidden'
  video.src = "./src/Creio nas promessas de Deus.mp4"

}
function video2(){
  window.scrollTo(0, document.body.scrollHeight);
  music.pause();
  cardMusic.style.display = 'none'
  videoPlayer.style.display = 'flex'
  body.style.overflow = 'hidden'
  video.src = "./src/Cheiro de rosas.mp4"
}
function video3(){
  window.scrollTo(0, document.body.scrollHeight);
  music.pause();
  cardMusic.style.display = 'none'
  videoPlayer.style.display = 'flex'
  body.style.overflow = 'hidden'
  video.src = "./src/Simplesmente José.mp4"
}
function video4(){
  window.scrollTo(0, document.body.scrollHeight);
  music.pause();
  cardMusic.style.display = 'none'
  videoPlayer.style.display = 'flex'
  body.style.overflow = 'hidden'
  video.src = "./src/Jesus meu esposo.mp4"
  //video.src = 'https://www.instagram.com/reel/DJjI6jPuIIl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
}

const closeMusicBtn = document.getElementById("closeMusicBtn");

closeMusicBtn.addEventListener("click", () => {
  music.pause();
  cardMusic.style.display = "none";
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
});

