console.log("JavaScript");
let currSong = new Audio();
let songs;

//we are not using backend server here, this is a client side project
async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/SpotifyClone/songs/")
    let response = await a.text()
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            let final = element.href.split(".mp3")[0]
            songs.push(final.split("/songs/")[1])
        }
    }
    return songs
}

function formatTime(seconds) {
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
    currSong.src = "http://127.0.0.1:3000/SpotifyClone/songs/" + track
    currSong.load();
    if(!pause) {
        currSong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".sinfo").innerHTML = decodeURI(track.replaceAll(".mp3", " "));
}


async function main() {
    //get list of songs
    songs = await getSongs()
    
    //show the list of songs in the library
    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li>
        <img class=invert src="music.svg" alt="">
        <div class="songinfo">
        <div>${song.replaceAll("%20", " ")}</div>
        <div>Nusrat Fateh Ali Khan</div>
        </div>
        <div class="playsonglist">
        Play Now
        <img class="invert" src="play.svg" alt="">
        </div>
        </li>`
    }
    playMusic(songs[0], true)
    
    //Attach an event listener to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element=>{
            console.log(e.querySelector(".songinfo").firstElementChild.innerHTML)
            let songName = e.querySelector(".songinfo").firstElementChild.innerHTML.trim()
            playMusic(encodeURIComponent(songName) + ".mp3")
        })
    });

    //Event listeners for play, next and previous
    play.addEventListener("click", ()=>{
        if(currSong.paused) {
            currSong.play()
            play.src = "pause.svg"
        }
        else{
            currSong.pause()
            play.src = "play.svg"
        }
    })

    //listen for time update in song
    currSong.addEventListener("timeupdate", ()=>{
        console.log(currSong.currentTime, currSong.duration);
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

    //event listener for previous and next
    previous.addEventListener("click", ()=>{
        console.log("Previous clicked")
        let index = songs.indexOf(currSong.src.split("/").slice(-1)[0])
        if((index-1) >= 0){
            playMusic(songs[index-1])
        }
        console.log(currSong)
    })
    next.addEventListener("click", ()=>{
        console.log("Next clicked")
        let index = songs.indexOf(currSong.src.split("/").slice(-1)[0])
        if((index+1) > length){
            playMusic(songs[index+1]);
        }
        console.log(currSong)
    })
}

main()