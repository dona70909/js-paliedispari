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

//# play button
const btnCheck = document.getElementById("my-btn-check");
btnCheck.addEventListener("click",function(){

    const userWord = document.getElementById("my-input");
    const arrayChar = [];

    for(let i = 0; i<userWord.value.length; i++){
        arrayChar.push(userWord.value.at(i));
    }

    if(arrayChar.length == 0){
        document.getElementById("my-output-pali").innerHTML = "Campo vuoto";
    } else {
        document.getElementById("my-output-pali").innerHTML = checkPali(arrayChar);
    }
    
});



//#reset button
const btnResetCheck = document.getElementById("my-btn-reset-check");
btnResetCheck.addEventListener("click",function(){
    document.getElementById("my-check-reset").reset();
    document.getElementById("my-output-pali").innerHTML = "Inserisci una parola";
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

//% play button
const btnPlay = document.getElementById("my-btn-play");
btnPlay.addEventListener("click",function(){
    
    let myselect = document.getElementById("my-select");
    let choice = myselect.value;
    
    let userNumber = parseInt(document.getElementById("my-number").value);
    
    let pcNumberPrint = document.getElementById("pc-number-output");
    
    if((userNumber >= 1) && (userNumber <= 5)){
        const pcNumberValue = randomNumber(5,1);
        pcNumberPrint.innerHTML = (pcNumberValue) + "<br>Pc number";
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

//% reset button
const btnReset = document.getElementById("my-btn-reset");
btnReset.addEventListener("click",function(){
    document.getElementById("reset").reset();
    let pcNumberPrint = document.getElementById("pc-number-output");
    pcNumberPrint.value = "";
    pcNumberPrint.innerHTML = "";
    
    document.getElementById("my-score").innerHTML = "Gioca...";
});