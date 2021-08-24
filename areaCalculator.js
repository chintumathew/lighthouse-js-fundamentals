/*
.
.
.
program to calculate the areas of each of those shapes
.
.

*/

function calculateRectangleArea(length, width){
  let areaOfRectangle = 0;
  if(length > 0 && width > 0){
    areaOfRectangle = length * width; 
    return areaOfRectangle; }         // calculate area :rectangle =length × width
  else{
    return undefined;
  }
}

function calculateTriangleArea(base, height){
  let areaOfTriangle = 0;
  if(base > 0 && height > 0){
    areaOfTriangle = (base * height) / 2;
    return areaOfTriangle; }        // area of triangle: base × height / 2
  else{
    return undefined;
  }
}
function calculateCircleArea(radius){
  let areaOfCircle = 0;
  if(radius > 0){
    areaOfCircle = Math.PI * Math.pow(radius , 2); 
    return areaOfCircle; }        // area of circle = π × radius2
  else{
    return undefined;
  }
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined