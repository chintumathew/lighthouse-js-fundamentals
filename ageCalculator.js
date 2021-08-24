/*
   program to find the current age of a person

*/

function ageCalculator(name , yearOfBirth ,currentYear){
  let age = 0;
  age = currentYear - yearOfBirth;                           // calculate current age
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));        
console.log(ageCalculator("Ferdinand", 1988, 2015));