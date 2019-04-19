
const wrapIndex = (askedIndex, maxIndex) => (askedIndex % maxIndex + maxIndex) % maxIndex;

const caesar = (message, shift) => {
    const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                           'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                           'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C','D','E',
                            'F','G','H','I','J','K','L','M','N','O','P','Q',
                            'R','S','T','U','V','W','X','Y','Z'];

    let messageArray = message.split('');
    let newMessageArray = messageArray.map( letter => {
        //if -1 ignore
        if (alphabetArray.findIndex(x => x === letter) === -1) {
            return letter;
        }
        else {
            return alphabetArray[wrapIndex(alphabetArray.findIndex(x => x === letter) + shift, alphabetArray.length)]
        }
    });

    return newMessageArray.join('');
}

module.exports = caesar
