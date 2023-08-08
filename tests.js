function capitalize(string){
  let newString;
  newString = string[0].toUpperCase();
  newString += string.substring(1)
  return newString;
}

function reverseString(string){
  let newString = "";
  console.log(string.length)
  for(let i = string.length - 1; i >= 0; i--){
    console.log(string[i]);
    newString += string[i];
  }
  return newString;
}

class Calculator{
  constructor(){
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b){
    return a - b;
  }

  multiply(a, b){
    return a * b;
  }

  divide(a, b){
    return a / b;
  }
}

function caesarCipher(string, factor){
  let newString = "";
  for(let i = 0; i < string.length; i++){
    let curChar = string.charAt(i);
    curChar
    factor
    console.log(isPunctuation(curChar));
    if(!isPunctuation(curChar)){
      console.log(curChar.charCodeAt(curChar))
      newString += shiftLetter(curChar);
    }
    else{
      newString += curChar;
    }
    newString;
  }
  newString
  return newString;

  //Helper functions

  //Shifts letters, making sure they wrap properly,
  //maintain case, and don't become punctuation
  function shiftLetter(char){
    let charCode = char.charCodeAt(char)
    console.log(char)
    console.log(charCode)
    factor
    console.log(charCode + factor)
    //handle lowercase letters
    if(charCode >= 97 && charCode <= 122){
      while(charCode + factor < 97){charCode = charCode + 26}
      while(charCode + factor > 122){charCode = charCode - 26}
      return String.fromCharCode(charCode + factor)
    }

    //handle uppercase letters
    if(charCode >= 65 && charCode <= 90){
      while(charCode + factor < 65){charCode = charCode + 26}
      while(charCode + factor > 90){charCode = charCode - 26}
      return String.fromCharCode(charCode + factor)
    }

    //handle numbers
    if(charCode >= 48 && charCode <= 57){
      while(charCode + factor < 48){charCode = charCode + factor + 10}
      while(charCode + factor > 57){charCode = charCode + factor - 10}
      return String.fromCharCode(charCode + factor)
    }
  }

  //Determines if a character is punctuation.
  function isPunctuation(char){
    if(char == " ") {return true};
    if(char == "!") {return true};
    if(char == "@") {return true};
    if(char == "#") {return true};
    if(char == "$") {return true};
    if(char == "%") {return true};
    if(char == "^") {return true};
    if(char == "&") {return true};
    if(char == "*") {return true};
    if(char == "(") {return true};
    if(char == ")") {return true};
    if(char == ";") {return true};
    if(char == ",") {return true};
    if(char == ".") {return true};
    if(char == "?") {return true};
    if(char == "<") {return true};
    if(char == ">") {return true};
    if(char == "-") {return true};
    if(char == "_") {return true};
    if(char == "+") {return true};
    if(char == "=") {return true};
    return false;
  }
}

caesarCipher("b", -2);

module.exports = {capitalize, reverseString, Calculator, caesarCipher};