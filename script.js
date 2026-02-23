// CONTAGEM REGRESSIVA
const weddingDate = new Date("December 20, 2026 00:00:00").getTime();

setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
}, 1000);


// COPIAR PIX
function copiarPix() {
  navigator.clipboard.writeText("assuncaomario21@icloud.com");
  alert("PIX copiado com sucesso!");
}


// RSVP
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Presença confirmada com sucesso!";
});

function playMusic() {
  const music = document.getElementById("bgMusic");

  if (music.paused) {
    music.volume = 0.6;
    music.play();
    document.querySelector(".music-btn").innerText = "🔇 Pausar música";
  } else {
    music.pause();
    document.querySelector(".music-btn").innerText = "🎵 Ativar música";
  }
}
// ===== MÚSICA DE FUNDO =====
let musicStarted = false;

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.querySelector(".music-btn");

  if (!musicStarted) {
    music.volume = 0;
    music.play();
    musicStarted = true;

    // Fade in suave
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.6) {
        vol += 0.05;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);

    btn.innerText = "🔇 Pausar música";
  } else if (!music.paused) {
    music.pause();
    btn.innerText = "🎵 Música";
  } else {
    music.play();
    btn.innerText = "🔇 Pausar música";
  }
}
