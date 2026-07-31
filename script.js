// Efek mengetik nama Arini (Cil)
const typing = document.getElementById("typing");

if (typing) {
    const text = "Arini (Cil) ❤️";
    let i = 0;

    function type() {
        if (i < text.length) {
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 120);
        }
    }

    type();
}

// Membuka surat
const openBtn = document.getElementById("openLetter");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close");

if (openBtn && overlay) {
    openBtn.onclick = () => {
        overlay.style.display = "flex";
    };
}

if (closeBtn && overlay) {
    closeBtn.onclick = () => {
        overlay.style.display = "none";
    };
}

// Membuat hati beterbangan
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let pos = 100;

    const timer = setInterval(() => {

        pos--;

        heart.style.top = pos + "vh";

        if (pos < -10) {
            clearInterval(timer);
            heart.remove();
        }

    }, 20);
}

setInterval(createHeart, 600);

// Tombol cinta
const loveButton = document.getElementById("loveButton");

if (loveButton) {

    loveButton.addEventListener("click", () => {

        for (let i = 0; i < 40; i++) {

            setTimeout(createHeart, i * 80);

        }

        alert("🌻 Untuk Arini (Cil), semoga harimu selalu seindah bunga matahari ❤️");

    });
window.onload = function () {
    document.getElementById("loader").style.display = "none";
};
