console.log("JavaScript");
let currSong = new Audio();
let currFolder = "nfak";
let author;
let songs;

//we are not using backend server here, this is a client side project
async function getSongs(folder) {
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/SpotifyClone/songs/${currFolder}/`)
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(decodeURIComponent(element.href.split(`/${currFolder}/`)[1]));
        }
    }

    //show the list of songs in the library
    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songUl.innerHTML = "";
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li>
        <img class=invert src="img/music.svg" alt="">
        <div class="songinfo">
        <div class="soname">${song.replaceAll("%20", " ")}</div>
        <div class="artist">Nusrat Fateh Ali Khan</div>
        </div>
        <div class="playsonglist">
        Play Now
        <img class="invert" src="img/play.svg" alt="">
        </div>
        </li>`
    }

    //Attach an event listener to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element=>{
            let songName = e.querySelector(".songinfo").firstElementChild.innerHTML.trim()
            playMusic(songName)
        })
    });
    return songs;
}

function formatTime(seconds) {
    // If input is invalid, return 00:00
    if (isNaN(seconds) || seconds === undefined || seconds === null) {
        return "00:00";
    }

    // Ensure seconds is an integer
    seconds = Math.floor(seconds);

    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;

    // Add leading zeros if needed
    let minStr = minutes.toString().padStart(2, '0');
    let secStr = secs.toString().padStart(2, '0');

    return `${minStr}:${secStr}`;
}

const playMusic = (track, pause=false)=> {
    currSong.src = `http://127.0.0.1:3000/SpotifyClone/songs/${currFolder}/` + track
    currSong.load();
    if(!pause) {
        currSong.play()
        play.src = "img/pause.svg"
    }
    document.querySelector(".sinfo").innerHTML = decodeURI(track.replaceAll(".mp3", " "));
}

async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:3000/SpotifyClone/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let elements = div.getElementsByTagName("a")
    let playlistContainer = document.querySelector(".playlistContainer")
    let artist = document.querySelector(".artist")
    let array = Array.from(elements)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if(e.href.includes("/SpotifyClone/songs")){
            let folder  = (e.href.split("/").slice(-2)[0])
            //metadata for the album
            let a = await fetch(`http://127.0.0.1:3000/SpotifyClone/songs/${folder}/info.json`)
            let response = await a.json();
            console.log(response);
            playlistContainer.innerHTML = playlistContainer.innerHTML + `<div data-folder="${folder}" class="card one">
                        <div class="playbtn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                                <!-- Green circular background -->
                                <circle cx="20" cy="20" r="20" fill="#1ed760" />

                                <!-- Solid black play button as a path -->
                                <path d="M15 12 L15 28 L28 20 Z" fill="black" />
                            </svg>
                        </div>
                        <img src="/SpotifyClone/songs/${folder}/cover.jpg" alt="image">
                        <h3>${response.title}</h3>
                        <p>${response.description}</p>
                    </div>`
            artist = response.author;
        }
    } 
        //load playlist from card
        Array.from(document.getElementsByClassName("card")).forEach(e=>{
            e.addEventListener("click", async item=>{
                //click event is on card and hence we get card as the current target
                songs = await getSongs(`${item.currentTarget.dataset.folder}`);
                playMusic(songs[0])
            })
    })   
}

async function main() {
    //get list of songs
    await getSongs(currFolder)
    
    //load soong to play at start
    playMusic(songs[0], true)

    //display albums
    displayAlbums()

    //Event listeners for play
    play.addEventListener("click", ()=>{
        if(currSong.paused) {
            currSong.play()
            play.src = "img/pause.svg"
        }
        else{
            currSong.pause()
            play.src = "img/play.svg"
        }
    })


    //event listener for previous and next
    previous.addEventListener("click", ()=>{
        let curr = decodeURIComponent(currSong.src.split("/").slice(-1)[0])
        let index = songs.indexOf(curr)
        if((index-1) >= 0){
            playMusic(songs[index-1])
        }
    })
    next.addEventListener("click", ()=>{
        let curr = decodeURIComponent(currSong.src.split("/").slice(-1)[0])
        let index = songs.indexOf(curr)
        if((index+1) < songs.length){
            playMusic(songs[index+1]);
        }
    })


    //listen for time update in song
    currSong.addEventListener("timeupdate", ()=>{
        document.querySelector(".songtime").innerHTML = `${formatTime(currSong.currentTime)}/${formatTime(currSong.duration)}`
        document.querySelector(".circle").style.left = (currSong.currentTime/currSong.duration) * 100 + "%";
    })

    //seekbar event listener
    document.querySelector(".seekbar").addEventListener("click", e=> {
        let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%"
        currSong.currentTime = (currSong.duration * percent)/100
    })

    //add event listener to hamburger
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "0%"
    })

    //add event listener to close
    document.querySelector(".close").addEventListener("click", ()=> {
        document.querySelector(".left").style.left = "-120%"
    })

    

    //event for controlling range of volume
    document.querySelector(".volrange").getElementsByTagName("input")[0].addEventListener("change", (e)=>{
        currSong.volume = parseInt(e.target.value)/100;
        if(currSong.volume == 0){
            vol.src = "img/mute.svg";
        }
        else if(currSong.volume <= 0.5){
            vol.src = "img/volume1.svg";
        }
        else if(currSong.volume > 0.5){
            vol.src = "img/volume.svg";
        }
    })

    //event for mute and unmute using volume button
    document.querySelector(".volume>img").addEventListener("click", e=>{
        if(e.target.src.includes("img/volume.svg")){
            e.target.src = e.target.src.replace("img/volume.svg", "img/mute.svg");
            currSong.volume = 0;
            document.querySelector(".volrange").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("img/mute.svg", "img/volume.svg");
            currSong.volume = 0.2;
            document.querySelector(".volrange").getElementsByTagName("input")[0].value = 20;
        }
    })

}

main()