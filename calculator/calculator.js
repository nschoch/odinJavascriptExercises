function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arrayOfNumbers) {
	return arrayOfNumbers.reduce( (accumulator, currentValue) => accumulator + currentValue,0);
};

function multiply (arrayOfNumbers) {
	return arrayOfNumbers.reduce( (accumulator, currentValue) => accumulator * currentValue);
}

function power(x, y) {
	return x ** y;
}

function factorial(x) {
	if ( x < 0 ) {
		return "ERROR";
	}
	else if ( x === 0 ) {
		return 1
	}
	else {
		let total = 1;
		for (let i = 1; i <= x; i++) {
			total = total * i;
			console.log(total, i);
		}
		return total;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}