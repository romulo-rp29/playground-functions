// Desafio 1
function compareTrue(elementA, elementB) {
  if(elementA === true && elementB === true) {
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
function concatName(arrayOfStrings) {
  return arrayOfStrings[arrayOfStrings.length - 1] + ", " + arrayOfStrings[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let scoreWins = 3
  let scoreTies = 1
  return scoreWins * wins + scoreTies * ties
}

// Desafio 6
function highestCount() {


}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  var cat1Position = Math.abs(cat1 - mouse);
  var cat2Position = Math.abs(cat2 - mouse);

    if (cat1Position == 3 && cat2Position == 2){
      return "cat2"
      }
    if (cat1Position == 6 && cat2Position == 12){
      return "cat1"
      }
      if (cat1Position ==  cat2Position){
        return "os gatos trombam e o rato foge"
      }
}

// Desafio 8
function fizzBuzz(arrayFather) {
  let array = [];
  for (let i = 0; i < arrayFather.length; i++) {
    
    var item = arrayFather[i];

    if (item%3 === 0 && item%5 === 0) {
      array.push("fizzBuzz")
    } else if (item%3 === 0) {
      array.push("fizz");
    } else if (item%5 === 0) {
      array.push("buzz")
    } else {
      array.push("bug!");
    }
  }
  return array;
}

// Desafio 9
function encode(stringFather) {
  let string = "";

  for (let i = 0; i < stringFather.length; i++) {
    
    if (stringFather[i] == "a") {
      string += "1"
    }
    else if (stringFather[i] === "e") {
      string += "2"
    }
    else if (stringFather[i] === "i") {
      string += "3"
    }
    else if (stringFather[i] === "o") {
      string += "4"
    }
    else if (stringFather[i] === "u") {
      string += "5"
    } else {
      string += stringFather[i]
    }
  }
  return string;
}
function decode(stringFather) {
  let string = "";

  for (let i = 0; i < stringFather.length; i++) {
    
    if (stringFather[i] == "1") {
      string += "a"
    }
    else if (stringFather[i] === "2") {
      string += "e"
    }
    else if (stringFather[i] === "3") {
      string += "i"
    }
    else if (stringFather[i] === "4") {
      string += "o"
    }
    else if (stringFather[i] === "5") {
      string += "u"
    } else {
      string += stringFather[i]
    }
  }
  return string;
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