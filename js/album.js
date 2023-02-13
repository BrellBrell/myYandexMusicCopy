let outAlbum = document.querySelector(`#outAlbum`);
let outTrack = document.querySelector(`#outTrack`);

let i = new URLSearchParams(window.location.search).get(`i`);

for (let j = 0; j < almoms.length; j++){
    if (i != j) {
        outAlbum.innerHTML = `ERROR`;
    }
}

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
                    <li class="list-group-item align-items-center d-flex">
                        <img src="assets/play.png" alt="playIcon" class="me-3" height="30px">
                        <div>
                            <div>${almoms[i].tracks[k].name}</div>
                            <div class="text-secondary">${almoms[i].tracks[k].autor}</div>
                        </div>
                        <div class="ms-auto">${almoms[i].tracks[k].time}</div>
                    </li>
    `;
}