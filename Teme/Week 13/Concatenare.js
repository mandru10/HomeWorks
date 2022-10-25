// - concatenati in interiorul divului urmatoarele variabile:

var paragraph1 = "<p>My paragraph 1</p>";
var paragraph2 = "<p>My paragraph 2</p>";
var paragraph3 = "<p>My paragraph 3</p>";


var divId = 'div-container' + ' ' + paragraph1 + ' ' + paragraph2 + ' ' + paragraph3

console.log(divId);

// - adaugati variabila divId ca atribut ID in divul de mai jos

var divId = 'div-container';

var div = "<div id=" + divId + "><div>";


// - adaugati variabila divClassName ca atribut class in divul de mai jos

var divClassName = "container";

var div = "<div class=" + divClassName + "><div>";

//---------------------

// Concatenati si afisati urmatoarele:

// - 1 si '2'
console.log(1 + ' ' + '2');
// - '2' si 1
console.log('2' + ' ' + 1);
// - 1 si '' - concatenati 1 cu un string gol
console.log(1 + ' ') 
