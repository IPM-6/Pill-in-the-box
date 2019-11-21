var getXMLFile = function(path, callback){
  var request = new XMLHttpRequest();
  request.open("GET", path);
  request.setRequestHeader("Content-Type", "text/xml");
  request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200){
      callback(request.responseXML);
    }
  };
  request.send();
};

function getData(){
  return getXMLFile("data.xml", function(xml){
    console.log(xml);
    return xml;
  });
}



function showMedicine(){
  //var ifrm = document.getElementById('stockIFrame');
  //ifrm.open();
  //ifrm.write('fuck');
  //ifrm.close();
  var xmlDoc = getXMLFile("data.xml", function(xml){
    console.log(xml);
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xml, "text/xml");
    console.log(xmlDoc);
    return xmlDoc;
  });
  console.log(xmlDoc);
  
  
  
  var pills = xmlDoc.getElementsByTagName("pill");
  
  var endButton = '<div id="addToStockButton" class="col s12 center-align"><br>';
  endButton += '<a class="btn-floating btn-medium waves-effect waves-light red modal-trigger" href="#stockForm1">';
  endButton += '<i class="material-icons">add</i></a></div>';
  
  var comprimidos = [];
  for(var i = 0; i < pills.lenght; i++){
    var newPill = [];
    newPill.push(pills[i].childNodes[0].nodeValue);
    newPill.push(pills[i].childNodes[1].nodeValue);
    newPill.push(pills[i].childNodes[2].nodeValue);
    comprimidos.push(newPill);
  }
  
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