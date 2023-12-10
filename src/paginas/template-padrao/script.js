const loginButton = document.getElementsByClassName("login-button")[0];

const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
if (usuarioLogado) {
  loginButton.style.padding = "20px";
  loginButton.style.gap = "3px";
  loginButton.style.display = "flex";
  loginButton.style.flexDirection = "column";
  loginButton.style.textDecoration = "none";
  loginButton.innerHTML = `

   <span> ${usuarioLogado.nome} </span>
  <span style="text-decoration:underline">Sair</span>`;
  loginButton.href = "";
  loginButton.addEventListener("click", () => {
    localStorage.removeItem("usuarioLogado");
  });
}
