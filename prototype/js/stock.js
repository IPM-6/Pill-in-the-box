var comprimidos = [["Atarax", "Alergias", 10],
  ["Ibuprofen", "Dores", 5],
  ["Kompensan", "Azia", 20],
  ["Nasomet", "Alergias", 3],
  ["Omeprazol", "Dores", 50],
  ["Telfast", "Alergias", 39],
  ["Xanax", "Ansiedade", 2],
  ["Zyrtec", "Alergias", 23]];



function showMedicine() {
  var endButton = '<div id="addToStockButton" class="col s12 center-align"><br>';
  endButton += '<a class="btn-floating btn-medium waves-effect waves-light red modal-trigger" href="#stockForm1">';
  endButton += '<i class="material-icons">add</i></a></div>';

  var solves = [];

  var content = "";
  var usedPills = [];
  for (var i = 0; i < comprimidos.length; i++) {
    var exist = false;
    if (i == 0)
      solves.push(comprimidos[i][1]);
    else {
      for (var j = 0; j < solves.length; j++)
        if (comprimidos[i][1] == solves[j]) {
          exist = true;
        }
      if (!exist)
        solves.push(comprimidos[i][1]);
    }

    var letter = comprimidos[i][0].charAt(0).toUpperCase();
    if (!/^[A-Z]/.test(letter))
      letter = "Other";
    for (var z = 0; z < usedPills.length; z++) {
      if (i == usedPills[z])
        used = true;
    }
    if (!used) {
      content += '<div id="' + letter + '" class="letter col s6">';
      content += '<div class="card"><h4>' + letter + '</h4>';

      for (var j = i; j < comprimidos.length; j++) {
        var letter2 = comprimidos[j][0].charAt(0).toUpperCase();
        if (!/^[A-Z]/.test(letter2))
          letter2 = "Other";
        var used = false;

        if (letter == letter2) {
          content += '<div id="' + comprimidos[j][0] + 'Pill" class="card-action">';
          content += '<a class="waves-effect grey-text text-darken-4" onclick="removePill(' + "'";
          content += comprimidos[j][0] + "'" + ')">' + comprimidos[j][0] + ':</a>';
          content += '<a id="' + comprimidos[j][0] + 'Count" class="grey-text text-darken-4">'
          content += comprimidos[j][2] + '</a></div>';
          usedPills.push(j);
        }
      }
      content += '</div></div>';
    }
  }
  var result = content + endButton;

  document.getElementById('showMedicine').innerHTML = result;

  var result2 = "";
  for (var i = 0; i < solves.length; i++) {
    result2 += '<label class="row">';
    result2 += '<input id="' + solves[i] + '" class="solutions" type="checkbox" class="filled-in" checked="checked" ';
    result2 += 'onclick="pillVisibility(' + "'" + solves[i] + "'" + ')"/>';
    result2 += '<span >' + solves[i] + '</span></label>';
  }

  document.getElementById('solves').innerHTML = result2;
}












function refreshIframe() {
  var ifr = document.getElementById('stockIFrame');
  ifr.src = ifr.src;
  //console.log(comprimidos);
}






function boxTakePill(pillName, numPills) {
  for (var i = 0; i < comprimidos.length; i++) {
    if (comprimidos[i][0] == pillName)
      comprimidos[i][2] -= numPills;
  }
  document.getElementById(pillName + ' ' + numPills).classList.add("disabled");
  console.log(comprimidos);

}







function removePill(pillName) {
  for (var i = 0; i < comprimidos.length; i++) {
    if (comprimidos[i][0] == pillName) {
      if (comprimidos[i][2] > 0)
        comprimidos[i][2]--;
      document.getElementById(comprimidos[i][0] + 'Count').innerHTML = comprimidos[i][2];
    }
  }
}





function pillVisibility(solvesName) {
  for (var i = 0; i < comprimidos.length; i++) {
    if (comprimidos[i][1] == solvesName) {
      var checked = document.getElementById(solvesName).checked;
      if (checked)
        document.getElementById(comprimidos[i][0] + 'Pill').classList.remove("hide");
      else
        document.getElementById(comprimidos[i][0] + 'Pill').classList.add("hide");
    }
  }
}







function addPillToStock() {
  var pillName = document.getElementById("pillName").value;
  var sintoma = document.getElementById("autocomplete-input").value;
  var pillAmount = document.getElementById("pillAmount").value;

  comprimidos.push([pillName, sintoma, pillAmount]);

  document.getElementById("pillName").value = "";
  document.getElementById("autocomplete-input").value = "";
  document.getElementById("pillAmount").value = "";

  showMedicine();
}




function addPillToStockShop(pillName, sintoma, pillAmount) {
	console.log("PillName Stock: " + pillName); 
	console.log("Sintoma Stock: " + sintoma);
	console.log("PillAmount Stock: " + pillAmount);
	console.log("PillAmount Stock: " + parseInt(pillAmount)); 
  comprimidos.push([pillName, sintoma, parseInt(pillAmount)]);
  showMedicine();
}