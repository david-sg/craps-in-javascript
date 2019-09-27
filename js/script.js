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
	gamesPlayed: 0 
};

var gameStart = function (playerName) {
	playerData.name = playerName;
showPlayerInfo();
}

var showPlayerInfo = function () {
document.getElementById('player-info').innerHTML = "";

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
}


//hide areas on load
var hideLoadAreas = function () {
document.getElementById("dice-area").style.visibility = "hidden";
document.getElementById("display-come-out-number").style.visibility = "hidden";
// document.getElementById('win-lose').innerHTML = "";
document.getElementById("win-lose").style.visibility = "hidden";

};




//  get player name input, and validate. If empty ask again...
var nameFunction = function (){

		var input = document.querySelector('#name-input'); 
	var inputValue = input.value;
if (inputValue.replace(/\s+/g, '').length == 0) {
getPlayerName();
} else {
	gameStart(inputValue)

}
}

var getName = function () {
	// empty the area and then display asking for name in info section

	// document.getElementById("info-section").style.visibility = "visible";

	// build the imput and submit button...
	    var infoSection = document.getElementById('info-section');
	    var nameInput = document.createElement('input');
		nameInput.setAttribute('placeholder', "What's your name?");
		nameInput.setAttribute('class', "form-control name-input");
		nameInput.setAttribute('id', "name-input");
		infoSection.appendChild(nameInput);
		document.querySelector('#name-input').addEventListener('change', nameFunction); 


}

getName();


