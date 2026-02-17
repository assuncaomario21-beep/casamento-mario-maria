function copiarPix() {
  navigator.clipboard.writeText("assuncaomario21@icloud.com");
  alert("PIX copiado!");
}

function toggleMusic() {
  const music = document.getElementById("music");
  music.paused ? music.play() : music.pause();
}

const targetDate = new Date("2026-12-20T16:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerText =
    Faltam ${d} dias, ${h}h e ${m}min;
}, 1000);

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
