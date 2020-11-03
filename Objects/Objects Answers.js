// Prompt 1
const car = {
  make : "ford",
  model : "mustang",
  color : "black",
  type : "sedan",
  tires : "firestone",
  mode : "sport",
  gasoline : "super"
 }

 console.log(car)

// Prompt 2
 function Dev(firstName, lastName, age, job) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.job = job;
}

let John = new Dev("John", "Doe", 23, "Software Developer");

console.log(John);

// Prompt 3
delete car.gasoline

// prompt 4
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1))

// prompt 5
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1))

// prompt 6 
car.tints = '33%'
car.carplay = true

// prompt 7 
const car = {
  make : "ford",
  model : "mustang",
  color : "black",
  type : "sedan",
  tires : "firestone",
  mode : "sport",
  gasoline: "super",
  tints:"33%",
  carplay: true,
  startEngine : function(){ 
    console.log('VROOM VROOM');
    engineOn: true
    }
 }
