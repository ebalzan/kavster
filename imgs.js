if (innerWidth >= 1024) {
  var colecoesBox = document.querySelectorAll(".colecao");

  for (let i = 0; i < colecoesBox.length; i++) {
    colecoesBox[i].style.backgroundImage =
      "url(./IMAGENS/colecoes/colecao" + i + ".jpg)";
  }
}
