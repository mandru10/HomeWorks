//Write a JavaScript program to change the capitalization of all letters in a given string.  

const capitalLetters = (string) => {
  string = string.split(" ");

  for (let i = 0, x = string.length; i < x; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
  }

  return string.join(" ");
};

console.log(capitalLetters("This is my last exercise"));