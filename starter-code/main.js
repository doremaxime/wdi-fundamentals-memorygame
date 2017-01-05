var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var cards =["queen", "queen", "king", "king"];
var cardsInPlay = [];
var gameBoard = document.getElementById('game-board');

var createBoard = function(){
	for(var i = 0; i <= 3; i++){
	var newCard = document.createElement('div');  
	newCard.className = 'card';  
	newCard.setAttribute('data-card', cards[i]);
	newCard.addEventListener('click', isTwoCards);
	gameBoard.appendChild(newCard);
	}
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="/Users/max/fundamentals/wdi-fundamentals-memorygame/starter-code/my_king.png" width="150px" alt="King of Spades">';
	} else { this.innerHTML = '<img src="/Users/max/fundamentals/wdi-fundamentals-memorygame/starter-code/my_queen.png" width="150px" alt="Queen of Clubs">';
	}
  	if (cardsInPlay.length === 2) {
    	isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

function isMatch(cards) {
 	if (cardsInPlay[0] === cardsInPlay[1]) {
    	alert("You found a match!");
 	} else {
    	alert("Sorry, try again.");
 	}
};

createBoard();