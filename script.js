// Contagem regressiva
const targetDate = new Date("December 20, 2026 16:00:00").getTime();
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;
  daysEl.innerText = Math.floor(diff / (1000*60*60*24));
  hoursEl.innerText = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
  minutesEl.innerText = Math.floor((diff % (1000*60*60))/(1000*60));
}, 1000);

// Formulário RSVP
const form = document.getElementById('rsvpForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('msg').innerText = "Obrigado! Sua presença foi confirmada 💚";
  form.reset();
});

// Copiar PIX
function copiarPix() {
  navigator.clipboard.writeText("assuncaomario21@icloud.com").then(() => {
    alert("PIX copiado!");
  });
}
