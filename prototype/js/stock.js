var comprimidos = [["Atarax", "Alergias", 10],
                  ["Ibuprofen", "Dores", 5],
                  ["Kompensan", "Azia", 20],
                  ["Nasomet", "Alergias", 3],
                  ["Omeprazol", "Dores", 50],
                  ["Telfast", "Alergias", 39],
                  ["Xanax", "Ansiedade", 2],
                  ["Zyrtec", "Alergias", 23]
                  ];
                 
function showMedicine(){
  var ifrm = document.getElementById('stockIFrame');
  var doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
  
  
  var endButton = '<div id="addToStockButton" class="col s12 center-align"><br>';
  endButton += '<a class="btn-floating btn-medium waves-effect waves-light red modal-trigger" href="#stockForm1">';
  endButton += '<i class="material-icons">add</i></a></div>';
  
  var content = "";
  for(var i = 0; i < comprimidos.length; i++){
    var letter = comprimidos[i][0].charAt(0).toUpperCase();
    content += '<div id="' + letter + '" class="letter col s6">';
    content += '<div class="card"><h4>' + letter + '</h4>';
    for(var j = i; j < comprimidos.length; j++){
      var letter2 = comprimidos[j][0].charAt(0).toUpperCase();
      if(letter === letter2){
        content += '<div class="card-action">';
        content += '<a class="waves-effect grey-text text-darken-4">' + comprimidos[j][0] + ':</a>';
        content += '<a id="zyretecCount" class="grey-text text-darken-4">' + comprimidos[j][2] + '</a></div>';
      }
      content += '</div></div>';
    }
  }
  var result = content + endButton;
  console.log(result);
  console.log(doc.getElementById('showMedicine'));
  doc.getElementById('showMedicine').innerHTML = result;
}