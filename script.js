function copiarPix() {
  navigator.clipboard.writeText("assuncaomario21@icloud.com");
  alert("PIX copiado com sucesso!");
}

document.getElementById("rsvpForm").addEventListener("submit", function(e){
  e.preventDefault();

  const nome = this.nome.value;
  const qtd = this.qtd.value;

  fetch("https://formspree.io/f/xbjnqzql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, qtd })
  })
  .then(() => {
    document.getElementById("msg").innerText =
      "Presença confirmada! Obrigado 💚";
    this.reset();
  })
  .catch(() => {
    document.getElementById("msg").innerText =
      "Erro ao enviar. Tente novamente.";
  });
});
