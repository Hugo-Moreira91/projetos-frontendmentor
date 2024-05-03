document.getElementById("formulario1").addEventListener("submit", function(event) {
    var email = document.getElementById("email-usuario1").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regex.test(email)) {
      var msgError = document.querySelector(".erro-email-texto-vantagem1");
      var inputEmail1 = document.querySelector(".input1");

      msgError.innerHTML = 'Please check your email';
      inputEmail1.classList.add("erro-email");

      event.preventDefault();
    }else{
      msgError.innerHTML = '';
      inputEmail1.classList.remove("erro-email");
    }
  });

  document.getElementById("formulario2").addEventListener("submit", function(event) {
    var email = document.getElementById("email-usuario2").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regex.test(email)) {
      var msgError = document.querySelector(".erro-email-texto-acesso-antecipado");
      var inputEmail2 = document.querySelector(".input2");

      msgError.innerHTML = 'Please check your email';
      inputEmail2.classList.add("erro-email");

      event.preventDefault();
    }else{
      msgError.innerHTML = '';
      inputEmail2.classList.remove("erro-email");
    }
  });