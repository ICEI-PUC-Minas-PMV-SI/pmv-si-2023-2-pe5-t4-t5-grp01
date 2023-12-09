// Função para renderizar as receitas
function renderizarReceitas(receitas) {
  const containerReceitas = document.getElementById("receitas-container");
  containerReceitas.innerHTML = "";

  receitas.forEach((receita, index) => {
    // Verificar se o índice da receita é ímpar
    const isOdd = (index + 1) % 2 !== 0;

    let imageRowDiv = null;

    // Criar um div com a classe "image-row" se o índice for ímpar
    if (isOdd) {
      imageRowDiv = document.createElement("div");
      imageRowDiv.classList.add("image-row");
      containerReceitas.appendChild(imageRowDiv);
    }

    // Criar o card da receita
    const cardReceita = document.createElement("a");
    cardReceita.classList.add("card");
    cardReceita.href = "/src/paginas/receita/index.html?id=" + receita.id;

    const wrapperImagem = document.createElement("div");
    wrapperImagem.classList.add("image-wrapper");

    const imagem = document.createElement("img");
    imagem.classList.add("MyImage");
    imagem.src = receita.srcImagem;
    imagem.alt = receita.nome;

    const tagImagem = document.createElement("div");
    tagImagem.classList.add("image-tag");

    const textoImagem = document.createElement("div");
    textoImagem.classList.add("image-text");
    textoImagem.textContent = receita.nome;

    tagImagem.appendChild(textoImagem);
    wrapperImagem.appendChild(imagem);
    wrapperImagem.appendChild(tagImagem);

    cardReceita.appendChild(wrapperImagem);

    // Adicionar o card à div "image-row" se o índice for ímpar, senão adicioná-lo diretamente ao container
    if (imageRowDiv != null) {
      imageRowDiv.appendChild(cardReceita);
    } else {
      const linhasDeImagem = document.getElementsByClassName("image-row");
      const ultimaLinha = linhasDeImagem[linhasDeImagem.length - 1];
      ultimaLinha.appendChild(cardReceita);
    }
  });
}

function filtraReceitas(receitas, valorInput) {
  return receitas.filter((receita) => {
    return receita.nome.toLowerCase().includes(valorInput.toLowerCase());
  });
}

function main(event) {
  fetch("../banco.json")
    .then((resposta) => resposta.json())
    .then((json) => {
      let receitas = json.receitas;
      if (event) {
        receitas = filtraReceitas(json.receitas, event.target.value);
      }
      renderizarReceitas(receitas);
    });
}

const inputPesquisa = document.getElementById("RangoInput");
inputPesquisa.addEventListener("input", main);

main();
