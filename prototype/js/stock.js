function getData(){
  var xmlhttp = {};
  var xmlDoc = {};

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  }
  xmlhttp.open("GET", "data.xml", false);
  xmlhttp.send();
  xmlDoc = xmlhttp.responseXML;

  console.log(xmlDoc);
  
  var names = xmlDoc.getElementsByTagName("name");
  var solves = xmlDoc.getElementsByTagName("solves");
  var num = xmlDoc.getElementsByTagName("num");

  var comprimidos = [];
  for(var i = 0; i < names.length; i++){
    //console.log("In for: " + names[i].childNodes[0].nodeValue);
    var newPill = [];
    newPill.push(names[i].childNodes[0].nodeValue);
    newPill.push(solves[i].childNodes[0].nodeValue);
    newPill.push(num[i].childNodes[0].nodeValue);
    //console.log(newPill);
    
    comprimidos.push(newPill);
    //console.log(comprimidos);
  }
  return comprimidos;
}



function showMedicine(){

  var comprimidos = getData();
  
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
  
  document.getElementById('showMedicine').innerHTML = result;
  
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