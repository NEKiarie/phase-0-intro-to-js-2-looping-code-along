//The for loop
//for ([initialization]; [condition]; [iteration]) {
       // [loop body]
      //}


// // Code your solutions in this file
// for (let age = 30; age<40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
// }

//Using for with Arrays
// const gifts = ["Teddy bear", "Drone", "Doll"];

// function wrapGifts(gifts){
//     for (let i=0; 1< gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added in a bow!`);

//     }
//     return gifts;
// }
// wrapGifts(gifts);


writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(name, event){
      let thankyou = [];
      for (let a = 0; a < name.length; a++){
            thankyou.push(`Thank you, ${name[a]}, for the wonderful ${event} gift!`)
      }
      return thankyou;
}
function countDown(){
      let count = 10;
      while(count >= 0){
            console.log(count);
            count--

      }
}
