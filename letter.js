//Letter.js and word.js will  be constructor files
//letter.js will control whether or not a letter appears as a "_" or as itself

function Letter(let) { 
	this.charac = let; //storing the letter in a variable
	this.appear = false;
	this.letterRender = function(){
		if(this.appear === false){
			return "_"; // the line
		}else{
			return this.charc; // the letter
		}
	};
};

module.exports = Letter;