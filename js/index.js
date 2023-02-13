let outAlmobs = document.querySelector(`.albums`);

for (let i = 0; i < almoms.length; i++){
    outAlmobs.innerHTML += `
    <div class="col">
                <a href="album.html?i=${i}" class="text-decoration-none">
                    <div class="card mb-4">
                        <img src="${almoms[i].img}" alt="albom_music" class="card-img top">
                        <div class="card-body">
                            <p class="card-text">
                                ${almoms[i].title}
                            </p>
                        </div>
                    </div>
                </a>
            </div>`;
}