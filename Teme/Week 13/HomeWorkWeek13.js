//I. scrieti un arrow function care: returneaza daca argumentul trimis este un number par sau impar

const number = (x) => {

  if(x%2 === 0){
  return 'even';
  }else{
  return 'odd'
  }

}

console.log(number(11));
console.log(number(12));

//II. scrieti un arrow function care: primeste un numar necunoscut de parametrii de tip number care returneaza suma lor

let sumNumbers = (...numbers) => {

let sum = 0;

for(var i = 0; i < numbers.length; i++){
	sum = sum + numbers[i];
	}

return sum;

}

console.log(sumNumbers(10,11,12));

//I. Destructurati name

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

const { name } = person;

console.log(name);

//II.  Clonati obiectul person




//I. Destructurare, clonare 

const car = {
  name: 'Toyota',
  settings: {
    color: 'white',
    doors: 5,
  }
};


//1. - Destructurati color si doors.
const { settings:{color} } = car;
const { settings:{doors} } = car;

console.log(color);
console.log(doors);

//2. - Clonati obiectul car
const cloneObj = { ...car};

console.log(cloneObj);

//3. Clonati obiect car, pe care-l mergeuim cu modelYear: 2022 si alte settings - wheels, engine

var model = {
    modelYear: 2022
}

var mergeObj = {model, ...cloneObj};

console.log(mergeObj);

var mergeObjects = {
...model,
...cloneObj,
settings: {
 ...cloneObj.settings,
 wheels: 4,
 engine: 3000
}
}

console.log(mergeObjects);
