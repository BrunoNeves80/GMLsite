"use strict";

function abrirImagem(elemento) {
  var imagemModal = document.getElementById("imagem-modal");
  imagemModal.src = elemento.src;
  document.getElementById("modal").style.display = "flex";
}

function fecharImagem() {
  document.getElementById("modal").style.display = "none";
}

function fecharImagem() {
  document.getElementById("modal").style.display = "none";
}
