var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1-number2;
};

var divide = function(number1, number2) {
  return number1/number2;
}
var multy = function(number1, number2) {
  return number1* number2;
}


var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multy(number1, number2);
alert(result);

var degreesF = prompt("What is the temp in degrees F?");

function tempConvert(degreesF) {
  return alert("The temperature is " +(degreesF-32)*(5/9)) + "degrees Celsius.");
}

tempConvert(degreesF);


