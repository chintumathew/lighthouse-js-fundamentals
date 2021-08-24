/*
program to find the position for perfect shoot
*/

const finalPosition = function(moves){
   let start = [];
   let x_axis = 0, y_axis = 0;
   for (let index = 0; index < moves.length; index++) {
    switch(moves[index]){
      case 'north' : 
                 x_axis = x_axis;
                 y_axis+=1;
                 //console.log(x_axis , y_axis);
                 break;
      case "south" : 
                  x_axis = x_axis;
                  y_axis-=1;   
                  //console.log(x_axis , y_axis);   //continue;
                  break;
      case "west" : 
                  x_axis-=1;
                  y_axis = y_axis;
                  //console.log(x_axis , y_axis);
                  break;
      case "east" : 
                  x_axis+=1;
                  y_axis = y_axis;
                  //console.log(x_axis , y_axis);
                  break;
      }
   }
   start.push(x_axis , y_axis);
   return start;
} 

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
console.log(finalPosition(moves));