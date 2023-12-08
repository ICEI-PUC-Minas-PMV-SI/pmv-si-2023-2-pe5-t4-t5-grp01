function logar() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Login
  const storedData = localStorage.getItem('userData');
  if (storedData) {
      const userData = JSON.parse(storedData);

      if (email === userData.email && password === userData.password) {
          // Redirecionar para a home caso as credenciais estejam corretas
          window.location.href = '../index.html';
      } else {
          alert('Dados incorretos, tente novamente');
      }
  } else {
      alert('Usuário não registrado. Registre-se primeiro.');
  }
}

function irParaRegistro() {
  // Redirecionar para a tela de registro
  window.location.href = '../Register';
}