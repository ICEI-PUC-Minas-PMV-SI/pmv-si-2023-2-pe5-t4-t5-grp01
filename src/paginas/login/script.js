function logar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Login
  const banco = JSON.parse(window.localStorage.getItem("banco"));

  const usuario = banco.usuarios.find((usuario) => usuario.email === email);
  if (!usuario) return alert("O usuário não existe, por favor registre-se.");
  if (usuario.senha !== password) {
    return alert("Senha incorreta.");
  }
  localStorage.setItem(
    "usuarioLogado",
    JSON.stringify({ email, nome: usuario.nome })
  );
  window.location.href = "../index.html";
  return;
}

function irParaRegistro() {
  // Redirecionar para a tela de registro
  window.location.href = "../registrar";
}
