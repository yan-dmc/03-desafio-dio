const vitorias = document.querySelector("#vitorias");
const derrotas = document.querySelector("#derrotas");
const total = document.querySelector(".total");
const saidaRank = document.querySelector(".rank");
const imagens = document.querySelector("#img-rank");

total.textContent = 0;

function atualizarRank() {
  let valor = (vitorias.value || 0) - (derrotas.value || 0);
  if (valor <= 0) {
    valor = 0;
    total.textContent = valor;
    total.style.color = 'white';
  } else {
    total.textContent = valor;
    total.style.color = '#68EAAC';
  }

  let rank, cor, img;
  if ((vitorias.value == 0 && derrotas.value == 0) || (!vitorias.value && !derrotas.value)) {
    rank = "Undefined";
    cor = "white";
    img = "./Imagens/Unranked.webp";
  }
  else if (0 <= valor && valor < 10) {
    rank = "Ferro";
    cor = '#B09F9B';
    img = "./Imagens/Iron.webp";
  } else if (10 <= valor && valor < 20) {
    rank = "Bronze";
    cor = '#D08469';
    img = "./Imagens/Bronze.webp";
  } else if (20 <= valor && valor < 30) {
    rank = "Prata";
    cor = '#C4D0E8';
    img = "./Imagens/Prata.webp";
  } else if (30 <= valor && valor < 40) {
    rank = "Ouro";
    cor = '#FEEBBD';
    img = "./Imagens/Ouro.webp";
  } else if (40 <= valor && valor < 50) {
    rank = "Platina";
    cor = '#9FF2F7';
    img = "./Imagens/Platina.webp";
  } else if (50 <= valor && valor < 60) {
    rank = "Esmeralda";
    cor = '#64E8AB';
    img = "./Imagens/Esmeralda.webp";
  } else if (60 <= valor && valor < 70) {
    rank = "Diamante";
    cor = '#6DA6DF';
    img = "./Imagens/Diamante.webp";
  } else if (70 <= valor && valor < 80) {
    rank = "Lendário";
    cor = '#ED4EF8';
    img = "./Imagens/Lendario.webp";
  } else if (80 <= valor && valor < 90) {
    rank = "Imortal";
    cor = '#FFA752';
    img = "./Imagens/Imortal.webp";
  } else if (90 <= valor) {
    rank = "Radiante";
    cor = '#DFFFFF';
    img = "Radiante.webp";
  }

  saidaRank.textContent = rank;
  saidaRank.style.color = cor;
  imagens.src = img;
}

function limitar(limitador) {
  if (this.value > limitador) {
    this.value = limitador;} 
  // Permite apenas números
  this.value = this.value.replace(/[^0-9]/g, '');
}

vitorias.addEventListener('input', function () {
  limitar.call(vitorias, 10000);
});

derrotas.addEventListener('input', function () {
  limitar.call(derrotas, 10000);
});

vitorias.addEventListener("input", atualizarRank);
derrotas.addEventListener("input", atualizarRank);
