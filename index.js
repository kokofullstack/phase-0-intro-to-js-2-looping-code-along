// Code your solutions in this file
/*for (let age =30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
    }
    return gifts; 
}

wrapGifts(gifts);
*/

const names =["Guadalupe", "Ollie","Aki"];
const events = ["surprise"]
const messages = [];
function writeCards(names, events){    
    for (let i = 0; i < names.length; i ++){
        let message =  `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
        messages.push(message);
    } 
    return messages;
}

function countDown(number){
    while (number >= 0){
        console.log(number);
            number --;    }
}

