 let index = 0;
let count = true;
let value;
let Value=0;
let play = document.getElementById('play');
let GIF = document.getElementById('gif');
let myProgressBar = document.getElementById("ProgressBar");
let songs = [{ songImage: './images/Har_Shambhu.webp', songName: 'Har Har Shambhu', songLocation: './songs/Har_Shambhu.mp3' },
{ songImage: './images/o_antava.jpeg', songName: 'Oo Bolega Sala', songLocation: './songs/Oo Bolega.mp3' },
{ songImage: './images/Mera_Bhola.jpg', songName: 'Mera Bhola Hai Bhandari', songLocation: './songs/Mera Bhola Hai.mp3' },
{ songImage: './images/Namo.jpg', songName: 'Namo Namo Shankara', songLocation: './songs/Namo Namo  Shankara.mp3' },
{ songImage: './images/sami_sami.jpeg', songName: 'Saami Saami', songLocation: './songs/Pushpa.mp3' },
{ songImage: './images/shiv.jpeg', songName: 'Shiv Tandav', songLocation: './songs/Shiv Tandav Stotram.mp3' },
{ songImage: './images/NARAYANA.jpg', songName: 'Narayan mil jayega', songLocation: './songs/pata nhi kis roop mai.mp3' },
{ songImage: './images/rona.jpeg', songName: 'Rona Ser Ma', songLocation: './songs/Rona Ser Ma.mp3' },
{ songImage: './images/Pyar_Bata.jpg', songName: 'Pyar Bata Hai', songLocation: './songs/Pyar Bata Hai.mp3' },
{ songImage: './images/BadaMahan.jpg', songName: 'Manushya', songLocation: './songs/Manushya.mp3' },
{ songImage: './images/Naacho.jpg', songName: 'Nacho Nacho', songLocation: './songs/Naacho Naacho.mp3' },
{ songImage: './images/Kesariya.jpg', songName: 'Kesariya', songLocation: './songs/kesariya.mp3' }]
let SongImage = document.getElementsByClassName('SongImage');
let Name = document.getElementsByClassName('Name');
let Play = document.getElementsByClassName('Play');
let songName = document.getElementById('songName');
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
let tensec_back = document.getElementById('10s_back');
let tensec_forward = document.getElementById('10s_forward');
let audio = new Audio(`${songs[index].songLocation}`);
let SongImg = document.getElementById('SongImg');

for (let i = 0; i < songs.length; i++) {
    SongImage[i].innerHTML = `<img src=${songs[i].songImage} alt="Image">`
    Name[i].innerText = `${songs[i].songName}`;
}

for (let j = 0; j < songs.length; j++) {
    Play[j].addEventListener('click', () => {
        if (audio.played) {
            audio.pause();
            audio = new Audio(`${songs[j].songLocation}`);
            Play[index].innerHTML='<img src="./images/play.png" alt="Pause">'
            index=j;
            if(value==j && count)
            {
                audio.pause();
                GIF.style.opacity = 0;
                play.innerHTML = '<img src="./images/play.png" alt="Pause">'
                if(Value==0 && j==0)
                {
                    Play[j].innerHTML = '<img src="./images/play.png" alt="Pause">'
                }
                else
                {
                    Play[j].innerHTML = '<img src="./images/play.png" alt="Pause">'
                    Play[Value].innerHTML = '<img src="./images/play.png" alt="Pause">'
                }
                count=false;
            }
            else
            {
                audio.play();
                GIF.style.opacity = 1;
                play.innerHTML = '<img src="./images/Pause.png" alt="Pause">'
                if(count==false || j==0)
                {
                    Play[j].innerHTML = '<img src="./images/Pause.png" alt="Pause">'
                }
                else
                {
                    Play[j].innerHTML = '<img src="./images/Pause.png" alt="Pause">'
                    Play[Value].innerHTML = '<img src="./images/play.png" alt="Pause">'
                }
                count=true;
            }
            SongImg.innerHTML = `<img src=${songs[j].songImage} alt="Image">`
            songName.innerText = `${songs[j].songName}`;
            myProgressBar.style.width = "0%";
            audio.addEventListener('timeupdate', () => {
                let progress = (audio.currentTime / audio.duration) * 100;
                if (audio.currentTime == audio.duration) {
                    audio.pause();
                    play.innerHTML = '<img src="./images/play.png" alt="Play">'
                    Play[index].innerHTML = '<img src="./images/play.png" alt="Play">'
                    GIF.style.opacity = 0;
                }
                myProgressBar.style.width = `${progress}%`;
            })
            Value=j;
            value=j;
        }
        else{
            audio = new Audio(`${songs[j].songLocation}`);
            index=j;
            if(value==j && count)
            {
                audio.pause();
                GIF.style.opacity = 0;
                play.innerHTML = '<img src="./images/play.png" alt="Pause">'
                Play[j].innerHTML = '<img src="./images/play.png" alt="Pause">'
                Play[index].innerHTML = '<img src="./images/play.png" alt="Pause">'
                count=false;
            }
            else
            {
                audio.play();
                GIF.style.opacity = 1;
                play.innerHTML = '<img src="./images/Pause.png" alt="Pause">'
                Play[j].innerHTML = '<img src="./images/Pause.png" alt="Pause">'
                Play[index].innerHTML = '<img src="./images/play.png" alt="Pause">'
                count=true;
            }
            SongImg.innerHTML = `<img src=${songs[j].songImage} alt="Image">`
            myProgressBar.style.width = "0%";
            audio.addEventListener('timeupdate', () => {
                let progress = (audio.currentTime / audio.duration) * 100;
                if (audio.currentTime == audio.duration) {
                    audio.pause();
                    play.innerHTML = '<img src="./images/play.png" alt="Play">'
                    Play[index].innerHTML = '<img src="./images/play.png" alt="Play">'
                    GIF.style.opacity = 0;
                }
                myProgressBar.style.width = `${progress}%`;
            })
             value=j;
        }
    })
}


