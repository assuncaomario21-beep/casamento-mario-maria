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
