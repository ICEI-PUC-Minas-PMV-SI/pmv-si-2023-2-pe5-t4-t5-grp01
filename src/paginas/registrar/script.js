function registrar() {
  const email = document.getElementById("email").value;
  const fullName = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!email || !password || !confirmPassword || !fullName) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (password.length < 8) {
    alert("A senha deve ter pelo menos 8 caracteres.");
    return;
  }

  if (password !== confirmPassword) {
    alert("As senhas não coincidem. Tente novamente.");
    return;
  }

  const userData = { nome: fullName, email, senha: password, receitasFavoritas: [] };
  const currentDatabase = JSON.parse(localStorage.getItem("banco"));
  const newDatabase = {
    ...currentDatabase,
    usuarios: [...currentDatabase.usuarios, userData],
  };
  localStorage.setItem("banco", JSON.stringify(newDatabase));

  // Redirecionar para a tela de login
  window.location.href = "../login";
}

function voltarParaLogin() {
  // Redirecionar para a tela de login
  window.location.href = "../login";
}
