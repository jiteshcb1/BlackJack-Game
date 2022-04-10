let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
//let sumEl = document.querySelector("#sum-el"); // works as same as getElementById but it is more dynamic as we need to specify
//which type of element like ID, Tag or class instead... to selct css classes we use "." DOT infront of the elemnt

function startGame(){
    cardsEl.textContent = "Cards : " + firstCard + " " + secondCard
    sumEl.textContent = "Sum : " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card? "
    }else if(sum = 21){
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game! "
        isAlive = false;
    }
    
    messageEl.textContent = message
}


