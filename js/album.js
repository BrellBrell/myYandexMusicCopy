let outAlbum = document.querySelector(`#outAlbum`);
let outTrack = document.querySelector(`#outTrack`);

let i = new URLSearchParams(window.location.search).get(`i`);

if (!almoms[i]) {
    outAlbum.innerHTML = `ERROR`;
} else {
    RenderItems();
    UpdateControl();
}

function RenderItems(){
    outAlbum.innerHTML = `
    <div class="col-4">
        <img src="${almoms[i].img}" alt="albom_music" class="img-fluid rounded-start">
    </div>
    <div class="col-8">
        <div class="card-body">
            <h5 class="card-title">${almoms[i].title}</h5>
            <p class="card-text">${almoms[i].description}</p>
            <p class="card-text"><small class="text-muted">${almoms[i].year}</small></p>
        </div>
    </div>`;
for (let k = 0; k < almoms[i].tracks.length; k++) {
    outTrack.innerHTML += `
    <li class="list-group-item align-items-center d-flex" id="track">
                    <img src="assets/play.png" alt="playIcon" class="me-3" height="30px">
                    <img src="assets/playing.png" alt="playIcon" class="me-3 d-none" height="30px">
                    <div>
                        <div>${almoms[i].tracks[k].name}</div>
                        <div class="text-secondary">${almoms[i].tracks[k].autor}</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar"></div>
                    </div>
                    <div class="ms-auto" id="timer">${almoms[i].tracks[k].time}</div>
                    <audio class="audio" src="${almoms[i].tracks[k].src}"></audio>
                </li>`;
}
}

function UpdateControl() {
    let tracks = document.querySelectorAll(`#track`);
    for (let j = 0; j < tracks.length; j++) {
        let isPlaying = false;
        let timer = tracks[j].querySelector(`#timer`);
        let audio = tracks[j].querySelector(`.audio`);
        let progressBar = tracks[j].querySelector(`.progress-bar`);
        tracks[j].addEventListener(`click`, function () {
            isPlaying = !isPlaying;
            updateProgress();
            let imgs = tracks[j].querySelectorAll(`.me-3`);
            for (let g = 0; g < 2; g++) {
                imgs[g].classList.toggle(`d-none`);
            }
            isPlaying ? audio.play() : audio.pause();
        });
        function updateProgress() {
            let currentSeconds = Math.floor(audio.currentTime);
            let minutes = Math.floor(currentSeconds / 60);
            let seconds = currentSeconds % 60;
            progressBar.style.width = audio.currentTime * 250 / audio.duration + `px`;

            if (minutes < 10) {
                minutes = `0` + minutes;
            }
            if (seconds < 10) {
                seconds = `0` + seconds;
            }
            timer.innerHTML = `${minutes}:${seconds}`;
            if (isPlaying) {
                requestAnimationFrame(updateProgress);
            }
        }
    }
}