var user = 1;

function selectAll() {
  var x = document.getElementsByClassName("donosUser");
  for (var i = 0; i < x.length; i++) {
    x[i].checked = "checked";
    verifyUserCheckBox(x[i].value);
  }
}

function deselectAll() {
  var x = document.getElementsByClassName("donosUser");
  for (var i = 0; i < x.length; i++) {
    x[i].checked = "";
    verifyUserCheckBox(x[i].value);
  }
}

function addBox() {
  var boxName = document.getElementById("boxname");

  var pillNames = document.getElementsByClassName("pillnames");
  var numPills = document.getElementsByClassName("numPills");

  var dayOfTheWeek = document.getElementsByClassName("dayOfTheWeek");

  var selectDayMonth = document.getElementById("selectDayMonth");
  var timeDayMonth = document.getElementById("timeDayMonth");

  var timeHourMinute = document.getElementById("timeHourMinute");

  var dono = document.getElementsByClassName("dono");
  var notificacao = document.getElementsByClassName("notificacao");

  var trueDono = "";
  for (var i = 0; i < dono.length; i++) {
    if (dono[i].checked) {
      trueDono = dono[i].value;
    }
  }
  var content = '<div id="' + boxName.value + ' ' + trueDono + '" class="' + trueDono + '">';
  content += '<div class="row"><div class="col s5 left-align"><h4>';
  content += boxName.value + '</h4></div><div class="col s5 right-align"><h5>';
  content += trueDono;
  content += '</h5></div><div class="col s2"></div></div><div class="row valign-wrapper">';
  content += '<div class="col s10"><div class="row z-depth-5 center-align">';
  for (var i = 0; i < pillNames.length; i++) {
    content += '<div class="col s3"><div class="card"><span class="card-title">';
    content += pillNames[i].value + '</span><div class="card-action">';
    content += '<button id="' + pillNames[i].value + ' ' + numPills[i].value;
    content += '" class="pillsInBox btn waves-effect grey-text text-darken-4"';
    content += ' value="' + pillNames[i].value + ' ' + numPills[i].value;
    var pillName = "'" + pillNames[i].value + "'";
    content += '" onclick="boxTakePill(' + pillName + ', ' + numPills[i].value + ')">';
    content += numPills[i].value + '</button></div></div></div>';
  }
  content += '<div class="col s3"><a href="#modal3" class="modal-trigger waves-effect grey-text text-darken-4" onclick="editBox(' + "'" + boxName.value + ' ' + trueDono + "'" + ')">';
  content += '<i class="material-icons medium">edit</i></a></div></div></div><div class="col s2 center">';
  content += '<div class="row"><a class="waves-effect grey-text text-darken-4" onclick="deleteBox(' + "'" + boxName.value + ' ' + trueDono + "'" + ')">';
  content += '<i class="material-icons medium">cancel</i></a></div><div class="row">';
  content += '<button class="btn waves-effect grey-text text-darken-4">Tomar todos</button>';
  content += '</div><div class="row"><div class="col s6"><span>' + timeHourMinute.value;
  if (selectDayMonth.value != "indefinidamente")
    content += '</span></div><div class="col s6"><span>' + timeDayMonth.value + ' ' + selectDayMonth.value;
  else
    content += '</span></div><div class="col s6"><span>' + selectDayMonth.value;
  content += '</span></div></div></div></div></div><div class="divider"> </div>';

  document.getElementById('caixa').innerHTML += content;
}


