function selectAll(){
  var x = document.getElementsByClassName("person");
  for(var i = 0; i < x.length; i++){
    x[i].checked = "checked";
  }
}

function deselectAll(){
  var x = document.getElementsByClassName("person");
  for(var i = 0; i < x.length; i++){
    x[i].checked = "";
  }
}

function addBox(){
  
}