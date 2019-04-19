const palindromes = function(word) {
    let wordAsArray = word.toLowerCase()
                            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                            .replace(/\s/g,'')
                            .split('');
	let reversedWordArray = wordAsArray.slice(0).reverse();
	for (let i = 0; i < wordAsArray.length; i++) {
		if (wordAsArray[i] != reversedWordArray[i]) {
			return false
        }
    }
	return true;
}

module.exports = palindromes
