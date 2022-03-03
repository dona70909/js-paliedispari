/* prima in console */
/* From html */

const userWord = document.getElementById("my-input").value;

const arrayChar = [];

for(let i = 0; i<userWord.length; i++){
    arrayChar.push(userWord.at(i));
}

console.log(arrayChar);


/* console.log(Array.from(userWord)); */