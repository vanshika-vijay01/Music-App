const music= document.querySelector("audio");
const img =document.querySelector("img");
const play =document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs=[
   {
       name: "senorita",
       title: "senorita",
       artist: "Shawn Mendes And Camilla Cabellio"
   },
   {
       name: "ily",
       title: "I love u baby",
       artist: "Emily"
   },
   {
       name: "blankspace",
       title:"Blankspace",
       artist:"Tailor Swift",
   },
]


let isPlaying = false;

const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () =>{
    if (isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});

//changing the music data

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "sounds/" + songs.name +".mp3";
    img.src= "images/" + songs.name+ ".jpeg";
};

SongIndex = 0;
//loadSong(songs[2]);

const nextSong = () =>{
    SongIndex = (SongIndex + 1) % songs.length;
    loadSong(songs[SongIndex]);
    playMusic();
};

const prevSong = () =>{
    SongIndex = (SongIndex - 1 +songs.length) % songs.length;
    loadSong(songs[SongIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click",prevSong);