forward.addEventListener('click', () => {
    if (audio.paused) {
        if (index == songs.length - 1) {
            index = 0;
        }
        else {
            index++;
        }
        audio = new Audio(`${songs[index].songLocation}`);
        songName.innerText = `${songs[index].songName}`;
        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
        if (index == songs.length - 1) {
            index = -1;
        }
        else {
            index = index;
        }
    }
    else {
        audio.pause();
        if (index == songs.length - 1) {
            index = 0;
        }
        else {
            index++;
        }
        audio = new Audio(`${songs[index].songLocation}`);
        audio.play();
        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
        if (index == 0) {
            Play[songs.length - 1].innerHTML = '<img src="./images/play.png" alt="Play">'
        }
        else {
            Play[index - 1].innerHTML = '<img src="./images/play.png" alt="Play">'
        }
        Play[index].innerHTML = '<img src="./images/Pause.png" alt="Pause">'
        play.innerHTML = '<img src="./images/Pause.png" alt="Pause">'
        songName.innerText = `${songs[index].songName}`;
        if (index == songs.length - 1) {
            index = -1;
        }
        else {
            index = index;
        }
        myProgressBar.style.width = "0%";
        audio.addEventListener('timeupdate', () => {
            let progress = (audio.currentTime / audio.duration) * 100;
            if (audio.currentTime == audio.duration) {
                audio.pause();
                play.innerHTML = '<img src="./images/play.png" alt="Play">'
                Play[index].innerHTML = '<img src="./images/play.png" alt="Play">'
                GIF.style.opacity = 0;
            }
            myProgressBar.style.width = `${progress}%`;
        })
        GIF.style.opacity = 1;
    }
});

backward.addEventListener('click', () => {
    if (audio.paused) {
        if (index == 0) {
            index = songs.length - 1;
        }
        else {
            index--;
        }
        audio = new Audio(`${songs[index].songLocation}`);
        songName.innerText = `${songs[index].songName}`;
        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
        if (index == 0) {
            index = songs.length;
        }
        else {
            index = index;
        }
    }
    else {
        audio.pause();
        if (index == 0) {
            index = songs.length - 1;
        }
        else {
            index--;
        }
        audio = new Audio(`${songs[index].songLocation}`);
        audio.play();
        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
        if (index == songs.length - 1) {
            Play[0].innerHTML = '<img src="./images/play.png" alt="Play">'
        }
        else {
            Play[index + 1].innerHTML = '<img src="./images/play.png" alt="Play">'
        }
        Play[index].innerHTML = '<img src="./images/Pause.png" alt="Pause">'
        play.innerHTML = '<img src="./images/Pause.png" alt="Pause">'
        songName.innerText = `${songs[index].songName}`;
        if (index == 0) {
            index = songs.length;
        }
        else {
            index = index;
        }
        myProgressBar.style.width = "0%";
        audio.addEventListener('timeupdate', () => {
            let progress = (audio.currentTime / audio.duration) * 100;
            if (audio.currentTime == audio.duration) {
                audio.pause();
                play.innerHTML = '<img src="./images/play.png" alt="Play">'
                Play[index].innerHTML = '<img src="./images/play.png" alt="Play">'
                GIF.style.opacity = 0;
            }
            myProgressBar.style.width = `${progress}%`;
        })
        GIF.style.opacity = 1;

    }
});


play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        myProgressBar.style.width = "0%";
        audio.addEventListener('timeupdate', () => {
            let progress = (audio.currentTime / audio.duration) * 100;
            if (audio.currentTime == audio.duration) {
                audio.pause();
                play.innerHTML = '<img src="./images/play.png" alt="Play">'
                Play[index].innerHTML = '<img src="./images/play.png" alt="Play">'
                GIF.style.opacity = 0;
            }
            myProgressBar.style.width = `${progress}%`;
        })

        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
        play.innerHTML = '<img src="./images/Pause.png" alt="Pause">'
        Play[index].innerHTML = '<img src="./images/Pause.png" alt="Pause">'
        GIF.style.opacity = 1;
    }
    else {
        audio.pause();
        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
        play.innerHTML = '<img src="./images/play.png" alt="Play">'
        Play[index].innerHTML = '<img src="./images/play.png" alt="Play">'
        GIF.style.opacity = 0;
    }
});

tensec_back.addEventListener('click', () => {
    audio.currentTime = audio.currentTime - 10;
})

tensec_forward.addEventListener('click', () => {
    audio.currentTime = audio.currentTime + 10;
})