function editBox(id) {

  addPill();
  deleteBox(id);

  var caixa = document.getElementById(id);

  console.log();

  document.getElementById("boxname").value = caixa.childNodes[0].childNodes[0].childNodes[0].childNodes[0].nodeValue;
  document.getElementById("boxname").classList.add("active");
  //console.log(document.getElementById("boxname"));

  var seperate = caixa.childNodes[1].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].nodeValue.split(" ");
  if (seperate.length > 1) {
    document.getElementById("timeDayMonth").value = seperate[0];
    if (seperate[1] == "dias") {
      document.getElementById('selectDayMonth').getElementsByTagName('option')[0].removeAttribute("selected");
      document.getElementById('selectDayMonth').getElementsByTagName('option')[1].selected = 'selected';
      document.getElementById('selectDayMonth').getElementsByTagName('option')[2].removeAttribute("selected");
    } else {
      document.getElementById('selectDayMonth').getElementsByTagName('option')[0].removeAttribute("selected");
      document.getElementById('selectDayMonth').getElementsByTagName('option')[1].removeAttribute("selected");
      document.getElementById('selectDayMonth').getElementsByTagName('option')[2].selected = 'selected';
    }
  } else {
    document.getElementById('selectDayMonth').getElementsByTagName('option')[0].selected = 'selected'
    document.getElementById('selectDayMonth').getElementsByTagName('option')[1].removeAttribute("selected");
    document.getElementById('selectDayMonth').getElementsByTagName('option')[2].removeAttribute("selected");
  }


  document.getElementById("timeHourMinute").value = caixa.childNodes[1].childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0].nodeValue;
  document.getElementById("timeHourMinute").classList.add("active");

}

function deleteBox(id) {
  document.getElementById(id).classList.add("hide");
}


function newPill() {
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

function addPill() {
  document.getElementById("boxname").value = "";
  document.getElementById("timeHourMinute").value = "";
  document.getElementById("timeDayMonth").value = "";
  document.getElementById("addedPills").innerHTML = '<div class="row card"><div class="input-field col s12"><input id="pillname1" type="text" class="validate pillnames"><label for="pillname1">Nome do comprimido</label><span class="helper-text" data-error="Errado" data-success="Certo"></span></div><div class="col s12"><div class="col s5"><a class="grey-text text-darken-4 right-align">Quantidade de comprimidos por dia: </a></div><div class="col s2 card"><input id="numPill1" class="numPills" type="number" name="quantity" min="1"></div></div></div>';
}


function newDono() {
  var newDono = document.getElementById('dononame').value;
  var content = document.getElementById('donos').innerHTML;
  if (user % 3 == 0) {
    content += '<tr>';
  } else {
    content = content.slice(0, -5);
  }
  user += 1;
  content += '<td><label>';
  content += '<input id="' + newDono + '" class="donosUser" type="checkbox" checked="checked" value="'
  content += newDono + '"  onclick="verifyUserCheckBox(' + "'" + newDono + "'" + ')"/>';
  content += '<span>' + newDono + '</span></label></td></tr>';
  document.getElementById('donos').innerHTML = content;
  document.getElementById('dononame').value = "";
  checkUsers();
}

function checkUsers() {
  var allUsers = document.getElementsByClassName("donosUser");
  var content = "";
  console.log(allUsers);
  for (var i = 0; i < allUsers.length; i++) {
    console.log(allUsers[i].value);
    content += '<div class="col s3"><label>';
    if (i == 0)
      content += '<input class="dono" name="group1" type="radio" checked value="' + allUsers[i].value + '" />';
    else
      content += '<input class="dono" name="group1" type="radio" value="' + allUsers[i].value + '" />';
    content += '<span>' + allUsers[i].value + '</span></label></div>';
  }
  document.getElementById('possibleUsers').innerHTML = content;
}



function verifyUserCheckBox(User) {
  var checkUser = document.getElementById(User);
  var boxes = document.getElementsByClassName(User);
  console.log(checkUser.checked);
  if (checkUser.checked) {
    for (var i = 0; i < boxes.length; i++) {
      document.getElementsByClassName(User)[i].classList.remove("hide");
    }
  } else {
    for (var i = 0; i < boxes.length; i++) {
      document.getElementsByClassName(User)[i].classList.add("hide");
    }
  }

}