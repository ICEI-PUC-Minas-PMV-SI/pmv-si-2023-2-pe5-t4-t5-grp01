const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const receitaDesejada = JSON.parse(
  window.localStorage.getItem("receitas")
).find((receita) => receita.id == id);

const ingredientes = document.getElementById("ingredientes");
const modoDePreparo = document.getElementById("modo-de-preparo");
const quantidadePorcoes = document.getElementById("quantidade-porcoes");
const tempoNecessario = document.getElementById("tempo-necessario");
const tituloReceita = document.getElementById("titulo-receita");
const detalhesReceita = document.getElementById("detalhes-receita");

ingredientes.innerHTML = receitaDesejada.ingredientes.join("<br/>");
modoDePreparo.innerHTML = receitaDesejada.modoPreparo;
quantidadePorcoes.innerHTML = receitaDesejada.porcoes + " porções";
tempoNecessario.innerHTML = receitaDesejada.tempoPreparo;
tituloReceita.innerHTML = receitaDesejada.nome;
detalhesReceita.innerHTML = receitaDesejada.detalhesReceita;