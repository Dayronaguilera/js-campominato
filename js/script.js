// devo creare 16 num random tra 1 e 100!
var output = document.getElementById("result");
var output2 = document.getElementById("result2");
var output3 = document.getElementById("result3");

// per creare dei numeri random
function getRandomNumber(min, max) {

    // farmi spiegare questo!
    return Math.floor(Math.random() * (max - min + 1) + min);
         
}

// array number inizialmente vuoto!
var listNumber = [];

// inserisci all'interno del array per 16 volte!
while (listNumber.length < 16) { // deve essere 16
    //genera x 16 volte un numero random!
    var result = getRandomNumber(1, 100); // deve essere 100

    // controla che il numero nn sia  presente nel array!
    if (!listNumber.includes(result)) {

        //se il num nn e presente pushalo!
        listNumber.push(result);  
    } 
}
output.innerHTML ="I numeri del pc sono: " + listNumber + "</br>";

//numero inserito dal utente con prompt!
var listUserNumb = [];
var score = 0;
var flag = false;

while (listUserNumb.length < 2) {

    //chiedi al utente per 84 volte un numero!
    var userNumb = parseInt(prompt("inserisci un un numero da 1 a 100"));
    
    // controla che il numero nn sia  presente nel array del pc!
    if (!listUserNumb.includes(userNumb)) {

        // controlla che il num nn sia presente nel array del pc
        if (listNumber.includes(userNumb)) {
            flag = true;
            break;
    
        }else {
            listUserNumb.push(userNumb);
            score += 1
        }
       
    }else {
        alert("inserisci un'altro numero");   
    }
}
if (!flag) {
    output3.innerHTML = "Bravo hai vinto!";
} else {
    output3.innerHTML = "Spiacente hai perso ritenta ancora!";
}

output2.innerHTML = "I numeri del utente sono: " + listUserNumb + "</br>" + "il tuo score è: " + score + "punti";
