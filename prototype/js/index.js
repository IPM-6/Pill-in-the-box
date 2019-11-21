function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "joao@gmail.com" && password == "1234") {
    document.getElementById("login").classList.add("hide");
    document.getElementById("signin").classList.add("hide");
    document.getElementById("name").classList.remove("hide");
  }
}


