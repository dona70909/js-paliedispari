//# Check palindroma word
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

const btnCheck = document.getElementById("my-btn-check");
console.log(btnCheck);
btnCheck.addEventListener("click",function(){
    const userWord = document.getElementById("my-input");
    const arrayChar = [];
    for(let i = 0; i<userWord.value.length; i++){
        arrayChar.push(userWord.value.at(i));
    }
    document.getElementById("my-output-pali").innerHTML = checkPali(arrayChar);
});


const btnResetCheck = document.getElementById("my-btn-reset-check");
btnResetCheck.addEventListener("click",function(){
    document.getElementById("my-check-reset").reset();
    document.getElementById("my-output-pali").innerHTML = "inserisci una parola";
});


// % PARI O DISPARI 
function randomNumber(max,min){
    return(Math.floor(Math.random() * max + min));
}

function evenOdd(number){
    if((number % 2) == 0){
        return true;
    }
    
    return false;
}

const btnPlay = document.getElementById("my-btn-play");
btnPlay.addEventListener("click",function(){
    
    let myselect = document.getElementById("my-select");
    let choice = myselect.value;
    
    let userNumber = document.getElementById("my-number").value;
    
    let pcNumberPrint = document.getElementById("pc-number-output");

    if((userNumber >= 1) && (userNumber <= 5)){
        const pcNumberValue = randomNumber(5,1);
        pcNumberPrint.innerHTML = (pcNumberValue) + " <br>";
        pcNumberPrint.innerHTML += " Pc number";
        let sum = userNumber + pcNumberValue;
        evenOdd(sum);
        
        if((evenOdd == true) && (choice.value == "Pari")){
            document.getElementById("my-score").innerHTML == "Hai vinto";
        } else if ((evenOdd == false) && (choice.value == "Dispari")){
            
            document.getElementById("my-score").innerHTML ="Hai vinto";
        } else {
            document.getElementById("my-score").innerHTML = "Hai perso";
        }
    } else {
        document.getElementById("my-score").innerHTML = "Errore inserisci numero <br> tra 1 e 5 ";
    }
    
})

const btnReset = document.getElementById("my-btn-reset");
btnReset.addEventListener("click",function(){
    document.getElementById("reset").reset();
    let pcNumberPrint = document.getElementById("pc-number-output");
    pcNumberPrint.value = "";
    pcNumberPrint.innerHTML = "";

    document.getElementById("my-score").innerHTML = "Gioca...";
});