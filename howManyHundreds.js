/*
....Program to determine how many containers can be filled and sent....
*
*
*
Given : Given a certain number of bottles,
Condition : Each container on the space ship can hold exactly 100 bottles of maple syrup. 
              A container will only be sent if it's full.

Expected : how many containers can be filled.
*/

function howManyHundreds(noOfBottles){
  let noOfContainers = 0;
  noOfContainers = Math.trunc(noOfBottles / 100) ;       // return how many hundreds fit into that number.
  return noOfContainers;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);