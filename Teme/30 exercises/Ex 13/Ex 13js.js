//Write a JavaScript exercise to create a variable using a user-defined name.  

const thisName = 'text';
const m = 120;
this[thisName] = m;
console.log(this[thisName])