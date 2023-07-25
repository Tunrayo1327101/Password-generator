const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"
];

let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")

function generateRandomCharacter(){
let randomNum = Math.floor(Math.random() * characters.length)
return characters[randomNum]
}

 function passwords(){
let password1 = ""
  for (let i=1; i < 16; i++) {
let randomChar = generateRandomCharacter()
password1 += randomChar
}
 pass1El.textContent = password1 
 
 let password2 = ""
  for (let i=1; i < 16; i++) {
let randomChar = generateRandomCharacter()
password2 += randomChar
}
pass2El.textContent = password2
}