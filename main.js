// write a function called addOne() that takes a number as input and returns a new number that's one more than the input.

function addOne (number) {
	number++;
	return number;
}

console.log(addOne(3));

// write a function called doubleNum() that takes a number as input and returns the double of the number. 

function doubleNum (number) {
	number *= number;
	return number;
}

console.log(doubleNum(4));

// write a function called isNegative(). it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.

function isNegative (number) {
	if (number < 0) {
		return true;
	}
	return false;
}

console.log(isNegative(4));

// modify isNegative() so that it only accepts numerical input. it should return the string, "input must be a number," if bad input has been submitted.

function isNegative (number) {
	if (typeof number === 'string') {
		return 'input must be a number';
	}
	if (number < 0) {
		return true;
	}
	return false;
	
}

console.log(isNegative('hello'));

// write a function called isEven() that tells whether a number is even or not.

function isEven (number) {
	if (number % 2 === 0) {
		return 'even';
	}
	return 'odd';
} 

console.log(isEven(4));

// write a function called isBig() that tells whether a number is greater than 10,000 or not.

function isBig (number) {
	if (number > 10000) {
		return true;
	}
	return false;
}

console.log(isBig(10001));

// write a function called addPeriod(). it should take as input a string, and return a copy of that string with a period on the end. 

function addPeriod (string) {
	return string + '.';
}

console.log(addPeriod('hello world'))

// write a function called sayItTwice(). it should take as input a string ('bubble') and return that string repeated twice, with a space between ('bubble bubble').

function sayItTwice (string) {
	return string + ' ' + string;
}

console.log(sayItTwice('bubble'));

// write a function called firstShallBeLast(). it should add a copy of the first element of a string to the end of the string, then return the result.

function firstShallBeLast (string) {
	return string + string[0];
}

console.log(firstShallBeLast('elephant'))

// write a function called secondToLast(). it should return the second-to-last element of a string or array. 

function secondToLast (string) {
	return string[string.length - 2];
}

console.log(secondToLast('doggie'));

// write a function called hasX(). it should take as input a string, and it should return true if the string contains the character 'x', and false if it does not.

function hasX (string) {
	if (string.indexOf('x') > -1) {
		return true;
	}
	return false;
}

console.log(hasX('exit'));

// write a function called hasEl(). it should take two inputs: a string and a character. it should return true if the string contains the character, and false if it does not. if you get it right, try the function on an array and a potential array element instead. does it still work?

function hasEl(string, char) {
	if (string.indexOf(char) > -1) {
		return true;
	}
	return false;
}

console.log(hasEl('purple', 'v'));

// write a function called incrementEach(). it should take as input an array of numbers and return a new array that contains each number from the input array, increased by one. 

function incrementEach (array) {
	for (var i = 0; i < array.length; i++) {
		array[i] += 1;
	}
	return array;
}

console.log(incrementEach([1, 2, 3]));

// write a function called doubleAll(). it should take as input an array of numbers and return a new array that contains each number from the input array, doubled. 

function doubleAll (array) {
	for (var i = 0; i < array.length; i++) {
		array[i] *= array[i];
	}
	return array;
}

console.log(doubleAll([5, 6, 7]))

// write a function called getFirstLetterCaps(). it should take as input a string, and it should return a capitalized version of the string's first character.

function getFirstLetterCaps (string) {
	return string[0].toUpperCase();
}

console.log(getFirstLetterCaps('what up?!'));

// write a function called capitalizeWord(). it should take as input a string, and return a copy of that string with the first character capitalized. 

function capitalizeWord (string) {
	var newString = string.slice(1);
	return string[0].toUpperCase() + newString; 
}

console.log(capitalizeWord('hello'));

// write a function called capitalizeAllWords(). it should take as input an array of strings, and it should return a new array where all the words have been capitalized. HINT: use your capitalizeWord() function from above. 

function capitalizeAllWords (array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].toUpperCase();
	}
	return array;
} 

console.log(capitalizeAllWords(['hello', 'my', 'name', 'is']))

// write a function called arrayToString(). it should take as input an array, and it should concatenate all of the array's elements into one big string, and then return that string. 

function arrayToString (array) {
	return array.join(' ');
}

