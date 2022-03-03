
/* From html */
const userWord = document.getElementById("my-input").value;

const arrayChar = [];

for(let i = 0; i<userWord.length; i++){
    arrayChar.push(userWord.at(i));
}

console.log(arrayChar);

function checkPali(arrayOfChar){
    for(let i = 0; i<arrayOfChar.length; i++){
        for(let c = arrayOfChar.length -1 ; c < arrayOfChar.length ; c-- ){

            if (arrayOfChar[i] === arrayOfChar[c]){
                return true
            } 
    
            return false;
        }
    }
}

console.log(checkPali(arrayChar));

/* pari o dispari */

let myselect = document.getElementById("my-select");
let choice = myselect.value;

const userNumber = document.getElementById("my-number").value;

const pcNumberPrint = document.getElementById("pc-number-output");


function randomNumber(max,min){
    return(Math.floor(Math.random() * (max - min) - min));
}

function evenOdd(number){
    if((number % 2) == 0){
        return true;
    }

    return false;
}

if((userNumber >= 1) && (userNumber <= 5)){
    const pcNumberValue = randomNumber(5,1);
    pcNumberPrint.innerHTML = (pcNumberValue);
    let sum = userNumber + pcNumberValue;
    evenOdd(sum);

    if((evenOdd == true) && (choice.value == "Pari")){
        document.getElementById("my-score").innerHTML == "Hai vinto";
    } else if ((evenOdd == false) && (choice.value == "Dispari")){

        document.getElementById("my-score").innerHTML ="Hai vinto";
    } else {
        document.getElementById("my-score").innerHTML = "Hai perso";
    }
}