var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("What is the Capital of Texas?", "austin");
var card2 = new BasicCard("What is the only neighboring Country to Texas?", "mexico"); 

cards.push(card1);
cards.push(card2);


function studyCards() {
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("correct");
						cardCount ++
						studyCards();
					} 
					else {
						console.log("incorrect");
						console.log("BACK READS:  " + cards[cardCount].back);
						cardCount ++
						studyCards();
					}

				});

	}


}

studyCards();