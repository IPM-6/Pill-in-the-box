var comprimidos = [["Atarax","Alergias", 10],
                  ["Ibuprofen", "Dores", 5],
                  ["Kompensan", "Azia", 20],
                  ["Nasomet", "Alergias", 3],
                  ["Omeprazol", "Dores", 50],
                  ["Telfast", "Alergias", 39],
                  ["Xanax", "Ansiedade", 2],
                  ["Zyrtec", "Alergias", 23]];



function showMedicine(){
  
  
  var endButton = '<div id="addToStockButton" class="col s12 center-align"><br>';
  endButton += '<a class="btn-floating btn-medium waves-effect waves-light red modal-trigger" href="#stockForm1">';
  endButton += '<i class="material-icons">add</i></a></div>';
  
  var solves = [];
  
  var content = "";
  for(var i = 0; i < comprimidos.length; i++){
    var letter = comprimidos[i][0].charAt(0).toUpperCase();
    
    var exist = false;
    if(i == 0)
      solves.push(comprimidos[i][1]);
    else{
      for (var j = 0; j < solves.length; j++)
        if(comprimidos[i][1] == solves[j]){
          exist = true;
        }
      if(!exist)
        solves.push(comprimidos[i][1]);
    }
    
    content += '<div id="' + letter + '" class="letter col s6">';
    content += '<div class="card"><h4>' + letter + '</h4>';
    for(var j = i; j < comprimidos.length; j++){
      var letter2 = comprimidos[j][0].charAt(0).toUpperCase();
      if(letter === letter2){
        content += '<div class="card-action">';
        content += '<a class="waves-effect grey-text text-darken-4">' + comprimidos[j][0] + ':</a>';
        content += '<a id="' + comprimidos[j][0] + 'Count" class="grey-text text-darken-4">' + comprimidos[j][2] + '</a></div>';
      }
      content += '</div></div>';
    }
  }
  var result = content + endButton;
  
  document.getElementById('showMedicine').innerHTML = result;
  
  
  var result2 = "";
  for(var i = 0; i < solves.length; i++){
    result2 += '<label>';
    result2 += '<input id="' + solves[i] + '" class="solutions" type="checkbox" class="filled-in" checked="checked" />';
    result2 += '<span >' + solves[i] + '</span></label>';
  }
  
  document.getElementById('solves').innerHTML = result2;
}

function refreshIframe() {
    var ifr = document.getElementById('stockIFrame');
    ifr.src = ifr.src;
    //console.log(comprimidos);
}

function boxTakePill(pillName, numPills){
  for(var i = 0; i < comprimidos.length; i++){
    if(comprimidos[i][0] == pillName)
      comprimidos[i][2] -= numPills;
  }
  document.getElementById(pillName + ' ' + numPills).classList.add("disabled");
  console.log(comprimidos);
  
}