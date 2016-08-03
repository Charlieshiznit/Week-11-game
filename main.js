var Word = require('./word');
var game = require('./game');
var prompt = require('prompt');

prompt.start(); // to start the prompt npm for user input

//get character from array in game.js
var mortalKombat1 = game.game.words;
var character = game.game.randomWord(mortalKombat1);

console.log('Here is my Mortal Kombat 1 node hangman game');
// creates a new random character by loading the above variable into the below function
var word = new Word(character);

//now create an object containing the entire game
 var mkHangman = {
 	guessesRemaining : 10,
 	currentWrd : null,
 	startGame : function(){
 		var wordIndex = Math.floor(Math.random() * (5-1) + 1);
 		var word = new Word(this.words[wordIndex]);//Creating a new word object that is passed into the index of the randomly chosen character
 		this.currentWrd = word;
 		this.currentWrd.getLets();
 		this.keepPromptingUser();
 	},
 keepPromptingUser : function(){
 	var self = this; //maintain scope withing prompt npm?
 	prompt.get(['guessLetter'], function(err, result){ // get a letter from the user
 		console.log('The letter you guessed is' + result.guessLetter);
 		var numberOfGuesses = self.currentWrd.checkIfLetterFound(result.guessLetter);
 			if (numberOfGuesses === 0) {
 				console.log('Wrong Guess!');
 				self.guessesRemaining -=1;
 			}else{
 				console.log('Good Guess!')
 				if (self.currentWrd.didWeFindTheWord() === true){
 					console.log(' You Won FOOL!');
 					return 1;
 				}else{
 					console.log('numberOfGuesses: ' + self.numberOfGuesses);
 					console.log(self.currentWrd.wordRender());
 				}
 			}
 			if (self.numberOfGuesses > 0 && self.currentWrd.found === false){
 				self.keepPromptingUser();
 	}
 	else if (self.numberOfGuesses === 0) {
 		console.log('Game Finished');
 		console.log('The word was ' + self.currentWrd.word);
 	}else{
 		console.log(self.currentWrd.wordRender());
 		}
 	});
	}
 };

 game.startGame();