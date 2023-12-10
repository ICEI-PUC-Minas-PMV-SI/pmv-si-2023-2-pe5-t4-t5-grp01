const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const banco = JSON.parse(window.localStorage.getItem("banco"));

const receitaDesejada = banco.receitas.find((receita) => receita.id == id);

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

const botaoFavoritar = document.getElementById("favoritar");

botaoFavoritar.innerHTML = "Favoritar";

let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
  botaoFavoritar.addEventListener("click", () => {
    alert("Você precisa estar logado para favoritar uma receita");
  });
}

if (usuarioLogado) {
  const usuario = banco.usuarios.find(
    (usuario) => usuario.email == usuarioLogado.email
  );
  const receitaJaEstaFavorita = usuario.receitasFavoritas.includes(
    receitaDesejada.id
  );
  if (receitaJaEstaFavorita) {
    botaoFavoritar.innerHTML = "Desfavoritar";
  }
  botaoFavoritar.addEventListener("click", () => {
    if (receitaJaEstaFavorita) {
      usuario.receitasFavoritas = usuario.receitasFavoritas.filter(
        (r) => r != receitaDesejada.id
      );
      botaoFavoritar.innerHTML = "Favoritar";
    } else {
      usuario.receitasFavoritas.push(receitaDesejada.id);
      botaoFavoritar.innerHTML = "Desfavoritar";
    }
    localStorage.setItem("banco", JSON.stringify(banco));
    window.location.reload();
  });
}
