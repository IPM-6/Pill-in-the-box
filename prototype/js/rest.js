function findA() {
  var x = document.getElementsByClassName("letter");
  for(var i = 0; i < x.length; i++){
    x[i].classList.add("hide")
  }
  document.getElementById("A").classList.remove("hide");
}