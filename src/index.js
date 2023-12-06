const dadosReceitas = [
  {
    id: 1,
    nome: "Omelete",
    srcImagem: "public/images/omelete.png",
    autor: "Marcos",
    avaliacao: 5,
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
    srcImagem: "public/images/pizza.png",
    autor: "Giovanna",
    avaliacao: 4,
    modoPreparo:
      "Prepare a massa da pizza, adicione molho de tomate, queijo e os ingredientes de sua escolha. Asse no forno.",
    tempoPreparo: "30 minutos",
    porcoes: 4,
    detalhesReceita: "Uma pizza caseira fácil de fazer para agradar a família.",
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
    srcImagem: "public/images/macarrão.png",
    autor: "Aline",
    avaliacao: 3,
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
    srcImagem: "public/images/salada.png",
    autor: "Júlio",
    avaliacao: 5,
    modoPreparo:
      "Lave e corte os vegetais. Misture-os em uma tigela. Tempere com azeite, vinagre, sal e pimenta.",
    tempoPreparo: "15 minutos",
    porcoes: 4,
    detalhesReceita:
      "Uma salada refrescante e saudável para acompanhar qualquer refeição.",
    ingredientes: ["Alface", "Tomate", "Cenoura", "Azeite", "Vinagre"],
  },
];

// Restante do código (função renderizarReceitas, etc.)

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
    cardReceita.href = "/src/Receita/index.html?id=" + receita.id;

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

    const textoLegenda = document.createElement("div");
    textoLegenda.classList.add("image-caption-text");
    textoLegenda.innerHTML = `Por <span class="underline-text">${receita.autor}</span>`;

    const imagemEstrelas = document.createElement("img");
    imagemEstrelas.src = "public/images/estrelas.svg";
    imagemEstrelas.alt = "Estrelas";
    imagemEstrelas.classList.add("estrelas");

    cardReceita.appendChild(wrapperImagem);
    cardReceita.appendChild(textoLegenda);
    cardReceita.appendChild(imagemEstrelas);

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

// Renderizar as receitas
renderizarReceitas(dadosReceitas);

window.localStorage.setItem("receitas", JSON.stringify(dadosReceitas));
