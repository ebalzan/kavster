if (innerWidth >= 1024) {
  var etiquetas = document.querySelectorAll(".etiqueta");
  var colecoes = document.querySelectorAll(".colecao");
  var produto = document.querySelectorAll(".produto");

  for (let i = 0; i < colecoes.length; i++) {
    colecoes[i].addEventListener("mouseover", () => {
      etiquetas[i].style.left = 0;
    });
    colecoes[i].addEventListener("mouseout", () => {
      etiquetas[i].style.left = "-100%";
    });
  }

  for (let i = 0; i < produto.length; i++) {
    colecoes[i].addEventListener("click", () => {
      for (let j = 0; j < produto.length; j++) {
        produto[j].style.height = 0;
      }
      setTimeout(() => {
        produto[i].style.height = 800;
        var posY = produto[i].offsetTop - 120;
        scrollTo(0, posY);
      }, 400);
    });
  }
}
