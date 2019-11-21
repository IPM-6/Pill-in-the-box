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
  /*var xmlDoc = getXMLFile("data.xml", function(xml){
    console.log(xml);
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xml, "text/xml");
    console.log(xmlDoc);
    return xmlDoc;
  });*/
  
  var xml = '<?xml version="1.0" encoding="UTF-8"?><root><pill><name>Atarax</name><solves>Alergias</solves><num>10</num></pill><pill><name>Ibuprofen</name><solves>Dores</solves><num>5</num></pill><pill><name>Kompensan</name><solves>Azia</solves><num>20</num></pill><pill><name>Nasomet</name><solves>Alergias</solves><num>3</num></pill><pill><name>Omeprazol</name><solves>Dores</solves><num>50</num></pill><pill><name>Telfast</name><solves>Alergias</solves><num>39</num></pill><pill><name>Xanax</name><solves>Ansiedade</solves><num>2</num></pill><pill><name>Zyrtec</name><solves>Alergias</solves><num>23</num></pill></root>';
  console.log(xml);
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xml, "text/xml");
  console.log(xmlDoc);
  
  
  
  var names = xmlDoc.getElementsByTagName("name");
  var solves = xmlDoc.getElementsByTagName("solves");
  var num = xmlDoc.getElementsByTagName("num");
  console.log(names);
  
  var endButton = '<div id="addToStockButton" class="col s12 center-align"><br>';
  endButton += '<a class="btn-floating btn-medium waves-effect waves-light red modal-trigger" href="#stockForm1">';
  endButton += '<i class="material-icons">add</i></a></div>';
  
  var comprimidos = [];
  for(var i = 0; i < names.length; i++){
    console.log("In for: " + names[i].childNodes[0].nodeValue);
    var newPill = [];
    newPill.push(names[i].childNodes[0].nodeValue);
    newPill.push(solves[i].childNodes[0].nodeValue);
    newPill.push(num[i].childNodes[0].nodeValue);
    console.log(newPill);
    
    comprimidos.push(newPill);
    console.log(comprimidos);
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