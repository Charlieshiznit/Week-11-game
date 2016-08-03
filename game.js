//This file with randomly select a word(character) from the below array to be required in the main game
exports.game = {
	words: ['scorpion','raiden','liu kang','reptile','johnny cage','sonya blade','goro','kano','shang tsung','jax','sub zero']
	randomCharacter : function(wordsArray) {
		var mortalKombat1 = wordsArray[Math.floor(math.random() * wordsArray.length)];
		return mortalKombat1;
	}
};