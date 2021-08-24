/*   
     function for selecting voting stations
*/

let votingStations = []; 
function chooseStations(stations){
  for (let i = 0; i < stations.length; i++){                   //looping through each station to meet conditions
    if(stations[i][1] >= 20 && (stations[i][2] == 'school' || stations[i][2] == 'community centre')){
        votingStations.push(stations[i][0]);
    }
  }
  return votingStations;                                       //stations that meets conditions
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));