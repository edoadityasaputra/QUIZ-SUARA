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

// EVENT KEYBOARD
document.addEventListener("keydown", function(event) {

        if (event.code === "Space") {
        event.preventDefault();
    }
    const key = event.key.toLowerCase();

    // BENAR
    if (key === "b" || key === "enter" || key === " ") {
        jawabanBenar();
    }

    // SALAH
    if (key === "s" || key === "backspace") {
        jawabanSalah();
    }

});
