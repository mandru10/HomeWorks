// Creati cate 2 exemple pentru mostenire si compozitie folosindu-va de domeniul vostru de activitate sau unul preferat. (puteti folosi orice referinta).

//mostenire

function employee(){
  console.log(this.name, this.age, this.genre);
}

function dentalTechnician(details){
  const { name, age, genre } = details;
  this.name = name;
  this.age = age;
  this.genre = genre;
  employee.call(this);
}

let firstTechnician = new dentalTechnician({
  name: 'Andrei',
  age: 20,
  genre: 'Male',
});


//compozitie

dentalTechnician.prototype.startWork = function () {};
dentalTechnician.prototype.stopWork = function () {};
dentalTechnician.prototype.goHome = function () {};


//cate o functie care primeste cate un parametru: integer, string, object, array, callback

const objectParam = {
  name: 'Andrei',
  age: 20,
  weight: 78,
  height: 1.70,
};
const stringParam = 'string';
const integerParam = 2;
const arrayParam = [1, 2, 3];

const fnAcceptsParams = (parameter) => parameter;

console.log(fnAcceptsParams(integerParam));
console.log(fnAcceptsParams(stringParam));
console.log(fnAcceptsParams(objectParam));
console.log(fnAcceptsParams(arrayParam));

//callback

const callBackFn = () => console.log('execute callback');

const fnAcceptsCallback = (callback) => {
  callback();
}

fnAcceptsCallback(callBackFn);

//O functie care accepta un numar nedefinit de argumente care returneaza suma lor

const compute = (...arp) => {
  let sum = 0

  for (let i = 0; i < arp.length; i++){
    sum = sum + arp[i];
  }

  return (sum);
}

console.log(compute(100, 1000, 200));

//cateva exemple si cu combinatii, unde trimiteti mai multi parametrii de mai multe tipuri

const str = 'Andrei';
const numb = 10;
const arr = [1,1,222];

const functionParams = (parameter) => parameter;

console.log(functionParams(str + numb + arr));
console.log(functionParams(str + " " + numb));
console.log(functionParams(arr + " " + numb));
console.log(functionParams(arr + " " + 10 + " " + numb));

//o functie care accepta un boolean si retuneaza un promise, resolve  cu o valoare daca booleanul este true si rejected daca este false cu alta valoare, 
//prindeti ce returneaza functia si afisati cu console.log valoarea

const functionBool = (param) => {

new Promise((resolve, reject) => {
  if(param === true){
    resolve(console.log('It is true'))
  }else{
    reject(console.log('It is false'))
  } 

  })
}

functionBool(true);