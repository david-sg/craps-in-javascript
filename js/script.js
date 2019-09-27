console.log('start craps game')


window.onload = function() {  
	hideLoadAreas(); 
};


var betDefault = 5;
var playerData = {
	name: null,
	bankroll: 1000,
	wins: 0,
	losses: 0,
	gamesPlayed: 0,
	amountBet:0
};


var gameInitialize = function () {
	// clear the input area
	document.getElementById("name-input").style.display = "none";
	// clear the bets
	document.getElementById("current-bet").innerText = "$"+ playerData.amountBet;
	enableButtons()
} 


var enableButtons = function () {
	// iterate on all bet buttons and enable them...
	const allBetButtons = document.querySelectorAll('.bet');
	for (var i = 0; i <  allBetButtons.length; i++) {
		allBetButtons[i].addEventListener('click', betClicked );
	}
	var rollButton = document.querySelector('#roll-button');
	rollButton.addEventListener('click', rollClicked );
};


var disableButtons = function () {}; 


var betClicked = function (event) {
// clear the warning
	document.getElementById("win-lose").style.display = "none";
	var betValue = event.target.value;
// need YOLO and CLEAR conditionals
	if (betValue === 'clear'){
		playerData.bankroll = playerData.bankroll + playerData.amountBet;
		playerData.amountBet = 0;
		document.getElementById("current-bet").innerText = "$"+ playerData.amountBet;
		showPlayerInfo();
		return true;
	}

	if (betValue === 'yolo'){
			if (playerData.bankroll === 0){
				document.getElementById("win-lose").style.display = "";
				document.getElementById("win-lose").innerText = "Nothing left to YOLO!";
				return true;
			}
		playerData.amountBet = playerData.bankroll + playerData.amountBet;
		playerData.bankroll = 0;
		document.getElementById("current-bet").innerText = "$"+ playerData.amountBet;
		showPlayerInfo();
		return true;
	}

	betValue = Number(betValue);


	//check bank balance
	if (playerData.bankroll + betValue < 0 && betValue > 0) {
	// show them a warning
		document.getElementById("win-lose").style.display = "";
		document.getElementById("win-lose").innerText = "You can not go below your bankroll!";
		return true;
	} 
	// don't allow removal of bets to go negative
	if (playerData.bankroll === 0 && betValue >0){
		document.getElementById("win-lose").style.display = "";
		document.getElementById("win-lose").innerText = "You can't go below your bankroll!";
		return true;
	} 

	// make all amounts deducted end at 0...

	if (betValue  <0 && (playerData.amountBet + betValue) <=0 ){
		betValue = 0;
		playerData.bankroll = playerData.bankroll +playerData.amountBet;
		playerData.amountBet = 0;
		// document.getElementById("win-lose").style.display = "";
		// document.getElementById("win-lose").innerText = "You can not go below your current bet!";
		// return true;
	} 

	playerData.amountBet = playerData.amountBet + betValue;
		// decrease the players bankroll, or increase it up to the amount they have in the current bet
	playerData.bankroll = playerData.bankroll - betValue;
	document.getElementById("current-bet").innerText = "$"+ playerData.amountBet;
	showPlayerInfo();
	return true;
}


var rollClicked = function (event) {
	console.log ('roll clicked')
	var location = event.target.id;
}

var gameStart = function (playerName) {
	showPlayerInfo();
// get a bet
}

var showPlayerInfo = function () {
document.getElementById('player-info').innerHTML = "<h3>Player Info</h3>";

	var ulInput = document.createElement('ul');
	var li = document.createElement("li");
	li.textContent = "Name: " + playerData.name;
	ulInput.appendChild(li);
	li = document.createElement("li");
	li.textContent = "Bankroll: $" + playerData.bankroll;
	ulInput.appendChild(li);
	li = document.createElement("li");
	li.textContent = "Won: $" + playerData.wins;
	ulInput.appendChild(li);
	li = document.createElement("li");
	li.textContent = "Losses: $" + playerData.losses;
	ulInput.appendChild(li);
	li = document.createElement("li");
	li.textContent = "Games Played: " + playerData.gamesPlayed;
	ulInput.appendChild(li);

	var thePlayer = document.getElementById("player-info"); 
	thePlayer.appendChild(ulInput); 
};


//hide areas on load
var hideLoadAreas = function () {
	document.getElementById("display-come-out-number").style.visibility = "hidden";
	document.getElementById("win-lose").style.display = "none";

};



//  get player name input, and validate. If empty ask again...
var nameFunction = function (){
	var input = document.querySelector('#name-input'); 	
	var inputValue = input.value;
	if (inputValue.replace(/\s+/g, '').length == 0) {
		getPlayerName();
		} else {
		playerData.name = inputValue;
		gameInitialize();
		gameStart(inputValue);
		}
}

var getName = function () {
	// build the input and submit button...
    var infoSection = document.getElementById('info-section');
    var nameInput = document.createElement('input');
	nameInput.setAttribute('placeholder', "What's your name?");
	nameInput.setAttribute('class', "form-control name-input");
	nameInput.setAttribute('id', "name-input");
	infoSection.appendChild(nameInput);
	document.querySelector('#name-input').addEventListener('change', nameFunction); 
}

// lets get this started....
getName();


