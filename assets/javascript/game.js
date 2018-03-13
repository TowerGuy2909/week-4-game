
var randomGoalScore = Math.floor(Math.random()*111)+20;
var wins = 0;
var losses = 0;
var turns = 10;
var totalScore = 0;
var crystals = ['ruby','saphire','topaz','emrald'];
var newScore = 0;
var playerScore = 0;

function crystalValue(){
	for(var i = 0; i < crystals.length; i++){
		crystals[i] = Math.floor(Math.random()*111)+20;
		console.log(crystals[i]);
	}
}

$("btn1").click(function() {
	console.log("this is printing");
	
});
console.log("testin addition " + (playerScore = newScore + ruby) );
console.log("newScore equals " + newScore);
console.log("totalScore equals " + totalScore);
console.log("playerScore equals " + playerScore);

function saphireScore(){
	totalScore + crystals[1];
}
function topazScore(){
	totalScore + crystals[2];
}
function emraldScore(){
	totalScore + crystals[3];
}

function turnCounter(){
	if(totalScore < randomGoalScore){
		turns = turns--;
	}else if(totalScore > randomGoalScore){
		document.write('You Lose');
	}else {
		document.write('You Win!');
	}
}
function gemClick(index){
	var v = crystals[index];
	alert(v);
}

$().ready(function(){
	$("#targetScore").text(randomGoalScore);
	
	// for (i = 0; i < crystals.length; i++);{
	// 	crystals[i] = Math.floor(Math.random()*12)+1;
	// }
});