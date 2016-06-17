var cardOne = "queen";
var cardTwo = "queen";

var cardThree = "king";
var cardFour = "king";

/*
if (cardTwo === cardFour || cardOne === cardTwo || cardThree === cardFour) {
 alert ("You found a match!");
  
} else {
  alert ("Sorry, try again.");
}
*/


function createBoard () {
  
var boardDiv = document.getElementById("game-board");
  
var cards = 4;

 for(var i = 0; i < cards; i++){ 
        var myDiv = document.createElement("div");
        myDiv.className = "card";
        boardDiv.appendChild(myDiv);
   
    }

}




whichElem = document.getElementById("cards");

whichElem.onclick = createBoard;