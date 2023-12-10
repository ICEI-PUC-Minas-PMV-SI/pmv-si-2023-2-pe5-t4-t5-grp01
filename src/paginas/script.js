// Função para renderizar as receitas

function iniciaBanco() {
  if (window.localStorage.getItem("banco")) {
    return;
  }
  const bancoInicial = {
    receitas: [
      {
        id: 1,
        nome: "Omelete",
        srcImagem: "../public/images/omelete.png",
        modoPreparo:
          "Bata os ovos e tempere com sal e pimenta. Aqueça uma frigideira e despeje os ovos batidos. Cozinhe até firmar.",
        tempoPreparo: "15 minutos",
        porcoes: 2,
        detalhesReceita:
          "Uma receita rápida e deliciosa para um café da manhã saudável.",
        ingredientes: ["3 ovos", "Sal a gosto", "Pimenta a gosto"],
      },
      {
        id: 2,
        nome: "Pizza",
        srcImagem: "../public/images/pizza.png",
        modoPreparo:
          "Prepare a massa da pizza, adicione molho de tomate, queijo e os ingredientes de sua escolha. Asse no forno.",
        tempoPreparo: "30 minutos",
        porcoes: 4,
        detalhesReceita:
          "Uma pizza caseira fácil de fazer para agradar a família.",
        ingredientes: [
          "Massa de pizza",
          "Molho de tomate",
          "Queijo",
          "Ingredientes a gosto",
        ],
      },
      {
        id: 3,
        nome: "Macarrão",
        srcImagem: "../public/images/macarrão.png",
        modoPreparo:
          "Cozinhe o macarrão em água com sal. Prepare um molho de sua escolha. Misture o macarrão cozido e o molho.",
        tempoPreparo: "20 minutos",
        porcoes: 3,
        detalhesReceita: "Um prato simples e saboroso para qualquer ocasião.",
        ingredientes: ["Macarrão", "Molho de tomate", "Queijo ralado"],
      },
      {
        id: 4,
        nome: "Salada",
        srcImagem: "../public/images/salada.png",
        modoPreparo:
          "Lave e corte os vegetais. Misture-os em uma tigela. Tempere com azeite, vinagre, sal e pimenta.",
        tempoPreparo: "15 minutos",
        porcoes: 4,
        detalhesReceita:
          "Uma salada refrescante e saudável para acompanhar qualquer refeição.",
        ingredientes: ["Alface", "Tomate", "Cenoura", "Azeite", "Vinagre"],
      },
      {
        id: 6,
        nome: "Sanduíche de Frango",
        srcImagem: "../public/images/sanduiche.png",
        modoPreparo:
          "Cozinhe peitos de frango, desfie e tempere a gosto. Monte um sanduíche com alface, tomate e maionese.",
        tempoPreparo: "20 minutos",
        porcoes: 2,
        detalhesReceita:
          "Um sanduíche simples e delicioso para uma refeição rápida.",
        ingredientes: [
          "Peitos de frango",
          "Pão de forma",
          "Alface",
          "Tomate",
          "Maionese",
        ],
      },
      {
        id: 7,
        nome: "Torradas com Abacate",
        srcImagem: "../public/images/torradas.png",
        modoPreparo:
          "Toste fatias de pão e amasse abacate maduro. Espalhe o abacate nas torradas e tempere com sal e pimenta a gosto.",
        tempoPreparo: "10 minutos",
        porcoes: 2,
        detalhesReceita:
          "Uma opção saudável e deliciosa para o café da manhã ou lanche.",
        ingredientes: ["Fatias de pão", "Abacate maduro", "Sal", "Pimenta"],
      },
      {
        id: 8,
        nome: "Salada de Frutas",
        srcImagem: "../public/images/frutas.png",
        modoPreparo:
          "Corte diversas frutas, como morangos, kiwi e banana. Misture em uma tigela e sirva gelado.",
        tempoPreparo: "10 minutos",
        porcoes: 3,
        detalhesReceita:
          "Uma opção saudável e refrescante para sobremesa ou lanche.",
        ingredientes: ["Morangos", "Kiwi", "Banana", "Mel (opcional)"],
      },
      {
        id: 9,
        nome: "Ovos Mexidos",
        srcImagem: "../public/images/ovos.png",
        modoPreparo:
          "Quebre ovos em uma tigela, bata, tempere com sal e pimenta. Cozinhe em fogo baixo mexendo até obter ovos cremosos.",
        tempoPreparo: "10 minutos",
        porcoes: 2,
        detalhesReceita:
          "Ovos mexidos macios e deliciosos para um café da manhã rápido.",
        ingredientes: ["Ovos", "Sal", "Pimenta", "Manteiga (opcional)"],
      },
    ],
    usuarios: [],
  };
  window.localStorage.setItem("banco", JSON.stringify(bancoInicial));
  window.location.reload();
}

window.onload = iniciaBanco;

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
  const banco = JSON.parse(window.localStorage.getItem("banco"));
  let receitas = banco.receitas;
  if (event) {
    receitas = filtraReceitas(banco.receitas, event.target.value);
  }
  renderizarReceitas(receitas);
}

const inputPesquisa = document.getElementById("RangoInput");
const favoritasCheckbox = document.getElementById("FilterCheckbox");

favoritasCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    const banco = JSON.parse(window.localStorage.getItem("banco"));
    const emailUsuarioLogado = JSON.parse(
      window.localStorage.getItem("usuarioLogado")
    ).email;
    const usuario = banco.usuarios.find(
      (usuario) => usuario.email === emailUsuarioLogado
    );
    const receitasFavoritas = usuario.receitasFavoritas;
    const receitasFavoritasCompletas = receitasFavoritas.map((id) => {
      return banco.receitas.find((receita) => receita.id === id);
    });
    renderizarReceitas(receitasFavoritasCompletas);
  } else {
    main();
  }
});

inputPesquisa.addEventListener("input", main);

main();
