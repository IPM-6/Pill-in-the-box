function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "joao@gmail.com" && password == "1234") {
    document.getElementById("login").classList.add("hide");
    document.getElementById("signin").classList.add("hide");
    document.getElementById("name").classList.remove("hide");
    document.getElementById("caixas").classList.remove("hide");
    document.getElementById("stock").classList.remove("hide");
    document.getElementById("compras").classList.remove("hide");
    document.getElementById("calendario").classList.remove("hide");
    document.getElementById("confirmLogin").classList.add("modal-close");
    document.getElementById("confirmLogin").click();
    return true;
  }
  document.getElementById("LoginErrorMessage").classList.remove("hide");
  return false;
}


function showContent() {
  document.getElementById("login").classList.add("hide");
  document.getElementById("signin").classList.add("hide");
  document.getElementById("name").classList.remove("hide");
  document.getElementById("caixas").classList.remove("hide");
  document.getElementById("stock").classList.remove("hide");
  document.getElementById("compras").classList.remove("hide");
  document.getElementById("calendario").classList.remove("hide");
}