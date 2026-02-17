function copiarPix() {
  navigator.clipboard.writeText("assuncaomario21@icloud.com");
  alert("PIX copiado com sucesso!");
}

function toggleMusic() {
  const music = document.getElementById("music");
  music.paused ? music.play() : music.pause();
}

const targetDate = new Date("2026-12-20T16:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  document.getElementById("days").innerText =
    Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText =
    Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText =
    Math.floor((diff / (1000 * 60)) % 60);
}, 1000);

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      r.classList.add("active");
    }
  });
});

document.getElementById("rsvpForm").addEventListener("submit", function(e){
  e.preventDefault();
  const nome = this.nome.value;

  fetch("https://formspree.io/f/xbjnqzql", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      nome: nome,
      pessoas: this.qtd.value
    })
  });

  document.getElementById("msg").innerText =
    Obrigado, ${nome}! Sua presença foi confirmada 💚;
  this.reset();
});
