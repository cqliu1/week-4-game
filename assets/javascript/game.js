var obiWanKenobi = {
	name: "Obi-Wan Kenobi",
	healthPoints: 120,
	attackPower: 5,
	counterAttackPower: 10,
	img:"http://placehold.it/200x150"
}

var lukeSkywalker = {
	name: "Luke Skywalker",
	healthPoints: 100,
	attackPower: 5,
	counterAttackPower: 10,
	img:"http://placehold.it/200x150"
}

var darthSidious = {
	name: "Darth Sidious",
	healthPoints: 150,
	attackPower: 5,
	counterAttackPower: 10,
	img:"http://placehold.it/200x150"
}

var darthMaul = {
	name: "Darth Maul",
	healthPoints: 100,
	attackPower: 5,
	counterAttackPower: 10,
	img:"http://placehold.it/200x150"
}

var characterSelection = [obiWanKenobi,lukeSkywalker,darthSidious,darthMaul];
var character;
var defender;

$(document).ready(function () {

	function startGame() {
		// reset character selected
		delete character;

		// reset enemies array
		enemies = [];

		$.each(characterSelection, function(index, character) {
			// create a div for each character to display character selection at start of the game
			var newCharacterDiv = $("<div>").addClass("character").attr("id",index);
			newCharacterDiv.append(character.name+"<br>");
			newCharacterDiv.append("<img src='" + character.img + "'><br>");
			newCharacterDiv.append(character.healthPoints);

			$("#characterSelection").append(newCharacterDiv);
		});
	}

	startGame();

	$(".character").on("click", function() {
		if(character === undefined) {
			console.log("picked character");
			//get id of character selected
			var charId = parseInt($(this).attr("id"));

			character = characterSelection[charId];

			$.each(characterSelection, function(index, character) {
				// add unselected characters to enemies array
				if(index !== charId) {
					enemies.push(character);
					$("#"+index).removeClass("character").addClass("defender").appendTo("#defenderArea");
				} else {
					$("#"+index).appendTo("#character");
				}
			});

			// add click event after defender class has been added
			$(".defender").on("click", function() {
				if(defender === undefined) {
					var defenderId = parseInt($(this).attr("id"));
					console.log(this);
					defender = characterSelection[charId];
					$("#"+defenderId).appendTo("#defender");
				}
			});
		}
	});

	$("#attack").on("click", function() {
		
	})
	
});