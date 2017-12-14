
var randomGoalScore = Math.floor(Math.random()*111)+20;
var wins = 0;
var losses = 0;
var turns = 10;
var totalScore = 0;
var crystals = ['ruby','saphire','topaz','emrald'];


ruby = Math.floor(Math.random()*111)+20;

saphire = Math.floor(Math.random()*111)+20;

topaz = Math.floor(Math.random()*111)+20;

emrald = Math.floor(Math.random()*111)+20;


function rubyScore(){
	totalScore + crystals[0];
}
function saphireScore(){
	totalScore + saphire;
}
function topazScore(){
	totalScore + topaz;
}
function emraldScore(){
	totalScore + emrald;
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