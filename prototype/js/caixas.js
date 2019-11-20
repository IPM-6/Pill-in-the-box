var user = 1;

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
  var boxName = document.getElementById("boxname");
  
  var pillNames = document.getElementsByClassName("pillnames");
  var numPills = document.getElementsByClassName("numPills");
  
  var dayOfTheWeek = document.getElementsByClassName("dayOfTheWeek");
  
  var selectDayMonth = document.getElementById("selectDayMonth");
  var timeDayMonth = document.getElementById("timeDayMonth");
  
  var timeHourMinute = document.getElementById("timeHourMinute");
  
  var dono = document.getElementsByClassName("dono");
  var notificacao = document.getElementsByClassName("notificacao");
  
  var content = '<div class="row"><div class="col s5 left-align"><h4>';
  content += boxName.value + '</h4></div><div class="col s5 right-align"><h5>';
  for (var i = 0; i < dono.length; i++){
    if(dono[i].checked){
      content += dono[i].value;
    }
  }
  content += '</h5></div><div class="col s2"></div></div><div class="row valign-wrapper">';
  content += '<div class="col s10"><div class="row z-depth-5 center-align">';
  for (var i = 0; i < pillNames.length; i++){
    content += '<div class="col s3"><div class="card"><span class="card-title">';
    content += pillNames[i].value + '</span><div class="card-action">';
    content += '<button class="btn waves-effect grey-text text-darken-4">';
    content += numPills[i].value + '</button></div></div></div>';
  }
  content += '<div class="col s3"><a href="#!" class="waves-effect grey-text text-darken-4">';
  content += '<i class="material-icons large">add</i></a></div></div></div><div class="col s2 center">';
  content += '<div class="row"><a class="grey-text text-darken-4" onclick="addPill()">';
  content += '<i class="material-icons medium">edit</i></a></div><div class="row">';
  content += '<button class="btn waves-effect grey-text text-darken-4">Tomar todos</button>';
  content += '</div><div class="row"><div class="col s6"><span>' + timeHourMinute.value;
  content += '</span></div><div class="col s6"><span>' + timeDayMonth.value + ' ' + selectDayMonth.value;
  content += '</span></div></div></div></div><div class="divider"> </div>';
  
  document.getElementById('caixa').innerHTML += content;
  
  document.getElementById("boxname").value = "";
}

function newPill(){
  var id = new Date;
  console.log(id);
  var content = '<div class="row card">';
  content += '<div class="input-field col s12">';
  content += '<input id="pillname' + id + '" type="text" class="validate pillnames">';
  content += '<label for="pillname' + id + '">Nome do comprimido</label>';
  content += '<span class="helper-text" data-error="Errado" data-success="Certo"></span>';
  content += '</div>';
  content += '<div class="col s12">';
  content += '<div class="col s5">';
  content += '<a class="grey-text text-darken-4 right-align">Quantidade de comprimidos por dia: </a>';
  content += '</div>';
  content += '<div class="col s2 card">';
  content += '<input id="numPill1" class="numPills" type="number" name="quantity" min="1">';
  content += '</div>';
  content += '</div>';
  content += '</div>';
  document.getElementById('addedPills').innerHTML += content;
}

function addPill(){
  
}


function newDono(){
  var newDono = document.getElementById('dononame').value
  var content = document.getElementById('donos').innerHTML;
  console.log(content);
  if(user%3 == 0){
    console.log("if");
    content += '<tr>';
  }else{
    console.log("else");
    content = content.slice(0, -5);
  }
  user += 1;
  console.log(content);
  content += '<td><label>';
  content += '<input id="' + newDono + '" class="donosUser" type="checkbox" checked="checked" value="'
  content += newDono + '"/><span>' + newDono + '</span></label></td></tr>';
  document.getElementById('donos').innerHTML = content;
  document.getElementById('dononame').value = "";
}

function checkUsers(){
  var allUsers = document.getElementsByClassName("donosUser");
  for(var i = 0; i < allUsers.length; i++){
    
  }
}