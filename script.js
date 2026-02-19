:root {
  --verde: #6b7d5b;
  --fundo-site: #F1F1F1;
  --texto-principal: #333333;
  --texto-suave: #555555;
  --max-largura: 900px;
}

html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background-color: var(--fundo-site);
  font-family: 'Playfair Display', serif;
  color: var(--texto-principal);
}

/* HERO */
.hero {
  min-height: 100vh;
  padding: 80px 20px;
  background: linear-gradient(rgba(241,241,241,0.9), rgba(241,241,241,0.95)),
              url('https://images.unsplash.com/photo-1529634806980-85c1d5d2c1a4') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay { max-width: var(--max-largura); margin: auto; text-align: center; }

/* TIPOGRAFIA */
h1 { font-size: 3rem; font-weight: 600; margin-bottom: 1rem; }
h2 { font-size: 2rem; margin-bottom: 1rem; }
p { font-size: 1.1rem; line-height: 2; color: var(--texto-suave); }

/* VERSÍCULO */
.verse {
  max-width: 900px;
  margin: 24px auto;
  padding: 0 16px;
  font-style: italic;
  font-size: 1.2rem;
  text-align: center;
  color: #4a4a4a;
  white-space: nowrap; /* tudo na mesma linha */
}

/* SEÇÕES */
.section { padding: 100px 24px; text-align: center; }
.section-light { background-color: #f1f1f1; }
.section > * { max-width: var(--max-largura); margin: auto; }

/* CONTAGEM REGRESSIVA */
.countdown-elegant {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}
.countdown-elegant div { text-align: center; }
.countdown-elegant span {
  font-size: 3rem;
  font-weight: 600;
  color: var(--verde);
  font-family: 'Playfair Display', serif;
}
.countdown-elegant small {
  display: block;
  margin-top: 5px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #555;
}

/* GALERIA */
.gallery { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
.gallery img { width: 280px; border-radius: 12px; }

/* MAPA */
iframe { width: 100%; max-width: 600px; height: 300px; border: 0; border-radius: 12px; margin: 20px auto; display: block; }

/* PIX / QR */
.pix-box, .qr { text-align: center; margin: 20px auto; }
.pix-box button { margin-top: 10px; cursor: pointer; }
.qr img { width: 180px; border-radius: 16px; padding: 16px; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }

/* HISTÓRIA */
.historia { line-height: 2.2; font-size: 1.1rem; }

/* FORMULÁRIO RSVP */
form { max-width: 500px; margin: auto; }
form input, form select {
  width: 100%;
  padding: 18px;
  font-size: 1.2rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
}
form input:focus, form select:focus {
  outline: none;
  border-color: var(--verde);
  box-shadow: 0 0 0 2px rgba(107, 125, 91, 0.2);
}
form button {
  width: 100%;
  padding: 18px;
  font-size: 1.2rem;
  border-radius: 30px;
  background: var(--verde);
  color: #fff;
  border: none;
  cursor: pointer;
}

/* BOTÕES */
button, .buttons a {
  background: var(--verde);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  border: none;
  text-decoration: none;
  margin-top: 10px;
  cursor: pointer;
}

/* ANIMAÇÕES */
.reveal { opacity: 0; transform: translateY(30px); transition: .8s; }
.reveal.active { opacity: 1; transform: translateY(0); }

/* RODAPÉ */
footer { text-align: center; padding: 40px 20px; font-size: 1.1rem; color: var(--texto-suave); }

/* RESPONSIVO */
@media (max-width: 768px) {
  section { padding: 70px 20px; }
  h1 { font-size: 2.2rem; }
  h2 { font-size: 1.7rem; }
  .countdown-elegant { gap: 20px; }
  .countdown-elegant span { font-size: 2.2rem; }
  .hero { padding: 80px 16px 60px; min-height: 100vh; height: auto !important; }
  .overlay { padding: 0 16px; }
  form input, form select { font-size: 1rem; padding: 15px; }
  form button { font-size: 1rem; padding: 16px; }
}
@media (max-width: 480px) {
  .hero { padding-top: 100px; padding-bottom: 60px; }
}
