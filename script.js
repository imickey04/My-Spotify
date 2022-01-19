// alert("Hello Visitors \nWelcome To The MySpotify");
console.log("Welcome To The JavaScript");

// Initialize The Variables:-
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "  Aazadiyan - Udaan", filePath: "Songs/1.mp3", coverPath: "Covers/1.jpg"},
    {songName: "  Ek Udaan - Udaan", filePath: "Songs/2.mp3", coverPath: "Covers/2.jpg"},
    {songName: "  Delicate - Taylor Swift", filePath: "Songs/3.mp3", coverPath: "Covers/3.jpg"},
    {songName: "  Love Story - Taylor Swift", filePath: "Songs/4.mp3", coverPath: "Covers/4.jpg"},
    {songName: "  Blank Space - Taylor Swift", filePath: "Songs/5.mp3", coverPath: "Covers/5.jpg"},
    {songName: "  Let Me Love You", filePath: "Songs/6.mp3", coverPath: "Covers/6.jpg"},
    {songName: "  Memories - Maroon 5", filePath: "Songs/7.mp3", coverPath: "Covers/7.jpg"},
    {songName: "  The Nights - Avincii", filePath: "Songs/8.mp3", coverPath: "Covers/8.jpg"},
    {songName: "  Sunflower - Post Malone, Swan Lee", filePath: "Songs/9.mp3", coverPath: "Covers/9.jpg"},
    {songName: "  Slow Motion Angreza - BMB", filePath: "Songs/10.mp3", coverPath: "Covers/10.jpg"},
    {songName: "  Senorita - ZNMD", filePath: "Songs/11.mp3", coverPath: "Covers/11.jpg"},
    {songName: "  See You Again - Wiz Khalifa, Charlie Puth", filePath: "Songs/12.mp3", coverPath: "Covers/12.jpg"},
    {songName: "  Ilahi - YJHD", filePath: "Songs/13.mp3", coverPath: "Covers/13.jpg"},
    {songName: "  Hosana - Leon D'Souza", filePath: "Songs/14.mp3", coverPath: "Covers/14.jpg"},
    {songName: "  Kho Gaye Hum Kahan - Prateek Kuhad(Concert - Mumbai)", filePath: "Songs/15.mp3", coverPath: "Covers/15.jpg"},
    {songName: "  Liggi - Ritviz", filePath: "Songs/16.mp3", coverPath: "Covers/16.jpg"},
    {songName: "  Main Bola Hey! - Kota Factory", filePath: "Songs/17.mp3", coverPath: "Covers/17.jpg"},
    {songName: "  Naina Da Kya Kasoor - Andhadhun", filePath: "Songs/18.mp3", coverPath: "Covers/18.jpg"},
    {songName: "  Ocean Tide - When Chai Met Toast", filePath: "Songs/19.mp3", coverPath: "Covers/19.jpg"},
    {songName: "  My Heart Stereo - GYM Class Heroes", filePath: "Songs/20.mp3", coverPath: "Covers/20.jpg"},
    {songName: "  Fairytale - Alexander Raybak", filePath: "Songs/21.mp3", coverPath: "Covers/21.jpg"},
    {songName: "  Cover Me In Sunshine - Pink, Willow", filePath: "Songs/22.mp3", coverPath: "Covers/22.jpg"},
    {songName: "  Hall Of Fame - The Script", filePath: "Songs/23.mp3", coverPath: "Covers/23.jpg"},
    {songName: "  Namo Namo - Kedarnath", filePath: "Songs/24.mp3", coverPath: "Covers/24.jpg"},
    {songName: "  Kyun - Pritam", filePath: "Songs/25.mp3", coverPath: "Covers/25.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// Audio element.play(); :-
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen To Events:-
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=24){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})