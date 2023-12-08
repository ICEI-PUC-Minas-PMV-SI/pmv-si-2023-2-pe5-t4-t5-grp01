function registrar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!email || !password || !confirmPassword) {
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

  const userData = { email, password };
  localStorage.setItem('userData', JSON.stringify(userData));

  // Redirecionar para a tela de login
  window.location.href = '../Login/index.html';
}

function voltarParaLogin() {
  // Redirecionar para a tela de login
  window.location.href = '../Login/index.html';
}