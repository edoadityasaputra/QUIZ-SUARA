function jawabanBenar() {
    const audio = document.getElementById("benarSound");
    audio.currentTime = 0;
    audio.play();
}

function jawabanSalah() {
    const audio = document.getElementById("salahSound");
    audio.currentTime = 0;
    audio.play();
}
