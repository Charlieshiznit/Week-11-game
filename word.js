var Letter = require('./letter.js');

var Word = function(wrd){
	this.word = wrd;
	this.lets = []; //array to store new letter objects that are passed 
	this.found = false;
	this.getLets = function(){
		for (var i = 0; i < this.word.length; i++){ // iterating over each of the lettters in the 'word' property
			var let = new Letter(this.word.charAt(i));
			this.lets.push(let); // pushing new letter objects to the "lets" array
		}
	}

this.checkIfLetterFound = function(guessLetter){
	whatToReturn = 0;
	for (var i = 0; i < this.lets.length; i++) {
		if (guessLetter === this.lets[i].charac){
			this.lets[i].appear = true;
			whatToReturn = whatToReturn + 1;
		}
	}
	return whatToReturn;
}

this.didWeFindTheWord = function(){
	var str = '';
	for (var i = 0; i < this.lets.length; i++){
		str = str + this.lets[i].letterRender(this.lets[i])
	}
	return str;
	}
}

module.exports = Word;