// ===== Tema claro / escuro =====
const botaoTema = document.getElementById("botao-tema");

function aplicarTema(escuro) {
  document.body.classList.toggle("escuro", escuro);
  botaoTema.textContent = escuro ? "☀️" : "🌙";
}

// Recupera o tema salvo (se o navegador permitir)
let temaSalvo = null;
try {
  temaSalvo = localStorage.getItem("tema");
} catch (erro) {
  temaSalvo = null;
}
aplicarTema(temaSalvo === "escuro");

botaoTema.addEventListener("click", function () {
  const ficouEscuro = !document.body.classList.contains("escuro");
  aplicarTema(ficouEscuro);
  try {
    localStorage.setItem("tema", ficouEscuro ? "escuro" : "claro");
  } catch (erro) {
    // Sem armazenamento disponível: o tema só vale nesta visita
  }
});

// ===== Copiar e-mail =====
const botaoCopiar = document.getElementById("botao-copiar");
const aviso = document.getElementById("aviso-copia");
const email = "seuemail@exemplo.com"; // troque pelo seu e-mail

botaoCopiar.addEventListener("click", function () {
  navigator.clipboard.writeText(email).then(
    function () {
      aviso.textContent = "E-mail copiado!";
    },
    function () {
      aviso.textContent = "Não foi possível copiar. Copie manualmente: " + email;
    }
  );
});

// ===== Ano atual no rodapé =====
document.getElementById("ano").textContent = new Date().getFullYear();
