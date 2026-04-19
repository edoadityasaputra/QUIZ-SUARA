// AUTO FOCUS BIAR LANGSUNG TERIMA KEYBOARD
window.onload = function () {
    document.body.focus();
};

// FUNGSI SUARA BENAR
function jawabanBenar() {
    const audio = document.getElementById("benarSound");
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

// FUNGSI SUARA SALAH
function jawabanSalah() {
    const audio = document.getElementById("salahSound");
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

// EVENT KEYBOARD
window.addEventListener("keydown", function (event) {

    // CEGAH SCROLL SAAT TEKAN SPASI
    if (event.code === "Space") {
        event.preventDefault();
    }

    // BENAR
    if (
        event.code === "KeyB" ||
        event.code === "Enter" ||
        event.code === "Space"
    ) {
        jawabanBenar();
    }

    // SALAH
    if (
        event.code === "KeyS" ||
        event.code === "Backspace"
    ) {
        jawabanSalah();
    }

});
