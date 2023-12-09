fetch("../../banco.json")
  .then((resposta) => resposta.json())
  .then((json) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const receitaDesejada = json.receitas.find((receita) => receita.id == id);

    const ingredientes = document.getElementById("ingredientes");
    const modoDePreparo = document.getElementById("modo-de-preparo");
    const quantidadePorcoes = document.getElementById("quantidade-porcoes");
    const tempoNecessario = document.getElementById("tempo-necessario");
    const tituloReceita = document.getElementById("titulo-receita");
    const detalhesReceita = document.getElementById("detalhes-receita");
    const fotoReceita = document.getElementById("foto-receita");

    ingredientes.innerHTML = receitaDesejada.ingredientes.join("<br/>");
    modoDePreparo.innerHTML = receitaDesejada.modoPreparo;
    fotoReceita.src = "../" + receitaDesejada.srcImagem;
    quantidadePorcoes.innerHTML = receitaDesejada.porcoes + " porções";
    tempoNecessario.innerHTML = receitaDesejada.tempoPreparo;
    tituloReceita.innerHTML = receitaDesejada.nome;
    detalhesReceita.innerHTML = receitaDesejada.detalhesReceita;
  });
