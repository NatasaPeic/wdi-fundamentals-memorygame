
/*
Declare a variable, cards, whose value is an Array that consists of four String elements: queen, queen, king, king.
*/

var cards = ["queen", "queen", "king", "king"];

/*
Declare a variable, cardsInPlay, whose value is an empty array.
*/

var cardsInPlay =[];




function createBoard () {
  
var boardDiv = document.getElementById("game-board");
  

 for(var i = 0; i < cards.length; i++){ 
        var myDiv = document.createElement("div");
        myDiv.className = "card";
   
/*
Once we created cards, and assign class to them, we need to set an attribute for each card that will be the element of the array. 
That attribute will be equal to the card value. We want to have matching pair key-value. 
*/
   
        myDiv.setAttribute("data-card", cards[i]);
   

/*
We want to add event listener to each card too, so we can check if two cards are in play or not. 
Once the user click it, isTwoCards function will be triggered to check if two cards are in the play.
*/
   
       myDiv.addEventListener("click", isTwoCards);
   
        boardDiv.appendChild(myDiv);   
    }
}


/*
Create a function called isMatch to test if two cards in play are a match. 
Hint: We can then configure our previous game logic code to access the cards!
*/

function isMatch(cards) {
  
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}




function isTwoCards() {
 

 /*
 We are going to getAttribute that we added when creating createBoard function, and assign it to the cardsInPlay array.
 */

  cardsInPlay.push(this.getAttribute("data-card"));
  
/*
If that attribute is equal to value king or qeen, display images.
*/

  if (this.getAttribute("data-card") === "king") {
    this.innerHTML = "<img src='hearts-king.png'>";
  

  } else {
    this.innerHTML = "<img src='hearts-queen.png'>"; 
  }
  
  
/*
Check if you have 2 cards to play. And check if they are a match.
*/
  if (cardsInPlay.length === 2) {
    
/*
If there is a match, execute function isMatch that passes one paramteter, and that is cardsInPlay array.
*/

    isMatch(cardsInPlay);
    
/*
Clear cardsInPlay array for next try
*/
    
    cardsInPlay = [];
  }
}

  


/*
Adding button for cards to show.
*/


whichElem = document.getElementById("cards");

whichElem.onclick = createBoard;