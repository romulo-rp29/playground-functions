// Desafio 1
function compareTrue(elementoA, elementoB) {
  if(elementoA === true && elementoB === true) {
    return true
      } else {
        return false
  }
}

// Desafio 2
function calcArea(base, height) {
  if (base > 0 && height > 0) {
    return base*height/2
  }
 }

// Desafio 3
function splitSentence(string) {       //  Nesse caso, o comando split transforma todos os espaços vazios em elementos separadores da string mãe,
  let newArray = string.split(" ")     //  ou seja, separa tudo o que vem antes e depois colocando-os em novas strings dentro da nova array.
    return newArray                    //  Se no local de (" ") colocássemos ("") - no caso sem espaço entre as aspas - resultaria em uma array
}                                      //  em que cada letra e espaço da string original seria um novo elemento dessa array. Aprendi em: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254

// Desafio 4
function concatName(arrayDeStrings) {

return arrayDeStrings[arrayDeStrings.length - 1] + ", " + arrayDeStrings[0]

}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};