console.log(arrayToString(['hello', 'world']));

// write a function called shortiesOnly(). taking as input an array of strings, it should return a new array containing only those strings with fewer than four characters. 

function shortiesOnly (array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i].length < 4) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

console.log(shortiesOnly(['hi', 'my', 'name', 'is', 'WHAT']))

// write a function called reverseIt(). it should take as input a string or array (remember that we can often treat them the same way), and it should return a reversed version of that input. 

function reverseIt (string) {
	var newString = '';
	for (var i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}
	return newString;
};

console.log(reverseIt('hello'))


// write a function called getValue(). it should take two inputs: an object and a key. it should return the corresponding value for that key within the object. keep in mind that this should be a one-line function. no more than two. 

function getValue (object, key) {
	return object[key];
}

console.log(getValue({firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}, 'firstName'))

// write a function called getAllValues(). it should take as input an object, and it should return the values of all the keys in the object. 

function getAllValues (object) {
	var newArray = [];
	for (var key in object) {
		newArray.push(object[key]);
	}
	return newArray;
}

console.log(getAllValues({firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}));

// write a function called addProp(). It should take three inputs: an object, a property name, and a value. It should return the original object, plus a new key-value pair corresponding to the input.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

function addProp (object, key, value) {
	object[key] = value;
}

addProp(person, 'middleName', 'Johnson');

console.log(person);

// write a new version of addProp() that only takes two inputs: an object, and a second object containing a single key-value pair. this key-value pair should take the place of the second and third inputs in the above problem. e.g.:

function addProp2 (object, object2) {
	object = Object.assign(object, object2);
	return object;
};

var newObj = addProp2(person, {favoriteSausage: 'johnsonville'});
console.log(newObj);


	// var usrObj = {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com'}

	// var newObj = addProp(usrObj,{hometown:'new orleans'})
	// newObj should look like this: 
	// {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com',hometown:'new orleans'}
	// if i run:
		// var newObj = addProp(newObj,{hobby:'bullying'})
		// then newObj should contain even more data:
		// {name: 'linus odoyle', age:10, email:'odoylerules@yahoo.com', hometown:'new orleans', hobby:'bullying'}

// write a function called getKeys(). it should take as input an object, and it should return the names of all the keys (properties) of the object.

function getKeys (object) {
	var newArray = [];
	newArray.push(Object.keys(object));
	return newArray;
}

console.log(getKeys(newObj));

// write a function called addPropAll(). it should take three inputs: an array of objects, a property name, and a value. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input. 

function addPropAll (array, key, value) {
	for (var i = 0; i < array.length; i++) {
		array[i][key] = value;
	}
	return array;
}

console.log(addPropAll([{firstName: 'Billy'}, {firstName: 'Bob'},{firstName: 'Joe'},], 'likes', 'butterflies'))

// modify addPropAll() in the same way that you modified addProp above. it should take two inptus, an array of objects and a single object containing a single key-value pair. it should return a new array of objects, where each object has been supplemented with the key-value pair from the input.

function addPropAll2 (array, object) {
	for (var i = 0; i < array.length; i++) {
		array[i] = Object.assign(array[i], object);
	}
	return array;
};

var newPeeps = addPropAll2([{firstName: 'Billy'}, {firstName: 'Bob'},{firstName: 'Joe'},], {loves: 'ballet'});

console.log(newPeeps);

// write a function called logValues() that takes two inputs: an array of objects, and a property name. for each object in the array, it should log the value stored under the given property name within that object. 

function logValues (array, key) {
	for (var i = 0; i < array.length; i++) {
		console.log(array[i][key]);
	}
}

logValues([{firstName: 'Billy'}, {firstName: 'Bob'}, {firstName: 'Joe'}], 'firstName');

// write a function called getSpecificValues() that takes two inputs: an array of objects, and a property name. it should return an array containing the value stored under that property name for each object. for example, getSpecificValues(booksArray,'author') should return an array containing the author of every book object in the array. 

function logValues2 (array, key) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray.push(array[i][key]);
	}
	return newArray;
}

console.log(logValues2([{firstName: 'Billy'}, {firstName: 'Bob'}, {firstName: 'Joe'}], 'firstName'));


