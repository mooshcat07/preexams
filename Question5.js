let timeOfTheDay;
const date = new Date();

console.log(date.getHours());

// using if condition
if(date.getHours() < 12){
    timeOfTheDay = 'Morning';
} else if(date.getHours() == 12){
    timeOfTheDay = 'Afternoon';
} else{
    timeOfTheDay = 'Evening';
}

console.log(`good ${timeOfTheDay} user`)

//using switch

// switch(date.getHours()){
//     case 
// }