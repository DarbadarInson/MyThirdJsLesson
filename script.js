let x = myFunction(4, 3);

function myFunction(a, b) {
  return a * b;
}
console.log(myFunction)


function toCelsius1(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius1(77);
console.log(toCelsius1)



function myCar1() {
    let carName = "Volvo";
  }
console.log(myCar1)


function myCar2() {
    let carName = "Volvo";
    return carName;
}

console.log(myCar2());


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person)


const person1 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person1)











