
var alphabets = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";


// This example returns a random integer between the specified values. 
// The value is no lower than min (or the next integer greater than min if min isn't an integer),
// and is less than (but not equal to) max.
function random(min,max){
	return Math.floor(Math.random() * (max - min)) + min;
};

function generateAlphabeticalString(min,max){
	var msg = "";
	for (var i = 0; i < random(min,max); i++) {
		msg += alphabets[random(0,25)]; // 25 is the number of alphabets from a-z
	}
	return msg;
};

function generateInteger(min,max){
	var msg = "";
	for (var i = 0; i < random(min,max); i++) {
		msg += numbers[random(0,9)]; //numbers 0-9
	}
	return msg;
};

function generateRealNumbers(min,max,dec){
		var dec = Math.floor((Math.random()*dec)+1);
		return ((Math.random()*(max-min)+1).toFixed(dec));; //number of decimal
};

function generateAlphaNumericString(min,max){
	var a = generateAlphabeticalString(0,19);
	var b = generateInteger(0,19);

	var position = random(0,19);
	var msg = [a.slice(0, position), b, a.slice(position)].join('');

	return msg;
}

function generateRandomSpaces() {
	var spaceCount = random(1,6);

	var result;
	switch (spaceCount) {
		case 1:
			result = " ";
			break;
		case 2:
			result = "  ";
			break;
		case 3:
			result = "   ";
			break;
		case 4:
			result = "    ";
			break;
		case 5:
			result = "     ";
			break;	
	}
	return result;
}

function generateRandomDataType(){
	var min = 0;
	var max = random(10,50);
	var dec = random(0,5);

	var generateWhatNow = random(0, 4);

	var result;
	switch (generateWhatNow) {
		case 0:
			result = generateAlphabeticalString(min,max);
			break;
		case 1:
			result = generateInteger(min,max);
			break;
		case 2:
			result = generateRealNumbers(min,max,dec);
			break;
		case 3:
			result = generateRandomSpaces() + generateAlphaNumericString(min,max) + generateRandomSpaces();
			break;
	}
	if (result.trim()===""){
		result = generateRandomDataType();
	}
	return result + ", ";
}

function generateRandomParagraph() {
	var paragraph = "";
	for (var i = 0; i < 10000; i++) {
		paragraph = paragraph + generateRandomDataType() ;
	}

	return paragraph;
}

function detectType(str){
str = str.trim();
var value = true;
		switch(value){
			case (/[a-z]/.test(str) && /[0-9]/.test(str)): //regex to check contains alphabets and number
			return str + ' - alphanumrical strings' + '\n';
			break; 
			case /[a-z]/.test(str): //regex to check contains alphabets
			return  str + ' - alphabetical strings' + '\n';
			break;
			case (str % 1==0): // to check whole number
			return  str + ' - integer' +'\n';
			break;
			case (str % 1 != 0 ): // to check to real numbers
			return str + ' - real numbers' + '\n';
			break;
			default:
			return str;
		}
	
}

function generatedetectType(){
	var str = generateRandomParagraph().split(',');
	for (var i = 0; i < str.length; i++) {
		console.log(detectType(str[i]));
	}
	return str;
}



document.getElementById("paragraph").innerHTML = generateRandomParagraph();

// document.write("<pre>"+generatedetectType()+"</pre>"); 
