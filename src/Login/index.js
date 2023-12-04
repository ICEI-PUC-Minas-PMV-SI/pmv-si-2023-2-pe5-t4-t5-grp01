


 let inputEmail = document.getElementById("email");
 let inputPassword = document.getElementById("password");


 function logar(){
     let done = 0;
     let email = inputEmail.value;
     let password = inputPassword.value;
     console.log("Entrando...");
         
         
     if (email == "admin" && password == "admin") {
       window.location = "profile.html";
       done = 1;
       console.log("Entrou!")
     }else if (done == 0) {
       alert("Dados incorretos, tente novamente");
       console.log("Erro ao entrar!")
    }
}





//IF(COUNT(SELECT("Usuarios", Email = [inputusuario] && Password = [inputpassword])) = 1){
          //LOGOU
        //ELSE
        //nao logou
