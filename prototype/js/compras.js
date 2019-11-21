function validateShopForm1() {
  var pillName = document.getElementById("pillNameShop").value;
  var pillAmount = document.getElementById("pillAmountShop").value;
  var pillSymptom = document.getElementById("symptomShop").value;
  var medicReceipt = document.getElementById("receiptShop").checked;
  console.log("Pill Name: " + pillName);
  console.log("Pill Amount: " + pillAmount);
  console.log("Receipt: " + medicReceipt);
  if (pillName == "" || pillAmount == "" || medicReceipt == null || pillSymptom == "") {
    console.log("Gonna alert!");
    alert("Erro: informação necessária não preenchida.");
  } else if (!Number.isInteger(parseFloat(pillAmount))) {
    console.log("pillAmount not int")
    alert("Erro: quantidade de comprimidos deve ser número inteiro!");
  } else {
    console.log("Adding new Pill else!");
    var pillPrice = document.getElementById("pillPriceShop").value;
    if (isNaN(pillPrice)) {
      console.log("price not a number!");
      alert("Erro: preço dos comprimidos deve ser um número!");
    } else {
      console.log("addingNewPillTO SHopping list!")
      this.addNewShopPill(pillName, pillAmount, pillPrice, medicReceipt, pillSymptom);
    }
  }
  this.cleanForm1();
}

function validateShopForm2() {
  console.log("FORM 2 CLOSED MODAL");
  //pillAmountBought
  var amountBought = document.getElementById("pillAmountBought").value;
  if (isNaN(amountBought)) {
    console.log("Amount bought not a number!");
    alert("Erro: quantidade comprada deve ser um número!");
  } else if (!Number.isInteger(parseFloat(amountBought))) {
    console.log("pillAmountBought not int");
    alert("Erro: quantidade comprada deve ser número inteiro!");
  } else {
    //add pills bought to stock
    var totalPillsBought = this.currentPillPerBox * amountBought;
    this.addPillXML(totalPillsBought);
    console.log("Total pills bought: " + totalPillsBought);
    this.deleteShopPill(this.currentPillName);
    console.log("Deleted successfully pill: " + this.currentPillName);
    console.log("Deleted successfully pill amount: " + this.currentPillPerBox);
  }
  this.cleanForm2();
}

function addPillXML(totalPills) {
  var xmlhttp = {};
  var xmlDoc = {};

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  }
  xmlhttp.open("GET", "data.xml", false);
  xmlhttp.send();
  xmlDoc = xmlhttp.responseXML;
  console.log("HELOOOOOOOO");
  console.log(xmlDoc);



}

function cleanForm1() {
  document.getElementById("pillNameShop").value = "";
  document.getElementById("pillAmountShop").value = "";
  document.getElementById("receiptShop").checked = true;
  document.getElementById("pillPriceShop").value = "";
}

function cleanForm2() {
  document.getElementById("pillAmountBought").value = "";
}

var currentPillName = "";
var currentPillPerBox = undefined;
var currentSymptom = "";

function addNewShopPill(pillName, pillAmount, pillPrice, medicReceipt, pillSymptom) {
  var shoppingList = document.getElementById("pillsToShop");
  console.log(shoppingList);
  var pillRow = document.createElement("tr");

  pillRow.setAttribute("pillName", pillName);
  console.log(pillRow);
  var pillCol1 = document.createElement("td");
  var pillCol2 = document.createElement("td");
  var pillCol3 = document.createElement("td");
  var pillCol4 = document.createElement("td");
  pillCol1.innerHTML = pillName;
  if (medicReceipt == false) {
    pillCol2.innerHTML = "Não";
  } else {
    pillCol2.innerHTML = "Sim";
  }
  console.log("Pill price: " + pillPrice);
  console.log(typeof (pillPrice));
  if (pillPrice == "") {
    pillCol3.innerHTML = "-";
  } else {
    pillCol3.innerHTML = pillPrice;
  }

  //row with buttons
  content = '<a class="btn-floating btn-small waves-effect waves-light green modal-trigger" href="#shopForm2"  id="\'' + pillName + '\'"><i class="material-icons">check</i></a>';
  content += '<a class="btn-floating btn-small waves-effect waves-light red" onclick="deleteShopPill(\'' + pillName + '\')"><i class="material-icons">clear</i></a>';
  content += '<a class="btn-floating btn-small waves-effect waves-light black modal-trigger" onclick="editShopPill()"><i class="material-icons">create</i></a>';
  pillCol4.innerHTML = content;

  pillRow.appendChild(pillCol1);
  pillRow.appendChild(pillCol2);
  pillRow.appendChild(pillCol3);
  pillRow.appendChild(pillCol4);

  shoppingList.insertBefore(pillRow, shoppingList.childNodes[0]);

  //buy button event
  button = document.getElementById("'" + pillName + "'");
  console.log("Button added with event:");
  console.log(button);
  button.addEventListener('click', function () {
    setParameters(pillName, pillAmount, pillSymptom);
  });
}

function setParameters(pillName, pillPerBox, pillSymptom) {
  console.log("Changed pill name from, to: " + this.currentPillName + ", " + pillName);
  console.log("Changed pill amount from, to: " + this.currentPillPerBox + ", " + pillPerBox);
  console.log("Changed pill symptom from, to: " + this.currentSymptom + ", " + pillSymptom);
  this.currentPillName = pillName;
  this.currentPillPerBox = pillPerBox;
  this.currentSymptom = pillSymptom;
}

function deleteShopPill(pillName) {
  console.log("Deleted Pill: " + pillName);
  var tableBody = document.getElementById("pillsToShop");
  var children = tableBody.childNodes;
  console.log(children);

  for (child in children) {
    var attributes = children[child].attributes;
    if (attributes != undefined) {
      var name = attributes["pillName"].nodeValue;
      if (name == pillName) {
        //console.log("FOUND GONNA DELETE NOW");
        tableBody.removeChild(children[child]);
        break;
      }
    }
  }
}