
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

