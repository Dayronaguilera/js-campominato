// devo creare 16 num random tra 1 e 100!
var output = document.getElementById("result");


// per creare dei numeri random

function getRandomNumber(min, max) {
    var result = Math.floor(Math.random() * max) + min;
    return result;      
}
 
var result = getRandomNumber(1, 100);
var listNumber = [];

while (listNumber.length < 16) {
    if (result !== listNumber) {
        listNumber.push(result);
        
    }
   
}
console.log(listNumber);
